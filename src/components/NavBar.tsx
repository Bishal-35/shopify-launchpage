
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface CartInfo {
  count: number;
}

const NavBar = () => {
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    // Function to check for Shopify cart count
    const checkCartCount = () => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        try {
          // Try to access the Shopify cart data from localStorage
          const shopifyCartData = localStorage.getItem('shopify-buy_storefront_domain');
          
          if (shopifyCartData) {
            // Find all Shopify localStorage items that might contain cart info
            const keys = Object.keys(localStorage).filter(key => 
              key.startsWith('shopify-buy') && key.includes('cart')
            );
            
            if (keys.length > 0) {
              // Try to parse the JSON data from any cart-related item
              for (const key of keys) {
                try {
                  const data = JSON.parse(localStorage.getItem(key) || '{}');
                  if (data && data.lineItems) {
                    setCartCount(data.lineItems.length);
                    break;
                  }
                } catch (e) {
                  console.log('Error parsing cart data:', e);
                }
              }
            }
          }
        } catch (e) {
          console.log('Error accessing cart data:', e);
        }
      }
    };
    
    // Check initially
    checkCartCount();
    
    // Set up interval to check regularly
    const interval = setInterval(checkCartCount, 2000);
    
    // Listen for storage events (when cart updates)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && e.key.startsWith('shopify-buy')) {
        checkCartCount();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Clean up
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">One94 Space</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
        </div>
        <Button 
          onClick={() => {
            // Try to open the Shopify cart
            const cartToggle = document.querySelector('.shopify-buy__cart-toggle');
            if (cartToggle && cartToggle instanceof HTMLElement) {
              cartToggle.click();
            }
          }}
          className="bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          <ShoppingCart className="w-4 h-4 mr-2" /> Cart ({cartCount})
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
