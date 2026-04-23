import PageHeader from '@/components/PageHeader';
import ProdukSection from '@/components/ProdukSection';
import CTASection from '@/components/CTASection';

export default function ProdukPage() {
  return (
    <>
      <PageHeader 
        title="Pilihan Rasa Terbaik" 
        subtitle="Dari alam langsung ke botolmu. Temukan varian favorit untuk menyegarkan setiap momen harianmu." 
      />
      <ProdukSection />
      <CTASection />
    </>
  );
}
