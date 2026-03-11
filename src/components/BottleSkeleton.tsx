"use client";

import { colors } from "@/lib/theme";

// Pure CSS skeleton - no Framer Motion for faster initial load
export default function BottleSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Glow effect - CSS animation */}
      <div className="absolute w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Simple SVG placeholder */}
      <div className="relative animate-fade-in">
        <svg width="100" height="150" viewBox="0 0 200 280" fill="none" className="sm:w-[140px] sm:h-[210px] md:w-[160px] md:h-[240px] drop-shadow-2xl opacity-60">
          <defs>
            <linearGradient id="skeletonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.accentLight} stopOpacity="0.4" />
              <stop offset="50%" stopColor={colors.accentLighter} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colors.accentMid} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Simplified bottle shape */}
          <ellipse cx="100" cy="18" rx="32" ry="8" fill={colors.accentDarker} opacity="0.5" />
          <rect x="68" y="18" width="64" height="16" fill={colors.accentDarker} opacity="0.5" />
          <path d="M72 34 L72 50 Q72 55 78 60 L122 60 Q128 55 128 50 L128 34" fill="url(#skeletonGrad)" />
          <path d="M78 60 Q50 80 40 110 L40 120 L160 120 L160 110 Q150 80 122 60" fill="url(#skeletonGrad)" />
          <rect x="40" y="120" width="120" height="130" rx="8" fill="url(#skeletonGrad)" />
          <path d="M40 250 Q40 265 55 270 L145 270 Q160 265 160 250" fill="url(#skeletonGrad)" />
        </svg>
        
        {/* Loading shimmer - CSS animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}
