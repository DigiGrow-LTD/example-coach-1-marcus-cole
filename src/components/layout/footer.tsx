import Link from "next/link";
import { Instagram } from "lucide-react";
import { navLinks, ctaCopy } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-display text-2xl tracking-wide uppercase text-zinc-50 hover:text-amber-500 transition-colors duration-200"
            >
              Marcus Cole
            </Link>
            <p className="mt-4 text-zinc-500 text-sm leading-relaxed max-w-xs">
              Performance mindset coaching for athletes and ambitious
              professionals. Manchester, UK.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide uppercase text-zinc-50 mb-4">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide uppercase text-zinc-50 mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/marcuscole"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
                aria-label="Follow Marcus Cole on Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                <span>@marcuscole</span>
              </a>
              <Link
                href="/coaching#booking"
                className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-600 font-semibold tracking-widest uppercase transition-colors duration-200"
              >
                {ctaCopy.footer}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <p className="text-zinc-600 text-xs text-center">
            &copy; {new Date().getFullYear()} Marcus Cole Performance Coaching.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
