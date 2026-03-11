"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Droplets, Users, Star, Clock } from "lucide-react";
import { colors, tw, componentStyles } from "@/lib/theme";

interface CounterProps {
  target: number;
  suffix?: string;
}

function Counter({ target, suffix = "" }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, target]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Droplets,
    value: 50000,
    suffix: "+",
    label: "Bottles Delivered",
    color: "cyan",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Happy Customers",
    color: "blue",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Customer Rating",
    color: "yellow",
  },
  {
    icon: Clock,
    value: 30,
    suffix: " min",
    label: "Avg. Delivery Time",
    color: "green",
  },
];

const reviews = [
  {
    name: "Rahul S.",
    text: "Best water quality in the area. Fast delivery every time!",
    rating: 5,
  },
  {
    name: "Priya M.",
    text: "Been ordering for 6 months. Never disappointed. Pure taste.",
    rating: 5,
  },
  {
    name: "Amit K.",
    text: "The 20L jar is perfect for our office. Great service!",
    rating: 5,
  },
  {
    name: "Sneha R.",
    text: "Finally found a reliable water supplier. Crystal clear quality!",
    rating: 5,
  },
  {
    name: "Vikram P.",
    text: "Our family has been using Aqualuxe for a year now. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anjali T.",
    text: "Same-day delivery is a game changer. Love the purity guarantee!",
    rating: 5,
  },
  {
    name: "Rajesh G.",
    text: "Best mineral water in Gurgaon. My kids love the taste!",
    rating: 5,
  },
  {
    name: "Meera S.",
    text: "Switched from another brand. The difference in quality is noticeable!",
    rating: 5,
  },
  {
    name: "Arjun D.",
    text: "Running a cafe and their bulk orders are always on time. Excellent!",
    rating: 5,
  },
  {
    name: "Kavita N.",
    text: "The subscription service is so convenient. Never run out of water now!",
    rating: 5,
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-[#0A0A0B]" style={{ background: `linear-gradient(to bottom, rgba(24,24,27,0.5), ${colors.bg})` }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${colors.accent}08, transparent)` }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className={`${componentStyles.badge} mb-6`}>
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by{" "}
            <span className={componentStyles.headingGradient}>
              Thousands
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`p-6 rounded-2xl ${tw.bgMuted} border border-zinc-800/50 backdrop-blur-sm text-center hover:${tw.borderAccentStrong} transition-colors duration-300`}>
                {/* Icon */}
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                    stat.color === "cyan"
                      ? "from-cyan-500/20 to-cyan-600/5"
                      : stat.color === "blue"
                      ? "from-blue-500/20 to-blue-600/5"
                      : stat.color === "yellow"
                      ? "from-yellow-500/20 to-yellow-600/5"
                      : "from-green-500/20 to-green-600/5"
                  }`}
                >
                  <stat.icon
                    className={`w-6 h-6 ${
                      stat.color === "cyan"
                        ? "text-cyan-400"
                        : stat.color === "blue"
                        ? "text-blue-400"
                        : stat.color === "yellow"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  />
                </div>

                {/* Value */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  {typeof stat.value === "number" && stat.value > 10 ? (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </div>

                {/* Label */}
                <p className="text-sm text-zinc-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews - Auto-scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="overflow-hidden"
        >
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            What Our Customers Say
          </h3>

          {/* Infinite scroll container */}
          <div className="relative">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${colors.bg}, transparent)` }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${colors.bg}, transparent)` }} />
            
            {/* Scrolling track */}
            <div className="flex gap-4 sm:gap-6 animate-scroll hover:pause-animation">
              {/* First set of reviews */}
              {reviews.map((review, index) => (
                <div
                  key={`review-1-${index}`}
                  className={`flex-shrink-0 w-64 sm:w-80 p-4 sm:p-6 rounded-xl sm:rounded-2xl ${tw.bgMuted} border border-zinc-800/50 backdrop-blur-sm`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-zinc-300 text-sm sm:text-base mb-3 sm:mb-4">&ldquo;{review.text}&rdquo;</p>

                  {/* Name */}
                  <p className={`text-xs sm:text-sm font-medium ${tw.textAccent}`}>
                    {review.name}
                  </p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {reviews.map((review, index) => (
                <div
                  key={`review-2-${index}`}
                  className={`flex-shrink-0 w-64 sm:w-80 p-4 sm:p-6 rounded-xl sm:rounded-2xl ${tw.bgMuted} border border-zinc-800/50 backdrop-blur-sm`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-zinc-300 text-sm sm:text-base mb-3 sm:mb-4">&ldquo;{review.text}&rdquo;</p>

                  {/* Name */}
                  <p className={`text-xs sm:text-sm font-medium ${tw.textAccent}`}>
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
