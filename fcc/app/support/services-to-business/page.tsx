import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { supportNav } from "@/lib/section-nav";

export default function ServicesToBusinessPage() {
  return (
    <SubpageShell
      title="Services to Business"
      subtitle="Workplace wellness, referrals, and partnership with Somerset County employers."
      sectionLinks={supportNav}
    >
      <p>
        FCSSC collaborates with businesses to support employee mental health
        and substance use needs. We can help your team understand how to access
        care, reduce stigma, and connect with local resources.
      </p>
      <p>
        For sponsorship, event partnerships, and structured programs, see also{" "}
        <Link href="/get-involved/partnership" className="font-semibold text-[#1a3683]">
          Partnership
        </Link>{" "}
        and{" "}
        <Link href="/services/business" className="font-semibold text-[#1a3683]">
          Services to Business (clinical overview)
        </Link>
        .
      </p>
    </SubpageShell>
  );
}
