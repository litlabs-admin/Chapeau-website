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
  title: "Our Sales Process",
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
        "We begin with a conversation about what you are trying to change. Every growing business has a different puzzle to solve.",
        "That might be growth, visibility, lead quality, campaign activity, internal process, AI adoption, customer experience or a tool you want to build.",
        "Some need clearer strategy. Some need better marketing. Some need tools, campaigns or systems that actually work.",
        "We help figure out what is needed, shape the direction, build the right things and keep everything moving.",
      ],
      pull: "The first job is not to sell you a service. The first job is to understand your problems, your pains, what matters to you.",
    },
    {
      title: "Check the fit",
      body: [
        "Chapeau works best when there is a real business problem, a clear owner and a willingness to act. We are not the right fit for every brief.",
        "If the problem is unclear, we clarify it. If the timing is wrong, we say that. If the work needs a different kind of support, we point you in the right direction.",
      ],
      pull: 'We try to make our sales process all about you, but really it\'s all about "We". How can we partner together to team up against the problem?',
    },
    {
      title: "Prescribe the cure",
      body: [
        "Once the problem is clear enough, we decide the best route. That could be a Marketing Sprint, a Growth Retainer or an AI Build Lab project.",
      ],
      pull: "The scope should make sense for the business, not just for us.",
    },
    {
      title: "Agree the contract",
      body: [
        "We don't send 10 page proposals, we don't send you free action plans you could generate on GPT. We talk to you, in person, on a call or over the phone.",
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
        "Before we look at what needs to change, we tip our hat to the work already done, the progress already made and the parts of the business that are already working. 🎩",
        "Then we get into the detail. What is working. What is not. Where growth is being blocked. Where the process is unclear. Where activity is being guessed instead of guided.",
        "This is the first proper working session after the agreement is in place. Your account manager is assigned, and the senior people involved in strategy and delivery are in the room.",
        "We ask the right questions, challenge assumptions and build a clear picture of what needs to be solved.",
      ],
      pull: "No proper discovery, no deployment.",
    },
    {
      title: "Strategy and briefing",
      body: [
        "Once we understand the challenge, we agree what needs to happen next.",
        "This is where Chapeau sets the direction for the work. We agree the main priorities, what matters commercially and what we are measuring against.",
        "Not everything will work first time. That is normal. The important thing is that we are not guessing from the outside. We are working from what we have found in discovery, what the business needs and what the market is telling us.",
      ],
      points: [
        {
          label: "The strategy document",
          text: "This sets the direction for the agreed period. It gives the work a clear spine, so the plan does not change every week.",
        },
        {
          label: "The live plan",
          text: "This is the working plan. It changes as we learn what is working, what is not working and where the better opportunities are.",
        },
      ],
      pull: "Clear direction comes before deployment.",
    },
  ] satisfies ProcessStep[],
};

export const principles = {
  eyebrow: "What it feels like to work with Chapeau",
  heading: "Visible progress, properly managed.",
  lead: {
    intro: "When a business brings in outside support, the hidden question is simple.",
    question: "Will this make life easier, or become another thing to manage?",
    answer:
      "Chapeau is built so progress feels clear from the client side. Priorities are agreed. Decisions are named. Delivery is visible. The right people stay close enough to keep momentum without adding noise.",
  },
  items: [
    {
      title: "Priorities that earn their place",
      body: "We do not fill a plan with activity for the sake of it. A landing page, campaign, CRM change, automation, content piece or tool only belongs if it helps the business move. That might mean generating demand, improving conversion, speeding up response, simplifying a process or giving the team better information to act on. Everything has a reason. Everything has an owner. Everything links back to what we agreed. Less scatter. More useful movement.",
    },
    {
      title: "Visibility without the chase",
      body: "You should not have to ask what is happening. You should be able to see what is live, what is next, what is waiting, what has changed and where a decision is needed. If something is blocked, the reason is clear. If we need input, the ask is clear. If direction changes, the thinking is explained. You stay informed without being dragged into every task.",
    },
    {
      title: "Senior judgement close to delivery",
      body: "Good ideas lose value when they are passed too far away from the people building them. At Chapeau, the people shaping the direction stay close to delivery. Campaigns, websites, CRM setups, automations, AI workflows, content systems and commercial plans are not treated as separate bits of activity. They are connected parts of the same growth picture. That means faster decisions, fewer handovers and better use of the experience in the room.",
    },
  ],
  close:
    "The plan changes depending on what the business needs. The standard stays consistent: clear ownership, visible progress, practical delivery and senior judgement close enough to keep things moving. Our mission to enable you stays in focus.",
};
