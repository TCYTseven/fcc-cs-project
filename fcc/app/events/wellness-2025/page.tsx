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
        Lace up for our annual wellness 5K — &ldquo;Don&apos;t Fall, Let&apos;s
        Run!&rdquo; — supporting Family and Community Services of Somerset County.
        Friends, families, and teams are welcome to walk or run in celebration
        of recovery, mental health, and community care.
      </p>
      <p>
        Register now through RunSignUp. Sponsorship opportunities are also
        available.
      </p>
      <p>
        <a
          href="https://runsignup.com/Race/NJ/Bridgewater/FamilyServicesDontFallLetsRun5k"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-[#F58220] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#d9711a]"
        >
          Register on RunSignUp →
        </a>
      </p>
      <p>
        Questions? <Link href="/contact" className="font-semibold text-[#1a3683]">Contact us</Link> to get involved.
      </p>
      <p>
        <Link href="/events" className="text-[#1a3683]">
          ← All events
        </Link>
      </p>
    </SubpageShell>
  );
}
