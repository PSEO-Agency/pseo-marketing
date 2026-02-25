"use client";

import { motion } from "framer-motion";
import { Crown, Users } from "lucide-react";

export default function BuilderGrowth() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Network Effects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your SEO scales because your users help you scale it.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[hsl(262,83%,58%)]/10 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-[hsl(262,83%,58%)]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Platform Owner</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Launch a directory or marketplace",
                  "Control taxonomy, SEO structure, monetization",
                  "Own the domain authority",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[hsl(262,83%,58%)]" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[hsl(217,91%,60%)]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[hsl(217,91%,60%)]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Users & Listings</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Create their own free website",
                  "Get SEO exposure automatically",
                  "Manage leads via CRM",
                  "Use AI agents to grow",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[hsl(217,91%,60%)]" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 rounded-2xl bg-[hsl(262,83%,58%)]/5 border border-[hsl(262,83%,58%)]/15 text-center"
          >
            <p className="text-lg font-semibold text-foreground">
              <span className="text-[hsl(262,83%,58%)]">
                Result:
              </span>{" "}
              Your SEO scales because your users help you scale it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
