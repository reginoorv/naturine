import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { Star, Quote } from 'lucide-react';

export default function TestimoniPage() {
  const testimonials = [
    {
      name: "Andini Pratama",
      role: "Pekerja Kantoran",
      review: "Sejak rutin minum Calamansi & Mint tiap pagi, pencernaan jadi lancar banget. Rasanya seger, manis asemnya pas. Gak kerasa kayak minum jamu sama sekali!",
      rating: 5
    },
    {
      name: "Bima Arya",
      role: "Atlet Amatir",
      review: "Gua selalu nyari minuman recovery yang natural. Apple Cucumber dari Naturiné ini pas banget diminum abis lari. Dinginnya bikin seger badan kembali utuh.",
      rating: 5
    },
    {
      name: "Siti Halimah",
      role: "Ibu Rumah Tangga",
      review: "Anak-anak susah banget makan sayur, tertolong banget sama jus Guava Lychee ini. Anak-anak doyan karena manis, tapi ibunya tenang karena 100% tanpa pengawet.",
      rating: 5
    },
    {
      name: "Reihan Putra",
      role: "Mahasiswa",
      review: "Awalnya skeptis mikir harga lumayan, tapi setelah ngerasain kesegarannya saat submit skripsi yang bikin stres, ini beneran ngebantu naikin mood banget.",
      rating: 4
    },
    {
      name: "Clara Sinta",
      role: "Yoga Instructor",
      review: "Sebagai instruktur yoga, ini adalah rekomendasi nomor 1 aku buat murid-murid. Detox harian jadi sangat menyenangkan tanpa haru ribet nge-blend buah sendiri.",
      rating: 5
    },
    {
      name: "Dedy Setiawan",
      role: "Freelancer",
      review: "Kerja malam butuh asupan yang bikin melek. Pineapple & Lime ini favorit, asem segernya pas buat nemenin nugas. Packingnya juga aman banget.",
      rating: 5
    }
  ];

  return (
    <div className="bg-[#fcfdfd]">
      <PageHeader 
        title="Kata Mereka" 
        subtitle="Ribuan botol telah terjual dan ribuan senyum telah terukir. Intip ulasan dari pelanggan setia Naturiné." 
      />
      
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <div key={i} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-8 text-primary-green/10" size={48} strokeWidth={1} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={16} 
                    fill={index < testi.rating ? "#F4D03F" : "transparent"} 
                    className={index < testi.rating ? "text-accent-yellow" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-text-dark font-medium leading-relaxed mb-8 relative z-10">
                "{testi.review}"
              </p>
              
              <div className="mt-auto border-t border-gray-50 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E0EED4] flex items-center justify-center text-primary-green font-bold shrink-0">
                  {testi.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-dark">{testi.name}</span>
                  <span className="text-xs text-text-gray">{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
