import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Clock, TrendingUp } from "lucide-react";

interface SoftwareSpecsProps {
  software: {
    user_rating?: number;
    review_count?: number;
    popularity_score?: number;
    difficulty_level?: string;
    setup_time?: string;
    target_audience?: string;
    integration_capabilities?: any[];
    use_cases?: any[];
    technical_specs?: any;
  };
}

export const SoftwareSpecs = ({ software }: SoftwareSpecsProps) => {
  const integrations = Array.isArray(software.integration_capabilities)
    ? software.integration_capabilities
    : [];

  const useCases = Array.isArray(software.use_cases) ? software.use_cases : [];

  const techSpecs =
    software.technical_specs && typeof software.technical_specs === "object"
      ? (software.technical_specs as Record<string, any>)
      : {};

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  User Reviews & Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {software.user_rating && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">User Rating</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(software.user_rating!)
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">
                        {software.user_rating}
                      </span>
                    </div>
                  </div>
                )}

                {software.review_count && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Reviews</span>
                    <span className="font-semibold">
                      {software.review_count.toLocaleString()}
                    </span>
                  </div>
                )}

                {software.popularity_score && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Popularity Score
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                          style={{ width: `${software.popularity_score}%` }}
                        />
                      </div>
                      <span className="font-semibold">
                        {software.popularity_score}/100
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {software.difficulty_level && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Difficulty Level
                    </span>
                    <Badge
                      variant="outline"
                      className={
                        software.difficulty_level === "Beginner"
                          ? "border-green-200 text-green-700"
                          : software.difficulty_level === "Intermediate"
                            ? "border-yellow-200 text-yellow-700"
                            : "border-red-200 text-red-700"
                      }
                    >
                      {software.difficulty_level}
                    </Badge>
                  </div>
                )}

                {software.setup_time && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Setup Time
                    </span>
                    <span className="font-semibold">{software.setup_time}</span>
                  </div>
                )}

                {software.target_audience && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Target Audience
                    </span>
                    <span className="font-semibold">
                      {software.target_audience}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {useCases.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Use Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {useCases.map((useCase: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="justify-center py-2 px-3 text-center"
                      >
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {integrations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {integrations.map((integration: string, index: number) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {Object.keys(techSpecs).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(techSpecs).map(([key, value]) => (
                    <div key={key} className="flex items-start justify-between">
                      <span className="text-sm text-gray-600 capitalize">
                        {key.replace(/_/g, " ")}
                      </span>
                      <span className="font-semibold text-right text-sm">
                        {Array.isArray(value)
                          ? value.join(", ")
                          : String(value)}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
