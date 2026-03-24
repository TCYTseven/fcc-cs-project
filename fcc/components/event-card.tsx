import Image from "next/image";
import Link from "next/link";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder-image";

interface EventCardProps {
  title: string;
  date: string;
  href: string;
}

export function EventCard({ title, date, href }: EventCardProps) {
  return (
    <article>
      <Link href={href} className="group block">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-lg font-semibold text-[#333333] transition-colors group-hover:text-[#1a3683] md:text-xl">
            {title}
          </h2>
          <span className="shrink-0 text-sm font-medium text-gray-500 sm:text-right">
            {date}
          </span>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-gray-200">
          <Image
            src={PLACEHOLDER_IMAGE}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>
    </article>
  );
}
