import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// NOTE: Replace the metadataBase URL with your production domain (e.g. https://vikramkumar.dev)
export const metadataBase = new URL("https://example.com");

export const metadata: Metadata = {
  title: "Vikram Kumar | Frontend Developer",
  description: "Frontend Developer | React, Next.js, TypeScript — Portfolio",
  keywords: ["Vikram Kumar", "Frontend", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Vikram Kumar | Frontend Developer",
    description: "Portfolio showcasing React and frontend work.",
    url: metadataBase.href,
    siteName: "Vikram Kumar",
    images: ["/opengraph-image.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Kumar | Frontend Developer",
    description: "Frontend Developer | React, Next.js, TypeScript — Portfolio",
    images: ["/opengraph-image.svg"],
  },
  alternates: {
    canonical: metadataBase.href,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vikram Kumar",
    url: metadataBase.href,
    sameAs: [
      "https://www.linkedin.com/in/vikramkumarverma/",
      "https://github.com/vik-rama23",
    ],
    jobTitle: "Frontend Developer",
  } as const;

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 font-inter">
        {/* Structured data (JSON-LD) for better search engine understanding */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />

        <Navbar />
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
