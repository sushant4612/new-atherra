"use client";

import {
  Briefcase,
  Building2,
  Cpu,
  Factory,
  Gem,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Plane,
  Rocket,
  ShoppingCart,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { industries } from "@/lib/content/industries";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Landmark,
  UtensilsCrossed,
  HeartPulse,
  Users,
  Gem,
  Factory,
  Briefcase,
  Building2,
  Home,
  ShoppingCart,
  Cpu,
  Plane,
  Rocket,
};

export function Industries() {
  return (
    <section className="block industries" id="industries">
      <div className="wrap">
        <div className="block-head">
          <div className="head-main">
            <h2>
              Industries We <span className="em">Serve</span>
            </h2>
            <p className="intro">
              Our partners carry deep domain knowledge across 14 sectors, so you always work
              with an advisor who understands the specific dynamics, regulatory environment,
              and competitive pressures of your industry.
            </p>
          </div>
        </div>

        <div className="industries-grid">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon];
            return (
              <RevealOnScroll key={ind.idx} delay={Math.min(i, 5) * 0.04} className="ind-cell">
                <Accordion
                  triggerClassName="ind-trigger"
                  contentClassName="ind-pov"
                  trigger={
                    <>
                      <div className="ind-top">
                        <span className="ind-idx">{ind.idx}</span>
                        <span className="ind-icon">
                          <Icon size={18} strokeWidth={1.4} />
                        </span>
                      </div>
                      <div className="ind-name">{ind.name}</div>
                    </>
                  }
                >
                  <p>{ind.pov}</p>
                </Accordion>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
