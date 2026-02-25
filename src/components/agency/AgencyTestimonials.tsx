"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "The results exceeded our expectations. Our traffic increased by 400% within 6 months.",
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    rating: 5,
  },
  {
    content:
      "Professional team with incredible expertise. They delivered exactly what they promised.",
    name: "Michael Chen",
    company: "GrowthCorp",
    rating: 5,
  },
  {
    content:
      "Best investment we've made for our business. The ROI has been phenomenal.",
    name: "Emily Rodriguez",
    company: "Digital Dynamics",
    rating: 5,
  },
];

export default function AgencyTestimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-bold mb-6">
            <Star className="w-4 h-4" />
            Client Success
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our Clients Say About Our{" "}
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. See what our satisfied clients
            have to say about our results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-8 gradient-border hover:scale-[1.03] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="border-t border-border/50 pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-primary text-sm font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
