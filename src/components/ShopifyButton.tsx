
import React, { useEffect } from 'react';

interface ShopifyButtonProps {
  className?: string;
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

const ShopifyButton: React.FC<ShopifyButtonProps> = ({ className }) => {
  useEffect(() => {
    if (window.ShopifyBuy) {
      const client = window.ShopifyBuy.buildClient({
        domain: 'your-store.myshopify.com', // Replace with your Shopify store URL
        storefrontAccessToken: 'your-storefront-access-token', // Replace with your access token
      });

      const ui = window.ShopifyBuy.UI.init(client);

      ui.createComponent('product', {
        id: 'your-product-id', // Replace with your product ID
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
              button: 'Add to Cart',
            },
            styles: {
              product: {
                'text-align': 'left',
                '@media (min-width: 601px)': {
                  'max-width': 'none',
                },
              },
              button: {
                'background-color': '#8B5CF6',
                'font-family': 'inherit',
                'font-size': '1rem',
                'padding-top': '1rem',
                'padding-bottom': '1rem',
                'padding-left': '2rem',
                'padding-right': '2rem',
                ':hover': {
                  'background-color': '#7C3AED',
                },
              },
            },
          },
          cart: {
            styles: {
              button: {
                'background-color': '#8B5CF6',
                ':hover': {
                  'background-color': '#7C3AED',
                },
              },
            },
          },
        },
      });
    }
  }, []);

  return <div id="shopify-btn-container" className={className}></div>;
};

export default ShopifyButton;
