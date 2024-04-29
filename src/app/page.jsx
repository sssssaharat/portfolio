"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  return (
    <div className="relative mx-auto max-w-7xl isolate px-6 ">
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-6">
        <section className="Title">
          <div className="relative items-center ">
            <div className="relative flex items-center justify-center">
              <div className="absolute bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-9xl xs:text-7xl sm:text-[160px] md:text-[180px] lg:text-[200px] font-medium leading-tight text-transparent sm:leading-tight  md:leading-tight">
                Portfolio
                <div className="text-8xl xs:text-9xl sm:text-7xl md:text-[130px] lg:text-[170px] ">
                  sssssaharat
                </div>
              </div>

              <Image
                className="relative grid place-content-center rounded-full w-1/2 sm:w-1/3 lg:w-1/4 "
                src="/asset/image33.png"
                alt="Logo"
                width={width < 1024 ? "400" : "200"}
                height={width < 1024 ? "100" : "100"}
              />
            </div>
          </div>
        </section>
        <section className="present">
          <div className="mx-auto max-w-2xl text-center sm:text-center py-32 sm:py-48 lg:py-64">
            <p className="mt-6 text-2xl text-gray-100 font-light sm:text-3xl leading-tight text-transparent sm:leading-tight  md:leading-tight">
              Interested in{" "}
              <span className="text-indigo-500">Fontent, UX & UI designer</span>{" "}
              focussing on designing own<br></br>Trade dashboard & website
              Trade.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
