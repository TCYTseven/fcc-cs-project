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
        We rely on the community and private donations to provide quality and
        vital services to our clients. Who are our clients? They are your
        friends, neighbors, coworkers, and maybe even family members—the single
        mother trying to help her teenage son, the husband and wife trying to
        hang on to their marriage and family, the woman pinching pennies to buy
        food for her children, the child trying to cope with issues too large
        for anyone, let alone a child. They are regular people trying to survive
        as best they can.
      </p>
      <p>
        We won&apos;t solve all the problems in our community, but we can help
        the clients we currently touch. Most of these clients have nowhere else
        to go. Please help us continue to help those who want to be healthy,
        productive members of society.
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
