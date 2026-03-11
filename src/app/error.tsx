"use client";

import { useEffect } from "react";
import { Droplets } from "lucide-react";
import { colors } from "@/lib/theme";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6" style={{ backgroundColor: colors.bg }}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-600 rounded-xl sm:rounded-2xl blur-xl opacity-50" />
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-400 to-orange-600 flex items-center justify-center">
              <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Error icon */}
        <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">⚠️</div>

        <h2 className="text-xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4">
          Something went wrong!
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
          We encountered an unexpected error. Don&apos;t worry, our team has been notified.
          Please try again or return to the homepage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-95"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
