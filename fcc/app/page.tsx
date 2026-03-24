import { GettingInvolved } from "@/components/getting-involved";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder-image";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#1a1a1a]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={PLACEHOLDER_IMAGE}
              alt="Community"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-2 tracking-tight">
                Find the Help You Need.
                <br />
                At Your Pace.
              </h1>
              
              <p className="text-white text-xl md:text-2xl mt-8 mb-8 font-medium">
                How can we help?
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services/mental-health"
                  className="bg-black text-white hover:bg-gray-800 transition-colors px-6 py-3.5 rounded text-sm font-semibold tracking-wide"
                >
                  Mental Health
                </Link>
                <Link 
                  href="/services/substance-use"
                  className="bg-black text-white hover:bg-gray-800 transition-colors px-6 py-3.5 rounded text-sm font-semibold tracking-wide"
                >
                  Substance Use
                </Link>
                <Link 
                  href="/services/community-issues"
                  className="bg-black text-white hover:bg-gray-800 transition-colors px-6 py-3.5 rounded text-sm font-semibold tracking-wide"
                >
                  Community Issues
                </Link>
                <Link 
                  href="/services/business"
                  className="bg-black text-white hover:bg-gray-800 transition-colors px-6 py-3.5 rounded text-sm font-semibold tracking-wide"
                >
                  Business
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="px-6 py-20 bg-[#F8F8F8]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Our Core Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">We offer professional, accessible care tailored to the needs of our community.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Mental Health Program</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team of experienced licensed therapists provides individual, family, and group counseling to help you navigate life&apos;s challenges, fostering resilience and emotional well-being.
                </p>
                <Link href="/services/mental-health" className="text-[#F58220] font-semibold hover:text-[#d9711a] flex items-center gap-2">
                  Learn More <span>→</span>
                </Link>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Addictions Program</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Comprehensive substance use disorder services designed to support recovery. We provide a safe, non-judgmental environment for healing and long-term sobriety.
                </p>
                <Link href="/services/addictions" className="text-[#F58220] font-semibold hover:text-[#d9711a] flex items-center gap-2">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <GettingInvolved />

        {/* Call to Action */}
        <section className="px-6 py-20 bg-[#2B3A8C] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Need You In The Fight</h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Your support enables us to continue providing vital services to those who need them most. Whether through donations, corporate matching, or volunteering, you can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/support/donations" 
                className="bg-[#F58220] hover:bg-[#d9711a] text-white font-semibold py-3.5 px-8 rounded transition-colors"
              >
                Donate Now
              </Link>
              <Link 
                href="/events" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2B3A8C] font-semibold py-3.5 px-8 rounded transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
