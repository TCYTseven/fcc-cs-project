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
        To request an appointment, please call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>{" "}
        during normal business hours: Monday through Friday, 9:00 AM to 6:00 PM.
      </p>
      <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
        <strong>Please note:</strong> There are often waiting lists to be seen
        for an initial assessment. Making a request does not guarantee that we
        will be able to offer services. You will be contacted as soon as
        possible with more information.
      </div>
      <p className="font-semibold text-[#1a1a1a]">What to expect:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Choose between an Addiction Assessment or Mental Health Assessment</li>
        <li>Share your availability (days and times that work for you)</li>
        <li>Let us know who referred you and a brief summary of your needs</li>
        <li>Provide insurance or payment information so we can process your request quickly</li>
      </ul>
      <p>
        If you are in crisis, call <strong>988</strong> (Suicide &amp; Crisis
        Lifeline) or <strong>911</strong> for emergencies. FCSSC is not a
        substitute for emergency services.
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
