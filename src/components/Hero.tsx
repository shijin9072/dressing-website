import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const titleWords = "Dress Beyond Style".split(" ");

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-primary">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-bg z-10" />
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion Model"
          className="w-full h-full object-cover brightness-[0.8] grayscale-[0.2]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-white/60 font-medium">
            SS / 2026 Editorial
          </span>
        </motion.div>

        <div ref={textRef} className="overflow-hidden mb-12 md:mb-16">
          <h1 className="text-5xl md:text-[10rem] font-serif leading-[0.9] md:leading-[0.85] text-white flex flex-col items-center">
            <div className="flex overflow-hidden">
              {titleWords.slice(0, 2).map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-3 md:mr-8"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="italic font-light text-accent mt-0 md:mt-2"
            >
              {titleWords[2]}
            </motion.div>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <button className="group relative px-12 py-5 bg-white text-primary text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-colors hover:text-white">
            <span className="relative z-10 transition-colors group-hover:text-white">Explore Editorial</span>
            <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </button>

          <button className="group px-12 py-5 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:border-accent transition-all duration-500">
            View Lookbook
          </button>
        </motion.div>
      </div>

      {/* Floating Elements (Luxury Detail) */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 hidden lg:block"
      >
        <div className="w-px h-32 bg-gradient-to-b from-white to-transparent" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-accent w-full h-full"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/40">Discover</span>
      </motion.div>
    </section>
  );
}
