export type CaseStudy = {
  idx: string;
  industry: string;
  situation: string;
  approach: string;
  result: string;
  quote: string;
  name: string;
  role: string;
  initial: string;
};

export const caseStudies: CaseStudy[] = [
  {
    idx: "01",
    industry: "Education",
    situation:
      "An EdTech founder had spent 18 months debating product direction internally without resolution.",
    approach: "PMF Advisory — our 3-week sprint.",
    result:
      "Clarity on market direction achieved in 3 weeks — faster than 18 months of internal debate.",
    quote:
      "Mahadik & Company transformed the way we think about our market. The PMF Advisory sprint gave us more clarity in 3 weeks than 18 months of internal debate had.",
    name: "Rajiv Mehta",
    role: "Founder & CEO, EdTech Platform",
    initial: "R",
  },
  {
    idx: "02",
    industry: "Financial Services",
    situation: "Capital allocation inefficiencies across a mid-market NBFC's operations.",
    approach: "Financial Advisory & Value Creation engagement.",
    result: "₹4Cr in operational savings identified within the first quarter.",
    quote:
      "The team's financial advisory work helped us restructure our capital allocation and identify ₹4Cr in operational savings within the first quarter. Exceptional work.",
    name: "Priya Sharma",
    role: "CFO, Mid-Market NBFC",
    initial: "P",
  },
  {
    idx: "03",
    industry: "Luxury Retail",
    situation: "A luxury retail group's growth thesis was based on flawed assumptions.",
    approach: "Candid strategic review and rebuild.",
    result: "A revised, defensible growth strategy the client now owns.",
    quote:
      "What differentiates M&C is their candour. They told us our growth thesis was flawed, and then helped us build a better one. That honesty is rare and invaluable.",
    name: "Anand Krishnan",
    role: "MD, Luxury Retail Group",
    initial: "A",
  },
  {
    idx: "04",
    industry: "Healthcare",
    situation: "Operational inefficiency across a healthcare delivery network.",
    approach: "Operations & Performance Improvement engagement.",
    result:
      "34% efficiency improvement and a redesigned delivery model the team fully owns.",
    quote:
      "Our operational transformation engagement delivered a 34% efficiency improvement and a redesigned delivery model our team actually owns. This is what good consulting looks like.",
    name: "Sunita Bose",
    role: "COO, Healthcare Network",
    initial: "S",
  },
  {
    idx: "05",
    industry: "Public Sector",
    situation:
      "A complex public-sector bid and infrastructure project needed strategic positioning through execution planning.",
    approach: "End-to-end advisory across the bid lifecycle.",
    result: "Successful navigation from positioning to execution.",
    quote:
      "M&C helped us navigate a complex public-sector bid and infrastructure project from strategic positioning through to execution planning. Deeply professional throughout.",
    name: "Vikram Nair",
    role: "Director, Infrastructure Firm",
    initial: "V",
  },
];
