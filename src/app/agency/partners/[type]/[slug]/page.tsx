"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, notFound } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import {
  PartnerHero,
  PartnerAbout,
  PartnerSpecialties,
  PartnerIntegrations,
  PartnerServices,
  PartnerProof,
  PartnerCTA,
} from "@/components/partners/PartnerProfileSections";

export default function PartnerProfilePage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: partner, isLoading } = useQuery({
    queryKey: ["partner", slug],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("partners")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <AgencyPageWrapper>
        <div className="flex items-center justify-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
      </AgencyPageWrapper>
    );
  }

  if (!partner) {
    notFound();
  }

  return (
    <AgencyPageWrapper>
      <PartnerHero partner={partner} />
      <PartnerAbout partner={partner} />
      <PartnerSpecialties partner={partner} />
      <PartnerIntegrations partner={partner} />
      <PartnerServices partner={partner} />
      <PartnerProof partner={partner} />
      <PartnerCTA partner={partner} />
    </AgencyPageWrapper>
  );
}
