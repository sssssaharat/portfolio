import React from "react";
import Image from "next/image";

export function Work() {
  return (
    <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-28">
      <div className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-7xl sm:text-[120px] md:text-[150px] lg:text-[200px]  font-medium leading-tight text-transparent sm:leading-tight  md:leading-tight">
        Let me show you
      </div>
      {/* Work1 */}
      <div className="mx-auto max-w-7xl mt-64 py-16 sm:px-12 sm:py-2 lg:px-18 ">
        <div className="relative mx-6 rounded-2xl isolate overflow-hidden bg-lime-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#f9bc2c" />
                <stop offset={1} stopColor="#fff95b" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trading.
              <br />
              knowledge .
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              It is a collection of knowledge about trading, strategies, and
              various techniques of one&apos;s own, compiled into a website.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://miro.com/app/board/uXjVMojhhbQ=/?share_link_id=319717629503"
                target="_blank"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Miro
              </a>
              <p className="text-3xl">🖥️</p>
              <a
                href="https://siangusaisiang.netlify.app/"
                target="_blank"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See Case
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 rounded-xl">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none "
              src="/asset/work1.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
      {/* Work2 */}
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-8 lg:px-8 ">
        <div className="relative mx-6 rounded-2xl isolate overflow-hidden bg-zinc-900/60 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#7)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="7">
                <stop stopColor="#aefb2a" />
                <stop offset={1} stopColor="#f3f520" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dashboard
              <br />
              Trading Journal{" "}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              It pulls trading backtesting data from Google sheets, converts it
              to API, and then pulls it and displays it in Dashboard format.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://miro.com/app/board/uXjVKd93teU=/?share_link_id=198046809194"
                target="_blank"
                className="rounded-md bg-lime-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Miro
              </a>
              <p className="text-3xl">🖥️</p>
              <a
                href="https://analyticstrade.netlify.app/"
                target="_blank"
                className="rounded-md bg-lime-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See Case
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 ">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none "
              src="/asset/work2.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
