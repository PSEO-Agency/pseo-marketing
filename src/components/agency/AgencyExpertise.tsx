"use client";

import { motion } from "framer-motion";
import { Brain, Database, Code, BarChart3, Search, Zap } from "lucide-react";

const expertiseAreas = [
  {
    icon: Search,
    title: "Technical SEO Mastery",
    description:
      "Deep expertise in crawlability, indexation, and site architecture optimization at scale.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description:
      "Advanced database design and API integration for seamless content automation.",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Code,
    title: "Development Integration",
    description:
      "Full-stack development capabilities for custom pSEO implementations and tools.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Leveraging artificial intelligence for content optimization and keyword research.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Comprehensive tracking and performance measurement across thousands of pages.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Building robust workflows that scale content production without manual intervention.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "24/7", label: "Support & Monitoring" },
];

export default function AgencyExpertise() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Unmatched Expertise{" "}
            <span className="gradient-text">Driving Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Our team of SEO specialists with deep expertise in pSEO, dynamic
            data sets and content automation
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Battle-tested strategies that have generated billions in revenue
            through systematic programmatic approaches
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass gradient-border hover:bg-surface-hover transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
