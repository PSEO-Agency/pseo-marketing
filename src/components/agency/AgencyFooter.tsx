"use client";

import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { agencySupabase } from "@/lib/supabase-agency";

export default function AgencyFooter() {
  const { data: services } = useQuery({
    queryKey: ["agency-footer-services"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("services")
        .select("id, title, slug")
        .order("sort_order", { ascending: true })
        .limit(5);
      if (error) throw error;
      return data;
    },
  });

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top CTA */}
        <div className="py-16 border-b border-white/20">
          <div className="text-center">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Scale Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our programmatic SEO
              expertise to drive their growth.
            </p>
            <Button
              className="webfx-button-primary text-lg px-10 py-6 h-auto"
              asChild
            >
              <Link href="/agency/strategy-call">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <p className="text-lg text-blue-200 leading-relaxed">
                  <strong>#1 Programmatic SEO Agency</strong>
                </p>
              </div>
              <p className="text-blue-200 mb-8 max-w-md leading-relaxed text-lg">
                Leading programmatic SEO agency helping businesses scale their
                organic traffic and revenue through data-driven content
                strategies.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">+31 (0) 85 060 1065</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">
                    info@programmaticseo.agency
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <div className="text-blue-200">
                    <div>Brouwerijstraat 1</div>
                    <div>7523 XC Enschede, Netherlands</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services?.map((service: any) => (
                  <li key={service.id}>
                    <Link
                      href={`/agency/services/${service.slug}`}
                      className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/agency/programmatic-seo-guide"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    The Complete Programmatic SEO Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agency/blog"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agency/software"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    Software Platforms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agency/tools"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    SEO Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/agency/partners"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    Partner Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agency/about"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agency/jobs"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agency/contact"
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 py-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-blue-200 text-lg">
              &copy; 2024-2025 Programmatic SEO B.V. All rights reserved.
            </div>
            <div className="text-right hidden md:block">
              <Button
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/agency/strategy-call">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
