import { Navbar } from "@/components/navbar";
import { SiteHeader } from "@/components/site-header";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-100/50">
      <div className="mx-auto max-w-4xl bg-white shadow-lg">
        <SiteHeader />
        <Header />
        <Navbar />

        <main className="px-6 py-10">
          <h2 className="text-center text-2xl font-bold text-zinc-900">
            Family and Community Services of Somerset County
          </h2>

          <div className="mt-4 text-center text-zinc-700">
            <p>339 W. 2nd Street</p>
            <p>Bound Brook, New Jersey 08805</p>
            <p>Phone: 732-356-1082</p>
            <p>Fax: 732-356-6327</p>
          </div>

          <div className="mt-10 space-y-6 text-left">
            <p className="text-zinc-700">
              Founded in 1960 with a vision to provide comprehensive support to
              the community, FCSSC has remained steadfast in its commitment to
              serving all who seek solace and assistance, regardless of their
              financial means. From its humble beginnings, FCSSC has grown into a
              vital nonprofit organization, a safe haven for those in need of
              guidance and understanding.
            </p>
            <p className="text-zinc-700">
              At the heart of FCSSC&apos;s mission lies the belief in the power
              of community and the importance of accessible mental health and
              substance use disorder services. With a team of dedicated
              professionals, including experienced licensed therapists and
              skilled administrative staff, FCSSC endeavors to make a meaningful
              difference in the lives of its clients, fostering a sense of
              resilience and empowerment.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
