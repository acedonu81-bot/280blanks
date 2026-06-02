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
        <p className="text-[10px] tracking-[0.2em] text-[#888888] mb-8">NOSOTROS</p>

        <h1 className="text-2xl md:text-3xl tracking-[0.04em] font-bold text-[#111111] mb-10 leading-snug">
          HECHO PARA EL QUE<br />MÁS TE QUIERE<br />EN ESTE MUNDO.
        </h1>

        <div className="flex flex-col gap-6 text-xs leading-relaxed tracking-[0.02em] text-[#555555]">
          <p>
            280 Blanks nació de una convicción: tu perro no es una mascota,
            es compañía real. Te espera, te consuela, te da lo mejor de sí
            sin pedir nada a cambio.
          </p>
          <p>
            Por eso la prenda que lleva puesta no puede ser cualquier cosa.
            Usamos algodón orgánico peinado de 280 gramos — el doble que una
            camiseta convencional — cortado en Portugal por las mismas familias
            que llevan cosiendo desde los años 70.
          </p>
          <p>
            Sin estampados que caducan. Sin tallas que no cuadran. Sin fast
            fashion para perros. Solo prendas que aguantan el parque, el sofá
            y los diez años que ojalá pasen demasiado rápido.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#E8E8E8] pt-10">
          {[
            { value: "280", label: "GSM" },
            { value: "PT", label: "HECHO EN PORTUGAL" },
            { value: "100%", label: "ALGODÓN ORGÁNICO" },
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
