/**
 * Highlight Marker Text Reveal
 * Cycling text with a colored bar wipe transition
 * Pre/post text stays static while words cycle with a highlight marker effect
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 600
 * @framerIntrinsicHeight 80
 */
import {
    jsx as _jsx,
    jsxs as _jsxs
} from "react/jsx-runtime";
import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react";
import {
    addPropertyControls,
    ControlType,
    useIsStaticRenderer
} from "framer";
import {
    motion
} from "framer-motion"; // For each direction, the bar wipes continuously in that direction:
// cover phase enters from the opposite side, reveal phase exits to the named side
const DIRECTION_CONFIG = {
    right: {
        prop: "scaleX",
        coverOrigin: "left center",
        revealOrigin: "right center"
    },
    left: {
        prop: "scaleX",
        coverOrigin: "right center",
        revealOrigin: "left center"
    },
    down: {
        prop: "scaleY",
        coverOrigin: "center top",
        revealOrigin: "center bottom"
    },
    up: {
        prop: "scaleY",
        coverOrigin: "center bottom",
        revealOrigin: "center top"
    }
};
export default function HighlightMarkerTextReveal(props) {
    const {
        textBefore = "We help you rethink", textAfter = "", words = ["workflows", "handovers", "marketing"], font = {}, textColor = "#000000", marker = {}, animation = {}, as: Tag = "div"
    } = props;
    const {
        color: markerColor = "#C700EF",
        colors: markerColors = []
    } = marker;
    const {
        direction = "right", cycleDuration = 2.5, transitionDuration = .5, barOverflow = .06, appearEffect = false, appearDuration = .8
    } = animation;
    const isStaticRenderer = useIsStaticRenderer();
    const [currentIndex, setCurrentIndex] = useState(0); // When appear effect is on, skip the initial cycling reveal — the appear bar handles it
    const [phase, setPhase] = useState(appearEffect ? "idle" : "reveal");
    const [reducedMotion, setReducedMotion] = useState(false); // Appear effect state
    const containerRef = useRef(null);
    const [hasAppeared, setHasAppeared] = useState(!appearEffect);
    const [isInView, setIsInView] = useState(false); // Width animation
    const textRef = useRef(null);
    const [measuredWidth, setMeasuredWidth] = useState(null);
    const dirConfig = DIRECTION_CONFIG[direction] || DIRECTION_CONFIG.right;
    const safeWords = Array.isArray(words) && words.length > 0 ? words : ["text"]; // Clamp index if words array shrinks (e.g. user removes items in Framer)
    const safeIndex = currentIndex % safeWords.length; // Per-cycle marker color: use markerColors array if provided, else fall back
    const safeMarkerColors = Array.isArray(markerColors) && markerColors.length > 0 ? markerColors : null;
    const activeMarkerColor = safeMarkerColors ? safeMarkerColors[safeIndex % safeMarkerColors.length] : markerColor; // Bar color stays consistent for the entire cover→reveal cycle.
    // During "cover" we're about to reveal the NEXT word, so use its color.
    // During "reveal"/"idle" the index has already advanced, so safeIndex is correct.
    const revealingIndex = phase === "cover" ? (safeIndex + 1) % safeWords.length : safeIndex;
    const barColor = safeMarkerColors ? safeMarkerColors[revealingIndex % safeMarkerColors.length] : markerColor; // Scroll-triggered appear: observe when element enters viewport
    useEffect(() => {
        if (!appearEffect || hasAppeared || isStaticRenderer) return;
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, {
            threshold: .1
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, [appearEffect, hasAppeared, isStaticRenderer]); // Reduced motion check
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = e => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []); // Measure cycling word width for smooth container transitions
    useLayoutEffect(() => {
        if (isStaticRenderer || !textRef.current) return;
        setMeasuredWidth(textRef.current.getBoundingClientRect().width);
    }, [safeIndex, safeWords, isStaticRenderer]); // Idle timer — after holding, start the cover phase
    useEffect(() => {
        if (isStaticRenderer || reducedMotion) return;
        if (phase !== "idle") return;
        if (safeWords.length <= 1) return;
        if (!hasAppeared) return; // wait for appear effect to finish
        const timer = setTimeout(() => setPhase("cover"), cycleDuration * 1e3);
        return () => clearTimeout(timer);
    }, [phase, cycleDuration, safeWords.length, isStaticRenderer, reducedMotion, hasAppeared]); // When direction changes mid-animation, the bar remounts via key={direction}
    // with initial and animate at the same value — no animation fires, so we
    // force-restart from "reveal" to unstick the state machine.
    const prevDirection = useRef(direction);
    useEffect(() => {
        if (prevDirection.current !== direction) {
            prevDirection.current = direction;
            setPhase("reveal");
        }
    }, [direction]);
    const onBarAnimationComplete = () => {
        if (phase === "cover") { // Bar fully covers the word — swap text and start reveal
            setCurrentIndex(prev => (prev + 1) % safeWords.length);
            setPhase("reveal");
        } else if (phase === "reveal") {
            setPhase("idle");
        }
    };
    const fontStyle = { ...font,
        color: textColor,
        margin: 0,
        padding: 0
    };
    const barScale = phase === "cover" ? 1 : 0;
    const barOrigin = phase === "cover" ? dirConfig.coverOrigin : dirConfig.revealOrigin; // power3.inOut equivalent
    const ease = [.65, 0, .35, 1]; // Screen-reader accessible full text
    const srText = [textBefore, safeWords[safeIndex], textAfter].filter(Boolean).join(" ");
    const srOnly = {
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        borderWidth: 0
    };
    if (isStaticRenderer) {
        return /*#__PURE__*/ _jsxs(Tag, {
            style: {
                width: "100%",
                ...fontStyle
            },
            children: [textBefore && /*#__PURE__*/ _jsxs("span", {
                children: [textBefore, " "]
            }), /*#__PURE__*/ _jsxs("span", {
                style: {
                    position: "relative",
                    display: "inline-block"
                },
                children: [ /*#__PURE__*/ _jsx("span", {
                    children: safeWords[0]
                }), /*#__PURE__*/ _jsx("span", {
                    style: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: "55%",
                        backgroundColor: activeMarkerColor,
                        pointerEvents: "none"
                    }
                })]
            }), textAfter && /*#__PURE__*/ _jsxs("span", {
                children: [" ", textAfter]
            })]
        });
    }
    if (reducedMotion) {
        return /*#__PURE__*/ _jsxs(Tag, {
            "aria-live": "polite",
            style: {
                width: "100%",
                ...fontStyle
            },
            children: [textBefore && /*#__PURE__*/ _jsxs("span", {
                children: [textBefore, " "]
            }), /*#__PURE__*/ _jsx("span", {
                children: safeWords[safeIndex]
            }), textAfter && /*#__PURE__*/ _jsxs("span", {
                children: [" ", textAfter]
            })]
        });
    }
    return /*#__PURE__*/ _jsxs(Tag, {
        ref: containerRef,
        style: {
            width: "100%",
            position: "relative",
            ...fontStyle
        },
        children: [appearEffect && !hasAppeared && /*#__PURE__*/ _jsx(motion.span, {
            initial: {
                [dirConfig.prop]: 1
            },
            animate: isInView ? {
                [dirConfig.prop]: 0
            } : {
                [dirConfig.prop]: 1
            },
            transition: {
                duration: appearDuration,
                ease
            },
            onAnimationComplete: () => {
                if (isInView) setHasAppeared(true);
            },
            style: {
                position: "absolute",
                inset: 0,
                backgroundColor: markerColor,
                transformOrigin: dirConfig.revealOrigin,
                pointerEvents: "none",
                zIndex: 2
            }
        }), /*#__PURE__*/ _jsx("span", {
            "aria-live": "polite",
            style: srOnly,
            children: srText
        }), /*#__PURE__*/ _jsxs("span", {
            "aria-hidden": "true",
            children: [textBefore && /*#__PURE__*/ _jsxs("span", {
                children: [textBefore, " "]
            }), /*#__PURE__*/ _jsxs(motion.span, {
                initial: false,
                animate: measuredWidth !== null ? {
                    width: measuredWidth
                } : {},
                transition: {
                    duration: transitionDuration * .7,
                    ease
                },
                style: {
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                    verticalAlign: "bottom",
                    whiteSpace: "nowrap",
                    paddingTop: `${barOverflow}em`,
                    paddingBottom: `${barOverflow}em`,
                    marginTop: `-${barOverflow}em`,
                    marginBottom: `-${barOverflow}em`
                },
                children: [ /*#__PURE__*/ _jsx("span", {
                    ref: textRef,
                    style: {
                        display: "inline-block"
                    },
                    children: safeWords[safeIndex]
                }), /*#__PURE__*/ _jsx(motion.span, {
                    initial: {
                        [dirConfig.prop]: appearEffect ? 0 : 1
                    },
                    animate: {
                        [dirConfig.prop]: barScale
                    },
                    transition: {
                        duration: transitionDuration,
                        ease
                    },
                    onAnimationComplete: onBarAnimationComplete,
                    style: {
                        position: "absolute",
                        inset: 0,
                        backgroundColor: barColor,
                        transformOrigin: barOrigin,
                        pointerEvents: "none",
                        zIndex: 1
                    }
                }, direction)]
            }), textAfter && /*#__PURE__*/ _jsxs("span", {
                children: [" ", textAfter]
            })]
        })]
    });
}
HighlightMarkerTextReveal.displayName = "Highlight Marker Text Reveal";
addPropertyControls(HighlightMarkerTextReveal, {
    textBefore: {
        type: ControlType.String,
        title: "Text Before",
        defaultValue: "We help you rethink"
    },
    words: {
        type: ControlType.Array,
        title: "Words",
        defaultValue: ["workflows", "handovers", "marketing"],
        control: {
            type: ControlType.String
        }
    },
    textAfter: {
        type: ControlType.String,
        title: "Text After",
        defaultValue: ""
    },
    font: {
        type: ControlType.Font,
        title: "Font",
        controls: "extended",
        defaultFontType: "sans-serif",
        defaultValue: {
            fontSize: 48,
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: -1.5
        }
    },
    textColor: {
        type: ControlType.Color,
        title: "Text Color",
        defaultValue: "#000000"
    },
    marker: {
        type: ControlType.Object,
        title: "Marker",
        controls: {
            color: {
                type: ControlType.Color,
                title: "Color",
                defaultValue: "#C700EF",
                hidden: props => {
                    const colors = props ? .marker ? .colors ? ? props ? .colors;
                    return Array.isArray(colors) && colors.length > 0;
                }
            },
            colors: {
                type: ControlType.Array,
                title: "Cycle Colors",
                description: "One color per word. Overrides single color.",
                defaultValue: [],
                control: {
                    type: ControlType.Color
                }
            }
        }
    },
    animation: {
        type: ControlType.Object,
        title: "Animation",
        controls: {
            direction: {
                type: ControlType.Enum,
                title: "Direction",
                options: ["right", "left", "up", "down"],
                optionTitles: ["→", "←", "↑", "↓"],
                defaultValue: "right",
                displaySegmentedControl: true
            },
            cycleDuration: {
                type: ControlType.Number,
                title: "Hold Duration",
                defaultValue: 2.5,
                min: .5,
                max: 10,
                step: .1,
                unit: "s"
            },
            transitionDuration: {
                type: ControlType.Number,
                title: "Transition Speed",
                defaultValue: .5,
                min: .1,
                max: 2,
                step: .05,
                unit: "s"
            },
            barOverflow: {
                type: ControlType.Number,
                title: "Bar Overflow",
                description: "How far the marker extends beyond text.",
                defaultValue: .06,
                min: 0,
                max: .2,
                step: .005,
                unit: "em"
            },
            appearEffect: {
                type: ControlType.Boolean,
                title: "Appear Effect",
                defaultValue: false,
                enabledTitle: "On",
                disabledTitle: "Off"
            },
            appearDuration: {
                type: ControlType.Number,
                title: "Appear Speed",
                defaultValue: .8,
                min: .1,
                max: 3,
                step: .05,
                unit: "s",
                hidden: props => !(props ? .animation ? .appearEffect ? ? props ? .appearEffect)
            }
        }
    },
    as: {
        type: ControlType.Enum,
        title: "HTML Tag",
        options: ["div", "h1", "h2", "h3", "h4", "p"],
        optionTitles: ["div", "H1", "H2", "H3", "H4", "p"],
        defaultValue: "div"
    }
});
export const __FramerMetadata__ = {
    "exports": {
        "default": {
            "type": "reactComponent",
            "name": "HighlightMarkerTextReveal",
            "slots": [],
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}
//# sourceMappingURL=./HighligtMarkerCycle.map