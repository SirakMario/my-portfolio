"use client";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { SiLeaflet } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repreatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technical Skills
      </motion.h2>
      <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ translateX: "50%" }}
          animate={{ translateX: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex flex-wrap items-center justify-center gap-4 pr-14 -translate-x-0"
        >
          {/* Tech. Icons */}
          <div>
            <img src="icons/python.svg" width={100} height={100} alt="" />
          </div>
          <div>
            <FcLinux className="text-7xl"></FcLinux>
          </div>
          <div>
            <FaDocker className="text-7xl text-blue-500" />
          </div>
          <div>
            <BiLogoPostgresql className="text-7xl text-blue-500" />
          </div>
          <div>
            <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
          </div>
          <div>
            <TbBrandNextjs className="text-7xl"></TbBrandNextjs>
          </div>

          <div>
            <SiLeaflet className="text-7xl text-green-500"></SiLeaflet>
          </div>
          <div>
            <TbBrandThreejs className="text-7xl "></TbBrandThreejs>
          </div>
          <div>
            <FaGitAlt className="text-7xl text-red-400" />
          </div>
          <div>
            <SiTailwindcss className="text-7xl text-cyan-300" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
