import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { WATCH_MODELS, STRAP_MATERIALS, STRAP_COLORS, BUCKLE_TYPES, formatPrice } from '../data';

export function Bespoke() {
  const [selectedModel, setSelectedModel] = useState(WATCH_MODELS[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(STRAP_MATERIALS[0]);
  const [selectedColor, setSelectedColor] = useState(STRAP_COLORS[0]);
  const [selectedBuckle, setSelectedBuckle] = useState(BUCKLE_TYPES[0]);
  const [engravingText, setEngravingText] = useState('');
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setIsRotating(true);
    const timer = setTimeout(() => setIsRotating(false), 600);
    return () => clearTimeout(timer);
  }, [selectedModel, selectedMaterial, selectedColor, selectedBuckle]);

  const totalPrice = selectedModel.basePrice + selectedMaterial.price + selectedBuckle.price + (engravingText.length > 0 ? 250 : 0);

  return (
    <div className="flex-1 flex flex-col lg:flex-row bg-[#FFFFFF]">
      {/* Left: Interactive Visualizer */}
      <section className="w-full lg:w-[60%] bg-[#FAFAFA] relative flex flex-col items-center justify-center min-h-[60vh] lg:min-h-[calc(100vh-6rem)] border-r border-[#E5E5E5] overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#E5E5E5]/40 to-transparent rounded-full blur-3xl"></div>
        
        <div className="absolute top-8 left-8 text-[10px] uppercase tracking-[0.2em] text-[#737373] flex flex-col gap-1">
          <span>Bespoke Studio</span>
          <span className="text-[#1A1A1A] font-medium">{selectedModel.name}</span>
        </div>

        <div className="absolute bottom-8 right-8 flex gap-4">
           <button 
              onClick={() => setIsRotating(true)}
              className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8F8F8] transition-colors shadow-sm"
            >
             <RotateCcw size={16} strokeWidth={1.5} />
           </button>
        </div>

        {/* Watch Image container with animation */}
        <motion.div 
          className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center"
          animate={{ 
            scale: isRotating ? 0.96 : 1,
            opacity: isRotating ? 0.7 : 1,
            filter: isRotating ? 'blur(2px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative w-[70%] h-[70%] lg:w-[80%] lg:h-[80%]">
            <img 
              src={selectedModel.image} 
              alt={selectedModel.name} 
              className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
            />
            {engravingText && (
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-multiply opacity-70 transform -rotate-[15deg] pointer-events-none">
                <span className="font-serif text-[10px] lg:text-[12px] tracking-[0.3em] text-[#1A1A1A]/60" style={{ fontFamily: 'Georgia, serif' }}>
                  {engravingText}
                </span>
              </div>
            )}
          </div>
        </motion.div>
        
        <div className="lg:hidden absolute bottom-0 left-0 w-full p-6 bg-white border-t border-[#E5E5E5] flex justify-between items-center z-20">
           <div className="flex flex-col">
             <span className="text-[10px] uppercase tracking-widest text-[#737373]">Total Setup</span>
             <span className="font-serif text-2xl">{formatPrice(totalPrice)}</span>
           </div>
           <button className="px-8 py-3 bg-[#1A1A1A] text-white text-[11px] uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
             Add to Bag
           </button>
        </div>
      </section>

      {/* Right: Configuration Panel */}
      <section className="w-full lg:w-[40%] bg-white flex flex-col h-full max-h-none lg:max-h-[calc(100vh-6rem)] overflow-y-auto pb-32 lg:pb-0">
        <div className="hidden lg:flex flex-col p-10 border-b border-[#E5E5E5] sticky top-0 bg-white/95 backdrop-blur-md z-20">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#737373] mb-2 font-medium">Estimated Total</span>
          <div className="flex justify-between items-end">
            <span className="font-serif text-4xl text-[#1A1A1A]">{formatPrice(totalPrice)}</span>
            <button className="px-10 py-4 bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#D4AF37] transition-colors">
              Add to Bag
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-10 space-y-12">
          {/* Step 1: Base Model */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
            <div className="flex justify-between items-baseline border-b border-[#E5E5E5] pb-4">
              <h2 className="font-serif text-2xl text-[#1A1A1A]">01. Timepiece</h2>
              <span className="text-[11px] uppercase tracking-widest text-[#737373]">Select Base</span>
            </div>
            
            <div className="space-y-4">
              {WATCH_MODELS.map(model => (
                <button 
                  key={model.id}
                  onClick={() => setSelectedModel(model)}
                  className={`w-full text-left p-6 border transition-all ${selectedModel.id === model.id ? 'border-[#1A1A1A] bg-[#FAFAFA]' : 'border-[#E5E5E5] hover:border-[#1A1A1A]/30'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-[#1A1A1A]">{model.name}</h3>
                    <span className="text-sm font-medium text-[#1A1A1A]">{formatPrice(model.basePrice)}</span>
                  </div>
                  <p className="text-[#737373] text-sm leading-relaxed pr-8">{model.description}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Step 2: Strap Material */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="flex justify-between items-baseline border-b border-[#E5E5E5] pb-4">
              <h2 className="font-serif text-2xl text-[#1A1A1A]">02. Bracelet</h2>
              <span className="text-[11px] uppercase tracking-widest text-[#737373]">Material & Color</span>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-[#1A1A1A] mb-4 font-semibold">Material</h4>
                <div className="grid grid-cols-2 gap-4">
                  {STRAP_MATERIALS.map(material => (
                    <button 
                      key={material.id}
                      onClick={() => setSelectedMaterial(material)}
                      className={`p-4 border text-left transition-colors flex flex-col justify-between h-24 ${selectedMaterial.id === material.id ? 'border-[#1A1A1A] bg-[#FAFAFA]' : 'border-[#E5E5E5] hover:border-[#1A1A1A]/30'}`}
                    >
                      <span className="text-sm font-medium text-[#1A1A1A]">{material.name}</span>
                      <span className="text-[11px] text-[#737373]">{material.price === 0 ? 'Included' : `+${formatPrice(material.price)}`}</span>
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {selectedMaterial.id === 'leather' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <h4 className="text-[11px] uppercase tracking-widest text-[#1A1A1A] mb-4 mt-2 font-semibold">Leather Color</h4>
                    <div className="flex gap-4">
                      {STRAP_COLORS.map(color => (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color)}
                          className="group flex flex-col items-center gap-2"
                        >
                          <div className={`w-10 h-10 rounded-full border-2 p-0.5 transition-colors ${selectedColor.id === color.id ? 'border-[#1A1A1A]' : 'border-transparent group-hover:border-[#E5E5E5]'}`}>
                            <div className="w-full h-full rounded-full border border-black/10 shadow-inner" style={{ backgroundColor: color.hex }}></div>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider text-[#737373]">{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-[#1A1A1A] mb-4 font-semibold">Clasp Type</h4>
                <div className="space-y-3">
                  {BUCKLE_TYPES.map(buckle => (
                    <button 
                      key={buckle.id}
                      onClick={() => setSelectedBuckle(buckle)}
                      className={`w-full flex justify-between items-center p-4 border transition-colors ${selectedBuckle.id === buckle.id ? 'border-[#1A1A1A] bg-[#FAFAFA]' : 'border-[#E5E5E5] hover:border-[#1A1A1A]/30'}`}
                    >
                      <span className="text-sm text-[#1A1A1A] font-medium">{buckle.name}</span>
                      <span className="text-[11px] text-[#737373]">{buckle.price === 0 ? 'Included' : `+${formatPrice(buckle.price)}`}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Engraving */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
            <div className="flex justify-between items-baseline border-b border-[#E5E5E5] pb-4">
              <h2 className="font-serif text-2xl text-[#1A1A1A]">03. Personalization</h2>
              <span className="text-[11px] uppercase tracking-widest text-[#737373]">Optional (+ $250)</span>
            </div>
            
            <div>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Add a bespoke touch with a personal engraving on the case back. Maximum 15 characters.
              </p>
              <div className="relative">
                <input 
                  type="text" 
                  maxLength={15}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  placeholder="Enter engraving text..."
                  className="w-full border border-[#E5E5E5] p-4 text-sm font-serif uppercase tracking-widest focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:normal-case placeholder:tracking-normal placeholder:font-sans placeholder:text-[#A0A0A0] bg-white text-[#1A1A1A]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[#737373]">
                  {engravingText.length}/15
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
