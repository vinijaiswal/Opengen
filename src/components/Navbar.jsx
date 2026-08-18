import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="og-navbar">
      <div className="og-navbar-inner">
        <NavLink to="/" className="og-logo" onClick={() => setOpen(false)}>
          <span className="og-logo-mark" aria-hidden="true" />
          <span className="og-logo-text">OpenGen</span>
        </NavLink>
        <button
          className="og-navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`og-nav-links ${open ? "og-nav-links-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => "og-nav-link" + (isActive ? " og-nav-link-active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="og-btn og-btn-primary og-nav-cta" onClick={() => setOpen(false)}>
            Partner With Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
