"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "SHOP", href: "/#shop" },
  { label: "STUDIO", href: "/studio" },
  { label: "ABOUT", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F5F5F5]/95 backdrop-blur-sm border-b border-[#E8E8E8]">
        <div className="flex items-center justify-between px-6 md:px-10 h-14">
          {/* Left: Menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] w-6 group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-px w-full bg-[#111111] origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-px w-full bg-[#111111]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-px w-full bg-[#111111] origin-center"
            />
          </button>

          {/* Center: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold tracking-[0.18em] text-[#111111] hover:text-[#3A3A3A] transition-colors"
          >
            280 BLANKS
          </Link>

          {/* Right: Cart */}
          <button
            onClick={openCart}
            className="flex items-center gap-2 text-xs tracking-[0.08em] text-[#111111] hover:text-[#3A3A3A] transition-colors"
            aria-label="Open cart"
          >
            <CartIcon />
            {count > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-xs tabular-nums"
              >
                ({count})
              </motion.span>
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#F5F5F5] flex flex-col justify-center px-10 pt-14"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl md:text-6xl font-semibold tracking-[0.1em] text-[#111111] hover:text-[#888888] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-10 left-10 text-xs tracking-[0.1em] text-[#888888]">
              280 GSM — MADE IN PORTUGAL
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M1 1h2.5l1.7 8.5h8.6l1.4-5.5H5" />
      <circle cx="7.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
