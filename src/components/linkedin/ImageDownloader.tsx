"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CarouselSlideData } from './CarouselSlide';

const slideTypeStyles: Record<string, { bg: string; accent: string }> = {
  hook: { bg: 'from-slate-900 via-blue-900 to-indigo-900', accent: 'text-blue-400' },
  inputs: { bg: 'from-slate-900 via-blue-900 to-blue-800', accent: 'text-sky-400' },
  engine: { bg: 'from-slate-900 via-indigo-900 to-purple-900', accent: 'text-purple-400' },
  results: { bg: 'from-slate-900 via-blue-900 to-emerald-900', accent: 'text-emerald-400' },
  cta: { bg: 'from-orange-600 via-orange-500 to-amber-500', accent: 'text-gray-900' },
};

const SINGLE_IMAGE_WIDTH = 1200;
const SINGLE_IMAGE_HEIGHT = 627;

interface ImageDownloaderProps {
  slides: CarouselSlideData[];
  postSlug: string;
}

export const ImageDownloader: React.FC<ImageDownloaderProps> = ({ slides, postSlug }) => {
  const getSlideStyles = (type: string) => slideTypeStyles[type] || slideTypeStyles.hook;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          LinkedIn single image format: 1200 × 627px (1.91:1 ratio)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((slide, index) => {
          const styles = getSlideStyles(slide.type);
          return (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="relative bg-muted rounded-lg overflow-hidden mb-4">
                  <div
                    className="transform scale-[0.25] origin-top-left"
                    style={{
                      width: SINGLE_IMAGE_WIDTH * 0.25,
                      height: SINGLE_IMAGE_HEIGHT * 0.25
                    }}
                  >
                    <div className={`w-[1200px] h-[627px] bg-gradient-to-br ${styles.bg} flex items-center justify-center p-12 relative overflow-hidden`}>
                      <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

                      <div className="relative z-10 text-center text-gray-900 max-w-4xl">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        {slide.subtitle && (
                          <p className={`text-2xl ${styles.accent}`}>{slide.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Slide {index + 1}: {slide.type}</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ImageDownloader;
