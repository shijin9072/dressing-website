import { motion } from 'motion/react';
import { useRef } from 'react';
import { Plus, Eye, ArrowRight, ArrowLeft } from 'lucide-react';

const outfits = [
  { id: 1, name: "Minimalist Linen", price: 129, category: "Edition 01", image: "https://images.unsplash.com/photo-1539109132314-3477524c8d95?q=80&w=987&auto=format&fit=crop" },
  { id: 2, name: "Urban Explorer", price: 189, category: "Edition 02", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=988&auto=format&fit=crop" },
  { id: 3, name: "Evening Silk", price: 249, category: "Edition 03", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop" },
  { id: 4, name: "Classic Denim", price: 159, category: "Edition 04", image: "https://images.unsplash.com/photo-1529139513477-3235a8ad4df4?q=80&w=987&auto=format&fit=crop" },
  { id: 5, name: "Modern Tailoring", price: 329, category: "Edition 05", image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, name: "Street Culture", price: 119, category: "Edition 06", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop" },
];

export default function OutfitShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-40 bg-primary text-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Studio Archive</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-serif italic mb-8 leading-tight">Selected <span className="font-light not-italic">Silhouettes</span></h2>
          </div>

          <div className="flex gap-6">
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
              className="group w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:bg-accent transition-all duration-500"
            >
              <ArrowLeft size={20} strokeWidth={1} className="group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
              className="group w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:bg-accent transition-all duration-500"
            >
              <ArrowRight size={20} strokeWidth={1} className="group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-20"
      >
        {outfits.map((outfit, i) => (
          <motion.div
            key={outfit.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[450px] snap-center group relative cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden mb-6 md:mb-8 bg-white/5 relative rounded-sm">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                src={outfit.image}
                alt={outfit.name}
                className="w-full h-full object-cover opacity-80 grayscale-[0.4] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />

              {/* Floating Indicators */}
              <div className="absolute top-8 right-8 flex flex-col gap-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors duration-500">
                  <Plus size={18} />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end px-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-3 block">{outfit.category}</span>
                <h3 className="text-2xl font-serif text-white group-hover:italic transition-all duration-500">{outfit.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-sm font-serif text-white/40 block mb-1">Price</span>
                <span className="text-xl font-serif text-white transition-colors group-hover:text-accent">${outfit.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
        {/* View All Card */}
        <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[450px] snap-center flex items-center justify-center border border-white/5 group hover:border-accent transition-colors duration-500">
          <div className="text-center p-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8">End of Collective</p>
            <button className="text-3xl font-serif italic text-white flex items-center gap-4 group-hover:text-accent transition-colors">
              Explore Studio <ArrowRight size={24} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
