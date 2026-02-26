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
  BarChart3,
  Globe,
  Database,
  Search,
  FileText,
  Star,
  Quote,
  HelpCircle,
  DollarSign,
  Calendar,
  Phone,
  Layout,
  Smartphone,
} from "lucide-react";

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: industry,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["industry", slug],
    queryFn: async () => {
      if (!slug) throw new Error("No slug provided");
      const { data, error } = await agencySupabase
        .from("industries")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
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

  if (error || !industry) {
    return (
      <AgencyPageWrapper>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The industry page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/agency/industries">
            <Button>Back to Industries</Button>
          </Link>
        </div>
      </AgencyPageWrapper>
    );
  }

  const solutions = Array.isArray(industry.solutions)
    ? (industry.solutions as string[])
    : [
        "Industry-specific keyword research and content mapping",
        "Automated content generation for product/service variations",
        "Local SEO optimization for multiple locations",
        "Competitor analysis and gap identification",
      ];

  const solutionIcons = [Target, Zap, TrendingUp, BarChart3];

  const stats = [
    {
      number: "450%",
      label: `Average ${industry.name.toLowerCase()} traffic increase`,
      subtext: "within 6 months",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "89%",
      label: `${industry.name} client satisfaction rate`,
      subtext: "based on reviews",
      icon: Target,
      color: "from-green-500 to-green-600",
    },
    {
      number: "$750K+",
      label: `Average ${industry.name.toLowerCase()} revenue boost`,
      subtext: "per client annually",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "500+",
      label: `${industry.name} projects completed`,
      subtext: "successfully",
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
  ];

  const datasets = [
    {
      title: `${industry.name} Product Database`,
      description: `Comprehensive database of ${industry.name.toLowerCase()} products, services, and variations for automated content generation.`,
      size: "50,000+ entries",
      icon: Database,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: `${industry.name} Keyword Research`,
      description: `Extensive keyword research covering all ${industry.name.toLowerCase()} sub-niches, long-tail keywords, and search patterns.`,
      size: "25,000+ keywords",
      icon: Search,
      color: "from-green-500 to-green-600",
    },
    {
      title: `${industry.name} Content Templates`,
      description: `Pre-built content templates optimized for ${industry.name.toLowerCase()} businesses.`,
      size: "200+ templates",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: `${industry.name} Market Data`,
      description: `Industry-specific market data, trends, and analytics to inform content strategy.`,
      size: "Real-time data",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
    },
  ];

  const templates = [
    {
      title: `${industry.name} Landing Pages`,
      description: `High-converting landing page templates designed specifically for ${industry.name.toLowerCase()} businesses.`,
      count: "50+ templates",
      icon: Layout,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: `${industry.name} Service Pages`,
      description: `Comprehensive service page templates that highlight ${industry.name.toLowerCase()} expertise.`,
      count: "30+ templates",
      icon: FileText,
      color: "from-green-500 to-green-600",
    },
    {
      title: `${industry.name} Location Pages`,
      description: `Location-specific page templates optimized for local SEO.`,
      count: "25+ templates",
      icon: Globe,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: `${industry.name} Mobile Pages`,
      description: `Mobile-optimized templates ensuring perfect user experience across all devices.`,
      count: "40+ templates",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
    },
  ];

  const testimonials = [
    {
      content: `Our ${industry.name.toLowerCase()} business saw a 400% increase in organic traffic within 6 months.`,
      client_name: "Sarah Johnson",
      company: `${industry.name} Solutions Inc.`,
      rating: 5,
      result: "400% traffic increase",
    },
    {
      content: `The industry expertise shown by the team was exceptional.`,
      client_name: "Michael Chen",
      company: `Elite ${industry.name} Services`,
      rating: 5,
      result: "300% lead increase",
    },
    {
      content: `Best investment we've made for our ${industry.name.toLowerCase()} company.`,
      client_name: "Emily Rodriguez",
      company: `${industry.name} Dynamics LLC`,
      rating: 5,
      result: "$500K+ revenue boost",
    },
  ];

  const faqs = [
    {
      question: `How long does it take to see results from programmatic SEO for ${industry.name.toLowerCase()} businesses?`,
      answer: `Most ${industry.name.toLowerCase()} clients see initial improvements within 30-60 days, with significant results typically visible within 3-6 months.`,
    },
    {
      question: `What makes your programmatic SEO different for ${industry.name} companies?`,
      answer: `Our approach combines deep ${industry.name.toLowerCase()} industry knowledge with cutting-edge programmatic SEO technology.`,
    },
    {
      question: `Do you have experience with ${industry.name.toLowerCase()} compliance and regulations?`,
      answer: `Yes, we have extensive experience working with ${industry.name.toLowerCase()} businesses and understand the industry-specific compliance requirements.`,
    },
    {
      question: `What kind of ${industry.name.toLowerCase()} businesses benefit most from programmatic SEO?`,
      answer: `Our programmatic SEO works well for ${industry.name.toLowerCase()} businesses of all sizes. We customize our approach based on your specific niche, goals, and target market.`,
    },
    {
      question: `How do you measure success for ${industry.name.toLowerCase()} SEO campaigns?`,
      answer: `We track ${industry.name.toLowerCase()}-specific KPIs including organic traffic growth, keyword rankings, lead quality, conversion rates, and revenue impact.`,
    },
  ];

  return (
    <AgencyPageWrapper>
      <title>
        {industry.meta_title ||
          `${industry.name} pSEO Services | Scale Traffic 10x | Industry Experts`}
      </title>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-400/30">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-2" />
                  <span className="text-blue-200 text-sm font-bold">
                    INDUSTRY EXPERTISE
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                  Programmatic SEO for{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {industry.name}
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                  {industry.description ||
                    `Specialized programmatic SEO strategies designed specifically for ${industry.name.toLowerCase()} businesses. Scale your organic presence with industry-specific content automation.`}
                </p>
                <div className="flex items-center space-x-3 text-blue-200">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">
                    Tailored to {industry.name} &bull; Free consultation
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Our {industry.name} Process
                    </h3>
                    <p className="text-blue-200">
                      How we deliver results for {industry.name.toLowerCase()}{" "}
                      businesses
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Target,
                        title: "Industry Analysis",
                        description:
                          "Deep dive into your industry's search landscape",
                      },
                      {
                        icon: Zap,
                        title: "Content Strategy",
                        description:
                          "Develop industry-specific content at scale",
                      },
                      {
                        icon: Users,
                        title: "Audience Targeting",
                        description:
                          "Create content for your ideal customer profile",
                      },
                      {
                        icon: CheckCircle,
                        title: "Performance Optimization",
                        description:
                          "Monitor and optimize for industry-specific KPIs",
                      },
                    ].map((step, index) => {
                      const colors = [
                        "bg-blue-500",
                        "bg-purple-500",
                        "bg-green-500",
                        "bg-orange-500",
                      ];
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 ${colors[index]} rounded-xl flex items-center justify-center relative`}
                          >
                            <step.icon className="h-6 w-6 text-white" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white mb-2">
                              {step.title}
                            </h4>
                            <p className="text-blue-200 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Overview */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-bold">
                  INDUSTRY SOLUTIONS
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                How We Drive Results for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {industry.name}
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.slice(0, 4).map((solution, index) => {
                const IconComponent = solutionIcons[index] || CheckCircle;
                const colors = [
                  "from-blue-500 to-blue-600",
                  "from-purple-500 to-purple-600",
                  "from-green-500 to-green-600",
                  "from-orange-500 to-red-500",
                ];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 group hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {solution}
                    </h3>
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-700 text-sm font-bold">
                  INDUSTRY RESULTS
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                The Impact on{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {industry.name} Businesses
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-3">
                      {stat.number}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">{stat.subtext}</div>
                  </div>
                );
              })}
            </div>
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Why {industry.name} Businesses Choose Us
                </h3>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  {[
                    {
                      title: "Industry Expertise",
                      text: `Deep understanding of ${industry.name.toLowerCase()} market dynamics`,
                    },
                    {
                      title: "Proven Results",
                      text: `Documented success across hundreds of ${industry.name.toLowerCase()} clients`,
                    },
                    {
                      title: "Ongoing Support",
                      text: `Dedicated ${industry.name.toLowerCase()} specialists and continuous optimization`,
                    },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-blue-200">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Assets */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
                <Database className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-700 text-sm font-bold">
                  DATA RESOURCES
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {industry.name}
                </span>{" "}
                Data Assets
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {datasets.map((dataset, index) => {
                const IconComponent = dataset.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${dataset.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {dataset.title}
                          </h3>
                          <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            {dataset.size}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {dataset.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <Layout className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-bold">
                  PAGE TEMPLATES
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                Ready-to-Use{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {industry.name}
                </span>{" "}
                Templates
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {templates.map((template, index) => {
                const IconComponent = template.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {template.title}
                          </h3>
                          <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            {template.count}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {template.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-yellow-50 rounded-full px-6 py-3 mb-8 border border-yellow-100">
                <Star className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-yellow-700 text-sm font-bold">
                  CLIENT SUCCESS
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                What{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {industry.name}
                </span>{" "}
                Leaders Say
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-blue-200" />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-bold text-gray-900">
                      {t.client_name}
                    </div>
                    <div className="text-blue-600 font-medium mb-2">
                      {t.company}
                    </div>
                    <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                      {t.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-bold">
                  FREQUENTLY ASKED
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
                Common Questions About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {industry.name} SEO
                </span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-balance">
                Ready to Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                  {industry.name} SEO?
                </span>
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Join thousands of {industry.name.toLowerCase()} businesses that
                have achieved remarkable growth with our expert programmatic SEO
                service.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: CheckCircle2,
                    color: "text-green-400",
                    title: "Free Consultation",
                    text: "No commitment required",
                  },
                  {
                    icon: Calendar,
                    color: "text-blue-400",
                    title: "Quick Implementation",
                    text: "Results within 30-60 days",
                  },
                  {
                    icon: Phone,
                    color: "text-purple-400",
                    title: "Dedicated Support",
                    text: "24/7 expert access",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <item.icon
                      className={`h-12 w-12 ${item.color} mx-auto mb-4`}
                    />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-200">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
                {[
                  "Free consultation",
                  "No long-term contracts",
                  "Report in 24 hours",
                ].map((text) => (
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
