import { SubpageShell } from "@/components/subpage-shell";
import { aboutNav } from "@/lib/section-nav";

const staff = [
  {
    name: "Richard Schumann, MBA",
    title: "Executive Director",
    bio: "Richard joined Family & Community Services of Somerset County as Executive Director in September 2016. Richard received his Bachelor of Arts in Psychology at Stetson University and his Master of Business Administration in Health Administration at Eastern University. Richard has over 26 years of experience working in nonprofit service delivery and management. Prior to his arrival at FCSSC he served as the Contracts and Fiscal Planner at the Somerset County Office on Aging for three years.",
  },
  {
    name: "Eric Harris, LCSW",
    title: "Senior Clinician and Supervisor",
    bio: "Eric Harris is a Licensed Clinical Social Worker and a Licensed Marriage and Family Therapist. Eric was hired at Family and Community Services in 1981 after he completed his second year internship there for the Rutgers MSW program. He started after his MSW graduation as a mental health and family clinician. After two years he also became a clinical supervisor. In 1992 he became Clinical Director and in 1994 became Executive Director. During his tenure as Executive Director he continued as a Clinical Supervisor and maintained a significant caseload of children, adolescents, adults, couples, and families. Eric decided to retire as Executive Director after 22 years in September 2016, but continues employment as a Clinician and Supervisor three days per week. His areas of expertise include anxiety, depression, behavioral difficulties, marital/relationship issues, parenting issues, and domestic violence.",
  },
  {
    name: "Pat Freyberger, LCSW, LCADC",
    title: "Mental Health and Substance Use Disorder Director",
    bio: "Pat was promoted to Addictions Program Coordinator at Family and Community Services in 2006. She received her MSW from Rutgers School of Social Work in 1989. Pat has been involved in the field of substance abuse and other addictions for over 25 years. During this time she was a Clinical Supervisor responsible for an outpatient drug and alcohol program in Hudson County. Pat is NJ State licensed as an alcohol and drug counselor (LCADC) and is also a Licensed Clinical Social Worker. Her clinical specialties include individual/group counseling and stress and anger management. Her experience includes dealing with court-referred, mandated clients whose drug and alcohol problems have resulted in serious legal problems.",
  },
  {
    name: "Dawn Swido",
    title: "Administrative / Financial Manager",
    bio: "Dawn joined FCSSC as the Financial Manager in 2012. Prior to joining FCSSC, she had a background in finance having held the financial manager position in a private company for over 10 years.",
  },
] as const;

export default function TeamPage() {
  return (
    <SubpageShell
      title="Our Team"
      subtitle="Clinical and administrative staff dedicated to your care."
      sectionLinks={aboutNav}
    >
      <p>
        FCSSC is led by experienced licensed therapists, certified addiction
        professionals, and skilled administrative staff who keep our programs
        running smoothly. Together we provide a welcoming, nonjudgmental
        environment for healing and growth.
      </p>

      <div className="space-y-10">
        {staff.map((member) => (
          <div key={member.name} className="border-l-4 border-[#F58220]/60 pl-5">
            <h2 className="text-lg font-bold text-[#1a1a1a]">{member.name}</h2>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1a3683]">
              {member.title}
            </p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>

      <blockquote className="mt-4 border-l-4 border-[#F58220] pl-5 italic text-gray-600">
        &ldquo;Family &amp; Community Services of Somerset County takes a unique
        approach with our clients. We are not a typical counseling or doctors&apos;
        office. I feel that we truly make an impact and we can accomplish so much
        more in this community when we support each other the way that FCSSC does.
        I am proud to be a part of an organization that builds up individuals as
        well as the community!&rdquo;
        <cite className="mt-2 block not-italic font-semibold text-[#1a1a1a]">
          — Dawn Swido, Administrative / Financial Manager
        </cite>
      </blockquote>
    </SubpageShell>
  );
}
