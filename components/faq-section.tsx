"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "Potřebuji umět programovat abych se mohl kurzu zúčastnit?",
      answer: "Ne, kurz je pro úplné laiky; vše stavíme klikací formou a ukážeme vám přesně, co a kde nastavit.",
    },
    {
      question: "Můžu si kurz pustit i zpětně?",
      answer: "Ano, každá lekce se nahrává a v členské sekci vám zůstává po celou dobu kurzu.",
    },
    {
      question: "Je možné kurz uhradit na firmu?",
      answer:
        "Samozřejmě – stačí zvolit variantu chci nakupovat na firmu při platbě, zadat IČO a fakturu vám rovnou vystavíme na firmu.",
    },
    {
      question: "Co když se nestihnu vše naučit za 3 týdny?",
      answer: "Pokud si zaplatíte verzi kurzu PRO, tak vám materiály a vstup do komunity zůstávají doživotně.",
    },
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 bg-black">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            <span className="relative inline-block">
              FAQ –{" "}
              <span className="relative">
                nejčastější otázky
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary mt-1"></span>
              </span>
            </span>
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-light/80 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
