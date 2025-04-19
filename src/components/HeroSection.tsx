
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Effortless Toilet <span className="text-shopify-blue">Cleaning</span> Made Simple
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our self-foaming toilet cleaner removes stains and kills 99.9% of bacteria with just a drop. No scrubbing required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-shopify-blue hover:bg-shopify-blue/90 text-white font-bold py-6 px-8 rounded-lg text-lg">
                Shop Now
              </Button>
              <Button variant="outline" className="border-shopify-blue text-shopify-blue hover:bg-shopify-blue/10">
                Learn More
              </Button>
            </div>
            <div className="pt-8 hidden md:block">
              <a href="#features" className="flex items-center text-shopify-blue hover:underline">
                <span className="mr-2">Discover features</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-shopify-light-blue rounded-full blur-2xl opacity-60"></div>
              <img 
                src="/placeholder.svg" 
                alt="Whizz & Co. Self-Foaming Toilet Cleaner" 
                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
