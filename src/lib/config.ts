// ============================================
// AQUALUXE CONFIGURATION
// ============================================

// Re-export theme for convenience
export { theme } from "./theme";

// Site configuration
export const siteConfig = {
  name: "Aqualuxe",
  tagline: "Luxury Hydration",
  description:
    "Premium packaged drinking water with 10-stage purification. BIS certified, safe, and refreshing hydration delivered to your doorstep.",
  contact: {
    whatsapp: "919872865907",
    phone: "+91 98728 65907",
    email: "hello@aqualuxe.com",
    location: "Gurgaon, India",
  },
};

// WhatsApp URL generator
export function getWhatsAppUrl(message?: string) {
  const defaultMessage = encodeURIComponent(
    `🛒 *ORDER - AQUALUXE*
━━━━━━━━━━━━━━━━━━━━

📦 *Product:* 20L Water Jar
🔢 *Quantity:* 1

📍 *Delivery Address:*
• House/Flat No: 
• Street/Colony: 
• Landmark: 
• Area/Sector: 
• City: Gurgaon
• Pincode: 

👤 *Name:* 
📱 *Phone:* 

━━━━━━━━━━━━━━━━━━━━
Please confirm order & delivery time.`
  );
  return "https://wa.me/" + siteConfig.contact.whatsapp + "?text=" + (message || defaultMessage);
}

// Framer Motion animation presets
export const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
