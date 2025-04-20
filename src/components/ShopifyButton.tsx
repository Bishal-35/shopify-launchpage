
import React, { useEffect, useState } from 'react';

interface ShopifyButtonProps {
  className?: string;
  text?: string;
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

const ShopifyButton: React.FC<ShopifyButtonProps> = ({ className, text = "Add to Cart" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.ShopifyBuy) {
      const client = window.ShopifyBuy.buildClient({
        domain: 'qs5svr-ck.myshopify.com', 
        storefrontAccessToken: '215dc8b4d5249d3ae8a752bb96d35008',
      });

      const ui = window.ShopifyBuy.UI.init(client);

      ui.createComponent('product', {
        id: '7834631504048', 
        node: document.getElementById('shopify-btn-container'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          product: {
            buttonDestination: 'cart',
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: text,
            },
            styles: {
              product: {
                'text-align': 'left',
                '@media (min-width: 601px)': {
                  'max-width': 'none',
                },
              },
              button: {
                'background-color': '#9b87f5',
                'font-family': 'inherit',
                'font-size': '1rem',
                'font-weight': '600',
                'padding-top': '1rem',
                'padding-bottom': '1rem',
                'padding-left': '2rem',
                'padding-right': '2rem',
                'border-radius': '0.5rem',
                ':hover': {
                  'background-color': '#7E69AB',
                },
              },
            },
          },
          cart: {
            styles: {
              button: {
                'background-color': '#9b87f5',
                'font-weight': '600',
                ':hover': {
                  'background-color': '#7E69AB',
                },
              },
              footer: {
                'background-color': '#f5f5f7',
              },
            },
          },
        },
      });
      
      setIsLoaded(true);
    }
  }, [text]);

  return (
    <div 
      id="shopify-btn-container" 
      className={`${className} ${!isLoaded ? 'min-h-[50px] flex items-center justify-center' : ''}`}
    >
      {!isLoaded && <span className="animate-pulse">Loading...</span>}
    </div>
  );
};

export default ShopifyButton;
