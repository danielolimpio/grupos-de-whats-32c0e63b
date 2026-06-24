import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { HOME_FAQ_ITEMS } from "@/data/seo-faq";

export const homeFaqItems = HOME_FAQ_ITEMS;

export function HomeFAQ() {
  return (
    <section
      aria-labelledby="faq-home-title"
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-6 md:p-8 border border-border mt-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <HelpCircle className="h-6 w-6 text-primary" />
        </div>
        <h2 id="faq-home-title" className="text-2xl md:text-3xl font-bold text-foreground">
          Perguntas frequentes sobre grupos de WhatsApp
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {homeFaqItems.map((item, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`}>
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
