"use client";
import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
function Contact() {
  const re = useRef  (null);
  const { scrollYProgress } = useScroll({
    target: re,
    offset: ["1 -1", "1 2"],
  });

  return (
    <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-28">
      <motion.div
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-7xl sm:text-[120px] md:text-[150px] lg:text-[200px]  font-medium leading-tight text-transparent sm:leading-tight  md:leading-tight"
      >
        Ready to create?
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-28"
      >
        <div className="flex flex-col mx-12">
          <p className="text-indigo-500 text-md py-4">Contact details</p>
          <p className="text-white text-2xl pb-3">sssssaharat.s@gmail.com</p>
          <p className="text-white text-2xl">0804604129</p>
        </div>
        <div className="flex flex-col mx-12 py-32">
          <p className="text-indigo-500 text-md py-4">Address</p>
          <p className="text-white text-2xl pb-3">59/42 Lasalle 71 </p>
          <p className="text-white text-2xl pb-3">Bangna Street</p>
          <p className="text-white text-2xl">Bangkok 10260.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
