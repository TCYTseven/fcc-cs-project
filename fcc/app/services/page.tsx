import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { servicesNav } from "@/lib/section-nav";

const programs = [
  {
    href: "/services/mental-health",
    title: "Mental Health Program",
    blurb:
      "Individual, family, and group counseling with licensed therapists.",
  },
  {
    href: "/services/addictions",
    title: "Addictions Program",
    blurb:
      "Outpatient substance use disorder services in a supportive environment.",
  },
] as const;

export default function ServicesPage() {
  return (
    <SubpageShell
      title="Services"
      subtitle="Mental health and substance use care for our community."
      sectionLinks={servicesNav}
    >
      <p>
        FCSSC provides comprehensive behavioral health services to all who seek
        help, regardless of financial means. Explore our core programs below or
        call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          732-356-1082
        </a>{" "}
        to discuss which service line fits you best.
      </p>
      <ul className="space-y-8">
        {programs.map((program) => (
          <li
            key={program.href}
            className="border-b border-gray-100 pb-8 last:border-0"
          >
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              <Link
                href={program.href}
                className="text-[#1a3683] hover:underline"
              >
                {program.title}
              </Link>
            </h2>
            <p className="mt-2">{program.blurb}</p>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600">
        Related:{" "}
        <Link href="/services/substance-use" className="font-semibold text-[#1a3683]">
          Substance use overview
        </Link>
        ,{" "}
        <Link href="/services/community-issues" className="font-semibold text-[#1a3683]">
          Community issues
        </Link>
        ,{" "}
        <Link href="/services/business" className="font-semibold text-[#1a3683]">
          Services to business
        </Link>
        .
      </p>
    </SubpageShell>
  );
}
