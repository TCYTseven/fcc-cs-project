import Link from "next/link";
import { org } from "@/lib/org";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/services", label: "Services" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
] as const;

const footerDeepLinks = [
  { href: "/about/why-choose", label: "Why Choose FCSSC?" },
  { href: "/events/comedy-night", label: "Comedy Night" },
  { href: "/events/wellness-2025", label: "Wellness 5K" },
  { href: "/events/photos", label: "Event Photos" },
  { href: "/services/mental-health", label: "Mental Health" },
  { href: "/services/addictions", label: "Addictions" },
  { href: "/support/donations", label: "Donations" },
  { href: "/support/corporate-matching", label: "Corporate Matching" },
  { href: "/contact/appointment", label: "Request Appointment" },
  { href: "/contact/employment", label: "Careers" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#fafafa] px-6 py-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <p className="font-semibold text-[#1a1a1a]">{org.name}</p>
            <p className="mt-2 text-sm text-gray-600">
              {org.street}, {org.cityLine}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              <a
                href={`tel:${org.phone.replace(/-/g, "")}`}
                className="text-[#1a3683] hover:underline"
              >
                {org.phone}
              </a>
              {" · "}
              <span className="text-gray-500">Fax {org.fax}</span>
            </p>
            <p className="mt-2 text-sm text-gray-600">{org.tagline}</p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700"
            aria-label="Footer"
          >
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-[#1a3683]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/support/donations"
              className="font-medium text-[#1a3683] transition-colors hover:underline"
            >
              Donate
            </Link>
          </nav>
        </div>

        <nav
          className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-200 pt-6 text-xs text-gray-600"
          aria-label="Popular pages"
        >
          {footerDeepLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-[#1a3683]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {org.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
