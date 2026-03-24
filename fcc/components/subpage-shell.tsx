import Link from "next/link";
import type { ReactNode } from "react";
import type { SectionLink } from "@/lib/section-nav";

interface SubpageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  sectionLinks?: SectionLink[];
  /** Use full width for grids (e.g. events listing) */
  fullWidth?: boolean;
}

export function SubpageShell({
  title,
  subtitle,
  children,
  sectionLinks,
  fullWidth = false,
}: SubpageShellProps) {
  const hasNav = sectionLinks && sectionLinks.length > 0;

  return (
    <div className="bg-white text-[#1a1a1a]">
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <h1 className="text-3xl font-bold tracking-tight text-[#1a3683] md:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-lg text-gray-600">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div
        className={
          hasNav
            ? "mx-auto grid max-w-[1200px] gap-10 px-6 py-10 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-14"
            : "mx-auto max-w-[1200px] px-6 py-10"
        }
      >
        {hasNav ? (
          <aside className="lg:pt-1">
            <nav
              aria-label="Section"
              className="flex flex-col gap-0.5 border-l-2 border-[#F58220]/50 pl-4 text-sm font-semibold text-[#4a4a4a]"
            >
              {sectionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-r-lg py-2 pr-2 transition-colors hover:text-[#1a3683]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        ) : null}
        <div
          className={
            fullWidth
              ? "min-w-0 space-y-5 text-base leading-relaxed text-gray-700"
              : "max-w-3xl space-y-5 text-base leading-relaxed text-gray-700"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
