"use client";
import { motion } from "motion/react";
import { EDUCATIONS } from "../details";


export default function Education() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="justify-items-center">
        {EDUCATIONS.map((education, index: number) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4 text-center mb-2"
            key={index}
          >
            <h3 className="mb-2 font-semibold text-2xl">
              {education.degree} -{" "}
              <span className="text-sm text-stone-400">{education.year}</span>
            </h3>

            {education.universities.map((university: string, index: number) => (
              <ul className="list-none" key={index}>
                <li className="text-stone-400" >
                  {university}
                </li>
              </ul>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
