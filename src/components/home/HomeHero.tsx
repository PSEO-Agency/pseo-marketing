"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function usePrefersHover(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(hover: hover)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(hover: hover)").matches,
    () => true,
  );
}

type ModeId = "agency" | "builder" | "core";

interface ModeConfig {
  id: ModeId;
  title: string;
  description: string;
  href: string;
  idleLogo: string;
  activeLogo: string;
  idleBg: string;
  activeBg: string;
  cta: string;
  disabled: boolean;
}

const modes: ModeConfig[] = [
  {
    id: "agency",
    title: "PSEO Agency",
    description:
      "Expert Programmatic SEO Services. We build thousands of high-ranking pages that drive qualified leads to your business.",
    href: "https://programmaticseo.agency",
    idleLogo: "/landing/agency-idle.svg",
    activeLogo: "/landing/agency-white.svg",
    idleBg: "hsl(150 45% 89%)",
    activeBg: "linear-gradient(135deg, hsl(210 80% 52%), hsl(195 80% 48%))",
    cta: "Explore Services",
    disabled: false,
  },
  {
    id: "builder",
    title: "PSEO Builder",
    description:
      "Build and Deploy Hundreds of pages in Minutes! Researched content, News Scraping, Template Generations, and Publish to the most popular CMS's including WordPress, Contentful, Story Blok, And More! Or use our Next.js Full Project Export!",
    href: "/builder",
    idleLogo: "/landing/builder-idle.svg",
    activeLogo: "/landing/builder-white.svg",
    idleBg: "hsl(260 35% 91%)",
    activeBg: "linear-gradient(135deg, hsl(265 50% 65%), hsl(230 55% 68%))",
    cta: "Start Building",
    disabled: false,
  },
  {
    id: "core",
    title: "PSEO Core",
    description:
      "The foundational technology powering next-generation programmatic SEO. Advanced infrastructure for enterprise-grade scale.",
    href: "/core",
    idleLogo: "/landing/core-idle.svg",
    activeLogo: "/landing/core-white.svg",
    idleBg: "hsl(140 25% 90%)",
    activeBg: "linear-gradient(135deg, hsl(155 40% 45%), hsl(160 35% 50%))",
    cta: "Coming Soon",
    disabled: true,
  },
];

const SKEW_DEG = 5;

const transitionPanel = {
  duration: 0.35,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};
const transitionContent = {
  duration: 0.3,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};
const transitionReduced = { duration: 0.05, ease: "linear" as const };

export default function HomeHero() {
  const [activeMode, setActiveMode] = useState<ModeId | null>(null);
  const reducedMotion = useReducedMotion();
  const prefersHover = usePrefersHover();
  const panelT = reducedMotion ? transitionReduced : transitionPanel;
  const contentT = reducedMotion ? transitionReduced : transitionContent;

  const handlePointerEnter = useCallback(
    (id: ModeId) => setActiveMode(id),
    [],
  );
  const handlePointerLeave = useCallback(() => {
    if (prefersHover) setActiveMode(null);
  }, [prefersHover]);
  const handleFocus = useCallback((id: ModeId) => setActiveMode(id), []);
  const handleBlur = useCallback(() => setActiveMode(null), []);
  const handleClick = useCallback((id: ModeId) => setActiveMode(id), []);

  return (
    <section
      className="h-screen w-full overflow-hidden relative select-none"
      aria-label="Choose your path: Agency, Builder, or Core"
    >
      {/* ── Background layer: skewed parallelogram panels ── */}
      <div className="absolute inset-0 flex" aria-hidden="true">
        {modes.map((mode) => {
          const isActive = activeMode === mode.id;
          return (
            <motion.div
              key={`bg-${mode.id}`}
              className="relative h-full overflow-hidden"
              initial={false}
              animate={{ flex: isActive ? 1.8 : 1 }}
              transition={panelT}
            >
              <motion.div
                className="absolute h-full"
                style={{
                  top: 0,
                  left: "-12%",
                  right: "-12%",
                  transform: `skewX(${SKEW_DEG}deg)`,
                  background: isActive ? mode.activeBg : mode.idleBg,
                }}
                initial={false}
                animate={{
                  opacity:
                    reducedMotion || activeMode === null
                      ? 1
                      : isActive
                        ? 1
                        : 0.7,
                }}
                transition={panelT}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ── Content layer: straight (no skew) ── */}
      <div className="relative z-10 flex h-full">
        {modes.map((mode) => {
          const isActive = activeMode === mode.id;
          return (
            <motion.div
              key={`content-${mode.id}`}
              role="group"
              aria-label={`${mode.title}: ${mode.disabled ? "Coming soon" : mode.cta}`}
              tabIndex={0}
              className="h-full flex items-center justify-center cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-inset"
              style={{ minWidth: 0 }}
              initial={false}
              animate={{ flex: isActive ? 1.8 : 1 }}
              transition={panelT}
              onPointerEnter={() => handlePointerEnter(mode.id)}
              onPointerLeave={handlePointerLeave}
              onFocus={() => handleFocus(mode.id)}
              onBlur={handleBlur}
              onClick={() => handleClick(mode.id)}
            >
              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    key="active"
                    className="flex flex-col items-center text-center px-8 max-w-md"
                    initial={{
                      opacity: 0,
                      y: reducedMotion ? 0 : 12,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: reducedMotion ? 0 : -8,
                    }}
                    transition={contentT}
                  >
                    <Image
                      src={mode.activeLogo}
                      alt={`${mode.title} logo`}
                      width={200}
                      height={100}
                      className="mb-8 w-[180px] md:w-[220px] h-auto"
                      priority
                    />
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                      {mode.description}
                    </p>
                    {mode.disabled ? (
                      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 text-white/70 font-medium text-sm backdrop-blur-sm">
                        <Lock className="w-4 h-4" />
                        {mode.cta}
                      </span>
                    ) : (
                      <Link
                        href={mode.href}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {mode.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeMode === null ? 1 : 0.6,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={mode.idleLogo}
                      alt={`${mode.title} logo`}
                      width={163}
                      height={81}
                      className="w-[120px] md:w-[160px] h-auto"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
