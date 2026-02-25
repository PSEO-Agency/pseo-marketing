"use client";

import { motion } from "framer-motion";
import { Search, FileCode, Database, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Data Analysis & Research",
    description:
      "Identify high-volume keywords, dynamic data sources and analyze competitors for maximum impact.",
  },
  {
    icon: FileCode,
    step: "02",
    title: "Template Development",
    description:
      "Create scalable, SEO-optimized templates for mass page generation.",
  },
  {
    icon: Database,
    step: "03",
    title: "Database & Content Setup",
    description:
      "Build structured data foundations to power thousands of unique pages.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Scale & Traffic Growth",
    description:
      "Launch thousands of optimized pages and track performance for maximum traffic growth.",
  },
];

export default function AgencyProcess() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Proven Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Systematic organic growth from research to results.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-6 md:gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "md:text-right"
                        : "md:text-left"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl glass gradient-border inline-block ${
                        index % 2 === 0
                          ? "md:ml-auto"
                          : "md:mr-auto"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0
                            ? "md:flex-row-reverse"
                            : ""
                        }`}
                      >
                        <span className="text-xs font-bold text-primary">
                          {step.step}
                        </span>
                        <h3 className="text-lg font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
