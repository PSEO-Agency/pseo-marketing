"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const culturePoints = [
  "Remote-first culture with global talent",
  "Continuous learning and development",
  "Data-driven approach to everything we do",
];

export default function AgencyTeam() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Inside <span className="gradient-text">pSEO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the expert team behind your programmatic SEO success. Our
            dedicated professionals bring years of experience and proven results
            to every campaign.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Life at pSEO
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We&apos;re passionate about helping businesses achieve
              extraordinary growth through innovative SEO strategies. Our team
              combines technical expertise with creative problem-solving to
              deliver results that exceed expectations.
            </p>
            <div className="space-y-4">
              {culturePoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="text-lg font-semibold mb-4">
              SEO Automation Experts
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our diverse team brings expertise from top agencies and in-house
              roles, ensuring your campaigns benefit from the latest industry
              insights.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/agency/jobs"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Open Jobs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
