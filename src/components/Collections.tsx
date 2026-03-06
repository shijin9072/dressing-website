import { motion } from 'motion/react';

const collections = [
  {
    id: 1,
    title: "The Archival Series",
    subtitle: "Edition 01",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop",
    span: "md:col-span-7"
  },
  {
    id: 2,
    title: "Urban Noir",
    subtitle: "Streetwear",
    image: "https://images.unsplash.com/photo-1529139513477-3235a8ad4df4?q=80&w=987&auto=format&fit=crop",
    span: "md:col-span-5"
  },
  {
    id: 3,
    title: "Modern Tailoring",
    subtitle: "Formal",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-5"
  },
  {
    id: 4,
    title: "After Hours",
    subtitle: "Evening",
    image: "https://images.unsplash.com/photo-1539109132314-3477524c8d95?q=80&w=987&auto=format&fit=crop",
    span: "md:col-span-7"
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Curated Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
          >
            A Study in <br /> <span className="italic font-light">Elegance</span>
          </motion.h2>
        </div>
        <motion.button
          whileHover={{ x: 10 }}
          className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 hover:text-primary transition-colors"
        >
          Explore Entire Catalog
          <div className="w-12 h-px bg-primary/20 group-hover:bg-accent group-hover:w-16 transition-all duration-500" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {collections.map((col, i) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative group cursor-pointer overflow-hidden ${col.span} aspect-[4/5] md:aspect-auto h-[450px] md:h-[600px] bg-primary/5`}
          >
            {/* Image Wrapper for Curtain Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
              className="w-full h-full relative"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />

              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            {/* Content Card */}
            <div className="absolute bottom-0 left-0 p-10 w-full z-20">
              <div className="overflow-hidden mb-2">
                <p className="text-white/60 text-[9px] uppercase tracking-[0.4em] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  {col.subtitle}
                </p>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-white text-3xl font-serif translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-out">
                  {col.title}
                </h3>
              </div>

              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-0 group-hover:scale-100">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                  →
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
