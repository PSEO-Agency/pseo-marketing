"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingCart,
  Home,
  Heart,
  Building2,
  Landmark,
  Calculator,
  Scale,
} from "lucide-react";

const industries = [
  { icon: Monitor, title: "SaaS", slug: "saas" },
  { icon: ShoppingCart, title: "E-commerce", slug: "ecommerce" },
  { icon: Home, title: "Real Estate", slug: "real-estate" },
  { icon: Heart, title: "Healthcare", slug: "healthcare" },
  { icon: Building2, title: "Local Business", slug: "local-business" },
  { icon: Landmark, title: "Finance", slug: "finance" },
  { icon: Calculator, title: "Accounting", slug: "accounting-firm" },
  { icon: Scale, title: "Law Firm", slug: "law-firm" },
];

export default function AgencyIndustries() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Helping Businesses{" "}
            <span className="gradient-text">Across All Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From e-commerce to SaaS, healthcare to finance &mdash; our
            programmatic SEO strategies are tailored to deliver results in any
            vertical.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.a
              key={industry.slug}
              href={`https://programmaticseo.agency/industries/${industry.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{industry.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
