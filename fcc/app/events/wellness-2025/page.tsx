import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { eventsNav } from "@/lib/section-nav";

export default function Wellness2025Page() {
  return (
    <SubpageShell
      title="Taking Strides Towards Wellness 2025"
      subtitle="5K run / walk · Saturday, October 18, 2025"
      sectionLinks={eventsNav}
    >
      <p>
        Lace up for our annual wellness 5K supporting Family and Community
        Services of Somerset County. Friends, families, and teams are welcome
        to walk or run in celebration of recovery, mental health, and community
        care.
      </p>
      <p>
        Registration, route maps, and sponsorship opportunities will be listed
        here. Check back soon or{" "}
        <Link href="/contact">contact us</Link> to get involved.
      </p>
      <p>
        <Link href="/events" className="text-[#1a3683]">
          ← All events
        </Link>
      </p>
    </SubpageShell>
  );
}
