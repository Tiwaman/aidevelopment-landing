import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AiDevelopment.in | Affordable Websites for Small Businesses",
  description:
    "Get a professional website for your small business at just ₹15,000. Fast delivery, modern design, and ongoing maintenance. Launch your online presence today.",
  keywords: [
    "affordable website",
    "small business website",
    "cheap web development",
    "website maintenance",
    "India web developer",
  ],
  openGraph: {
    title: "AiDevelopment.in | Affordable Websites for Small Businesses",
    description:
      "Professional websites starting at ₹15,000. Fast delivery & ongoing maintenance.",
    url: "https://aidevelopment.in",
    siteName: "AiDevelopment.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
