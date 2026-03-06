import { motion } from 'motion/react';
import { Instagram, Twitter, ArrowUpRight, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 md:pt-32 pb-12 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 mb-24 md:mb-32">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter mb-8 italic">VOGUE.</h2>
              <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-12">
                A digital archive of contemporary elegance. We believe in the power of minimalism to transform the everyday into the extraordinary.
              </p>

              <div className="flex gap-6">
                {[Instagram, Twitter, Github].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, color: '#D4AF37' }}
                    className="text-white/30 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-10">Collections</h4>
              <ul className="space-y-6">
                {['The Archive', 'New Arrivals', 'Essentials', 'Sale'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-accent transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-10">House</h4>
              <ul className="space-y-6">
                {['Our Story', 'Atelier', 'Craftsmanship', 'Sustainability'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-accent transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-10">Newsletter</h4>
              <p className="text-white/40 text-xs mb-6 leading-relaxed">Join the archive for exclusive updates and early access.</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-white/10 pb-4 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-white/10"
                />
                <button className="absolute right-0 bottom-4 text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">
            © {currentYear} VOGUE Studio. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </footer>
  );
}
