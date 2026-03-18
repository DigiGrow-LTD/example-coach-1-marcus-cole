"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandImage } from "@/components/shared/brand-image";
import { NoiseOverlay } from "@/components/shared/noise-overlay";
import { ctaCopy } from "@/lib/constants";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <BrandImage
        src="/images/hero/hero-bg.jpg"
        alt="Athlete training in a dark gym environment"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-zinc-950/40"
        aria-hidden="true"
      />

      <NoiseOverlay />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0 w-full">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] tracking-wide uppercase leading-[0.95] text-zinc-50">
            The edge isn&apos;t physical.{" "}
            <span className="text-amber-500">It&apos;s mental.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl font-light">
            Performance mindset coaching for athletes and ambitious
            professionals who refuse to settle for average.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" asChild>
              <Link href="/coaching#booking" className="gap-2">
                {ctaCopy.hero.primary}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/coaching">{ctaCopy.hero.secondary}</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
