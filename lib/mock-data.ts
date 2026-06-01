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
    slug: "heavyweight-tshirt-black",
    number: "01",
    name: "HEAVYWEIGHT T-SHIRT",
    colorway: "BLACK",
    price: 89,
    currency: "EUR",
    description:
      "A foundation piece. 280 grams of combed organic cotton, engineered with a boxy silhouette, dropped shoulder, and double-stitched seams built to last.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    specs: [
      { label: "Weight", value: "280 GSM" },
      { label: "Composition", value: "100% Combed Organic Cotton" },
      { label: "Fit", value: "Boxy, Dropped Shoulder" },
      { label: "Origin", value: "Made in Portugal" },
      { label: "Neckline", value: "Ribbed Crewneck" },
      { label: "Stitching", value: "Double-Needle Hem" },
      { label: "Care", value: "Machine Wash 30°C, Tumble Dry Low" },
    ],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&q=90",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=90",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=90",
    ],
  },
  {
    id: "02",
    slug: "heavyweight-tshirt-off-white",
    number: "02",
    name: "HEAVYWEIGHT T-SHIRT",
    colorway: "OFF WHITE",
    price: 89,
    currency: "EUR",
    description:
      "A foundation piece. 280 grams of combed organic cotton, engineered with a boxy silhouette, dropped shoulder, and double-stitched seams built to last.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    specs: [
      { label: "Weight", value: "280 GSM" },
      { label: "Composition", value: "100% Combed Organic Cotton" },
      { label: "Fit", value: "Boxy, Dropped Shoulder" },
      { label: "Origin", value: "Made in Portugal" },
      { label: "Neckline", value: "Ribbed Crewneck" },
      { label: "Stitching", value: "Double-Needle Hem" },
      { label: "Care", value: "Machine Wash 30°C, Tumble Dry Low" },
    ],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=90",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&q=90",
    ],
  },
  {
    id: "03",
    slug: "heavyweight-tshirt-slate",
    number: "03",
    name: "HEAVYWEIGHT T-SHIRT",
    colorway: "SLATE GREY",
    price: 89,
    currency: "EUR",
    description:
      "A foundation piece. 280 grams of combed organic cotton, engineered with a boxy silhouette, dropped shoulder, and double-stitched seams built to last.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    specs: [
      { label: "Weight", value: "280 GSM" },
      { label: "Composition", value: "100% Combed Organic Cotton" },
      { label: "Fit", value: "Boxy, Dropped Shoulder" },
      { label: "Origin", value: "Made in Portugal" },
      { label: "Neckline", value: "Ribbed Crewneck" },
      { label: "Stitching", value: "Double-Needle Hem" },
      { label: "Care", value: "Machine Wash 30°C, Tumble Dry Low" },
    ],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&q=90",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900&q=90",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
