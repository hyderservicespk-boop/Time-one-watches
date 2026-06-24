import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { WATCH_MODELS, formatPrice } from '../data';

export function Home({ navigate }: { navigate: (page: any) => void }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen min-h-[800px] flex items-center justify-center relative overflow-hidden bg-[#FAFAFA]">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1623998021446-45cd9b269056?auto=format&fit=crop&q=80&w=2000" 
            alt="Watch Background" 
            className="w-[120%] h-[120%] object-cover scale-110 blur-sm mix-blend-multiply" 
          />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0em' }} 
            animate={{ opacity: 1, letterSpacing: '0.5em' }} 
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-[#D4AF37] text-[10px] md:text-[12px] uppercase font-semibold mb-6 tracking-widest"
          >
            The Pinnacle of Horology
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-[50px] md:text-[90px] lg:text-[130px] leading-[0.9] font-serif uppercase tracking-tighter mb-8 text-[#1A1A1A]"
          >
            Time <span className="italic text-[#D4AF37]">One</span><br/> Watches
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.5 }}
            className="text-[14px] md:text-[18px] text-[#737373] max-w-2xl mx-auto tracking-wide mb-12 font-light"
          >
            Crafted For Those Who Value Time. Experience the intersection of master engineering and timeless design.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button 
              onClick={() => navigate('shop')}
              className="px-12 py-5 bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] transition-colors duration-500 shadow-xl"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => navigate('bespoke')}
              className="px-12 py-5 bg-transparent border border-[#1A1A1A]/30 text-[#1A1A1A] text-[11px] uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500"
            >
              Bespoke Studio
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#737373]">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#1A1A1A]/20 to-transparent overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 64] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-[#1A1A1A] absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Watches */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[#D4AF37] text-[10px] md:text-[12px] uppercase tracking-[0.4em] mb-4 font-semibold"
            >
              Curated Selection
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[56px] leading-[1.1] font-serif uppercase tracking-wide text-[#1A1A1A]"
            >
              The Masterpieces
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="h-[1px] bg-[#D4AF37] mt-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WATCH_MODELS.map((watch, i) => (
              <motion.div 
                key={watch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group flex flex-col bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#D4AF37]/50 transition-colors"
                onClick={() => navigate('bespoke')}
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-white flex items-center justify-center p-8 cursor-pointer">
                  <img 
                    src={watch.image} 
                    alt={watch.name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <button className="px-6 py-3 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-widest font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Customize
                    </button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">{watch.collection}</p>
                  <h3 className="text-[18px] font-serif text-[#1A1A1A] mb-3 line-clamp-1">{watch.name}</h3>
                  <div className="flex items-end justify-between mt-auto">
                    <span className="text-lg font-serif text-[#1A1A1A] font-medium">{formatPrice(watch.basePrice)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
