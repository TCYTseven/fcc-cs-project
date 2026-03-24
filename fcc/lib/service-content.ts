export interface ServiceContent {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "mental-health": {
    title: "Mental Health Program",
    paragraphs: [
      "Our mental health program offers counseling and support for children, teens, adults, and families across Somerset County. Whether you are navigating stress, depression, anxiety, trauma, or life transitions, our licensed therapists work with you at your pace.",
      "Services may include individual therapy, family sessions, and group opportunities depending on your needs and availability. We focus on building resilience, healthy coping skills, and stronger relationships.",
    ],
    bullets: [
      "Licensed professional counselors and clinical social workers",
      "Confidential, compassionate care",
      "Flexible options to support different schedules and goals",
    ],
  },
  addictions: {
    title: "Addictions Program",
    paragraphs: [
      "FCSSC provides substance use disorder services in a respectful, recovery-oriented setting. Our team understands that recovery is personal—we meet you where you are and help you plan realistic next steps.",
      "Programming emphasizes education, relapse prevention, coping strategies, and connection to community resources so you are not alone in the process.",
    ],
    bullets: [
      "Assessment and individualized treatment planning",
      "Outpatient counseling and group support where available",
      "Coordination with families and other providers when appropriate",
    ],
  },
  "substance-use": {
    title: "Substance Use Services",
    paragraphs: [
      "Substance use challenges affect individuals and families in many ways. FCSSC offers outpatient support designed to reduce harm, strengthen recovery, and address the emotional and relational impact of addiction.",
      "If you are unsure where to start, our staff can help you understand options and what to expect.",
    ],
    bullets: [
      "Nonjudgmental, confidential services",
      "Alignment with our broader Addictions Program offerings",
      "Referral support when specialized care is needed",
    ],
  },
  "community-issues": {
    title: "Community Issues",
    paragraphs: [
      "Beyond individual sessions, FCSSC engages with community needs through outreach, education, and collaboration with local partners. We care about equitable access to behavioral health care across Somerset County.",
      "If you represent a school, employer, faith group, or civic organization, we welcome conversations about workshops, screenings, and resource sharing.",
    ],
    bullets: [
      "Partnerships that expand awareness of mental health and recovery",
      "Support for underserved populations when funding allows",
      "Connection to FCSSC programs and county resources",
    ],
  },
  business: {
    title: "Services to Business",
    paragraphs: [
      "Employers play a vital role in employee well-being. FCSSC can work with your organization on employee assistance topics, educational sessions, and pathways to care for your team and their families.",
      "For structured corporate giving and sponsorship, visit our Support Us section for corporate matching and partnership opportunities.",
    ],
    bullets: [
      "Confidential referrals to counseling and addiction services",
      "Tailored presentations on mental health and substance use (by arrangement)",
      "Alignment with workplace wellness and EAP goals",
    ],
  },
};
