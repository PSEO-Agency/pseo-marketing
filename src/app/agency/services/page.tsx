"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

export default function ServicesCollectionPage() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services-collection"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("services")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const featuredServices =
    services?.filter((service: any) => service.is_featured) || [];
  const regularServices =
    services?.filter((service: any) => !service.is_featured) || [];

  return (
    <AgencyPageWrapper>
      <title>
        pSEO Services | Scale Organic Traffic 10x | Complete Service Suite
      </title>

      <main>
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our SEO Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive SEO solutions tailored to boost your online
                presence and drive sustainable organic growth.
              </p>
            </div>
          </div>
        </section>

        {isLoading && (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        )}

        {featuredServices.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Featured Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service: any) => (
                  <Card
                    key={service.id}
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
                        {service.title}
                      </h3>
                      {service.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {service.description}
                        </p>
                      )}
                      {service.slug && (
                        <Link
                          href={`/agency/services/${service.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                        >
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className={`py-16 ${featuredServices.length > 0 ? "bg-gray-50" : ""}`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {featuredServices.length > 0 ? "All Services" : "Our Services"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredServices.length > 0
                ? regularServices
                : services || []
              ).map((service: any) => (
                <Card
                  key={service.id}
                  className="hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {service.description}
                      </p>
                    )}
                    {service.slug && (
                      <Link
                        href={`/agency/services/${service.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    )}
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
