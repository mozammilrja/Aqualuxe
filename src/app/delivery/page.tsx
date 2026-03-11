import Navbar from "@/components/Navbar";
import DeliveryAreas from "@/components/DeliveryAreas";
import Footer from "@/components/Footer";
import { componentStyles } from "@/lib/theme";

export const metadata = {
  title: "Delivery Areas | Aqualuxe - Premium Water Delivery",
  description: "Check our delivery coverage in Gurgaon. Same-day delivery within 15km radius. Order before 2 PM for same-day delivery.",
};

export default function DeliveryPage() {
  return (
    <main className={componentStyles.page}>
      <Navbar />
      <div className="pt-24">
        <DeliveryAreas />
      </div>
      <Footer />
    </main>
  );
}
