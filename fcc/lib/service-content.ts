export interface ServiceContent {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  secondaryBullets?: { heading: string; items: string[] };
  resources?: string[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "mental-health": {
    title: "Mental Health Program",
    paragraphs: [
      "The Individual and Family/Mental Health Program is the agency's largest program. This program is licensed by the State of New Jersey, Department of Human Services Office of Licensing. We provide confidential, professional services to individuals and families that live or work in Somerset County or the immediate surrounding communities. These services, provided on a sliding scale basis, include individual, family, and couple therapy, as well as group treatment for people of all ages.",
      "FCSSC also works closely with community resources and referral sources. In addition, we often refer clients to other resources or services for supplementary assistance. FCSSC also offers couples therapy at our facility in Somerset.",
    ],
    bullets: [
      "Behavioral/School Problems",
      "Depression/Anxiety/Other Emotional Difficulties",
      "Divorce/Separation/Single Parent Issues",
      "Domestic/Family Violence",
      "Marital/Relationship Problems",
      "Parent-Child Conflicts/Parenting Skills",
      "Suicide Prevention",
      "Psychiatric Consultations",
      "Anger Management",
    ],
  },
  addictions: {
    title: "Addictions Program",
    paragraphs: [
      "The Addictions Program of Family & Community Services is a multi-faceted program that addresses many addictive behaviors including alcohol and other drug abuse. The program is licensed by the State of New Jersey, Department of Addiction Services (DAS). Clients with substance abuse problems are given alcohol/drug screens for assessment purposes. Services are provided on a sliding scale for those who live or work in Somerset County and the immediate surrounding communities.",
      "We recognize that the addiction affects everyone that has a significant relationship with the addict. Therefore, family members are offered individual and family counseling to address family issues and co-dependency. Our services are offered to children, adolescents, adults, seniors, and their families.",
      "FCSSC is one of the leading counseling services in Somerset County for clients charged with driving while intoxicated (DWI). Our program offers clients individual and group therapy, and introduces each client to Alcoholics Anonymous. The goal of this program is to prevent future drinking and driving episodes. When indicated, clients are also referred for psychiatric consultation.",
    ],
    bullets: [
      "Comprehensive Assessments for Adults and Adolescents",
      "Alcohol and Other Drug Abuse",
      "Legal Issues (DWI/Probation)",
      "Assessment and referral for gambling and Compulsive Spending/Shopping",
      "Co-dependency/Family Issues",
      "Aftercare Counseling",
      "Urinalysis Drug Screening",
      "Alcohol swab screening",
    ],
    resources: [
      "Gamblers Anonymous",
      "Alcoholics Anonymous",
      "Narcotics Anonymous",
      "Alanon",
      "Somerset Treatment Services",
    ],
  },
  "substance-use": {
    title: "Substance Use Services",
    paragraphs: [
      "Substance use challenges affect individuals and families in many ways. FCSSC offers outpatient support designed to reduce harm, strengthen recovery, and address the emotional and relational impact of addiction.",
      "If you are unsure where to start, our staff can help you understand options and what to expect. Services are provided on a sliding scale for those who live or work in Somerset County and the surrounding communities.",
    ],
    bullets: [
      "Nonjudgmental, confidential services",
      "Comprehensive assessments for adults and adolescents",
      "Referral support when specialized care is needed",
    ],
  },
  "community-issues": {
    title: "Community Services Programs",
    paragraphs: [
      "Beyond individual sessions, FCSSC engages with community needs through outreach, education, and collaboration with local partners. We care about equitable access to behavioral health care across Somerset County.",
      "Areas of service include stress management, single parenting, domestic violence, and elderly care. If you represent a school, employer, faith group, or civic organization, we welcome conversations about workshops, screenings, and resource sharing.",
    ],
    bullets: [
      "Stress Management",
      "Single Parenting Support",
      "Domestic Violence Assistance",
      "Elderly Care",
      "Connection to FCSSC programs and county resources",
    ],
  },
  business: {
    title: "Services to Business",
    paragraphs: [
      "Family & Community Services of Somerset County is committed to providing services to all sectors of our community—including the businesses of Somerset County. We are able to offer small and large businesses a customized Employee Assistance Program (EAP) that will meet their needs.",
      "Typical EAP contracts include 2 to 6 sessions for employees and their families. These are provided at either no cost to the employee or a discounted shared cost.",
      "In addition to our EAP services, Family & Community Services of Somerset County also offers seminars and workshops on a variety of business-appropriate topics that can be presented at company facilities.",
    ],
    bullets: [
      "Anxiety and Depression",
      "Personal Problems",
      "Relationship Difficulties",
      "Substance Abuse Issues",
      "Work-Related Problems",
    ],
    secondaryBullets: {
      heading: "Popular Workshop Topics",
      items: [
        "Balancing Work and Home Life",
        "Effective Communication",
        "Manager Training",
        "Stress Management",
        "Substance Abuse Education",
        "Other Addictions Education",
      ],
    },
  },
};
