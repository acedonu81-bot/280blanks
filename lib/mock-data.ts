export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  number: string;
  name: string;
  colorway: string;
  price: number;
  currency: string;
  description: string;
  sizes: string[];
  specs: ProductSpec[];
  images: string[];
}

export const products: Product[] = [
  {
    id: "01",
    slug: "heavyweight-dog-tee-black",
    number: "01",
    name: "HEAVYWEIGHT DOG TEE",
    colorway: "BLACK",
    price: 89,
    currency: "EUR",
    description:
      "A foundation piece for your dog. 280 grams of combed organic cotton, cut for a relaxed canine silhouette with belly clearance, reinforced seams, and a snap closure at the neck.",
    sizes: ["XS — Chihuahua", "S — Beagle", "M — Labrador", "L — Pastor Alemán", "XL — Gran Danés"],
    specs: [
      { label: "Weight", value: "280 GSM" },
      { label: "Composition", value: "100% Combed Organic Cotton" },
      { label: "Fit", value: "Canine Cut, Belly Clearance" },
      { label: "Closure", value: "Snap Button at Neck" },
      { label: "Origin", value: "Made in Portugal" },
      { label: "Leash Opening", value: "Reinforced D-Ring Slot" },
      { label: "Care", value: "Machine Wash 40°C — Because Dog" },
    ],
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=90",
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=900&q=90",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=900&q=90",
    ],
  },
  {
    id: "02",
    slug: "heavyweight-dog-tee-off-white",
    number: "02",
    name: "HEAVYWEIGHT DOG TEE",
    colorway: "OFF WHITE",
    price: 89,
    currency: "EUR",
    description:
      "A foundation piece for your dog. 280 grams of combed organic cotton, cut for a relaxed canine silhouette with belly clearance, reinforced seams, and a snap closure at the neck.",
    sizes: ["XS — Chihuahua", "S — Beagle", "M — Labrador", "L — Pastor Alemán", "XL — Gran Danés"],
    specs: [
      { label: "Weight", value: "280 GSM" },
      { label: "Composition", value: "100% Combed Organic Cotton" },
      { label: "Fit", value: "Canine Cut, Belly Clearance" },
      { label: "Closure", value: "Snap Button at Neck" },
      { label: "Origin", value: "Made in Portugal" },
      { label: "Leash Opening", value: "Reinforced D-Ring Slot" },
      { label: "Care", value: "Machine Wash 40°C — Because Dog" },
    ],
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&q=90",
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=900&q=90",
    ],
  },
  {
    id: "03",
    slug: "heavyweight-dog-tee-slate",
    number: "03",
    name: "HEAVYWEIGHT DOG TEE",
    colorway: "SLATE GREY",
    price: 89,
    currency: "EUR",
    description:
      "A foundation piece for your dog. 280 grams of combed organic cotton, cut for a relaxed canine silhouette with belly clearance, reinforced seams, and a snap closure at the neck.",
    sizes: ["XS — Chihuahua", "S — Beagle", "M — Labrador", "L — Pastor Alemán", "XL — Gran Danés"],
    specs: [
      { label: "Weight", value: "280 GSM" },
      { label: "Composition", value: "100% Combed Organic Cotton" },
      { label: "Fit", value: "Canine Cut, Belly Clearance" },
      { label: "Closure", value: "Snap Button at Neck" },
      { label: "Origin", value: "Made in Portugal" },
      { label: "Leash Opening", value: "Reinforced D-Ring Slot" },
      { label: "Care", value: "Machine Wash 40°C — Because Dog" },
    ],
    images: [
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=90",
      "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=900&q=90",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
