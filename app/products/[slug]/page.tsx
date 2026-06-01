"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import { getProduct, products } from "@/lib/mock-data";
import ImageGallery from "@/components/product/ImageGallery";
import SizeSelector from "@/components/product/SizeSelector";
import Specs from "@/components/product/Specs";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const product = getProduct(slug);

  if (!product) return notFound();

  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  function handleAddToCart() {
    if (!selectedSize) {
      setError(true);
      return;
    }
    setError(false);
    addItem({
      productId: product!.id,
      slug: product!.slug,
      name: product!.name,
      colorway: product!.colorway,
      size: selectedSize,
      price: product!.price,
      image: product!.images[0],
    });
  }

  return (
    <div className="pt-14">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 py-4 border-b border-[#E8E8E8]">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#888888]">
          <Link href="/" className="hover:text-[#111111] transition-colors">INICIO</Link>
          <span>/</span>
          <Link href="/#tienda" className="hover:text-[#111111] transition-colors">TIENDA</Link>
          <span>/</span>
          <span className="text-[#111111]">{product.number}. {product.colorway}</span>
        </nav>
      </div>

      <div className="px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-10 md:gap-16 max-w-[1200px] mx-auto">
          {/* Galería */}
          <ImageGallery images={product.images} productName={product.name} />

          {/* Info producto */}
          <div className="md:sticky md:top-24 h-fit flex flex-col gap-6">
            <div>
              <p className="text-[10px] tracking-[0.16em] text-[#888888] mb-2">
                {product.number}.
              </p>
              <h1 className="text-sm tracking-[0.12em] font-semibold text-[#111111] leading-snug">
                {product.name}
              </h1>
              <p className="text-xs tracking-[0.08em] text-[#888888] mt-1">
                {product.colorway}
              </p>
            </div>

            <p className="text-sm tracking-[0.06em] font-semibold">
              €{product.price.toFixed(2)} EUR
            </p>

            <p className="text-xs leading-relaxed text-[#888888] tracking-[0.02em] max-w-xs">
              {product.description}
            </p>

            <div className="h-px bg-[#E8E8E8]" />

            <div>
              <SizeSelector
                sizes={product.sizes}
                onSelect={(s) => {
                  setSelectedSize(s);
                  setError(false);
                }}
              />
              {error && (
                <p className="text-[10px] tracking-[0.08em] text-red-500 mt-2">
                  Selecciona una talla antes de añadir al carrito.
                </p>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full h-12 bg-[#111111] text-[#F5F5F5] text-xs tracking-[0.2em] font-semibold hover:bg-[#3A3A3A] transition-colors"
            >
              AÑADIR AL CARRITO
            </button>

            <div className="flex flex-col gap-2">
              {[
                "Envío gratis en pedidos superiores a €150",
                "Devoluciones gratuitas en 30 días",
                "Fabricado en Portugal",
              ].map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#888888] rounded-full shrink-0" />
                  <span className="text-[10px] tracking-[0.06em] text-[#888888]">{line}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-[#E8E8E8]" />

            <Specs specs={product.specs} />
          </div>
        </div>
      </div>

      {/* Otros colores */}
      <div className="px-6 md:px-10 py-16 border-t border-[#E8E8E8]">
        <p className="text-[10px] tracking-[0.18em] text-[#888888] mb-8">OTROS COLORES</p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {products
            .filter((p) => p.slug !== product.slug)
            .map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="shrink-0 group"
              >
                <div className="relative w-36 aspect-[3/4] overflow-hidden bg-[#EFEFEF]">
                  <img
                    src={p.images[0]}
                    alt={p.colorway}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="text-[10px] tracking-[0.08em] text-[#888888] mt-2">{p.colorway}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
