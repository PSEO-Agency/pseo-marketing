"use client";

import { useQuery } from "@tanstack/react-query";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Badge } from "@/components/ui/badge";
import { Wrench, Target, BarChart3, Search } from "lucide-react";
import { SoftwareCard } from "@/components/software/SoftwareCard";

export default function ToolsCollectionPage() {
  const { data: tools, isLoading } = useQuery({
    queryKey: ["tools-collection"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("software")
        .select("*")
        .eq("is_published", true)
        .eq("type", "tool")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data;
    },
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

  const featuredTools = tools?.filter((item) => item.is_featured) || [];
  const regularTools = tools?.filter((item) => !item.is_featured) || [];
  const categories = tools
    ? [...new Set(tools.map((item) => item.category).filter(Boolean))]
    : [];

  return (
    <AgencyPageWrapper>
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center bg-emerald-50 rounded-full px-6 py-3 mb-8 border border-emerald-100">
                <Wrench className="h-5 w-5 text-emerald-600 mr-2" />
                <span className="text-emerald-700 text-sm font-bold">
                  PROFESSIONAL SEO TOOLS
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Essential <span className="webfx-text-gradient">SEO Tools</span>{" "}
                for Success
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
                Professional-grade SEO tools and utilities for keyword research,
                technical audits, competitor analysis, and performance
                optimization.
              </p>

              {categories.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {categories.map((category, index) => {
                    const icons = [Wrench, Target, BarChart3, Search];
                    const IconComponent = icons[index % icons.length];
                    return (
                      <Badge
                        key={category}
                        variant="outline"
                        className="px-4 py-2 text-base border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {category}
                      </Badge>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        {featuredTools.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-yellow-50 rounded-full px-6 py-3 mb-8 border border-yellow-100">
                  <Target className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-700 text-sm font-bold">
                    FEATURED TOOLS
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Top-Rated{" "}
                  <span className="webfx-text-gradient">SEO Tools</span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Hand-picked professional tools that deliver exceptional
                  results for SEO campaigns.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTools.map((item) => (
                  <SoftwareCard key={item.id} software={item} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Tools */}
        <section
          className={`py-20 ${featuredTools.length > 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                {featuredTools.length > 0
                  ? "All SEO Tools"
                  : "Professional Tool Collection"}
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete suite of SEO tools to analyze, optimize, and scale your
                search performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredTools.length > 0 ? regularTools : tools || []).map(
                (item) => (
                  <SoftwareCard key={item.id} software={item} />
                ),
              )}
            </div>
          </div>
        </section>
      </main>
    </AgencyPageWrapper>
  );
}
