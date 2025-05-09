
import React, { useState, useEffect } from "react";
import ShopifyButton from "./ShopifyButton";
import ShopifyBuyButton from "./ShopifyBuyButton";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-purple-500/20 z-50 transform transition-all duration-300 shadow-lg py-2">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="hidden md:block">
          <p className="font-medium text-white">Astronaut Galaxy Projector</p>
          <p className="text-purple-400 font-bold">₹799 <span className="text-gray-400 text-sm line-through">₹1399</span></p>
        </div>
        <ShopifyBuyButton />
      </div>
    </div>
  );
};

export default StickyCTA;
