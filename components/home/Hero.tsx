import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1558171813-9f54c4cb8f73?w=2400&q=90"
        alt="280 GSM fabric texture close-up"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Subtle gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Tagline */}
      <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10">
        <p className="text-[#F5F5F5] text-xs md:text-sm tracking-[0.18em] font-light max-w-sm leading-relaxed">
          HEAVYWEIGHT GARMENTS
          <br />
          ENGINEERED FOR DAILY WEAR.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-6 md:right-10 flex flex-col items-center gap-1.5">
        <span className="text-[#F5F5F5]/60 text-[9px] tracking-[0.14em] rotate-90 origin-center translate-y-3">
          SCROLL
        </span>
        <div className="w-px h-8 bg-[#F5F5F5]/30 mt-4" />
      </div>
    </section>
  );
}
