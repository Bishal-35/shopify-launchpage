import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

// Import shared configuration
// import { SHOPIFY_DOMAIN, SHOPIFY_STOREFRONT_TOKEN, PRODUCT_ID } from './ShopifyBuyButton';
export const SHOPIFY_DOMAIN = 'qs5svr-ck.myshopify.com';
export const SHOPIFY_STOREFRONT_TOKEN = '215dc8b4d5249d3ae8a752bb96d35008';
export const PRODUCT_ID = '7834631504048';


interface ShopifyButtonProps {
  className?: string;
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

const ShopifyButton: React.FC<ShopifyButtonProps> = ({ className }) => {
  const [useDirectCheckout, setUseDirectCheckout] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleDirectCheckout = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Redirect directly to Shopify cart
      window.location.href = `https://${SHOPIFY_DOMAIN}/${PRODUCT_ID}`;
    } catch (error) {
      console.error('Checkout failed:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!useDirectCheckout) {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      const existingScript = document.querySelector(`script[src="${scriptURL}"]`);

      const initShopifyBuy = () => {
        const client = window.ShopifyBuy.buildClient({
          domain: SHOPIFY_DOMAIN,
          storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
        });

        const ui = window.ShopifyBuy.UI.init(client);

        const container = document.getElementById('shopify-btn-container');
        if (container) {
          container.innerHTML = '';
        }

        ui.createComponent('product', {
          id: PRODUCT_ID,
          node: container,
          moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
          options: {
            product: {
              buttonDestination: 'checkout',
              contents: {
                img: false,
                title: false,
                price: false,
                options: false,
                button: true,
                quantity: false,
              },
              text: {
                button: 'Add to Cart',
              },
              styles: {
                button: {
                  "font-family": "Roboto, sans-serif",
                  "background-color": "#9333ea",
                  ":hover": {
                    "background-color": "#7e22ce"
                  },
                  ":focus": {
                    "background-color": "#7e22ce"
                  },
                  "border-radius": "0.5rem",
                  "color": "#ffffff"
                },
              },
              googleFonts: ["Roboto"],
              events: {
                afterRender: (component: any) => {
                  const container = document.getElementById('shopify-btn-container');
                  const button = container?.querySelector('button');
                  if (button) {
                    button.addEventListener('click', () => {
                      setTimeout(() => {
                        window.location.href = `https://${SHOPIFY_DOMAIN}/${PRODUCT_ID}`;
                      }, 300); // slight delay to ensure item gets added
                    });
                  }
                }
              }
            }
          }
        });
      };

      if (existingScript) {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          initShopifyBuy();
        }
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        script.onload = initShopifyBuy;
        document.head.appendChild(script);
      }
    }
  }, [useDirectCheckout]);

  if (useDirectCheckout) {
    return (
      <Button
        onClick={handleDirectCheckout}
        disabled={isLoading}
        className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 px-8 rounded-lg text-lg ${className}`}
      >
        {isLoading ? "Processing..." : "Add to Cart"}
      </Button>
    );
  }

  return <div id="shopify-btn-container" className={className}></div>;
};

export default ShopifyButton;
