"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!zoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-2 order-2 md:order-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-14 md:w-16 aspect-[3/4] shrink-0 overflow-hidden transition-opacity ${
                activeIndex === i ? "opacity-100" : "opacity-35 hover:opacity-65"
              }`}
            >
              <Image
                src={src}
                alt={`${productName} vista ${i + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Imagen principal */}
      <div
        className={`relative flex-1 aspect-[3/4] overflow-hidden bg-[#EFEFEF] order-1 md:order-2 ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
        onClick={() => setZoomed(!zoomed)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoomed(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex]}
              alt={productName}
              fill
              priority
              className="object-cover object-center"
              style={
                zoomed
                  ? {
                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                      transform: "scale(2.2)",
                      transition: "transform 0.1s ease-out",
                    }
                  : {
                      transform: "scale(1)",
                      transition: "transform 0.3s ease-out",
                    }
              }
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </motion.div>
        </AnimatePresence>

        {!zoomed && (
          <div className="absolute bottom-3 right-3 text-[9px] tracking-[0.1em] text-[#888888] bg-[#F5F5F5]/80 px-2 py-1">
            + ZOOM
          </div>
        )}
      </div>
    </div>
  );
}
