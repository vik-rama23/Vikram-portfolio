"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // close menu on navigation
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    // { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
          Vikram Kumar
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`transition hover:text-blue-600 ${
                    pathname === n.href ? "text-blue-600 font-semibold" : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Vikramkumar-resume.pdf"
                download="Vikram_Kumar_Resume.pdf"
                className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 text-sm transition"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Open menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-gray-800 dark:text-gray-100" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-gray-100" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <ul className="flex flex-col gap-3 py-4 items-center">
              {navItems.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 px-4 text-lg rounded-md transition hover:text-blue-600 ${
                      pathname === n.href ? "text-blue-600 font-semibold" : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Vikramkumar-resume.pdf"
                  download="Vikram_Kumar_Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
