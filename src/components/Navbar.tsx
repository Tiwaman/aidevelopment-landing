"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold">
            <span className="text-blue-500">Ai</span>Development
            <span className="text-blue-500">.in</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800 mt-2 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary inline-block mt-3 text-sm">
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
