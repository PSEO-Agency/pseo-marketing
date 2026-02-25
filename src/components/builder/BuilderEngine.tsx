"use client";

import { motion } from "framer-motion";
import { Scan, Cpu, FileStack, RefreshCw, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Scan,
    title: "Crawl any site or dataset",
    description: "Extract structured data from any source",
  },
  {
    icon: Cpu,
    title: "Detect structure automatically",
    description: "AI-powered schema recognition",
  },
  {
    icon: FileStack,
    title: "Generate infinite SEO pages",
    description: "Scale to millions of pages",
  },
  {
    icon: RefreshCw,
    title: "Sync with APIs & live data",
    description: "Real-time content updates",
  },
  {
    icon: Zap,
    title: "Continuously improve pages",
    description: "Performance-based optimization",
  },
];

export default function BuilderEngine() {
  return (
    <section id="engine" className="relative py-16 md:py-20 bg-surface/50">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[hsl(262,83%,58%)]/10 text-[hsl(262,83%,58%)] text-sm font-medium mb-6">
            Core Engine
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            The Engine Behind It All:{" "}
            <span className="text-[hsl(262,83%,58%)]">
              PSEO Builder
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A production-grade system that turns data into ranking pages at
            massive scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-[hsl(262,83%,58%)]/20 transition-all duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(262,83%,58%)]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-6 h-6 text-[hsl(262,83%,58%)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
