"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/mock-data";

export default function ProductGrid() {
  return (
    <section id="shop" className="px-6 md:px-10 py-20 md:py-28">
      {/* Section label */}
      <div className="flex items-center gap-6 mb-12">
        <span className="text-[10px] tracking-[0.2em] text-[#888888]">SHOP</span>
        <div className="flex-1 h-px bg-[#E8E8E8]" />
        <span className="text-[10px] tracking-[0.12em] text-[#888888]">{products.length} STYLES</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/products/${product.slug}`} className="group block">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EFEFEF]">
                <Image
                  src={product.images[0]}
                  alt={`${product.name} — ${product.colorway}`}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Product info */}
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <p className="text-[10px] tracking-[0.12em] text-[#888888] mb-1">
                    {product.number}.
                  </p>
                  <p className="text-xs tracking-[0.08em] text-[#111111] font-medium">
                    {product.name}
                  </p>
                  <p className="text-xs tracking-[0.06em] text-[#888888] mt-0.5">
                    {product.colorway}
                  </p>
                </div>
                <p className="text-xs tracking-[0.04em] text-[#111111] mt-5">
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
