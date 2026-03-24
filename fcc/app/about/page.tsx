import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org, missionIntro } from "@/lib/org";
import { aboutNav } from "@/lib/section-nav";

export default function AboutPage() {
  return (
    <SubpageShell
      title="About Us"
      subtitle={org.tagline}
      sectionLinks={aboutNav}
    >
      <p className="text-lg font-semibold text-[#1a1a1a]">{org.name}</p>
      <p>
        {org.street}
        <br />
        {org.cityLine}
        <br />
        Phone: {org.phone}
        <br />
        Fax: {org.fax}
      </p>
      {missionIntro.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
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
