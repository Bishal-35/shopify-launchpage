
import React from "react";
import { Shield, CreditCard, Lock, Truck } from "lucide-react";

const trustBadges = [
  {
    icon: <Shield className="w-10 h-10 text-shopify-blue" />,
    title: "Satisfaction Guarantee",
    description: "30-day money-back guarantee if you're not completely satisfied"
  },
  {
    icon: <CreditCard className="w-10 h-10 text-shopify-blue" />,
    title: "Secure Payment",
    description: "All major credit cards accepted with encrypted transactions"
  },
  {
    icon: <Lock className="w-10 h-10 text-shopify-blue" />,
    title: "Data Protection",
    description: "Your personal information is always safe and protected"
  },
  {
    icon: <Truck className="w-10 h-10 text-shopify-blue" />,
    title: "Fast Shipping",
    description: "Free shipping on orders over $35 with 2-3 day delivery"
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {badge.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-100 flex flex-wrap justify-center gap-8">
          <img src="/placeholder.svg" alt="Visa" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Mastercard" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="American Express" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="PayPal" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Apple Pay" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Google Pay" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
