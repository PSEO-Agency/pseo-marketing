"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  ArrowRight,
  Handshake,
  Building2,
  Clock,
  Target,
  Users,
  Languages,
  TrendingUp,
} from "lucide-react";

interface Country {
  id: string;
  name: string;
  slug: string;
  region: string | null;
  flag_emoji: string | null;
  partner_name: string | null;
  hero_description: string | null;
  industries: string[];
  is_featured: boolean;
  [key: string]: any;
}

export default function CountriesCollectionPage() {
  const router = useRouter();

  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("countries")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data as Country[];
    },
  });

  const activeCountries = countries?.filter((c) => c.is_featured) || [];
  const comingSoonCountries = countries?.filter((c) => !c.is_featured) || [];

  const scrollToRegions = () => {
    document
      .getElementById("regions-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: Target,
      title: "Scalable Landing Pages for Every Market",
      description:
        "Deploy thousands of localized pages targeting high-intent keywords in any country or region.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Local Intent + Global Automation",
      description:
        "Combine local market knowledge with automated content systems for maximum impact.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Partner-Supported Execution",
      description:
        "Work with trusted local partners who understand your market and can execute on the ground.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Languages,
      title: "Multilingual & Multi-Region Expansion",
      description:
        "Expand into new languages and regions with content that resonates with local audiences.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const partnerBenefits = [
    { icon: Globe, text: "Access our proven pSEO methodology" },
    { icon: Users, text: "Join our global partner network" },
    { icon: TrendingUp, text: "Grow your agency with new services" },
  ];

  return (
    <AgencyPageWrapper>
      <title>
        International Programmatic SEO Partners | Programmatic SEO B.V.
      </title>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <Globe className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">
                  Global Partner Network
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Global Growth,{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Local Execution
                </span>
              </h1>
              <p className="text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto">
                We help companies scale organic traffic worldwide through
                Programmatic SEO, AI-driven landing pages, and trusted regional
                partners.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={scrollToRegions}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Find Your Region
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => router.push("/agency")}
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold backdrop-blur-sm"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Active Partners Grid */}
        <section id="regions-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Active Partners
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our established partner network and find the right team
                for your market
              </p>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-2xl h-64 animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeCountries.map((country) => (
                  <CountryCard key={country.id} country={country} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Coming Soon Grid */}
        {comingSoonCountries.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Coming Soon
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  We&apos;re expanding! These regions are launching soon — stay
                  tuned.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comingSoonCountries.map((country) => (
                  <CountryCard key={country.id} country={country} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why International pSEO Works */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Programmatic SEO Wins Globally
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our proven approach scales across borders, languages, and
                markets
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partner Network CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-8 shadow-lg shadow-orange-500/30">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Want to Become Our Regional Partner?
              </h2>
              <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
                We&apos;re building a global network of elite SEO and growth
                partners. Apply to represent Programmatic SEO B.V. in your
                market.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {partnerBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10"
                    >
                      <Icon className="w-5 h-5 text-blue-300" />
                      <span className="text-white/90 font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
              <Button
                onClick={() => router.push("/agency")}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
              >
                Apply as Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="mt-6 text-blue-200/60 text-sm">
                We carefully select partners who share our commitment to
                excellence
              </p>
            </div>
          </div>
        </section>
      </main>
    </AgencyPageWrapper>
  );
}

function CountryCard({ country }: { country: Country }) {
  const isHeadquarters = country.slug === "netherlands";
  const isComingSoon = !country.is_featured;

  return (
    <div
      className={`group relative bg-white rounded-2xl border p-6 transition-all duration-300 overflow-hidden ${
        isComingSoon
          ? "border-gray-200 opacity-75 hover:opacity-90"
          : "border-gray-200 hover:shadow-xl hover:border-blue-300"
      }`}
    >
      {isHeadquarters && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <Building2 className="w-3 h-3 mr-1" />
          Headquarters
        </Badge>
      )}
      {isComingSoon && !isHeadquarters && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white border-0">
          <Clock className="w-3 h-3 mr-1" />
          Coming Soon
        </Badge>
      )}

      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{country.flag_emoji}</span>
        <div>
          <h3
            className={`text-xl font-bold transition-colors ${
              isComingSoon
                ? "text-gray-500"
                : "text-gray-900 group-hover:text-blue-600"
            }`}
          >
            {country.name}
          </h3>
          <p className="text-sm text-gray-500">{country.region}</p>
        </div>
      </div>

      {country.partner_name && !isComingSoon && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Partner:</span>{" "}
            {country.partner_name}
          </p>
        </div>
      )}

      <p
        className={`text-sm mb-4 line-clamp-2 ${isComingSoon ? "text-gray-400" : "text-gray-600"}`}
      >
        {country.hero_description ||
          `Scale programmatic SEO in ${country.name} with our trusted local partner.`}
      </p>

      {!isComingSoon &&
        country.industries &&
        country.industries.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {country.industries.slice(0, 3).map((industry, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                {industry}
              </Badge>
            ))}
            {country.industries.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-gray-100 text-gray-600"
              >
                +{country.industries.length - 3} more
              </Badge>
            )}
          </div>
        )}

      {isComingSoon ? (
        <Button
          disabled
          className="w-full bg-gray-100 text-gray-400 cursor-not-allowed border-0"
        >
          Coming Soon
        </Button>
      ) : (
        <Link href={`/agency/countries/${country.slug}`}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all">
            Explore {country.name.split("(")[0].trim()}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      )}

      {!isComingSoon && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none rounded-2xl" />
      )}
    </div>
  );
}
