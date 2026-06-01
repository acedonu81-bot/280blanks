import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-14">
      {/* Hero image */}
      <div className="relative h-[60vh] overflow-hidden bg-[#EFEFEF]">
        <Image
          src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=2000&q=85"
          alt="280 Blanks dog model"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 py-20 max-w-2xl">
        <p className="text-[10px] tracking-[0.2em] text-[#888888] mb-8">ABOUT</p>

        <h1 className="text-2xl md:text-3xl tracking-[0.08em] font-semibold text-[#111111] mb-10 leading-snug">
          BUILT ON WEIGHT.
          <br />
          NOT ON HYPE.
          <br />
          FOR DOGS.
        </h1>

        <div className="flex flex-col gap-6 text-xs leading-relaxed tracking-[0.02em] text-[#555555]">
          <p>
            280 Blanks was founded with a single conviction: the most important
            garment your dog wears should be the simplest. Not the most
            embellished, not the most printed — the one you reach for before
            every walk, every single day.
          </p>
          <p>
            Every garment starts with the fabric. We source 280-gram combed
            organic cotton from certified Portuguese mills — the kind of weight
            that drapes differently, holds its shape wash after wash, and
            develops character over time rather than pilling at the belly.
          </p>
          <p>
            We produce in small runs in Portugal, working with the same
            families that have been cutting and stitching since the 1970s.
            Slow by design. No seasonal excess. No markdowns. Your dog
            deserves the same standards you apply to yourself.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#E8E8E8] pt-10">
          {[
            { value: "280", label: "GSM" },
            { value: "PT", label: "MADE IN PORTUGAL" },
            { value: "100%", label: "ORGANIC COTTON" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold tracking-[0.06em] text-[#111111]">
                {stat.value}
              </p>
              <p className="text-[9px] tracking-[0.14em] text-[#888888] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/#shop"
            className="inline-flex items-center gap-3 text-xs tracking-[0.14em] text-[#111111] hover:text-[#3A3A3A] transition-colors"
          >
            SHOP THE COLLECTION
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
