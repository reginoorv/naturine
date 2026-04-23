'use client';

import { Leaf, Droplet, Snowflake } from 'lucide-react';
import { motion } from 'motion/react';

export default function KeunggulanSection() {
  const cards = [
    {
      icon: <Leaf size={40} strokeWidth={1} />,
      title: "100% Natural",
      desc: "Dibuat dari buah & bahan alami pilihan tanpa tambahan bahan buatan.",
    },
    {
      icon: <Droplet size={40} strokeWidth={1} />,
      title: "No Preservatives",
      desc: "Tanpa pengawet, tanpa pewarna buatan, aman untuk dikonsumsi setiap hari.",
    },
    {
      icon: <Snowflake size={40} strokeWidth={1} />,
      title: "Cold Pressed",
      desc: "Diproses dengan teknologi cold pressed untuk menjaga nutrisi dan kesegaran alami.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#fcfdfd] py-24 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold text-accent-yellow tracking-widest uppercase mb-4"
        >
          KEUNGGULAN KAMI
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-primary-green mb-6"
        >
          Kenapa Naturiné?
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
          <Leaf size={16} strokeWidth={1.5} className="text-primary-green" />
          <div className="w-12 h-px bg-primary-green/30"></div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
        >
          {cards.map((card, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className="flex flex-col items-center text-center bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-transparent border border-primary-green/30 flex items-center justify-center text-primary-green mb-8">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{card.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
