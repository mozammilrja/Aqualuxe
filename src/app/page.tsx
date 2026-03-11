import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { componentStyles, tw } from "@/lib/theme";

// Loading placeholder component
const LoadingPlaceholder = ({ minHeight = "300px" }: { minHeight?: string }) => (
  <div className={`${tw.bgPrimary}`} style={{ minHeight }} />
);

// Dynamic imports for below-fold components - improves initial load
const ProductGrid = dynamic(() => import("@/components/ProductGrid"), {
  loading: () => <LoadingPlaceholder minHeight="400px" />,
});

const PurityProcess = dynamic(() => import("@/components/PurityProcess"), {
  loading: () => <LoadingPlaceholder />,
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <LoadingPlaceholder />,
});

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <LoadingPlaceholder />,
});

const DeliveryAreas = dynamic(() => import("@/components/DeliveryAreas"), {
  loading: () => <LoadingPlaceholder />,
});

const Stats = dynamic(() => import("@/components/Stats"), {
  loading: () => <LoadingPlaceholder minHeight="200px" />,
});

const FinalCTA = dynamic(() => import("@/components/FinalCTA"), {
  loading: () => <LoadingPlaceholder minHeight="200px" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <LoadingPlaceholder minHeight="100px" />,
});

const StickyWhatsApp = dynamic(() => import("@/components/StickyWhatsApp"));

export default function Home() {
  return (
    <main className={componentStyles.page}>
      <Navbar />
      <Hero />
      <ProductGrid />
      <PurityProcess />
      <WhyChooseUs />
      <HowItWorks />
      <DeliveryAreas />
      <Stats />
      <FinalCTA />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
