"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="#home" className="nav-brand" aria-label="Vikram Kumar home">
          <span className="brand-mark">VK</span><span>Vikram Kumar</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a href="/Vikramkumar-resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
          <a href="#contact" className="nav-cta">Let’s talk</a>
        </nav>
        <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <nav className="mobile-links" aria-label="Mobile navigation">
        {items.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href="/Vikramkumar-resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Résumé ↗</a>
      </nav>}
    </header>
  );
}
