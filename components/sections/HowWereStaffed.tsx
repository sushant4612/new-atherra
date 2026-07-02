import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HowWereStaffed() {
  return (
    <section className="block" id="staffed">
      <div className="wrap">
        <RevealOnScroll className="staffed-block">
          <div>
            <h3 className="staffed-title">Senior-Led, Not Staffed Down</h3>
            <p className="staffed-body">
              Every Mahadik &amp; Company engagement is led by senior partners from discovery
              through execution, not handed off to juniors after the pitch. It&apos;s why our
              diagnostic phases run 1-2 weeks, not one meeting, and why the strategy we hand
              you is one we&apos;ll stay to help you execute.
            </p>
          </div>
          <div className="staffed-facts">
            <div className="staffed-fact">
              <strong>Engagement lead:</strong> Senior partner, start to finish
            </div>
            <div className="staffed-fact">
              <strong>Team size:</strong> Scoped to the mandate, not padded
            </div>
            <div className="staffed-fact">
              <strong>Continuity:</strong> Same team through activation
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
