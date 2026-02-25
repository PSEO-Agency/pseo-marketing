"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="relative pt-28 pb-8">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(262,83%,58%)]/20 bg-[hsl(262,83%,58%)]/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(262,83%,58%)] animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Simple, transparent pricing
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Choose Your{" "}
            <span className="text-[hsl(262,83%,58%)]">
              Growth Plan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. Every plan includes the
            full PSEO Builder engine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
