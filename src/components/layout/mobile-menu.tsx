"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks, ctaCopy } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full max-w-full sm:max-w-full border-none bg-zinc-950/98 p-0"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <div className="flex flex-col items-center justify-center h-full relative">
          <SheetClose
            className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-zinc-50 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </SheetClose>

          <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-display text-3xl tracking-wide uppercase text-zinc-50 hover:text-amber-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button variant="primary" onClick={onClose}>
                <Link href="/coaching#booking">
                  {ctaCopy.nav}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
