import { Navbar } from "@/components/navbar";
import { SiteHeader } from "@/components/site-header";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AddictionsProgram() {
  return (
    <div className="min-h-screen bg-amber-100/50">
      <div className="mx-auto max-w-4xl bg-white shadow-lg">
        <SiteHeader />
        <Header />
        <Navbar />

        <main className="px-6 py-10">
          <h2 className="text-center text-3xl font-bold text-zinc-900 mb-8">
            Addictions Program
          </h2>

          <div className="space-y-8 text-left text-zinc-700">
            <section>
              <p className="leading-relaxed">
                The Addictions Program of Family & Community Services is a
                multi-faceted program that addresses many addictive behaviors
                including alcohol and other drug abuse. The program is licensed by
                the State of New Jersey, Department of Addiction Services (DAS).
                Clients with substance abuse problems are given alcohol/drug
                screens for assessment purposes. Services are provided on a
                sliding scale for those who live or work in Somerset County and
                the immediate surrounding communities.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Counseling</h3>
              <p className="leading-relaxed">
                We recognize that the addiction affects everyone that has a
                significant relationship with the addict. Therefore, family
                members are offered individual and family counseling to address
                family issues and co-dependency. Our services are offered to
                children, adolescents, adults, seniors, and their families.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">DWI</h3>
              <p className="leading-relaxed">
                FCSSC is one of the leading counseling services in Somerset County
                for clients charged with driving while intoxicated. Our program
                offers clients individual and group therapy, and introduces each
                client to Alcoholics Anonymous. The goal of this program is to
                prevent future drinking and driving episodes. Emphasis is placed
                on responsible drinking and the consequences of alcohol abuse.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                The following services are available for substance abuse and other
                addictive behaviors with individuals and group counseling:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive Assessments for Adults and Adolescents</li>
                <li>Alcohol and Other Drug Abuse</li>
                <li>Legal Issues (DWI/Probation)</li>
                <li>
                  Assessment and referral for gambling and Compulsive
                  Spending/Shopping
                </li>
                <li>Co-dependency/Family Issues</li>
                <li>Aftercare Counseling</li>
                <li>Urinalysis Drug Screening</li>
                <li>Alcohol swab screening</li>
              </ul>
              <p className="mt-4 italic">
                When indicated, clients are also referred for psychiatric
                consultation.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
