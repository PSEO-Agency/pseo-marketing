"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can I start for free?",
    answer:
      "Yes! The Free plan gives you 10 articles per month, access to the campaign builder, and basic SEO templates. No credit card required.",
  },
  {
    question: "What happens when I hit my article limit?",
    answer:
      "You'll be notified when you're approaching your limit. Once reached, you can upgrade to a higher plan or wait for the next billing cycle to reset your usage.",
  },
  {
    question: "Can I upgrade or downgrade at any time?",
    answer:
      "Yes. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of your current billing period, so you keep access until then.",
  },
  {
    question: "What's the difference between Business and Agency plans?",
    answer:
      "The Business plan is for individual businesses with one subaccount. The Agency plan lets you manage up to 10 subaccounts, add unlimited team members, use white-label branding, and get API access — ideal for agencies managing multiple clients.",
  },
  {
    question: "How does the Country Partner plan work?",
    answer:
      "Country Partners get unlimited everything plus the ability to manage agencies in their territory, a revenue sharing model, and a dedicated account manager. Schedule a call with us to learn more about partnership opportunities.",
  },
  {
    question: "Do you offer a trial?",
    answer:
      "The Business plan comes with a 7-day free trial so you can experience the full publishing and AI content features before committing.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full p-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-sm text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
