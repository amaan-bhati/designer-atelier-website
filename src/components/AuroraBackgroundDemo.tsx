"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col md:flex-row gap-4 items-center md:items-start justify-center px-4"
      >
        <div className="flex flex-col gap-4 items-center text-center md:mt-20">
          <div className="text-3xl md:text-7xl font-bold text-[#a36b9e] dark:text-[#a36b9e]">
            Shabana Designer Atelior
          </div>
          <div className="font-extralight text-base md:text-4xl text-[#a36b9e] dark:text-neutral-200 py-4">
            makeup bags, dresses and more...
          </div>
          <button className="bg-[#a36b9e] dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            View Shop
          </button>
        </div>
        <img
          src="/hero-img-1.png"
          alt="Shabana Designer Atelior"
          className="w-2/4 md:w-1/2 md:ml-4 bg-transparent h-[400px]"
        />
      </motion.div>
    </AuroraBackground>
  );
}
