import { motion } from 'motion/react';
import { ShoppingBag, Heart, ArrowRight } from 'lucide-react';

const products = [
  { id: 1, name: "Oversized Wool Coat", price: 499, category: "Outerwear", image: "https://images.unsplash.com/photo-1539109132314-3477524c8d95?q=80&w=987&auto=format&fit=crop" },
  { id: 2, name: "Silk Slip Dress", price: 220, category: "Dresses", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop" },
  { id: 3, name: "Tailored Blazer", price: 350, category: "Jackets", image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "Leather Chelsea Boots", price: 280, category: "Shoes", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, name: "Cashmere Scarf", price: 120, category: "Accessories", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, name: "High-Waist Trousers", price: 180, category: "Bottoms", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=987&auto=format&fit=crop" },
  { id: 7, name: "Minimalist Tote", price: 310, category: "Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop" },
  { id: 8, name: "Classic White Shirt", price: 95, category: "Tops", image: "https://images.unsplash.com/photo-1596755094514-f87034a264c6?q=80&w=987&auto=format&fit=crop" },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">New Season</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Meticulously <span className="italic font-light">Crafted</span></h2>
          <p className="text-secondary text-sm leading-relaxed max-w-sm">Explore our essential collection of seasonless staples designed for the modern lifestyle.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {['All Collections', 'Dresses', 'Outerwear', 'Essentials'].map((group, i) => (
            <button key={group} className="group relative px-6 py-2 overflow-hidden border border-primary/10 rounded-full transition-colors duration-500 hover:border-accent">
              <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold group-hover:text-white transition-colors duration-500">{group}</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 md:gap-y-20">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-primary/5 rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Luxury Detail Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Quick Actions */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <button className="w-full bg-white text-primary py-4 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all duration-500 shadow-xl">
                  <ShoppingBag size={14} strokeWidth={2} />
                  Add to Cart
                </button>
              </div>

              {/* Wishlist Icon */}
              <button className="absolute top-6 right-6 w-10 h-10 bg-surface/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:text-accent shadow-lg scale-90 group-hover:scale-100">
                <Heart size={16} strokeWidth={1.5} />
              </button>
            </div>

            <div className="space-y-3 px-1">
              <div className="flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.4em] text-secondary font-bold">{product.category}</p>
                <span className="text-xs font-serif text-accent font-medium">${product.price}</span>
              </div>
              <h3 className="text-base font-medium tracking-tight group-hover:italic transition-all duration-500 max-w-[80%] leading-snug">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center">
        <button className="group relative inline-flex items-center gap-4 px-16 py-5 border border-primary/10 transition-all duration-500 hover:border-accent overflow-hidden">
          <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold">View Collective</span>
          <ArrowRight size={14} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
          <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-accent translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
        </button>
      </div>
    </section>
  );
}
