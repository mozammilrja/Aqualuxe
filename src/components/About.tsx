"use client";

import { motion } from "framer-motion";
import { colors, tw, rgba, componentStyles } from "@/lib/theme";

const features = [
  {
    icon: "💧",
    title: "Pure & Safe",
    description: "10-stage purification ensures every drop is clean and safe for your family.",
  },
  {
    icon: "📦",
    title: "BPA-Free",
    description: "Food-grade packaging with tamper-evident seals for complete safety.",
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "Same-day delivery within Gurgaon. Order by 2 PM for same-day.",
  },
  {
    icon: "💰",
    title: "Best Price",
    description: "Premium quality water at competitive prices. No hidden charges.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 left-1/4 w-96 h-96 ${tw.glowOrbBlue} rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${tw.glowOrbCyan} rounded-full blur-3xl`} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className={`${tw.badgeBlue} rounded-full mb-6`}>
            Why Aqualuxe
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Quality You Can{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Trust
            </span>
          </h2>
          
          <p className={`text-lg ${tw.textSecondary} max-w-3xl mx-auto`}>
            At Aqualuxe, we believe everyone deserves access to pure, safe drinking water. 
            Our 10-stage purification process and BIS certification ensure every drop meets the highest standards.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-white/5 ${tw.borderHover} transition-all duration-300`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className={`text-sm ${tw.textSecondary}`}>
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Brand story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-zinc-800/30 to-transparent border border-white/5">
            <p className="text-xl text-zinc-300 leading-relaxed italic">
              "Every bottle of Aqualuxe water goes through our rigorous 10-stage purification process — 
              from sediment filtration to UV treatment, RO purification to ozone sterilization. 
              The result? Pure, mineral-balanced water that's safe for your entire family."
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
              <span className="text-sm text-zinc-500">The Aqualuxe Promise</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
