import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org } from "@/lib/org";
import { contactNav } from "@/lib/section-nav";

export default function AppointmentPage() {
  return (
    <SubpageShell
      title="Request an Appointment"
      subtitle="Take the first step toward counseling or addiction services."
      sectionLinks={contactNav}
    >
      <p>
        New clients are welcome. When our online scheduling form is available,
        you will complete it here. Until then, please call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>{" "}
        during business hours and our staff will help you find the right
        program and clinician.
      </p>
      <p>
        If you are in crisis, call 988 (Suicide &amp; Crisis Lifeline) or 911
        for emergencies. FCSSC is not a substitute for emergency services.
      </p>
      <p>
        Learn more about{" "}
        <Link href="/services/mental-health" className="font-semibold text-[#1a3683]">
          mental health
        </Link>{" "}
        and{" "}
        <Link href="/services/addictions" className="font-semibold text-[#1a3683]">
          addictions
        </Link>{" "}
        services before your visit.
      </p>
    </SubpageShell>
  );
}
