import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />

      {/* Footer strip */}
      <footer className="px-6 md:px-10 py-8 border-t border-[#E8E8E8]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-[10px] tracking-[0.18em] font-medium">280 BLANKS</span>
          <div className="flex gap-6">
            <a href="/about" className="text-[10px] tracking-[0.1em] text-[#888888] hover:text-[#111111] transition-colors">
              ABOUT
            </a>
            <a href="/studio" className="text-[10px] tracking-[0.1em] text-[#888888] hover:text-[#111111] transition-colors">
              STUDIO
            </a>
            <a href="mailto:studio@280blanks.com" className="text-[10px] tracking-[0.1em] text-[#888888] hover:text-[#111111] transition-colors">
              CONTACT
            </a>
          </div>
          <span className="text-[10px] tracking-[0.06em] text-[#888888]">
            © 2025 280 BLANKS
          </span>
        </div>
      </footer>
    </>
  );
}
