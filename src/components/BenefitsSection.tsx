
import React from "react";
import { Check, Star, Moon, Globe } from "lucide-react";

const benefits = [
  "Create an immersive cosmic atmosphere in any room",
  "360° rotation for complete celestial coverage",
  "Adjustable projection angles for perfect positioning",
  "Remote control for convenient operation",
  "Built-in timer for automatic shutdown",
  "16 color combinations for endless possibilities"
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-purple-900/50 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500/30 rounded-full blur-3xl"></div>
              <img 
                src="../public/img3.jpg" 
                alt="Galaxy Projector in Action" 
                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Space
            </h2>
            <p className="text-purple-200 text-lg">
              Experience the magic of the cosmos with our state-of-the-art galaxy projector.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-purple-600 rounded-full p-1 mt-0.5">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <p className="text-purple-400 font-semibold">
                Join thousands of customers who've transformed their spaces into cosmic wonderlands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
