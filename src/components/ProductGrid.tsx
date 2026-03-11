"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { componentStyles, tw, rgba } from "@/lib/theme";

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${rgba.accentGlow}, transparent)` }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className={`${componentStyles.badge} mb-6`}>
            Our Products
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className={componentStyles.headingGradient}>
              Water Size
            </span>
          </h2>
          
          <p className={`text-lg ${tw.textSecondary} max-w-2xl mx-auto`}>
            From compact 250ml bottles to large 20L jars — 
            we have the perfect size for your home, office, or event.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className={tw.textMuted}>
            Click <span className={`${tw.textCta} font-medium`}>Order</span> on any product to open WhatsApp with your order details
          </p>
        </motion.div>
      </div>
    </section>
  );
}
