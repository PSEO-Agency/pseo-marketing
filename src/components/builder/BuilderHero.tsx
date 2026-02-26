"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BuilderHero() {
  return (
    <section className="relative">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(262,83%,58%)]/20 bg-[hsl(262,83%,58%)]/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(262,83%,58%)] animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Powered by PSEO Builder
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground"
          >
            Launch Programmatic SEO.{" "}
            <span className="text-[hsl(262,83%,58%)]">At Any Scale.</span>{" "}
            <br className="hidden md:block" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            Build high-ranking programmatic SEO pages, directories, and
            marketplaces &mdash; including free websites, CRM, and AI agents for
            every project, client, or listing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Powered by the PSEO Builder and our joint venture with Wellplan, we
            give you the full growth infrastructure to launch, distribute, and
            monetize SEO-driven projects &mdash; without upfront costs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
              <Link href="/builder/pricing">
                <Play className="w-4 h-4" />
                View Pricing
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Built for agencies, marketplaces, and enterprises
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="px-3 py-1 rounded-full bg-[hsl(262,83%,58%)]/10 text-[hsl(262,83%,58%)] text-xs font-medium">
                End Clients
              </span>
              <span className="px-3 py-1 rounded-full bg-[hsl(217,91%,60%)]/10 text-[hsl(217,91%,60%)] text-xs font-medium">
                Agency Partners
              </span>
              <span className="px-3 py-1 rounded-full bg-[hsl(25,95%,53%)]/10 text-[hsl(25,95%,53%)] text-xs font-medium">
                Country Partners
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
