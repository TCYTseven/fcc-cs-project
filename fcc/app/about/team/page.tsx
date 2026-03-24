import { SubpageShell } from "@/components/subpage-shell";
import { aboutNav } from "@/lib/section-nav";

export default function TeamPage() {
  return (
    <SubpageShell
      title="Our Team"
      subtitle="Clinical and administrative staff dedicated to your care."
      sectionLinks={aboutNav}
    >
      <p>
        FCSSC is led by experienced licensed therapists, certified addiction
        professionals, and skilled administrative staff who keep our programs
        running smoothly. Together we provide a welcoming, nonjudgmental
        environment for healing and growth.
      </p>
      <p>
        Staff bios, credentials, and specialty areas from the legacy site will
        be migrated here. For now, please call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          732-356-1082
        </a>{" "}
        if you would like to ask about a specific program or provider.
      </p>
    </SubpageShell>
  );
}
