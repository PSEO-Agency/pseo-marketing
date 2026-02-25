import type { Metadata } from "next";
import Script from "next/script";
import AgencyPageWrapper from "@/components/agency/AgencyPageWrapper";
import { CheckCircle2, Star, TrendingUp, Target, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Free pSEO Strategy Session | Programmatic SEO Agency",
  description:
    "Get your free programmatic SEO strategy session. Discover how to 10X your organic traffic with personalized keyword analysis and traffic growth projections.",
};

export default function FreeStrategyPage() {
  return (
    <AgencyPageWrapper>
      <Script src="https://link.wellplan.io/js/form_embed.js" strategy="lazyOnload" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Free pSEO Strategy
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how programmatic SEO can 10X your organic traffic with a personalized strategy
              session
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-blue-200 font-medium">100% Free</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-blue-200 font-medium">Expert Analysis</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-blue-200 font-medium">Actionable Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: What You'll Get */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What You&apos;ll Get in Your Strategy Session
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Keyword Opportunity Analysis
                    </h3>
                    <p className="text-gray-600">
                      Identify high-volume, low-competition keywords specific to your domain and
                      industry
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Traffic Growth Potential</h3>
                    <p className="text-gray-600">
                      Get realistic projections of organic traffic growth with programmatic SEO
                      implementation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Competitor Gap Analysis</h3>
                    <p className="text-gray-600">
                      Discover what your competitors are missing and how to capitalize on those
                      opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Custom Implementation Roadmap
                    </h3>
                    <p className="text-gray-600">
                      Step-by-step plan tailored to your business goals and technical requirements
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-blue-800 font-medium text-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 inline mr-2" />
                  Free audit &bull; No commitment &bull; Report in 24 hours
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>

              <div className="space-y-6">
                <iframe
                  src="https://link.wellplan.io/widget/form/WczCC8B7OrZF7PQKMQR9"
                  style={{ width: "100%", height: "944px", border: "none", borderRadius: "4px" }}
                  id="inline-WczCC8B7OrZF7PQKMQR9"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="B-011-LM. Opt in-1"
                  data-height="944"
                  data-layout-iframe-id="inline-WczCC8B7OrZF7PQKMQR9"
                  data-form-id="WczCC8B7OrZF7PQKMQR9"
                  title="B-011-LM. Opt in-1"
                />
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AgencyPageWrapper>
  );
}
