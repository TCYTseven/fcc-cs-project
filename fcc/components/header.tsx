import Image from "next/image";

export function Header() {
  return (
    <header className="relative w-full">
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-[#262626]">
        <Image
          src="/fcs-image.webp"
          alt="Family and Community Services of Somerset County"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
              Empowering Individuals and Families Since 1960
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Providing comprehensive mental health and substance use disorder services to all who seek solace and assistance.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
