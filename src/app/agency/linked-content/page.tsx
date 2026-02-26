"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, Image, Layers } from "lucide-react";

interface LinkedInPost {
  id: string;
  title: string;
  slug: string;
  hook: string;
  hashtags: string[];
  is_published: boolean;
  created_at: string;
}

export default function LinkedContentPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["linkedin-posts"],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("linkedin_posts")
        .select("id, title, slug, hook, hashtags, is_published, created_at")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data as LinkedInPost[];
    },
  });

  return (
    <AgencyPageWrapper>
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">
              Internal Resource
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              LinkedIn Content Library
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Ready-to-use LinkedIn posts with downloadable images and PDF
              carousels. Optimized for engagement and reach.
            </p>
          </div>

          {/* Posts grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/agency/linked-content/${post.slug}`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        {!post.is_published && (
                          <Badge
                            variant="outline"
                            className="ml-2 flex-shrink-0"
                          >
                            Draft
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {post.hook}
                      </p>

                      <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          Post
                        </span>
                        <span className="flex items-center gap-1">
                          <Image className="h-4 w-4" />
                          Images
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers className="h-4 w-4" />
                          Carousel
                        </span>
                      </div>

                      {post.hashtags && post.hashtags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.hashtags.slice(0, 3).map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.hashtags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{post.hashtags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  No LinkedIn posts found.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </AgencyPageWrapper>
  );
}
