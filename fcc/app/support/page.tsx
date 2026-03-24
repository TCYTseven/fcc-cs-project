import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { supportNav } from "@/lib/section-nav";

const highlights = [
  {
    href: "/support/donations",
    title: "Donations",
    text: "One-time and recurring gifts keep counseling and recovery services available.",
  },
  {
    href: "/support/corporate-matching",
    title: "Corporate Matching",
    text: "Double your impact through employer match programs.",
  },
  {
    href: "/support/crypto",
    title: "Crypto",
    text: "Donate digital assets where permitted and supported.",
  },
  {
    href: "/support/services-to-business",
    title: "Services to Business",
    text: "Partner with FCSSC for workplace wellness and community impact.",
  },
] as const;

export default function SupportPage() {
  return (
    <SubpageShell
      title="Support Us"
      subtitle="Your generosity sustains mental health and substance use care in Somerset County."
      sectionLinks={supportNav}
    >
      <p>
        FCSSC has served the community since 1960 thanks to donors, volunteers,
        and partners who believe care should not depend on wealth. Explore the
        ways you can help below.
      </p>
      <ul className="space-y-6">
        {highlights.map((item) => (
          <li key={item.href}>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              <Link href={item.href} className="text-[#1a3683] hover:underline">
                {item.title}
              </Link>
            </h2>
            <p className="mt-1">{item.text}</p>
          </li>
        ))}
      </ul>
      <p>
        Want to volunteer or host an event? See{" "}
        <Link href="/get-involved/volunteer" className="font-semibold text-[#1a3683]">
          Volunteer
        </Link>{" "}
        and{" "}
        <Link href="/events" className="font-semibold text-[#1a3683]">
          Events
        </Link>
        .
      </p>
    </SubpageShell>
  );
}
