"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  BookOpen,
  Calendar,
  Star,
  CheckCircle,
  Lightbulb,
  Target,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [readingProgress, setReadingProgress] = useState(0);

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      if (!slug) throw new Error("No slug provided");
      const { data, error } = await agencySupabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["related-posts", post?.category],
    queryFn: async () => {
      if (!post?.category) return [];
      const { data, error } = await agencySupabase
        .from("blog_posts")
        .select("title, slug, excerpt, read_time, category, is_featured")
        .eq("is_published", true)
        .neq("slug", slug)
        .limit(3);
      if (error) throw error;
      return data;
    },
    enabled: !!post?.category,
  });

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  if (isLoading) {
    return (
      <AgencyPageWrapper>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
        </div>
      </AgencyPageWrapper>
    );
  }

  if (error || !post) {
    return (
      <AgencyPageWrapper>
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Post Not Found
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                The blog post you&apos;re looking for doesn&apos;t exist or has
                been moved.
              </p>
            </div>
            <Link href="/agency/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </AgencyPageWrapper>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const metaTitle = (post as any).meta_title || post.title;

  return (
    <AgencyPageWrapper>
      <title>{metaTitle}</title>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/agency/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center justify-center gap-4 mb-6">
              {post.category && (
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 border-blue-200"
                >
                  {post.category}
                </Badge>
              )}
              {post.is_featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 mb-8">
              {post.published_at && (
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
              {post.read_time && (
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  <span>{post.read_time}</span>
                </div>
              )}
              <button
                onClick={handleShare}
                className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
              >
                <Share2 className="h-5 w-5 mr-2 text-purple-600" />
                <span>Share</span>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">
                  Industry Insights
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-100">
                <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">
                  Actionable Strategies
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-100">
                <BarChart3 className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">
                  Real Results
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {post.content && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none programmatic-seo-content">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Key Takeaways
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      Programmatic SEO can scale content creation from hundreds
                      to thousands of pages
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      Template-based approaches ensure consistency while
                      maintaining uniqueness
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      Quality control is essential when scaling content at this
                      level
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      Data-driven content strategies outperform manual
                      approaches
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Continue Reading
                </h2>
                <p className="text-lg text-gray-600">
                  Explore more programmatic SEO strategies and insights
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost: any) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/agency/blog/${relatedPost.slug}`}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          {relatedPost.category && (
                            <Badge
                              variant="outline"
                              className="border-blue-200 text-blue-700"
                            >
                              {relatedPost.category}
                            </Badge>
                          )}
                          {relatedPost.is_featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{relatedPost.read_time}</span>
                          </div>
                          <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx global>{`
        .programmatic-seo-content {
          line-height: 1.8;
        }
        .programmatic-seo-content h2 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 3rem 0 1.5rem 0;
          position: relative;
          padding-left: 1rem;
          border-left: 4px solid #3b82f6;
        }
        .programmatic-seo-content h3 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #374151;
          margin: 2.5rem 0 1rem 0;
        }
        .programmatic-seo-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4b5563;
          margin: 2rem 0 1rem 0;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border-left: 3px solid #10b981;
        }
        .programmatic-seo-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #374151;
          margin: 1.5rem 0;
        }
        .programmatic-seo-content ul {
          margin: 1.5rem 0;
        }
        .programmatic-seo-content li {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #374151;
          margin: 0.75rem 0;
          position: relative;
          padding-left: 1.5rem;
        }
        .programmatic-seo-content strong {
          color: #1f2937;
          font-weight: 600;
        }
      `}</style>
    </AgencyPageWrapper>
  );
}
