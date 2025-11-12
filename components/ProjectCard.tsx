"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Clock } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  duration: string; // 👈 Added duration
  github?: string;
  live?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  duration,
  github,
  live,
}: ProjectProps) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {/* Project Image */}
      {/* <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div> */}

      {/* Content */}
      <div className="p-5">
        {/* Title + Duration */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
            {duration}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-3">
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={18} /> Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ExternalLink size={18} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
