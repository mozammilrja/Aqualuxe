"use client";

import { motion } from "framer-motion";
import { featureGradients, componentStyles, tw, rgba } from "@/lib/theme";

const features = [
  {
    icon: "💧",
    title: "Pure & Safe Water",
    description: "10-stage purification ensures every drop is clean and safe for your family.",
    gradient: featureGradients[0],
  },
  {
    icon: "📦",
    title: "Food-Grade Packaging",
    description: "BPA-free bottles with tamper-evident seals for complete safety.",
    gradient: featureGradients[1],
  },
  {
    icon: "🚀",
    title: "Lightning Fast Delivery",
    description: "Same-day delivery within our coverage area. Order by 2 PM.",
    gradient: featureGradients[2],
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Premium quality water at competitive prices. No hidden charges.",
    gradient: featureGradients[3],
  },
  {
    icon: "🏠",
    title: "Doorstep Service",
    description: "Free home delivery for 20L jars. We handle the heavy lifting.",
    gradient: featureGradients[4],
  },
  {
    icon: "⭐",
    title: "Trusted Locally",
    description: "500+ happy families trust us for their daily hydration needs.",
    gradient: featureGradients[5],
  },
];

export default function WhyChooseUs() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${rgba.accentGlowLight}, transparent)` }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className={`${componentStyles.badge} mb-6`}>
            Why Aqualuxe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Quality You Can{" "}
            <span className={componentStyles.headingGradient}>
              Trust
            </span>
          </h2>
          <p className={`text-lg ${tw.textSecondary} max-w-2xl mx-auto`}>
            We're committed to delivering the purest drinking water with
            the best service in town.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className={`relative h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] backdrop-blur-xl border ${tw.borderDefault} ${tw.borderHover} transition-all duration-500 hover:shadow-2xl ${tw.shadowAccent}`}>
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with gradient background */}
                <motion.div
                  className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border ${tw.borderDefault} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20`} />
                </motion.div>

                {/* Content */}
                <h3 className={`text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:${tw.textAccent} transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base ${tw.textSecondary} leading-relaxed`}>
                  {feature.description}
                </p>

                {/* Hover line effect */}
                <div className={`absolute bottom-0 left-5 right-5 sm:left-8 sm:right-8 h-0.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
