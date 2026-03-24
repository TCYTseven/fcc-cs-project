import Link from "next/link";
import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder-image";

const aboutSubLinks = [
  { href: "/about/why-choose", label: "Why Choose FCSSC?" },
  { href: "/about/team", label: "Our Team" },
  { href: "/about/board", label: "Board of Trustees" },
] as const;

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/services", label: "Services" },
  { href: "/support", label: "Support Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  return (
    <header className="relative z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex min-h-20 flex-col gap-4 py-4 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
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
            <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
              <Link
                href="/es"
                className="rounded bg-[#2B3A8C] px-3 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#202b69] sm:px-4 sm:py-2.5 sm:text-[15px]"
              >
                Español
              </Link>
              <Link
                href="/support/donations"
                className="rounded bg-[#F58220] px-3 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#d9711a] sm:px-4 sm:py-2.5 sm:text-[15px]"
              >
                Donate
              </Link>
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-gray-100 pt-3 text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px] lg:flex-1 lg:border-0 lg:pt-0"
            aria-label="Main"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#2B3A8C]"
            >
              Home
            </Link>

            <div className="relative lg:static">
              <div className="group relative inline-flex flex-col items-center lg:inline-flex">
                <Link
                  href="/about"
                  className="rounded px-2 py-1 transition-colors hover:text-[#2B3A8C] lg:group-hover:bg-neutral-100 lg:group-hover:text-[#404040] lg:group-focus-within:bg-neutral-100 lg:group-focus-within:text-[#404040]"
                  aria-haspopup="true"
                  aria-controls="about-submenu"
                >
                  About Us
                </Link>
                <div
                  id="about-submenu"
                  className="w-full pt-2 lg:absolute lg:left-1/2 lg:top-full lg:z-50 lg:w-max lg:-translate-x-1/2 lg:pt-1 lg:invisible lg:opacity-0 lg:transition-[opacity,visibility] lg:duration-150 lg:group-hover:visible lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:opacity-100"
                  role="menu"
                  aria-label="About Us"
                >
                  <ul className="w-full max-w-sm overflow-hidden rounded border border-gray-200 bg-neutral-100 py-1 shadow-md lg:w-auto lg:min-w-58">
                    {aboutSubLinks.map(({ href, label }, index) => (
                      <li
                        key={href}
                        role="none"
                        className={
                          index < aboutSubLinks.length - 1
                            ? "border-b border-gray-200/80"
                            : ""
                        }
                      >
                        <Link
                          href={href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-[14px] font-semibold text-[#404040] transition-colors hover:bg-neutral-200/80 hover:text-[#1a1a1a] sm:text-[15px]"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-[#2B3A8C]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 sm:gap-4 lg:flex">
            <Link
              href="/es"
              className="rounded bg-[#2B3A8C] px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#202b69] sm:px-6"
            >
              Español
            </Link>
            <Link
              href="/support/donations"
              className="rounded bg-[#F58220] px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#d9711a] sm:px-6"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
