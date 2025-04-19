
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the Galaxy Projector work?",
    answer: "The Astronaut Galaxy Projector uses advanced LED technology and precise optics to project stunning nebula and star effects. It features 360° rotation and adjustable angles to create an immersive cosmic experience in any room."
  },
  {
    question: "What area can it cover?",
    answer: "The projector can effectively cover rooms up to 540 sq ft (50 sq m). The projection area can be adjusted by changing the distance from walls/ceiling and using the adjustable head feature."
  },
  {
    question: "How long does the LED light last?",
    answer: "The high-quality LED lights are rated for 50,000 hours of operation, which is equivalent to over 5 years of continuous use. With normal usage, they can last even longer."
  },
  {
    question: "Can I control it remotely?",
    answer: "Yes! The included remote control allows you to adjust colors, effects, rotation speed, and timer settings from anywhere in the room. It also has touch controls on the unit itself for manual operation."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-black to-purple-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Everything you need to know about your galaxy projector
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-purple-500/20 rounded-lg bg-purple-900/20 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-white hover:text-purple-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-purple-200">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-purple-200">
            Still have questions? <a href="#contact" className="text-purple-400 font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
