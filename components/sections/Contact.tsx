"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState !== "idle") return;
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1200);
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <RevealOnScroll>
            <h2>
              Begin the <span className="em">Conversation</span>
            </h2>
            <p className="contact-desc">
              Every meaningful engagement starts with an honest conversation. Tell us about
              your organisation, your challenge, and what you&apos;re trying to achieve. No
              commitment required.
            </p>
            <div className="contact-details">
              <div className="cd">
                <span className="cd-label">Email</span>
                <span className="cd-val">
                  <a href="mailto:hello@mahadikandcompany.com">hello@mahadikandcompany.com</a>
                </span>
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
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="f-top">
                <span className="label">Enquiry Form</span>
                <span className="label">All fields optional</span>
              </div>
              <div className="f-grid">
                <div className="f-row">
                  <label className="f-label" htmlFor="firstName">
                    First Name
                  </label>
                  <input id="firstName" name="firstName" type="text" className="f-input" placeholder="Your name" />
                </div>
                <div className="f-row">
                  <label className="f-label" htmlFor="org">
                    Organisation
                  </label>
                  <input id="org" name="org" type="text" className="f-input" placeholder="Company name" />
                </div>
              </div>
              <div className="f-row">
                <label className="f-label" htmlFor="email">
                  Email Address
                </label>
                <input id="email" name="email" type="email" className="f-input" placeholder="you@company.com" />
              </div>
              <div className="f-row">
                <label className="f-label" htmlFor="service">
                  Service Interest
                </label>
                <select id="service" name="service" className="f-select" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
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
                <label className="f-label" htmlFor="challenge">
                  Your Challenge
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  className="f-textarea"
                  placeholder="Briefly describe what you're working on or struggling with..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={`f-submit${formState === "sent" ? " sent" : ""}`}
                disabled={formState !== "idle"}
                aria-live="polite"
              >
                {formState === "idle" && (
                  <>
                    Send Enquiry <ArrowUpRight size={16} strokeWidth={1.5} />
                  </>
                )}
                {formState === "sending" && (
                  <>
                    Sending… <ArrowUpRight size={16} strokeWidth={1.5} />
                  </>
                )}
                {formState === "sent" && (
                  <>
                    Enquiry Sent <Check size={16} strokeWidth={1.5} />
                  </>
                )}
              </button>
              <span className="f-note">We respect your privacy. No spam, ever.</span>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
