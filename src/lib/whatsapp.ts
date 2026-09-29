import { CartItem, CustomerDetails } from '../types';
import { siteConfig } from '../config/siteConfig';

export function buildWhatsAppOrderMessage(
  cart: CartItem[],
  total: number,
  customer?: CustomerDetails
): string {
  const brandName = siteConfig.brand.name;
  
  let message = `Hello ${brandName},\n\nI would like to place an order:\n\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.selectedVariant.price * item.quantity;
    message += `${index + 1}. *${item.product.name}*\n`;
    message += `   Pack: ${item.selectedVariant.weight} (${item.selectedVariant.packaging})\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: ₹${item.selectedVariant.price} x ${item.quantity} = ₹${itemTotal}\n\n`;
  });

  message += `*Order Subtotal:* ₹${total}\n`;

  if (customer && customer.name) {
    message += `\n*Customer Details:*\n`;
    message += `Name: ${customer.name}\n`;
    if (customer.phone) message += `Phone: ${customer.phone}\n`;
    if (customer.address) message += `Address: ${customer.address}, ${customer.city} - ${customer.pincode}\n`;
    if (customer.notes) message += `Notes: ${customer.notes}\n`;
  }

  message += `\nPlease confirm availability and dispatch details. Thank you!`;

  return message;
}

export function getWhatsAppLink(cart: CartItem[], total: number, customer?: CustomerDetails): string {
  const message = buildWhatsAppOrderMessage(cart, total, customer);
  const encodedMessage = encodeURIComponent(message);
  const targetNumber = siteConfig.contact.whatsappNumber;
  return `https://wa.me/${targetNumber}?text=${encodedMessage}`;
}
