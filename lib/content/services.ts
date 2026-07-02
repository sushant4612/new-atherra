export type Service = {
  idx: string;
  name: string;
  desc: string;
  bullets: string[];
};

export const signatureOffering = {
  badge: "Signature Offering",
  duration: "3",
  durationLabel: "Week Sprint",
  title: "PMF",
  titleEm: "Advisory",
  desc: "Our signature offering. Find and fix the gap between your product and its market. We conduct rapid, structured product-market fit diagnostics and build a concrete action plan to close the gap — so your product doesn't just exist, it resonates. Designed for founders, product leaders, and business owners who are ready to stop guessing.",
  weeks: [
    {
      label: "Week 1",
      title: "Discovery & Diagnosis",
      desc: "We map your market, interview your users, and pressure-test your current thesis against evidence — not assumptions.",
    },
    {
      label: "Week 2",
      title: "Strategic Architecture",
      desc: "We design the specific changes to product, positioning, or go-to-market that close the gap we diagnosed.",
    },
    {
      label: "Week 3",
      title: "Activation Plan",
      desc: "You leave with a concrete action plan and the internal capability to execute it — not a deck that sits in a drive.",
    },
  ],
  forYou: "Founders and product leaders who suspect something is wrong with product-market fit but can't isolate what.",
  notForYou: "Teams looking for a pure marketing or branding refresh — this is a diagnostic engagement, not a creative one.",
  cta: "Begin →",
  ctaBig: "Apply now",
  ctaNote: "Limited mandates",
};

export const services: Service[] = [
  {
    idx: "01",
    name: "Business Strategy & Transformation",
    desc: "Redefine your business model and strategic direction with transformation roadmaps that deliver sustainable competitive advantage.",
    bullets: [
      "Full business-model review against current market position",
      "Transformation roadmap sequenced by impact and effort",
      "Board-ready strategic narrative and supporting evidence",
    ],
  },
  {
    idx: "02",
    name: "Customer & Market Excellence",
    desc: "Build deeper customer relationships and discover untapped market opportunities before the competition does.",
    bullets: [
      "Customer segmentation grounded in real usage data",
      "Market-opportunity sizing with defensible assumptions",
      "Go-to-market sequencing for new segments",
    ],
  },
  {
    idx: "03",
    name: "Operations & Performance Improvement",
    desc: "Streamline operational workflows and implement continuous improvement frameworks that actually last.",
    bullets: [
      "Process mapping against actual bottlenecks, not assumed ones",
      "Improvement framework built around your team's constraints",
      "Handover plan so gains outlast the engagement",
    ],
  },
  {
    idx: "04",
    name: "Organisation & People",
    desc: "Develop organisational structures and cultures that drive innovation, retention, and excellence at scale.",
    bullets: [
      "Org-design review against your growth trajectory",
      "Retention diagnostic separating culture issues from structural ones",
      "Capability-building plan for internal leaders",
    ],
  },
  {
    idx: "05",
    name: "Financial Advisory & Value Creation",
    desc: "Optimise your financial strategy and capital allocation to maximise business value at every stage of growth.",
    bullets: [
      "Capital allocation review against stated strategic priorities",
      "Value-creation plan with a defined measurement approach",
      "Board- and investor-ready financial narrative",
    ],
  },
  {
    idx: "06",
    name: "Digital, Data & Technology",
    desc: "Harness technology and data analytics to drive digital transformation that your business actually adopts and uses.",
    bullets: [
      "Technology audit against actual business bottlenecks",
      "Adoption-first rollout plan, not a tooling wishlist",
      "Data-maturity roadmap sequenced by business impact",
    ],
  },
  {
    idx: "07",
    name: "Sustainability, Risk & Impact",
    desc: "Build resilient strategies and responsible practices that manage risk while delivering measurable positive impact.",
    bullets: [
      "Risk assessment mapped to real operational exposure",
      "Impact measurement framework built to hold up under scrutiny",
      "Compliance-ready reporting structure",
    ],
  },
];
