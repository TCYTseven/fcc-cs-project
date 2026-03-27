import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { servicesNav } from "@/lib/section-nav";

const programs = [
  {
    href: "/services/mental-health",
    title: "Individual and Family Mental Health Program",
    blurb:
      "Individual, group, and family counseling to address personal and family issues. Licensed by the State of New Jersey, Department of Human Services Office of Licensing.",
  },
  {
    href: "/services/addictions",
    title: "Addictions Program",
    blurb:
      "Addictive behaviors including alcohol and other drug abuse, compulsive gambling, and compulsive spending/debiting. Licensed by the State of New Jersey, Department of Addiction Services.",
  },
  {
    href: "/services/community-issues",
    title: "Community Services Programs",
    blurb:
      "Areas of service include stress management, single parenting, domestic violence, and elderly care.",
  },
  {
    href: "/support/services-to-business",
    title: "Services to Business and Industry",
    blurb:
      "Assistance for companies and their employees with personal and workplace issues.",
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
        At Family and Community Services of Somerset County, we provide support
        services to address each of life&apos;s many transitions and problems.
        Over the years we have specialized in providing support, guidance, and
        counseling to individuals and families in need.
      </p>
      <p>
        As a non-profit, community agency, we offer counseling services to
        individuals and families based on a sliding scale and affordable rates
        to businesses. Some of our community programs are offered at no cost
        based on the grants we receive. We take pride in serving everyone in
        our community without regard to ability to pay.
      </p>
      <p className="font-semibold text-[#1a3683]">
        Now offering services via Telehealth—via video chat and phone!
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
      <p>
        Call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          732-356-1082
        </a>{" "}
        to discuss which service line fits you best, or{" "}
        <Link href="/contact/appointment" className="font-semibold text-[#1a3683]">
          request an appointment online
        </Link>
        .
      </p>
    </SubpageShell>
  );
}
