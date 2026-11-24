import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://vikramkumar.info";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Vikram Kumar | Specialist - Software Engineering", template: "%s | Vikram Kumar" },
  description: "Vikram Kumar is a Specialist - Software Engineering with 10+ years of experience in frontend engineering, React, TypeScript, React Native and data visualization.",
  keywords: ["Vikram Kumar", "Frontend Engineering", "React", "TypeScript", "React Native", "Frontend Lead", "Highcharts"],
  openGraph: { title: "Vikram Kumar | Specialist - Software Engineering", description: "10+ years building responsive web and mobile applications, leading frontend delivery and engineering data-rich experiences.", url: siteUrl, siteName: "Vikram Kumar", images: ["/opengraph-image.svg"], type: "website" },
  twitter: { card: "summary_large_image", title: "Vikram Kumar | Specialist - Software Engineering", description: "Frontend engineering, technical leadership and data visualization.", images: ["/opengraph-image.svg"] },
  alternates: { canonical: siteUrl },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: "Vikram Kumar", url: siteUrl, jobTitle: "Specialist - Software Engineering", address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" }, sameAs: ["https://www.linkedin.com/in/vikramkumarverma/", "https://github.com/vik-rama23"], knowsAbout: ["React.js", "TypeScript", "Redux", "React Native", "Highcharts", "Frontend Architecture", "Python", "FastAPI"] };
  return <html lang="en"><body className="site-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} /><Navbar /><main className="page-main">{children}</main><Footer /></body></html>;
}