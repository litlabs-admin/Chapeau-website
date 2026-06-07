/**
 * How We Work content — lifted from the Copy Deck. Two process phases
 * (before / post-sale) share the same step shape, plus the three working
 * principles ("what it feels like to work with Chapeau").
 */

export type ProcessStep = {
  title: string;
  body: string[];
  /** Optional named sub-documents (e.g. strategy document / live plan). */
  points?: { label: string; text: string }[];
  /** A short, punchy pull-line shown as the step's emphasis. */
  pull?: string;
};

export const howWeWorkHero = {
  eyebrow: "How We Work",
  title: "A clear process for strategy, marketing, AI and delivery.",
  intro:
    "We work with growing businesses that need more than advice. The shape of the work can change, but the way we work stays clear: understand the problem, set the direction, build what is needed and keep the work moving.",
};

export const beforeWork = {
  eyebrow: "Before we work together",
  heading: "We start with the problem, not the pitch.",
  steps: [
    {
      title: "Start with the problem",
      body: [
        "We begin with a conversation about what you are trying to change.",
        "That might be growth, visibility, lead quality, campaign activity, internal process, AI adoption, customer experience or a tool you want to build.",
      ],
      pull: "The first job is not to sell you a service. The first job is to understand what needs to move.",
    },
    {
      title: "Check the fit",
      body: [
        "Chapeau works best when there is a real business problem, a clear owner and a willingness to act. We are not the right fit for every brief.",
        "If the problem is unclear, we help sharpen it. If the timing is wrong, we say that. If the work needs a different kind of support, we point you in the right direction.",
      ],
    },
    {
      title: "Shape the scope",
      body: [
        "Once the problem is clear, we decide the best route. That could be a Build Sprint, a Growth Retainer or an AI Build Lab project.",
      ],
      pull: "The scope should make sense for the business, not just for us.",
    },
    {
      title: "Agree the next step",
      body: [
        "Before anything starts, you know what is being delivered, who is involved, how communication will work and what the first phase is designed to achieve.",
        "Then we move into discovery, strategy and delivery.",
      ],
    },
  ] satisfies ProcessStep[],
};

export const postSale = {
  eyebrow: "How we work post-sale",
  heading: "Inside the work, from discovery to momentum.",
  steps: [
    {
      title: "Full discovery and account manager assigned",
      body: [
        "We start by understanding where you are today, how you got here and what you have already built. That matters.",
        "Before we look at what needs to change, we tip our hat to the work already done, the progress already made and the parts of the business that are already working.",
        "Then we get into the detail. What is working. What is not. Where growth is being blocked. Where the process is unclear. Where the work is being guessed.",
        "This is the first proper working session after the agreement is in place. Your account manager is assigned. The senior people involved in strategy and delivery are in the room.",
        "We ask the right questions, challenge assumptions and build a clear picture of what needs solved.",
      ],
      pull: "No proper discovery, no deployment.",
    },
    {
      title: "Strategy and briefing",
      body: [
        "Once the challenge is clear, Chapeau sets the direction. We agree the strategy, define the commercial priorities and set the OKRs that will guide the work.",
        "Not everything we try will work first time. That is part of the job. The point is to build from commercial reality, not assumptions.",
      ],
      points: [
        {
          label: "The strategy document",
          text: "Sets the direction for the agreed period. It should not change every week.",
        },
        {
          label: "The live plan",
          text: "The working plan. It adapts as we learn what is working, what is not and where the better opportunities are.",
        },
      ],
      pull: "Clear direction comes before deployment.",
    },
    {
      title: "Communication and delivery",
      body: [
        "Once the direction is agreed, we set the work in motion. You are added to the right communication channel, usually Slack or the agreed working space. Your account manager keeps the work visible, organised and moving.",
        "The strategy gives us the direction. The live plan gives us the route. We stay aligned to the OKRs, but we do not treat the plan like stone. We test, learn and adjust based on what is actually happening in the business.",
        "This applies whether we are delivering campaigns, building assets, improving CRM, designing automations, creating AI tools or shaping a product workflow.",
      ],
    },
    {
      title: "Build, test and optimise",
      body: [
        "This is where the work starts becoming visible. We create the pages, campaigns, templates, ads, workflows, tools, systems or assets needed to support the strategy.",
        "Then we test them properly. We look for the message that lands, the process that saves time, the workflow people actually use, the campaign that creates the right response and the system that makes the work easier to repeat.",
      ],
      pull: "The aim is not just to hand over deliverables. The aim is to build better ways of working into the business.",
    },
    {
      title: "Measure, support and continue",
      body: [
        "Growth takes time. Some results appear quickly. Some need repetition, testing and patience before the return is clear.",
        "This is where Chapeau should feel different. You are not handed a plan and left to figure it out. The work is account managed. Communication stays live. We stay close to the delivery, the decisions and the friction.",
        "If something needs changed, we change it. If something needs more time, we say that. If something is working, we double down.",
        "By the end of the first phase, your business should be stronger than when we started. The systems are clearer. The direction is set. The team knows where the work is going.",
        "From there, you can continue with us, move into a new phase or take the work forward internally.",
      ],
      pull: "Clearer direction, better systems and work that is easier to keep moving.",
    },
  ] satisfies ProcessStep[],
};

export const principles = {
  eyebrow: "What it feels like to work with Chapeau",
  heading: "Cared-for work, kept visible.",
  items: [
    {
      title: "Clear priorities",
      body: "We do not create work to look busy. The work should always have a point — a page to launch, a campaign to test, a system to improve, a workflow to simplify, a decision to make clearer. Every action connects back to the strategy, the commercial priorities and the thing we are trying to improve.",
    },
    {
      title: "Work you can see",
      body: "You should not have to chase for updates or wonder what is happening. The work lives somewhere visible. The next actions are clear. Decisions are named. Progress is easy to follow. If something is blocked, you know why. If something has changed, you know what changed. If something needs your input, you know what we need from you.",
    },
    {
      title: "Inside the work",
      body: "Chapeau is not built around distant advice. We get into the work with you — shaping strategy, building a campaign, improving a workflow, setting up CRM, creating content, designing an automation or helping turn an idea into a usable tool. We lead from inside the work, supported by designers, engineers, marketers and builders who can make things real. The work changes depending on the problem. Our mission to enable you stays in focus.",
    },
  ],
};
