import AgencyNavbar from "@/components/agency/AgencyNavbar";
import AgencyFooter from "@/components/agency/AgencyFooter";
import AgencyHero from "@/components/agency/AgencyHero";
import AgencyStats from "@/components/agency/AgencyStats";
import AgencyProcess from "@/components/agency/AgencyProcess";
import AgencyAutomation from "@/components/agency/AgencyAutomation";
import AgencyServices from "@/components/agency/AgencyServices";
import AgencyExpertise from "@/components/agency/AgencyExpertise";
import AgencyRevenueProof from "@/components/agency/AgencyRevenueProof";
import AgencyTestimonials from "@/components/agency/AgencyTestimonials";
import AgencyIndustries from "@/components/agency/AgencyIndustries";
import AgencyCTA from "@/components/agency/AgencyCTA";
import AgencyTeam from "@/components/agency/AgencyTeam";
import AgencyBlog from "@/components/agency/AgencyBlog";
import AgencySEOCast from "@/components/agency/AgencySEOCast";
import AgencyTools from "@/components/agency/AgencyTools";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PSEO Agency | Expert Programmatic SEO Services",
  description:
    "Scale your organic traffic with data-driven programmatic SEO. We create thousands of high-converting pages that rank on page 1.",
};

export default function AgencyPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <AgencyNavbar />
      <AgencyHero />
      <AgencyStats />
      <AgencyProcess />
      <div id="automation">
        <AgencyAutomation />
      </div>
      <div id="services">
        <AgencyServices />
      </div>
      <div id="expertise">
        <AgencyExpertise />
      </div>
      <div id="results">
        <AgencyRevenueProof />
      </div>
      <AgencyTestimonials />
      <div id="industries">
        <AgencyIndustries />
      </div>
      <AgencyCTA />
      <div id="team">
        <AgencyTeam />
      </div>
      <div id="blog">
        <AgencyBlog />
      </div>
      <AgencySEOCast />
      <AgencyTools />
      <AgencyFooter />
    </main>
  );
}
