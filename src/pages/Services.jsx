import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt, FaPenNib, FaChartBar, FaBullhorn, FaGraduationCap,
  FaBook, FaCodeBranch, FaComments, FaUsers, FaGavel,
} from "react-icons/fa";

const services = [
  { icon: <FaCalendarAlt />, title: "Event Support", text: "Planning, logistics, and on-the-ground support for developer conferences, meetups, and hackathons." },
  { icon: <FaPenNib />, title: "Developer Content", text: "Technical blog posts, tutorials, demos, and video content written for developers, by people who understand them." },
  { icon: <FaChartBar />, title: "Industry Reports", text: "Original research and reports on developer trends, tooling, and community sentiment." },
  { icon: <FaBullhorn />, title: "Social Media Amplification", text: "Amplifying your brand and community voice across the social channels developers actually use." },
  { icon: <FaGraduationCap />, title: "Coursework", text: "Structured curriculum and coursework that builds real, practical developer skills." },
  { icon: <FaBook />, title: "Learning Resources", text: "Guides, documentation, and self-serve learning material that reduce time-to-first-success." },
  { icon: <FaCodeBranch />, title: "Open Source Partnerships", text: "Connecting brands with open source projects and maintainers for authentic collaboration." },
  { icon: <FaComments />, title: "Thought Leadership & Forums", text: "Sharing industry thought leadership and representing partners in relevant developer forums." },
  { icon: <FaUsers />, title: "Working Group Participation", text: "Contributing to standards bodies and working groups shaping the developer ecosystem." },
  { icon: <FaGavel />, title: "Judging & Program Committees", text: "Serving as judges and program committee members for hackathons, conferences, and award programs." },
];

export default function Services() {
  return (
    <main className="og-page">
      <section className="og-page-header">
        <p className="og-eyebrow">Services</p>
        <h1>Every way OpenGen shows up for your developer community.</h1>
        <p className="og-hero-sub">
          Pick one service or combine several — each is designed to plug into the rest of your
          developer relations strategy.
        </p>
      </section>

      <section className="og-section">
        <div className="og-grid og-grid-3">
          {services.map((s) => (
            <div className="og-card" key={s.title}>
              <div className="og-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="og-cta">
        <h2>Not sure where to start?</h2>
        <p>Tell us about your community goals and we'll map the right mix of services.</p>
        <Link to="/contact" className="og-btn og-btn-primary">Talk to OpenGen</Link>
      </section>
    </main>
  );
}
