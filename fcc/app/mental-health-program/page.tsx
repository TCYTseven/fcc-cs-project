import { Footer } from "@/components/footer";
import Link from "next/link";

export default function MentalHealthProgram() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#262626] font-sans">
      <div className="mx-auto max-w-7xl bg-white shadow-sm min-h-screen flex flex-col">
        <main className="flex-1">
          {/* Page Header */}
          <section className="px-6 py-12 text-center border-b border-[#F0F0F0] bg-[#FFF3E0]/30">
            <h1 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4 uppercase tracking-tight">
              Mental Health Program
            </h1>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Confidential, professional services for individuals and families in Somerset County.
            </p>
          </section>

          {/* Main Content Section */}
          <section className="px-6 py-16 max-w-5xl mx-auto">
            <div className="space-y-12">
              <div className="prose prose-zinc max-w-none">
                <p className="text-lg leading-relaxed text-[#4A4A4A]">
                  The Individual and Family/Mental Health Program is the agency&apos;s largest program. 
                  This program is licensed by the State of New Jersey, Department of Human Services 
                  Office of Licensing. We provide confidential, professional services to individuals 
                  and families that live or work in Somerset County or the immediate surrounding 
                  communities. These services, provided on a sliding scale basis, include individual, 
                  family, and couple therapy, as well as group treatment for people of all ages.
                </p>
              </div>

              {/* Issues Addressed Grid */}
              <div className="bg-[#F8F8F8] p-8 md:p-12 rounded-2xl border border-[#E5E5E5]">
                <h2 className="text-2xl font-bold text-[#262626] mb-8 uppercase text-center">
                  Issues Addressed by Licensed Therapists
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Behavioral/School Problems",
                    "Depression/Anxiety/Other Emotional Difficulties",
                    "Divorce/Separation/Single Parent Issues",
                    "Domestic/Family Violence",
                    "Marital/Relationship Problems",
                    "Parent-Child Conflicts/Parenting Skills",
                    "Suicide Prevention",
                    "Psychiatric Consultations",
                    "Anger Management"
                  ].map((issue, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#F0F0F0]">
                      <span className="text-[#E65100] mt-1">✓</span>
                      <span className="text-[#4A4A4A] font-medium">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 text-[#4A4A4A] leading-relaxed">
                <p>
                  When indicated, clients are also provided with psychiatric services on a sliding scale basis.
                </p>
                <p>
                  FCSSC also works closely with community resources and referral sources. In addition, 
                  we often refer clients to other resources or services for supplementary assistance.
                </p>
                <div className="bg-[#FFF3E0] p-6 rounded-xl border-l-4 border-[#E65100]">
                  <p className="font-semibold text-[#262626]">
                    Couples Therapy
                  </p>
                  <p className="mt-2">
                    FCSSC also offers couples therapy at our facility in Somerset. Learn more about how to 
                    improve your relationship and attend one of our sessions here.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
