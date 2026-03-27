import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { org } from "@/lib/org";
import { contactNav } from "@/lib/section-nav";

const jobs = [
  {
    title: "MH Clinician at Somerset Vo-Tech",
    duties: [
      "Provide crisis intervention and/or supportive counseling to individual students for behavioral, emotional, and interpersonal issues.",
      "Provide psycho-education to classes and student groups on mental health issues including parent management and conflict resolution.",
      "Identify students who require outside mental health or substance abuse treatment and make referrals to appropriate facilities.",
      "Collaborate with teachers, guidance staff, administration, and school-based staff to ensure comprehensive services for students.",
      "Work with collateral contacts for students in treatment with area mental health providers.",
      "Maintain timely clinical progress notes and other documentation as required.",
      "Uphold Professional Code of Ethics and state and federal confidentiality laws.",
    ],
    qualifications: [
      "Must possess an LPC, LSW, LCSW, or LMFT",
      "Must have at least 2 years of experience providing mental health counseling services to high school-aged students",
      "Competency in Microsoft suite (Word, Excel, Outlook, PowerPoint)",
      "Must be able to communicate with students, parents, and colleagues in a professional manner",
    ],
    apply: null,
  },
  {
    title: "Mental Health Clinician (Fee For Service)",
    duties: [
      "Provides direct clinical services to clients under scheduled supervision.",
      "Works with clients with mental health challenges.",
      "Performs comprehensive assessments to obtain sufficient information to complete FCSSC's intake and establish treatment goals.",
      "Maintains accurate and current client records and completes agency documentation as required.",
      "Supports agency policies and procedures.",
      "Prepares written reports for and makes referrals to other community agencies and resources as appropriate.",
      "Attends necessary continuing education courses to obtain or maintain certifications and licenses.",
    ],
    qualifications: [
      "LCSW, LMFT, or LPC required",
      "Experience working with families and children",
      "Bilingual – Spanish – preferred but not required",
    ],
    apply: null,
  },
  {
    title: "Social Media Assistant / Intern",
    duties: [
      "Oversee organization's Facebook, Twitter, Website, and other online efforts.",
      "Design, create, and manage all social media efforts.",
      "Curate relevant content to reach the company's target audiences.",
      "Create, manage, and publish content.",
      "Monitor, listen, and respond to comments and feedback.",
      "Develop and expand all online community outreach efforts through an effective strategy.",
      "Compile analytic reports for management.",
      "Manage and maintain FCSSC quarterly newsletter.",
      "Assist staff members with alternative tasks such as programming, planning, answering phones, greeting guests, or helping with payroll.",
    ],
    qualifications: [
      "Completing or completed a BS in Communications, Public Relations, or Journalism",
      "1–2 years experience with social media management preferred",
      "Knowledge of maintaining an organization's WordPress, Facebook, and Twitter required",
      "Knowledge of social media tools such as Hootsuite and Buffer preferred",
    ],
    apply: "rachgreenberg20@gmail.com",
  },
] as const;

export default function EmploymentPage() {
  return (
    <SubpageShell
      title="Employment Opportunities"
      subtitle="Join a mission-driven team serving Somerset County."
      sectionLinks={contactNav}
    >
      <p>
        FCSSC hires licensed clinicians, support staff, and administrative
        professionals who share our commitment to accessible behavioral health
        care.
      </p>

      <div className="space-y-12">
        {jobs.map((job) => (
          <div key={job.title} className="border-l-4 border-[#F58220]/60 pl-5">
            <h2 className="text-xl font-bold text-[#1a1a1a]">{job.title}</h2>

            <p className="mt-3 font-semibold text-[#1a3683]">Duties and Responsibilities</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              {job.duties.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <p className="mt-3 font-semibold text-[#1a3683]">Qualifications</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              {job.qualifications.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>

            {job.apply ? (
              <p className="mt-3 text-sm">
                To apply, send resume and cover letter with the subject line{" "}
                <strong>Social Media Assistant/Intern_Last Name</strong> to{" "}
                <a
                  href={`mailto:${job.apply}`}
                  className="font-semibold text-[#1a3683]"
                >
                  {job.apply}
                </a>
                . Questions? Call{" "}
                <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
                  {org.phone}
                </a>{" "}
                or fax to {org.fax}.
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600">
        To express general interest in a position, call{" "}
        <a href="tel:7323561082" className="font-semibold text-[#1a3683]">
          {org.phone}
        </a>{" "}
        or fax your resume to {org.fax}.
      </p>

      <p>
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          ← Contact overview
        </Link>
      </p>
    </SubpageShell>
  );
}
