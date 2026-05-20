import React from "react";

export function TopBar() {
  return (
    <header className="spec-topbar">
      <div className="spec-topbar-inner">
        <a className="brand" href="#/">
          <span className="brand-mark">FHIR</span>
          <span className="build-tag">R4 -> R6 HTML Pages</span>
        </a>
        <nav className="top-nav" aria-label="Primary">
          <a href="#/">Findings</a>
          <a href="#/pages">Pages</a>
          <a href="https://build.fhir.org/" target="_blank" rel="noopener">FHIR CI</a>
        </nav>
      </div>
    </header>
  );
}

export function Crumb({ children }: { children: React.ReactNode }) {
  return (
    <div className="spec-crumb">
      <div className="spec-crumb-inner">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="spec-footer">
      <div className="spec-footer-inner">
        <span>
          Generated from local review abstractions in <code>todo/abstractions</code>. Use with the official HL7 FHIR source and ballot materials.
        </span>
        <a href="#/">Findings explorer</a>
        <a href="#/pages">Page inventory</a>
      </div>
    </footer>
  );
}
