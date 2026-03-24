import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { eventsNav } from "@/lib/section-nav";

export default function ComedyNightPage() {
  return (
    <SubpageShell
      title="Comedy Night & Silent Auction"
      subtitle="Saturday, November 11, 2025 · Details to be announced."
      sectionLinks={eventsNav}
    >
      <p>
        Join us for an evening of laughter and community spirit, featuring a
        silent auction to support FCSSC programs. Proceeds help us provide
        mental health and substance use services regardless of a client&apos;s
        ability to pay.
      </p>
      <p>
        Ticket sales, venue, and schedule will be posted here as they are
        confirmed. For questions in the meantime, please{" "}
        <Link href="/contact">contact our office</Link>.
      </p>
      <p>
        <Link href="/events" className="text-[#1a3683]">
          ← All events
        </Link>
      </p>
    </SubpageShell>
  );
}
