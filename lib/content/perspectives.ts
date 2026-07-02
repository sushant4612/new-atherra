export type Perspective = {
  idx: string;
  category: string;
  title: string;
  dek: string;
};

export const perspectives: Perspective[] = [
  {
    idx: "01",
    category: "Product Strategy",
    title: "Product-Market Fit Isn't a Milestone — It's a Moving Target",
    dek: "Why PMF is a continuous discipline, not a box to check once.",
  },
  {
    idx: "02",
    category: "Method",
    title: "Why Most Diagnostic Phases Are Too Short to Be Honest",
    dek: "The case for a real 1-2 week diagnosis before any strategy work begins.",
  },
  {
    idx: "03",
    category: "Execution",
    title: "The Strategy Memo Nobody Reads",
    dek: "Fixing the handoff between advisory and execution — why capability transfer matters more than the deck.",
  },
  {
    idx: "04",
    category: "Firm",
    title: "What India-Based Advisory Gets Right for Global Clients (and What It Doesn't)",
    dek: "An honest look at the India-HQ, global-client model.",
  },
  {
    idx: "05",
    category: "Operations",
    title: "Operating Model Redesign: When to Restructure and When to Just Fix the Process",
    dek: "A framework for telling the difference.",
  },
  {
    idx: "06",
    category: "Sustainability",
    title: "Sustainability as a Line Item, Not a Slide",
    dek: "Making risk and impact work pencil out — moving past ESG buzzwords into numbers that hold up.",
  },
];
