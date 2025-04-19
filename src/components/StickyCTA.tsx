
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 500px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-40 transform transition-transform duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden md:block">
          <p className="font-medium text-gray-900">Whizz & Co. Self-Foaming Toilet Cleaner</p>
          <p className="text-shopify-blue font-bold">$19.99 <span className="text-gray-500 text-sm line-through">$29.99</span></p>
        </div>
        <Button className="bg-shopify-blue hover:bg-shopify-blue/90 md:px-8">
          <ShoppingCart className="w-4 h-4 md:mr-2" /> 
          <span className="hidden md:inline">Buy Now</span>
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
