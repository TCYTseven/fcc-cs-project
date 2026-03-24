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
        Family and Community Services of Somerset County (FCSSC) believes
        everyone deserves quality mental health and substance use support,
        regardless of income. Our nonprofit model, experienced clinicians, and
        community partnerships are built around that promise.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Licensed therapists and credentialed addiction professionals</li>
        <li>Individual, family, and group options tailored to your goals</li>
        <li>Commitment to serving clients regardless of ability to pay</li>
        <li>Longstanding ties to Somerset County schools, employers, and peers</li>
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
