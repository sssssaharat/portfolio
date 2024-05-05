"use client";
import Image from "next/image";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1.8"],
  });
  return (
    <div className="relative mx-auto max-w-7xl isolate  ">
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-6">
        <section className="Title">
          <div className="relative items-center ">
            <div className="flex items-center justify-center">
              <div className="absolute bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-7xl sm:text-[150px] md:text-[200px] lg:text-[250px]  font-medium leading-tight text-transparent sm:leading-tight  md:leading-tight">
                Portfolio
                <div className="text-6xl  sm:text-[100px] ">sssssaharat</div>
              </div>

              <Image
                className="relative grid place-content-center rounded-full w-1/2 sm:w-1/3 lg:w-1/4 "
                src="/asset/image33.png"
                alt="Logo"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </section>
        <section className="present">
          <motion.div
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="mx-auto max-w-2xl text-center sm:text-center py-32 sm:py-48 lg:py-64"
          >
            <p className="mt-6 text-2xl text-gray-100 font-light sm:text-4xl leading-tight  sm:leading-tight  md:leading-tight">
              Interested in
              <span className="text-indigo-500"> Fontent,UX & UI </span>
              <br></br>
              focussing on designing own dashboard Trade and website Tecnical
              Trade.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
