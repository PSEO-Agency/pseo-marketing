"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  Target,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Globe,
  BarChart3,
  Database,
  Search,
  Palette,
  Star,
  Quote,
  HelpCircle,
  Calendar,
  Phone,
  Award,
} from "lucide-react";
import { useState } from "react";

const serviceIcons = [
  Target,
  Zap,
  TrendingUp,
  CheckCircle,
  Shield,
  Globe,
  Users,
  BarChart3,
];

function getIconForIndex(index: number) {
  return serviceIcons[index % serviceIcons.length];
}

function parseProcessSteps(processSteps: any) {
  if (
    Array.isArray(processSteps) &&
    processSteps.length > 0
  ) {
    return processSteps.map((step: any, index: number) => {
      if (typeof step === "object" && step.title && step.description) {
        return { title: step.title, description: step.description };
      }
      if (typeof step === "string") {
        const colonIndex = step.indexOf(":");
        if (colonIndex > 0) {
          return {
            title: step.substring(0, colonIndex).trim(),
            description: step.substring(colonIndex + 1).trim(),
          };
        }
        return { title: step, description: "Professional implementation with attention to detail." };
      }
      return {
        title: `Step ${index + 1}`,
        description: "Professional implementation with attention to detail.",
      };
    });
  }
  return [
    {
      title: "Discovery & Analysis",
      description: "We analyze your current situation and identify opportunities for improvement.",
    },
    {
      title: "Strategy Development",
      description: "We create a customized strategy tailored to your specific needs and goals.",
    },
    {
      title: "Implementation",
      description: "We execute the strategy with precision and attention to detail.",
    },
    {
      title: "Optimization & Results",
      description: "We continuously optimize and track results to maximize your ROI.",
    },
  ];
}

