"use client";

import { motion } from "framer-motion";

export default function AgencySEOCast() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            CEO Guest on <span className="gradient-text">SEOCast</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Listen to our CEO discuss the future of SEO on the #1 Dutch podcast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/episode/5sEUTqjeUqlfACqVvzs7W5?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="SEOCast Podcast Episode with CEO"
          />
        </motion.div>
      </div>
    </section>
  );
}
