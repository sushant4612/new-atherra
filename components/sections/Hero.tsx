import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Hero() {
  return (
    <div id="hero">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <Image
          src="/hero-motif.svg"
          alt=""
          width={640}
          height={640}
          className="hero-motif"
          priority
        />
      </div>
      <div className="hero-inner">
        <RevealOnScroll delay={0.08}>
          <h1 className="hero-h1">
            Where Strategy Meets <span className="em">Conviction</span>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.16}>
          <p className="hero-sub">
            Mahadik &amp; Company is a premier management consulting firm guiding
            organisations across 14 industries to unlock sustainable growth, operational
            excellence, and transformational impact.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.24}>
          <div className="hero-ctas">
            <a href="#services" className="btn btn-primary">
              Explore Services
            </a>
            <a href="#contact" className="btn btn-ghost">
              Schedule a Call
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
