
import React from "react";
import { Shield, CreditCard, Lock, Truck } from "lucide-react";

const trustBadges = [
  {
    icon: <Shield className="w-10 h-10 text-purple-400" />,
    title: "30-Day Guarantee",
    description: "Not satisfied? Get a full refund within 30 days, no questions asked"
  },
  {
    icon: <CreditCard className="w-10 h-10 text-purple-400" />,
    title: "Secure Checkout",
    description: "SSL encrypted payment processing with all major cards accepted"
  },
  {
    icon: <Lock className="w-10 h-10 text-purple-400" />,
    title: "Safe & Secure",
    description: "Your data is protected with bank-level security measures"
  },
  {
    icon: <Truck className="w-10 h-10 text-purple-400" />,
    title: "Fast Delivery",
    description: "Free shipping on orders over $35 with 2-3 day delivery"
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-black border-t border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-purple-900/20 rounded-lg border border-purple-500/20 backdrop-blur-sm">
              <div className="mb-4">
                {badge.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{badge.title}</h3>
              <p className="text-sm text-purple-200">{badge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-12 border-t border-purple-500/20 flex flex-wrap justify-center gap-8">
          <img src="/placeholder.svg" alt="Visa" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Mastercard" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="American Express" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="PayPal" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Apple Pay" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Google Pay" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
