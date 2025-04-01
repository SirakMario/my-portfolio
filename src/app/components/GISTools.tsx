"use client";
import { SiArcgis } from "react-icons/si";
import { SiGoogleearthengine } from "react-icons/si";
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

export default function GISTools() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Geospatial Tools
      </motion.h2>
      <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                initial={{ translateX: "-50%" }}
                animate={{ translateX: "50%" }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease:"linear"
                }}
                className="flex flex-wrap items-center justify-center gap-4 pr-14 -translate-x-0"
              >
                {/* Geospatil. Icons */}
      
                <div>
                  <img src="https://avatars.githubusercontent.com/u/186522?s=200&v=4" width={70} height={70}></img>
                </div>
                <div className="pl-8">
                  <SiArcgis  className="text-7xl"></SiArcgis>
                </div>

                <div>
                  <img src="icons/qgis.png" width={130} height={130} alt="" />
                </div>

                <div>
                  <SiGoogleearthengine className="text-7xl" />
                </div>


              </motion.div>
            </div>
    </div>
  );
}
