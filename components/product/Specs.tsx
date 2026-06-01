"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductSpec } from "@/lib/mock-data";

interface Props {
  specs: ProductSpec[];
}

export default function Specs({ specs }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#E8E8E8]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-[10px] tracking-[0.14em] text-[#888888]">
          ESPECIFICACIONES TÉCNICAS
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#888888] text-lg leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between py-2.5 border-b border-[#F0F0F0] last:border-0"
                >
                  <span className="text-[10px] tracking-[0.1em] text-[#888888]">
                    {spec.label.toUpperCase()}
                  </span>
                  <span className="text-[10px] tracking-[0.06em] text-[#111111] text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
