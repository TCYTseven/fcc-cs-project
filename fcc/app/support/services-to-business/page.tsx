import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org } from "@/lib/org";
import { supportNav } from "@/lib/section-nav";

const eapServices = [
  "Anxiety and Depression",
  "Personal Problems",
  "Relationship Difficulties",
  "Substance Abuse Issues",
  "Work-Related Problems",
] as const;

const workshopTopics = [
  "Balancing Work and Home Life",
  "Effective Communication",
  "Manager Training",
  "Stress Management",
  "Substance Abuse Education",
  "Other Addictions Education",
] as const;

export default function ServicesToBusinessPage() {
  return (
    <SubpageShell
      title="Services to Business"
      subtitle="Customized Employee Assistance Programs for Somerset County employers."
      sectionLinks={supportNav}
    >
      <p>
        Family &amp; Community Services of Somerset County is committed to
        providing services to all sectors of our community—including the
        businesses of Somerset County. We are able to offer small and large
        businesses a customized Employee Assistance Program (EAP) that will
        meet their needs.
      </p>
      <p>
        Typical EAP contracts include 2 to 6 sessions for employees and their
        families. These are provided at either no cost to the employee or a
        discounted shared cost. Services include assessment, treatment, and
        referrals for:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        {eapServices.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-[#1a1a1a]">Seminars &amp; Workshops</h2>
      <p>
        In addition to our EAP services, FCSSC also offers seminars and workshops
        on a variety of business-appropriate topics that can be presented at
        company facilities. Both standard and custom-designed programs are
        available. Popular topics include:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        {workshopTopics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <p>
        Please{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          contact us
        </Link>{" "}
        or call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>{" "}
        for fees and other program information.
      </p>
    </SubpageShell>
  );
}
