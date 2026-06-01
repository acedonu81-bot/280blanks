import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Sección manifesto — dark, estilo Apple */}
      <section className="bg-[#0A0A0A] py-28 md:py-40 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.28em] text-white/25 mb-10">
            EL ESTÁNDAR
          </p>
          <h2
            className="font-bold text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(30px, 4.5vw, 62px)" }}
          >
            La mayoría de la ropa para perros
            <br />
            es decorativa. La nuestra, no.
          </h2>
          <p className="mt-8 text-sm text-white/40 leading-relaxed max-w-xl">
            280 gramos de algodón orgánico peinado. El doble del peso de una
            camiseta convencional. Porque tu perro merece prendas que aguanten
            el parque, la lluvia y el sofá — sin perder la forma.
          </p>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/8 pt-14">
            {[
              { n: "280", label: "GRAMOS" },
              { n: "100%", label: "ALGODÓN ORGÁNICO" },
              { n: "PT", label: "HECHO EN PORTUGAL" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-bold text-white tracking-tight"
                  style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
                >
                  {s.n}
                </p>
                <p className="text-[9px] tracking-[0.18em] text-white/25 mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de producto */}
      <ProductGrid />

      {/* Sección cierre — dark */}
      <section className="bg-[#0A0A0A] py-28 px-6 md:px-16 text-center">
        <p className="text-[10px] tracking-[0.28em] text-white/25 mb-8">
          FABRICACIÓN RESPONSABLE
        </p>
        <h3
          className="font-bold text-white leading-tight tracking-tight mx-auto"
          style={{ fontSize: "clamp(26px, 3.5vw, 52px)", maxWidth: "720px" }}
        >
          Pequeñas tiradas. Sin excedentes. Sin rebajas.
        </h3>
        <p className="mt-6 text-sm text-white/35 max-w-md mx-auto leading-relaxed">
          Producimos exactamente lo que vendemos. Cuando se acaba, se acaba.
        </p>
        <a
          href="/about"
          className="inline-block mt-12 text-[10px] tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors border-b border-white/15 pb-0.5"
        >
          NUESTRA HISTORIA →
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 border-t border-[#E8E8E8] bg-[#F5F5F5]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-[10px] tracking-[0.18em] font-semibold">
            280 BLANKS
          </span>
          <div className="flex gap-6">
            {[
              { label: "TIENDA", href: "/#tienda" },
              { label: "NOSOTROS", href: "/about" },
              { label: "CONTACTO", href: "mailto:hola@280blanks.com" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[10px] tracking-[0.1em] text-[#888888] hover:text-[#111111] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <span className="text-[10px] tracking-[0.06em] text-[#888888]">
            © 2025 280 BLANKS
          </span>
        </div>
      </footer>
    </>
  );
}
