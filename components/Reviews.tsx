"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Tola A.",
    text: "The HD lace literally disappeared into my skin! Best investment ever.",
    stars: 5,
  },
  {
    name: "Chioma O.",
    text: "Minimal shedding and the curls hold so well. I'm obsessed.",
    stars: 5,
  },
  {
    name: "Blessing W.",
    text: "Shipping was fast and the packaging felt so luxury. 10/10.",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-serif text-brand-light italic">
          What Our Dolls Say
        </h2>
      </div>

      <div className="flex space-x-6 px-6 overflow-x-auto pb-8 no-scrollbar">
        {reviews.map((rev, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="min-w-[300px] md:min-w-[400px] bg-brand-light/5 border border-brand-light/10 p-8 rounded-2xl"
          >
            <div className="flex space-x-1 mb-4">
              {[...Array(rev.stars)].map((_, idx) => (
                <Star
                  key={idx}
                  size={16}
                  className="fill-brand-accent text-brand-accent"
                />
              ))}
            </div>
            <p className="text-brand-light/80 text-lg mb-6 leading-relaxed">
              "{rev.text}"
            </p>
            <span className="text-brand-primary font-bold">— {rev.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
