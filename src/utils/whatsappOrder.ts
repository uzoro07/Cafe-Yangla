import { CartItem } from '../context/CartContext';
import { formatCurrency } from './formatCurrency';

export const generateWhatsAppLink = (cart: CartItem[], total: number) => {
  const phone = "919733985732";
  let message = "Hello Cafe Yangla, I would like to order:\n\n";
  
  cart.forEach(item => {
    message += `${item.name} x${item.quantity}\n`;
  });
  
  message += `\nTotal: ${formatCurrency(total)}`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};