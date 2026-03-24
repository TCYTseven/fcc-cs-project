import Link from "next/link";
import { SubpageShell } from "@/components/subpage-shell";
import { supportNav } from "@/lib/section-nav";

export default function CryptoPage() {
  return (
    <SubpageShell
      title="Cryptocurrency Donations"
      subtitle="Support FCSSC with digital assets when available."
      sectionLinks={supportNav}
    >
      <p>
        Cryptocurrency giving can offer tax advantages for some donors. FCSSC
        is evaluating secure crypto donation options; wallet addresses and
        supported tokens will be published here when the program is live.
      </p>
      <p>
        Interested in being an early supporter?{" "}
        <Link href="/contact" className="font-semibold text-[#1a3683]">
          Contact us
        </Link>{" "}
        and we will follow up with instructions.
      </p>
    </SubpageShell>
  );
}
