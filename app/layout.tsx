import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Naturiné - Real. Fresh. Pure.',
  description: 'Minuman sehat berbahan alami pilihan, dibuat untuk hidup yang lebih segar dan seimbang.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans bg-[#F0FAF4] text-[#1A1A1A] antialiased flex min-h-screen flex-col w-full" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
