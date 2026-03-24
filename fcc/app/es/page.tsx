import Link from "next/link";

export default function EsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold text-[#1a1a1a]">Español</h1>
      <p className="mt-4 text-gray-600">
        El contenido en español estará disponible próximamente.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-semibold text-[#F58220] hover:text-[#d9711a]"
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}
