import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";

export default function PartnershipPage() {
  return (
    <SubpageShell
      title="Partnership"
      subtitle="Corporate matching, sponsorships, and joint community initiatives."
    >
      <p>
        Organizations partner with FCSSC to expand access to care and to align
        with employee wellness goals. We can explore event sponsorships,
        workplace education, grant collaborations, and more.
      </p>
      <p>
        Start a conversation through{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          Contact Us
        </Link>{" "}
        or learn about{" "}
        <Link href="/support/corporate-matching" className="font-semibold text-[#1a3683]">
          corporate matching
        </Link>{" "}
        and{" "}
        <Link href="/support/services-to-business" className="font-semibold text-[#1a3683]">
          services to business
        </Link>
        .
      </p>
    </SubpageShell>
  );
}
