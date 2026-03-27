import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { supportNav } from "@/lib/section-nav";

export default function CryptoPage() {
  return (
    <SubpageShell
      title="Cryptocurrency Donations"
      subtitle="Support FCSSC with digital assets through The Giving Block."
      sectionLinks={supportNav}
    >
      <h2 className="text-xl font-bold text-[#1a1a1a]">What is Crypto?</h2>
      <p>
        Crypto, short for cryptocurrency, is a type of digital or &ldquo;virtual
        currency&rdquo;. The currency uses cryptography to secure transactions,
        which makes it impossible to counterfeit or double-spend. Crypto allows
        for secure online payments without using third-party intermediaries.
      </p>

      <h2 className="text-xl font-bold text-[#1a1a1a]">Who is The Giving Block?</h2>
      <p>
        The Giving Block is a company where one can donate crypto to non-profit
        organizations. The Giving Block makes it simple for organizations to
        raise funds through digital asset donations.
      </p>

      <h2 className="text-xl font-bold text-[#1a1a1a]">How is FCSSC Involved?</h2>
      <p>
        FCSSC wanted to expand how we accept donations from our donors. We are
        participating with The Giving Block as part of their mental health
        fundraising group so that donors can donate to several organizations in
        addition to our own. We believe that supporting mental health in any and
        all communities is vital, and this is another way we are able to expand
        and meet our donors where they are.
      </p>

      <p className="font-semibold text-[#1a1a1a]">Here are two ways to take action:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Donate through the Mental Health Group on The Giving Block</li>
        <li>Donate individually to FCSSC</li>
      </ul>

      <p>
        Questions?{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          Contact us
        </Link>{" "}
        and we will help guide you through the process.
      </p>
    </SubpageShell>
  );
}
