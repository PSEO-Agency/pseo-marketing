"use client";

import { useQuery } from "@tanstack/react-query";
import { agencySupabase } from "@/lib/supabase-agency";
import Link from "next/link";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  TrendingUp,
  Database,
  Code,
  Target,
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Users,
  DollarSign,
  Cloud,
  ShoppingCart,
  Home,
  Heart,
  Building2,
  Briefcase,
  Brain,
  Scale,
} from "lucide-react";
import { useState, useEffect } from "react";

const brandLogoMap: Record<string, string> = {
  wordpress: "/lovable-uploads/b4f410f1-af20-4b7e-ae16-8101508b404c.png",
  webflow: "/lovable-uploads/fa25f460-907e-4f70-8915-7562025914b9.png",
  ahrefs: "/lovable-uploads/0f066707-7e1a-4e4c-b05c-b214c23387de.png",
  nextjs: "/lovable-uploads/4d23c728-c369-4186-929c-28700ba2da22.png",
  "screaming-frog":
    "/lovable-uploads/c6810a8c-a409-44c8-86c1-faa8d94ffaf1.png",
  "google-search-console":
    "/lovable-uploads/a8963a99-1d15-4a97-9b9b-23233418627e.png",
  semrush: "/lovable-uploads/40d526b8-0676-4044-9ef4-3111c6f880d7.png",
};

const implementationSteps = [
  {
    step: 1,
    title: "Audit & Research Phase",
    description:
      "Comprehensive keyword research, competitor analysis, and technical SEO audit",
    icon: <Search className="h-6 w-6" />,
  },
  {
    step: 2,
    title: "Data Architecture Setup",
    description:
      "Database design, content structure planning, and data source integration",
    icon: <Database className="h-6 w-6" />,
  },
  {
    step: 3,
    title: "Template Development",
    description:
      "Custom page templates, dynamic content mapping, and responsive design",
    icon: <Code className="h-6 w-6" />,
  },
  {
    step: 4,
    title: "Content Automation",
    description:
      "Automated content generation, quality assurance, and bulk publishing",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    step: 5,
    title: "Launch & Monitoring",
    description:
      "Performance tracking, optimization, and continuous improvement",
    icon: <TrendingUp className="h-6 w-6" />,
  },
];

const faqData = [
  {
    question: "What is Programmatic SEO and how does it work?",
    answer:
      "Programmatic SEO is the process of creating hundreds or thousands of landing pages automatically using templates and data sets. It works by identifying keyword patterns, creating templates, and using databases to generate unique, valuable pages at scale.",
  },
  {
    question: "How long does it take to see results from Programmatic SEO?",
    answer:
      "Most clients see initial results within 3-6 months, with significant traffic growth occurring between 6-12 months. The timeline depends on competition, content quality, and technical implementation.",
  },
  {
    question:
      "What's the difference between Programmatic SEO and traditional SEO?",
    answer:
      "Traditional SEO focuses on optimizing individual pages manually, while Programmatic SEO creates hundreds of pages automatically. Programmatic SEO is ideal for scaling content production and targeting long-tail keywords at volume.",
  },
  {
    question: "Can Programmatic SEO work for small businesses?",
    answer:
      "Yes! Local businesses can use Programmatic SEO to create location-based pages, service area pages, and target local keywords at scale. It's particularly effective for service-based businesses.",
  },
  {
    question: "What tools are essential for Programmatic SEO?",
    answer:
      "Key tools include keyword research platforms (Ahrefs, SEMrush), content management systems, database management tools, and custom development frameworks. We provide a comprehensive tech stack for our clients.",
  },
  {
    question: "How do you ensure content quality at scale?",
    answer:
      "We use AI-powered content generation, human quality assurance, template optimization, and continuous monitoring to maintain high content standards across thousands of pages.",
  },
];

function getIndustryIcon(name: string) {
  const iconMap: Record<string, React.ReactNode> = {
    SAAS: <Cloud className="h-8 w-8" />,
    "E-commerce": <ShoppingCart className="h-8 w-8" />,
    "Real Estate": <Home className="h-8 w-8" />,
    Healthcare: <Heart className="h-8 w-8" />,
    Finance: <DollarSign className="h-8 w-8" />,
    "Local Business": <Building2 className="h-8 w-8" />,
  };
  return iconMap[name] || <Briefcase className="h-8 w-8" />;
}

