
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-shopify-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Say Goodbye to Toilet Scrubbing Forever
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of satisfied customers who've transformed their cleaning routine
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button className="bg-white text-shopify-blue hover:bg-gray-100 text-lg py-6 px-8 shadow-lg">
              <ShoppingCart className="w-5 h-5 mr-2" /> 
              Buy Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6">
              Save 15% on Subscription
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            Free shipping on orders over $35 • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
