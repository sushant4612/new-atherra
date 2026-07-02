import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { perspectives } from "@/lib/content/perspectives";

export function Perspectives() {
  return (
    <section className="block" id="perspectives">
      <div className="wrap">
        <div className="block-head">
          <div className="head-main">
            <h2>
              Where We&apos;re <span className="em">Thinking</span>
            </h2>
            <p className="intro">
              Notes from live engagements, written for the same reason we take them on: to
              get closer to what&apos;s actually true.
            </p>
          </div>
        </div>

        <div className="perspectives-list">
          {perspectives.map((p, i) => (
            <RevealOnScroll key={p.idx} delay={Math.min(i, 5) * 0.04} as="div" className="perspective-row">
              <div className="perspective-meta">
                <span className="idx">№ {p.idx}</span>
                <span className="cat">{p.category}</span>
              </div>
              <div>
                <div className="perspective-title">{p.title}</div>
                <p className="perspective-dek">{p.dek}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
