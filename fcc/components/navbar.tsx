"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    dropdown: [
      { href: "/about/why-choose", label: "Why Choose FCSSC?" },
      { href: "/about/team", label: "Our Team" },
      { href: "/about/board", label: "Board of Trustees" },
    ],
  },
  {
    href: "/events",
    label: "Events",
    dropdown: [
      { href: "/events/wellness-2025", label: "Taking Strides Towards Wellness 2025" },
      { href: "/events/photos", label: "Event Photos" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/addictions", label: "Addictions Program" },
      { href: "/services/mental-health", label: "Mental Health Program" },
    ],
  },
  {
    href: "/support",
    label: "Support Us",
    dropdown: [
      { href: "/support/donations", label: "Donations" },
      { href: "/support/corporate-matching", label: "Corporate Matching" },
      { href: "/support/crypto", label: "Crypto" },
      { href: "/support/services-to-business", label: "Services to Business" },
    ],
  },
  {
    href: "/contact",
    label: "Contact Us",
    dropdown: [
      { href: "/contact/employment", label: "Employment Opportunities" },
      { href: "/contact/appointment", label: "Request an Appointment" },
    ],
  },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-12 h-16 md:h-[4.5rem] bg-white/80 backdrop-blur-xl border-b border-[#E5E5E5]/60 shadow-sm">
        <Link href="/" className="text-[#262626] font-bold text-lg tracking-tight hover:text-[#E65100] transition-colors">
          FCSSC
        </Link>

        {/* Desktop nav - right aligned */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              {item.dropdown ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-3 text-sm font-medium text-[#4A4A4A] hover:text-[#E65100] transition-colors rounded-lg ${
                      openDropdown === item.label ? "text-[#E65100]" : ""
                    }`}
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div
                    className={`absolute right-0 top-full pt-1 transition-opacity duration-200 ${
                      openDropdown === item.label ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="min-w-[220px] rounded-xl bg-white/95 backdrop-blur-xl border border-[#E5E5E5] shadow-lg py-2">
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.href}
                          href={drop.href}
                          className="block px-4 py-2.5 text-sm text-[#4A4A4A] hover:bg-[#FFF3E0] hover:text-[#E65100] transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-[#4A4A4A] hover:text-[#E65100] transition-colors rounded-lg"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-[#262626] hover:bg-[#F8F8F8] rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[#E5E5E5] shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="py-4 px-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-[#262626] font-medium rounded-lg hover:bg-[#FFF3E0] hover:text-[#E65100]"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul className="ml-4 mt-1 space-y-1 border-l-2 border-[#FFB74D]/50 pl-4">
                    {item.dropdown.map((drop) => (
                      <li key={drop.href}>
                        <Link
                          href={drop.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-[#4A4A4A] hover:text-[#E65100]"
                        >
                          {drop.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
