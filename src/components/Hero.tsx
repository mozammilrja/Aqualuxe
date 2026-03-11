"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/config";
import { useRef, useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import BottleSkeleton from "./BottleSkeleton";
import { colors, rgba, tw } from "@/lib/theme";

// Dynamically import 3D component to reduce initial bundle
const WaterBottle3D = dynamic(() => import("./WaterBottle3D"), {
  ssr: false,
  loading: () => <BottleSkeleton />,
});

// Word reveal animation variants
const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: 0.5 + i * 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse tracking for parallax
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Headline words for sequential reveal
  const headlineWords1 = ["Pure", "Water."];
  const headlineWords2 = ["Delivered", "Fresh."];
  const subheadlineWords = ["Safe,", "purified", "drinking", "water", "delivered", "to", "your", "home", "and", "office."];

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom right, #020617, ${colors.bg}, ${colors.bg})` }} />
        
        {/* Radial glow behind bottle */}
        <motion.div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${rgba.blueGlowLight} 0%, rgba(59,130,246,0.05) 40%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className={`absolute top-0 left-0 w-[600px] h-[600px] ${tw.glowOrbCyan} rounded-full blur-[150px]`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${tw.glowOrbBlue} rounded-full blur-[120px]`}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Water ripple effect - hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 right-1/3 -translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-96 h-96 rounded-full border ${tw.ripple}`}
              style={{ left: "-192px", top: "-192px" }}
              animate={{ 
                scale: [0.3, 2.5], 
                opacity: [0.6, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeOut",
                delay: i * 1.3 
              }}
            />
          ))}
        </div>

        {/* Subtle particle/noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }} 
        className="relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[100dvh]">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-20 xl:px-28 pt-4 lg:pt-0 pb-6 lg:pb-0 order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 lg:mb-8 w-fit"
            >
              <motion.span 
                className={`w-2 h-2 ${tw.statusAvailable} rounded-full`}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs sm:text-sm font-medium text-zinc-300">BIS Certified • Free Delivery</span>
            </motion.div>

            {/* Headline - Word by Word Reveal */}
            <div className="mb-4 lg:mb-6">
              {/* Line 1 */}
              <div className="overflow-hidden">
                <motion.h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight flex flex-wrap gap-x-2 sm:gap-x-4">
                  {headlineWords1.map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-white inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
              
              {/* Line 2 */}
              <div className="overflow-hidden mt-1 sm:mt-2">
                <motion.h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight flex flex-wrap gap-x-2 sm:gap-x-4">
                  {headlineWords2.map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i + headlineWords1.length}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            </div>

            {/* Subheadline - Word by Word */}
            <motion.p className="text-sm sm:text-lg lg:text-xl text-zinc-400 max-w-lg leading-relaxed mb-6 lg:mb-10 flex flex-wrap gap-x-1">
              {subheadlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.2 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              {/* Primary CTA - WhatsApp */}
              <motion.a
                href={getWhatsAppUrl("Hi, I want to order a 20L water jar. Please share delivery details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl sm:rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button gradient background */}
                <div className={`absolute inset-0 ${tw.gradientCta}`} />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-2xl -z-10"
                  style={{ backgroundColor: `${colors.ctaLight}80` }}
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.6, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine sweep */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Content */}
                <span className="relative flex items-center gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </span>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#products"
                className="group inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Products
                <motion.svg 
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="mt-4 lg:mt-12 flex flex-wrap items-center gap-3 lg:gap-6 text-[10px] sm:text-sm text-zinc-500"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <span className={tw.textAccent}>✓</span>
                Same-Day Delivery
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className={tw.textAccent}>✓</span>
                10-Stage Purification
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Bottle */}
          <div className="relative h-[380px] sm:h-[450px] lg:h-screen lg:min-h-[700px] order-1 lg:order-2 mt-16 lg:mt-0">
            {/* 3D Canvas */}
            {!isMobile ? (
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className={`w-20 h-20 rounded-full border-2 ${tw.borderAccentStrong} border-t-cyan-400`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              }>
                <WaterBottle3D mousePosition={mousePosition} />
              </Suspense>
            ) : (
              // Mobile: Simplified floating visual
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Glow */}
                <motion.div
                  className="absolute w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Simple floating water jar illustration */}
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* 20L Water Jar SVG */}
                  <svg width="240" height="340" viewBox="0 0 200 280" fill="none" className="drop-shadow-2xl sm:w-[280px] sm:h-[400px]">
                    <defs>
                      <linearGradient id="jarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#bae6fd" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="waterGradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                      <linearGradient id="capGradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0369a1" />
                        <stop offset="100%" stopColor="#0c4a6e" />
                      </linearGradient>
                    </defs>
                    
                    {/* Cap */}
                    <ellipse cx="100" cy="18" rx="32" ry="8" fill="url(#capGradMobile)" />
                    <rect x="68" y="18" width="64" height="16" fill="url(#capGradMobile)" />
                    <ellipse cx="100" cy="34" rx="32" ry="6" fill="#0ea5e9" />
                    
                    {/* Neck */}
                    <path d="M72 34 L72 50 Q72 55 78 60 L122 60 Q128 55 128 50 L128 34" fill="url(#jarGrad)" />
                    
                    {/* Shoulder - wider curve */}
                    <path d="M78 60 Q50 80 40 110 L40 120 L160 120 L160 110 Q150 80 122 60" fill="url(#jarGrad)" />
                    
                    {/* Main Body - wide cylindrical */}
                    <rect x="40" y="120" width="120" height="130" rx="8" fill="url(#jarGrad)" />
                    
                    {/* Bottom curve */}
                    <path d="M40 250 Q40 265 55 270 L145 270 Q160 265 160 250" fill="url(#jarGrad)" />
                    
                    {/* Water fill */}
                    <path d="M48 125 Q48 115 60 110 L140 110 Q152 115 152 125 L152 245 Q152 258 140 262 L60 262 Q48 258 48 245 Z" fill="url(#waterGradMobile)" opacity="0.7" />
                    
                    {/* Highlight */}
                    <path d="M55 130 L55 240" stroke="white" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
                    
                    {/* Label */}
                    <rect x="55" y="150" width="90" height="60" rx="4" fill="white" fillOpacity="0.95" />
                    <rect x="62" y="170" width="76" height="20" rx="3" fill="#0ea5e9" />
                    
                    {/* Handle grip lines */}
                    <path d="M75 45 Q100 50 125 45" stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.5" fill="none" />
                  </svg>
                  
                  {/* Floating badges */}
                  <motion.div
                    className={`absolute -right-4 sm:-right-10 top-16 sm:top-28 px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-900/80 backdrop-blur rounded-lg border ${tw.borderAccentStrong} text-xs sm:text-sm text-white`}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    <span className={tw.textAccent}>💧</span> TDS 50-150
                  </motion.div>
                  
                  <motion.div
                    className="absolute -left-4 sm:-left-14 bottom-20 sm:bottom-32 px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-900/80 backdrop-blur rounded-lg border border-green-500/30 text-xs sm:text-sm text-white"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <span className="text-green-400">✓</span> BIS Certified
                  </motion.div>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-zinc-500 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
