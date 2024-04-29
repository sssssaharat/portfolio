import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl isolate px-6">
      <div className="mx-auto max-w-7xl py-16 sm:py-12 ">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 border-b-2 border-zinc-800 p-6">
          <div className="text-3xl py-6 text-zinc-500 font-light sm:text-4xl leading-tight text-transparent sm:leading-tight  md:leading-tight">
            Hope we can work together. 🙏
          </div>

          <div className="grid grid-cols-2 justify-between gap-4">
            <div>
              <div className="mb-3 font-medium opacity-40 text-white">page</div>
              <div className="py-4">
                <Link href="/work" className="hover:text-zinc-700 text-white ">
                  Work
                </Link>
              </div>
              <div className="pb-4">
                <Link href="/about" className="hover:text-zinc-700 text-white">
                  About
                </Link>
              </div>
              <Link href="/contact" className="hover:text-zinc-700 text-white">
                Contact
              </Link>
            </div>

            <div>
              <div className="mb-3 font-medium opacity-40 text-white">
                socials
              </div>
              <a
                href="https://www.instagram.com/ssssssssssaharat/"
                className="py-4 hover:text-zinc-700 text-white "
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
