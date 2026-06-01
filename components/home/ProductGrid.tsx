"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/mock-data";

export default function ProductGrid() {
  return (
    <section id="tienda" className="px-6 md:px-10 py-20 md:py-28 bg-[#F5F5F5]">
      {/* Cabecera */}
      <div className="flex items-center gap-6 mb-14">
        <span className="text-[10px] tracking-[0.22em] text-[#888888]">TIENDA</span>
        <div className="flex-1 h-px bg-[#E0E0E0]" />
        <span className="text-[10px] tracking-[0.12em] text-[#888888]">
          {products.length} ESTILOS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/products/${product.slug}`} className="group block">
              {/* Imagen */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E8E8]">
                <Image
                  src={product.images[0]}
                  alt={`${product.name} — ${product.colorway}`}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Info */}
              <div className="mt-5 flex justify-between items-start">
                <div>
                  <p className="text-[9px] tracking-[0.16em] text-[#AAAAAA] mb-1.5">
                    {product.number}.
                  </p>
                  <p className="text-xs tracking-[0.08em] text-[#111111] font-semibold">
                    {product.name}
                  </p>
                  <p className="text-[11px] tracking-[0.06em] text-[#888888] mt-1">
                    {product.colorway}
                  </p>
                </div>
                <p className="text-xs tracking-[0.04em] text-[#111111] font-medium mt-5">
                  €{product.price}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
