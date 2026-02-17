import { ShieldCheck, Truck, Sparkles, Heart } from "lucide-react";

const Features = () => {
  const items = [
    {
      icon: <ShieldCheck />,
      title: "100% Virgin Hair",
      desc: "Our hair is ethically sourced and chemically unprocessed.",
    },
    {
      icon: <Sparkles />,
      title: "Custom Styled",
      desc: "Every wig is pre-plucked and styled by our master stylists.",
    },
    {
      icon: <Truck />,
      title: "Fast Delivery",
      desc: "Dispatched within 48 hours with worldwide tracking.",
    },
    {
      icon: <Heart />,
      title: "Confidence Boost",
      desc: "Designed to make you look and feel like royalty.",
    },
  ];

  return (
    <section className="py-20 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="text-brand-primary mb-4 scale-125">{item.icon}</div>
            <h4 className="font-bold text-brand-dark mb-2">{item.title}</h4>
            <p className="text-sm text-brand-dark/60 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
