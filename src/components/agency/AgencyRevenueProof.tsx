"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "1M+",
    label: "Pages Generated",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Target,
    value: "100+",
    label: "Projects Completed",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    value: "500%",
    label: "Average Traffic Growth",
    gradient: "from-purple-500 to-purple-600",
  },
];

const caseStudies = [
  {
    value: "500%",
    title: "Traffic Increase",
    detail: "Local Business client in 6 months",
    borderColor: "border-green-500",
    valueColor: "text-green-400",
  },
  {
    value: "2K",
    title: "Pages Created",
    detail: "Long-tail keyword scaling",
    borderColor: "border-blue-500",
    valueColor: "text-blue-400",
  },
];

export default function AgencyRevenueProof() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Revenue Impact of{" "}
            <span className="gradient-text">Programmatic SEO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proven Track Record: 15+ years of SEO expertise delivering
            exponential growth for businesses worldwide
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center glass rounded-2xl p-8 group hover:scale-105 transition-all"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <metric.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-black mb-2">{metric.value}</div>
              <div className="text-muted-foreground font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
            Real Results from Real Businesses
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className={`border-l-4 ${study.borderColor} pl-6`}
              >
                <div className={`text-3xl font-bold ${study.valueColor} mb-2`}>
                  {study.value}
                </div>
                <div className="font-medium mb-1">{study.title}</div>
                <div className="text-sm text-muted-foreground">
                  {study.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
