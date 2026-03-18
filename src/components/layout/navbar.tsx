"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, ctaCopy } from "@/lib/constants";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-display text-2xl tracking-wide uppercase text-zinc-50 hover:text-amber-500 transition-colors duration-200"
          >
            Marcus Cole
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-[0.05em] text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="nav" asChild>
              <Link href="/coaching#booking">{ctaCopy.nav}</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
