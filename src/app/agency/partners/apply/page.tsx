"use client";

import Link from "next/link";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Globe,
  Rocket,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "Access Our Methodology",
    description:
      "Leverage our proven Programmatic SEO playbooks, templates, and data pipelines to deliver results faster.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    title: "Join a Global Network",
    description:
      "Connect with certified partners worldwide, share insights, and collaborate on multi-market projects.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Grow Your Agency",
    description:
      "Receive qualified leads from our marketplace and co-sell with the Programmatic SEO B.V. sales team.",
  },
  {
    icon: <Award className="w-8 h-8 text-amber-600" />,
    title: "Co-Branded Materials",
    description:
      "Get access to certification badges, case study templates, and marketing collateral to strengthen your brand.",
  },
];

const requirements = [
  "Proven experience with SEO (technical, content, or programmatic)",
  "Ability to execute scalable content or landing page projects",
  "Strong communication skills and client management process",
  "Willingness to align with Programmatic SEO B.V. quality standards",
  "Active business registration or agency entity",
];

export default function PartnerApplyPage() {
  return (
    <AgencyPageWrapper>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 mb-6 px-4 py-2 text-sm font-semibold">
              Partner Program
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Become a Certified
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Programmatic SEO Partner
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our global network of trusted partners and help companies
              scale organic growth through automation, AI content, and
              programmatic SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our partner program is designed to help you grow while delivering
              exceptional results for clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <Card
                key={i}
                className="border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-4">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Partner Requirements
            </h2>
            <div className="space-y-4">
              {requirements.map((req, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form / CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Apply Now
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  Ready to join the Programmatic SEO partner network? Get in
                  touch and our partnerships team will review your application.
                </p>
                <div className="space-y-6">
                  <iframe
                    src="https://link.wellplan.io/widget/form/nKE2NfiNMxPS21X3SLlZ"
                    style={{
                      width: "100%",
                      height: "635px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    id="inline-partner-apply"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Partner Application"
                    data-height="635"
                    data-layout-iframe-id="inline-partner-apply"
                    data-form-id="nKE2NfiNMxPS21X3SLlZ"
                    title="Partner Application Form"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have Questions About the Partner Program?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Book a call with our partnerships team to learn more about how we
            can grow together.
          </p>
          <Link href="/agency/strategy-call">
            <Button className="webfx-button-primary text-lg px-8 py-4 h-auto">
              Book a Call <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
