import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#262626] font-sans">
      <div className="mx-auto max-w-7xl bg-white shadow-sm min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Header Contact Info Section */}
          <section className="px-6 py-12 text-center border-b border-[#F0F0F0]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#262626] mb-6">
              Family and Community Services of Somerset County
            </h2>
            <div className="text-[#4A4A4A] text-lg space-y-1">
              <p>339 W. 2nd Street</p>
              <p>Bound Brook, New Jersey 08805</p>
              <p>Phone: 732-356-1082</p>
            </div>
          </section>

          {/* Hero / Intro Section */}
          <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0">
              {/* Left Column */}
              <div className="md:w-[60%] md:pr-12 flex flex-col justify-center">
                <h1 className="text-4xl md:text-[36px] font-bold leading-tight uppercase text-[#262626] mb-6">
                  Supporting Our Community Since 1960
                </h1>
                <p className="text-base text-[#4A4A4A] mb-8 leading-relaxed">
                  Family and Community Services of Somerset County (FCSSC) provides comprehensive support, mental health, and substance use disorder services to all who seek solace and assistance, regardless of financial means.
                </p>
                <div>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center justify-center bg-[#E65100] hover:bg-[#D84315] text-white uppercase font-semibold py-4 px-6 rounded-md transition-colors"
                  >
                    Get Help Today <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              {/* Separator */}
              <div className="hidden md:block w-px bg-[#FFB74D] opacity-60 mx-4"></div>

              {/* Right Column */}
              <div className="md:w-[40%] md:pl-12 flex flex-col justify-center items-center md:items-start relative">
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-[#FFF3E0] rounded-full blur-2xl -z-10 opacity-70"></div>
                  <span className="text-7xl md:text-[5rem] font-bold text-[#E65100] leading-none block mb-2">
                    60+
                  </span>
                  <span className="text-lg font-semibold text-[#262626] uppercase tracking-wide">
                    Years of Service
                  </span>
                  <p className="text-[#4A4A4A] mt-3 text-sm">
                    A safe haven for guidance, understanding, and empowerment in Somerset County.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Section */}
          <section className="px-6 py-16 bg-[#F8F8F8]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#262626] uppercase mb-4">Our Core Services</h2>
                <p className="text-[#4A4A4A] max-w-2xl mx-auto">We offer professional, accessible care tailored to the needs of our community.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#FFF3E0] rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#262626] mb-4">Mental Health Program</h3>
                  <p className="text-[#4A4A4A] mb-6 line-clamp-3">
                    Our team of experienced licensed therapists provides individual, family, and group counseling to help you navigate life's challenges, fostering resilience and emotional well-being.
                  </p>
                  <Link href="/services/mental-health" className="text-[#E65100] font-semibold hover:underline flex items-center">
                    Learn More <span>→</span>
                  </Link>
                </div>

                <div className="bg-white p-8 rounded border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#FFF3E0] rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#262626] mb-4">Addictions Program</h3>
                  <p className="text-[#4A4A4A] mb-6 line-clamp-3">
                    Comprehensive substance use disorder services designed to support recovery. We provide a safe, non-judgmental environment for healing and long-term sobriety.
                  </p>
                  <Link href="/services/addictions" className="text-[#E65100] font-semibold hover:underline flex items-center">
                    Learn More <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Block */}
          <section className="px-6 py-16 bg-white border-t border-[#F0F0F0]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#262626] mb-8 uppercase">
                Our Mission & Vision
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed text-left">
                <p>
                  Founded in 1960 with a vision to provide comprehensive support to
                  the community, FCSSC has remained steadfast in its commitment to
                  serving all who seek solace and assistance, regardless of their
                  financial means. From its humble beginnings, FCSSC has grown into a
                  vital nonprofit organization, a safe haven for those in need of
                  guidance and understanding.
                </p>
                <p>
                  At the heart of FCSSC&apos;s mission lies the belief in the power
                  of community and the importance of accessible mental health and
                  substance use disorder services. With a team of dedicated
                  professionals, including experienced licensed therapists and
                  skilled administrative staff, FCSSC endeavors to make a meaningful
                  difference in the lives of its clients, fostering a sense of
                  resilience and empowerment.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action / Support Us */}
          <section className="px-6 py-16 bg-[#262626] text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">We Need You In The Fight</h2>
              <p className="text-lg text-white/80 mb-10">
                Your support enables us to continue providing vital services to those who need them most. Whether through donations, corporate matching, or volunteering, you can make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/support/donations" 
                  className="bg-[#E65100] hover:bg-[#D84315] text-white uppercase font-semibold py-4 px-8 rounded-md transition-colors"
                >
                  Donate Now
                </Link>
                <Link 
                  href="/events/wellness-2025" 
                  className="bg-transparent border-2 border-[#FFB74D] text-[#FFB74D] hover:bg-[#FFB74D] hover:text-[#262626] uppercase font-semibold py-4 px-8 rounded-md transition-colors"
                >
                  Join Our 2025 Event
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
