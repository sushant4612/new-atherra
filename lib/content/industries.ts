export type Industry = {
  idx: string;
  name: string;
  icon:
    | "GraduationCap"
    | "Landmark"
    | "UtensilsCrossed"
    | "HeartPulse"
    | "Users"
    | "Gem"
    | "Factory"
    | "Briefcase"
    | "Building2"
    | "Home"
    | "ShoppingCart"
    | "Cpu"
    | "Plane"
    | "Rocket";
  pov: string;
};

export const industries: Industry[] = [
  {
    idx: "01",
    name: "Education & E-Learning",
    icon: "GraduationCap",
    pov: "Retention is a product problem before it's a marketing problem — we help you find which one you're actually solving.",
  },
  {
    idx: "02",
    name: "Financial Services",
    icon: "Landmark",
    pov: "Capital allocation decisions compound. We help you make the next one with the same rigour as the last.",
  },
  {
    idx: "03",
    name: "Food & Beverage",
    icon: "UtensilsCrossed",
    pov: "Margin pressure in F&B rarely comes from one line item — we trace it back to the actual source before recommending a fix.",
  },
  {
    idx: "04",
    name: "Healthcare & Wellness",
    icon: "HeartPulse",
    pov: "Regulatory complexity and margin pressure rarely get solved by the same lever — we help you find which one you're actually fighting.",
  },
  {
    idx: "05",
    name: "Individual & Family Services",
    icon: "Users",
    pov: "Service quality at scale is an operating-model question, not a hiring question — we start there.",
  },
  {
    idx: "06",
    name: "Luxury & Premium Retail",
    icon: "Gem",
    pov: "Growth theses in luxury retail age fast. We stress-test yours before you spend against it.",
  },
  {
    idx: "07",
    name: "Manufacturing",
    icon: "Factory",
    pov: "Continuous improvement frameworks fail when they're imported wholesale — we build yours around your actual constraints.",
  },
  {
    idx: "08",
    name: "Professional Services",
    icon: "Briefcase",
    pov: "Firms that sell expertise often under-price their own — we help you build a model that reflects what you're actually worth.",
  },
  {
    idx: "09",
    name: "Public Sector",
    icon: "Building2",
    pov: "Public-sector mandates need positioning and execution planning to move at the same pace — we work both ends.",
  },
  {
    idx: "10",
    name: "Real Estate & Infrastructure",
    icon: "Home",
    pov: "Long development cycles hide operating inefficiencies for years — we surface them before they compound.",
  },
  {
    idx: "11",
    name: "Retail & FMCG",
    icon: "ShoppingCart",
    pov: "Distribution economics decide more strategy than brand does — we start the diagnosis there.",
  },
  {
    idx: "12",
    name: "Technology",
    icon: "Cpu",
    pov: "Most tech-sector strategy work fails because it's built before product-market fit is confirmed — we fix the order of operations.",
  },
  {
    idx: "13",
    name: "Tourism & Hospitality",
    icon: "Plane",
    pov: "Seasonality masks structural problems in hospitality businesses — we separate the two before recommending anything.",
  },
  {
    idx: "14",
    name: "Startups",
    icon: "Rocket",
    pov: "Most startup strategy work fails because it's built before product-market fit is confirmed — we fix the order of operations.",
  },
];
