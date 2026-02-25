import type { Metadata } from "next";
import AgencyDarkWrapper from "@/components/agency/AgencyDarkWrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | PSEO Agency",
    default: "PSEO Agency | Expert Programmatic SEO Services",
  },
  description:
    "Scale your organic traffic with data-driven programmatic SEO. We create thousands of high-converting pages that rank on page 1.",
};

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AgencyDarkWrapper>{children}</AgencyDarkWrapper>;
}
