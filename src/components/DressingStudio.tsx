import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Check, RotateCcw, ShoppingBag } from 'lucide-react';

interface ClothingItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

const models = [
  { id: 'm1', name: 'Aria', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop' },
  { id: 'm2', name: 'Leo', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop' },
];

const clothes: Record<string, ClothingItem[]> = {
  tops: [
    { id: 't1', name: 'Silk Blouse', price: 89, image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2070&auto=format&fit=crop' },
    { id: 't2', name: 'Linen Shirt', price: 65, image: 'https://images.unsplash.com/photo-1596755094514-f87034a264c6?q=80&w=987&auto=format&fit=crop' },
    { id: 't3', name: 'Cashmere Knit', price: 120, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop' },
  ],
  bottoms: [
    { id: 'b1', name: 'Wide Trousers', price: 110, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=987&auto=format&fit=crop' },
    { id: 'b2', name: 'Pencil Skirt', price: 75, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1064&auto=format&fit=crop' },
    { id: 'b3', name: 'Tailored Shorts', price: 55, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop' },
  ],
  shoes: [
    { id: 's1', name: 'Leather Loafers', price: 150, image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2070&auto=format&fit=crop' },
    { id: 's2', name: 'Minimal Sneakers', price: 95, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1064&auto=format&fit=crop' },
  ],
  accessories: [
    { id: 'a1', name: 'Gold Chain', price: 45, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=987&auto=format&fit=crop' },
    { id: 'a2', name: 'Silk Scarf', price: 30, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop' },
  ]
};

export default function DressingStudio() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [activeCategory, setActiveCategory] = useState('tops');
  const [outfit, setOutfit] = useState<Record<string, ClothingItem | null>>({
    tops: null,
    bottoms: null,
    shoes: null,
    accessories: null
  });

  const toggleItem = (category: string, item: ClothingItem) => {
    setOutfit(prev => ({
      ...prev,
      [category]: prev[category]?.id === item.id ? null : item
    }));
  };

  const totalPrice = Object.values(outfit).reduce((acc: number, item) => {
    const clothingItem = item as ClothingItem | null;
    return acc + (clothingItem?.price || 0);
  }, 0);

  return (
    <section id="studio" className="py-24 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Interactive Studio</h2>
          <p className="text-primary/60">Mix and match our pieces to create your perfect look.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Panel: Categories & Items */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex gap-4 border-b border-primary/10 pb-4 overflow-x-auto no-scrollbar">
              {Object.keys(clothes).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 transition-all ${
                    activeCategory === cat ? 'bg-primary text-white' : 'text-primary/40 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {clothes[activeCategory].map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  onClick={() => toggleItem(activeCategory, item)}
                  className={`cursor-pointer p-2 border transition-all ${
                    outfit[activeCategory]?.id === item.id ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <div className="aspect-square bg-gray-50 mb-3 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {outfit[activeCategory]?.id === item.id && (
                      <div className="absolute top-2 right-2 bg-accent text-white p-1 rounded-full">
                        <Check size={12} />
                      </div>
                    )}
                  </div>
                  <h4 className="text-xs font-medium mb-1">{item.name}</h4>
                  <p className="text-[10px] text-primary/40">${item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center: Model Preview */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedModel.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  src={selectedModel.image}
                  alt="Model"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Overlaying Selected Items (Conceptual Visual Feedback) */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              
              {/* Model Switcher */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg">
                {models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m)}
                    className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                      selectedModel.id === m.id ? 'border-accent scale-110' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Summary */}
          <div className="lg:col-span-4 bg-primary/5 p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-serif">Selected Outfit</h3>
              <button 
                onClick={() => setOutfit({ tops: null, bottoms: null, shoes: null, accessories: null })}
                className="text-primary/40 hover:text-primary transition-colors"
              >
                <RotateCcw size={18} />
              </button>
            </div>

            <div className="space-y-6 mb-12">
              {Object.entries(outfit).map(([cat, item]) => {
                const clothingItem = item as ClothingItem | null;
                return (
                  <div key={cat} className="flex items-center justify-between border-b border-primary/5 pb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary/40 mb-1">{cat}</p>
                      <p className="text-sm font-medium">{clothingItem ? clothingItem.name : 'None selected'}</p>
                    </div>
                    {clothingItem && <p className="text-sm font-serif">${clothingItem.price}</p>}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-serif">Total</span>
              <span className="text-2xl font-serif text-accent">${totalPrice}</span>
            </div>

            <button className="w-full py-4 bg-primary text-white uppercase text-xs tracking-[0.2em] font-bold flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500">
              <ShoppingBag size={18} />
              Add Outfit to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
