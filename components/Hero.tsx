"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // Changed pt-20 to pt-32 to account for the 20 (80px) Navbar + extra breathing room
    <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-tight mb-6">
            Unleash Your <br />
            <span className="italic text-brand-primary font-light">
              Inner Glow
            </span>
          </h1>
          <p className="text-lg text-brand-dark/70 mb-8 max-w-md mx-auto md:mx-0">
            Premium quality HD lace and virgin human hair, styled to perfection.
            Directly from our hands to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-brand-dark text-white px-8 py-4 rounded-sm font-semibold hover:bg-brand-primary transition-colors">
              Explore Collection
            </button>
            <button className="border border-brand-dark text-brand-dark px-8 py-4 rounded-sm font-semibold hover:bg-brand-beige transition-colors">
              View Care Guide
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[550px] w-full bg-brand-beige rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-2 border-brand-primary/20 shadow-2xl"
        >
          <div className="absolute inset-0 flex items-center justify-center text-brand-primary/40 font-serif italic text-xl px-10 text-center">
            [ High-Res Model Image ]
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
