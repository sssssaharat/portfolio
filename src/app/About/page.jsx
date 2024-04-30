import React from "react";

function About() {
  return (
    <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-28">
      <div className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-7xl sm:text-[120px] md:text-[150px] lg:text-[200px]  font-medium leading-tight text-transparent sm:leading-tight  md:leading-tight">
        About me
      </div>
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-28">
        <p className="text-white text-3xl mx-12 font-light leading-tight  sm:leading-tight  md:leading-tight">
          The goal is to expland my learning, knowledge, and skills. to build on
          the skills of working in the future.
        </p>
      </div>
      <div className="mx-auto max-w-4xl py-14 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 mx-12">
          <div className="sm:text-center text-start">
            <p className="text-indigo-500 text-xl">Present</p>
          </div>
          <div>
            <p className="text-white text-2xl">Focussing Fontent, UX & UI</p>
          </div>
          <div className="sm:text-center text-start">
            <p className="text-indigo-500 text-xl">2018 - 2021</p>
          </div>
          <div>
            <p className="text-white text-2xl">Computer Science</p>
            <p className="text-zinc-500 text-md pt-4">Burapha University</p>
          </div>
          <div className="sm:text-center text-start">
            <p className="text-indigo-500 text-xl">2012 - 2018</p>
          </div>
          <div>
            <p className="text-white text-2xl">English Mathematics</p>
            <p className="text-zinc-500 text-md pt-4">
              Sirirattanathorn school
            </p>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default About;
