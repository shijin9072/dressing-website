import { motion } from 'motion/react';
import { useRef } from 'react';
import { Plus, Eye } from 'lucide-react';

const outfits = [
  { id: 1, name: "Minimalist Linen", price: "$129", image: "https://images.unsplash.com/photo-1539109132314-3477524c8d95?q=80&w=987&auto=format&fit=crop" },
  { id: 2, name: "Urban Explorer", price: "$189", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=988&auto=format&fit=crop" },
  { id: 3, name: "Evening Silk", price: "$249", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop" },
  { id: 4, name: "Classic Denim", price: "$159", image: "https://images.unsplash.com/photo-1529139513477-3235a8ad4df4?q=80&w=987&auto=format&fit=crop" },
  { id: 5, name: "Modern Tailoring", price: "$329", image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, name: "Street Culture", price: "$119", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop" },
];

export default function OutfitShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-6xl font-serif">Studio Showcase</h2>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
            >
              ←
            </button>
            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-12"
      >
        {outfits.map((outfit) => (
          <motion.div
            key={outfit.id}
            className="min-w-[300px] md:min-w-[400px] snap-center group relative"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-white/5">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={outfit.image} 
                alt={outfit.name}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              
              {/* Quick Actions */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                  <Plus size={20} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75">
                  <Eye size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-serif mb-1">{outfit.name}</h3>
                <p className="text-white/50 text-xs uppercase tracking-widest">Limited Edition</p>
              </div>
              <span className="text-accent font-medium">{outfit.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
