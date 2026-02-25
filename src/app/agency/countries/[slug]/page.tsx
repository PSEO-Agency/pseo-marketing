"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Globe,
  Search,
  Phone,
  Building,
  Rocket,
  HelpCircle,
  Database,
  Settings,
  MapPin,
  Languages,
  Briefcase,
  Scale,
  Home,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Plane,
  Heart,
  type LucideIcon,
} from "lucide-react";

interface Country {
  id: string;
  name: string;
  slug: string;
  region: string | null;
  flag_emoji: string | null;
  partner_name: string | null;
  partner_logo_url: string | null;
  partner_description: string | null;
  partner_contact_url: string | null;
  hero_headline: string | null;
  hero_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  industries: string[];
  keywords: string[];
  services: Array<{ title: string; icon: string; description?: string }>;
  use_cases: Array<{ title: string; icon: string; description?: string }>;
  process_steps: Array<{ step: number; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  is_published: boolean;
  is_featured: boolean;
  [key: string]: any;
}

const iconMap: Record<string, LucideIcon> = {
  Target,
  Database,
  Zap,
  Settings,
  BarChart3,
  Globe,
  TrendingUp,
  MapPin,
  Languages,
  Users,
  Briefcase,
  Scale,
  Home,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Rocket,
  Building,
  Plane,
  Heart,
};

function getIconComponent(iconName: string): LucideIcon {
  return iconMap[iconName] || Zap;
}

export default function CountryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();

  const {
    data: country,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["country", slug],
    queryFn: async () => {
      if (!slug) throw new Error("No slug provided");
      const { data, error } = await agencySupabase
        .from("countries")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      if (error) throw error;
      return data as Country;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <AgencyPageWrapper>
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
          </div>
        </div>
      </AgencyPageWrapper>
    );
  }

  if (error || !country) {
    return (
      <AgencyPageWrapper>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Country Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The country page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/agency/countries">
            <Button>Back to Countries</Button>
          </Link>
        </div>
      </AgencyPageWrapper>
    );
  }

  const countryShortName = country.name.split("(")[0].trim();

  return (
    <AgencyPageWrapper>
      <title>
        {country.meta_title || `Programmatic SEO in ${country.name}`}
      </title>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mt-8">
              {country.partner_name && (
                <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
                  <Users className="w-4 h-4 text-green-300" />
                  <span className="text-green-200 text-sm font-medium">
                    Local Partner: {country.partner_name}
                  </span>
                </div>
              )}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-6xl">{country.flag_emoji}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {country.hero_headline ||
                    `Programmatic SEO in ${country.name}`}
                </h1>
              </div>
              <p className="text-xl text-blue-100/80 mb-8 max-w-3xl">
                {country.hero_description ||
                  `Scale organic traffic in ${country.name} with programmatic SEO and our trusted local partner.`}
              </p>
              {country.industries && country.industries.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {country.industries.map((industry, index) => (
                    <Badge
                      key={index}
                      className="bg-blue-500/20 text-blue-200 border border-blue-400/30 hover:bg-blue-500/30"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => router.push("/agency")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() =>
                    country.partner_contact_url
                      ? window.open(country.partner_contact_url, "_blank")
                      : router.push("/agency")
                  }
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact {countryShortName} Partner
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        {country.partner_name && (
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Your Trusted Programmatic SEO Partner in {countryShortName}
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      {country.partner_logo_url ? (
                        <img
                          src={country.partner_logo_url}
                          alt={country.partner_name}
                          className="w-24 h-24 rounded-2xl object-contain bg-gray-50 p-2"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <Building className="w-12 h-12 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{country.flag_emoji}</span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {country.partner_name}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {country.partner_description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {[
                          "Certified execution partner",
                          "Local market expertise",
                          "Direct communication",
                          "On-ground support",
                        ].map((indicator, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {indicator}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() =>
                          country.partner_contact_url
                            ? window.open(country.partner_contact_url, "_blank")
                            : router.push("/agency")
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Meet the {countryShortName} Partner
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why It Works */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Programmatic SEO Works in {countryShortName}
                </h2>
                <p className="text-gray-600 text-lg">
                  Capture high-intent searches and dominate your market with
                  scalable SEO
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {country.industries && country.industries.length > 0 && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Target Industries
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">
                      {countryShortName} has strong demand in:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {country.industries.map((industry, index) => (
                        <Badge
                          key={index}
                          className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                        >
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Market Opportunity
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Programmatic SEO helps companies capture thousands of
                    high-intent searches in {countryShortName}, from product
                    comparisons to location-based queries.
                  </p>
                </div>
              </div>
              {country.keywords && country.keywords.length > 0 && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Example Target Keywords
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {country.keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg px-4 py-3 border border-purple-100 text-gray-700 text-sm font-medium"
                      >
                        &ldquo;{keyword}&rdquo;
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services */}
        {country.services && country.services.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Programmatic SEO Services in {countryShortName}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Full-stack programmatic SEO delivered in partnership with our
                  local team
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {country.services.map((service, index) => {
                  const IconComponent = getIconComponent(service.icon);
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      {service.description && (
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Use Cases */}
        {country.use_cases && country.use_cases.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Common Programmatic SEO Plays in {countryShortName}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Proven use cases that drive organic traffic in this market
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {country.use_cases.map((useCase, index) => {
                  const IconComponent = getIconComponent(useCase.icon);
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl px-5 py-4 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {useCase.title}
                        </span>
                        {useCase.description && (
                          <p className="text-sm text-gray-500">
                            {useCase.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Process Steps */}
        {country.process_steps && country.process_steps.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How We Deliver Programmatic SEO in {countryShortName}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Our proven process for scaling organic traffic
                  {country.partner_name && (
                    <span className="block mt-2 text-blue-600 font-medium">
                      Delivered jointly with {country.partner_name}
                    </span>
                  )}
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />
                  <div className="space-y-6">
                    {country.process_steps.map((step, index) => (
                      <div key={index} className="relative flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-blue-500/30">
                          {step.step}
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {country.faqs && country.faqs.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 text-sm font-bold">
                    FREQUENTLY ASKED
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                  Common Questions About
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                    SEO in {countryShortName}
                  </span>
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {country.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 p-0"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-blue-50 transition-colors duration-200 rounded-t-xl">
                        <span className="text-lg font-bold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-lg shadow-blue-500/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Scale SEO Growth in {countryShortName}?
              </h2>
              <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
                Book a call with our team
                {country.partner_name && (
                  <> or directly with {country.partner_name}</>
                )}{" "}
                to launch a scalable Programmatic SEO growth engine.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => router.push("/agency")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl"
                >
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() =>
                    country.partner_contact_url
                      ? window.open(country.partner_contact_url, "_blank")
                      : router.push("/agency")
                  }
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-bold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact {countryShortName} Partner
                </Button>
              </div>
              <p className="mt-8 text-blue-200/60">
                Or call us directly:{" "}
                <span className="text-white font-semibold">
                  +31 (0) 85 060 1065
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </AgencyPageWrapper>
  );
}
