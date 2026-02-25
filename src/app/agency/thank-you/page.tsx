import type { Metadata } from "next";
import Link from "next/link";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, ArrowRight, Star, MessageSquare, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You - Your Request Has Been Received",
  description:
    "Thank you for reaching out! Our team will review your submission and get back to you within 2 hours with personalized SEO insights.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "We'll Review Your Submission",
    description: "Our team will analyze your requirements within 2 business hours",
    timeframe: "Within 2 hours",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-green-600" />,
    title: "Initial Response",
    description: "You'll receive a personalized response with preliminary insights",
    timeframe: "Same day",
  },
  {
    icon: <Calendar className="h-6 w-6 text-purple-600" />,
    title: "Strategy Session",
    description: "Schedule your free consultation to discuss detailed recommendations",
    timeframe: "Within 24 hours",
  },
];

const testimonials = [
  {
    text: "The team delivered exactly what they promised. Our organic traffic increased by 300% in just 6 months.",
    author: "Sarah Johnson",
    company: "TechFlow Solutions",
    rating: 5,
  },
  {
    text: "Incredibly detailed analysis and clear action steps. Best SEO investment we've made.",
    author: "Mike Chen",
    company: "DataDrive Inc",
    rating: 5,
  },
];

export default function ThankYouPage() {
  return (
    <AgencyPageWrapper>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your request has been successfully submitted. Our team of SEO experts will review your
              information and get back to you shortly.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 max-w-lg mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-semibold">Response Time: Within 2 Hours</span>
              </div>
              <p className="text-gray-600 text-sm">
                Check your email for our initial response with preliminary insights and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Happens Next?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {nextSteps.map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      {step.icon}
                    </div>
                    <div className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      {step.timeframe}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">While You Wait...</h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our resources and learn more about how programmatic SEO can transform your
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600"
              >
                <Link href="/agency/blog">
                  Read Our Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 px-8 bg-blue-600 text-white hover:bg-blue-700"
              >
                <Link href="/agency/results">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
