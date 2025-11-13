"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Clock } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  duration?: string;
  github?: string;
  live?: string;
};

export default function ProjectCard({ title, description, tech, image, duration, github, live }: Props) {
  return (
    <motion.article
      className="project-card rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
    >
      {/* <div className="relative h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover project-img" />
      </div> */}

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          {duration && (
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300">
              <Clock size={14} /> <span>{duration}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600">
              <Github size={16} /> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600">
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
