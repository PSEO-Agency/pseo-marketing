import type { Metadata } from "next";
import Link from "next/link";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, BarChart, Globe, Zap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Proven Results & Case Studies - pSEO | 500%+ Growth Guaranteed",
  description:
    "See real results from our programmatic SEO strategies. 500%+ traffic growth, $50M+ revenue generated, 200+ happy clients. View case studies.",
};

const heroStats = [
  { number: "500%+", label: "Average Traffic Increase" },
  { number: "100+", label: "pSEO Projects" },
  { number: "1M+", label: "Pages Created" },
];

const caseStudies = [
  {
    client: "E-commerce Retailer",
    industry: "Retail",
    challenge: "Low organic visibility for product categories",
    result: "800% increase in organic traffic, $2.3M additional revenue",
    timeframe: "6 months",
    metrics: { traffic: "+800%", revenue: "$2.3M", conversion: "+45%" },
    color: "from-blue-500 to-indigo-600",
  },
  {
    client: "SaaS Platform",
    industry: "Technology",
    challenge: "Difficulty ranking for competitive keywords",
    result: "600% increase in qualified leads, 300% boost in conversions",
    timeframe: "8 months",
    metrics: { leads: "+600%", conversions: "+300%", mrr: "+250%" },
    color: "from-green-500 to-emerald-600",
  },
  {
    client: "Local Service Business",
    industry: "Services",
    challenge: "Limited local search presence",
    result: "1200% increase in local search visibility, 400% more bookings",
    timeframe: "4 months",
    metrics: { visibility: "+1200%", bookings: "+400%", revenue: "+320%" },
    color: "from-purple-500 to-violet-600",
  },
];

const achievements = [
  { icon: <Award className="h-6 w-6" />, text: "#1 pSEO Agency" },
  { icon: <Globe className="h-6 w-6" />, text: "Global Client Base" },
  { icon: <Zap className="h-6 w-6" />, text: "Lightning Fast Results" },
  { icon: <BarChart className="h-6 w-6" />, text: "Data-Driven Approach" },
];

export default function ResultsPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {achievements.map((achievement, index) => (
                <Badge
                  key={index}
                  className="bg-white/10 text-white border-white/20 px-3 py-1 flex items-center gap-2"
                >
                  {achievement.icon}
                  {achievement.text}
                </Badge>
              ))}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Proven Results That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Speak For Themselves
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our programmatic SEO strategies have delivered exceptional results for businesses
              across various industries. See the measurable impact we can make for your business.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/agency/free-strategy">Get Similar Results</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Real Project Example Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Numbers Don&apos;t Lie
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real metrics from real clients who trusted us to transform their online presence
              </p>
            </div>

            {/* Case Study Preview */}
            <div className="bg-white p-8 lg:p-12 text-center mb-12 rounded-xl shadow-xl">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Real Results from Real Businesses
                </h3>
                <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">500%</div>
                    <div className="text-gray-700 font-medium mb-2">Traffic Increase</div>
                    <div className="text-sm text-gray-600">Local Business client in 6 months</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2K</div>
                    <div className="text-gray-700 font-medium mb-2">Pages Created</div>
                    <div className="text-sm text-gray-600">Long-tail keyword scaling</div>
                  </div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src="/lovable-uploads/704ca633-1198-4152-87f0-dc67bd7139a4.png"
                      alt="Real project analytics dashboard showing traffic growth"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="text-white text-xl font-bold">Real project example</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from real businesses. See how our programmatic SEO strategies have
                transformed these companies&apos; online presence and revenue.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-gray-100 text-gray-800">{study.industry}</Badge>
                          <Badge variant="outline">{study.timeframe}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.client}</h3>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                              <Target className="h-4 w-4" />
                              Challenge:
                            </h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              Result:
                            </h4>
                            <p className="text-gray-600">{study.result}</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:border-l lg:pl-8">
                        <h4 className="font-semibold text-gray-700 mb-4">Key Metrics</h4>
                        <div className="space-y-3">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                            >
                              <span className="text-sm font-medium text-gray-600 capitalize">
                                {key}
                              </span>
                              <span className="font-bold text-gray-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join the Success Stories
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              With experience in over 100 Programmatic SEO projects, know how to scale your organic
              growth
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">6 Months</div>
                <div className="text-gray-600">Average ROI Timeline</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring & Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
