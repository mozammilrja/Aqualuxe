import Navbar from "@/components/Navbar";
import PurityProcess from "@/components/PurityProcess";
import Footer from "@/components/Footer";
import { componentStyles } from "@/lib/theme";

export const metadata = {
  title: "Our Process | Aqualuxe - Premium Water Delivery",
  description: "Learn about our rigorous 10-stage purification process. From source to your home, every drop is pure and safe.",
};

export default function ProcessPage() {
  return (
    <main className={componentStyles.page}>
      <Navbar />
      <div className="pt-24">
        <PurityProcess />
      </div>
      <Footer />
    </main>
  );
}
