import Link from "next/link";
import { notFound } from "next/navigation";
import { SubpageShell } from "@/components/subpage-shell";
import { serviceContent } from "@/lib/service-content";
import { servicesNav } from "@/lib/section-nav";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) notFound();

  return (
    <SubpageShell
      title={content.title}
      subtitle="Professional, accessible care for Somerset County."
      sectionLinks={servicesNav}
    >
      {content.paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      {content.bullets ? (
        <>
          <p className="font-semibold text-[#1a1a1a]">
            {slug === "addictions"
              ? "The following services are available:"
              : slug === "mental-health"
              ? "Issues addressed by licensed therapists include:"
              : "Services include:"}
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
      {content.secondaryBullets ? (
        <>
          <p className="font-semibold text-[#1a1a1a]">{content.secondaryBullets.heading}:</p>
          <ul className="list-disc space-y-2 pl-5">
            {content.secondaryBullets.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
      {content.resources ? (
        <>
          <p className="font-semibold text-[#1a1a1a]">Other Resources:</p>
          <ul className="list-disc space-y-1 pl-5">
            {content.resources.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </>
      ) : null}
      <p>
        <Link href="/contact/appointment" className="font-semibold text-[#1a3683]">
          Request an appointment
        </Link>
        {" · "}
        <Link href="/services" className="font-semibold text-[#1a3683]">
          All services
        </Link>
      </p>
    </SubpageShell>
  );
}
