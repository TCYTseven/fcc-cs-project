import { Footer } from "@/components/footer";
import Link from "next/link";

export default function AddictionsProgram() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#262626] font-sans">
      <div className="mx-auto max-w-7xl bg-white shadow-sm min-h-screen flex flex-col">
        <main className="flex-1">
          {/* Page Header */}
          <section className="px-6 py-12 text-center border-b border-[#F0F0F0] bg-[#FFF3E0]/30">
            <h1 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4 uppercase tracking-tight">
              Addictions Program
            </h1>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Multi-faceted support and treatment for substance use disorders in Somerset County.
            </p>
          </section>

          {/* Main Content Section */}
          <section className="px-6 py-16 max-w-5xl mx-auto">
            <div className="space-y-12">
              <div className="prose prose-zinc max-w-none">
                <p className="text-lg leading-relaxed text-[#4A4A4A]">
                  The Addictions Program of Family & Community Services is a multi-faceted program 
                  that addresses many addictive behaviors including alcohol and other drug abuse. 
                  The program is licensed by the State of New Jersey, Department of Addiction Services (DAS). 
                  Clients with substance abuse problems are given alcohol/drug screens for assessment 
                  purposes. Services are provided on a sliding scale for those who live or work in 
                  Somerset County and the immediate surrounding communities.
                </p>
              </div>

              {/* Programs Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-sm">
                  <h2 className="text-2xl font-bold text-[#262626] mb-4 uppercase tracking-tight">
                    Counseling
                  </h2>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    We recognize that the addiction affects everyone that has a significant relationship 
                    with the addict. Therefore, family members are offered individual and family 
                    counseling to address family issues and co-dependency. Our services are offered 
                    to children, adolescents, adults, seniors, and their families.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-sm">
                  <h2 className="text-2xl font-bold text-[#262626] mb-4 uppercase tracking-tight">
                    DWI
                  </h2>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    FCSSC is one of the leading counseling services in Somerset County for clients 
                    charged with driving while intoxicated. Our program offers clients individual 
                    and group therapy, and introduces each client to Alcoholics Anonymous. 
                    The goal of this program is to prevent future drinking and driving episodes. 
                    Emphasis is placed on responsible drinking and the consequences of alcohol abuse.
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-[#F8F8F8] p-8 md:p-12 rounded-2xl border border-[#E5E5E5]">
                <h2 className="text-2xl font-bold text-[#262626] mb-8 uppercase text-center">
                  Services Available
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Comprehensive Assessments",
                    "Alcohol and Other Drug Abuse",
                    "Legal Issues (DWI/Probation)",
                    "Gambling & Compulsive Spending",
                    "Co-dependency/Family Issues",
                    "Aftercare Counseling",
                    "Urinalysis Drug Screening",
                    "Alcohol swab screening"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#F0F0F0]">
                      <span className="text-[#E65100] mt-1">✓</span>
                      <span className="text-[#4A4A4A] font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-center italic text-[#4A4A4A]">
                  When indicated, clients are also referred for psychiatric consultation.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
