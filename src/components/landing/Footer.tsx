"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-foreground mb-2">PSEO</div>
            <p className="text-sm text-muted-foreground">
              Built by Programmatic SEO B.V.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/agency"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Agency
            </Link>
            <Link
              href="/builder"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Builder
            </Link>
            <Link
              href="/core"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Core
            </Link>
          </div>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Programmatic SEO B.V. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
