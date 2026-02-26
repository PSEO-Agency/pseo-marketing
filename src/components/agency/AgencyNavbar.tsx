"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { agencySupabase } from "@/lib/supabase-agency";

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function AgencyNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const { data: services } = useQuery({
    queryKey: ["agency-nav-services"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("services")
        .select("id, title, slug")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: industries } = useQuery({
    queryKey: ["agency-nav-industries"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("industries")
        .select("id, name, slug")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: featuredBlogPosts } = useQuery({
    queryKey: ["agency-nav-featured-blog"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("blog_posts")
        .select("id, title, slug")
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  const programmaticSeoGuide = {
    id: "programmatic-seo-guide",
    title: "The Complete Programmatic SEO Guide",
    slug: "programmatic-seo-guide",
  };

  const allFeaturedPosts = [
    programmaticSeoGuide,
    ...(featuredBlogPosts || []),
  ].slice(0, 3);

  const filteredServices =
    services?.filter((s: any) => s.slug) || [];
  const serviceColumns = chunkArray(filteredServices, 4);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Hidden SEO nav for crawlers */}
      <nav aria-label="Site Navigation" className="sr-only">
        <ul>
          <li>
            <h2>Services</h2>
            <ul>
              {services?.map((s: any) => (
                <li key={s.id}>
                  <a href={`/agency/services/${s.slug}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h2>Industries</h2>
            <ul>
              {industries?.map((i: any) => (
                <li key={i.id}>
                  <a href={`/agency/industries/${i.slug}`}>{i.name}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h2>Resources</h2>
            <ul>
              <li><a href="/agency/blog">Blog</a></li>
              <li><a href="/agency/programmatic-seo-guide">Programmatic SEO Guide</a></li>
              <li><a href="/agency/software">Software Platforms</a></li>
              <li><a href="/agency/tools">SEO Tools</a></li>
            </ul>
          </li>
          <li>
            <h2>Company</h2>
            <ul>
              <li><a href="/agency/results">Results</a></li>
              <li><a href="/agency/about">About</a></li>
              <li><a href="/agency/jobs">Jobs</a></li>
              <li><a href="/agency/contact">Contact</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/agency" className="flex items-center flex-shrink-0">
            <Image
              src="/lovable-uploads/9b895b53-18c3-464f-9a68-5321aab2a130.png"
              alt="PSEO Agency - Programmatic SEO"
              width={160}
              height={48}
              className="h-8 lg:h-12 w-auto hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList>
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div
                    className={`grid gap-6 p-8 bg-white shadow-2xl rounded-3xl border border-gray-100 ${
                      serviceColumns.length === 1
                        ? "w-[400px] grid-cols-1"
                        : serviceColumns.length === 2
                          ? "w-[700px] grid-cols-2"
                          : "w-[900px] grid-cols-3"
                    }`}
                  >
                    <div className="col-span-full mb-2">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">
                        pSEO Services
                      </h4>
                    </div>
                    {serviceColumns.map((column, columnIndex) => (
                      <div key={columnIndex} className="space-y-4">
                        {column.map((service: any) => (
                          <Link
                            key={service.id}
                            href={`/agency/services/${service.slug}`}
                            className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group"
                          >
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600" />
                              {service.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 bg-transparent">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-4 p-6 w-[500px] grid-cols-2 bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="space-y-3">
                      {industries?.slice(0, 4).map((industry: any) => (
                        <Link
                          key={industry.id}
                          href={`/agency/industries/${industry.slug}`}
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {industries?.slice(4, 8).map((industry: any) => (
                        <Link
                          key={industry.id}
                          href={`/agency/industries/${industry.slug}`}
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Results (flat) */}
              <NavigationMenuItem>
                <Link
                  href="/agency/results"
                  className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 inline-flex items-center h-9"
                >
                  Results
                </Link>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 w-[600px] grid-cols-2 bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-2">
                        Content &amp; Guides
                      </h4>
                      {allFeaturedPosts.map((post: any) => (
                        <Link
                          key={post.id}
                          href={
                            post.id === "programmatic-seo-guide"
                              ? "/agency/programmatic-seo-guide"
                              : `/agency/blog/${post.slug}`
                          }
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium text-sm"
                        >
                          {post.title}
                        </Link>
                      ))}
                      <Link
                        href="/agency/blog"
                        className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                      >
                        Blog
                      </Link>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-2">
                        Software &amp; Tools
                      </h4>
                      <Link
                        href="/agency/software"
                        className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                      >
                        Software Platforms
                      </Link>
                      <Link
                        href="/agency/tools"
                        className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded-lg transition-all duration-200 font-medium"
                      >
                        SEO Tools
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About (flat) */}
              <NavigationMenuItem>
                <Link
                  href="/agency/about"
                  className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 inline-flex items-center h-9"
                >
                  About
                </Link>
              </NavigationMenuItem>

              {/* Jobs (flat) */}
              <NavigationMenuItem>
                <Link
                  href="/agency/jobs"
                  className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 inline-flex items-center h-9"
                >
                  Jobs
                </Link>
              </NavigationMenuItem>

              {/* Contact (flat) */}
              <NavigationMenuItem>
                <Link
                  href="/agency/contact"
                  className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 inline-flex items-center h-9"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Section */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* Phone strip */}
            <div className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl px-3 py-2 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600 font-medium">Call Now:</div>
                <div className="font-bold text-gray-900 text-sm">
                  +31 (0) 85 060 1065
                </div>
              </div>
            </div>

            {/* CTA button - desktop */}
            <Button
              className="hidden sm:flex webfx-button-primary px-3 lg:px-6 py-2 text-xs lg:text-sm font-bold shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/agency/strategy-call">
                <span className="hidden md:inline">Get Free Strategy Call</span>
                <span className="md:hidden">Free Call</span>
              </Link>
            </Button>

            {/* CTA button - mobile */}
            <Button
              className="sm:hidden webfx-button-primary px-2 py-2 text-xs font-bold"
              asChild
            >
              <Link href="/agency/strategy-call">Free Call</Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col p-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {/* Services */}
            <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 pt-1 pb-2">
                {filteredServices.map((service: any) => (
                  <Link
                    key={service.id}
                    href={`/agency/services/${service.slug}`}
                    className="block text-gray-600 py-2 text-sm hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Industries */}
            <Collapsible open={industriesOpen} onOpenChange={setIndustriesOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Industries
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 pt-1 pb-2">
                {industries?.map((industry: any) => (
                  <Link
                    key={industry.id}
                    href={`/agency/industries/${industry.slug}`}
                    className="block text-gray-600 py-2 text-sm hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Results */}
            <Link
              href="/agency/results"
              className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Results
            </Link>

            {/* Resources */}
            <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 pt-1 pb-2">
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-900 text-sm pt-1">Content &amp; Guides</h4>
                  {allFeaturedPosts.map((post: any) => (
                    <Link
                      key={post.id}
                      href={
                        post.id === "programmatic-seo-guide"
                          ? "/agency/programmatic-seo-guide"
                          : `/agency/blog/${post.slug}`
                      }
                      className="block text-gray-600 py-2 text-sm hover:text-blue-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {post.title}
                    </Link>
                  ))}
                  <Link
                    href="/agency/blog"
                    className="block text-gray-600 py-2 text-sm hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
                <div className="space-y-1 pt-3 border-t border-gray-100">
                  <h4 className="font-medium text-gray-900 text-sm pt-1">Software &amp; Tools</h4>
                  <Link
                    href="/agency/software"
                    className="block text-gray-600 py-2 text-sm hover:text-blue-600 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    Software Platforms
                  </Link>
                  <Link
                    href="/agency/tools"
                    className="block text-gray-600 py-2 text-sm hover:text-emerald-600 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    SEO Tools
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* About */}
            <Link
              href="/agency/about"
              className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            {/* Jobs */}
            <Link
              href="/agency/jobs"
              className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Jobs
            </Link>

            {/* Contact */}
            <Link
              href="/agency/contact"
              className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Button
                className="webfx-button-primary w-full py-4 text-base font-bold"
                asChild
              >
                <Link
                  href="/agency/strategy-call"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
