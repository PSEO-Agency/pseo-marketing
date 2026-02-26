"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Feature {
  name: string;
  free: boolean | string;
  business: boolean | string;
  agency: boolean | string;
  partner: boolean | string;
}

const features: Feature[] = [
  {
    name: "Articles per month",
    free: "10",
    business: "100",
    agency: "500",
    partner: "Unlimited",
  },
  {
    name: "Subaccounts",
    free: "1",
    business: "1",
    agency: "10",
    partner: "Unlimited",
  },
  {
    name: "Campaign builder",
    free: true,
    business: true,
    agency: true,
    partner: true,
  },
  {
    name: "SEO templates",
    free: "Basic",
    business: "All",
    agency: "All + Custom",
    partner: "All + Custom",
  },
  {
    name: "Publishing (CMS)",
    free: false,
    business: "WordPress, Shopify, Storyblok, HubSpot, Airtable",
    agency: "WordPress, Shopify, Storyblok, HubSpot, Airtable",
    partner: "WordPress, Shopify, Storyblok, HubSpot, Airtable",
  },
  {
    name: "AI content generation",
    free: false,
    business: true,
    agency: true,
    partner: true,
  },
  {
    name: "CMS integrations",
    free: false,
    business: "All",
    agency: "All",
    partner: "All",
  },
  {
    name: "White-label branding",
    free: false,
    business: false,
    agency: "Coming Soon",
    partner: "Coming Soon",
  },
  {
    name: "Team members",
    free: "1",
    business: "1",
    agency: "Unlimited",
    partner: "Unlimited",
  },
  {
    name: "Client onboarding links",
    free: false,
    business: false,
    agency: "Coming Soon",
    partner: "Coming Soon",
  },
  {
    name: "API access",
    free: false,
    business: false,
    agency: true,
    partner: true,
  },
  {
    name: "Agency management",
    free: false,
    business: false,
    agency: false,
    partner: true,
  },
  {
    name: "Revenue sharing",
    free: false,
    business: false,
    agency: false,
    partner: true,
  },
  {
    name: "Dedicated account manager",
    free: false,
    business: false,
    agency: false,
    partner: true,
  },
  {
    name: "Support",
    free: "Community",
    business: "Email",
    agency: "Email",
    partner: "Priority",
  },
];

const tiers = [
  {
    name: "Free",
    price: "0",
    period: "/month",
    description: "Get started with the basics",
    color: "hsl(0 0% 45%)",
    bgAccent: "bg-muted",
    textAccent: "text-muted-foreground",
    borderColor: "border-border",
    cta: "Start Free",
    ctaVariant: "outline" as const,
    href: "/signup?plan=free",
    popular: false,
  },
  {
    name: "Business",
    price: "495",
    period: "/month",
    description: "Publish and grow with full features",
    color: "hsl(262 83% 58%)",
    bgAccent: "bg-[hsl(262,83%,58%)]/10",
    textAccent: "text-[hsl(262,83%,58%)]",
    borderColor: "border-[hsl(262,83%,58%)]/30",
    cta: "Get Business",
    ctaVariant: "default" as const,
    href: "/signup?plan=business",
    popular: true,
  },
  {
    name: "Agency",
    price: "995",
    period: "/month",
    description: "Multi-client management at scale",
    color: "hsl(217 91% 60%)",
    bgAccent: "bg-[hsl(217,91%,60%)]/10",
    textAccent: "text-[hsl(217,91%,60%)]",
    borderColor: "border-[hsl(217,91%,60%)]/30",
    cta: "Get Agency",
    ctaVariant: "default" as const,
    href: "/signup?plan=agency",
    popular: false,
  },
  {
    name: "Country Partner",
    price: "Custom",
    period: "",
    description: "Scale across an entire market",
    color: "hsl(25 95% 53%)",
    bgAccent: "bg-[hsl(25,95%,53%)]/10",
    textAccent: "text-[hsl(25,95%,53%)]",
    borderColor: "border-[hsl(25,95%,53%)]/30",
    cta: "Schedule a Call",
    ctaVariant: "outline" as const,
    href: "mailto:partners@pseo.nl?subject=Country%20Partner%20Inquiry",
    popular: false,
  },
];

/** Builder pricing: all 4 tiers; Agency shown as Custom + Schedule a call. */
const tiersForBuilder = tiers.map((t) =>
  t.name === "Agency"
    ? {
        ...t,
        price: "Custom" as const,
        period: "",
        cta: "Schedule a Call",
        ctaVariant: "outline" as const,
        href: "/agency/strategy-call",
      }
    : t
);

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <Check className="w-4 h-4 text-green-600 dark:text-green-400 mx-auto" />
    );
  if (value === false)
    return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  if (value === "Coming Soon")
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium">
        Coming Soon
      </span>
    );
  return <span className="text-sm text-foreground font-medium">{value}</span>;
}

export default function PricingTiers() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tiersForBuilder.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[hsl(262,83%,58%)] text-white text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className={`h-full p-8 rounded-2xl border ${tier.borderColor} bg-card shadow-sm ${
                  tier.popular
                    ? "ring-2 ring-[hsl(262,83%,58%)]/30 shadow-md"
                    : ""
                } flex flex-col`}
              >
                <div
                  className={`${tier.bgAccent} inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit mb-4`}
                >
                  <span className={`text-sm font-semibold ${tier.textAccent}`}>
                    {tier.name}
                  </span>
                </div>

                <div className="mb-2">
                  {tier.price === "Custom" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">
                        Custom
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">
                        &euro;
                      </span>
                      <span className="text-4xl font-bold text-foreground">
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {tier.period}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-8">
                  {tier.description}
                </p>

                <Button
                  variant={tier.ctaVariant}
                  className={`w-full mt-auto ${
                    tier.popular
                      ? "bg-[hsl(262,83%,58%)] text-white hover:bg-[hsl(262,83%,50%)] shadow-sm"
                      : tier.name === "Country Partner"
                        ? "border-[hsl(25,95%,53%)]/50 text-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,53%)]/5"
                        : tier.name === "Agency" && tier.cta === "Schedule a Call"
                          ? "border-[hsl(217,91%,60%)]/50 text-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,60%)]/5"
                          : ""
                  }`}
                  asChild
                >
                  <Link href={tier.href}>
                    {tier.name === "Country Partner" || tier.cta === "Schedule a Call" ? (
                      <>
                        <Phone className="w-4 h-4" />
                        {tier.cta}
                      </>
                    ) : (
                      <>
                        {tier.cta}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Full Feature Comparison
          </h3>

          <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground min-w-[200px]">
                      Feature
                    </th>
                    {tiersForBuilder.map((tier) => (
                      <th
                        key={tier.name}
                        className="p-4 text-center text-sm font-semibold min-w-[120px]"
                        style={{ color: tier.color }}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={index % 2 === 0 ? "bg-surface/50" : ""}
                    >
                      <td className="p-4 text-sm text-muted-foreground">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center">
                        <FeatureValue value={feature.free} />
                      </td>
                      <td className="p-4 text-center">
                        <FeatureValue value={feature.business} />
                      </td>
                      <td className="p-4 text-center">
                        <FeatureValue value={feature.agency} />
                      </td>
                      <td className="p-4 text-center">
                        <FeatureValue value={feature.partner} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
