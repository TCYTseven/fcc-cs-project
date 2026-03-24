import Image from "next/image";
import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder-image";
import { eventsNav } from "@/lib/section-nav";

const placeholderSlots = Array.from({ length: 6 }, (_, i) => i);

export default function EventPhotosPage() {
  return (
    <SubpageShell
      title="Event Photos"
      subtitle="Moments from past fundraisers, walks, and community gatherings."
      sectionLinks={eventsNav}
      fullWidth
    >
      <p className="max-w-3xl">
        Thank you to everyone who joins us at FCSSC events. Photo galleries
        from recent years will be added here.
      </p>
      <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderSlots.map((i) => (
          <li
            key={i}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={PLACEHOLDER_IMAGE}
              alt={`Event photo placeholder ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </li>
        ))}
      </ul>
      <p className="mt-10">
        <Link href="/events" className="font-semibold text-[#1a3683]">
          ← Back to events
        </Link>
      </p>
    </SubpageShell>
  );
}
