"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselSlide, CarouselSlideData } from './CarouselSlide';

interface CarouselPreviewProps {
  slides: CarouselSlideData[];
  postSlug: string;
}

export const CarouselPreview: React.FC<CarouselPreviewProps> = ({ slides, postSlug }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          LinkedIn carousel format: 1080 × 1350px (4:5 ratio)
        </p>
      </div>

      <div className="relative bg-muted rounded-lg p-8 overflow-hidden">
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="flex justify-center">
          <div className="transform scale-[0.35] origin-top">
            <CarouselSlide slide={slides[currentSlide]} />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselPreview;
