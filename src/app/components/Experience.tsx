"use client";
import { EXPERIENCES } from "@/app/details";
import { motion, Variants } from "motion/react";
interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}
export default function Experience() {
  return (
    <div className="pb-4" id="experince">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience: Experience, index: number) => (
          <div className="mb-6 flex flex-wrap lg:justify-center" key={index}>
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400"> {experience.year}</p>
            </motion.div>
            {/* Role, Company & Desc. */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>

              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((tech: string, index: number) => (
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
