import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

interface SoftwareCardProps {
  software: {
    id: string;
    title: string;
    description: string | null;
    slug: string;
    image_url: string | null;
    category: string | null;
    user_rating: number | null;
    popularity_score: number | null;
    difficulty_level: string | null;
    setup_time: string | null;
    tags: any;
    type: string | null;
  };
  featured?: boolean;
}

export const SoftwareCard = ({ software, featured = false }: SoftwareCardProps) => {
  const tags = Array.isArray(software.tags) ? software.tags : [];

  const getItemUrl = () => {
    if (software.type === 'tool') {
      return `/agency/tools/${software.slug}`;
    }
    return `/agency/software/${software.slug}`;
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50' : 'hover:shadow-lg'}`}>
      <CardContent className="p-0">
        <Link href={getItemUrl()} className="block">
          <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-50 to-purple-50 h-48">
            {software.image_url ? (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={software.image_url}
                  alt={`${software.title} logo`}
                  className="max-w-24 max-h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
            )}
            {featured && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-yellow-500 text-white border-0 font-bold">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                {software.title}
              </h3>
              {software.category && (
                <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
                  {software.category}
                </Badge>
              )}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {software.description || 'Professional tool for optimization and analysis.'}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 space-x-4">
              {software.user_rating && (
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{software.user_rating}</span>
                </div>
              )}
              {software.popularity_score && (
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>{software.popularity_score}k</span>
                </div>
              )}
              {software.setup_time && (
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{software.setup_time}</span>
                </div>
              )}
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
                {tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    +{tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};
