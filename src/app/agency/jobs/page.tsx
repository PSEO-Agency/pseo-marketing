import type { Metadata } from "next";
import Link from "next/link";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  DollarSign,
  Users,
  Zap,
  Globe,
  Heart,
  Award,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Careers & Jobs | Join Our Programmatic SEO Team",
  description:
    "Join the future of programmatic SEO. Explore exciting remote-first career opportunities in automated content, enterprise SEO, AI-powered strategies, and scalable optimization.",
};

const benefits = [
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Remote-First Culture",
    description:
      "Work from anywhere with flexible hours and a strong focus on work-life balance.",
  },
  {
    icon: <Zap className="h-8 w-8 text-green-600" />,
    title: "Cutting-Edge Technology",
    description:
      "Work with the latest SEO automation tools, AI technologies, and scalable platforms.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-purple-600" />,
    title: "Competitive Package",
    description:
      "Comprehensive health coverage, equity options, professional development budget, and more.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Amazing Team",
    description:
      "Join a collaborative team of experts who are passionate about programmatic SEO innovation.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-red-600" />,
    title: "Career Growth",
    description:
      "Clear advancement paths, mentorship programs, and opportunities to lead groundbreaking projects.",
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-600" />,
    title: "Work-Life Balance",
    description:
      "Unlimited PTO, mental health support, and a culture that values your personal time.",
  },
];

const perks = [
  { icon: <Award className="h-5 w-5" />, text: "Industry-Leading Compensation" },
  { icon: <Globe className="h-5 w-5" />, text: "100% Remote Flexibility" },
  { icon: <Zap className="h-5 w-5" />, text: "Latest Technology Stack" },
  { icon: <Users className="h-5 w-5" />, text: "Collaborative Culture" },
];

export default function JobsPage() {
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
              {perks.map((perk, index) => (
                <Badge
                  key={index}
                  className="bg-white/10 text-white border-white/20 px-3 py-1 flex items-center gap-2"
                >
                  {perk.icon}
                  {perk.text}
                </Badge>
              ))}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Shape the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Programmatic SEO
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join a team that&apos;s revolutionizing SEO through automation, AI, and scalable content
              strategies. Help enterprise clients achieve exponential organic growth while advancing
              your career.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                <a href="#all-open-positions">View Open Positions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Jobs */}
      <section className="py-20 bg-white" id="all-open-positions">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                All Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore career opportunities across programmatic SEO, automation, data science, and
                enterprise solutions
              </p>
            </div>

            <Card className="text-center py-16 shadow-xl border-0">
              <CardContent>
                <Building className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Open Positions</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We&apos;re not currently hiring, but we&apos;re always looking for exceptional talent.
                  Send us your resume and we&apos;ll keep you in mind for future opportunities.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/agency/contact">Send Resume</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Join Our Team?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re building the future of SEO automation, and we believe in taking care of the
                people who make it possible
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
