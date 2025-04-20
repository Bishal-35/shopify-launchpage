
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Simrat Sidhu",
    location: " Delhi, India",
    rating: 5,
    comment: "This projector transformed my gaming room into an epic space station! The colors are vibrant and the rotation feature creates an incredible atmosphere."
  },
  {
    name: "Rudraksh Bansiwal",
    location: "Punjab, India",
    rating: 5,
    comment: "My kids absolutely love this! It's perfect for bedtime and helps them drift off to sleep under the stars. The timer feature is super convenient."
  },
  {
    name: "Armaan Au",
    location: "TamilNadu, India",
    rating: 4,
    comment: "Great addition to our home theater room. Creates an amazing ambiance for movie nights. The remote control makes it easy to adjust settings from anywhere."
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-purple-400 fill-purple-400' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stellar Reviews
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            See what our customers say about their cosmic experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="bg-purple-500/20 rounded-full p-2 mr-3">
                    <User className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-purple-300">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-purple-400 font-medium">
            4.8 out of 5 stars from over 2,000 space enthusiasts
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
