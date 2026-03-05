import { motion } from 'motion/react';

const collections = [
  {
    id: 1,
    title: "Summer Collection",
    subtitle: "Light & Airy",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Streetwear",
    subtitle: "Urban Edge",
    image: "https://images.unsplash.com/photo-1529139513477-3235a8ad4df4?q=80&w=987&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Formal Wear",
    subtitle: "Timeless Elegance",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    title: "Party Wear",
    subtitle: "Night Out",
    image: "https://images.unsplash.com/photo-1539109132314-3477524c8d95?q=80&w=987&auto=format&fit=crop",
    size: "medium"
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Curated Collections</h2>
          <p className="text-primary/60 max-w-md">Discover our latest drops designed for every occasion, from high-street fashion to elegant evening wear.</p>
        </div>
        <button className="text-xs uppercase tracking-widest font-semibold border-b border-primary pb-2 hover:text-accent hover:border-accent transition-all">
          View All Collections
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {collections.map((col, i) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`relative group cursor-pointer overflow-hidden ${
              col.size === 'large' ? 'md:col-span-8 h-[600px]' : 
              col.size === 'medium' ? 'md:col-span-7 h-[500px]' : 
              'md:col-span-4 h-[500px]'
            } ${i === 2 ? 'md:col-span-5' : ''}`}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
              className="w-full h-full"
            >
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-white/70 text-[10px] uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {col.subtitle}
              </p>
              <h3 className="text-white text-3xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {col.title}
              </h3>
              <div className="mt-6 overflow-hidden">
                <button className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  Shop Collection <span className="w-8 h-[1px] bg-white" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
