"use client";

import { motion } from "framer-motion";
import { Building2, Store, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const audiences = [
  {
    icon: Building2,
    title: "For Agencies",
    headline: "Launch PSEO for Clients Without Risk",
    benefits: [
      "Launch free PSEO promos for prospects",
      "White-label websites & CRM",
      "Upsell retainers, ads, CRO, automation",
      "Centralized workflow management",
    ],
    cta: "Agency Plan",
    color: "hsl(217,91%,60%)",
    bgColor: "bg-[hsl(217,91%,60%)]/10",
    borderColor: "border-[hsl(217,91%,60%)]/20",
  },
  {
    icon: Store,
    title: "For End Clients",
    headline: "Your Own SEO Growth Engine",
    benefits: [
      "Programmatic SEO brings traffic",
      "Free sites attract listings",
      "Listings create content",
      "Content compounds rankings",
    ],
    cta: "Start Free",
    color: "hsl(262,83%,58%)",
    bgColor: "bg-[hsl(262,83%,58%)]/10",
    borderColor: "border-[hsl(262,83%,58%)]/20",
  },
  {
    icon: Building,
    title: "For Country Partners",
    headline: "Scale Across an Entire Market",
    benefits: [
      "Manage agencies in your territory",
      "Revenue sharing model",
      "Country-level oversight dashboard",
      "Dedicated partner support",
    ],
    cta: "Partner With Us",
    color: "hsl(25,95%,53%)",
    bgColor: "bg-[hsl(25,95%,53%)]/10",
    borderColor: "border-[hsl(25,95%,53%)]/20",
  },
];

export default function BuilderAudiences() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Built for{" "}
            <span className="text-[hsl(262,83%,58%)]">
              Every Role
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re a business, agency, or country partner &mdash;
            there&apos;s a plan built for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:${audience.borderColor} transition-all duration-300 flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${audience.bgColor}`}
                  >
                    <audience.icon
                      className="w-5 h-5"
                      style={{ color: audience.color }}
                    />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: audience.color }}
                  >
                    {audience.title}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                  {audience.headline}
                </h3>

                <ul className="space-y-3 mb-8 flex-grow">
                  {audience.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: audience.color }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full"
                  style={{
                    borderColor: audience.color,
                    color: audience.color,
                  }}
                  asChild
                >
                  <Link href="/builder/pricing">{audience.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
