"use client";
import { PROJECTS } from "@/app/details";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface Project {
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  links: String;
}
export default function Projects() {
  return (
    <div className="pb-4" id="project">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project: Project, index: number) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Project picture */}
            <div className="w-full lg:w-1/4">
              <Image
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              ></Image>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech: string, index: number) => (
                <span
                  className="mr-2 rounded bg-stone-900 text-sm font-medium"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}
