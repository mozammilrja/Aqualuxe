import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { componentStyles } from "@/lib/theme";

export const metadata = {
  title: "Products | Aqualuxe - Premium Water Delivery",
  description: "Browse our range of premium packaged drinking water. From 250ml bottles to 20L jars, we have the perfect size for your needs.",
};

export default function ProductsPage() {
  return (
    <main className={componentStyles.page}>
      <Navbar />
      <div className="pt-24">
        <ProductGrid />
      </div>
      <Footer />
    </main>
  );
}
