"use client";

import { useState, useEffect, type RefObject } from "react";

export function useScrollPast(ref: RefObject<HTMLElement | null>): boolean {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolledPast(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return scrolledPast;
}
