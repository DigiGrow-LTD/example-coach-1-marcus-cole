"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPast } from "@/hooks/use-scroll-past";
import { ctaCopy } from "@/lib/constants";

export function MobileCtaBar() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const show = useScrollPast(sentinelRef);

  return (
    <>
      {/* Sentinel element placed at viewport height to detect scroll past hero */}
      <div
        ref={sentinelRef}
        className="absolute top-[100vh] h-px w-px"
        aria-hidden="true"
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/50 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Button variant="primary" size="full" asChild>
          <Link
            href="/coaching#booking"
            className="gap-2"
          >
            {ctaCopy.mobile}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </Button>
      </div>
    </>
  );
}
