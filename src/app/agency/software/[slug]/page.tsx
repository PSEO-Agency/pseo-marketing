"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { notFound } from "next/navigation";
import { SoftwareHero } from "@/components/software/SoftwareHero";
import { SoftwareFeatures } from "@/components/software/SoftwareFeatures";
import { SoftwareSpecs } from "@/components/software/SoftwareSpecs";
import { RelatedSoftware } from "@/components/software/RelatedSoftware";
import { SoftwareScreenshots } from "@/components/software/SoftwareScreenshots";
import { SoftwareImplementation } from "@/components/software/SoftwareImplementation";
import { Badge } from "@/components/ui/badge";

export default function SoftwareDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: software,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["software", slug],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("software")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .eq("type", "software")
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: relatedSoftware } = useQuery({
    queryKey: ["related-software", slug, software?.category],
    queryFn: async () => {
      let query = agencySupabase
        .from("software")
        .select("*")
        .eq("is_published", true)
        .eq("type", "software")
        .neq("slug", slug)
        .limit(3);

      if (software?.category) {
        query = query.eq("category", software.category);
      }

      const { data, error } = await query.order("popularity_score", {
        ascending: false,
      });

      if (error) throw error;
      return data;
    },
    enabled: !!slug && !!software,
  });

  const { data: relatedTools } = useQuery({
    queryKey: ["related-tools", slug, software?.category],
    queryFn: async () => {
      let query = agencySupabase
        .from("software")
        .select("*")
        .eq("is_published", true)
        .eq("type", "tool")
        .neq("slug", slug)
        .limit(3);

      if (software?.category) {
        query = query.eq("category", software.category);
      }

      const { data, error } = await query.order("popularity_score", {
        ascending: false,
      });

      if (error) throw error;
      return data;
    },
    enabled: !!slug && !!software,
  });

  if (isLoading) {
    return (
      <AgencyPageWrapper>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AgencyPageWrapper>
    );
  }

  if (error || !software) {
    notFound();
  }

  const features = Array.isArray(software.features)
    ? (software.features as Record<string, unknown>[]).filter(
        (
          feature,
        ): feature is { name: string; description: string } =>
          typeof feature === "object" &&
          feature !== null &&
          typeof feature.name === "string" &&
          typeof feature.description === "string",
      )
    : [];

  const tags = Array.isArray(software.tags) ? software.tags : [];

  const softwareSpecsData = {
    user_rating: software.user_rating,
    review_count: software.review_count,
    popularity_score: software.popularity_score,
    difficulty_level: software.difficulty_level,
    setup_time: software.setup_time,
    target_audience: software.target_audience,
    integration_capabilities: Array.isArray(software.integration_capabilities)
      ? software.integration_capabilities
      : [],
    use_cases: Array.isArray(software.use_cases) ? software.use_cases : [],
    technical_specs:
      software.technical_specs &&
      typeof software.technical_specs === "object" &&
      !Array.isArray(software.technical_specs)
        ? (software.technical_specs as Record<string, any>)
        : {},
  };

  const screenshots = Array.isArray(software.screenshots)
    ? (software.screenshots as Record<string, unknown>[]).filter(
        (
          screenshot,
        ): screenshot is {
          url: string;
          title: string;
          description: string;
          category: string;
        } =>
          typeof screenshot === "object" &&
          screenshot !== null &&
          typeof screenshot.url === "string" &&
          typeof screenshot.title === "string" &&
          typeof screenshot.description === "string" &&
          typeof screenshot.category === "string",
      )
    : [];

  const implementationExamples = Array.isArray(
    software.implementation_examples,
  )
    ? (software.implementation_examples as Record<string, unknown>[]).filter(
        (
          example,
        ): example is {
          title: string;
          description: string;
          code: string;
          complexity: "Beginner" | "Intermediate" | "Advanced";
          timeEstimate: string;
        } =>
          typeof example === "object" &&
          example !== null &&
          typeof example.title === "string" &&
          typeof example.description === "string" &&
          typeof example.code === "string" &&
          ["Beginner", "Intermediate", "Advanced"].includes(
            example.complexity as string,
          ) &&
          typeof example.timeEstimate === "string",
      )
    : [];

  const supportResources =
    software.support_resources &&
    typeof software.support_resources === "object" &&
    !Array.isArray(software.support_resources)
      ? (software.support_resources as Record<string, any>)
      : {};

  return (
    <AgencyPageWrapper>
      <main>
        <SoftwareHero software={software} />
        <SoftwareFeatures features={features} />

        {screenshots.length > 0 && (
          <SoftwareScreenshots
            screenshots={screenshots}
            title={software.title}
          />
        )}

        <SoftwareSpecs software={softwareSpecsData} />

        {software.content && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div
                  className="prose prose-lg prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: software.content }}
                />
              </div>
            </div>
          </section>
        )}

        {(software.setup_guide || implementationExamples.length > 0) && (
          <SoftwareImplementation
            setupGuide={software.setup_guide || "Setup guide coming soon..."}
            implementationExamples={implementationExamples}
            migrationGuide={software.migration_guide}
            supportResources={supportResources}
          />
        )}

        {relatedSoftware && relatedSoftware.length > 0 && (
          <RelatedSoftware
            items={relatedSoftware}
            title="Related Software"
            subtitle="Discover other software platforms that complement your SEO strategy"
          />
        )}

        {relatedTools && relatedTools.length > 0 && (
          <RelatedSoftware
            items={relatedTools}
            title="Recommended Tools"
            subtitle="Essential SEO tools that work great with this software platform"
          />
        )}

        {tags.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Technologies
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tags.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-base border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </AgencyPageWrapper>
  );
}
