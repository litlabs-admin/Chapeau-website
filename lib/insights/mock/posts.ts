import type { RawPost } from "@/lib/insights/repository";

/**
 * Mock data, shaped exactly like the Airtable records the repository will
 * eventually fetch (see the field mapping in lib/insights/types.ts). When
 * Airtable is wired in, this file is deleted and `repository.ts` fetches the
 * same shape over the network — no other file changes.
 */
export const mockPosts: RawPost[] = [
  {
    slug: "where-ai-actually-saves-time-in-a-marketing-team",
    title: "Where AI actually saves time in a marketing team",
    excerpt:
      "Most AI pilots stall because they target the wrong task. Here are the four places we consistently see hours come back — and the two where it costs more than it saves.",
    categoryLabel: "AI in Practice",
    publishedAt: "2026-09-01",
    readMinutes: 6,
    heroImageSrc: "/media/insights/ai-in-hand.jpg",
    heroImageAlt: "A hand reaching towards a glowing, translucent AI interface panel in a dark room.",
    featured: true,
    authorName: "Vandan Mandloi",
    authorRole: "Founder, Chapeau",
    status: "Published",
    seoTitle: "Where AI actually saves time in a marketing team",
    seoDescription:
      "The four tasks where AI reliably saves a marketing team hours each week, the two where it quietly costs more than it saves, and how to run a two-week test.",
    body: [
      { type: "heading", text: "Start with the task, not the tool", id: "start-with-the-task-not-the-tool" },
      {
        type: "p",
        text: "Most AI conversations start with a tool — a new model, a new plug-in, a demo someone saw on LinkedIn. That's backwards. The teams who actually get hours back start with a task that is repetitive, well-defined, and currently done by a person with better things to do, and only then go looking for something to point at it.",
      },
      {
        type: "p",
        text: "That reframing matters because it changes what you measure. \"Are we using AI\" is not a useful question. \"Did this task get faster without getting worse\" is.",
      },
      { type: "heading", text: "The four jobs where it pays off", id: "the-four-jobs-where-it-pays-off" },
      {
        type: "list",
        items: [
          "First-draft copy — ad variants, email subject lines, social captions — where a human still edits before anything ships.",
          "Research summarising — turning a pile of competitor pages, reviews, or call transcripts into a structured brief.",
          "Reporting narration — translating a dashboard into the two or three sentences a stakeholder actually reads.",
          "Internal search — finding the right brand guideline, past campaign, or client note buried in a shared drive.",
        ],
      },
      {
        type: "quote",
        text: "The wins are boring. Nobody has ever built a case study around \"we now find the right file 40% faster,\" but that's where the hours actually go.",
        attribution: "From a client debrief, June 2026",
      },
      { type: "heading", text: "Where it quietly costs you", id: "where-it-quietly-costs-you" },
      {
        type: "p",
        text: "Two jobs consistently cost more than they save once you account for review time: anything client-facing that goes out without a human read, and strategic judgement calls — positioning, pricing, which client to prioritise. The output reads confidently either way, which is exactly the problem. Confidence is not the same as being right.",
      },
      { type: "heading", text: "How to run a two-week test", id: "how-to-run-a-two-week-test" },
      {
        type: "callout",
        title: "Before you start",
        text: "Pick one task from the list above. Time it manually for a week first, including review time. Then run the AI-assisted version for two weeks and time that too, including every correction. If it isn't faster once review is included, it isn't a win yet — tune the prompt or drop it.",
      },
      { type: "heading", text: "What to measure", id: "what-to-measure" },
      {
        type: "p",
        text: "Total time including review, not just generation time. Error rate on the first pass. And whether the person doing the task actually trusts the output enough to use it without re-checking everything — that trust is what determines whether the time saving is real or just moved further down the pipeline.",
      },
      {
        type: "cta",
        text: "Not sure which task to start with?",
        label: "Let's talk",
        href: "/contact",
      },
    ],
    faqs: [],
  },
  {
    slug: "first-90-days-with-a-fractional-marketing-lead",
    title: "What good looks like in the first 90 days with a fractional lead",
    excerpt:
      "Bringing in senior marketing help works when the first three months are structured. This is the shape we use, and the questions worth asking before anyone starts.",
    categoryLabel: "Growth Foundations",
    publishedAt: "2026-08-28",
    readMinutes: 7,
    heroImageSrc: "/media/insights/study-session.jpg",
    heroImageAlt: "A woman reviewing handwritten notes on a tablet beside a laptop during a video call.",
    featured: false,
    authorName: "Vandan Mandloi",
    authorRole: "Founder, Chapeau",
    status: "Published",
    seoTitle: "The first 90 days with a fractional marketing lead",
    seoDescription:
      "The 90-day shape we use when a senior marketing lead joins part-time: what happens in the first month, the fix phase, and the build phase — plus the questions worth asking before anyone signs.",
    body: [
      { type: "heading", text: "Why the first month usually goes wrong", id: "why-the-first-month-usually-goes-wrong" },
      {
        type: "p",
        text: "The most common failure with fractional marketing help isn't skill — it's sequencing. A senior person joins and is immediately asked for a plan, a campaign, a rebrand, before anyone has agreed what \"good\" looks like or where the current numbers actually come from. Three months later there's a lot of activity and no clear line to results.",
      },
      {
        type: "p",
        text: "Structure fixes this. Not a rigid framework — a simple sequence that puts listening before building.",
      },
      { type: "heading", text: "Weeks 1–2: listen and audit", id: "weeks-1-2-listen-and-audit" },
      {
        type: "list",
        ordered: true,
        items: [
          "Sit in on sales calls or read recent transcripts to hear how customers actually describe the problem.",
          "Audit what's live — website, ads, email, socials — against what the numbers say is working.",
          "Map who owns what internally, so week three doesn't stall waiting for someone to approve a Canva login.",
        ],
      },
      { type: "heading", text: "Weeks 3–6: fix the foundations", id: "weeks-3-6-fix-the-foundations" },
      {
        type: "p",
        text: "Not the exciting work, but the work that makes everything after it faster: tightened messaging, a working tracking setup, a content calendar someone actually keeps up. Skipping this stage is the single biggest reason growth work stalls at month four.",
      },
      { type: "heading", text: "Weeks 7–12: build the engine", id: "weeks-7-12-build-the-engine" },
      {
        type: "p",
        text: "Only now does new campaign work start — and it starts against a baseline everyone agrees on, with tracking already in place to tell whether it's working.",
      },
      {
        type: "callout",
        title: "Questions to ask before you sign",
        text: "Who owns delivery day to day? What does the first 30 days actually produce, in writing? What happens if the first quarter doesn't move the numbers you agreed? A good fractional lead will have straightforward answers to all three.",
      },
      { type: "heading", text: "Signals it's working", id: "signals-its-working" },
      {
        type: "p",
        text: "By week twelve you should be able to point to specific decisions that changed because of the work — not just a longer list of things that got shipped. If the honest answer is \"we did more,\" without a clearer answer to \"and here's what changed,\" that's worth raising early rather than at the twelve-month review.",
      },
    ],
    faqs: [
      {
        question: "How many days a month is enough?",
        answer:
          "It depends on stage, but two to four days a month is typical for an early-growth business. What matters more than the day count is whether that time is protected for the work above, rather than absorbed into ad-hoc requests.",
      },
      {
        question: "Who owns delivery?",
        answer:
          "This should be explicit before anyone starts. A fractional lead can direct strategy and manage freelancers or agencies, but someone internal usually needs to own day-to-day execution unless delivery is part of the scope.",
      },
      {
        question: "What if it isn't working?",
        answer:
          "Agree the exit terms at the start, not the review. A short notice period and a clear handover process mean neither side is stuck if the fit isn't right after quarter one.",
      },
    ],
  },
];
