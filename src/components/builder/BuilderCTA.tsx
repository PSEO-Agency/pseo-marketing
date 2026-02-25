"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BuilderCTA() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-[hsl(262,83%,58%)]/5 border border-[hsl(262,83%,58%)]/15"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            This Is How Programmatic SEO{" "}
            <span className="text-[hsl(262,83%,58%)]">
              Becomes a Platform
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the next generation of SEO-driven businesses. Start free, scale
            infinitely.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="group bg-[hsl(262,83%,58%)] text-white hover:bg-[hsl(262,83%,50%)] shadow-md transition-all duration-300"
              asChild
            >
              <Link href="/builder/pricing">
                Start Building Free
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-[hsl(262,83%,58%)]/30 text-[hsl(262,83%,58%)] hover:bg-[hsl(262,83%,58%)]/5 hover:border-[hsl(262,83%,58%)]/50"
              asChild
            >
              <Link href="/agency">Prefer Agency Services?</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
