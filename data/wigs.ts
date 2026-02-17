// src/data/wigs.ts

export interface Wig {
  id: number;
  name: string;
  category: "Frontals" | "Closures" | "Ready-to-Wear";
  price: string;
  density: string;
  length: string;
  lace: string;
  description: string;
  tag?: string;
}

export const WIGS_DATA: Wig[] = [
  {
    id: 1,
    name: "Bone Straight Frontal",
    category: "Frontals",
    price: "₦120,000",
    density: "180%",
    length: '24"',
    lace: "HD Lace",
    tag: "Hot",
    description:
      "Our signature Bone Straight unit is made from 100% single-donor virgin hair. It maintains its sleekness even in humid weather.",
  },
  {
    id: 2,
    name: "Bouncy Body Wave",
    category: "Closures",
    price: "₦85,000",
    density: "150%",
    length: '20"',
    lace: "Transparent Lace",
    tag: "Best Seller",
    description:
      "Beautifully defined waves that offer volume and bounce. Perfect for a glamorous everyday look.",
  },
  //   Edit below this line to add more wigs, ensuring to follow the same structure for each wig object.
  {
    id: 3,
    name: "Kinky Curly Glueless",
    category: "Ready-to-Wear",
    price: "₦95,000",
    density: "200%",
    length: '18"',
    lace: "HD Lace",
    description:
      "Our Kinky Curly Glueless unit is designed for those who love a natural, voluminous look. The curls are tight and bouncy, giving you a full head of hair that looks effortlessly chic.",
  },
  {
    id: 4,
    name: "Deep Wave Frontal",
    category: "Frontals",
    price: "₦110,000",
    density: "180%",
    length: '22"',
    lace: "Transparent Lace",
    description:
      "The Deep Wave Frontal offers a luxurious wave pattern that adds depth and dimension to your look. It's perfect for those who want a glamorous yet natural style.",
  },
  {
    id: 5,
    name: "Short Bob Closure",
    category: "Closures",
    price: "₦65,000",
    density: "150%",
    length: '12"',
    lace: "HD Lace",
    description:
      "Our Short Bob Closure is a chic and versatile option for those who want a low-maintenance yet stylish look. The sleek bob cut is perfect for any occasion.",
  },
  // Add more wigs as needed
  // Add all your wigs here once...
];
