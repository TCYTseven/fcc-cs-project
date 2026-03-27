import { EventCard } from "@/components/event-card";
import { SubpageShell } from "@/components/subpage-shell";
import { eventsNav } from "@/lib/section-nav";

const featuredEvents = [
  {
    title: "Comedy Night & Silent Auction",
    date: "11 Nov 2025",
    href: "/events/comedy-night",
  },
  {
    title: "Taking Strides Toward Wellness 5K",
    date: "18 Oct 2025",
    href: "/events/wellness-2025",
  },
] as const;

export default function EventsPage() {
  return (
    <SubpageShell
      title="Events and Fund-Raisers"
      subtitle="FCSSC relies on successful fundraisers to help keep essential services affordable and available."
      sectionLinks={eventsNav}
      fullWidth
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        {featuredEvents.map((event) => (
          <EventCard key={event.href} {...event} />
        ))}
      </div>
      <div
        className="mt-16 flex justify-center border-t border-gray-200 pt-6"
        aria-hidden
      >
        <div className="h-1.5 w-24 rounded-full bg-gray-200" />
      </div>
    </SubpageShell>
  );
}
