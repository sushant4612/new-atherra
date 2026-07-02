"use client";

import { ChevronDown } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { services, signatureOffering } from "@/lib/content/services";

export function Capabilities() {
  return (
    <section className="block services" id="services">
      <div className="wrap">
        <div className="block-head">
          <div className="head-main">
            <h2>
              Our <span className="em">Capabilities</span>
            </h2>
            <p className="intro">
              Eight capabilities, each solving a specific business problem, not a bundled
              retainer. Engage one, or combine several as your mandate demands.
            </p>
          </div>
        </div>

        <RevealOnScroll>
          <div className="signature">
            <div className="sig-top">
              <div>
                <span className="sig-badge">{signatureOffering.badge}</span>
                <div className="sig-title" style={{ marginTop: 12 }}>
                  {signatureOffering.title} <span className="em">{signatureOffering.titleEm}</span>
                </div>
              </div>
              <div className="sig-num">
                {signatureOffering.duration}
                <small>{signatureOffering.durationLabel}</small>
              </div>
            </div>
            <p className="sig-desc">{signatureOffering.desc}</p>
            <div className="sig-ctas">
              <a href="#contact" className="btn btn-primary">
                {signatureOffering.ctaBig}
              </a>
              <span className="sig-note">{signatureOffering.ctaNote}</span>
            </div>

            <Accordion
              className="sig-weeks"
              triggerClassName="sig-week-trigger"
              contentClassName="sig-week-content"
              trigger={
                <>
                  <ChevronDown size={15} strokeWidth={1.5} />
                  See the 3-week breakdown
                </>
              }
            >
              <div className="sig-week-grid">
                {signatureOffering.weeks.map((w) => (
                  <div key={w.label} className="sig-week">
                    <span className="wk-label">{w.label}</span>
                    <div className="wk-title">{w.title}</div>
                    <p className="wk-desc">{w.desc}</p>
                  </div>
                ))}
              </div>
              <div className="sig-qualify">
                <div>
                  <span className="q-label">Who it&apos;s for</span>
                  <p>{signatureOffering.forYou}</p>
                </div>
                <div>
                  <span className="q-label">Who it&apos;s not for</span>
                  <p>{signatureOffering.notForYou}</p>
                </div>
              </div>
            </Accordion>
          </div>
        </RevealOnScroll>

        <div className="service-list">
          {services.map((s, i) => (
            <RevealOnScroll key={s.idx} delay={Math.min(i, 5) * 0.05} className="service-row-wrap" as="div">
              <Accordion
                triggerClassName="service-row-trigger"
                contentClassName="service-row-content"
                trigger={
                  <>
                    <span className="srv-num">— {s.idx}</span>
                    <span>
                      <span className="srv-name">{s.name}</span>
                      <span className="srv-desc">{s.desc}</span>
                    </span>
                    <ChevronDown size={16} strokeWidth={1.5} className="srv-chevron" />
                  </>
                }
              >
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Accordion>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
