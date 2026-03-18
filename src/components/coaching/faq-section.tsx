import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { faqs } from "@/data/faq";

export function FaqSection() {
  return (
    <SectionWrapper alternate>
      <SectionHeader
        eyebrow="Questions"
        headline="Frequently asked"
        description="Straight answers to the things people usually want to know."
      />

      <AnimateOnScroll>
        <div className="max-w-3xl mx-auto">
          <Accordion className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="border border-zinc-800 bg-zinc-900 px-6 data-open:border-amber-700/30"
              >
                <AccordionTrigger className="text-left text-zinc-50 font-medium py-5 hover:text-amber-500 transition-colors duration-200 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
