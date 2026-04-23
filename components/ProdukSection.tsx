'use client';

import Image from 'next/image';
import { Leaf, Plus } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProdukSection() {
  const products = [
    {
      name: "Calamansi & Mint",
      desc: "Segar, ringan, dan kaya vitamin C.",
      price: "Rp 28.000",
      bgColor: "bg-[#E0EED4]",
      image: "/images/product-calamansi.png"
    },
    {
      name: "Pineapple & Lime",
      desc: "Manis alami dengan semburat asam menyegarkan.",
      price: "Rp 28.000",
      bgColor: "bg-[#FDF0CD]",
      image: "/images/product-pineapple.png"
    },
    {
      name: "Guava & Lychee",
      desc: "Kombinasi lembut yang kaya antioksidan.",
      price: "Rp 20.000",
      bgColor: "bg-[#FCE0DE]",
      image: "/images/product-guava.png"
    },
    {
      name: "Apple & Cucumber",
      desc: "Ringan dan menenangkan, cocok untuk detox harian.",
      price: "Rp 28.000",
      bgColor: "bg-[#E6F3CC]",
      image: "/images/product-apple.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#fcfdfd] py-24 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold text-accent-yellow tracking-widest uppercase mb-4 text-center"
        >
          PILIHAN RASA TERBAIK
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-primary-green mb-6 text-center"
        >
          Varian Favorit Kami
        </motion.h2>
        
        {/* Decorative Divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-primary-green/30"></div>
          <Leaf size={16} className="text-primary-green" />
          <div className="w-12 h-px bg-primary-green/30"></div>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {products.map((product, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Top Image Section */}
              <div className={`${product.bgColor} w-full aspect-[4/5] relative flex items-center justify-center p-6 overflow-hidden`}>
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Bottom Content Section */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold text-text-dark mb-2">{product.name}</h3>
                <p className="text-sm text-text-gray leading-relaxed mb-6 grow">{product.desc}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-text-dark">{product.price}</span>
                  <button className="w-8 h-8 rounded-full bg-accent-yellow text-primary-green flex items-center justify-center hover:scale-110 transition-transform">
                    <Plus size={18} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
