"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "HD Lace Frontals",
    image: "✨",
    desc: "Seamless blending for a natural hairline.",
  },
  {
    title: "Luxury Closures",
    image: "👑",
    desc: "Low maintenance, high impact styling.",
  },
  {
    title: "Ready-to-Wear",
    image: "🕒",
    desc: "Glueless wigs for the woman on the go.",
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-brand-dark mb-4"
          >
            Shop by Category
          </motion.h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 bg-brand-beige rounded-2xl overflow-hidden mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                {/* Image Placeholder */}
                <span className="grayscale group-hover:grayscale-0 transition duration-500">
                  {cat.image}
                </span>
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors" />
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-2">
                {cat.title}
              </h3>
              <p className="text-brand-dark/60 mb-4">{cat.desc}</p>
              <span className="text-brand-primary font-bold inline-block border-b-2 border-transparent hover:border-brand-primary transition-all">
                View Collection &rarr;
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
