import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { aboutNav } from "@/lib/section-nav";

export default function BoardPage() {
  return (
    <SubpageShell
      title="Board of Trustees"
      subtitle="Volunteer leadership guiding FCSSC's mission and stewardship."
      sectionLinks={aboutNav}
    >
      <p>
        Our Board of Trustees donates time and expertise to ensure FCSSC
        remains accountable, sustainable, and focused on community need. Board
        members partner with executive leadership on strategy, fundraising, and
        policy.
      </p>
      <p>
        A current roster of trustees will be published here. Interested in board
        service? Mention your background when you{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          contact us
        </Link>{" "}
        or reach out through{" "}
        <Link
          href="/get-involved/partnership"
          className="font-semibold text-[#1a3683]"
        >
          partnership
        </Link>{" "}
        inquiries.
      </p>
    </SubpageShell>
  );
}
