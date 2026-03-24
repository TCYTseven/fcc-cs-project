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
        <ul className="list-disc space-y-2 pl-5">
          {content.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
