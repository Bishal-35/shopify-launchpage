
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    comment: "I've tried dozens of toilet cleaners over the years, but nothing compares to how easy and effective this is. I just drop it in and let it do its magic. No more scrubbing for me!"
  },
  {
    name: "Michael Thompson",
    location: "Chicago, IL",
    rating: 5,
    comment: "As someone with a busy schedule, this product is a game-changer. It keeps our bathrooms fresh for weeks, and the self-foaming action reaches places that are hard to clean manually."
  },
  {
    name: "Jennifer Wilson",
    location: "Austin, TX",
    rating: 4,
    comment: "The convenience factor alone makes this worth every penny. My toilets have never been cleaner, and I love that I don't have to use a brush anymore. Would highly recommend!"
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their cleaning routine
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="bg-shopify-blue/10 rounded-full p-2 mr-3">
                    <User className="w-5 h-5 text-shopify-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-shopify-blue font-medium">
            4.8 out of 5 stars from over 10,000 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
