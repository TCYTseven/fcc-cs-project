import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/services", label: "Services" },
  { href: "/support", label: "Support Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  return (
    <nav className="bg-black px-6 py-4">
      <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
