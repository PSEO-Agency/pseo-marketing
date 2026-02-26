"use client";

import { useQuery } from "@tanstack/react-query";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Code, Globe } from "lucide-react";
import { SoftwareCard } from "@/components/software/SoftwareCard";

export default function SoftwareCollectionPage() {
  const { data: software, isLoading } = useQuery({
    queryKey: ["software-collection"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("software")
        .select("*")
        .eq("is_published", true)
        .eq("type", "software")
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

  const featuredSoftware = software?.filter((item) => item.is_featured) || [];
  const regularSoftware = software?.filter((item) => !item.is_featured) || [];
  const categories = software
    ? [...new Set(software.map((item) => item.category).filter(Boolean))]
    : [];

  return (
    <AgencyPageWrapper>
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <Code className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-bold">
                  PROGRAMMATIC SEO PLATFORMS
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Software & Platforms for{" "}
                <span className="webfx-text-gradient">Scalable SEO</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
                Powerful platforms, frameworks, and content management systems
                designed to scale your programmatic SEO efforts and accelerate
                organic growth.
              </p>

              {categories.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {categories.map((category, index) => {
                    const icons = [Zap, Target, Code, Globe];
                    const IconComponent = icons[index % icons.length];
                    return (
                      <Badge
                        key={category}
                        variant="outline"
                        className="px-4 py-2 text-base border-blue-200 text-blue-700 hover:bg-blue-50"
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

        {/* Featured Software */}
        {featuredSoftware.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-yellow-50 rounded-full px-6 py-3 mb-8 border border-yellow-100">
                  <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-700 text-sm font-bold">
                    FEATURED PLATFORMS
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Top-Rated{" "}
                  <span className="webfx-text-gradient">SEO Platforms</span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Hand-picked platforms that deliver exceptional results for
                  programmatic SEO campaigns.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredSoftware.map((item) => (
                  <SoftwareCard key={item.id} software={item} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Software */}
        <section
          className={`py-20 ${featuredSoftware.length > 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                {featuredSoftware.length > 0
                  ? "All Platforms"
                  : "Software Platform Collection"}
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete suite of platforms and frameworks to build and scale
                your programmatic SEO strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredSoftware.length > 0
                ? regularSoftware
                : software || []
              ).map((item) => (
                <SoftwareCard key={item.id} software={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </AgencyPageWrapper>
  );
}
