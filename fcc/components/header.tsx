import Image from "next/image";

export function Header() {
  return (
    <header className="relative w-full">
      <div className="relative h-64 w-full overflow-hidden bg-amber-200 sm:h-80">
        <Image
          src="https://placekitten.com/1200/400"
          alt="Hero - hands reaching towards connection"
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  );
}
