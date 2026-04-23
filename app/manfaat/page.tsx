import PageHeader from '@/components/PageHeader';
import KeunggulanSection from '@/components/KeunggulanSection';
import { Heart, ShieldCheck, Zap, RefreshCcw } from 'lucide-react';

export default function ManfaatPage() {
  const benefits = [
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Meningkatkan Imunitas",
      desc: "Kaya akan vitamin C dan antioksidan yang menjaga sistem kekebalan tubuh agar tetap fit setiap hari."
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Energi Alami",
      desc: "Gula alami dari buah memberikan energi instan tanpa efek lemas (sugar crash) dengan cepat."
    },
    {
      icon: <RefreshCcw size={32} strokeWidth={1.5} />,
      title: "Detoksifikasi Tubuh",
      desc: "Proses cold-pressed mempertahankan enzim yang membantu membuang racun (detox) dari pencernaan."
    },
    {
      icon: <Heart size={32} strokeWidth={1.5} />,
      title: "Kesehatan Kulit",
      desc: "Kandungan vitamin E dan nutrisi mikro lainnya membantu sel kulit beregenerasi menjadikan kulit glowing."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Manfaat Naturiné" 
        subtitle="Rasakan kebaikan dari alam yang diekstrak secara murni untuk kesehatan tubuh ideal Anda." 
      />
      
      <KeunggulanSection />
      
      {/* Detailed Benefits Section */}
      <section className="w-full bg-[#F0FAF4] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-green mb-4">Investasi Jangka Panjang</h2>
            <p className="text-text-gray max-w-2xl mx-auto">Satu botol mengandung lebih dari 1kg buah segar murni.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 flex gap-6 hover:shadow-lg transition-shadow border border-primary-green/10">
                <div className="w-16 h-16 rounded-2xl bg-[#fcfdfd] border border-gray-100 flex items-center justify-center text-accent-yellow shrink-0 shadow-sm">
                  {benefit.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-text-dark mb-2">{benefit.title}</h3>
                  <p className="text-sm text-text-gray leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
