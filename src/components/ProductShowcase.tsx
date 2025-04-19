
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our self-foaming tablets make cleaning your toilet effortless and hygienic
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-shopify-blue text-white px-4 py-2 rounded-br-lg font-medium">
                  Before
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="Before using Whizz & Co." 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Stained Toilet Bowl</h3>
                <p className="text-gray-600">
                  Stubborn stains and limescale build-up that regular cleaners struggle to remove.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-shopify-green text-white px-4 py-2 rounded-br-lg font-medium">
                  After
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="After using Whizz & Co." 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Spotless & Sanitized</h3>
                <p className="text-gray-600">
                  Sparkling clean and bacteria-free after just one use of our self-foaming cleaner.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            *Results may vary based on severity of stains and toilet condition
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
