
import React from "react";
import { Star, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-950 to-black text-white pt-16 pb-8 relative">
      {/* Star decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-60 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-purple-400" />
              Galaxy Projector
            </h3>
            <p className="text-purple-200 mb-4">
              Transform your space into a cosmic wonderland with our state-of-the-art galaxy projector.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-100">Shop</h3>
            <ul className="space-y-2 text-purple-300">
              <li><a href="#" className="hover:text-white transition-colors">Galaxy Projector</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Color Options</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-100">Company</h3>
            <ul className="space-y-2 text-purple-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-100">Support</h3>
            <ul className="space-y-2 text-purple-300">
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-900/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-400 text-sm">
              &copy; {new Date().getFullYear()} Galaxy Projector. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-indigo-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-indigo-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-indigo-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
