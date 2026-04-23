'use client';

import Link from 'next/link';
import { Leaf, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="absolute top-0 z-50 w-full bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-primary-green">
            <Leaf size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight leading-none text-text-dark">NATURINÉ</span>
            <span className="text-[10px] text-text-gray tracking-wider mt-0.5">Real. Fresh. Pure.</span>
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Beranda', href: '/' },
            { name: 'Produk', href: '/produk' },
            { name: 'Tentang Kami', href: '/tentang-kami' },
            { name: 'Manfaat', href: '/manfaat' },
            { name: 'Testimoni', href: '/testimoni' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-semibold text-text-gray hover:text-primary-green transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-text-dark hover:bg-white transition-colors">
            <ShoppingBag size={18} />
            <span>Keranjang (0)</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
