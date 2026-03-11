"use client";

import { motion } from "framer-motion";
import { componentStyles, tw } from "@/lib/theme";

const steps = [
  {
    icon: "💧",
    title: "Water Source",
    description: "Pure groundwater from protected natural sources",
  },
  {
    icon: "🔬",
    title: "Advanced Filtration",
    description: "Multi-stage RO purification removes impurities",
  },
  {
    icon: "☀️",
    title: "UV Sterilization",
    description: "UV treatment eliminates harmful microorganisms",
  },
  {
    icon: "📦",
    title: "Safe Packaging",
    description: "Food-grade BPA-free bottles with tamper seal",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Same-day delivery to your doorstep",
  },
];

export default function PurityProcess() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${tw.bgMuted} via-transparent ${tw.bgMuted}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] ${tw.glowOrbCyan} rounded-full blur-3xl`} />
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
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            From Source to{" "}
            <span className={componentStyles.headingGradient}>
              Your Home
            </span>
          </h2>
          <p className={`text-lg ${tw.textSecondary} max-w-2xl mx-auto`}>
            Every drop goes through our rigorous 10-stage purification process
            to ensure the purest drinking water for your family.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${tw.lineAccent} to-transparent`} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl ${tw.bgCard} border border-white/5 backdrop-blur-sm hover:${tw.borderAccentStrong} transition-all duration-500`}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                  
                  {/* Step number */}
                  <div className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${componentStyles.stepBadge} flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg ${tw.glowAccent}`}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-2xl sm:text-4xl mb-3 sm:mb-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className={`text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:${tw.textAccent} transition-colors`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs sm:text-sm ${tw.textSecondary}`}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <motion.svg
                      className="w-8 h-8 text-cyan-500/50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className={`inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border ${tw.borderAccent}`}>
            <span className="text-2xl">🏆</span>
            <span className="text-white font-medium">BIS Certified | IS 14543 Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
