import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  ExternalLink,
  Github,
  FileText,
  Award,
  Clock,
} from "lucide-react";

interface SoftwareHeroProps {
  software: {
    title: string;
    description: string;
    category?: string;
    is_featured: boolean;
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    documentation_url?: string;
    slug?: string;
    user_rating?: number;
    review_count?: number;
    popularity_score?: number;
    setup_time?: string;
    difficulty_level?: string;
  };
}

export const SoftwareHero = ({ software }: SoftwareHeroProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {software.category && (
                <Badge
                  variant="secondary"
                  className="text-blue-600 bg-blue-100 border-blue-200 px-4 py-2"
                >
                  {software.category}
                </Badge>
              )}
              {software.is_featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg px-4 py-2">
                  <Star className="h-4 w-4 mr-2 fill-current" />
                  Featured Platform
                </Badge>
              )}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              {software.title}
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {software.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {software.user_rating && (
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-current mr-2" />
                  <span className="font-semibold text-gray-900">
                    {software.user_rating}
                  </span>
                  <span className="text-gray-600 ml-1">
                    ({software.review_count} reviews)
                  </span>
                </div>
              )}
              {software.setup_time && (
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">
                    Setup: {software.setup_time}
                  </span>
                </div>
              )}
              {software.difficulty_level && (
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">
                    {software.difficulty_level} Level
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {software.demo_url && (
                <Button
                  size="lg"
                  className="webfx-button-primary shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4"
                  asChild
                >
                  <a
                    href={software.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Try Live Demo
                  </a>
                </Button>
              )}
              {software.github_url && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-gray-50 px-8 py-4"
                  asChild
                >
                  <a
                    href={software.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source
                  </a>
                </Button>
              )}
              {software.documentation_url && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-gray-50 px-8 py-4"
                  asChild
                >
                  <a
                    href={software.documentation_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Documentation
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="relative">
            {software.image_url && (
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-white/20">
                    <img
                      src={software.image_url}
                      alt={`${software.title} logo`}
                      className="w-32 h-32 mx-auto object-contain"
                    />
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {software.popularity_score || 0}
                      </div>
                      <div className="text-sm text-gray-600">
                        Popularity Score
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {software.review_count || 0}+
                      </div>
                      <div className="text-sm text-gray-600">User Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
