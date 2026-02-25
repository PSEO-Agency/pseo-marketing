import BuilderNavbar from "@/components/builder/BuilderNavbar";
import Footer from "@/components/landing/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTiers from "@/components/pricing/PricingTiers";
import PricingFAQ from "@/components/pricing/PricingFAQ";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PSEO Builder Pricing | Free, Business, Agency, Country Partner",
  description:
    "Choose the right plan for your programmatic SEO needs. Start free, scale to agency or country partner.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <BuilderNavbar />
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
      <Footer />
    </main>
  );
}
