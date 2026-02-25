"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Google" },
  { name: "OpenAI" },
  { name: "ChatGPT" },
  { name: "N8n" },
  { name: "Make" },
  { name: "Ahrefs" },
  { name: "Screaming Frog" },
  { name: "Semrush" },
];

export default function AgencyTools() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Powered by{" "}
            <span className="gradient-text">Industry-Leading Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage the best tools and technologies to deliver exceptional
            programmatic SEO results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass rounded-xl p-5 flex items-center justify-center h-16 hover:bg-surface-hover transition-all"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
