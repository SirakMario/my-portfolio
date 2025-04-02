"use client";
import Link from "next/link";
import { CONTACT } from "@/app/details";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="boarder-t border-stone-900 pb-2" id="contacts">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center my-4"
      >
        Contacts
      </motion.h2>
      <div className="text-center tracking-tight ">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 1 }}
        >
          {CONTACT[0].address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 1 }}
        >
          {CONTACT[0].phoneNo}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 1 }}
        >
          <Link href="#" className="border-b">
            {CONTACT[0].email}
          </Link>
        </motion.div>

        <div className="flex md:hidden mt-2 items-center justify-center gap-4 text-2xl">
          <Link
            href="www.linkedin.com/in/sirak-tesfamariam-asfaha"
            target="_blank"
            rel="noopener noreferrer"
            arial-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://github.com/SirakMario"
            target="_blank"
            rel="noopener noreferrer"
            arial-label="GitHub"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
