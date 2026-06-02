import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";

// Dorado suave de marca
const GOLD = "#C9A030";
const GOLD_DIM = "rgba(201,160,48,0.18)";
const SECTION_DARK = "#130F08"; // negro cálido, tira a dorado

export default function Home() {
  return (
    <>
      <Hero />

      {/* Manifesto — dark cálido con acentos dorados */}
      <section style={{ background: SECTION_DARK }} className="py-28 md:py-40 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[10px] tracking-[0.28em] mb-10"
            style={{ color: GOLD, opacity: 0.6 }}
          >
            EL ESTÁNDAR
          </p>
          <h2
            className="font-bold text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(30px, 4.5vw, 62px)" }}
          >
            Te espera en la puerta cada día.
            <br />
            Merece la mejor prenda que existe.
          </h2>
          <p className="mt-8 text-sm leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.38)" }}>
            Tu perro no entiende de marcas, pero siente la diferencia.
            280 gramos de algodón orgánico peinado — el doble que una camiseta
            convencional. Para el que más te quiere en este mundo.
          </p>

          {/* Stats con dorado */}
          <div
            className="mt-20 grid grid-cols-3 gap-8 pt-14"
            style={{ borderTop: `1px solid ${GOLD_DIM}` }}
          >
            {[
              { n: "280", label: "GRAMOS" },
              { n: "100%", label: "ALGODÓN ORGÁNICO" },
              { n: "PT", label: "HECHO EN PORTUGAL" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-bold tracking-tight"
                  style={{ fontSize: "clamp(28px, 4vw, 56px)", color: GOLD }}
                >
                  {s.n}
                </p>
                <p
                  className="text-[9px] tracking-[0.18em] mt-2"
                  style={{ color: "rgba(201,160,48,0.35)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de producto */}
      <ProductGrid />

      {/* Sección cierre — dark cálido */}
      <section
        style={{ background: SECTION_DARK }}
        className="py-28 px-6 md:px-16 text-center"
      >
        <p
          className="text-[10px] tracking-[0.28em] mb-8"
          style={{ color: GOLD, opacity: 0.5 }}
        >
          FABRICACIÓN RESPONSABLE
        </p>
        <h3
          className="font-bold text-white leading-tight tracking-tight mx-auto"
          style={{ fontSize: "clamp(26px, 3.5vw, 52px)", maxWidth: "720px" }}
        >
          El primero en recibirte.
          <br />
          El último en fallarte.
        </h3>
        <p
          className="mt-6 text-sm max-w-md mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Pequeñas tiradas. Sin excedentes. Sin rebajas. Sin prisas.
        </p>
        <a
          href="/about"
          className="inline-block mt-12 text-[10px] tracking-[0.2em] transition-opacity hover:opacity-100 pb-0.5"
          style={{ color: GOLD, opacity: 0.55, borderBottom: `1px solid ${GOLD_DIM}` }}
        >
          NUESTRA HISTORIA →
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 border-t border-[#E8E8E8] bg-[#F5F5F5]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-[10px] tracking-[0.18em] font-semibold">280 BLANKS</span>
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
          <span className="text-[10px] tracking-[0.06em] text-[#888888]">© 2025 280 BLANKS</span>
        </div>
      </footer>
    </>
  );
}
