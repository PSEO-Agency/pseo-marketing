"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { PartnerCard } from "@/components/partners/PartnerCard";
import {
  PartnerFiltersSidebar,
  type PartnerFilters,
} from "@/components/partners/PartnerFilters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const defaultFilters: PartnerFilters = {
  search: "",
  types: [],
  regions: [],
  expertise: [],
  integrations: [],
};

export default function TechPartnersPage() {
  const { data: partners, isLoading } = useQuery({
    queryKey: ["partners", "type", "tech"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("partners")
        .select("*")
        .eq("is_published", true)
        .eq("partner_type", "tech")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const [filters, setFilters] = useState<PartnerFilters>(defaultFilters);

  const filtered = useMemo(() => {
    if (!partners) return [];
    return partners.filter((p) => {
      const search = filters.search.toLowerCase();
      if (
        search &&
        ![
          p.name,
          p.region,
          p.short_description,
          ...(Array.isArray(p.expertise_tags) ? p.expertise_tags : []),
        ]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(search))
      )
        return false;
      if (filters.regions.length && !filters.regions.includes(p.region || ""))
        return false;
      if (filters.expertise.length) {
        const tags = Array.isArray(p.expertise_tags) ? p.expertise_tags : [];
        if (!filters.expertise.some((e) => tags.includes(e))) return false;
      }
      if (filters.integrations.length) {
        const ints = Array.isArray(p.integrations) ? p.integrations : [];
        if (!filters.integrations.some((i) => ints.includes(i))) return false;
      }
      return true;
    });
  }, [partners, filters]);

  return (
    <AgencyPageWrapper>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2 text-sm font-semibold backdrop-blur">
              Tech Partners
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Technology Partners & Integrations
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore tools and platforms we integrate with to power scalable
              Programmatic SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
                <PartnerFiltersSidebar
                  filters={filters}
                  onFiltersChange={setFilters}
                  hideTypeFilter
                />
              </div>
            </aside>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">
                    {filtered.length}
                  </span>{" "}
                  partner{filtered.length !== 1 ? "s" : ""} found
                </p>
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg mb-4">
                    No partners match your filters.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFilters(defaultFilters)}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((p) => (
                    <PartnerCard key={p.id} partner={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
