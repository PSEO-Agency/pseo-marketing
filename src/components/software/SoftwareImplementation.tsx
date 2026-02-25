"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Settings,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Play,
  BookOpen,
  Users,
  Zap
} from "lucide-react";

interface ImplementationExample {
  title: string;
  description: string;
  code: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
}

interface SoftwareImplementationProps {
  setupGuide: string;
  implementationExamples: ImplementationExample[];
  migrationGuide?: string;
  supportResources: {
    documentation?: string;
    tutorials?: string[];
    community?: string;
    support?: string;
  };
}

export const SoftwareImplementation = ({
  setupGuide,
  implementationExamples,
  migrationGuide,
  supportResources
}: SoftwareImplementationProps) => {
  const complexityColors = {
    'Beginner': 'bg-green-100 text-green-700',
    'Intermediate': 'bg-yellow-100 text-yellow-700',
    'Advanced': 'bg-red-100 text-red-700'
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Implementation Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step-by-step instructions and examples to get you up and running with programmatic SEO
          </p>
        </div>

        <Tabs defaultValue="setup" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="setup">Quick Setup</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
            <TabsTrigger value="migration">Migration</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Setup Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: setupGuide }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Quick Start Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Install and configure the platform',
                    'Set up your content templates',
                    'Connect your data sources',
                    'Configure SEO settings',
                    'Test your first programmatic pages',
                    'Deploy and monitor performance'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {implementationExamples.map((example, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge className={complexityColors[example.complexity]}>
                          {example.complexity}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {example.timeEstimate}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{example.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      <Code className="h-4 w-4 mr-2" />
                      Copy Code
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="migration" className="space-y-8">
            {migrationGuide ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Migration Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: migrationGuide }}
                  />
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Migration Guide Coming Soon
                  </h3>
                  <p className="text-gray-600">
                    Detailed migration instructions will be available here soon.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="resources" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Documentation & Tutorials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportResources.documentation && (
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Official Documentation
                    </Button>
                  )}
                  {supportResources.tutorials?.map((tutorial, index) => (
                    <Button key={index} variant="outline" className="w-full justify-start">
                      <Play className="h-4 w-4 mr-2" />
                      {tutorial}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Community & Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportResources.community && (
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Join Community
                    </Button>
                  )}
                  {supportResources.support && (
                    <Button variant="outline" className="w-full justify-start">
                      <Zap className="h-4 w-4 mr-2" />
                      Get Support
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
