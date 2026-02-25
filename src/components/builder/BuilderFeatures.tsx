"use client";

import { motion } from "framer-motion";
import { Layers, Store, Globe, Rocket } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Programmatic SEO Campaigns",
    features: [
      "Thousands of landing pages",
      "Comparisons, alternatives, locations",
      "Fully automated generation",
    ],
  },
  {
    icon: Store,
    title: "Directories & Marketplaces",
    features: [
      "SaaS tools directories",
      "Local business listings",
      "Product catalogs",
    ],
  },
  {
    icon: Globe,
    title: "Free Websites for Listings",
    features: [
      "Each listing gets its own site",
      "SEO-ready out of the box",
      "Connected to CRM & AI agents",
    ],
  },
  {
    icon: Rocket,
    title: "Agency Growth Engines",
    features: [
      "Free PSEO promos for clients",
      "Upsell SEO, CRO, ads",
      "Automation at scale",
    ],
  },
];

export default function BuilderFeatures() {
  return (
    <section id="features" className="relative py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What Can You{" "}
            <span className="text-[hsl(262,83%,58%)]">Build</span>{" "}
            With This?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From single pages to massive marketplaces &mdash; the infrastructure
            adapts to your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-[hsl(262,83%,58%)]/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[hsl(262,83%,58%)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-[hsl(262,83%,58%)]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{card.title}</h3>
                <ul className="space-y-2">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(262,83%,58%)] mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
