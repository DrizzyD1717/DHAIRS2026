"use client";
import { motion } from "framer-motion";

const bestSellers = [
  { id: 1, name: "Sleek Bone Straight", price: "₦85,000", tag: "Hot" },
  { id: 2, name: "Bouncy Body Wave", price: "₦92,000", tag: "New" },
  { id: 3, name: "Kinky Curly Unit", price: "₦78,000", tag: "Best Seller" },
  { id: 4, name: "Deep Wave Frontal", price: "₦95,000", tag: "Limited" },
];

const BestSellers = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-brand-dark mb-2">
              Best Sellers
            </h2>
            <p className="text-brand-dark/60">
              Our most-loved units, curated for you.
            </p>
          </div>
          <button className="text-brand-primary font-bold hover:underline hidden md:block">
            View All Units &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((wig, index) => (
            <motion.div
              key={wig.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-white rounded-xl overflow-hidden border border-brand-beige flex items-center justify-center">
                {/* Product Tag */}
                <span className="absolute top-4 left-4 z-10 bg-brand-dark text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  {wig.tag}
                </span>

                {/* Image Placeholder */}
                <div className="text-brand-beige group-hover:scale-110 transition-transform duration-700">
                  [ Mannequin Image {wig.id} ]
                </div>

                {/* Quick Link Overlay */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-brand-dark px-6 py-2 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Details
                  </button>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-brand-dark">
                  {wig.name}
                </h3>
                <p className="text-brand-primary font-serif font-bold">
                  {wig.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
