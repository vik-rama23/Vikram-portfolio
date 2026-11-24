"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const items = [{ href: "/about", label: "About" }, { href: "/experience", label: "Experience" }, { href: "/skills", label: "Expertise" }, { href: "/projects", label: "Selected work" }];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-nav"><div className="nav-inner">
    <Link href="/" aria-label="Vikram Kumar home" className="flex items-center gap-3"><span className="brand-mark">VK</span><span className="text-xs font-semibold tracking-[.12em] uppercase">Vikram Kumar</span></Link>
    <nav className="nav-links" aria-label="Main navigation">{items.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}<Link href="/contact" className="nav-cta">Let's talk</Link><a href="/Vikramkumar-resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav>
    <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
  </div>{open && <nav className="mobile-links" aria-label="Mobile navigation">{items.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Let's talk</Link><a href="/Vikramkumar-resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Download résumé ↗</a></nav>}</header>;
}