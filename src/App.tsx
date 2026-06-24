import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Bespoke } from './pages/Bespoke';
import { Admin } from './pages/Admin';

// Placeholder components for the remaining pages
const ComingSoon = ({ title }: { title: string }) => (
  <div className="h-[60vh] flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl font-serif text-[#1A1A1A] mb-4 uppercase">{title}</h1>
    <p className="text-[#737373] tracking-widest uppercase text-sm">This page is currently under construction.</p>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks: { label: string, page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'Bespoke Studio', page: 'bespoke' },
    { label: 'Heritage', page: 'heritage' },
    { label: 'Contact', page: 'contact' },
    { label: 'Admin', page: 'admin' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white flex flex-col">
      {/* Navigation */}
      {currentPage !== 'admin' && (
        <header className="h-24 px-6 md:px-16 flex items-center justify-between border-b border-[#E5E5E5] bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-12">
            <button onClick={() => navigate('home')} className="text-2xl tracking-[0.2em] font-serif uppercase font-bold text-[#1A1A1A]">
              Time <span className="text-[#D4AF37] italic font-normal">One</span>
            </button>
            <nav className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-[#737373] font-medium">
              {navLinks.filter(l => l.page !== 'home' && l.page !== 'admin').map((link) => (
                <button 
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  className={`hover:text-[#D4AF37] transition-colors ${currentPage === link.page ? 'text-[#1A1A1A] border-b border-[#D4AF37] pb-1' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-medium text-[#1A1A1A]">
            <button className="hidden md:flex hover:text-[#D4AF37] transition-colors items-center gap-2">
              <Search size={18} strokeWidth={1.5} /> <span className="hidden xl:inline">Search</span>
            </button>
            <button onClick={() => navigate('login')} className="hidden md:flex hover:text-[#D4AF37] transition-colors items-center gap-2">
               Account
            </button>
            <button onClick={() => navigate('cart')} className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="hidden lg:inline">Bag</span>
              <span className="w-5 h-5 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center text-[10px]">2</span>
            </button>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </header>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 flex flex-col h-screen"
          >
            <nav className="flex flex-col gap-8 text-2xl font-serif uppercase tracking-widest text-[#1A1A1A]">
              {navLinks.map((item) => (
                <button 
                  key={item.page} 
                  className="text-left border-b border-[#E5E5E5] pb-4 hover:text-[#D4AF37] transition-colors" 
                  onClick={() => navigate(item.page)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'home' && <Home navigate={navigate} />}
        {currentPage === 'shop' && <Shop navigate={navigate} />}
        {currentPage === 'bespoke' && <Bespoke />}
        {currentPage === 'admin' && <Admin />}
        {currentPage === 'heritage' && <ComingSoon title="Heritage" />}
        {currentPage === 'contact' && <ComingSoon title="Contact" />}
        {currentPage === 'cart' && <ComingSoon title="Shopping Cart" />}
        {currentPage === 'login' && <ComingSoon title="Login / Register" />}
      </main>

      {/* Footer */}
      {currentPage !== 'admin' && (
        <footer className="bg-white border-t border-[#E5E5E5] pt-24 pb-12 px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="lg:col-span-2">
              <span className="text-3xl tracking-[0.2em] font-serif uppercase text-[#1A1A1A] mb-6 block">Time <span className="text-[#D4AF37] italic font-normal">One</span></span>
              <p className="text-[13px] text-[#737373] font-light leading-relaxed max-w-sm mb-8">
                A symbol of supreme craftsmanship and timeless elegance. Elevating the art of watchmaking for those who demand nothing but absolute perfection.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-widest font-bold">Instagram</a>
                <a href="#" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-widest font-bold">Facebook</a>
                <a href="#" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-widest font-bold">Pinterest</a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] mb-8 font-bold">Collections</h4>
              <ul className="space-y-4 text-[13px] text-[#737373] font-medium">
                <li><button onClick={() => navigate('shop')} className="hover:text-[#D4AF37] transition-colors">New Arrivals</button></li>
                <li><button onClick={() => navigate('shop')} className="hover:text-[#D4AF37] transition-colors">Best Sellers</button></li>
                <li><button onClick={() => navigate('bespoke')} className="hover:text-[#D4AF37] transition-colors">Bespoke Studio</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] mb-8 font-bold">Client Care</h4>
              <ul className="space-y-4 text-[13px] text-[#737373] font-medium">
                <li><button onClick={() => navigate('contact')} className="hover:text-[#D4AF37] transition-colors">Contact Us</button></li>
                <li><button className="hover:text-[#D4AF37] transition-colors">FAQ</button></li>
                <li><button className="hover:text-[#D4AF37] transition-colors">Order Tracking</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] mb-8 font-bold">Legal</h4>
              <ul className="space-y-4 text-[13px] text-[#737373] font-medium">
                <li><button className="hover:text-[#D4AF37] transition-colors">Privacy Policy</button></li>
                <li><button className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</button></li>
              </ul>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#737373] font-medium uppercase tracking-widest">
            <span>© 2026 Time One Watches. All Rights Reserved.</span>
            <div className="flex gap-4 items-center">
              <MapPin size={14} className="text-[#D4AF37]" />
              <span>Geneva, Switzerland</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
