"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Command } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/Icons";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#about", label: "Identity" },
  { href: "/#projects", label: "Systems" },
  { href: "/#tech-stack", label: "Stack" },
  { href: "/#experience", label: "Journey" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#030305]/80 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 text-lg font-bold tracking-tight text-white">
          <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/[0.2] transition-all duration-300">
            <Command className="w-4 h-4" />
          </div>
          <span>Nyasa Lohiya</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.03] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://github.com/nyasalohiya"
            target="_blank"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nyasa-lohiya-486751283"
            target="_blank"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="ml-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Initialize
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white/50 bg-white/[0.03] border border-white/[0.05]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#060608] border-b border-white/[0.05] shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.03] font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-white/[0.05]">
                <Link
                  href="https://github.com/nyasalohiya"
                  target="_blank"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 bg-white/[0.03]"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nyasa-lohiya-486751283"
                  target="_blank"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 bg-white/[0.03]"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
