import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="og-footer">
      <div className="og-footer-inner">
        <div className="og-footer-brand">
          <div className="og-footer-logo-row">
            <span className="og-logo-mark" aria-hidden="true" />
            <span className="og-logo-text">OpenGen</span>
          </div>
          <p className="og-footer-tagline">Build. Share. Grow.</p>
        </div>
        <div className="og-footer-links">
          <div>
            <h4>Explore</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="mailto:hello@opengen.tech"><FaEnvelope /> hello@opengen.tech</a>
            <div className="og-footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="og-footer-bottom">
        <p>© {new Date().getFullYear()} OpenGen. All rights reserved.</p>
      </div>
    </footer>
  );
}
