"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

  // Initialize theme from system or localStorage
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  // Navbar routes
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-white dark:bg-gray-900 shadow z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Vikram Kumar
        </Link>

        {/* Navigation Links + Resume + Theme Toggle */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition hover:text-blue-600 ${
                    pathname === item.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Resume Download Button */}
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

          {/* Dark/Light Theme Toggle
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button> */}
        </div>
      </div>
    </motion.nav>
  );
}
