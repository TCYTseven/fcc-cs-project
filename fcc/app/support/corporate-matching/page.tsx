import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { supportNav } from "@/lib/section-nav";

export default function CorporateMatchingPage() {
  return (
    <SubpageShell
      title="Corporate Matching"
      subtitle="Multiply employee and corporate gifts through your workplace program."
      sectionLinks={supportNav}
    >
      <p>
        Many employers match charitable donations made by employees, retirees,
        or spouses. If your company offers a matching gift program, you may be
        able to double or triple the impact of your contribution to FCSSC.
      </p>
      <p>
        Check with your HR or community relations team for forms and guidelines.
        Our development staff can provide tax ID and acknowledgment details on
        request—call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          732-356-1082
        </a>{" "}
        or use the{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          contact form
        </Link>{" "}
        when available.
      </p>
    </SubpageShell>
  );
}
