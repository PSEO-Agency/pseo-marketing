import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Target, BarChart3, Cog, Globe } from "lucide-react";

interface SoftwareFeaturesProps {
  features: Array<{
    name: string;
    description: string;
  }>;
}

export const SoftwareFeatures = ({ features }: SoftwareFeaturesProps) => {
  const iconMap = [CheckCircle, Zap, Target, BarChart3, Cog, Globe];

  if (!features || features.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <Zap className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">
              POWERFUL FEATURES
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Everything You Need to{" "}
            <span className="webfx-text-gradient">Scale SEO</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and features designed to automate and optimize
            your programmatic SEO workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            const colors = [
              "from-blue-500 to-blue-600",
              "from-indigo-500 to-indigo-600",
              "from-purple-500 to-purple-600",
              "from-green-500 to-green-600",
              "from-orange-500 to-red-500",
              "from-pink-500 to-rose-500",
            ];

            return (
              <Card
                key={index}
                className="webfx-card p-6 group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
