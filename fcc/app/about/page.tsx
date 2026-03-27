import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org } from "@/lib/org";
import { aboutNav } from "@/lib/section-nav";

export default function AboutPage() {
  return (
    <SubpageShell
      title="About Us"
      subtitle={org.tagline}
      sectionLinks={aboutNav}
    >
      <p>
        Family &amp; Community Services of Somerset County is a 501(c)(3)
        non-profit community agency that provides professional and affordable
        mental health, family, and addictions counseling services to children,
        adolescents, adults, and families in need. We provide support services
        to address each of life&apos;s many transitions and problems.
      </p>

      <h2 className="text-xl font-bold text-[#1a1a1a]">History</h2>
      <p>
        FCSSC was established in 1960 as a result of the merging of two older
        agencies—The Community Service Society of Bound Brook, founded in 1908
        as the Welfare Society, and the Family Counseling Service of Somerset
        Hills, established in 1940. Over the years our specific services changed
        as the needs of our community changed, but they were always rooted in
        health and welfare. Despite those service changes, our core mission has
        remained the same.
      </p>

      <h2 className="text-xl font-bold text-[#1a1a1a]">Mission</h2>
      <p>Provide affordable and effective mental health and substance use disorder services.</p>

      <h2 className="text-xl font-bold text-[#1a1a1a]">Vision</h2>
      <p>Enhance the Quality of Life for the Community.</p>

      <h2 className="text-xl font-bold text-[#1a1a1a]">Core Values</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Family:</strong> Inclusive culture and environment</li>
        <li><strong>Community:</strong> Accessible Services for All Demographics</li>
        <li><strong>Services:</strong> Deliver care with compassion, integrity, and respect</li>
      </ul>

      <h2 className="text-xl font-bold text-[#1a1a1a]">Our Programs</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <Link href="/services/mental-health" className="font-semibold text-[#1a3683]">
            Individual and Family Mental Health Program
          </Link>{" "}
          – Individual, group, and family counseling to address personal and family issues
        </li>
        <li>
          <Link href="/services/addictions" className="font-semibold text-[#1a3683]">
            Substance Use Disorder Program
          </Link>{" "}
          – Individual and group counseling to address substance use disorder issues
        </li>
        <li>
          <Link href="/support/services-to-business" className="font-semibold text-[#1a3683]">
            Services to Business and Industry
          </Link>{" "}
          – Assistance for companies and their employees with personal and workplace issues
        </li>
      </ul>

      <p>
        <Link href="/services" className="font-semibold text-[#1a3683]">
          Explore our services
        </Link>{" "}
        or{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          contact us
        </Link>
        .
      </p>
    </SubpageShell>
  );
}
