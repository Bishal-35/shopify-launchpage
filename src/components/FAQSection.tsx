
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the self-foaming toilet cleaner work?",
    answer: "Our self-foaming tablets activate when they come in contact with water. They create an expanding foam that reaches under the rim and other hard-to-reach areas. The active ingredients break down stains, limescale, and kill bacteria while the foam carries away the dissolved debris."
  },
  {
    question: "How long does each tablet last?",
    answer: "Each tablet provides cleaning action for approximately 50 flushes, which typically lasts 2-3 weeks in an average household. The duration may vary depending on the frequency of toilet use and water conditions in your area."
  },
  {
    question: "Is it safe for septic systems and plumbing?",
    answer: "Yes, our formula is completely safe for all types of plumbing systems, including septic tanks. The tablets dissolve completely and won't cause any blockages or damage to your pipes. The ingredients are also biodegradable and environmentally friendly."
  },
  {
    question: "Can I use it with other toilet cleaning products?",
    answer: "We recommend using our self-foaming tablets as your primary toilet cleaner. Mixing with other chemical cleaners, especially those containing bleach or ammonia, may reduce effectiveness or create harmful fumes. For best results, use our product exclusively."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our self-foaming toilet cleaner
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg shadow-sm bg-white">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-shopify-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions? <a href="#contact" className="text-shopify-blue font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
