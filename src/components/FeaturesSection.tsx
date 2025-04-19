
import React from "react";
import { Clock, Star, Settings, Sun } from "lucide-react";

const features = [
  {
    icon: <Star className="w-10 h-10 text-purple-500" />,
    title: "360° Rotation",
    description: "Full coverage projection with smooth rotation for an immersive galaxy experience."
  },
  {
    icon: <Settings className="w-10 h-10 text-purple-500" />,
    title: "Remote Control",
    description: "Easily adjust settings, colors, and effects from anywhere in the room."
  },
  {
    icon: <Clock className="w-10 h-10 text-purple-500" />,
    title: "Timer Function",
    description: "Set auto-shutdown timer for worry-free operation while falling asleep."
  },
  {
    icon: <Sun className="w-10 h-10 text-purple-500" />,
    title: "LED Technology",
    description: "Energy-efficient LED lights with up to 50,000 hours of operation time."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stellar Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the amazing capabilities of your personal galaxy projector
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 border border-purple-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