export default function ProgrammaticSEOGuidePage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const { data: services } = useQuery({
    queryKey: ["services-guide"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("services")
        .select("*")
        .eq("is_featured", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const { data: industries } = useQuery({
    queryKey: ["industries-guide"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("industries")
        .select("*")
        .eq("is_published", true)
        .order("sort_order")
        .limit(9);
      if (error) throw error;
      return data;
    },
  });

  const { data: allSoftware } = useQuery({
    queryKey: ["all-software-guide"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("software")
        .select("*")
        .eq("is_published", true)
        .order("popularity_score", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: actualBlogPosts } = useQuery({
    queryKey: ["actual-blog-posts-guide"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(6);
      if (error) throw error;
      return data;
    },
  });

  const software =
    allSoftware?.filter((item) => item.type === "software") || [];
  const tools = allSoftware?.filter((item) => item.type === "tool") || [];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "services",
        "industries",
        "software",
        "tools",
        "implementation",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AgencyPageWrapper>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 mb-6 text-lg">
              <CheckCircle className="h-5 w-5 mr-2" />
              COMPREHENSIVE GUIDE 2025
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Programmatic SEO Guide 2025
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Scale Your Traffic with 10,000+ Pages
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              The complete guide to creating thousands of SEO-optimized pages
              automatically. Learn the strategies that generated 500-800%
              traffic growth on average.
            </p>

            {/* Table of Contents */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mt-16">
              <h3 className="text-2xl font-bold text-white mb-6">
                Table of Contents
              </h3>
              <div className="space-y-3">
                {[
                  { id: "introduction", label: "What is Programmatic SEO?" },
                  { id: "services", label: "Services & Implementation" },
                  { id: "industries", label: "Industry Applications" },
                  { id: "software", label: "Essential Software" },
                  { id: "tools", label: "SEO Tools" },
                  { id: "implementation", label: "Step-by-Step Guide" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block px-6 py-4 rounded-lg text-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-white text-blue-700 font-medium"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Introduction Section */}
        <section id="introduction" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Programmatic SEO?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Programmatic SEO is the process of creating hundreds or
                thousands of landing pages automatically using templates, data
                sets, and automation tools. Instead of manually creating each
                page, you build systems that generate SEO-optimized content at
                scale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This approach allows businesses to target long-tail keywords,
                capture more organic traffic, and dominate search results across
                multiple keyword variations - all while maintaining content
                quality and user experience.
              </p>
              <div className="space-y-3">
                {[
                  "Scale content creation from 10s to 10,000s of pages",
                  "Target long-tail keywords with high conversion potential",
                  "Automate repetitive SEO tasks and content generation",
                  "Achieve 500-800% traffic growth in 6-12 months",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Programmatic SEO Process
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: <Search className="h-6 w-6" />,
                    label: "Data Analysis",
                    color: "bg-blue-100 text-blue-600",
                  },
                  {
                    icon: <Code className="h-6 w-6" />,
                    label: "Template Development",
                    color: "bg-purple-100 text-purple-600",
                  },
                  {
                    icon: <Database className="h-6 w-6" />,
                    label: "Content Setup",
                    color: "bg-green-100 text-green-600",
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    label: "Scale & Growth",
                    color: "bg-orange-100 text-orange-600",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${step.color}`}
                    >
                      {step.icon}
                    </div>
                    <span className="font-medium text-gray-900">
                      {step.label}
                    </span>
                    {index < 3 && (
                      <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real Project Example */}
          <div className="bg-white p-8 rounded-xl shadow-xl mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real Project Example
              </h3>
              <p className="text-gray-600">
                Analytics dashboard showing 500% traffic increase from
                programmatic SEO implementation
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/lovable-uploads/704ca633-1198-4152-87f0-dc67bd7139a4.png"
                alt="Real project analytics dashboard showing traffic growth"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <div className="text-2xl font-bold">
                    500% Traffic Increase
                  </div>
                  <div className="text-lg opacity-90">
                    Local Business client in 6 months
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Programmatic SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive programmatic SEO solutions tailored to your business
              needs and industry requirements.
            </p>
          </div>

          {services && services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="h-full hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href={`/agency/services/${service.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-blue-50 group-hover:border-blue-300"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Services content loading...</p>
            </div>
          )}
        </section>

        {/* Industries Section */}
        <section id="industries" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Programmatic SEO by Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-specific programmatic SEO strategies that deliver results
              across various verticals.
            </p>
          </div>

          {industries && industries.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/agency/industries/${industry.slug}`}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {getIndustryIcon(industry.name)}
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition-colors duration-200">
                        {industry.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center mb-4">
                        {industry.description}
                      </p>
                      <div className="text-center">
                        <Badge
                          variant="outline"
                          className="group-hover:bg-blue-50 group-hover:border-blue-300"
                        >
                          View
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Industries content loading...</p>
            </div>
          )}
        </section>

        {/* Software Section */}
        <section id="software" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Essential SEO Software
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional SEO software platforms we use to deliver exceptional
              programmatic SEO results.
            </p>
          </div>

          {software && software.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {software.map((item) => {
                  const brandLogo = brandLogoMap[item.slug];
                  return (
                    <Link
                      key={item.id}
                      href={`/agency/software/${item.slug}`}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group text-center cursor-pointer">
                        <CardHeader>
                          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                            {brandLogo ? (
                              <img
                                src={brandLogo}
                                alt={`${item.title} logo`}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              <Code className="h-8 w-8 text-orange-500" />
                            )}
                          </div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-200">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">
                            {item.description}
                          </p>
                          {item.category && (
                            <Badge variant="secondary" className="mb-3">
                              {item.category}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
              <div className="text-center">
                <Link href="/agency/software">
                  <Button size="lg" className="px-8 py-4">
                    View All Software
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Code className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Software content loading...</p>
            </div>
          )}
        </section>

        {/* Tools Section */}
        <section id="tools" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              SEO Tools & Utilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized SEO tools and utilities for programmatic content
              creation and optimization.
            </p>
          </div>

          {tools && tools.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {tools.map((item) => {
                  const brandLogo = brandLogoMap[item.slug];
                  return (
                    <Link key={item.id} href={`/agency/tools/${item.slug}`}>
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group text-center cursor-pointer">
                        <CardHeader>
                          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                            {brandLogo ? (
                              <img
                                src={brandLogo}
                                alt={`${item.title} logo`}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              <Target className="h-8 w-8 text-purple-500" />
                            )}
                          </div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-200">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">
                            {item.description}
                          </p>
                          {item.category && (
                            <Badge variant="secondary" className="mb-3">
                              {item.category}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
              <div className="text-center">
                <Link href="/agency/tools">
                  <Button size="lg" className="px-8 py-4">
                    View All Tools
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Tools content loading...</p>
            </div>
          )}
        </section>

        {/* Implementation Guide */}
        <section id="implementation" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Step-by-Step Implementation Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven 5-phase methodology for implementing programmatic SEO
              that delivers results.
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about programmatic SEO implementation
              and strategy.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Blog Posts */}
        <section className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep-dive into programmatic SEO strategies tailored for specific
              industries. Each guide provides comprehensive, actionable
              strategies for scaling your content at industry level.
            </p>
          </div>

          {actualBlogPosts && actualBlogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {actualBlogPosts.map((blog) => (
                <Link key={blog.id} href={`/agency/blog/${blog.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-l-4 border-l-blue-500">
                    <CardContent className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">
                            <Briefcase className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          {blog.category && (
                            <Badge
                              variant="outline"
                              className="mb-3 text-xs"
                            >
                              {blog.category}
                            </Badge>
                          )}
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-3 leading-tight">
                            {blog.title}
                          </h3>
                          {blog.excerpt && (
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {blog.excerpt}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                        <span>Read Complete Guide</span>
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Blog posts loading...</p>
            </div>
          )}
        </section>
      </div>
    </AgencyPageWrapper>
  );
}
