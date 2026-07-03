import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4, Fragment_Mono, Cinzel } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fragment-mono",
  display: "swap",
});

const cinzel = Cinzel({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const siteUrl = "https://www.mahadikandcompany.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mahadik & Company — Management Consulting | Clarity. Conviction. Impact.",
  description:
    "Mahadik & Company is a management consulting firm built on evidence over opinion. We diagnose the real problem and stay through execution, across 14 industries, for organisations from ambitious startups to established enterprises.",
  openGraph: {
    title: "Mahadik & Company — Management Consulting",
    description:
      "Clarity, before counsel. A management consulting firm built on evidence over opinion, serving 14 industries from India, for clients globally.",
    url: siteUrl,
    siteName: "Mahadik & Company",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadik & Company — Management Consulting",
    description: "Clarity, before counsel. Evidence-driven management consulting across 14 industries.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mahadik & Company",
  description:
    "Management consulting firm built on evidence over opinion, serving 14 industries from India for clients globally.",
  url: siteUrl,
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  email: "hello@mahadikandcompany.com",
  slogan: "Clarity. Conviction. Impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${sourceSerif.variable} ${fragmentMono.variable} ${cinzel.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
