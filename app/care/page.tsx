"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ShowerHead, Wind, Moon, Sun } from "lucide-react";

const careTips = [
  {
    icon: <ShowerHead className="text-brand-primary" size={32} />,
    title: "Washing & Conditioning",
    steps: [
      "Detangle gently with a wide-tooth comb before washing.",
      "Use lukewarm water and sulfate-free shampoo.",
      "Do not rub the hair; stroke the shampoo through from root to tip.",
      "Apply conditioner, avoiding the lace/knots, and leave for 10 mins.",
    ],
  },
  {
    icon: <Wind className="text-brand-primary" size={32} />,
    title: "Drying & Styling",
    steps: [
      "Pat dry with a microfiber towel—never wring the hair.",
      "Air drying is best to maintain the hair's natural luster.",
      "If using heat, always apply a high-quality heat protectant.",
      "Keep heat settings below 180°C to prevent fiber damage.",
    ],
  },
  {
    icon: <Moon className="text-brand-primary" size={32} />,
    title: "Nighttime Routine",
    steps: [
      "Never sleep with a wet wig.",
      "For glue-less units, remove and place on a wig stand.",
      "If installed, use a silk or satin bonnet/scarf.",
      "Braid long hair into 2-3 loose sections to prevent tangles.",
    ],
  },
];

const CarePage = () => {
  return (
    <main className="min-h-screen bg-brand-light">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-brand-beige/20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-serif text-brand-dark mb-6">
            Dhairs Care Guide
          </h1>
          <p className="text-lg text-brand-dark/70">
            A premium unit is an investment. Follow our professional guide to
            keep your wigs looking "fresh-out-the-box" for years.
          </p>
        </motion.div>
      </section>

      {/* Care Tips Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {careTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-brand-beige shadow-sm"
            >
              <div className="mb-6">{tip.icon}</div>
              <h3 className="text-2xl font-serif text-brand-dark mb-4">
                {tip.title}
              </h3>
              <ul className="space-y-4">
                {tip.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start text-brand-dark/70 text-sm"
                  >
                    <span className="text-brand-primary mr-2">•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pro-Tip Callout */}
      <section className="py-20 px-6">
        <motion.div
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-4xl mx-auto bg-brand-dark text-white p-12 rounded-[40px] relative overflow-hidden text-center"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-4 italic text-brand-accent">
              The Golden Rule
            </h2>
            <p className="text-xl text-brand-light/80">
              "Treat your wig like your own hair, but with more patience. Avoid
              heavy oils and always prioritize the health of the lace."
            </p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />
        </motion.div>
      </section>
    </main>
  );
};

export default CarePage;
