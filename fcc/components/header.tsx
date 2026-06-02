"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder-image";

const aboutSubLinks = [
  { href: "/about/why-choose", label: "Why Choose FCSSC?" },
  { href: "/about/team", label: "Our Team" },
  { href: "/about/board", label: "Board of Trustees" },
] as const;

const eventsSubLinks = [
  { href: "/events/wellness-2025", label: "Taking Strides Toward Wellness 2025" },
  { href: "/events/photos", label: "Event Photos" },
] as const;

const servicesSubLinks = [
  { href: "/services/addictions", label: "Addictions Program" },
  { href: "/services/mental-health", label: "Mental Health Program" },
] as const;

const supportSubLinks = [
  { href: "/support/donations", label: "Donations" },
  { href: "/support/corporate-matching", label: "Corporate Matching" },
  { href: "/support/crypto", label: "Crypto" },
  { href: "/support/services-to-businesses", label: "Services To Businesses" },
] as const;

const contactSubLinks = [
  { href: "/contact/employment", label: "Employment Opportunities" },
  { href: "/contact/appointment", label: "Request an Appointment" },
] as const;

interface DropdownProps {
  label: string;
  href: string;
  links: readonly { href: string; label: string }[];
  closeMenu?: () => void;
}

function DesktopDropdown({ label, href, links }: Omit<DropdownProps, "closeMenu">) {
  return (
    <div className="group relative inline-flex flex-col items-center">
      <Link
        href={href}
        className="flex items-center gap-1 rounded px-2 py-1 transition-colors hover:text-[#2B3A8C]"
      >
        {label}
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-max min-w-52 -translate-x-1/2 pt-1 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="overflow-hidden rounded border border-gray-200 bg-white py-1 shadow-lg">
          {links.map(({ href: subHref, label: subLabel }, i) => (
            <li
              key={subHref}
              className={i < links.length - 1 ? "border-b border-gray-100" : ""}
            >
              <Link
                href={subHref}
                className="block px-4 py-2.5 text-[14px] font-medium text-[#404040] transition-colors hover:bg-gray-50 hover:text-[#2B3A8C]"
              >
                {subLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileAccordion({ label, href, links, closeMenu }: DropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link href={href} onClick={closeMenu} className="py-2 font-semibold text-[#1a1a1a]">
          {label}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-gray-500"
          aria-label={`Toggle ${label} submenu`}
        >
          <svg
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {open && (
        <ul className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-gray-100 pl-3">
          {links.map(({ href: subHref, label: subLabel }) => (
            <li key={subHref}>
              <Link
                href={subHref}
                onClick={closeMenu}
                className="block py-2 text-sm text-[#404040] transition-colors hover:text-[#2B3A8C]"
              >
                {subLabel}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className="relative z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex h-[90px] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <Image
                src={PLACEHOLDER_IMAGE}
                alt="FCSSC Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">
              FCSSC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-1 text-[14px] font-semibold text-[#1a1a1a] lg:flex xl:gap-2 xl:text-[15px]"
            aria-label="Main"
          >
            <Link href="/" className="rounded px-2 py-1 transition-colors hover:text-[#2B3A8C]">
              Home
            </Link>
            <DesktopDropdown label="About Us" href="/about" links={aboutSubLinks} />
            <DesktopDropdown label="Events" href="/events" links={eventsSubLinks} />
            <DesktopDropdown label="Services" href="/services" links={servicesSubLinks} />
            <DesktopDropdown label="Support Us" href="/support" links={supportSubLinks} />
            <DesktopDropdown label="Contact Us" href="/contact" links={contactSubLinks} />
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link
              href="/es"
              className="rounded-xl bg-[#2B3A8C] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#202b69] xl:text-[15px]"
            >
              Español
            </Link>
            <Link
              href="/support/donations"
              className="rounded-xl bg-[#F58220] px-5 py-2.5 text-[14px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#d9711a] xl:text-[15px]"
            >
              Donate
            </Link>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/support/donations"
              className="rounded-xl bg-[#F58220] px-3 py-2 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#d9711a]"
            >
              Donate
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1 text-[15px] font-semibold text-[#1a1a1a]" aria-label="Mobile">
            <Link href="/" onClick={closeMenu} className="py-2 hover:text-[#2B3A8C]">
              Home
            </Link>
            <MobileAccordion label="About Us" href="/about" links={aboutSubLinks} closeMenu={closeMenu} />
            <MobileAccordion label="Events" href="/events" links={eventsSubLinks} closeMenu={closeMenu} />
            <MobileAccordion label="Services" href="/services" links={servicesSubLinks} closeMenu={closeMenu} />
            <MobileAccordion label="Support Us" href="/support" links={supportSubLinks} closeMenu={closeMenu} />
            <MobileAccordion label="Contact Us" href="/contact" links={contactSubLinks} closeMenu={closeMenu} />
          </nav>
          <div className="mt-5 flex gap-3 border-t border-gray-100 pt-5">
            <Link
              href="/es"
              onClick={closeMenu}
              className="flex-1 rounded-xl bg-[#2B3A8C] py-2.5 text-center text-[14px] font-semibold text-white hover:bg-[#202b69]"
            >
              Español
            </Link>
            <Link
              href="/support/donations"
              onClick={closeMenu}
              className="flex-1 rounded-xl bg-[#F58220] py-2.5 text-center text-[14px] font-semibold text-[#1a1a1a] hover:bg-[#d9711a]"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
