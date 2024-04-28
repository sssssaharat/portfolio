import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <nav className="sticky top-5 z-10 ">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="text-2xl text-gray-200 font-semibold">
            <img
              className="h-24 w-24 hover:animate-spin rounded-full drop-shadow-xl "
              src="asset/Hompage.png"
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
              href="contact"
              className="inline-flex items-center rounded-full px-5 py-4 text-md font-medium text-zinc-200 ring-1 ring-inset ring-zinc-800 hover:bg-zinc-900/85"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
