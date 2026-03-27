import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { aboutNav } from "@/lib/section-nav";

export default function WhyChoosePage() {
  return (
    <SubpageShell
      title="Why Choose FCSSC?"
      subtitle="Accessible care rooted in Somerset County since 1960."
      sectionLinks={aboutNav}
    >
      <p>
        Here are just a few reasons to make Family and Community Services of
        Somerset County your choice for counseling services:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Quick response to crisis</li>
        <li>Sliding scale fee to individuals and families</li>
        <li>Affordable rates for businesses</li>
        <li>State-licensed, highly-qualified therapists</li>
        <li>We&apos;re conveniently located</li>
        <li>Our offices are comfortable and non-institutional</li>
        <li>We have more than half a century of experience serving the public</li>
      </ul>
      <p>
        Ready to take the next step?{" "}
        <Link href="/contact/appointment" className="font-semibold text-[#1a3683]">
          Request an appointment
        </Link>{" "}
        or call us at{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          732-356-1082
        </a>
        .
      </p>
    </SubpageShell>
  );
}
