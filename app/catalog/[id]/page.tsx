"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  MessageCircle,
  Truck,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { WIGS_DATA } from "@/data/wigs";

const ProductDetail = () => {
  const params = useParams();

  // Find the wig based on the ID in the URL
  const wig = WIGS_DATA.find((w) => w.id === Number(params.id));

  // Handle case where ID doesn't exist
  if (!wig) {
    return (
      <div className="pt-40 text-center">
        Wig not found.{" "}
        <Link href="/catalog" className="underline">
          Go back
        </Link>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/yournumber?text=Hi! I'm interested in the ${wig.name}...`;

  return (
    <main className="min-h-screen bg-brand-light">
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/catalog"
          className="flex items-center text-brand-dark/60 hover:text-brand-primary mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to Catalog</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Gallery Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-[4/5] bg-white border border-brand-beige rounded-3xl flex items-center justify-center text-brand-primary/20 italic text-xl">
              [ Main Product Image ]
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white border border-brand-beige rounded-xl cursor-pointer hover:border-brand-primary transition-all flex items-center justify-center text-[10px]"
                >
                  View {i}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2">
              {wig.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
              {wig.name}
            </h1>
            <p className="text-3xl font-bold text-brand-dark mb-6">
              {wig.price}
            </p>

            <div className="border-t border-b border-brand-beige py-6 mb-8">
              <p className="text-brand-dark/70 leading-relaxed mb-6">
                {wig.description}
              </p>

              {/* Technical Specs Grid */}
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-xs text-brand-dark/40 uppercase font-bold">
                    Length
                  </p>
                  <p className="font-medium text-brand-dark">{wig.length}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-dark/40 uppercase font-bold">
                    Density
                  </p>
                  <p className="font-medium text-brand-dark">{wig.density}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-dark/40 uppercase font-bold">
                    Lace Type
                  </p>
                  <p className="font-medium text-brand-dark">{wig.lace}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-dark/40 uppercase font-bold">
                    Availability
                  </p>
                  <p className="font-medium text-green-600">In Stock</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <a
                href={whatsappLink}
                className="flex items-center justify-center space-x-3 w-full bg-brand-whatsapp text-white py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <MessageCircle size={24} />
                <span>Inquire via WhatsApp</span>
              </a>
              <p className="text-center text-sm text-brand-dark/50">
                Typically responds in less than 30 minutes
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-brand-beige pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck size={20} className="text-brand-primary" />
                <span className="text-[10px] font-bold text-brand-dark uppercase">
                  Fast Shipping
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RefreshCcw size={20} className="text-brand-primary" />
                <span className="text-[10px] font-bold text-brand-dark uppercase">
                  Easy Install
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck size={20} className="text-brand-primary" />
                <span className="text-[10px] font-bold text-brand-dark uppercase">
                  100% Virgin
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
