
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Create Your Own Universe Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Join thousands of happy customers who've transformed their spaces into cosmic wonderlands
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 px-8 shadow-lg">
              <ShoppingCart className="w-5 h-5 mr-2" /> 
              Buy Now
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 text-lg py-6">
              Save 40% Today
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-400">
            Free shipping on orders over $35 • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
