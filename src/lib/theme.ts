// ============================================
// AQUALUXE THEME CONFIGURATION
// ============================================
// Update colors here to change the entire app
// All components should import from this file
// ============================================

// ==========================================
// COLOR HEX VALUES (for inline styles & 3D)
// ==========================================
export const colors = {
  // Background
  bg: "#0A0A0B",
  bgElevated: "#18181B",
  bgMuted: "#27272A",

  // Accent (Cyan/Water)
  accent: "#22d3ee",         // cyan-400
  accentSecondary: "#06b6d4", // cyan-500
  accentDark: "#0891b2",      // cyan-600
  accentDarker: "#0e7490",    // cyan-700
  accentLight: "#e0f2fe",     // cyan-50
  accentLighter: "#bae6fd",   // cyan-200
  accentMid: "#7dd3fc",       // cyan-300

  // Blue
  blue: "#3b82f6",           // blue-500
  blueDark: "#2563eb",       // blue-600

  // CTA (Green)
  cta: "#22c55e",            // green-500
  ctaSecondary: "#10b981",   // emerald-500
  ctaDark: "#059669",        // emerald-600
  ctaLight: "#4ade80",       // green-400

  // Text
  textPrimary: "#fafafa",
  textSecondary: "#a1a1aa",  // zinc-400
  textMuted: "#71717a",      // zinc-500

  // Zinc
  zinc800: "#27272a",
  zinc900: "#18181b",
};

// ==========================================
// RGBA COLORS (for gradients with opacity)
// ==========================================
export const rgba = {
  accentGlow: "rgba(6,182,212,0.1)",    // cyan glow
  accentGlowLight: "rgba(6,182,212,0.05)",
  accentGlowMedium: "rgba(6,182,212,0.15)",
  accentGlowStrong: "rgba(6,182,212,0.3)",
  blueGlow: "rgba(59,130,246,0.15)",
  blueGlowLight: "rgba(59,130,246,0.2)",
  greenGlow: "rgba(34,197,94,0.15)",
};

// ==========================================
// TAILWIND CLASS NAMES
// ==========================================
export const tw = {
  // Backgrounds
  bgPrimary: "bg-[#0A0A0B]",
  bgElevated: "bg-zinc-800/80",
  bgCard: "bg-gradient-to-b from-zinc-800/80 to-zinc-900/90",
  bgMuted: "bg-zinc-900/50",
  bgZinc900: "bg-zinc-900/95",

  // Text colors
  textWhite: "text-white",
  textPrimary: "text-zinc-100",
  textSecondary: "text-zinc-400",
  textMuted: "text-zinc-500",
  textAccent: "text-cyan-400",
  textAccentSecondary: "text-cyan-500",
  textCta: "text-green-400",
  textCtaSecondary: "text-emerald-400",

  // Accent gradients (text)
  gradientTextAccent: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",

  // Accent gradients (backgrounds)
  gradientAccent: "bg-gradient-to-r from-cyan-400 to-blue-500",
  gradientAccentBr: "bg-gradient-to-br from-cyan-400 to-blue-600",
  gradientAccentBtn: "bg-gradient-to-r from-cyan-500 to-blue-600",

  // CTA gradients
  gradientCta: "bg-gradient-to-r from-green-500 to-emerald-600",
  gradientCtaHover: "hover:from-green-400 hover:to-emerald-500",

  // Glow orbs
  glowOrbCyan: "bg-cyan-500/10",
  glowOrbCyanStrong: "bg-cyan-500/30",
  glowOrbBlue: "bg-blue-500/15",
  glowOrbBlueStrong: "bg-blue-500/30",

  // Borders
  borderDefault: "border-white/10",
  borderHover: "hover:border-white/20",
  borderAccent: "border-cyan-500/20",
  borderAccentStrong: "border-cyan-500/30",
  borderAccentLight: "border-cyan-500/10",
  borderAccentLighter: "border-cyan-500/5",

  // Badge styles
  badge: "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20",
  badgeSuccess: "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20",
  badgeBlue: "text-blue-400 bg-blue-500/10 border border-blue-500/20",

  // Glow effects
  glowAccent: "shadow-cyan-500/20",
  glowCta: "shadow-green-500/20",
  shadowAccent: "shadow-cyan-500/10",

  // Button base
  btnPrimary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500",
  btnCta: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500",

  // Status indicators
  statusAvailable: "bg-green-500",
  statusActive: "bg-cyan-500",

  // Connecting lines
  lineAccent: "via-cyan-500/30",

  // Ripple effects
  ripple: "border-cyan-500/10",
  rippleStrong: "border-cyan-500/20",
};

// ==========================================
// COMPONENT STYLES
// ==========================================
export const componentStyles = {
  // Page wrapper
  page: "min-h-screen bg-[#0A0A0B]",

  // Section badge (use for all section badges)
  badge: "inline-block px-4 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20",

  // Section heading gradient
  headingGradient: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",

  // Card
  card: "rounded-3xl bg-gradient-to-b from-zinc-800/80 to-zinc-900/90 border border-white/10 backdrop-blur-xl",
  cardHover: "hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10",

  // CTA Button (full style)
  ctaButton: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-green-500/20",

  // Primary Button (full style)
  primaryButton: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl",

  // Glow background
  glowBg: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl",

  // Logo icon
  logoIcon: "bg-gradient-to-br from-cyan-400 to-blue-600",

  // Step number badge
  stepBadge: "bg-gradient-to-r from-cyan-500 to-blue-600",

  // Location pin
  locationPin: "bg-gradient-to-r from-cyan-500 to-blue-600",
};

// ==========================================
// FEATURE GRADIENTS (for WhyChooseUs etc)
// ==========================================
export const featureGradients = [
  "from-cyan-500 to-blue-500",
  "from-blue-500 to-purple-500",
  "from-purple-500 to-pink-500",
  "from-pink-500 to-orange-500",
  "from-orange-500 to-yellow-500",
  "from-yellow-500 to-cyan-500",
];

// ==========================================
// FULL THEME OBJECT
// ==========================================
export const theme = {
  colors,
  rgba,
  tw,
  styles: componentStyles,
  featureGradients,
};

export default theme;

