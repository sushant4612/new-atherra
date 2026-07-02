import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ValueCards } from "@/components/ui/ValueCards";

const values = [
  {
    num: "01",
    name: "Rigour",
    body: "Every recommendation is grounded in data, first-principles thinking, and deep sector knowledge. We don't reach for the familiar framework when the evidence points elsewhere.",
  },
  {
    num: "02",
    name: "Candour",
    body: "We tell our clients what they need to hear, not what they want to hear. If your growth thesis is flawed, we'll say so — and then help you build a better one.",
  },
  {
    num: "03",
    name: "Ownership",
    body: "We work alongside you, not at arm's length. Your success is our accountability, from the first diagnostic to the last day of implementation.",
  },
  {
    num: "04",
    name: "Impact",
    body: "We measure our worth by the results we deliver, not the slides we produce. If a recommendation doesn't change an outcome, it isn't finished.",
  },
];

export function Philosophy() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="block-head">
          <div className="head-main">
            <h2>
              Clarity Before <span className="em">Counsel</span>
            </h2>
          </div>
        </div>

        <div className="philosophy-grid">
          <RevealOnScroll className="philosophy-copy">
            <p>
              Mahadik &amp; Company was founded in 2018 on a singular conviction: that the
              most powerful strategic advice is ruthlessly clear, evidence-driven, and built
              around your organisation&apos;s unique context, not generic frameworks.
            </p>
            <p>
              We don&apos;t believe in lengthy engagements that produce reports no one
              implements. We believe in <strong>focused advisory relationships</strong> that
              produce transformational results, measurable outcomes, and lasting capability
              within your team.
            </p>
            <div className="philosophy-pullquote">
              We measure our worth by the results we deliver, not the slides we produce.
            </div>
            <p>
              From startups finding product-market fit to enterprises navigating industry
              disruption, our firm brings the same rigour, candour, and depth to every
              mandate, across 14 industries, for clients across India and globally.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="firm-facts">
              <div className="firm-fact">
                <span className="k">Founded</span>
                <span className="v">2018</span>
              </div>
              <div className="firm-fact">
                <span className="k">HQ</span>
                <span className="v">India</span>
              </div>
              <div className="firm-fact">
                <span className="k">Clients</span>
                <span className="v">Global</span>
              </div>
              <div className="firm-fact">
                <span className="k">Industries</span>
                <span className="v">14</span>
              </div>
              <div className="firm-fact">
                <span className="k">Capabilities</span>
                <span className="v">8</span>
              </div>
              <div className="firm-fact">
                <span className="k">Model</span>
                <span className="v">Senior-led</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.15}>
          <ValueCards values={values} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
