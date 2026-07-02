export type ApproachStep = {
  num: string;
  numEm: string;
  title: string;
  titleEm: string;
  desc: string;
  tag: string;
  deliverable: string;
};

export const approachSteps: ApproachStep[] = [
  {
    num: "0",
    numEm: "1",
    title: "Deep",
    titleEm: "Discovery",
    desc: "We invest time understanding your business, market, team, and the outcomes you actually need — before proposing anything. No templates. No pre-packaged answers.",
    tag: "2–3 Days",
    deliverable: "Discovery Findings Summary",
  },
  {
    num: "0",
    numEm: "2",
    title: "Structured",
    titleEm: "Diagnosis",
    desc: "We analyse data, interview stakeholders, map competitive dynamics, and pressure-test assumptions. The diagnosis drives everything that follows.",
    tag: "1–2 Weeks",
    deliverable: "Diagnostic Findings Memo",
  },
  {
    num: "0",
    numEm: "3",
    title: "Strategic",
    titleEm: "Architecture",
    desc: "We design the strategic response — whether it's a transformation roadmap, financial model, operating model redesign, or market entry strategy.",
    tag: "Engagement Specific",
    deliverable: "Strategic Roadmap & Business Case",
  },
  {
    num: "0",
    numEm: "4",
    title: "Activation &",
    titleEm: "Capability Transfer",
    desc: "Strategy without execution is a document. We work alongside your team through implementation and ensure the capability to continue without us.",
    tag: "Ongoing",
    deliverable: "Execution Playbook & Team Enablement",
  },
];
