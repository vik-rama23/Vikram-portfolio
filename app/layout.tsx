import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Vikram Kumar | Frontend Developer",
  description: "Frontend Developer | React, Next.js, TypeScript — Portfolio",
  keywords: ["Vikram Kumar", "Frontend", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Vikram Kumar | Frontend Developer",
    description: "Portfolio showcasing React and frontend work.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 font-inter">
        <Navbar />
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
