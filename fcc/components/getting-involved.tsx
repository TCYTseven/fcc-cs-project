import Image from "next/image";
import Link from "next/link";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder-image";

interface InvolvementCardProps {
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

function InvolvementCard({
  imageAlt,
  title,
  description,
  ctaLabel,
  href,
}: InvolvementCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full shrink-0">
        <Image
          src={PLACEHOLDER_IMAGE}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col bg-[#1a3683] px-6 py-8 md:px-8 md:py-10">
        <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#f0a36b] md:text-base">
          {description}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 font-semibold text-white underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
        >
          {ctaLabel} <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export function GettingInvolved() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-3xl font-bold text-[#333333] md:text-4xl">
            Getting Involved
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Explore the ways to support us for better inclusivity throughout
            the county
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          <InvolvementCard
            imageAlt="Volunteers collaborating and connecting"
            title="Volunteer"
            description="Help at events, lend your skills, or join our Board of Trustees."
            ctaLabel="Volunteer Sign Up"
            href="/get-involved/volunteer"
          />
          <InvolvementCard
            imageAlt="Community members organizing donations"
            title="Donate"
            description="Your gift expands access to mental health care, recovery services, and programs for families across Somerset County."
            ctaLabel="Donate Now"
            href="/support/donations"
          />
          <InvolvementCard
            imageAlt="Partners meeting in a professional setting"
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
