"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Droplets } from "lucide-react";
import { tw, componentStyles } from "@/lib/theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919872865907";

  return (
    <footer className="relative bg-zinc-900/50 border-t border-zinc-800/50">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${componentStyles.logoIcon} flex items-center justify-center`}>
                <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Aqualuxe</span>
            </div>
            <p className={`${tw.textSecondary} text-xs sm:text-sm`}>
              Premium mineral water delivered to your doorstep. Pure, safe, and affordable.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${tw.textSecondary} hover:${tw.textCta} transition-colors text-xs sm:text-sm`}
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>+91 98728 65907</span>
                </a>
              </li>
              <li className={`flex items-start gap-2 ${tw.textSecondary} text-xs sm:text-sm`}>
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>Gurgaon, Haryana</span>
              </li>
            </ul>
          </motion.div>

          {/* Timings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Delivery Hours</h4>
            <ul className={`space-y-2 sm:space-y-3 ${tw.textSecondary} text-xs sm:text-sm`}>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Mon - Sat: 7AM - 9PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Sunday: 8AM - 6PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <a href="#products" className={`${tw.textSecondary} hover:text-cyan-400 transition-colors`}>
                  Products
                </a>
              </li>
              <li>
                <a href="#process" className={`${tw.textSecondary} hover:text-cyan-400 transition-colors`}>
                  Our Process
                </a>
              </li>
              <li>
                <a href="#delivery" className={`${tw.textSecondary} hover:text-cyan-400 transition-colors`}>
                  Delivery Areas
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-zinc-800/50 text-center"
        >
          <p className={`${tw.textMuted} text-sm`}>
            &copy; {currentYear} Aqualuxe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
