'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <section className="relative w-full pt-36 pb-20 bg-gradient-to-b from-[#e8f6ed] to-[#fcfdfd] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#F0FAF4] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-green mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto font-medium"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
