import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { approachSteps } from "@/lib/content/approach";

export function Approach() {
  return (
    <section className="block approach" id="approach">
      <div className="wrap">
        <div className="approach-grid">
          <RevealOnScroll className="approach-sticky">
            <h2 style={{ margin: "0 0 24px" }}>
              How We <span className="em">Work</span>
            </h2>
            <p>
              Every engagement follows a disciplined process designed to surface the real
              problem, not the presenting one, and deliver results you can build on.
            </p>
          </RevealOnScroll>

          <div className="steps">
            {approachSteps.map((step, i) => (
              <RevealOnScroll key={step.numEm} delay={i * 0.06} as="div" className="step">
                <div className="step-num">
                  {step.num}
                  {step.numEm}
                </div>
                <div>
                  <h3 className="step-title">
                    {step.title} <span className="em">{step.titleEm}</span>
                  </h3>
                  <p className="step-desc">{step.desc}</p>
                  <div className="step-meta">
                    <span className="step-tag">{step.tag}</span>
                    <span className="step-deliverable">
                      Deliverable: <strong>{step.deliverable}</strong>
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
