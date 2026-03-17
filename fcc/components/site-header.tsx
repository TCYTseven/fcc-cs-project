export function SiteHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-zinc-200 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl font-bold text-zinc-900 sm:text-2xl">
          Family & Community Services of Somerset County
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          Helping individuals and families since 1960
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded border border-zinc-300 bg-zinc-50 px-4 py-2 pr-10 text-zinc-900 placeholder:text-zinc-500 sm:w-48"
            aria-label="Search"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
            aria-hidden
          >
            🔍
          </span>
        </div>
      </div>
    </div>
  );
}
