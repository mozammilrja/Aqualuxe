import { colors } from "@/lib/theme";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: colors.bg }}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative text-center">
        {/* Loading spinner */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-zinc-800" />
          {/* Spinning gradient ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin" />
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-sm" />
          {/* Water drop icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-zinc-400 text-xs sm:text-sm animate-pulse">
          Loading...
        </p>

        {/* Animated dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: "0.6s",
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
