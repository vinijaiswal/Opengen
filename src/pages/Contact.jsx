import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@opengen.tech?subject=${subject}&body=${body}`;
  };

  return (
    <main className="og-page">
      <section className="og-page-header">
        <p className="og-eyebrow">Contact</p>
        <h1>Let's build your developer community together.</h1>
      </section>

      <section className="og-section og-contact-grid">
        <form className="og-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Company
            <input type="text" name="company" value={form.company} onChange={handleChange} />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="og-btn og-btn-primary">Send Message</button>
        </form>

        <div className="og-contact-info">
          <h3>Reach Us Directly</h3>
          <a className="og-contact-link" href="mailto:hello@opengen.tech"><FaEnvelope /> hello@opengen.tech</a>
          <div className="og-footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
          <p className="og-contact-note">
            Update this email and social links with your real contact details once the site is live.
          </p>
        </div>
      </section>
    </main>
  );
}
