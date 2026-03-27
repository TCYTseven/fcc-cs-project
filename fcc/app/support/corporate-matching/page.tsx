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
        Many companies have matching programs for employees who donate to
        charitable organizations. This is a great way to make your donation
        dollars go even further!
      </p>
      <p>
        Each company is different with their corporate matching programs. Please
        check with your Human Resources staff or department to find out about
        your company&apos;s specific program.
      </p>
      <p>
        Feel free to reach out to Richard Schumann at{" "}
        <a
          href="mailto:rschumann@fcssomerset.org"
          className="font-semibold text-[#1a3683]"
        >
          rschumann@fcssomerset.org
        </a>{" "}
        to discuss your corporation&apos;s matching gift today!
      </p>
    </SubpageShell>
  );
}
