import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { aboutNav } from "@/lib/section-nav";

const boardMembers = [
  { name: "Lori Manduley", role: "Board President" },
  { name: "Angel Voultepsis", role: "Vice President" },
  { name: "Howard Hessel", role: "Treasurer" },
  { name: "Susan Lima", role: "Board Secretary" },
  { name: "Annie Jones", role: "Member" },
  { name: "Trica Smith", role: "Member" },
  { name: "Gina Walljasper", role: "Member" },
  { name: "Stephen Fowler", role: "Member" },
] as const;

export default function BoardPage() {
  return (
    <SubpageShell
      title="Board of Trustees"
      subtitle="Volunteer leadership guiding FCSSC's mission and stewardship."
      sectionLinks={aboutNav}
    >
      <p>
        The FCSSC Board meets at least 8 times a year to support and evaluate
        the agency&apos;s programs, track the agency&apos;s finances, develop
        future goals, and support fund-raising initiatives.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-[#1a1a1a]">Name</th>
              <th className="px-4 py-3 text-left font-semibold text-[#1a1a1a]">Role</th>
            </tr>
          </thead>
          <tbody>
            {boardMembers.map((member, i) => (
              <tr key={member.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-medium text-[#1a1a1a]">{member.name}</td>
                <td className="px-4 py-3 text-gray-600">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-[#1a1a1a]">Interested in Becoming a Member?</h2>
      <p>Family and Community Services is looking for board members. Responsibilities include:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Attend meetings as frequently as possible (9 meetings per year)</li>
        <li>
          Help oversee and guide the operations and finances of the agency in
          conjunction with the Executive Director
        </li>
        <li>Actively participate in fundraising events—attend and/or volunteer, invite friends and family</li>
      </ul>
      <p>
        Interested?{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          Contact us
        </Link>{" "}
        to learn more about board service.
      </p>
    </SubpageShell>
  );
}
