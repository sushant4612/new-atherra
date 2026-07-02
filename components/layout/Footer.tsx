export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-cols">
          <div className="foot-brand">
            <span className="name">
              Mahadik <span className="amp">&amp;</span> Company
            </span>
            <span className="sub">Management Consulting</span>
            <p className="desc">
              A premier management consulting firm serving leaders across 14 industries with
              strategic clarity, operational rigour, and transformational impact.
            </p>
          </div>
          <div>
            <div className="foot-col-title">Firm</div>
            <ul className="foot-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#approach">Our Approach</a>
              </li>
              <li>
                <a href="#industries">Industries</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="foot-col-title">Work</div>
            <ul className="foot-links">
              <li>
                <a href="#services">Capabilities</a>
              </li>
              <li>
                <a href="#work">Case Studies</a>
              </li>
              <li>
                <a href="#perspectives">Perspectives</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="foot-col-title">Connect</div>
            <ul className="foot-links">
              <li>
                <a href="#" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@mahadikandcompany.com">Email Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2025 Mahadik &amp; Company. All rights reserved.</span>
          <span className="right">Clarity. Conviction. Impact.</span>
        </div>
      </div>
    </footer>
  );
}
