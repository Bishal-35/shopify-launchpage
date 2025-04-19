
import React from "react";
import { Check } from "lucide-react";

const benefits = [
  "Eliminates the need for toilet brushes and harsh scrubbing",
  "Prevents buildup of limescale, rust, and calcium deposits",
  "Safe for all plumbing systems and septic tanks",
  "Eco-friendly formula with biodegradable ingredients",
  "Pleasant fresh scent without harsh chemical odors",
  "Each tablet lasts for up to 50 flushes of cleaning power"
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-shopify-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="/placeholder.svg" 
                alt="Whizz & Co. Self-Foaming Toilet Cleaner Benefits" 
                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Self-Foaming Cleaner?
            </h2>
            <p className="text-gray-600 text-lg">
              Our innovative formula takes the hassle out of toilet cleaning and provides long-lasting protection between cleans.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-shopify-blue rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <p className="text-shopify-blue font-semibold">
                Save time, effort, and money with a cleaner that works for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
