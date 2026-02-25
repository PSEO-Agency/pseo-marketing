"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredPosts = [
  {
    id: "programmatic-seo-guide",
    title: "The Complete Programmatic SEO Guide",
    excerpt:
      "Master programmatic SEO with our comprehensive guide. Learn strategies, tools, and implementation techniques to scale your organic traffic exponentially.",
    category: "Guide",
    readTime: "25 min read",
    href: "/agency/programmatic-seo-guide",
  },
  {
    id: "scaling-content",
    title: "Scaling Content Production with Automation",
    excerpt:
      "Learn how to build automated content pipelines that generate thousands of high-quality pages without sacrificing relevance or user experience.",
    category: "Strategy",
    readTime: "12 min read",
    href: "/agency/blog",
  },
  {
    id: "technical-seo-at-scale",
    title: "Technical SEO at Scale: Architecture Patterns",
    excerpt:
      "Discover the architectural patterns and technical foundations required to support programmatic SEO at massive scale.",
    category: "Technical",
    readTime: "15 min read",
    href: "/agency/blog",
  },
];

export default function AgencyBlog() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              From the <span className="gradient-text">pSEO Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest programmatic SEO strategies, case
              studies, and industry insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/agency/blog"
              className="text-primary font-semibold flex items-center hover:underline shrink-0"
            >
              View All Posts <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl gradient-border overflow-hidden group hover:scale-[1.02] transition-all"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="text-primary font-semibold text-sm flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
