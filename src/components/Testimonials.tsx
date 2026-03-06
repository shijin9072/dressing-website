import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "VOGUE Studio has completely redefined how I think about digital fashion. The archive is a masterclass in curation and interactive design.",
    author: "Elena Rodriguez",
    role: "Editorial Stylist, Paris"
  },
  {
    id: 2,
    text: "The quality of the digital experience matches the luxury of the garments. It's rare to find such a poetic balance between tech and couture.",
    author: "James Chen",
    role: "Creative Director"
  },
  {
    id: 3,
    text: "Minimalism at its finest. Every interaction feels intentional and every frame is a curated editorial piece. Highly sophisticated.",
    author: "Sarah Jenkins",
    role: "Creative Consultant"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-40 bg-bg overflow-hidden relative border-t border-primary/5">
      {/* Decorative Brand Text Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[40vw] font-serif font-black tracking-tighter leading-none">VOGUE</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left: Decorative Elements */}
          <div className="hidden lg:block lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl grayscale"
            >
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Testimonial Slider */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-accent font-bold">Voices of the Studio</span>
            </motion.div>

            <div className="relative min-h-[400px] sm:min-h-[450px] md:h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="absolute inset-0"
                >
                  <Quote size={40} md:size={60} className="text-accent/10 mb-6 md:mb-10" />
                  <p className="text-2xl md:text-5xl font-serif mb-12 leading-[1.3] text-primary tracking-tight">
                    {testimonials[current].text}
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-px bg-primary/20" />
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-1">{testimonials[current].author}</h4>
                      <p className="text-[10px] text-secondary uppercase tracking-[0.2em] italic font-serif">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-12 mt-16 lg:mt-0">
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
                >
                  <ChevronLeft size={18} strokeWidth={1} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
                >
                  <ChevronRight size={18} strokeWidth={1} />
                </button>
              </div>

              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[2px] transition-all duration-700 ${current === i ? 'w-12 bg-accent' : 'w-4 bg-primary/10'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
