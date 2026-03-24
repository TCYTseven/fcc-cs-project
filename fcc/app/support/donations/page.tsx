import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org } from "@/lib/org";
import { supportNav } from "@/lib/section-nav";

export default function DonationsPage() {
  return (
    <SubpageShell
      title="Donations"
      subtitle="Every gift strengthens counseling, recovery, and outreach in Somerset County."
      sectionLinks={supportNav}
    >
      <p>
        When you give to {org.shortName}, you help neighbors access therapy and
        addiction services regardless of ability to pay. Online giving, checks,
        and tribute gifts will be configured on this site; for now you may call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>{" "}
        to discuss donation options.
      </p>
      <p>
        Prefer to mail a check? Send it to {org.street}, {org.cityLine}.
        Please include a note if your gift is in honor or memory of someone
        special.
      </p>
      <p>
        <Link href="/support/corporate-matching" className="font-semibold text-[#1a3683]">
          Corporate matching
        </Link>
        {" · "}
        <Link href="/support/crypto" className="font-semibold text-[#1a3683]">
          Cryptocurrency
        </Link>
      </p>
    </SubpageShell>
  );
}
