"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Check } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const planLabels: Record<string, { name: string; color: string }> = {
  free: { name: "Free", color: "text-muted-foreground" },
  business: { name: "Business", color: "text-[hsl(262,83%,58%)]" },
  agency: { name: "Agency", color: "text-[hsl(217,91%,60%)]" },
  country_partner: {
    name: "Country Partner",
    color: "text-[hsl(25,95%,53%)]",
  },
};

const BUILDER_URL = process.env.NEXT_PUBLIC_BUILDER_URL || "https://app.pseo.nl";

function SignupFormInner() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "free";
  const planInfo = planLabels[plan] || planLabels.free;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isCountryPartner = plan === "country_partner";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isCountryPartner) {
      window.location.href = "mailto:partners@pseo.nl?subject=Country%20Partner%20Application&body=Hi%2C%20I%27m%20interested%20in%20the%20Country%20Partner%20program.";
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, plan_slug: plan },
        },
      });

      if (signUpError) {
        if (signUpError.message.includes("already registered")) {
          setError("This email is already registered. Please sign in instead.");
        } else {
          setError(signUpError.message);
        }
        return;
      }

      if (!signUpData.session) {
        setError("Please check your email to confirm your account, then sign in.");
        return;
      }

      if (plan === "free") {
        window.location.href = `${BUILDER_URL}/onboarding?plan=free`;
        return;
      }

      const { data: checkoutData, error: checkoutError } =
        await supabase.functions.invoke("create-checkout", {
          body: { planSlug: plan },
        });

      if (checkoutError) {
        setError("Failed to create checkout session. Please try again.");
        return;
      }

      if (checkoutData?.url) {
        window.location.href = checkoutData.url;
      } else {
        setError("No checkout URL returned. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 mx-auto max-w-md w-full px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="text-center mb-8">
            <Link href="/builder" className="text-2xl font-bold text-[hsl(262,83%,58%)]">
              PSEO
            </Link>
            <h1 className="text-2xl font-bold mt-4 mb-2 text-foreground">Create your account</h1>
            <p className="text-sm text-muted-foreground">
              Selected plan:{" "}
              <span className={`font-semibold ${planInfo.color}`}>
                {planInfo.name}
              </span>
              {" · "}
              <Link
                href="/builder/pricing"
                className="text-[hsl(262,83%,58%)] hover:underline"
              >
                Change
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-foreground">
                Full name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(262,83%,58%)]/30 focus:border-[hsl(262,83%,58%)]/50 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(262,83%,58%)]/30 focus:border-[hsl(262,83%,58%)]/50 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-foreground">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                placeholder="Min. 8 characters"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(262,83%,58%)]/30 focus:border-[hsl(262,83%,58%)]/50 text-sm"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[hsl(262,83%,58%)] text-white hover:bg-[hsl(262,83%,50%)] shadow-sm"
              size="lg"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isCountryPartner ? (
                <>
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : plan === "free" ? (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Continue to Payment
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Already have an account?{" "}
              <a
                href={BUILDER_URL}
                className="text-[hsl(262,83%,58%)] hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>

          {plan !== "free" && !isCountryPartner && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                <span>
                  {plan === "business"
                    ? "7-day free trial included. Cancel anytime."
                    : "You'll be redirected to Stripe for secure payment."}
                </span>
              </div>
            </div>
          )}
          {isCountryPartner && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-[hsl(25,95%,53%)] shrink-0 mt-0.5" />
                <span>
                  Country Partner plans require a custom agreement. Our team will reach out within 24 hours.
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function SignupForm() {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </section>
      }
    >
      <SignupFormInner />
    </Suspense>
  );
}
