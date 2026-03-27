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
        Monetary donations are always welcome. This is the quickest and most
        direct way to assist FCSSC. We accept checks and all major credit cards.
        When you give to {org.shortName}, you help neighbors access therapy and
        addiction services regardless of ability to pay.
      </p>
      <p>
        Prefer to mail a check? Send it to {org.street}, {org.cityLine}.
        Please include a note if your gift is in honor or memory of someone
        special. For questions, call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>
        .
      </p>
      <h2 className="text-xl font-bold text-[#1a1a1a]">Leave a Legacy — Wills and Bequests</h2>
      <p>
        You can memorialize your commitment to the community and Family &amp;
        Community Services of Somerset County by remembering us in your will.
        Contact your attorney to make arrangements for a donation to Family
        &amp; Community Services of Somerset County from your estate.
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
