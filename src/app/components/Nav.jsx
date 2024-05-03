"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMiniBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <div className="mx-auto max-w-7xl ">
      <nav className="relative top-5 z-10 ">
        {/* windows */}
        <div className="hidden md:flex items-center justify-between h-24 mx-6">
          <Link href="/" className="text-2xl text-gray-200 font-semibold">
            <Image
              src="/asset/Hompage.png"
              alt="Logo"
              width={width < 1024 ? "150" : "250"}
              height={width < 1024 ? "45" : "74"}
              className="h-24 w-24 hover:animate-spin rounded-full drop-shadow-xl "
            />
          </Link>
          <div className="flex space-x-4 text-gray-200 bg-zinc-500 backdrop-filter backdrop-blur-lg bg-opacity-30 border-t border-zinc-700 rounded-full p-4">
            <Link href="/work" className="hover:bg-zinc-700 rounded-full p-3">
              Work
            </Link>

            <Link href="/about" className="hover:bg-zinc-700 rounded-full p-3">
              About
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-5 py-4 text-md font-medium text-zinc-900 bg-lime-400 ring-1 ring-inset ring-zinc-800 hover:bg-white hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden justify-between px-6 h-24">
          <Link href="/" className="text-2xl text-gray-200 font-semibold">
            <Image
              src="/asset/Hompage.png"
              alt="Logo"
              width={width < 1024 ? "150" : "250"}
              height={width < 1024 ? "45" : "74"}
              className="h-24 w-24 hover:animate-spin rounded-full drop-shadow-xl "
            />
          </Link>
          <button
            type="button"
            className=" items-center rounded-md text-gray-400 hover:text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiMiniBars3BottomRight
              className="h-8 w-8 flex"
              aria-hidden="true"
            />
          </button>
        </div>
        {/* Dailog */}
        <Dialog
          as="div"
          className="lg:hidden "
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-950 px-6 py-12 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-full p-2.5 text-gray-400 hover:bg-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiMiniXMark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col mt-6 gap-y-5">
              <Link
                href="/work"
                className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50 hover:text-gray-900"
              >
                Work
              </Link>

              <Link
                href="/about"
                className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </div>
  );
}

export default Nav;
