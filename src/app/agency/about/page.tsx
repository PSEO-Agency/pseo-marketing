import type { Metadata } from "next";
import Link from "next/link";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Target,
  Zap,
  TrendingUp,
  Globe,
  Rocket,
  Database,
  Settings,
  BarChart3,
  Code,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "About pSEO | 15+ Years Scaling Organic Traffic 10x | #1 Agency Results",
  description:
    "Leading pSEO agency with 15+ years expertise helping businesses scale organic traffic 10x faster. 1M+ pages generated, 100+ projects completed, proven automation strategies that deliver results.",
  openGraph: {
    title:
      "About pSEO | 15+ Years Scaling Organic Traffic 10x | #1 Agency Results",
    description:
      "Leading pSEO agency with 15+ years expertise helping businesses scale organic traffic 10x faster. 1M+ pages generated, 100+ projects completed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About pSEO | 15+ Years Scaling Organic Traffic 10x",
    description:
      "Leading pSEO agency with 15+ years expertise helping businesses scale organic traffic 10x faster. 1M+ pages generated, 100+ projects completed.",
  },
};

const stats = [
  {
    number: "1M+",
    label: "Pages Generated",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-green-600",
  },
  {
    number: "100+",
    label: "Projects Completed",
    icon: <Target className="h-6 w-6" />,
    color: "text-blue-600",
  },
  {
    number: "10M+",
    label: "Total Pages Created",
    icon: <Globe className="h-6 w-6" />,
    color: "text-purple-600",
  },
  {
    number: "500%",
    label: "Avg Traffic Growth",
    icon: <Rocket className="h-6 w-6" />,
    color: "text-orange-600",
  },
];

const coreValues = [
  {
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    title: "Automation Excellence",
    description:
      "Building sophisticated systems that scale SEO operations without manual intervention, from keyword research to content generation.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Data-Driven Results",
    description:
      "Every programmatic strategy is backed by comprehensive data analysis, proven methodologies, and continuous performance optimization.",
  },
  {
    icon: <Database className="h-8 w-8 text-purple-600" />,
    title: "Industry Expertise",
    description:
      "Specialized programmatic SEO knowledge across E-commerce, SaaS, Real Estate, Healthcare, Finance, Legal, and Local Business verticals.",
  },
  {
    icon: <Code className="h-8 w-8 text-orange-600" />,
    title: "Scalable Solutions",
    description:
      "From 1,000 to 25,000+ pages per project, our programmatic approaches scale seamlessly with your business growth needs.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Data Analysis & Research",
    description:
      "Identify high-volume keywords, analyze competitors, and map dynamic data sources for maximum programmatic impact.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Template Development",
    description:
      "Create scalable, SEO-optimized templates that automatically generate thousands of unique, high-quality pages.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Database & Content Setup",
    description:
      "Build structured data foundations and automated content systems to power mass page generation at scale.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Scale & Traffic Growth",
    description:
      "Launch thousands of optimized pages simultaneously and track performance for exponential traffic growth.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
];

const industries = [
  "E-commerce & Retail",
  "SaaS & Technology",
  "Real Estate",
  "Healthcare & Medical",
  "Finance & Insurance",
  "Legal Services",
  "Local Business",
  "Accounting & Professional Services",
];

const caseStudyResults = [
  {
    metric: "1,200%",
    description: "Traffic increase for e-commerce client",
    timeframe: "in 6 months",
    color: "text-green-600",
  },
  {
    metric: "25K",
    description: "Pages created for SaaS platform",
    timeframe: "automated generation",
    color: "text-blue-600",
  },
  {
    metric: "$500K",
    description: "Monthly revenue for local service business",
    timeframe: "through programmatic SEO",
    color: "text-purple-600",
  },
];

export default function AboutPage() {
  return (
    <AgencyPageWrapper>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-100 text-yellow-800 mb-6 px-4 py-2 text-sm font-semibold">
              #1 Programmatic SEO Agency
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Automate & Scale Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                SEO Operations
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              We help businesses automate their SEO operations and scale organic
              traffic exponentially through advanced programmatic strategies
              that generate thousands of high-converting pages.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Programmatic SEO Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15+ years of programmatic SEO expertise delivering exponential
              growth
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-gray-200 transition-colors ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  To help businesses{" "}
                  <strong>automate their SEO operations</strong> and achieve
                  exponential organic growth through advanced programmatic
                  strategies. We believe every company deserves access to
                  sophisticated, scalable SEO automation that eliminates manual
                  work and maximizes results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      15+ years of programmatic SEO expertise
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Automated systems that scale from 1K to 25K+ pages
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Data-driven content generation and optimization
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="SEO automation dashboard"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">Pages Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that drive our programmatic SEO innovation and
                client success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {value.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Programmatic SEO Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven 4-step methodology automates SEO operations and
                scales organic traffic exponentially
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg relative">
                        {step.icon}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized programmatic SEO strategies across multiple
                verticals
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-medium text-gray-700">
                    {industry}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Real Programmatic SEO Results
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Case studies showcasing the power of automated SEO operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudyResults.map((result, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className={`text-4xl font-bold mb-2 ${result.color}`}>
                      {result.metric}
                    </div>
                    <CardTitle className="text-lg text-gray-900 font-semibold">
                      {result.description}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {result.timeframe}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  SEO Automation Experts
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of programmatic SEO specialists combines technical
                  expertise with creative problem-solving to automate your SEO
                  operations and deliver exponential growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      AI & Machine Learning specialists
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Database architecture & development integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Remote-first culture serving global clients
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="SEO automation team collaboration"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
              >
                <Link href="/agency/jobs">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
