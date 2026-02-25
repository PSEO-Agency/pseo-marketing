"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, notFound } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { SoftwareHero } from "@/components/software/SoftwareHero";
import { SoftwareFeatures } from "@/components/software/SoftwareFeatures";
import { SoftwareSpecs } from "@/components/software/SoftwareSpecs";
import { RelatedSoftware } from "@/components/software/RelatedSoftware";
import { Badge } from "@/components/ui/badge";

export default function ToolDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: tool,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tool", slug],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("software")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .eq("type", "tool")
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: relatedTools } = useQuery({
    queryKey: ["related-tools", slug, tool?.category],
    queryFn: async () => {
      let query = agencySupabase
        .from("software")
        .select("*")
        .eq("is_published", true)
        .eq("type", "tool")
        .neq("slug", slug)
        .limit(3);

      if (tool?.category) {
        query = query.eq("category", tool.category);
      }

      const { data, error } = await query.order("popularity_score", {
        ascending: false,
      });

      if (error) throw error;
      return data;
    },
    enabled: !!slug && !!tool,
  });

  const { data: relatedSoftware } = useQuery({
    queryKey: ["related-software", slug, tool?.category],
    queryFn: async () => {
      let query = agencySupabase
        .from("software")
        .select("*")
        .eq("is_published", true)
        .eq("type", "software")
        .neq("slug", slug)
        .limit(3);

      if (tool?.category) {
        query = query.eq("category", tool.category);
      }

      const { data, error } = await query.order("popularity_score", {
        ascending: false,
      });

      if (error) throw error;
      return data;
    },
    enabled: !!slug && !!tool,
  });

  if (isLoading) {
    return (
      <AgencyPageWrapper>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      </AgencyPageWrapper>
    );
  }

  if (error || !tool) {
    notFound();
  }

  const features = Array.isArray(tool.features)
    ? (tool.features as Record<string, unknown>[]).filter(
        (
          feature,
        ): feature is { name: string; description: string } =>
          typeof feature === "object" &&
          feature !== null &&
          typeof feature.name === "string" &&
          typeof feature.description === "string",
      )
    : [];

  const tags = Array.isArray(tool.tags) ? tool.tags : [];

  const toolSpecsData = {
    user_rating: tool.user_rating,
    review_count: tool.review_count,
    popularity_score: tool.popularity_score,
    difficulty_level: tool.difficulty_level,
    setup_time: tool.setup_time,
    target_audience: tool.target_audience,
    integration_capabilities: Array.isArray(tool.integration_capabilities)
      ? tool.integration_capabilities
      : [],
    use_cases: Array.isArray(tool.use_cases) ? tool.use_cases : [],
    technical_specs:
      tool.technical_specs &&
      typeof tool.technical_specs === "object" &&
      !Array.isArray(tool.technical_specs)
        ? (tool.technical_specs as Record<string, any>)
        : {},
  };

  return (
    <AgencyPageWrapper>
      <main>
        <SoftwareHero software={tool} />
        <SoftwareFeatures features={features} />
        <SoftwareSpecs software={toolSpecsData} />

        {tool.content && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div
                  className="prose prose-lg prose-emerald max-w-none"
                  dangerouslySetInnerHTML={{ __html: tool.content }}
                />
              </div>
            </div>
          </section>
        )}

        {relatedTools && relatedTools.length > 0 && (
          <RelatedSoftware
            items={relatedTools}
            title="Related Tools"
            subtitle="Other essential SEO tools for comprehensive optimization"
          />
        )}

        {relatedSoftware && relatedSoftware.length > 0 && (
          <RelatedSoftware
            items={relatedSoftware}
            title="Recommended Software"
            subtitle="Software platforms that integrate well with this tool"
          />
        )}

        {tags.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Categories
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tags.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-base border-emerald-200 text-emerald-700 hover:bg-emerald-50"
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
