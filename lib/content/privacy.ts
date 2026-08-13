/**
 * Privacy & Cookie Policy content. Structure follows the same ten-section
 * shape used on the Roswell reference site, but every fact here reflects what
 * this Chapeau site actually does — no invented cookies, trackers or
 * suppliers. Update this file (not the page component) when facts change,
 * e.g. once the ICO registration reference comes through.
 */

export const privacyHero = {
  eyebrow: "Legal",
  title: "Privacy & Cookie Policy",
  lastUpdated: "13 August 2026",
  intro:
    "How Chapeau Collective handles your personal information, and the rights you have over it.",
};

export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "rows"; rows: { left: string; right: string }[] }
  | { type: "address" };

export type PolicySection = {
  id: string;
  number: string;
  title: string;
  blocks: PolicyBlock[];
};

export const companyDetails = {
  legalName: "Popcorn Consultants Ltd",
  tradingAs: "Chapeau Collective",
  addressLines: ["1 Minerva Way, 2/2", "Glasgow, G3 8AT"],
  jurisdiction: "Registered in Scotland",
  companyNumber: "SC885108",
  icoReference: "pending",
  email: "vandan.mandloi@chapeaucollective.com",
};

export const policySections: PolicySection[] = [
  {
    id: "who-we-are",
    number: "01",
    title: "Who We Are",
    blocks: [
      {
        type: "p",
        text: "Chapeau Collective (“Chapeau”, “we”, “our” or “us”) is a trading name of Popcorn Consultants Ltd. We are committed to protecting and respecting your privacy. This policy explains what personal information we collect through this website, how we use it, and the rights you have over it.",
      },
      {
        type: "p",
        text: "We act as the data controller for the personal information described in this policy, under UK GDPR and the Data Protection Act 2018.",
      },
      { type: "address" },
    ],
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    blocks: [
      {
        type: "p",
        text: "Information you give us directly, through the contact form on this site:",
      },
      {
        type: "list",
        items: [
          "Your name and business name",
          "Your email address",
          "Your website (optional)",
          "The message you send us, plus which option and contact method you select",
        ],
      },
      {
        type: "p",
        text: "Information collected automatically. Our hosting provider processes standard server logs — including IP address, browser type and requested pages — to operate, secure and troubleshoot the site. We do not run analytics or advertising technology on this site, so nothing beyond these baseline hosting logs is collected as you browse. The one exception is the contact form, which uses Google reCAPTCHA to prevent spam — see section 08 for what that involves.",
      },
      {
        type: "p",
        text: "Information collected if you become a client. If you go on to work with us, we’ll collect further information needed to deliver the agreed services — this is gathered directly from you as part of onboarding and set out in the relevant engagement, not through this website.",
      },
    ],
  },
  {
    id: "how-and-why",
    number: "03",
    title: "How and Why We Use It",
    blocks: [
      {
        type: "rows",
        rows: [
          { left: "Respond to your enquiry", right: "Legitimate interests / pre-contractual steps" },
          { left: "Deliver services you’ve engaged us for", right: "Contract performance" },
          { left: "Protect the website from abuse and spam", right: "Legitimate interests" },
          { left: "Meet legal, accounting or regulatory obligations", right: "Legal obligation" },
        ],
      },
      {
        type: "p",
        text: "We do not sell your personal information, and we do not use it to make automated decisions that produce legal or similarly significant effects for you.",
      },
    ],
  },
  {
    id: "who-we-share-it-with",
    number: "04",
    title: "Who We Share It With",
    blocks: [
      {
        type: "p",
        text: "We use a small number of trusted suppliers to run this site and respond to you. We don’t share your information with anyone for their own marketing purposes.",
      },
      {
        type: "list",
        items: [
          "Resend — delivers contact-form enquiries to our inbox by email",
          "Vercel — hosts this website and processes the server logs described above",
          "Google (reCAPTCHA) — checks that contact-form submissions come from a person, not a bot",
        ],
      },
      {
        type: "p",
        text: "We may also disclose information where required by law, or to establish, exercise or defend legal claims.",
      },
    ],
  },
  {
    id: "international-transfers",
    number: "05",
    title: "International Transfers",
    blocks: [
      {
        type: "p",
        text: "Some of our suppliers, including Resend, Vercel and Google, may process data outside the UK, primarily in the United States. Where this happens, we rely on UK Government adequacy regulations or an Information Commissioner–approved International Data Transfer Agreement (or the UK Addendum to the EU Standard Contractual Clauses), which require appropriate safeguards to protect your information. Details are available on request.",
      },
    ],
  },
  {
    id: "how-long-we-keep-it",
    number: "06",
    title: "How Long We Keep It",
    blocks: [
      {
        type: "list",
        items: [
          "Enquiries that don’t become client work: up to 12 months from your last contact with us, then deleted",
          "Client records: for the duration of our relationship, plus 6 years afterwards to meet legal and accounting obligations",
          "Server logs: retained only for the short period our hosting provider (Vercel) uses by default to operate and secure the site",
        ],
      },
      {
        type: "p",
        text: "Information we no longer need is deleted or anonymised.",
      },
    ],
  },
  {
    id: "security",
    number: "07",
    title: "Security",
    blocks: [
      {
        type: "p",
        text: "We take appropriate administrative, physical and technical measures to protect your information against unauthorised access, loss, misuse or alteration. All submissions through this website use encrypted HTTPS. While no method of transmission over the internet is completely secure, we take reasonable steps to protect information entrusted to us, and to notify you and the Information Commissioner’s Office where we are required to do so.",
      },
    ],
  },
  {
    id: "cookies-and-tracking",
    number: "08",
    title: "Cookies and Tracking",
    blocks: [
      {
        type: "p",
        text: "We don’t run analytics, advertising technology or marketing trackers on this site. The one exception is the contact form, which is protected by Google reCAPTCHA to keep spam and automated abuse out of our inbox. To do this, reCAPTCHA sets cookies and reads device and browser signals when you use the form.",
      },
      {
        type: "p",
        text: "Because of this, we show a short cookie notice when you first visit the site. If that changes in future — for example, if we add analytics — we will update this policy and, where the law requires it, ask for your consent before anything further is set.",
      },
    ],
  },
  {
    id: "your-rights",
    number: "09",
    title: "Your Rights",
    blocks: [
      {
        type: "p",
        text: "Under UK GDPR, you have the following rights over your personal information, which you can exercise free of charge and which we’ll respond to within one month:",
      },
      {
        type: "list",
        items: [
          "Access — request a copy of the information we hold about you",
          "Rectification — ask us to correct inaccurate or incomplete data",
          "Erasure — ask us to delete your information in certain circumstances",
          "Restriction — ask us to limit how we use your information",
          "Portability — receive your data in a portable format, or ask us to transfer it to another organisation",
          "Objection — object to processing based on legitimate interests, including direct marketing",
          "Withdrawing consent — withdraw consent at any time, as easily as you gave it",
        ],
      },
    ],
  },
  {
    id: "contact-and-complaints",
    number: "10",
    title: "Contact and Complaints",
    blocks: [
      {
        type: "p",
        text: "To exercise any of these rights, or if you have a question about this policy, contact us:",
      },
      { type: "address" },
      {
        type: "p",
        text: "If you’re unhappy with how we’ve handled your information, please tell us first so we can put it right. You also have the right to complain to the Information Commissioner’s Office:",
      },
      {
        type: "list",
        items: [
          "Post: Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF",
          "Helpline: 0303 123 1113",
          "Web: ico.org.uk/make-a-complaint",
        ],
      },
    ],
  },
];
