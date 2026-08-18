import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPenNib, FaBullhorn, FaGraduationCap, FaCodeBranch, FaGavel } from "react-icons/fa";

const highlights = [
  { icon: <FaCalendarAlt />, title: "Event Support", text: "Planning and on-the-ground support for conferences, meetups, and hackathons." },
  { icon: <FaPenNib />, title: "Developer Content", text: "Technical blogs, tutorials, and demos that speak the developer's language." },
  { icon: <FaBullhorn />, title: "Brand Amplification", text: "Extending your voice across social and community channels." },
  { icon: <FaGraduationCap />, title: "Coursework & Learning", text: "Curriculum and learning resources that build real skills." },
  { icon: <FaCodeBranch />, title: "Open Source Partnerships", text: "Connecting brands with maintainers and open source projects." },
  { icon: <FaGavel />, title: "Judging & Committees", text: "Representing partners on program committees, panels, and judging." },
];

export default function Home() {
  return (
    <main className="og-page">
      <section className="og-hero">
        <div className="og-hero-glow" aria-hidden="true" />
        <div className="og-hero-inner">
          <p className="og-eyebrow">Developer Community & Partnerships</p>
          <h1>Building bridges between tech companies and developer communities.</h1>
          <p className="og-hero-sub">
            OpenGen partners with the tech industry to grow developer communities —
            through events, content, thought leadership, and open source collaboration.
          </p>
          <div className="og-hero-actions">
            <Link to="/services" className="og-btn og-btn-primary">Explore Services</Link>
            <Link to="/contact" className="og-btn og-btn-ghost">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="og-section">
        <h2 className="og-section-title">What We Do</h2>
        <p className="og-section-sub">
          From event stages to open source repos, OpenGen shows up wherever developers do.
        </p>
        <div className="og-grid og-grid-3">
          {highlights.map((h) => (
            <div className="og-card" key={h.title}>
              <div className="og-card-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="og-section og-section-alt">
        <h2 className="og-section-title">Why Partner With OpenGen</h2>
        <div className="og-grid og-grid-3">
          <div className="og-card og-card-flat">
            <h3>Community-First</h3>
            <p>We build trust with developers first, so your brand earns attention, not just impressions.</p>
          </div>
          <div className="og-card og-card-flat">
            <h3>Industry Connected</h3>
            <p>Deep ties across events, working groups, and open source communities.</p>
          </div>
          <div className="og-card og-card-flat">
            <h3>End-to-End Execution</h3>
            <p>From strategy and content to on-site event support — we handle the details.</p>
          </div>
        </div>
      </section>

      <section className="og-cta">
        <h2>Let's build something developers will actually use.</h2>
        <Link to="/contact" className="og-btn og-btn-primary">Start a Conversation</Link>
      </section>
    </main>
  );
}
