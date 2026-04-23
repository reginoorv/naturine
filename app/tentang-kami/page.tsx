import PageHeader from '@/components/PageHeader';
import { Leaf, Award, Heart } from 'lucide-react';
import Image from 'next/image';

export default function TentangKamiPage() {
  return (
    <div className="bg-[#fcfdfd]">
      <PageHeader 
        title="Tentang Naturiné" 
        subtitle="Berawal dari kepedulian terhadap gaya hidup sehat, kami hadir untuk mengembalikan kemurnian alam ke dalam keseharianmu." 
      />
      
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-xs font-bold text-accent-yellow tracking-widest uppercase mb-4">
              CERITA KAMI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-6 leading-tight">
              Lebih dari Sekadar Jus, <br/> Ini Adalah Gaya Hidup.
            </h2>
            <p className="text-text-gray mb-6 leading-relaxed">
              Naturiné lahir dari sebuah pertanyaan sederhana: "Mengapa sangat sulit menemukan minuman yang benar-benar sehat tanpa tambahan gula atau pengawet?" Di tengah gempuran minuman instan, kami memutuskan untuk kembali ke akar.
            </p>
            <p className="text-text-gray mb-10 leading-relaxed">
              Dengan metode cold-pressed terbaik, kami memastikan setiap tetes sari buah dan sayur tetap menyimpan vitamin, mineral, dan enzim alaminya. Kami melakukan ini bukan hanya untuk bisnis, tetapi untuk mewariskan kebaikan alam.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col gap-3 border-l-2 border-primary-green/20 pl-4">
                <Leaf className="text-primary-green" size={24} strokeWidth={1.5} />
                <h4 className="font-bold text-text-dark text-lg">100% Organik</h4>
                <p className="text-sm text-text-gray">Hanya menggunakan bahan dari petani lokal pilihan.</p>
              </div>
              <div className="flex flex-col gap-3 border-l-2 border-primary-green/20 pl-4">
                <Award className="text-primary-green" size={24} strokeWidth={1.5} />
                <h4 className="font-bold text-text-dark text-lg">Kualitas Premium</h4>
                <p className="text-sm text-text-gray">Diproses dengan kebersihan berstandar tinggi.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative bg-[#E0EED4] rounded-[40px] aspect-square lg:aspect-[4/5] flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
               <div className="w-full h-full bg-gradient-to-tr from-primary-green to-transparent" />
            </div>
            <div className="relative w-full h-full shrink-0">
               <Image 
                 src="/images/hero-bottle.png"
                 alt="Naturiné Fresh Bottle"
                 fill
                 className="object-contain"
                 unoptimized
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
