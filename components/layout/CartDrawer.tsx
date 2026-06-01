"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, total, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/20"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.35 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#F5F5F5] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-14 border-b border-[#E8E8E8]">
              <span className="text-xs tracking-[0.12em] font-medium">
                CART {count > 0 && `(${count})`}
              </span>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="text-[#888888] hover:text-[#111111] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
                  <p className="text-xs tracking-[0.1em] text-[#888888]">YOUR CART IS EMPTY</p>
                </div>
              ) : (
                <ul className="flex flex-col gap-6">
                  {items.map((item) => (
                    <li key={`${item.productId}-${item.size}`} className="flex gap-4">
                      <div className="relative w-20 h-24 bg-[#EFEFEF] shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1 py-0.5">
                        <div>
                          <p className="text-xs tracking-[0.06em] font-medium leading-tight">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#888888] tracking-[0.04em] mt-0.5">
                            {item.colorway} — {item.size}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs tracking-[0.04em]">
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeItem(item.productId, item.size)}
                            className="text-[10px] tracking-[0.08em] text-[#888888] hover:text-[#111111] transition-colors underline underline-offset-2"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 pb-8 pt-4 border-t border-[#E8E8E8]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs tracking-[0.1em] text-[#888888]">TOTAL</span>
                  <span className="text-sm tracking-[0.04em] font-medium">
                    €{total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-[#111111] text-[#F5F5F5] text-xs tracking-[0.14em] font-medium h-12 hover:bg-[#3A3A3A] transition-colors">
                  CHECKOUT
                </button>
                <p className="text-center text-[10px] tracking-[0.06em] text-[#888888] mt-3">
                  Shipping calculated at checkout
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
