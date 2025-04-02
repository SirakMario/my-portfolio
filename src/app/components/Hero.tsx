"use client";
import Link from "next/link";
import { ABOUT_TEXT } from "../details";
import { Position } from "../details";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <div className="pb-4 lg:mb-36" id="hero">
      <div className="flex flex-wrap lg:flex-row">
        {/* My profile picture */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src="sirakprofile-light.png"
              alt="Sirak"
              className="boarder border-stone-900 rounded-4xl "
              width={450}
              height={450}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        {/* short bio */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tight lg-text-8xl"
            >
              Sirak T. Asfaha
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r  from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {Position}{" "}
            </motion.span>
            {/* Add the short description */}
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {ABOUT_TEXT}
            </motion.p>
            {/* Download button */}
            <motion.div variants={childVariants}>
              <Link
                href="/sirak.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="
                bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
              >
                Download Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
