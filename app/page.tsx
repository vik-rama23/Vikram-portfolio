import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-16">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Vikram Kumar</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Results-driven Frontend Engineer with more than 9 years of experience in React,
          Next.js, and TypeScript, creating scalable, responsive web apps.
        </p>
        <Link href="/projects">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            View My Work
          </button>
        </Link>
      </div>

      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src="/profile.jpg"
          alt="Vikram Kumar"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
