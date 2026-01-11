import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PACKAGES, CONTACT_INFO } from '../constants';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServicePackage } from '../types';

const Packages = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            CHOOSE YOUR PACKAGE
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Transparent pricing for world-class digital products.
          </motion.p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 md:grid md:grid-cols-3 gap-6 lg:gap-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {PACKAGES.map((pkg, index) => (
            <div key={pkg.id} className="min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-center">
              <PricingCard pkg={pkg} index={index} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface PricingCardProps {
  pkg: ServicePackage;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg, index }) => {
  const isPremium = pkg.id === 'premium';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 ${isPremium
        ? 'bg-white/[0.08] border-brand-accent/30'
        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
        } border backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-black/50`}
    >
      {/* Background Glow for Premium */}
      {isPremium && (
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
      )}

      {isPremium && (
        <div className="absolute top-6 right-6 flex items-center gap-1 bg-brand-accent text-black text-xs font-bold px-3 py-1 rounded-full">
          <Sparkles size={12} /> POPULAR
        </div>
      )}

      <div className="mb-8 relative z-10">
        <h3 className={`font-display text-2xl font-bold mb-2 ${isPremium ? 'text-brand-accent' : 'text-white/80'}`}>
          {pkg.name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {pkg.priceRange}
          </span>
        </div>
      </div>

      <div className="flex-grow space-y-5 mb-10 relative z-10">
        {pkg.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start gap-4 group/item">
            <div className={`mt-1 p-1 rounded-full transition-colors ${isPremium ? 'bg-brand-accent text-black' : 'bg-white/10 text-white group-hover/item:bg-white group-hover/item:text-black'}`}>
              <Check size={10} strokeWidth={4} />
            </div>
            <span className="text-gray-300 text-base font-light">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          const phoneNumber = CONTACT_INFO.phone.replace(/^0/, '62');
          const message = encodeURIComponent(`Halo, saya tertarik dengan paket *${pkg.name}*. Bisa minta info lebih lanjut?`);
          window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }}
        className="w-full relative z-10"
      >
        <div
          className={`w-full py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${isPremium
            ? 'bg-brand-accent text-black hover:bg-white'
            : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10'
            }`}
        >
          Select Plan
          <ArrowRight size={16} />
        </div>
      </button>
    </motion.div>
  );
};

export default Packages;