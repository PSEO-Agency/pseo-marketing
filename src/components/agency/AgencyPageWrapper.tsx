"use client";

import AgencyNavbar from "./AgencyNavbar";
import Footer from "@/components/landing/Footer";

export default function AgencyPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AgencyNavbar />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
}
