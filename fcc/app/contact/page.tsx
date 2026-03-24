import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org } from "@/lib/org";
import { contactNav } from "@/lib/section-nav";

export default function ContactPage() {
  return (
    <SubpageShell
      title="Contact Us"
      subtitle="We are here to help you connect with care and information."
      sectionLinks={contactNav}
    >
      <p className="text-lg font-semibold text-[#1a1a1a]">{org.name}</p>
      <p>
        {org.street}
        <br />
        {org.cityLine}
      </p>
      <p>
        Phone:{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>
        <br />
        Fax: {org.fax}
      </p>
      <p>
        <Link href="/contact/appointment" className="font-semibold text-[#1a3683]">
          Request an appointment
        </Link>
        {" · "}
        <Link href="/contact/employment" className="font-semibold text-[#1a3683]">
          Employment opportunities
        </Link>
      </p>
      <p className="text-sm text-gray-600">
        A secure contact form and office hours will be added to this page.
      </p>
    </SubpageShell>
  );
}
