"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Pagination } from "@/components/ui/Pagination";
import { Tag } from "@/components/ui/Tag";
import { caseStudies } from "@/lib/content/caseStudies";

export function Work() {
  const [current, setCurrent] = useState(0);
  const cs = caseStudies[current];

  const goPrev = () => setCurrent((c) => (c - 1 + caseStudies.length) % caseStudies.length);
  const goNext = () => setCurrent((c) => (c + 1) % caseStudies.length);

  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="block-head">
          <div className="head-main work-header-row">
            <div>
              <h2>
                Results, Not <span className="em">Decoration</span>
              </h2>
              <p className="intro">
                Five engagements, described the way we'd describe them internally: what the
                situation was, what we did, and what changed.
              </p>
            </div>
          </div>
        </div>

        <RevealOnScroll key={cs.idx}>
          <article className="case-study">
            <div className="cs-left">
              <Tag>{cs.industry}</Tag>
              <div className="cs-field">
                <span className="k">Situation</span>
                <p className="v">{cs.situation}</p>
              </div>
              <div className="cs-field">
                <span className="k">Approach</span>
                <p className="v">{cs.approach}</p>
              </div>
              <div className="cs-field">
                <span className="k">Result</span>
                <p className="v">{cs.result}</p>
              </div>
            </div>
            <div className="cs-right">
              <p className="cs-quote">&ldquo;{cs.quote}&rdquo;</p>
              <div className="cs-author">
                <div className="cs-init">{cs.initial}</div>
                <div>
                  <div className="cs-name">{cs.name}</div>
                  <div className="cs-role">{cs.role}</div>
                </div>
              </div>
            </div>
          </article>
        </RevealOnScroll>

        <div className="work-pagination">
          <Pagination
            current={current + 1}
            total={caseStudies.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>
      </div>
    </section>
  );
}
