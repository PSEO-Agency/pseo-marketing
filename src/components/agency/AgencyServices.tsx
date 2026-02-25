"use client";

import { motion } from "framer-motion";
import {
  Search,
  Settings,
  FileStack,
  BarChart3,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Keyword Research & Strategy",
    description:
      "Deep keyword analysis to identify high-volume, low-competition opportunities for programmatic content creation.",
  },
  {
    icon: Settings,
    title: "Technical SEO Automation",
    description:
      "Advanced technical implementation ensuring your programmatic pages are perfectly optimized for search engines.",
  },
  {
    icon: FileStack,
    title: "Content Generation at Scale",
    description:
      "Automated content creation systems that produce unique, valuable pages targeting thousands of keyword variations.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Real-time tracking and optimization of your programmatic SEO campaigns with detailed performance insights.",
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description:
      "Strategic optimization of landing pages to maximize conversions from your increased organic traffic.",
  },
  {
    icon: Users,
    title: "Competitor Analysis",
    description:
      "In-depth analysis of competitor strategies to identify gaps and opportunities in your market.",
  },
];

export default function AgencyServices() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Comprehensive Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How We Drive <span className="gradient-text">Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive programmatic SEO approach combines cutting-edge
            technology with proven strategies to scale your organic presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
