import Image from "next/image";
import Link from "next/link";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder-image";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Get Involved | FCSSC",
  description:
    "Volunteer, donate, or partner with FCSSC to support mental health and community services in Somerset County.",
};

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      className="relative flex min-h-[650px] items-center md:min-h-[75vh]"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={PLACEHOLDER_IMAGE}
          alt="Happy family walking outdoors in warm sunlight"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-20">
        <div className="max-w-[720px]">
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Find the Help You Need.
            <br />
            At Your Pace.
          </h1>

          <p className="mt-8 text-xl font-semibold text-white/90 md:text-2xl">
            How can we help?
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: "Mental Health", href: "/services/mental-health" },
              { label: "Substance Use", href: "/services/addictions" },
              { label: "Community Issues", href: "/services" },
              { label: "Business", href: "/support/services-to-businesses" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded bg-black px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#2B3A8C]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Getting Involved Cards ─── */
interface CardProps {
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

function InvolvementCard({ imageAlt, title, description, ctaLabel, href }: CardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-[#1a2d6e]" />
      {/* Image */}
      <div className="relative h-[220px] w-full shrink-0">
        <Image
          src={PLACEHOLDER_IMAGE}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col bg-[#29479B] px-8 py-8">
        <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-[#F58A1F]">
          {description}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 font-semibold text-white underline-offset-4 transition-opacity hover:opacity-80 hover:underline"
        >
          {ctaLabel} <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

function GettingInvolved() {
  return (
    <section className="bg-white px-6 py-24 md:py-28" aria-labelledby="gi-heading">
      <div className="mx-auto max-w-[1100px]">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <h2
            id="gi-heading"
            className="text-4xl font-extrabold text-[#1a1a1a] md:text-5xl"
          >
            Getting Involved
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            Explore the ways to support us for better inclusivity throughout the county
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <InvolvementCard
            imageAlt="Two people looking at phone in a community support setting"
            title="Volunteer"
            description="Help at events, lend your skills, or join our Board of Trustees."
            ctaLabel="Volunteer Sign Up"
            href="/get-involved/volunteer"
          />
          <InvolvementCard
            imageAlt="Community members organizing donated food and supplies"
            title="Donate"
            description="Help at events, lend your skills, or join our Board of Trustees."
            ctaLabel="Donate Now"
            href="/support/donations"
          />
          <InvolvementCard
            imageAlt="Two people in a professional counseling or partnership conversation"
            title="Partnership"
            description="Partner with us on corporate matching, events, or fundraising."
            ctaLabel="Partner with us"
            href="/get-involved/partnership"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Events ─── */
interface EventCardProps {
  title: string;
  date: string;
  imageAlt: string;
  description: string;
  registerHref: string;
}

function EventCard({ title, date, imageAlt, description, registerHref }: EventCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={PLACEHOLDER_IMAGE}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-[#1a1a1a] md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm font-semibold text-[#29479B]">{date}</p>
        <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">
          {description}
        </p>
        <Link
          href={registerHref}
          className="mt-6 block w-full rounded bg-[#F58220] py-4 text-center text-sm font-bold tracking-wide text-[#1a1a1a] transition-colors hover:bg-[#d9711a]"
        >
          Register Now
        </Link>
      </div>
    </article>
  );
}

function Events() {
  return (
    <section className="bg-white px-6 py-24 md:py-28" aria-labelledby="events-heading">
      <div className="mx-auto max-w-[1280px]">
        <header className="mb-12">
          <h2
            id="events-heading"
            className="text-4xl font-extrabold text-[#1a1a1a] md:text-5xl"
          >
            Events and Fund-Raisers
          </h2>
          <p className="mt-3 text-base text-gray-500 md:text-lg">
            View our upcoming events.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <EventCard
            title="Comedy Night &amp; Silent Auction"
            date="11 Nov 2025"
            imageAlt="Audience laughing at a comedy night show"
            description="An evening of laughter, community, and impact. There will be raffle baskets and a silent auction to sustain care."
            registerHref="/events/comedy-night"
          />
          <EventCard
            title="Taking Strides Toward Wellness 5K"
            date="18 Oct 2025"
            imageAlt="Group of people walking and running outdoors at a 5K event"
            description="A family-friendly walk/run that brings neighbors together to keep sliding-scale counseling available for everyone."
            registerHref="/events/wellness-2025"
          />
        </div>

        <div className="mt-8">
          <Link
            href="/events"
            className="block w-full rounded-xl bg-[#29479B] py-5 text-center text-base font-bold tracking-wide text-white transition-colors hover:bg-[#1a2d6e]"
          >
            View all events
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter ─── */
function Newsletter() {
  return (
    <section className="bg-gray-100 px-6 py-24 md:py-28" aria-labelledby="nl-heading">
      <div className="mx-auto max-w-[1000px]">
        <h2
          id="nl-heading"
          className="mb-12 text-center text-4xl font-extrabold text-[#1a1a1a] md:text-5xl"
        >
          Sign-Up for our Newsletters
        </h2>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          {/* Text side */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Join our newsletter to receive updates about new programs, community
              events, mental health resources, and ways to support our mission. We
              promise, no spam, just meaningful updates that help you stay involved
              in our community!
            </p>
            <div>
              <Link
                href="/newsletter"
                className="inline-block rounded bg-[#1a1a1a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
              >
                Start for Free
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-xl md:h-[340px] md:w-[360px]">
            <Image
              src={PLACEHOLDER_IMAGE}
              alt="Person holding a newsletter or newspaper"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 360px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── More Ways ─── */
function MoreWays() {
  return (
    <section className="bg-white px-6 py-24 md:py-28" aria-labelledby="more-heading">
      <div className="mx-auto max-w-[1100px]">
        <h2
          id="more-heading"
          className="mb-10 text-4xl font-extrabold text-[#29479B] md:text-5xl"
        >
          Explore more ways to Get Involved
        </h2>

        <div className="rounded-2xl bg-gray-100 p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            {/* Image */}
            <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-xl md:h-auto md:w-[320px]">
              <Image
                src={PLACEHOLDER_IMAGE}
                alt="Small community group outdoors"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            {/* Text panel */}
            <div className="flex flex-1 flex-col justify-center rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                Explore more ways to connect with our mission, learn about our story,
                and see the impact your support helps create in our community.
                There&apos;s more than one way to make a difference.
              </p>
              <Link
                href="/about/why-choose"
                className="mt-8 block w-full rounded bg-[#1a1a1a] py-4 text-center text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
              >
                Take a Look at Our Impact Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section className="bg-gray-50 px-6 py-24 md:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1100px]">
        <h2
          id="contact-heading"
          className="mb-12 text-4xl font-extrabold text-[#29479B] md:text-5xl"
        >
          Contact Us
        </h2>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* Info */}
          <div className="flex-1">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Have questions or want to get involved? Reach out to FCSSC and
              we&apos;ll help connect you with the right resources.
            </p>
            <ul className="mt-8 flex flex-col gap-4 text-base text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#29479B]" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>339 W. 2nd Street, Bound Brook, NJ 08805</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#29479B]" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:7323561082" className="text-[#29479B] hover:underline">
                  732-356-1082
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#29479B]" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <Link href="/contact/appointment" className="text-[#29479B] hover:underline">
                  Request an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function GetInvolvedPage() {
  return (
    <main>
      <Hero />
      <GettingInvolved />
      <Events />
      <Newsletter />
      <MoreWays />
      <Contact />
    </main>
  );
}
