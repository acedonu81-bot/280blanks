"use client";

import { useState } from "react";

interface Props {
  sizes: string[];
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, onSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(size: string) {
    setSelected(size);
    onSelect(size);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] tracking-[0.14em] text-[#888888]">TALLA</span>
        <button className="text-[10px] tracking-[0.1em] text-[#888888] underline underline-offset-2 hover:text-[#111111] transition-colors">
          GUÍA DE TALLAS
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSelect(size)}
            className={`h-10 px-3 text-[10px] tracking-[0.06em] border transition-colors ${
              selected === size
                ? "bg-[#111111] text-[#F5F5F5] border-[#111111]"
                : "bg-transparent text-[#111111] border-[#CCCCCC] hover:border-[#111111]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      {!selected && (
        <p className="text-[10px] tracking-[0.06em] text-[#888888] mt-2">
          Selecciona una talla
        </p>
      )}
    </div>
  );
}
