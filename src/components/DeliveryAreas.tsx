"use client";

import { motion } from "framer-motion";
import { componentStyles, tw, rgba } from "@/lib/theme";

const areas = [
  { name: "Gurgaon City", available: true },
  { name: "Sector 17", available: true },
  { name: "Sector 46", available: true },
  { name: "Sector 47", available: true },
  { name: "Sector 48", available: true },
  { name: "Sector 49", available: true },
  { name: "Sector 50", available: true },
  { name: "More Areas Soon", available: false },
];

export default function DeliveryAreas() {
  return (
    <section id="delivery" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${tw.bgMuted} via-transparent ${tw.bgMuted}`} />

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
            Delivery Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            We Deliver{" "}
            <span className={componentStyles.headingGradient}>
              Near You
            </span>
          </h2>
          <p className={`text-lg ${tw.textSecondary} max-w-2xl mx-auto`}>
            Fast delivery within 15 km radius. Check if your area is covered.
          </p>
        </motion.div>

        {/* Map Style Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Map Container */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-white/5 p-4 sm:p-8 md:p-12 overflow-hidden">
            {/* Grid Background */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(${rgba.accentGlowStrong} 1px, transparent 1px),
                                 linear-gradient(90deg, ${rgba.accentGlowStrong} 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Radius circles - hidden on small screens */}
            <div className={`hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 border ${tw.borderAccent} rounded-full`} />
            <div className={`hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 border ${tw.borderAccentLight} rounded-full`} />
            <div className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 lg:w-96 h-72 lg:h-96 border ${tw.borderAccentLighter} rounded-full`} />

            {/* Center pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="animate-bounce-slow">
                <div className="relative">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${componentStyles.locationPin} shadow-lg ${tw.glowAccent}`} />
                  <div className={`absolute inset-0 rounded-full ${tw.statusActive} animate-ping opacity-30`} />
                </div>
              </div>
            </div>

            {/* Area Cards Grid */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className={`p-3 sm:p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                    area.available 
                      ? `bg-zinc-800/80 ${tw.borderAccentStrong} hover:border-cyan-500/60 hover:shadow-lg ${tw.shadowAccent}` 
                      : 'bg-zinc-800/40 border-white/10'
                  }`}>
                    {/* Marker */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${
                        area.available 
                          ? `${tw.statusAvailable} shadow-lg ${tw.glowCta}` 
                          : 'bg-zinc-500'
                      }`}>
                        {area.available && (
                          <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-50" />
                        )}
                      </div>
                      <span className={`font-medium text-sm sm:text-base ${
                        area.available ? 'text-white' : 'text-zinc-500'
                      }`}>
                        {area.name}
                      </span>
                    </div>
                    
                    {area.available && (
                      <p className={`mt-1.5 sm:mt-2 text-[10px] sm:text-xs ${tw.textSecondary}`}>
                        Same-day delivery
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Delivery Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6"
        >
          <div className="text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-800/30 border border-white/5">
            <div className="text-xl sm:text-3xl mb-2 sm:mb-3">🕐</div>
            <h4 className="text-white font-semibold text-xs sm:text-base mb-0.5 sm:mb-1">Delivery Hours</h4>
            <p className={`${tw.textSecondary} text-[10px] sm:text-sm`}>8 AM - 8 PM Daily</p>
          </div>
          <div className="text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-800/30 border border-white/5">
            <div className="text-xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
            <h4 className="text-white font-semibold text-xs sm:text-base mb-0.5 sm:mb-1">Same-Day Cutoff</h4>
            <p className={`${tw.textSecondary} text-[10px] sm:text-sm`}>Order before 2 PM</p>
          </div>
          <div className="text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-800/30 border border-white/5">
            <div className="text-xl sm:text-3xl mb-2 sm:mb-3">📍</div>
            <h4 className="text-white font-semibold text-xs sm:text-base mb-0.5 sm:mb-1">Coverage Radius</h4>
            <p className={`${tw.textSecondary} text-[10px] sm:text-sm`}>Within 15 km</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
