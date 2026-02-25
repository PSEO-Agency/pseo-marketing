import HomeHero from "@/components/home/HomeHero";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <HomeHero />
      <Footer />
    </main>
  );
}
