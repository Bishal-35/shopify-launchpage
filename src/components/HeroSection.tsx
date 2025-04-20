import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ShopifyButton from "./ShopifyButton";
import ShopifyBuyButton from "./ShopifyBuyButton";

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Space with <span className="text-purple-400">Galactic Wonder</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Experience the magic of the cosmos with our 360° Rotating Nebula Star Projector. Perfect for creating an immersive atmosphere in any room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <ShopifyButton className="w-full sm:w-auto" />
            </div>

            <div className="pt-8 hidden md:block">
              <a href="#features" className="flex items-center text-purple-400 hover:text-purple-300">
                <span className="mr-2">Explore features</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500/30 rounded-full blur-2xl"></div>
              <img 
                src="/img1.jpg" 
                alt="Astronaut Galaxy Projector in Action" 
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
