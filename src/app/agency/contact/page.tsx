import type { Metadata } from "next";
import Script from "next/script";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact pSEO Agency | Get Free Strategy Call | Scale Traffic 10x",
  description:
    "Ready to scale your organic traffic 10x? Contact pSEO Agency for a free consultation. Expert team, 2-hour response time, proven results across 100+ projects.",
  openGraph: {
    title: "Contact pSEO Agency | Get Free Strategy Call | Scale Traffic 10x",
    description:
      "Ready to scale your organic traffic 10x? Contact pSEO Agency for a free consultation. Expert team, 2-hour response time, proven results.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact pSEO Agency | Get Free Strategy Call",
    description:
      "Ready to scale your organic traffic 10x? Contact pSEO Agency for a free consultation. Expert team, 2-hour response time.",
  },
};

const contactMethods = [
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Phone",
    content: "+31 (0) 85 060 1065",
    description: "Mon-Fri 9am-6pm CET",
  },
  {
    icon: <Mail className="h-6 w-6 text-green-600" />,
    title: "Email",
    content: "info@programmaticseo.agency",
    description: "We respond within 2 hours",
  },
  {
    icon: <MapPin className="h-6 w-6 text-purple-600" />,
    title: "Location",
    content: "Enschede, Netherlands",
    description: "Remote team worldwide",
  },
];

const features = [
  {
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    title: "Fast Response",
    description: "Get a response within 2 hours during business days",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Expert Team",
    description: "Speak directly with our SEO specialists",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-green-600" />,
    title: "Free Consultation",
    description: "30-minute strategy session at no cost",
  },
];

export default function ContactPage() {
  return (
    <AgencyPageWrapper>
      <Script
        src="https://link.wellplan.io/js/form_embed.js"
        strategy="lazyOnload"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 mb-6 px-4 py-2 text-sm font-semibold">
              Free Strategy Session Available
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Let&apos;s Scale Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Business Together
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to unlock exponential organic growth? Our team of
              programmatic SEO experts is here to help you dominate your market.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to scale your business with programmatic SEO? Let&apos;s
                discuss your goals and create a custom strategy.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="shadow-2xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Send us a message
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we&apos;ll get back to you
                      within 2 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <iframe
                        src="https://link.wellplan.io/widget/form/nKE2NfiNMxPS21X3SLlZ"
                        style={{
                          width: "100%",
                          height: "635px",
                          border: "none",
                          borderRadius: "4px",
                        }}
                        id="inline-nKE2NfiNMxPS21X3SLlZ"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="B-008-CUF. Contact Us Form (on the website)"
                        data-height="635"
                        data-layout-iframe-id="inline-nKE2NfiNMxPS21X3SLlZ"
                        data-form-id="nKE2NfiNMxPS21X3SLlZ"
                        title="B-008-CUF. Contact Us Form (on the website)"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {method.title}
                            </h3>
                            <p className="text-gray-900 font-medium mb-1">
                              {method.content}
                            </p>
                            <p className="text-sm text-gray-600">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Address Card */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Office Address
                          </h3>
                          <div className="text-gray-900 font-medium mb-1">
                            <div>Programmatic SEO B.V.</div>
                            <div>Brouwerijstraat 1</div>
                            <div>7523 XC Enschede</div>
                            <div>Netherlands</div>
                          </div>
                          <p className="text-sm text-gray-600">Headquarters</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
