'use client';

import { useEffect, useState } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState !== 'idle') return;
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1200);
  };

  return (
    <>
      {/* ==================== NAV ==================== */}
      <nav className={`topnav${navScrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="brand">
            <span className="brand-mark">Mahadik <span className="amp">&amp;</span> Company</span>
          </a>
          <div className="nav-mid">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="nav-cta">Engage Us</a>
          <button className="hamburger" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ==================== MOBILE MENU ==================== */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>Close</button>
        <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="#industries" onClick={() => setMobileOpen(false)}>Industries</a>
        <a href="#approach" onClick={() => setMobileOpen(false)}>Approach</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </div>

      {/* ==================== HERO ==================== */}
      <div id="hero">
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc="/15381345_1920_1080_25fps.mp4"
          bgImageSrc="/Modern%20Minimalist%20Scene.png"
          title="Isolate Truth."
          date="Strategic Advisory · Since 2018"
          textBlend={false}
        >
          {/* Revealed after hero fully expands */}
          <div className="hero-expanded-content">
            <p className="hero-desc" style={{ marginBottom: '48px', maxWidth: '560px' }}>
              When financial stress creates fog, we strip away the symptoms to identify the root cause, stabilize the core, and design a rational path back to solvency.
            </p>
            <div className="hero-foot-inline">
              <div className="hero-actions">
                <a href="#services" className="btn btn-dark">Explore Services <span className="arrow">↗</span></a>
                <a href="#contact" className="btn btn-light">Schedule a Call <span className="arrow">↗</span></a>
              </div>
              <div className="hero-meta">
                <div className="row"><span>Industries</span><b>14+</b></div>
                <div className="row"><span>Capabilities</span><b>08</b></div>
                <div className="row"><span>Signature Sprint</span><b>3 Weeks</b></div>
                <div className="row"><span>Footprint</span><b>Global</b></div>
              </div>
            </div>
          </div>
        </ScrollExpandMedia>
      </div>

      {/* ==================== TICKER ==================== */}
      <div className="ticker">
        <div className="ticker-track">
          <div className="tick"><span className="tick-num">14+</span><span className="tick-label">Industries Served</span></div>
          <span className="tick-sep"></span>
          <div className="tick"><span className="tick-num">08</span><span className="tick-label">Core Capabilities</span></div>
          <span className="tick-sep"></span>
          <div className="tick"><span className="tick-num">3wk</span><span className="tick-label">PMF Advisory Sprint</span></div>
          <span className="tick-sep"></span>
          <div className="tick"><span className="tick-num">360°</span><span className="tick-label">Business Transformation</span></div>
          <span className="tick-sep"></span>
          <div className="tick"><span className="tick-num">14+</span><span className="tick-label">Industries Served</span></div>
          <span className="tick-sep"></span>
          <div className="tick"><span className="tick-num">08</span><span className="tick-label">Core Capabilities</span></div>
          <span className="tick-sep"></span>
          <div className="tick"><span className="tick-num">3wk</span><span className="tick-label">PMF Advisory Sprint</span></div>
          <span className="tick-sep"></span>
          <div className="tick"><span className="tick-num">360°</span><span className="tick-label">Business Transformation</span></div>
          <span className="tick-sep"></span>
        </div>
      </div>

      {/* ==================== ABOUT ==================== */}
      <section className="block" id="about">
        <div className="wrap">
          <div className="block-head reveal">
            <div className="num">— 01 / Philosophy</div>
            <div className="head-main">
              <span className="eyebrow">Our Philosophy</span>
              <h2>Clarity Before<br /><span className="em italic">Counsel</span></h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal">
              <p>Mahadik &amp; Company was founded on a singular conviction: that the most powerful strategic advice is ruthlessly clear, evidence-driven, and built around your organisation's unique context — not generic frameworks.</p>
              <p>We don&apos;t believe in lengthy engagements that produce reports no one implements. We believe in <strong>focused advisory relationships</strong> that produce transformational results, measurable outcomes, and lasting capability within your team.</p>
              <p>From startups finding product-market fit to enterprises navigating industry disruption, our firm brings the same rigour, candour, and depth to every mandate.</p>

              <div className="about-values">
                <div className="value">
                  <span className="vnum">— 01</span>
                  <div className="vname"><em>Rigour</em></div>
                  <p className="vbody">Every recommendation is grounded in data, first-principles thinking, and deep sector knowledge.</p>
                </div>
                <div className="value">
                  <span className="vnum">— 02</span>
                  <div className="vname"><em>Candour</em></div>
                  <p className="vbody">We tell our clients what they need to hear — not what they want to hear.</p>
                </div>
                <div className="value">
                  <span className="vnum">— 03</span>
                  <div className="vname"><em>Ownership</em></div>
                  <p className="vbody">We work alongside you, not at arm&apos;s length. Your success is our accountability.</p>
                </div>
                <div className="value">
                  <span className="vnum">— 04</span>
                  <div className="vname"><em>Impact</em></div>
                  <p className="vbody">We measure our worth by the results we deliver — not the slides we produce.</p>
                </div>
              </div>
            </div>

            <aside className="about-visual reveal reveal-2">
              <div className="editorial-card">
                <div className="ec-top">
                  <span className="mark">M / C — 2018</span>
                  <span className="mark">№ 001</span>
                </div>
                <div className="ec-mono">M<span className="amp">&amp;</span>C</div>
                <div className="ec-tag">Trusted by leaders across fourteen industries.</div>
                <div className="ec-foot">
                  <span>India · Global</span>
                  <span>Folio · Advisory</span>
                </div>
              </div>
              <div className="about-quote">We measure our worth by the results we deliver — not the slides we produce.</div>
            </aside>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="block services" id="services">
        <div className="wrap">
          <div className="block-head reveal">
            <div className="num">— 02 / Capabilities</div>
            <div className="head-main">
              <span className="eyebrow">What We Do</span>
              <h2>Our<br /><span className="em italic">Capabilities</span></h2>
              <p className="intro">Eight specialised service lines, each designed to address a distinct dimension of business performance. Used together, they deliver comprehensive transformation.</p>
            </div>
          </div>

          {/* Signature */}
          <a href="#contact" className="signature reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="sig-side">
              <span className="sig-badge">Signature Offering</span>
              <div className="sig-num">3<small>Week Sprint</small></div>
            </div>
            <div className="sig-body">
              <h3 className="sig-title">PMF <em>Advisory</em></h3>
              <p className="sig-desc">Our signature offering. Find and fix the gap between your product and its market. We conduct rapid, structured product-market fit diagnostics and build a concrete action plan to close the gap — so your product doesn&apos;t just exist, it resonates. Designed for founders, product leaders, and business owners who are ready to stop guessing.</p>
            </div>
            <div className="sig-cta">
              <span className="mono"><span className="label-em">Begin →</span></span>
              <span className="big italic">Apply now</span>
              <span className="mono" style={{ color: 'rgba(247,243,234,0.45)' }}>Limited mandates</span>
            </div>
          </a>

          {/* Service list */}
          <div className="service-list">
            <div className="service-row reveal">
              <span className="srv-num">— 01</span>
              <div className="srv-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <h4 className="srv-name">Business Strategy &amp; Transformation</h4>
              <p className="srv-desc">Redefine your business model and strategic direction with transformation roadmaps that deliver sustainable competitive advantage.</p>
              <span className="srv-arrow">↗</span>
            </div>
            <div className="service-row reveal">
              <span className="srv-num">— 02</span>
              <div className="srv-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></svg>
              </div>
              <h4 className="srv-name">Customer &amp; Market Excellence</h4>
              <p className="srv-desc">Build deeper customer relationships and discover untapped market opportunities before the competition does.</p>
              <span className="srv-arrow">↗</span>
            </div>
            <div className="service-row reveal">
              <span className="srv-num">— 03</span>
              <div className="srv-icon">
                <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              </div>
              <h4 className="srv-name">Operations &amp; Performance Improvement</h4>
              <p className="srv-desc">Streamline operational workflows and implement continuous improvement frameworks that actually last.</p>
              <span className="srv-arrow">↗</span>
            </div>
            <div className="service-row reveal">
              <span className="srv-num">— 04</span>
              <div className="srv-icon">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h4 className="srv-name">Organisation &amp; People</h4>
              <p className="srv-desc">Develop organisational structures and cultures that drive innovation, retention, and excellence at scale.</p>
              <span className="srv-arrow">↗</span>
            </div>
            <div className="service-row reveal">
              <span className="srv-num">— 05</span>
              <div className="srv-icon">
                <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h4 className="srv-name">Financial Advisory &amp; Value Creation</h4>
              <p className="srv-desc">Optimise your financial strategy and capital allocation to maximise business value at every stage of growth.</p>
              <span className="srv-arrow">↗</span>
            </div>
            <div className="service-row reveal">
              <span className="srv-num">— 06</span>
              <div className="srv-icon">
                <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
              <h4 className="srv-name">Digital, Data &amp; Technology</h4>
              <p className="srv-desc">Harness technology and data analytics to drive digital transformation that your business actually adopts and uses.</p>
              <span className="srv-arrow">↗</span>
            </div>
            <div className="service-row reveal">
              <span className="srv-num">— 07</span>
              <div className="srv-icon">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4 className="srv-name">Sustainability, Risk &amp; Impact</h4>
              <p className="srv-desc">Build resilient strategies and responsible practices that manage risk while delivering measurable positive impact.</p>
              <span className="srv-arrow">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="block industries" id="industries">
        <div className="wrap">
          <div className="block-head reveal">
            <div className="num">— 03 / Coverage</div>
            <div className="head-main">
              <span className="eyebrow">Coverage</span>
              <h2>Industries<br />We <span className="em italic">Serve</span></h2>
              <p className="intro">Our partners carry deep domain knowledge across 14 sectors — so you always work with an advisor who understands the specific dynamics, regulatory environment, and competitive pressures of your industry.</p>
            </div>
          </div>

          <div className="industries-grid reveal">
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">01</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg></div></div>
              <div className="ind-name">Education &amp; E-Learning</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">02</span><div className="ind-icon"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg></div></div>
              <div className="ind-name">Financial Services</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">03</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg></div></div>
              <div className="ind-name">Food &amp; Beverage</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">04</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div></div>
              <div className="ind-name">Healthcare &amp; Wellness</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">05</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div></div>
              <div className="ind-name">Individual &amp; Family Services</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">06</span><div className="ind-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div></div>
              <div className="ind-name">Luxury &amp; Premium Retail</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">07</span><div className="ind-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div></div>
              <div className="ind-name">Manufacturing</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">08</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></div></div>
              <div className="ind-name">Professional Services</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">09</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div></div>
              <div className="ind-name">Public Sector</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">10</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div></div>
              <div className="ind-name">Real Estate &amp; Infrastructure</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">11</span><div className="ind-icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></div></div>
              <div className="ind-name">Retail &amp; FMCG</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">12</span><div className="ind-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div></div>
              <div className="ind-name">Technology</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">13</span><div className="ind-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></div></div>
              <div className="ind-name">Tourism &amp; Hospitality</div>
            </div>
            <div className="ind">
              <div className="ind-top"><span className="ind-idx">14</span><div className="ind-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div></div>
              <div className="ind-name">Startups</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== APPROACH ==================== */}
      <section className="block approach" id="approach">
        <div className="wrap">
          <div className="approach-grid">
            <div className="approach-sticky reveal">
              <span className="eyebrow">The Method</span>
              <h2>How We<br /><span className="em italic">Work</span></h2>
              <p className="intro">Every engagement follows a disciplined process designed to surface the real problem, not the presenting one — and deliver results you can build on.</p>
            </div>

            <div className="steps">
              <div className="step reveal">
                <div className="step-num">0<em>1</em></div>
                <div className="step-body">
                  <h3 className="step-title">Deep <em>Discovery</em></h3>
                  <p className="step-desc">We invest time understanding your business, market, team, and the outcomes you actually need — before proposing anything. No templates. No pre-packaged answers.</p>
                  <span className="step-tag">2–3 Days</span>
                </div>
              </div>
              <div className="step reveal">
                <div className="step-num">0<em>2</em></div>
                <div className="step-body">
                  <h3 className="step-title">Structured <em>Diagnosis</em></h3>
                  <p className="step-desc">We analyse data, interview stakeholders, map competitive dynamics, and pressure-test assumptions. The diagnosis drives everything that follows.</p>
                  <span className="step-tag">1–2 Weeks</span>
                </div>
              </div>
              <div className="step reveal">
                <div className="step-num">0<em>3</em></div>
                <div className="step-body">
                  <h3 className="step-title">Strategic <em>Architecture</em></h3>
                  <p className="step-desc">We design the strategic response — whether it&apos;s a transformation roadmap, financial model, operating model redesign, or market entry strategy.</p>
                  <span className="step-tag">Engagement Specific</span>
                </div>
              </div>
              <div className="step reveal">
                <div className="step-num">0<em>4</em></div>
                <div className="step-body">
                  <h3 className="step-title">Activation &amp; <em>Capability Transfer</em></h3>
                  <p className="step-desc">Strategy without execution is a document. We work alongside your team through implementation and ensure the capability to continue without us.</p>
                  <span className="step-tag">Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="testimonials" id="testimonials">
        <div className="block-head reveal">
          <div className="num">— 04 / Voices</div>
          <div className="head-main">
            <span className="eyebrow">Client Voices</span>
            <h2>What Our<br /><span className="em italic">Clients</span> Say</h2>
          </div>
        </div>

        <div className="t-rail-outer">
          <div className="t-rail">
            <article className="t-card">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Education</span></div>
              <p className="t-quote">Mahadik &amp; Company transformed the way we think about our market. The PMF Advisory sprint gave us more clarity in 3 weeks than 18 months of internal debate had.</p>
              <div className="t-author">
                <div className="t-init">R</div>
                <div><div className="t-name">Rajiv Mehta</div><div className="t-role">Founder &amp; CEO, EdTech Platform</div></div>
              </div>
            </article>
            <article className="t-card">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Financial Services</span></div>
              <p className="t-quote">The team&apos;s financial advisory work helped us restructure our capital allocation and identify ₹4Cr in operational savings within the first quarter. Exceptional work.</p>
              <div className="t-author">
                <div className="t-init">P</div>
                <div><div className="t-name">Priya Sharma</div><div className="t-role">CFO, Mid-Market NBFC</div></div>
              </div>
            </article>
            <article className="t-card">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Luxury Retail</span></div>
              <p className="t-quote">What differentiates M&amp;C is their candour. They told us our growth thesis was flawed — and then helped us build a better one. That honesty is rare and invaluable.</p>
              <div className="t-author">
                <div className="t-init">A</div>
                <div><div className="t-name">Anand Krishnan</div><div className="t-role">MD, Luxury Retail Group</div></div>
              </div>
            </article>
            <article className="t-card">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Healthcare</span></div>
              <p className="t-quote">Our operational transformation engagement delivered a 34% efficiency improvement and a redesigned delivery model our team actually owns. This is what good consulting looks like.</p>
              <div className="t-author">
                <div className="t-init">S</div>
                <div><div className="t-name">Sunita Bose</div><div className="t-role">COO, Healthcare Network</div></div>
              </div>
            </article>
            <article className="t-card">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Public Sector</span></div>
              <p className="t-quote">M&amp;C helped us navigate a complex public-sector bid and infrastructure project from strategic positioning through to execution planning. Deeply professional throughout.</p>
              <div className="t-author">
                <div className="t-init">V</div>
                <div><div className="t-name">Vikram Nair</div><div className="t-role">Director, Infrastructure Firm</div></div>
              </div>
            </article>
            {/* Duplicates for seamless loop */}
            <article className="t-card" aria-hidden="true">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Education</span></div>
              <p className="t-quote">Mahadik &amp; Company transformed the way we think about our market. The PMF Advisory sprint gave us more clarity in 3 weeks than 18 months of internal debate had.</p>
              <div className="t-author">
                <div className="t-init">R</div>
                <div><div className="t-name">Rajiv Mehta</div><div className="t-role">Founder &amp; CEO, EdTech Platform</div></div>
              </div>
            </article>
            <article className="t-card" aria-hidden="true">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Financial Services</span></div>
              <p className="t-quote">The team&apos;s financial advisory work helped us restructure our capital allocation and identify ₹4Cr in operational savings within the first quarter. Exceptional work.</p>
              <div className="t-author">
                <div className="t-init">P</div>
                <div><div className="t-name">Priya Sharma</div><div className="t-role">CFO, Mid-Market NBFC</div></div>
              </div>
            </article>
            <article className="t-card" aria-hidden="true">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Luxury Retail</span></div>
              <p className="t-quote">What differentiates M&amp;C is their candour. They told us our growth thesis was flawed — and then helped us build a better one. That honesty is rare and invaluable.</p>
              <div className="t-author">
                <div className="t-init">A</div>
                <div><div className="t-name">Anand Krishnan</div><div className="t-role">MD, Luxury Retail Group</div></div>
              </div>
            </article>
            <article className="t-card" aria-hidden="true">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Healthcare</span></div>
              <p className="t-quote">Our operational transformation engagement delivered a 34% efficiency improvement and a redesigned delivery model our team actually owns. This is what good consulting looks like.</p>
              <div className="t-author">
                <div className="t-init">S</div>
                <div><div className="t-name">Sunita Bose</div><div className="t-role">COO, Healthcare Network</div></div>
              </div>
            </article>
            <article className="t-card" aria-hidden="true">
              <div className="t-card-top"><span className="t-mark">&ldquo;</span><span className="t-indu">Public Sector</span></div>
              <p className="t-quote">M&amp;C helped us navigate a complex public-sector bid and infrastructure project from strategic positioning through to execution planning. Deeply professional throughout.</p>
              <div className="t-author">
                <div className="t-init">V</div>
                <div><div className="t-name">Vikram Nair</div><div className="t-role">Director, Infrastructure Firm</div></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-left reveal">
              <span className="eyebrow">Get In Touch</span>
              <h2>Begin the<br /><span className="em italic">Conversation</span></h2>
              <p className="contact-desc">Every meaningful engagement starts with an honest conversation. Tell us about your organisation, your challenge, and what you&apos;re trying to achieve. No commitment required.</p>
              <div className="contact-details">
                <div className="cd">
                  <span className="cd-label">Email</span>
                  <span className="cd-val"><a href="mailto:hello@mahadikandcompany.com">hello@mahadikandcompany.com</a></span>
                </div>
                <div className="cd">
                  <span className="cd-label">Location</span>
                  <span className="cd-val">India — Serving clients globally</span>
                </div>
                <div className="cd">
                  <span className="cd-label">Response Time</span>
                  <span className="cd-val">Within one business day</span>
                </div>
              </div>
            </div>

            <form className="contact-form reveal reveal-2" onSubmit={handleSubmit}>
              <div className="f-top">
                <span className="mono"><span className="label-em" style={{ color: 'var(--accent)' }}>Enquiry</span> · Folio №—24</span>
                <span className="mono" style={{ color: 'var(--muted)' }}>All fields optional</span>
              </div>
              <div className="f-grid">
                <div className="f-row">
                  <label className="f-label">First Name</label>
                  <input type="text" className="f-input" placeholder="Your name" />
                </div>
                <div className="f-row">
                  <label className="f-label">Organisation</label>
                  <input type="text" className="f-input" placeholder="Company name" />
                </div>
              </div>
              <div className="f-row">
                <label className="f-label">Email Address</label>
                <input type="email" className="f-input" placeholder="you@company.com" />
              </div>
              <div className="f-row">
                <label className="f-label">Service Interest</label>
                <select className="f-select" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>PMF Advisory (Signature)</option>
                  <option>Business Strategy &amp; Transformation</option>
                  <option>Customer &amp; Market Excellence</option>
                  <option>Operations &amp; Performance Improvement</option>
                  <option>Organisation &amp; People</option>
                  <option>Financial Advisory &amp; Value Creation</option>
                  <option>Digital, Data &amp; Technology</option>
                  <option>Sustainability, Risk &amp; Impact</option>
                </select>
              </div>
              <div className="f-row">
                <label className="f-label">Your Challenge</label>
                <textarea className="f-textarea" placeholder="Briefly describe what you're working on or struggling with..."></textarea>
              </div>
              <button
                type="submit"
                className={`f-submit${formState === 'sent' ? ' sent' : ''}`}
                disabled={formState !== 'idle'}
              >
                {formState === 'idle' && <>Send Enquiry <span className="arrow">↗</span></>}
                {formState === 'sending' && <>Sending&hellip; <span className="arrow">↗</span></>}
                {formState === 'sent' && <>Enquiry Sent ✓</>}
              </button>
              <span className="f-note">We respect your privacy. No spam, ever.</span>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-wordmark">Mahadik <span className="amp">&amp;</span> Company</div>

          <div className="foot-cols">
            <div className="foot-brand">
              <span className="name">Mahadik <span className="amp">&amp;</span> Company</span>
              <span className="sub">Management Consulting</span>
              <p className="desc">A premier management consulting firm serving leaders across 14 industries with strategic clarity, operational rigour, and transformational impact.</p>
            </div>
            <div>
              <div className="foot-col-title">Services</div>
              <ul className="foot-links">
                <li><a href="#services">PMF Advisory</a></li>
                <li><a href="#services">Business Strategy</a></li>
                <li><a href="#services">Market Excellence</a></li>
                <li><a href="#services">Operations</a></li>
                <li><a href="#services">Organisation &amp; People</a></li>
                <li><a href="#services">Financial Advisory</a></li>
                <li><a href="#services">Digital &amp; Data</a></li>
                <li><a href="#services">Sustainability &amp; Risk</a></li>
              </ul>
            </div>
            <div>
              <div className="foot-col-title">Company</div>
              <ul className="foot-links">
                <li><a href="#about">About</a></li>
                <li><a href="#approach">Our Approach</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="foot-col-title">Connect</div>
              <ul className="foot-links">
                <li><a href="#">LinkedIn</a></li>
                <li><a href="mailto:hello@mahadikandcompany.com">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© 2025 Mahadik &amp; Company. All rights reserved.</span>
            <span className="right">Clarity. Conviction. Impact.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
