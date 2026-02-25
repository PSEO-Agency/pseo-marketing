import BuilderNavbar from "@/components/builder/BuilderNavbar";
import Footer from "@/components/landing/Footer";
import BuilderHero from "@/components/builder/BuilderHero";
import BuilderFeatures from "@/components/builder/BuilderFeatures";
import BuilderEngine from "@/components/builder/BuilderEngine";
import BuilderGrowth from "@/components/builder/BuilderGrowth";
import BuilderAudiences from "@/components/builder/BuilderAudiences";
import BuilderCTA from "@/components/builder/BuilderCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PSEO Builder | Build Your Programmatic SEO Engine",
  description:
    "Launch directories, marketplaces, and thousands of SEO pages. Free websites, CRM, and AI agents for every listing.",
};

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <BuilderNavbar />
      <BuilderHero />
      <BuilderFeatures />
      <BuilderEngine />
      <BuilderGrowth />
      <BuilderAudiences />
      <BuilderCTA />
      <Footer />
    </main>
  );
}
