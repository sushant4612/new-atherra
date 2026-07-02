import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Capabilities } from "@/components/sections/Capabilities";
import { Industries } from "@/components/sections/Industries";
import { Approach } from "@/components/sections/Approach";
import { Work } from "@/components/sections/Work";
import { Perspectives } from "@/components/sections/Perspectives";
import { HowWereStaffed } from "@/components/sections/HowWereStaffed";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Philosophy />
        <Capabilities />
        <Industries />
        <Approach />
        <Work />
        <Perspectives />
        <HowWereStaffed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
