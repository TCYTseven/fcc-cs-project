"use client";

import Link from "next/link";
import { useState } from "react";
// comment
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          FCSSC
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>

          {/* ABOUT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="hover:text-blue-600">
              About Us
            </button>

            {aboutOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded p-2 w-48">
                <Link href="/about" className="block px-3 py-2 hover:bg-gray-100">
                  Why Choose FCSSC?
                </Link>
                <Link href="/team" className="block px-3 py-2 hover:bg-gray-100">
                  Our Team
                </Link>
                <Link href="/board" className="block px-3 py-2 hover:bg-gray-100">
                  Board of Trustees
                </Link>
              </div>
            )}
          </div>

          <Link href="/events">Events</Link>
          <Link href="/services">Services</Link>
          <Link href="/support">Support Us</Link>
          <Link href="/contact">Contact</Link>

          {/* LANGUAGE BUTTON */}
          <Link
            href="/es"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Español
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          <Link href="/">Home</Link>

          {/* MOBILE ABOUT DROPDOWN */}
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="text-left"
          >
            About Us
          </button>

          {aboutOpen && (
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/about">Why Choose FCSSC?</Link>
              <Link href="/team">Our Team</Link>
              <Link href="/board">Board of Trustees</Link>
            </div>
          )}

          <Link href="/events">Events</Link>
          <Link href="/services">Services</Link>
          <Link href="/support">Support Us</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/es"
            className="bg-blue-600 text-white px-3 py-1 rounded w-fit"
          >
            Español
          </Link>
        </div>
      )}
    </nav>
  );
}