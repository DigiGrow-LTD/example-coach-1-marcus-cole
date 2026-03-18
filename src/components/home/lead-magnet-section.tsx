"use client";

import { useState } from "react";
import { Download, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

type FormState = "idle" | "loading" | "success" | "error";

export function LeadMagnetSection() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setFormState("error");
      return;
    }

    setFormState("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  };

  return (
    <SectionWrapper alternate noise>
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader
          eyebrow="Free Resource"
          headline="The Mental Edge Guide"
          description="5 practical techniques I use with every client to break through performance plateaus. No fluff, no filler — just what works."
        />

        <AnimateOnScroll>
          {formState === "success" ? (
            <div className="flex flex-col items-center gap-3 p-8 bg-zinc-900 border border-zinc-800">
              <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={1.5} />
              <p className="text-zinc-50 font-medium">
                Check your inbox. The guide is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">
                    Your email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formState === "error") setFormState("idle");
                    }}
                    aria-describedby={
                      formState === "error" ? "email-error" : "email-privacy"
                    }
                    aria-invalid={formState === "error"}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={formState === "loading"}
                  className="gap-2 shrink-0"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" strokeWidth={1.5} />
                      GET THE FREE GUIDE
                    </>
                  )}
                </Button>
              </div>

              {formState === "error" && (
                <p
                  id="email-error"
                  className="flex items-center gap-2 text-red-500 text-sm"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4" strokeWidth={1.5} />
                  That email doesn&apos;t look right. Try again.
                </p>
              )}

              <p id="email-privacy" className="text-zinc-600 text-xs">
                No spam. Unsubscribe any time.
              </p>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
