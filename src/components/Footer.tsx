import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const instaFeed = [
  "https://images.unsplash.com/photo-1539109132314-3477524c8d95?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139513477-3235a8ad4df4?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Instagram Feed */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif">Follow Our Journey</h3>
            <a href="#" className="text-xs uppercase tracking-widest hover:text-accent transition-colors">@vogue_studio</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instaFeed.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden group relative cursor-pointer">
                <img src={img} alt="Insta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* Brand & Newsletter */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif mb-8 tracking-widest">VOGUE</h2>
            <p className="text-white/60 mb-8 max-w-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-accent transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Connect</h4>
            <div className="flex gap-6 mb-8">
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            </div>
            <p className="text-xs text-white/40">© 2026 VOGUE Studio. <br />All rights reserved.</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="flex gap-4 grayscale opacity-30">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
