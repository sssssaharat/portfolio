"use client";

import React from "react";
import { Parallax } from "react-parallax";
import Image from "next/image";
import {
  HiOutlineHomeModern,
  HiOutlineBanknotes,
  HiOutlineBookmarkSquare,
} from "react-icons/hi2";

 function About() {
  const icons = [
    { img: "icons/html.png", name: "HTML" },
    { img: "icons/css.png", name: "CSS" },
    { img: "icons/javascript.png", name: "JAVASCRIPT" },
    { img: "icons/bootstrap.png", name: "BOOSTRAP" },
    { img: "icons/vue.png", name: "VUE" },
    { img: "icons/flutter.png", name: "FLUTTER" },
    { img: "icons/MongoDB.png", name: "MONGODB" },
    { img: "icons/react.png", name: "REACT" },
    { img: "icons/react.png", name: "NEXT.JS" },
  ];
  const experience = [
    {
      name: "Team Project User Interface Design and Development",
      project: "Inthanin coffee (UX/UI)",
      description:
        "User requirement, Persona, System map, Flow Diagram, Layout, Mockup.",
      icon: HiOutlineHomeModern,
    },
    {
      name: "Selected Topics in Computer Science",
      project: "Product Mash",
      description:
        "Business ERP, 5W H1, 8P 4C Design UI web on mobile, Digital marketing (Instagram).",
      icon: HiOutlineBanknotes,
    },
    {
      name: "Project workload news for faculty computer science Burapha University.",
      project: "Work Load News",
      description:
        "User: login, search news, register, views history news.Admin: login, search news, edit, delete, view details, approve or disapproved user.",
      icon: HiOutlineBookmarkSquare,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-28">
      <div className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-7xl sm:text-[120px] md:text-[150px] lg:text-[200px]  font-medium leading-tight text-transparent sm:leading-tight  md:leading-tight">
        About me
      </div>
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-28">
        <p className="text-white text-center text-3xl mx-12 font-light leading-tight  sm:leading-tight  md:leading-tight">
          The goal is to expland my learning, knowledge, and skills. to build on
          the skills of working in the future 🚀
        </p>
      </div>
      <div className="mx-auto max-w-4xl py-10 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-16 mx-12">
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
            <p className="text-zinc-500 text-md pt-2">Burapha University</p>
          </div>
          <div className="sm:text-center text-start">
            <p className="text-indigo-500 text-xl">2012 - 2018</p>
          </div>
          <div>
            <p className="text-white text-2xl">English Mathematics</p>
            <p className="text-zinc-500 text-md pt-2">
              Sirirattanathorn school
            </p>
          </div>
        </div>
      </div>
      <div className="paralax hidden lg:block">
        <style>
          {`
          .scroll-parent {
            position: relative;
            width: 100%;
            height: 8rem;
            overflow-x: hidden;
          }

          .scroll-element {
            width: inherit;
            height: inherit;
            position: absolute;
            left: 0%;
            top: 0%;
          }
            .primary {
              animation: primary 25s linear infinite;
            }

            .secondary {
              animation: secondary 25s linear infinite;
            }
            @keyframes primary {
            from {
              left: 0%;
            }
            to {
              left: -100%;
            }
          }

          @keyframes secondary {
            from {
              left: 100%;
            }
            to {
              left: 0%;
            }
          }
        }
        
        `}
        </style>
        <Parallax strength={300}>
          <div className="h-full w-full flex justify-center items-center overflow-hidden py-48">
            <div className="scroll-parent  ">
              <div className="scroll-element primary">
                <div className="grid grid-cols-7  scroll-element items-center text-center text-zinc-400 text-2xl animate-primary">
                  <p className="">HTML</p>
                  <p className="">CSS</p>
                  <p className="">JAVA</p>
                  <p className="">REACT</p>
                  <p className="">VUE</p>
                  <p className="">BOOTSTRAP</p>
                  <p className="">NEXT.JS</p>
                </div>
              </div>
              <div className="scroll-element secondary">
                <div className="grid grid-cols-7 mx-8 scroll-element items-center text-zinc-400 text-2xl text-center animate-secondary">
                  <p className="">HTML</p>
                  <p className="">CSS</p>
                  <p className="">JAVA</p>
                  <p className="">REACT</p>
                  <p className="">VUE</p>
                  <p className="">BOOTSTRAP</p>
                  <p className="">NEXT.JS</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <h1 className="text-white text-3xl mb-6 mx-6">Experience 🎯</h1>
        <dl className="grid max-w-7xl mx-6 grid-cols-1  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {experience.map((ex) => (
            <div
              key={ex.id}
              className="relative pl-16 p-6 bg-zinc-900/80  rounded-2xl"
            >
              <dt className="text-base font-medium leading-8 text-gray-300 ">
                <div className="absolute left-2 top-8 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <ex.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {ex.name}
              </dt>
              <dt className="font-medium text-indigo-500 sm:text-md leading-tight  sm:leading-tight  md:leading-tight">
                {ex.project}
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-500 ">
                {ex.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div />
    </div>
  );
}

export default About;
