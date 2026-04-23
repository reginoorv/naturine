'use client';

import { Truck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="w-full bg-[#fcfdfd] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[40px] overflow-hidden bg-[#2D6A4F] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          
          {/* Background Decorative Pattern Instead of AI Slop Image */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -right-20 -top-40 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute right-40 -bottom-20 w-64 h-64 rounded-full bg-[#B7E4C7] blur-3xl"></div>
          </div>

          <div className="z-10 flex flex-col max-w-lg text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Segarkan Harimu, <br className="hidden md:block"/> Pesan Sekarang!
            </h2>
            <p className="text-white/90 text-sm md:text-base">
              Minuman sehat, praktis, dan siap diantar ke rumahmu.
            </p>
          </div>

          <div className="z-10 flex flex-col md:flex-row items-center gap-6 lg:gap-10">
            {/* Gratis Ongkir Badge */}
            <div className="flex items-center gap-4 border border-white/30 bg-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
              <Truck size={32} strokeWidth={1.5} className="text-white shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Gratis Ongkir</span>
                <span className="text-[10px] text-white/80">Min. pembelian tertentu</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="flex items-center gap-3 bg-accent-yellow hover:bg-yellow-400 text-primary-green rounded-full px-8 py-4 font-bold transition-transform hover:scale-105 shrink-0 shadow-lg">
              <span>Order Sekarang</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
