"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ZoomIn, Play, Eye } from "lucide-react";

interface Screenshot {
  url: string;
  title: string;
  description: string;
  category: string;
}

interface SoftwareScreenshotsProps {
  screenshots: Screenshot[];
  title: string;
}

export const SoftwareScreenshots = ({
  screenshots,
  title,
}: SoftwareScreenshotsProps) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title} in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the interface and features that make {title} perfect for
            programmatic SEO
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => setSelectedImage(screenshot.url)}
                      >
                        <ZoomIn className="h-4 w-4 mr-2" />
                        View Full Size
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-full">
                      <img
                        src={selectedImage}
                        alt="Full size screenshot"
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <Badge
                  variant="secondary"
                  className="absolute top-4 left-4 bg-white/90 text-gray-700"
                >
                  {screenshot.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {screenshot.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Experience {title}?
            </h3>
            <p className="text-gray-600 mb-6">
              See how {title} can transform your programmatic SEO workflow
            </p>
            <Button size="lg" className="webfx-button-primary">
              <Eye className="h-4 w-4 mr-2" />
              Try Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
