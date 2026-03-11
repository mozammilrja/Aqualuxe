"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/config";
import { componentStyles, tw } from "@/lib/theme";

const steps = [
  {
    number: "01",
    title: "Select Size",
    description: "Choose your preferred water bottle size from our range - 20L jar to 250ml bottles.",
    icon: "📦",
  },
  {
    number: "02",
    title: "Click WhatsApp",
    description: "Tap the Order button and WhatsApp opens with a pre-filled message ready to send.",
    icon: "💬",
  },
  {
    number: "03",
    title: "Get Delivery",
    description: "We confirm your order and deliver fresh water right to your doorstep. That's it!",
    icon: "🚚",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${tw.bgMuted} to-transparent`} />

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
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Order in{" "}
            <span className={componentStyles.headingGradient}>
              3 Easy Steps
            </span>
          </h2>
          <p className={`text-lg ${tw.textSecondary} max-w-2xl mx-auto`}>
            Getting fresh drinking water delivered has never been easier.
            No apps, no accounts, just WhatsApp.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className={`hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent ${tw.lineAccent} to-transparent`} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <motion.div
                  className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Outer ring */}
                  <div className={`absolute inset-0 rounded-full ${tw.gradientAccentBr} opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  {/* Inner circle */}
                  <div className={`absolute inset-2 rounded-full bg-zinc-900 border ${tw.borderAccentStrong} flex items-center justify-center`}>
                    <span className="text-3xl sm:text-4xl">{step.icon}</span>
                  </div>

                  {/* Step number badge */}
                  <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full ${componentStyles.stepBadge} flex items-center justify-center shadow-lg ${tw.glowAccent}`}>
                    <span className="text-white font-bold text-xs sm:text-sm">{step.number}</span>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full ${tw.borderAccent} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.div>

                {/* Content */}
                <h3 className={`text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:${tw.textAccent} transition-colors`}>
                  {step.title}
                </h3>
                <p className={`text-sm sm:text-base ${tw.textSecondary} leading-relaxed max-w-xs mx-auto`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white ${tw.statusAvailable} rounded-full hover:bg-green-400 transition-colors duration-200`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
