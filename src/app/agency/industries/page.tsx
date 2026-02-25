"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

export default function IndustriesCollectionPage() {
  const { data: industries, isLoading } = useQuery({
    queryKey: ["industries-collection"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("industries")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const featuredIndustries =
    industries?.filter((i: any) => i.is_featured) || [];
  const regularIndustries =
    industries?.filter((i: any) => !i.is_featured) || [];

  return (
    <AgencyPageWrapper>
      <title>Industries We Serve - Programmatic SEO Agency</title>

      <main>
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Specialized SEO strategies tailored to the unique needs and
                challenges of your industry.
              </p>
            </div>
          </div>
        </section>

        {isLoading && (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        )}

        {featuredIndustries.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Featured Industries
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredIndustries.map((industry: any) => (
                  <Card
                    key={industry.id}
                    className="hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-4">
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {industry.name}
                      </h3>
                      {industry.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {industry.description}
                        </p>
                      )}
                      <Link
                        href={`/agency/industries/${industry.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className={`py-16 ${featuredIndustries.length > 0 ? "bg-gray-50" : ""}`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {featuredIndustries.length > 0
                ? "All Industries"
                : "Industries We Serve"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredIndustries.length > 0
                ? regularIndustries
                : industries || []
              ).map((industry: any) => (
                <Card
                  key={industry.id}
                  className="hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {industry.name}
                    </h3>
                    {industry.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {industry.description}
                      </p>
                    )}
                    <Link
                      href={`/agency/industries/${industry.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AgencyPageWrapper>
  );
}
