export interface SectionLink {
  href: string;
  label: string;
}

export const aboutNav: SectionLink[] = [
  { href: "/about", label: "Overview" },
  { href: "/about/why-choose", label: "Why Choose FCSSC?" },
  { href: "/about/team", label: "Our Team" },
  { href: "/about/board", label: "Board of Trustees" },
];

export const eventsNav: SectionLink[] = [
  { href: "/events", label: "Upcoming Events" },
  { href: "/events/comedy-night", label: "Comedy Night & Auction" },
  { href: "/events/wellness-2025", label: "Taking Strides Towards Wellness 2025" },
  { href: "/events/photos", label: "Event Photos" },
];

export const servicesNav: SectionLink[] = [
  { href: "/services", label: "All Services" },
  { href: "/services/mental-health", label: "Mental Health Program" },
  { href: "/services/addictions", label: "Addictions Program" },
  { href: "/services/substance-use", label: "Substance Use" },
  { href: "/services/community-issues", label: "Community Issues" },
  { href: "/services/business", label: "Services to Business" },
];

export const supportNav: SectionLink[] = [
  { href: "/support", label: "Support Overview" },
  { href: "/support/donations", label: "Donations" },
  { href: "/support/corporate-matching", label: "Corporate Matching" },
  { href: "/support/crypto", label: "Crypto" },
  { href: "/support/services-to-business", label: "Services to Business" },
];

export const contactNav: SectionLink[] = [
  { href: "/contact", label: "Contact" },
  { href: "/contact/employment", label: "Employment Opportunities" },
  { href: "/contact/appointment", label: "Request an Appointment" },
];
