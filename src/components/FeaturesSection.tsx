
import React from "react";
import { CheckCircle, Package, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-shopify-blue" />,
    title: "Self-Foaming Formula",
    description: "Activates on contact with water and expands to clean hard-to-reach places without scrubbing."
  },
  {
    icon: <Package className="w-10 h-10 text-shopify-blue" />,
    title: "Long-Lasting Protection",
    description: "Each tablet provides up to 50 flushes of cleaning power, keeping your toilet fresh for weeks."
  },
  {
    icon: <Shield className="w-10 h-10 text-shopify-blue" />,
    title: "99.9% Bacteria Free",
    description: "Powerful formula kills germs and bacteria while removing limescale and stains."
  },
  {
    icon: <Clock className="w-10 h-10 text-shopify-blue" />,
    title: "Time-Saving",
    description: "Simply drop and go. No need for manual scrubbing or harsh chemical exposure."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why our self-foaming toilet cleaner is revolutionizing bathroom cleaning for thousands of homes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
