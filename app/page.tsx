import PageWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";


export default function Home() {
  return (
    <PageWrapper>
      <section className="hero-bg rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -right-32 -top-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent opacity-60 animate-pulse blur-3xl"></div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-gray-50">
              I build modern, high-performance web experiences.
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
              I’m Vikram Kumar — I’m a Frontend Engineer with more than 9 years of experience creating responsive web applications. I work mainly with React, Next.js, and TypeScript, and I care about building fast, accessible, and clean interfaces.
            </p>

            <div className="mt-6 flex gap-4">
              <Link href="/projects" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                View Work
              </Link>

              <a href="/Vikram_Kumar_Resume.pdf" download className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Download Resume
              </a>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/vikramkumarverma/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

              <a
                href="https://github.com/vik-rama23"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                <Github size={18} /> GitHub
              </a>
            </div>

          </div>

          <div className="md:w-1/3 flex justify-center">
            {/* Use public/profile.jpg — fallback to placeholder if not present */}
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <Image src="/profile.jpg" alt="Vikram Kumar" width={160} height={160} className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
