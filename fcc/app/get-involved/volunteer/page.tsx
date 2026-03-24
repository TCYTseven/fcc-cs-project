import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";

export default function VolunteerPage() {
  return (
    <SubpageShell
      title="Volunteer"
      subtitle="Help at events, share your skills, or explore board service."
    >
      <p>
        Volunteers power fundraisers, community outreach, and special projects
        at FCSSC. Whether you can offer a few hours at an event or ongoing
        pro-bono expertise, we would love to hear from you.
      </p>
      <p>
        A formal sign-up form will be linked here. For now, call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          732-356-1082
        </a>{" "}
        or email through our{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          contact page
        </Link>
        .
      </p>
      <p>
        <Link href="/events" className="font-semibold text-[#1a3683]">
          View upcoming events
        </Link>
      </p>
    </SubpageShell>
  );
}
