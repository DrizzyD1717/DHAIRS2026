"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link
import { WIGS_DATA } from "@/data/wigs"; // Import the shared data
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Frontals", "Closures", "Ready-to-Wear"];

const CatalogPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredWigs =
    activeTab === "All"
      ? WIGS_DATA
      : WIGS_DATA.filter((wig) => wig.category === activeTab);

  return (
    <main className="min-h-screen bg-brand-light">
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4 text-center">
            Our Collection
          </h1>
          <p className="text-brand-dark/60 text-center max-w-xl mx-auto">
            Browse our premium selection of human hair units. Every piece is
            curated for longevity and style.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeTab === cat
                  ? "bg-brand-dark text-white border-brand-dark"
                  : "bg-white text-brand-dark border-brand-beige hover:border-brand-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredWigs.map((wig) => (
              <motion.div
                key={wig.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* WRAP THE CARD IN A LINK */}
                <Link href={`/catalog/${wig.id}`}>
                  <div className="bg-white border border-brand-beige rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-square bg-brand-beige/20 flex items-center justify-center">
                      <span className="text-brand-primary/20 italic">
                        Click to view {wig.name}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-dark">
                        {wig.name}
                      </h3>
                      <p className="text-brand-primary font-serif font-bold">
                        ₦{wig.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};

export default CatalogPage;
