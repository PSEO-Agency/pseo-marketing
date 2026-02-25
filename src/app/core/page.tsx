import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CoreComingSoon from "@/components/core/CoreComingSoon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PSEO Core | Coming Soon",
  description:
    "The foundational technology powering next-generation programmatic SEO. Coming soon.",
};

export default function CorePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <CoreComingSoon />
      <Footer />
    </main>
  );
}
