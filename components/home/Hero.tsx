"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=2400&q=90"
        alt="280 Blanks perro"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay fuerte para contraste */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/40 text-[10px] tracking-[0.35em] mb-8"
        >
          COLECCIÓN 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-bold leading-[0.88] tracking-tight mb-8"
          style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
        >
          VISTE A TU<br />PERRO<br />CON CRITERIO.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-white/40 text-[10px] tracking-[0.22em] mb-12"
        >
          280 GSM · ALGODÓN ORGÁNICO · HECHO EN PORTUGAL
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Link
            href="/#tienda"
            className="inline-block bg-white text-black text-[10px] tracking-[0.22em] font-semibold px-12 py-4 hover:bg-[#F0F0F0] transition-colors"
          >
            VER COLECCIÓN
          </Link>
        </motion.div>
      </div>

      {/* Marca bottom-left */}
      <div className="absolute bottom-8 left-6 md:left-10">
        <p className="text-white/20 text-[9px] tracking-[0.2em]">280 BLANKS™</p>
      </div>

      {/* Línea scroll bottom-right */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/20" />
      </div>
    </section>
  );
}
