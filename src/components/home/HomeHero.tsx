"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, Cpu, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "PSEO Agency",
    description:
      "Expert programmatic SEO services. We build thousands of high-ranking pages that drive qualified leads to your business.",
    href: "/agency",
    icon: Building2,
    accentColor: "hsl(175, 80%, 40%)",
    borderHover: "hover:border-[hsl(175,80%,40%)]",
    iconBg: "bg-[hsl(175,80%,40%)]/10",
    iconColor: "text-[hsl(175,80%,40%)]",
    cta: "Explore Services",
    disabled: false,
  },
  {
    title: "PSEO Builder",
    description:
      "Build your own programmatic SEO engine. Launch directories, marketplaces, and thousands of SEO pages with our builder platform.",
    href: "/builder",
    icon: Hammer,
    accentColor: "hsl(262, 83%, 58%)",
    borderHover: "hover:border-[hsl(262,83%,58%)]",
    iconBg: "bg-[hsl(262,83%,58%)]/10",
    iconColor: "text-[hsl(262,83%,58%)]",
    cta: "Start Building",
    disabled: false,
  },
  {
    title: "PSEO Core",
    description:
      "The foundational technology powering next-generation programmatic SEO. Advanced infrastructure for enterprise-grade scale.",
    href: "/core",
    icon: Cpu,
    accentColor: "hsl(0, 0%, 60%)",
    borderHover: "",
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
    cta: "Coming Soon",
    disabled: true,
  },
];

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Programmatic SEO B.V.
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Programmatic SEO.{" "}
            <span className="text-primary">Reimagined.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Agency services, a powerful builder, and cutting-edge core
            technology. Choose your path to scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
            >
              {card.disabled ? (
                <div className="relative h-full p-8 rounded-2xl border border-border bg-muted/30 opacity-50 cursor-not-allowed">
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                      <Lock className="w-3 h-3" />
                      Coming Soon
                    </span>
                  </div>
                  <div
                    className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6`}
                  >
                    <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-muted-foreground">
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground/70 mb-8 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground/50 font-medium">
                    {card.cta}
                  </div>
                </div>
              ) : (
                <Link href={card.href} className="group block h-full">
                  <div
                    className={`h-full p-8 rounded-2xl border border-border bg-card shadow-sm ${card.borderHover} hover:shadow-md transition-all duration-300`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-foreground">{card.title}</h2>
                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                      {card.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 font-medium"
                      style={{ color: card.accentColor }}
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
