"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, notFound } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: caseStudy,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["case-study", slug],
    queryFn: async () => {
      if (!slug) throw new Error("No slug provided");

      const { data, error } = await agencySupabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <AgencyPageWrapper>
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </AgencyPageWrapper>
    );
  }

  if (error || !caseStudy) {
    notFound();
  }

  return (
    <AgencyPageWrapper>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600">
              Client: {caseStudy.client_name}
            </p>
            {caseStudy.industry && (
              <p className="text-lg text-gray-500">
                Industry: {caseStudy.industry}
              </p>
            )}
          </header>

          {caseStudy.challenge && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Challenge
              </h2>
              <p className="text-gray-700">{caseStudy.challenge}</p>
            </section>
          )}

          {caseStudy.solution && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Solution
              </h2>
              <p className="text-gray-700">{caseStudy.solution}</p>
            </section>
          )}

          {caseStudy.results && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Results
              </h2>
              <p className="text-gray-700">{caseStudy.results}</p>
            </section>
          )}
        </div>
      </main>
    </AgencyPageWrapper>
  );
}
