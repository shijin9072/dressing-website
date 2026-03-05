import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "VOGUE Studio has completely redefined how I think about digital fashion. The interactive studio is a game-changer for planning my seasonal wardrobe.",
    author: "Elena Rodriguez",
    role: "Fashion Stylist"
  },
  {
    id: 2,
    text: "The quality of the pieces and the seamless shopping experience make it my go-to destination for premium essentials. Every piece feels curated.",
    author: "James Chen",
    role: "Creative Director"
  },
  {
    id: 3,
    text: "Minimalism at its finest. The aesthetic of the website matches the elegance of the clothes. Truly a luxury experience from start to finish.",
    author: "Sarah Jenkins",
    role: "Model"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <Quote size={48} className="text-accent/20" />
        </motion.div>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="absolute inset-0"
            >
              <p className="text-xl md:text-3xl font-serif italic mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{testimonials[current].author}</h4>
                <p className="text-xs text-primary/40 uppercase tracking-widest">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                current === i ? 'w-8 bg-accent' : 'bg-primary/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
