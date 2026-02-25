import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PSEO | Programmatic SEO at Scale",
  description:
    "Launch programmatic SEO pages, directories, and marketplaces. Agency services, a powerful builder, and cutting-edge core technology.",
  openGraph: {
    title: "PSEO | Programmatic SEO at Scale",
    description:
      "Launch programmatic SEO pages, directories, and marketplaces. Agency services, a powerful builder, and cutting-edge core technology.",
    type: "website",
    url: "https://pseo.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "PSEO | Programmatic SEO at Scale",
    description:
      "Launch programmatic SEO pages, directories, and marketplaces. Agency services, a powerful builder, and cutting-edge core technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
