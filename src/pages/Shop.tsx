import React from 'react';
import { motion } from 'motion/react';
import { WATCH_MODELS, formatPrice } from '../data';
import { ShoppingBag } from 'lucide-react';

export function Shop({ navigate }: { navigate: (page: any) => void }) {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex flex-col items-center text-center mb-20"
        >
          <p className="text-[#D4AF37] text-[10px] md:text-[12px] uppercase tracking-[0.4em] mb-4 font-semibold">
            All Collections
          </p>
          <h1 className="text-[40px] md:text-[60px] leading-[1.1] font-serif uppercase tracking-wide text-[#1A1A1A]">
            Discover the <br/><span className="italic text-[#D4AF37]">Timepieces</span>
          </h1>
          <div className="h-[1px] w-12 bg-[#D4AF37] mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {WATCH_MODELS.map((watch, i) => (
            <motion.div 
              key={watch.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group flex flex-col bg-white border border-[#E5E5E5] hover:border-[#D4AF37]/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square relative overflow-hidden bg-[#FAFAFA] flex items-center justify-center p-8 cursor-pointer" onClick={() => navigate('bespoke')}>
                <img 
                  src={watch.image} 
                  alt={watch.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-1 border-t border-[#E5E5E5]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">{watch.collection}</p>
                <h3 className="text-[22px] font-serif text-[#1A1A1A] mb-4">{watch.name}</h3>
                <p className="text-[13px] text-[#737373] font-light leading-relaxed mb-8">{watch.description}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#E5E5E5]">
                  <span className="text-xl font-serif text-[#1A1A1A] font-medium">{formatPrice(watch.basePrice)}</span>
                  <button onClick={() => navigate('bespoke')} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1A1A1A] hover:text-[#D4AF37] transition-colors font-semibold">
                    <ShoppingBag size={14} /> Customize
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
