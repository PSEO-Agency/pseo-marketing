"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  TrendingUp,
  Zap,
  Target,
  CheckCircle,
} from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Automate content creation",
    items: [
      "Dynamic Page Generation",
      "Template Optimization",
      "Data-Driven Content",
      "Bulk Content Publishing",
    ],
    accent: "text-blue-400",
    bg: "bg-blue-500/20",
    iconBg: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Scale organic traffic",
    items: [
      "Keyword Automation",
      "Long-tail Targeting",
      "Search Intent Matching",
      "SERP Feature Optimization",
    ],
    accent: "text-green-400",
    bg: "bg-green-500/20",
    iconBg: "from-green-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Accelerate performance tracking",
    items: [
      "Automated Reporting",
      "Performance Analytics",
      "Real-time Monitoring",
      "ROI Tracking",
    ],
    accent: "text-purple-400",
    bg: "bg-purple-500/20",
    iconBg: "from-purple-500 to-purple-600",
  },
  {
    icon: Target,
    title: "Maximize revenue conversion",
    items: [
      "Conversion Optimization",
      "Landing Page Automation",
      "Lead Generation",
      "Revenue Attribution",
    ],
    accent: "text-orange-400",
    bg: "bg-orange-500/20",
    iconBg: "from-orange-500 to-red-500",
  },
];

const funnelStats = [
  { value: "10,000", label: "Programmatic SEO Pages", width: "w-full", bg: "from-blue-500 to-blue-600" },
  { value: "45K", label: "Keywords Ranking", width: "w-4/5", bg: "from-green-500 to-green-600" },
  { value: "500%", label: "Traffic Increase", width: "w-3/5", bg: "from-purple-500 to-purple-600" },
  { value: "250K+", label: "Revenue", width: "w-2/5", bg: "from-orange-500 to-red-500" },
];

export default function AgencyAutomation() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Proven Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How Programmatic SEO{" "}
            <span className="gradient-text block mt-2">
              Automates &amp; Drives Revenue
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            By leveraging data-driven automation and scalable content strategies,
            our programmatic SEO approach helps your business achieve massive
            organic growth. Stop managing SEO manually and start working with an
            agency that automates results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: 4 pillars */}
          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.iconBg} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                    <div className="glass rounded-xl p-5">
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        {pillar.items.map((item) => (
                          <div
                            key={item}
                            className={`flex items-center gap-2 p-2.5 rounded-lg ${pillar.bg} transition-colors`}
                          >
                            <ArrowRight className={`w-3.5 h-3.5 ${pillar.accent}`} />
                            <span className={pillar.accent + " font-medium"}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: funnel stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 pt-4"
          >
            {funnelStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`${stat.width} mx-auto`}
              >
                <div
                  className={`bg-gradient-to-r ${stat.bg} rounded-2xl flex items-center justify-center text-white font-bold shadow-xl hover:scale-105 transition-transform py-6`}
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm opacity-90">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
