/**
 * Falling Objects
 * 2D physics simulation where child components fall, bounce, and can be dragged.
 * Uses Matter.js for physics — objects are DOM elements positioned via CSS transforms.
 * Children keep their own size and styling.
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 800
 * @framerIntrinsicHeight 600
 */
import {
    jsx as _jsx
} from "react/jsx-runtime";
import * as React from "react";
import {
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import {
    addPropertyControls,
    ControlType,
    useIsStaticRenderer
} from "framer";
const componentInstanceControlType = ControlType.ComponentInstance ? ? "ComponentInstance"; // --- CDN config ---
const SCRIPTS = {
    matter: "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"
};
const RESIZE_DEBOUNCE_MS = 300; // --- Utilities ---
function loadScript(src, timeoutMs = 1e4) {
    return new Promise((resolve, reject) => {
        if (typeof document === "undefined") {
            reject(new Error(`No document available for ${src}`));
            return;
        }
        let timeoutId;
        const finish = fn => {
            if (timeoutId !== undefined) window.clearTimeout(timeoutId);
            fn();
        };
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            const status = existing.dataset.status;
            if (status === "loaded") {
                resolve();
                return;
            }
            if (status === "error") {
                existing.remove();
            } else {
                existing.addEventListener("load", () => finish(() => resolve()), {
                    once: true
                });
                existing.addEventListener("error", () => finish(() => reject(new Error(`Failed to load ${src}`))), {
                    once: true
                });
                timeoutId = window.setTimeout(() => {
                    reject(new Error(`Timed out loading ${src}`));
                }, timeoutMs);
                return;
            }
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.status = "loading";
        script.onload = () => {
            script.dataset.status = "loaded";
            finish(() => resolve());
        };
        script.onerror = () => {
            script.dataset.status = "error";
            finish(() => reject(new Error(`Failed to load ${src}`)));
        };
        document.head.appendChild(script);
        timeoutId = window.setTimeout(() => {
            script.dataset.status = "error";
            reject(new Error(`Timed out loading ${src}`));
        }, timeoutMs);
    });
} // --- Hooks ---
function useReducedMotion() {
    const [reducedMotion, setReducedMotion] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const onChange = event => {
            setReducedMotion(event.matches);
        };
        if (typeof mq.addEventListener === "function") {
            mq.addEventListener("change", onChange);
            return () => mq.removeEventListener("change", onChange);
        }
        mq.addListener(onChange);
        return () => mq.removeListener(onChange);
    }, []);
    return reducedMotion;
} // --- Component ---
function FallingObjects({
    children,
    gravity = 1,
    bounciness = .5,
    friction = .3,
    spawnDelay = 200
}) {
    const isStatic = useIsStaticRenderer();
    const reducedMotion = useReducedMotion();
    const containerRef = useRef(null);
    const engineRef = useRef(null);
    const runnerRef = useRef(null);
    const bodiesRef = useRef([]);
    const itemEls = useRef([]);
    const rafRef = useRef(0);
    const spawnTimersRef = useRef([]);
    const resizeTimerRef = useRef(undefined);
    const pointerBodyRef = useRef(null);
    const [engineReady, setEngineReady] = useState(false);
    const [resizeKey, setResizeKey] = useState(0);
    const childNodes = useMemo(() => {
        return React.Children.toArray(children).filter(child => child != null);
    }, [children]);
    const childCount = childNodes.length; // Load Matter.js from CDN
    useEffect(() => {
        if (isStatic) return;
        let mounted = true;
        const init = async () => {
            try {
                if (!window.Matter) await loadScript(SCRIPTS.matter);
                if (mounted) setEngineReady(true);
            } catch {
                if (mounted) setEngineReady(false);
            }
        };
        init();
        return () => {
            mounted = false;
        };
    }, [isStatic]); // ResizeObserver to trigger reinit
    useEffect(() => {
        const container = containerRef.current;
        if (!container || isStatic) return;
        let skipFirst = true;
        const ro = new ResizeObserver(() => {
            if (skipFirst) {
                skipFirst = false;
                return;
            }
            clearTimeout(resizeTimerRef.current);
            resizeTimerRef.current = setTimeout(() => {
                setResizeKey(prev => prev + 1);
            }, RESIZE_DEBOUNCE_MS);
        });
        ro.observe(container);
        return () => {
            ro.disconnect();
            clearTimeout(resizeTimerRef.current);
        };
    }, [isStatic]); // Main physics initialization — deferred by one frame so children have final layout
    useEffect(() => {
        if (isStatic || reducedMotion || !engineReady || childCount === 0) return;
        const M = window.Matter;
        if (!M) return;
        const container = containerRef.current;
        if (!container) return;
        let cancelled = false;
        let cleanupFn = null; // Wait one frame for children to finish layout before measuring
        const initFrame = requestAnimationFrame(() => {
            if (cancelled) return;
            const rect = container.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            if (width === 0 || height === 0) return; // Measure each child's actual size
            const sizes = [];
            for (let i = 0; i < childCount; i++) {
                const el = itemEls.current[i];
                if (!el) return;
                const r = el.getBoundingClientRect();
                sizes.push({
                    w: Math.max(r.width, 20),
                    h: Math.max(r.height, 20)
                });
            }
            const {
                Engine,
                Runner,
                Bodies,
                Composite,
                Body
            } = M; // Create engine
            const engine = Engine.create({
                gravity: {
                    x: 0,
                    y: gravity
                }
            });
            engineRef.current = engine; // Create walls (bottom, left, right — no top)
            const wallThickness = 60;
            const walls = [ // Bottom
                Bodies.rectangle(width / 2, height + wallThickness / 2, width + wallThickness * 2, wallThickness, {
                    isStatic: true,
                    render: {
                        visible: false
                    }
                }), // Left
                Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
                    isStatic: true,
                    render: {
                        visible: false
                    }
                }), // Right
                Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
                    isStatic: true,
                    render: {
                        visible: false
                    }
                })
            ];
            Composite.add(engine.world, walls); // Create a static pointer body for mouse interaction
            const pointerBody = Bodies.circle(0, 0, 1, {
                isStatic: true,
                render: {
                    visible: false
                }
            });
            pointerBodyRef.current = pointerBody; // Spawn bodies with stagger, each using its own measured size
            const bodies = [];
            let spawnedCount = 0;
            const spawnOne = () => {
                if (spawnedCount >= childCount) return;
                const {
                    w,
                    h
                } = sizes[spawnedCount];
                const x = w / 2 + Math.random() * Math.max(0, width - w);
                const y = -h - Math.random() * h;
                const body = Bodies.rectangle(x, y, w, h, {
                    angle: (Math.random() - .5) * Math.PI * .5,
                    restitution: bounciness,
                    friction: friction,
                    frictionAir: .01,
                    render: {
                        visible: false
                    }
                });
                bodies.push(body);
                bodiesRef.current = bodies;
                Composite.add(engine.world, body);
                spawnedCount++;
                if (spawnedCount < childCount) {
                    const timer = setTimeout(spawnOne, spawnDelay);
                    spawnTimersRef.current.push(timer);
                }
            };
            spawnOne(); // Dragging via pointer constraint
            let dragConstraint = null;
            let isDragging = false;
            const getPointerPos = e => {
                const r = container.getBoundingClientRect();
                return {
                    x: e.clientX - r.left,
                    y: e.clientY - r.top
                };
            };
            const onPointerDown = e => {
                const pos = getPointerPos(e);
                const allBodies = bodiesRef.current;
                const found = M.Query.point(allBodies, pos);
                if (found.length > 0) {
                    const target = found[0];
                    isDragging = true;
                    Body.setPosition(pointerBody, pos);
                    Composite.add(engine.world, pointerBody);
                    dragConstraint = M.Constraint.create({
                        bodyA: pointerBody,
                        bodyB: target,
                        pointB: {
                            x: pos.x - target.position.x,
                            y: pos.y - target.position.y
                        },
                        stiffness: .2,
                        damping: .1,
                        render: {
                            visible: false
                        }
                    });
                    Composite.add(engine.world, dragConstraint);
                    container.setPointerCapture(e.pointerId);
                    container.style.cursor = "grabbing";
                    e.preventDefault();
                }
            };
            const onPointerMove = e => {
                if (!isDragging || !dragConstraint) return;
                const pos = getPointerPos(e);
                Body.setPosition(pointerBody, pos);
            };
            const onPointerUp = () => {
                if (dragConstraint) {
                    Composite.remove(engine.world, dragConstraint);
                    dragConstraint = null;
                }
                if (Composite.allBodies(engine.world).includes(pointerBody)) {
                    Composite.remove(engine.world, pointerBody);
                }
                isDragging = false;
                container.style.cursor = "grab";
            };
            container.addEventListener("pointerdown", onPointerDown);
            container.addEventListener("pointermove", onPointerMove);
            container.addEventListener("pointerup", onPointerUp);
            container.addEventListener("pointercancel", onPointerUp); // Start engine
            const runner = Runner.create();
            Runner.run(runner, engine);
            runnerRef.current = runner; // RAF loop to sync DOM to physics — each child uses its own size
            const tick = () => {
                const currentBodies = bodiesRef.current;
                for (let i = 0; i < currentBodies.length; i++) {
                    const el = itemEls.current[i];
                    if (!el) continue;
                    const body = currentBodies[i];
                    const {
                        w,
                        h
                    } = sizes[i];
                    const bx = body.position.x - w / 2;
                    const by = body.position.y - h / 2;
                    el.style.transform = `translate3d(${bx}px, ${by}px, 0) rotate(${body.angle}rad)`;
                    el.style.opacity = "1";
                }
                rafRef.current = requestAnimationFrame(tick);
            };
            rafRef.current = requestAnimationFrame(tick);
            cleanupFn = () => {
                cancelAnimationFrame(rafRef.current);
                spawnTimersRef.current.forEach(clearTimeout);
                spawnTimersRef.current = [];
                container.removeEventListener("pointerdown", onPointerDown);
                container.removeEventListener("pointermove", onPointerMove);
                container.removeEventListener("pointerup", onPointerUp);
                container.removeEventListener("pointercancel", onPointerUp);
                if (dragConstraint) {
                    try {
                        Composite.remove(engine.world, dragConstraint);
                    } catch {}
                }
                if (runnerRef.current) {
                    Runner.stop(runnerRef.current);
                    runnerRef.current = null;
                }
                Composite.clear(engine.world, false);
                Engine.clear(engine);
                engineRef.current = null;
                bodiesRef.current = [];
                pointerBodyRef.current = null;
            };
        });
        return () => {
            cancelled = true;
            cancelAnimationFrame(initFrame);
            if (cleanupFn) cleanupFn();
        };
    }, [isStatic, reducedMotion, engineReady, childCount, gravity, bounciness, friction, spawnDelay, resizeKey]); // --- Static / reduced motion fallback ---
    if (isStatic || reducedMotion) {
        if (childNodes.length === 0) {
            return /*#__PURE__*/ _jsx("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    border: "1px dashed rgba(0,0,0,0.25)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(0,0,0,0.5)",
                    fontSize: 14
                },
                children: "Add objects to Falling Objects"
            });
        }
        return /*#__PURE__*/ _jsx("div", {
            style: {
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-end",
                justifyContent: "center",
                gap: 12,
                padding: 16
            },
            children: childNodes.map((child, i) => /*#__PURE__*/ _jsx("div", {
                style: {
                    transform: `rotate(${i*137.5%30-15}deg)`
                },
                children: child
            }, i))
        });
    } // --- Empty state ---
    if (childNodes.length === 0) {
        return /*#__PURE__*/ _jsx("div", {
            style: {
                width: "100%",
                height: "100%",
                border: "1px dashed rgba(0,0,0,0.25)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(0,0,0,0.5)",
                fontSize: 14
            },
            children: "Add objects to Falling Objects"
        });
    } // --- Live render ---
    return /*#__PURE__*/ _jsx("div", {
        ref: containerRef,
        style: {
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            touchAction: "none",
            cursor: "grab"
        },
        "aria-label": "Interactive falling objects animation",
        children: childNodes.map((child, i) => /*#__PURE__*/ _jsx("div", {
            ref: el => {
                itemEls.current[i] = el;
            },
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                willChange: "transform",
                pointerEvents: "none",
                userSelect: "none"
            },
            children: child
        }, i))
    });
} // --- Property Controls ---
addPropertyControls(FallingObjects, {
    children: {
        type: ControlType.Array,
        title: "Objects",
        maxCount: 30,
        control: {
            type: componentInstanceControlType
        }
    },
    gravity: {
        type: ControlType.Number,
        title: "Gravity",
        min: .1,
        max: 5,
        step: .1,
        defaultValue: 1
    },
    bounciness: {
        type: ControlType.Number,
        title: "Bounciness",
        min: 0,
        max: 1,
        step: .05,
        defaultValue: .5
    },
    friction: {
        type: ControlType.Number,
        title: "Friction",
        min: 0,
        max: 1,
        step: .05,
        defaultValue: .3
    },
    spawnDelay: {
        type: ControlType.Number,
        title: "Spawn Delay",
        min: 0,
        max: 2e3,
        step: 50,
        unit: "ms",
        displayStepper: true,
        defaultValue: 200
    }
});
FallingObjects.displayName = "Falling Objects";
export default FallingObjects;
export const __FramerMetadata__ = {
    "exports": {
        "default": {
            "type": "reactComponent",
            "name": "FallingObjects",
            "slots": ["children"],
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}
//# sourceMappingURL=./FallingObject.map