import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="og-page">
      <section className="og-page-header">
        <p className="og-eyebrow">About OpenGen</p>
        <h1>We help the tech industry build real developer relationships.</h1>
      </section>

      <section className="og-section og-section-narrow">
        <h2 className="og-section-title">Our Story</h2>
        <p>
          OpenGen is a business entity built on one idea: developer trust is earned in community,
          not campaigns. We partner with the tech industry to build developer communities and
          partnerships — showing up as event support, developer content, industry research, and
          hands-on collaboration with open source projects.
        </p>
        <p>
          Rather than a single service, OpenGen acts as an extension of your team wherever
          developers gather: on conference stages, inside working groups, across social feeds,
          and in the open source repos that power today's software.
        </p>
      </section>

      <section className="og-section">
        <h2 className="og-section-title">What Guides Us</h2>
        <div className="og-grid og-grid-4">
          <div className="og-card og-card-flat">
            <h3>Community First</h3>
            <p>Every engagement starts with what developers actually need.</p>
          </div>
          <div className="og-card og-card-flat">
            <h3>Authenticity</h3>
            <p>Thought leadership and content that reads like it was written by practitioners.</p>
          </div>
          <div className="og-card og-card-flat">
            <h3>Collaboration</h3>
            <p>We work alongside partners, not just for them.</p>
          </div>
          <div className="og-card og-card-flat">
            <h3>Impact</h3>
            <p>Measured by real community growth, not vanity metrics.</p>
          </div>
        </div>
      </section>

      <section className="og-section og-section-alt og-section-narrow">
        <h2 className="og-section-title">How We Work</h2>
        <p>
          OpenGen's work spans the full lifecycle of developer engagement — from planning an
          event and producing the content that supports it, to representing partners in industry
          forums, working groups, and judging panels long after the event ends.
        </p>
        <Link to="/services" className="og-btn og-btn-primary">See Our Services</Link>
      </section>
    </main>
  );
}
