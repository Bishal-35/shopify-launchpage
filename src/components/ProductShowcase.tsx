
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-indigo-950/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Transform any room into a breathtaking cosmic experience with our Astronaut Galaxy Projector
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-indigo-600 text-white px-4 py-2 rounded-br-lg font-medium z-10">
                  Lights On
                </div>
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                    alt="Room with normal lighting" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Standard Room</h3>
                <p className="text-indigo-200">
                  An ordinary room before the magic of our galaxy projector transforms it.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-purple-600 text-white px-4 py-2 rounded-br-lg font-medium z-10">
                  Projector On
                </div>
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                    alt="Room with galaxy projector" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Cosmic Experience</h3>
                <p className="text-indigo-200">
                  The same space transformed into a breathtaking cosmic wonderland with our galaxy projector.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-indigo-300 italic">
            *Colors may appear different based on room lighting conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
