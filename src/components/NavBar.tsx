
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">GK Gadgets</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
