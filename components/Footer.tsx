import Link from 'next/link';
import { Leaf, Instagram, Facebook, Phone as TikTok, MessageCircle, Mail, MapPin, Send } from 'lucide-react'; 
// Using MessageCircle or custom for TikTok placeholder

export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfdfd] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1 flex flex-col items-start pr-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="text-primary-green">
                <Leaf size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-text-dark">NATURINÉ</span>
                <span className="text-[10px] text-text-gray tracking-wider mt-0.5">Real. Fresh. Pure.</span>
              </div>
            </Link>
            <p className="text-xs leading-loose text-text-gray mb-8 pr-4">
              Naturiné adalah minuman sehat berbahan alami, dibuat untuk mendukung gaya hidup seimbang dan aktif setiap hari.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-dark hover:border-primary-green hover:text-primary-green transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-dark hover:border-primary-green hover:text-primary-green transition-colors">
                <Facebook size={14} />
              </a>
              {/* Note: Wait, Lucide doesn't have an explicit tiktok icon, I'll use another placeholder icon. Let's use MessageCircle */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-dark hover:border-primary-green hover:text-primary-green transition-colors">
                <MessageCircle size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div className="flex flex-col">
            <h4 className="font-bold text-text-dark text-sm mb-6 uppercase tracking-wide">Menu</h4>
            <ul className="flex flex-col gap-4">
              {['Beranda', 'Produk', 'Tentang Kami', 'Manfaat', 'Testimoni'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs text-text-gray hover:text-primary-green transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Bantuan */}
          <div className="flex flex-col">
            <h4 className="font-bold text-text-dark text-sm mb-6 uppercase tracking-wide">Bantuan</h4>
            <ul className="flex flex-col gap-4">
              {['FAQ', 'Pengiriman', 'Pembayaran', 'Kebijakan Retur', 'Kontak'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs text-text-gray hover:text-primary-green transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontak */}
          <div className="flex flex-col">
            <h4 className="font-bold text-text-dark text-sm mb-6 uppercase tracking-wide">Kontak</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-primary-green shrink-0 mt-0.5" />
                <span className="text-xs text-text-gray leading-relaxed">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary-green shrink-0 mt-0.5" />
                <span className="text-xs text-text-gray leading-relaxed">hello@naturine.id</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-green shrink-0 mt-0.5" />
                <span className="text-xs text-text-gray leading-relaxed pr-8">Jl. Sehat Selalu No. 10 Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="flex flex-col">
            <h4 className="font-bold text-text-dark text-sm mb-6 uppercase tracking-wide">Newsletter</h4>
            <p className="text-xs leading-loose text-text-gray mb-6">
              Dapatkan promo & tips sehat langsung di email kamu.
            </p>
            <div className="flex items-center w-full bg-gray-50 rounded-full border border-gray-200 p-1">
              <input 
                type="email" 
                placeholder="Email kamu" 
                className="bg-transparent border-none outline-none text-xs text-text-dark px-4 w-full"
              />
              <button className="w-8 h-8 rounded-full bg-[#1A1A1A] hover:bg-primary-green text-white flex items-center justify-center shrink-0 transition-colors">
                <Send size={12} />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="w-full flex-col flex items-center justify-center pt-8 border-t border-gray-100">
          <p className="text-[10px] text-text-gray">
            © 2024 Naturiné. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
