"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { agencySupabase } from "@/lib/supabase-agency";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, FileText, Image, Layers } from "lucide-react";
import { PostContent } from "@/components/linkedin/PostContent";
import { ImageDownloader } from "@/components/linkedin/ImageDownloader";
import { CarouselPreview } from "@/components/linkedin/CarouselPreview";
import { CarouselSlideData } from "@/components/linkedin/CarouselSlide";

interface LinkedInPost {
  id: string;
  title: string;
  slug: string;
  hook: string;
  body: string;
  hashtags: string[];
  images: unknown;
  carousel_slides: unknown;
  is_published: boolean;
  created_at: string;
}

export default function LinkedContentPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["linkedin-post", slug],
    queryFn: async () => {
      const { data, error } = await agencySupabase
        .from("linkedin_posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;

      let slides: CarouselSlideData[] = [];
      if (data.carousel_slides && Array.isArray(data.carousel_slides)) {
        slides = data.carousel_slides as unknown as CarouselSlideData[];
      }

      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        hook: data.hook || "",
        body: data.body || "",
        hashtags: data.hashtags || [],
        images: data.images,
        carousel_slides: slides,
        is_published: data.is_published,
        created_at: data.created_at,
      } as LinkedInPost;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <AgencyPageWrapper>
        <main className="min-h-screen bg-background pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-48 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-96 w-full" />
          </div>
        </main>
      </AgencyPageWrapper>
    );
  }

  if (error || !post) {
    return (
      <AgencyPageWrapper>
        <main className="min-h-screen bg-background pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/agency/linked-content">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Library
              </Button>
            </Link>
          </div>
        </main>
      </AgencyPageWrapper>
    );
  }

  const carouselSlides = Array.isArray(post.carousel_slides)
    ? (post.carousel_slides as CarouselSlideData[])
    : [];

  return (
    <AgencyPageWrapper>
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link href="/agency/linked-content">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Library
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-muted-foreground">
              LinkedIn post content with downloadable assets
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="post" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="post" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Post Content
              </TabsTrigger>
              <TabsTrigger value="images" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Images
              </TabsTrigger>
              <TabsTrigger
                value="carousel"
                className="flex items-center gap-2"
              >
                <Layers className="h-4 w-4" />
                Carousel
              </TabsTrigger>
            </TabsList>

            <TabsContent value="post">
              <PostContent
                hook={post.hook || ""}
                body={post.body || ""}
                hashtags={post.hashtags || []}
              />
            </TabsContent>

            <TabsContent value="images">
              {carouselSlides.length > 0 ? (
                <ImageDownloader
                  slides={carouselSlides}
                  postSlug={post.slug}
                />
              ) : (
                <p className="text-muted-foreground text-center py-12">
                  No images available for this post.
                </p>
              )}
            </TabsContent>

            <TabsContent value="carousel">
              {carouselSlides.length > 0 ? (
                <CarouselPreview
                  slides={carouselSlides}
                  postSlug={post.slug}
                />
              ) : (
                <p className="text-muted-foreground text-center py-12">
                  No carousel slides available for this post.
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </AgencyPageWrapper>
  );
}
