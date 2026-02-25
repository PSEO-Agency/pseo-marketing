import BuilderNavbar from "@/components/builder/BuilderNavbar";
import Footer from "@/components/landing/Footer";
import SignupForm from "@/components/signup/SignupForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | PSEO Builder",
  description: "Create your PSEO Builder account and start building.",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <BuilderNavbar />
      <SignupForm />
      <Footer />
    </main>
  );
}
