import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  { id: 1, name: "Oversized Wool Coat", price: "$499", category: "Outerwear", image: "https://images.unsplash.com/photo-1539109132314-3477524c8d95?q=80&w=987&auto=format&fit=crop" },
  { id: 2, name: "Silk Slip Dress", price: "$220", category: "Dresses", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop" },
  { id: 3, name: "Tailored Blazer", price: "$350", category: "Jackets", image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "Leather Chelsea Boots", price: "$280", category: "Shoes", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, name: "Cashmere Scarf", price: "$120", category: "Accessories", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, name: "High-Waist Trousers", price: "$180", category: "Bottoms", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=987&auto=format&fit=crop" },
  { id: 7, name: "Minimalist Tote", price: "$310", category: "Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop" },
  { id: 8, name: "Classic White Shirt", price: "$95", category: "Tops", image: "https://images.unsplash.com/photo-1596755094514-f87034a264c6?q=80&w=987&auto=format&fit=crop" },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Trending Now</h2>
          <p className="text-primary/60">Our most wanted pieces of the season.</p>
        </div>
        <div className="flex gap-4">
          {['All', 'New In', 'Best Sellers'].map((filter) => (
            <button key={filter} className="text-[10px] uppercase tracking-widest font-bold px-4 py-2 border border-primary/10 hover:border-primary transition-all">
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-primary/5">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Quick Add Button */}
              <button className="absolute bottom-4 left-4 right-4 bg-white text-primary py-3 text-[10px] uppercase tracking-widest font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-accent hover:text-white">
                <ShoppingCart size={14} />
                Quick Add
              </button>
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-accent">
                <Heart size={14} />
              </button>
            </div>
            
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-primary/40">{product.category}</p>
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium group-hover:text-accent transition-colors">{product.name}</h3>
                <span className="text-sm font-serif">{product.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <button className="px-12 py-4 border border-primary text-primary uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-white transition-all duration-500">
          Load More Products
        </button>
      </div>
    </section>
  );
}
