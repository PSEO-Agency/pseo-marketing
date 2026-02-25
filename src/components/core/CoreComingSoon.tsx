"use client";

import { motion } from "framer-motion";
import { Cpu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CoreComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-8"
          >
            <Cpu className="w-10 h-10 text-muted-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
            <span className="text-sm font-medium">Coming Soon</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-muted-foreground/80">
            PSEO Core
          </h1>

          <p className="text-lg text-muted-foreground/60 mb-12 max-w-xl mx-auto">
            The foundational technology powering next-generation programmatic
            SEO. Advanced infrastructure for enterprise-grade scale. We&apos;re
            building something special.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-sm"
            >
              <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1 text-foreground">You&apos;re on the list!</p>
              <p className="text-sm text-muted-foreground">
                We&apos;ll notify you when PSEO Core launches.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
              />
              <Button type="submit" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
                <Bell className="w-4 h-4" />
                Notify Me
              </Button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
