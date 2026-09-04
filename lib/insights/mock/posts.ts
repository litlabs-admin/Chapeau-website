import type { RawPost } from "@/lib/insights/repository";

/**
 * Mock data, shaped exactly like the Airtable records the repository will
 * eventually fetch (see the field mapping in lib/insights/types.ts). When
 * Airtable is wired in, this file is deleted and `repository.ts` fetches the
 * same shape over the network — no other file changes.
 */
export const mockPosts: RawPost[] = [
  {
    slug: "commercial-cctv-for-scottish-businesses",
    title: "Commercial CCTV Providers in Glasgow and Edinburgh",
    excerpt:
      "Planning commercial CCTV for your Scottish business? Learn what to assess, which features matter and how to compare CCTV providers properly.",
    categoryLabel: "Security & Compliance",
    publishedAt: "2026-09-04",
    heroImageSrc: "/media/insights/commercial-cctv-scotland.jpg",
    heroImageAlt: "A commercial CCTV surveillance camera mounted on the stone wall of a business premises.",
    featured: true,
    authorName: "Vandan Mandloi",
    authorRole: "Founder, Chapeau",
    status: "Published",
    seoTitle: "Commercial CCTV Providers in Glasgow and Edinburgh",
    seoDescription:
      "Planning commercial CCTV for your Scottish business? Learn what to assess, which features matter and how to compare CCTV providers properly.",
    body: [
      {
        type: "p",
        text: "Investing in CCTV is often treated as a straightforward purchasing decision. Choose a few cameras, arrange the installation and assume the premises are protected.",
      },
      { type: "p", text: "For most businesses, it is not that simple." },
      {
        type: "p",
        text: "A commercial CCTV system needs to reflect how the premises operate, where the genuine risks are and what should happen when suspicious activity is detected. A system that works well for a small office may be completely unsuitable for a warehouse, retail store, gym, factory or multi-site business.",
      },
      {
        type: "p",
        text: "The provider matters too. Businesses need more than someone who can install cameras. They need a company that can assess the site, identify blind spots, recommend suitable equipment and provide reliable support after the installation.",
      },
      {
        type: "p",
        text: "If you are currently comparing suppliers, RACAM has published a useful guide to the [commercial CCTV providers in Glasgow and Edinburgh](https://racam.co.uk/news/top-5-commercial-cctv-providers-in-glasgow-edinburgh/). It compares five established companies based on their commercial CCTV capabilities, monitoring services, wider security integration and suitability for different types of organisations.",
      },
      {
        type: "p",
        text: "Before requesting quotations, however, it helps to understand what your business actually needs.",
      },
      { type: "heading", text: "Start With the Problem, Not the Cameras", id: "start-with-the-problem-not-the-cameras" },
      { type: "p", text: "The first question should not be, “How many cameras do we need?”" },
      { type: "p", text: "A better question is, “What risks are we trying to manage?”" },
      {
        type: "p",
        text: "Different businesses face different security challenges.",
      },
      {
        type: "p",
        text: "A retailer may want to monitor entrances, tills, stockrooms and customer areas. A warehouse may need coverage of loading bays, external yards, vehicle entrances and areas where high-value stock is stored. An office may be more concerned with unauthorised access, reception areas and activity outside normal working hours.",
      },
      {
        type: "p",
        text: "The purpose of the system should be clear before anyone decides where cameras should be installed.",
      },
      { type: "p", text: "Common reasons for installing commercial CCTV include:" },
      {
        type: "list",
        items: [
          "Deterring theft and unauthorised access",
          "Monitoring entrances and exits",
          "Protecting stock, equipment and vehicles",
          "Reviewing incidents",
          "Supporting staff safety",
          "Monitoring activity outside business hours",
          "Managing multiple premises remotely",
          "Verifying intruder alarm activations",
          "Supporting access control arrangements",
        ],
      },
      {
        type: "p",
        text: "A professional site survey should connect each proposed camera to a specific risk or operational requirement. Installing more cameras does not automatically produce better security.",
      },
      { type: "heading", text: "Identify the Areas That Actually Need Protection", id: "identify-the-areas-that-actually-need-protection" },
      {
        type: "p",
        text: "Most CCTV problems are not caused by a complete lack of cameras. They are caused by poor positioning, inadequate coverage or footage that does not show enough useful detail.",
      },
      { type: "p", text: "Common blind spots include:" },
      {
        type: "list",
        items: [
          "Side and rear entrances",
          "Loading bays",
          "External storage areas",
          "Car parks",
          "Delivery points",
          "Stairwells and corridors",
          "Areas hidden by shelving or machinery",
          "Gates and vehicle entrances",
          "Cash-handling areas",
          "Server rooms and restricted spaces",
        ],
      },
      {
        type: "p",
        text: "Lighting also matters. A camera that performs well during the day may provide poor footage at night or in a badly lit warehouse.",
      },
      {
        type: "p",
        text: "Before accepting a proposal, ask what each camera is expected to capture. There is a significant difference between detecting that someone is present and obtaining enough detail to identify a person, vehicle or event.",
      },
      {
        type: "p",
        text: "Camera position, lens choice, resolution, lighting and distance from the target all affect the usefulness of the footage.",
      },
      { type: "heading", text: "Decide Whether You Need Recording, Remote Access or Monitoring", id: "decide-whether-you-need-recording-remote-access-or-monitoring" },
      {
        type: "p",
        text: "These features are often discussed as though they are the same thing, but they serve different purposes.",
      },
      { type: "heading", text: "Recorded CCTV", id: "recorded-cctv" },
      {
        type: "p",
        text: "A standard CCTV system records footage that can be reviewed later. This can help investigate theft, damage, unauthorised access or workplace incidents.",
      },
      { type: "p", text: "The limitation is that the business may only discover the event after it has happened." },
      { type: "heading", text: "Remote Viewing", id: "remote-viewing" },
      {
        type: "p",
        text: "Remote viewing allows an authorised person to access live or recorded footage using a phone, tablet or computer.",
      },
      {
        type: "p",
        text: "This can be useful for owners and managers responsible for more than one site. However, remote viewing still relies on someone choosing to check the system at the right time.",
      },
      { type: "heading", text: "Professionally Monitored CCTV", id: "professionally-monitored-cctv" },
      {
        type: "p",
        text: "A professionally monitored system can send relevant activations to trained operators. The operator can assess what is happening and follow an agreed response procedure.",
      },
      {
        type: "p",
        text: "Depending on the system and monitoring arrangement, the response might involve contacting a keyholder, issuing an audio warning or escalating the incident.",
      },
      { type: "p", text: "Monitoring can be particularly valuable for:" },
      {
        type: "list",
        items: [
          "Warehouses",
          "Factories",
          "Construction sites",
          "Commercial yards",
          "Vehicle compounds",
          "Isolated business premises",
          "Sites holding valuable equipment or stock",
          "Premises left empty overnight",
        ],
      },
      {
        type: "p",
        text: "Businesses should ask potential providers exactly how monitoring works, what causes an activation and what action is taken when an event is verified.",
      },
      { type: "heading", text: "Consider How CCTV Connects With the Rest of Your Security", id: "consider-how-cctv-connects-with-the-rest-of-your-security" },
      { type: "p", text: "CCTV is often more effective when it works with other security systems." },
      {
        type: "p",
        text: "For example, an intruder alarm can trigger cameras to focus on a particular area. An access control event can be matched with video footage. Automatic Number Plate Recognition can support the management of vehicles entering a yard or car park.",
      },
      { type: "p", text: "A joined-up system may include:" },
      {
        type: "list",
        items: [
          "Commercial CCTV",
          "Intruder alarms",
          "Access control",
          "Door entry systems",
          "Intercoms",
          "Automatic Number Plate Recognition",
          "Remote monitoring",
          "External detection",
          "Fire and life-safety systems",
        ],
      },
      {
        type: "p",
        text: "Integration can make security events easier to understand and manage. It can also reduce the need to operate several disconnected systems.",
      },
      {
        type: "p",
        text: "When comparing providers, ask whether they only install CCTV or whether they can assess the wider security requirements of the premises.",
      },
      { type: "heading", text: "Make Sure the System Can Grow With the Business", id: "make-sure-the-system-can-grow-with-the-business" },
      { type: "p", text: "Security requirements change." },
      {
        type: "p",
        text: "A company might take on another unit, extend a warehouse, open a second office or add an external yard. A system that is suitable today should not become obsolete as soon as the premises change.",
      },
      { type: "p", text: "Businesses should consider:" },
      {
        type: "list",
        items: [
          "Whether additional cameras can be added",
          "Whether multiple locations can be viewed through one platform",
          "Whether recording capacity can be expanded",
          "Whether the system can integrate with future access control or alarms",
          "Whether user permissions can be managed",
          "Whether remote access can support several authorised users",
        ],
      },
      {
        type: "p",
        text: "This is especially important for growing companies and organisations operating across Glasgow, Edinburgh or the wider Central Belt.",
      },
      {
        type: "p",
        text: "A scalable system may cost more initially than a basic camera package, but it can prevent unnecessary replacement costs later.",
      },
      { type: "heading", text: "Understand Your Data Protection Responsibilities", id: "understand-your-data-protection-responsibilities" },
      {
        type: "p",
        text: "Commercial CCTV can process personal information, particularly when individuals can be identified from recorded footage.",
      },
      {
        type: "p",
        text: "The Information Commissioner’s Office guidance on video surveillance explains that surveillance should be lawful, fair, transparent, necessary and proportionate.",
      },
      { type: "p", text: "Businesses should consider:" },
      {
        type: "list",
        items: [
          "Why CCTV is required",
          "Which areas need to be recorded",
          "Whether people are informed that CCTV is operating",
          "Who can access the footage",
          "How footage is protected",
          "How long recordings are retained",
          "How requests for footage are managed",
          "Whether audio recording is genuinely necessary",
          "Whether cameras capture areas outside the business premises",
        ],
      },
      {
        type: "p",
        text: "Clear signage should normally be displayed before people enter a monitored area. Access to footage should also be restricted to authorised individuals.",
      },
      {
        type: "p",
        text: "Data protection should be considered while the system is being designed, not after the installation has been completed.",
      },
      {
        type: "callout",
        title: "Useful reference",
        text: "The ICO provides a CCTV compliance checklist that can help organisations review their responsibilities.",
      },
      { type: "heading", text: "Look Beyond the Installation Price", id: "look-beyond-the-installation-price" },
      {
        type: "p",
        text: "Commercial CCTV quotations can be difficult to compare because different providers may recommend completely different systems.",
      },
      {
        type: "p",
        text: "One quotation may include basic cameras and recording equipment. Another may include higher-quality cameras, analytics, remote access, monitoring, maintenance and integration with existing security systems.",
      },
      { type: "p", text: "The lowest initial price does not necessarily represent the best long-term value." },
      { type: "p", text: "When reviewing quotations, compare:" },
      {
        type: "list",
        items: [
          "Number and type of cameras",
          "Camera resolution",
          "Night-time performance",
          "Recording equipment",
          "Storage capacity",
          "Retention period",
          "Cabling and network requirements",
          "Remote viewing",
          "Video analytics",
          "Monitoring arrangements",
          "Integration with alarms or access control",
          "Installation and commissioning",
          "Staff training",
          "Warranty",
          "Preventative maintenance",
          "Fault response",
          "Ongoing support",
          "Contract length and charges",
        ],
      },
      {
        type: "p",
        text: "Ask each provider to explain why they have selected the proposed equipment and how it addresses the identified risks.",
      },
      { type: "p", text: "A quotation should make sense in the context of the premises. It should not simply list equipment." },
      { type: "heading", text: "Check the Provider’s Commercial Experience", id: "check-the-providers-commercial-experience" },
      { type: "p", text: "Domestic CCTV and commercial CCTV are not always comparable." },
      {
        type: "p",
        text: "Commercial premises can involve larger areas, complex lighting, multiple entrances, restricted zones, external risks and specific operational requirements. The system may also need to integrate with other security infrastructure.",
      },
      { type: "p", text: "Ask potential providers:" },
      {
        type: "list",
        items: [
          "Have you installed systems in similar commercial premises?",
          "Will you conduct a site survey before quoting?",
          "How do you identify and test potential blind spots?",
          "Can the system be monitored professionally?",
          "Can CCTV integrate with our alarms or access control?",
          "Who will maintain the system?",
          "What support is available when a fault occurs?",
          "Can you take over an existing CCTV system?",
          "Which accreditations does your company hold?",
          "Can the system be expanded if our business grows?",
        ],
      },
      {
        type: "callout",
        title: "Useful reference",
        text: "The NSI Company Finder can also be used to identify independently approved security and fire-safety companies.",
      },
      { type: "heading", text: "Do Not Treat Maintenance as an Afterthought", id: "do-not-treat-maintenance-as-an-afterthought" },
      {
        type: "p",
        text: "A CCTV system can stop providing useful protection without anyone immediately noticing.",
      },
      {
        type: "p",
        text: "A camera may move out of position. A lens may become dirty or obstructed. Recording equipment can develop a fault. Storage may fail, or a software update may affect remote access.",
      },
      { type: "p", text: "Regular maintenance helps confirm that:" },
      {
        type: "list",
        items: [
          "Cameras remain correctly positioned",
          "Image quality is suitable",
          "Recording is working",
          "The correct date and time are displayed",
          "Footage can be retrieved",
          "Storage capacity is sufficient",
          "Remote access remains secure",
          "Detection and monitoring functions operate correctly",
          "Users and permissions are still appropriate",
        ],
      },
      {
        type: "p",
        text: "Businesses should understand what maintenance is included and how quickly faults will be handled.",
      },
      { type: "p", text: "A CCTV system is most valuable when it works correctly on the day it is needed." },
      { type: "heading", text: "Why Local Support Matters", id: "why-local-support-matters" },
      {
        type: "p",
        text: "Businesses in Glasgow and Edinburgh have access to national security companies as well as established Scottish providers.",
      },
      {
        type: "p",
        text: "National coverage may suit organisations operating across the UK. However, local or regional support can be valuable when a business needs a site survey, maintenance visit, system takeover or urgent fault response.",
      },
      {
        type: "p",
        text: "A provider familiar with commercial premises across Central Scotland may also understand the requirements of local offices, warehouses, retail units, industrial estates and multi-site businesses.",
      },
      { type: "p", text: "The right choice depends on:" },
      {
        type: "list",
        items: [
          "The size and complexity of the premises",
          "The risks being managed",
          "Whether monitoring is needed",
          "The required response arrangements",
          "Existing security equipment",
          "The importance of local support",
          "The available budget",
          "Future expansion plans",
        ],
      },
      {
        type: "p",
        text: "There is no single provider that will be right for every organisation. The best choice is the company that can demonstrate a clear understanding of the premises and explain how its proposed system will manage the relevant risks.",
      },
      { type: "heading", text: "A Practical Commercial CCTV Checklist", id: "a-practical-commercial-cctv-checklist" },
      { type: "p", text: "Before choosing a provider, confirm that you can answer the following questions:" },
      {
        type: "list",
        ordered: true,
        items: [
          "What specific problems should the CCTV system address?",
          "Which areas need to be monitored?",
          "What level of image detail is required?",
          "Will the cameras work effectively at night?",
          "How long should footage be retained?",
          "Who needs remote access?",
          "Is professional monitoring required?",
          "Should CCTV integrate with alarms or access control?",
          "How will the business meet its data protection responsibilities?",
          "Can the system expand in the future?",
          "What maintenance and support are included?",
          "Has the provider completed a proper site survey?",
        ],
      },
      {
        type: "p",
        text: "If several of these questions remain unanswered, the business may not yet be ready to compare quotations properly.",
      },
      { type: "heading", text: "Final Thoughts", id: "final-thoughts" },
      { type: "p", text: "Commercial CCTV should not be treated as a collection of cameras." },
      {
        type: "p",
        text: "A well-designed system starts with the risks facing the business. It considers how the premises operate, which areas require protection, what information the footage must provide and what should happen when suspicious activity occurs.",
      },
      {
        type: "p",
        text: "The provider should be able to explain every recommendation clearly. They should also consider monitoring, integration, data protection, maintenance and future growth.",
      },
      {
        type: "p",
        text: "Taking time to define these requirements before approaching suppliers makes it easier to compare proposals and avoid paying for equipment that does not solve the right problems.",
      },
      {
        type: "p",
        text: "For businesses ready to build a shortlist, RACAM’s comparison of [commercial CCTV providers in Glasgow and Edinburgh](https://racam.co.uk/news/top-5-commercial-cctv-providers-in-glasgow-edinburgh/) provides a practical overview of five companies, their services and the types of organisations they may be best suited to.",
      },
      {
        type: "cta",
        text: "Not sure what your premises actually need?",
        label: "Let's talk",
        href: "/contact",
      },
    ],
    faqs: [
      {
        question: "How much does commercial CCTV cost in Glasgow or Edinburgh?",
        answer:
          "The cost depends on the size of the premises, number and type of cameras, cabling, recording capacity, storage requirements, monitoring and integration with other systems. A site survey is normally required before an accurate quotation can be provided.",
      },
      {
        question: "Is commercial CCTV different from domestic CCTV?",
        answer:
          "Commercial systems often need to cover larger or more complex premises. They may also require professional monitoring, longer retention periods, video analytics, integration with access control and more structured maintenance.",
      },
      {
        question: "Can a business monitor CCTV from a mobile phone?",
        answer:
          "Many modern IP CCTV systems allow authorised users to view live and recorded footage from a phone, tablet or computer. Remote viewing should be configured securely and access should be limited to appropriate users.",
      },
      {
        question: "Does business CCTV need to comply with UK GDPR?",
        answer:
          "If the system captures identifiable individuals, data protection law is likely to apply. Businesses should review the current ICO guidance and consider lawful use, transparency, security, retention and individual rights.",
      },
      {
        question: "Can a new provider take over an existing CCTV system?",
        answer:
          "In many cases, yes. A provider can assess the existing cameras, recording equipment, cabling and network before explaining what can be retained, repaired, upgraded or replaced.",
      },
      {
        question: "Is professionally monitored CCTV worth considering?",
        answer:
          "Monitoring may be valuable for premises with significant risks outside operating hours. It allows relevant activations to be reviewed and handled according to an agreed response procedure, rather than relying only on recorded footage after an incident.",
      },
    ],
  },
];
