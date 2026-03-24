import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org } from "@/lib/org";
import { contactNav } from "@/lib/section-nav";

export default function EmploymentPage() {
  return (
    <SubpageShell
      title="Employment Opportunities"
      subtitle="Join a mission-driven team serving Somerset County."
      sectionLinks={contactNav}
    >
      <p>
        FCSSC hires licensed clinicians, support staff, and administrative
        professionals who share our commitment to accessible behavioral health
        care. Open positions, benefits summaries, and application instructions
        will be posted here as they become available.
      </p>
      <p>
        To express general interest, send your resume and cover letter to our
        main office or call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>
        .
      </p>
      <p>
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          ← Contact overview
        </Link>
      </p>
    </SubpageShell>
  );
}
