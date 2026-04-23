'use client';

import Image from 'next/image';
import { Leaf, Droplet, Snowflake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative w-full min-h-screen pt-[120px] lg:pt-[160px] pb-16 overflow-hidden">
      {/* Full Width Background Image */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image 
          src="/images/hero-bottle.png"
          alt="Naturiné Juice Splash"
          fill
          className="object-cover object-center lg:object-right"
          priority
          unoptimized
        />
        {/* Subtle dark gradient mask only on very small screens to maintain text contrast if the bottle shifts left */}
        <div className="absolute inset-x-0 bottom-0 top-0 bg-white/30 sm:hidden" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-start">
        
        {/* Text Content Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-3/5 flex flex-col items-start text-left shrink-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-primary-green/30 bg-transparent shadow-none mb-6">
            <Leaf size={14} strokeWidth={1.5} className="text-primary-green" />
            <span className="text-xs font-bold text-primary-green tracking-wide">100% NATURAL</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[72px] font-bold text-primary-green leading-[1.1] mb-6 tracking-tight">
            Kesegaran <br /> Alami, Setiap <br /> Hari.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-gray mb-10 max-w-md leading-relaxed font-medium">
            Minuman sehat berbahan alami pilihan, dibuat untuk hidup yang lebih segar dan seimbang.
          </motion.p>
          
          {/* Custom Button */}
          <motion.button variants={itemVariants} className="group flex items-center gap-4 bg-white rounded-full pl-6 pr-2 py-2 shadow-sm hover:shadow-md transition-all mb-16 border border-primary-green/10">
            <span className="font-bold text-text-dark">Belanja Sekarang</span>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow text-primary-green group-hover:scale-105 transition-transform">
              <ArrowRight size={18} strokeWidth={2.5} />
            </div>
          </motion.button>
          
          {/* 3 Features */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-transparent border border-primary-green/30 flex items-center justify-center text-primary-green shrink-0">
                <Leaf size={24} strokeWidth={1} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-dark">Bahan Alami</h4>
                <p className="text-xs text-text-gray">Pilihan</p>
              </div>
            </div>
            
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-transparent border border-primary-green/30 flex items-center justify-center text-primary-green shrink-0">
                <Droplet size={24} strokeWidth={1} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-dark">Tanpa Pengawet</h4>
                <p className="text-xs text-text-gray">& Pewarna Buatan</p>
              </div>
            </div>
            
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-transparent border border-primary-green/30 flex items-center justify-center text-primary-green shrink-0">
                <Snowflake size={24} strokeWidth={1} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-dark">Diproses Dingin</h4>
                <p className="text-xs text-text-gray">Kesegaran Terjaga</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
