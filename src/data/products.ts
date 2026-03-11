export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  badge?: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mini",
    subtitle: "250ml",
    price: 10,
    description: "Perfect for on-the-go. Ideal for meetings, travel, and quick hydration.",
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=400&q=80",
    features: ["Compact Size", "Easy Carry", "BIS Certified", "Pure & Fresh"],
    color: "#00D4FF",
  },
  {
    id: 2,
    name: "Classic",
    subtitle: "500ml",
    price: 15,
    description: "The everyday essential. Great for gym, office, and daily hydration needs.",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?w=400&q=80",
    features: ["Popular Choice", "Food-Grade", "Sealed Fresh", "TDS < 50"],
    badge: "Popular",
    color: "#4F46E5",
  },
  {
    id: 3,
    name: "Standard",
    subtitle: "1 Litre",
    price: 20,
    description: "Perfect balance of size and convenience. Ideal for home and office use.",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80",
    features: ["Best Value", "UV Treated", "Mineral Rich", "pH Balanced"],
    color: "#7C3AED",
  },
  {
    id: 4,
    name: "Family",
    subtitle: "2 Litre",
    price: 30,
    description: "Family-friendly size. Perfect for gatherings, parties, and daily household use.",
    image: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=400&q=80",
    features: ["Family Pack", "Eco-Friendly", "6-Stage Purified", "Fresh Taste"],
    color: "#059669",
  },
  {
    id: 5,
    name: "Premium Jar",
    subtitle: "20 Litre",
    price: 50,
    description: "The ultimate home and office solution. Fits all standard water dispensers.",
    image: "https://images.unsplash.com/photo-1548544027-1e04c5d6c1b5?w=400&q=80",
    features: ["Home & Office", "Dispenser Ready", "Weekly Delivery", "Best Value"],
    badge: "Best Seller",
    color: "#D97706",
  },
  {
    id: 6,
    name: "Sparkling Pure",
    subtitle: "330ml",
    price: 25,
    description: "Naturally carbonated premium water. Refreshing bubbles for a luxurious experience.",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&q=80",
    features: ["Carbonated", "Zero Calories", "Natural Minerals", "Glass Bottle"],
    badge: "New",
    color: "#DB2777",
  },
  {
    id: 7,
    name: "Alkaline Plus",
    subtitle: "1 Litre",
    price: 35,
    description: "Enhanced alkaline water with pH 9.5+ for optimal hydration and wellness.",
    image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=400&q=80",
    features: ["pH 9.5+", "Antioxidant", "Electrolyte Enhanced", "Detox Support"],
    badge: "Premium",
    color: "#0D9488",
  },
  {
    id: 8,
    name: "Sport Elite",
    subtitle: "750ml",
    price: 28,
    description: "Electrolyte-enhanced water designed for athletes and active lifestyles.",
    image: "https://images.unsplash.com/photo-1550505095-81378a674395?w=400&q=80",
    features: ["Electrolytes", "Quick Hydration", "Sports Cap", "Isotonic"],
    color: "#DC2626",
  },
  {
    id: 9,
    name: "Baby Pure",
    subtitle: "500ml",
    price: 22,
    description: "Ultra-purified water specially formulated for infant formula preparation.",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
    features: ["Baby Safe", "Low Sodium", "Sterile Sealed", "Pediatrician Approved"],
    color: "#EC4899",
  },
  {
    id: 10,
    name: "Mountain Spring",
    subtitle: "1.5 Litre",
    price: 32,
    description: "Sourced from pristine Himalayan springs. Natural mineral composition.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
    features: ["Natural Spring", "Himalayan Source", "Rich Minerals", "Eco Bottle"],
    color: "#16A34A",
  },
];
