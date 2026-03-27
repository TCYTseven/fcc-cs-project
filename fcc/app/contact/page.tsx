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
        Get in touch and let us care for you and your loved ones. We are here
        to help.
      </p>
      <div className="rounded-lg bg-gray-50 p-6 border border-gray-200">
        <p className="font-semibold text-[#1a1a1a] mb-1">Business Hours</p>
        <p className="text-sm text-gray-700">Monday – Friday, 9:00 AM to 6:00 PM</p>
      </div>
    </SubpageShell>
  );
}
