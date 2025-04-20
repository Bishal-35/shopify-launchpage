import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Shopify Config
export const SHOPIFY_DOMAIN = 'qs5svr-ck.myshopify.com';
export const SHOPIFY_STOREFRONT_TOKEN = '215dc8b4d5249d3ae8a752bb96d35008';
export const PRODUCT_ID = '7834631504048';

interface ShopifyBuyButtonProps {
  className?: string;
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

// Preload the Shopify script
const preloadShopifyScript = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  document.head.appendChild(link);
};
preloadShopifyScript();

const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({ className }) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleInterimButtonClick = () => {
    setIsClicked(true);
    loadShopifyScript();

    if (buttonContainerRef.current) {
      const shopifyButton = buttonContainerRef.current.querySelector('button');
      if (shopifyButton) shopifyButton.click();
    }
  };

  const loadShopifyScript = () => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const existingScript = document.querySelector(`script[src="${scriptURL}"]`);

    if (existingScript) {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        initShopifyBuy();
      }
      return;
    }

    const script = document.createElement('script');
    script.async = false;
    script.src = scriptURL;
    script.onload = initShopifyBuy;
    document.head.appendChild(script);
  };

  const initShopifyBuy = () => {
    if (window.ShopifyBuy && buttonContainerRef.current) {
      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_DOMAIN,
        storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent('product', {
          id: PRODUCT_ID,
          node: buttonContainerRef.current,
          moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0"
                  }
                },
                button: {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "600",
                  "font-size": "1.125rem", // text-lg
                  "padding": "1rem 2rem",   // py-4 px-8
                  "border-radius": "0.75rem", // rounded-xl
                  "background-color": "#9333ea", // purple-600
                  "color": "#ffffff",
                  "transition": "background-color 0.3s ease",
                  ":hover": {
                    "background-color": "#7e22ce" // purple-700
                  },
                  ":focus": {
                    "background-color": "#7e22ce"
                  }
                },
              },
              contents: {
                img: false,
                title: false,
                price: false,
              },
              text: {
                button: "Shop Now"
              },
              googleFonts: ["Roboto"]
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "500",
                  "background-color": "#a293ff",
                  "color": "#ffffff",
                  ":hover": {
                    "background-color": "#9284e6"
                  },
                  ":focus": {
                    "background-color": "#9284e6"
                  }
                }
              },
              text: {
                total: "Subtotal",
                button: "Checkout"
              },
              popup: false,
              googleFonts: ["Roboto"]
            }
          }
        });

        if (isClicked) {
          setTimeout(() => {
            const shopifyButton = buttonContainerRef.current?.querySelector('button');
            if (shopifyButton) shopifyButton.click();
          }, 100);
        }

        setIsLoaded(true);
      });
    }
  };

  useEffect(() => {
    loadShopifyScript();
    return () => {
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <Button
          onClick={handleInterimButtonClick}
          className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg py-4 px-8 rounded-xl transition duration-300 ease-in-out ${className}`}
        >
          Shop Now
        </Button>
      )}
      <div
        ref={buttonContainerRef}
        className={`${isLoaded ? '' : 'hidden'} ${className}`}
      ></div>
    </>
  );
};

export default ShopifyBuyButton;