function parseFeatures(features: any): string[] {
  if (Array.isArray(features) && features.length > 0) {
    return features.map((f: any) => {
      if (typeof f === "object" && f.title) return f.title;
      if (typeof f === "string") return f;
      return String(f);
    });
  }
  return [
    "Comprehensive analysis and strategy development",
    "Custom implementation tailored to your business",
    "Ongoing optimization and performance monitoring",
    "Detailed reporting and insights",
  ];
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: service,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["service", slug],
    queryFn: async () => {
      if (!slug) throw new Error("No slug provided");
      const { data, error } = await agencySupabase
        .from("services")
        .select("*")
        .eq("slug", slug)
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
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
          </div>
        </div>
      </AgencyPageWrapper>
    );
  }

  if (error || !service) {
    return (
      <AgencyPageWrapper>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/agency/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </AgencyPageWrapper>
    );
  }

  const features = parseFeatures(service.features);
  const processSteps = parseProcessSteps(service.process_steps);
  const stepColors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-green-500 to-green-600",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-indigo-600",
    "from-pink-500 to-pink-600",
  ];
  const stats = [
    { number: "500%", label: "Average traffic growth", subtext: "within 6 months", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
    { number: "100+", label: "Projects completed", subtext: "successfully delivered", icon: Target, color: "from-green-500 to-green-600" },
    { number: "1M+", label: "Pages generated", subtext: "across all projects", icon: Database, color: "from-purple-500 to-purple-600" },
    { number: "95%", label: "Client satisfaction rate", subtext: "based on reviews", icon: Users, color: "from-orange-500 to-red-500" },
  ];
  const testimonials = [
    { content: "The results exceeded our expectations. Our traffic increased by 400% within 6 months.", client_name: "Sarah Johnson", company: "TechFlow Solutions", rating: 5 },
    { content: "Professional team with incredible expertise. They delivered exactly what they promised.", client_name: "Michael Chen", company: "GrowthCorp", rating: 5 },
    { content: "Best investment we've made for our business. The ROI has been phenomenal.", client_name: "Emily Rodriguez", company: "Digital Dynamics", rating: 5 },
  ];
  const faqs = [
    { question: `How long does it take to see results from ${service.title}?`, answer: "Most clients see initial improvements within 30-60 days, with significant results typically visible within 3-6 months. The exact timeline depends on your current situation and industry competitiveness." },
    { question: `What makes your ${service.title} different from competitors?`, answer: "Our approach combines cutting-edge technology with proven strategies, personalized attention, and transparent reporting. We focus on delivering measurable ROI rather than just vanity metrics." },
    { question: "Do you offer ongoing support after implementation?", answer: "Yes, we provide comprehensive ongoing support including regular monitoring, optimization, monthly reports, and strategic adjustments to ensure continued success." },
    { question: "What kind of businesses benefit most from this service?", answer: "Our service works well for businesses of all sizes, from startups to enterprise companies. We customize our approach based on your specific industry, goals, and budget." },
    { question: "How do you measure success?", answer: "We track key performance indicators relevant to your goals, including traffic growth, conversion rates, revenue impact, and ROI. You'll receive detailed monthly reports with actionable insights." },
    { question: "What's included in your service package?", answer: "Our service includes strategy development, implementation, ongoing optimization, regular reporting, dedicated account management, and 24/7 support access." },
  ];

  return (
    <AgencyPageWrapper>
      <title>{service.title} | Drive 10x Traffic Growth | pSEO Agency</title>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-48 h-48 lg:w-80 lg:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10 py-6 sm:py-8 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              <div className="max-w-3xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-6 mb-3 sm:mb-4 lg:mb-6">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 mr-1.5 sm:mr-2" />
                    <span className="text-blue-200 text-xs font-semibold whitespace-nowrap">Award-Winning SEO</span>
                  </div>
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-1.5 sm:mr-2" />
                    <span className="text-blue-200 text-xs font-semibold whitespace-nowrap">10X Your Traffic</span>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-3 sm:mb-4 lg:mb-6 text-balance">
                  Drive More Revenue Through
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                    {service.title}
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-3 sm:mb-4 lg:mb-6 leading-relaxed max-w-2xl">
                  {service.description || `Scale your organic traffic exponentially with our data-driven ${service.title} strategies. We create thousands of high-converting pages that rank on page 1 and drive qualified leads to your business.`}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                  {["500% Traffic Growth", "100+ Projects", "1M+ Pages Generated"].map((text) => (
                    <div key={text} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-white/20">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-white">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 text-balance">Our Proven Process</h3>
                  <p className="text-blue-200 text-sm sm:text-base lg:text-lg">Systematic organic growth</p>
                </div>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {processSteps.slice(0, 4).map((step, index) => {
                    const IconComponent = [Search, Palette, Database, TrendingUp][index % 4];
                    return (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 group">
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${stepColors[index] || stepColors[0]} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl relative`}>
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-8 lg:w-8 text-white" />
                          <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">{index + 1}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg">
                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">{step.title}</h4>
                            <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-bold">SERVICE OVERVIEW</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                How Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{service.title}</span> Works
              </h2>
              {service.description && (
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{service.description}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = getIconForIndex(index);
                const colors = ["from-blue-500 to-blue-600", "from-purple-500 to-purple-600", "from-green-500 to-green-600", "from-orange-500 to-red-500", "from-indigo-500 to-indigo-600", "from-pink-500 to-pink-600", "from-teal-500 to-teal-600", "from-yellow-500 to-orange-500"];
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 group hover:scale-105 transition-all duration-300 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-snug">{feature}</h3>
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                  </div>
                );
              })}
            </div>
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our {service.title}?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: CheckCircle, color: "from-green-500 to-green-600", title: "Proven Results", text: "Track record of delivering measurable improvements" },
                    { icon: Users, color: "from-blue-500 to-blue-600", title: "Expert Team", text: "Dedicated specialists with years of experience" },
                    { icon: Target, color: "from-purple-500 to-purple-600", title: "Custom Approach", text: "Tailored strategies for your specific goals" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-700 text-sm font-bold">PROVEN RESULTS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                The Impact of Our
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">{service.title}</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-3">{stat.number}</div>
                    <div className="text-lg font-bold text-gray-900 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.subtext}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Steps (detailed) */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-50 rounded-full px-6 py-3 mb-8 border border-purple-100">
                <Target className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-700 text-sm font-bold">OUR PROCESS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                How We Deliver
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">{service.title} Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our proven methodology ensures consistent, measurable results for every client.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                {processSteps.map((step, index) => {
                  const icons = [Search, Zap, Users, Target, BarChart3, Database, Globe, Palette];
                  const IconComponent = icons[index % icons.length];
                  return (
                    <div key={index} className="flex items-start space-x-6 group">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${stepColors[index % stepColors.length]} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative`}>
                        <IconComponent className="h-8 w-8 text-white" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">{index + 1}</div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                          <h4 className="font-bold text-gray-900 mb-3 text-xl">{step.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Highlights</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Timeline:", value: "30-90 days", cls: "text-gray-900" },
                      { label: "Dedicated Support:", value: "24/7 Available", cls: "text-blue-600" },
                      { label: "Progress Updates:", value: "Weekly Reports", cls: "text-green-600" },
                      { label: "Success Rate:", value: "95%+", cls: "text-green-600 text-xl" },
                    ].map((row, i) => (
                      <div key={i} className={`flex items-center justify-between py-3 ${i < 3 ? "border-b border-gray-100" : ""}`}>
                        <span className="text-gray-600">{row.label}</span>
                        <span className={`font-bold ${row.cls}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-gray-900 mb-2">What&apos;s Included:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {["Dedicated project manager", "Regular progress meetings", "Detailed documentation", "Post-launch support"].map((item) => (
                        <li key={item} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-yellow-50 rounded-full px-6 py-3 mb-8 border border-yellow-100">
                <Star className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-yellow-700 text-sm font-bold">CLIENT SUCCESS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                What Our Clients Say About Our
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">{service.title}</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-blue-200" />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{t.content}&rdquo;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-bold text-gray-900">{t.client_name}</div>
                    <div className="text-blue-600 font-medium">{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-bold">FREQUENTLY ASKED</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                Common Questions About Our
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">{service.title}</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-lg border border-gray-100 p-0">
                    <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-blue-50 transition-colors duration-200 rounded-t-xl">
                      <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-balance">
                Ready to Transform Your Business with Our
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">{service.title}?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Join thousands of businesses that have achieved remarkable growth with our expert {service.title.toLowerCase()} service.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: CheckCircle2, color: "text-green-400", title: "Free Consultation", text: "No commitment required" },
                  { icon: Calendar, color: "text-blue-400", title: "Quick Implementation", text: "Results within 30-60 days" },
                  { icon: Phone, color: "text-purple-400", title: "Dedicated Support", text: "24/7 expert access" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <item.icon className={`h-12 w-12 ${item.color} mx-auto mb-4`} />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-200">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
                {["Free consultation", "No long-term contracts", "Report in 24 hours"].map((text) => (
                  <div key={text} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </AgencyPageWrapper>
  );
}
