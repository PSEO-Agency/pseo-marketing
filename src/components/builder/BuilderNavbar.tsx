"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const BUILDER_URL = process.env.NEXT_PUBLIC_BUILDER_URL || "https://app.pseo.nl";

const navLinks = [
  { label: "Features", href: "/builder#features" },
  { label: "How It Works", href: "/builder#engine" },
  { label: "Pricing", href: "/builder/pricing" },
];

export default function BuilderNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");
  const logoSrc = mounted
    ? isDark
      ? "/landing/builder-logo-light.svg"
      : "/landing/builder-logo-dark.svg"
    : "/landing/builder-idle.svg";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/builder" className="flex items-center gap-2 shrink-0">
            <Image
              src={logoSrc}
              alt="PSEO Builder"
              width={198}
              height={123}
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a href={BUILDER_URL}>Sign In</a>
            </Button>
            <Button
              size="sm"
              className="bg-[hsl(262,83%,58%)] text-white hover:bg-[hsl(262,83%,50%)] shadow-sm"
              asChild
            >
              <Link href="/builder/pricing">
                Start Building Free
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href={BUILDER_URL}>Sign In</a>
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-[hsl(262,83%,58%)] text-white hover:bg-[hsl(262,83%,50%)]"
                  asChild
                >
                  <Link href="/builder/pricing">
                    Start Building Free
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
