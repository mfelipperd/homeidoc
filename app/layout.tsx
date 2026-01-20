import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import FaviconPulse from '@/components/common/FaviconPulse';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Home iDoc - Cuidando da sua saúde',
    template: '%s | Home iDoc',
  },
  description: 'Home iDoc - Serviços de saúde de qualidade com profissionalismo e dedicação. Agende sua consulta agora.',
  keywords: ['saúde', 'médico', 'consulta', 'atendimento domiciliar', 'home care'],
  authors: [{ name: 'Home iDoc' }],
  creator: 'Home iDoc',
  publisher: 'Home iDoc',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://homeidoc.com.br',
    siteName: 'Home iDoc',
    title: 'Home iDoc - Cuidando da sua saúde',
    description: 'Serviços de saúde de qualidade com profissionalismo e dedicação.',
    images: [
      {
        url: '/images/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Home iDoc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home iDoc - Cuidando da sua saúde',
    description: 'Serviços de saúde de qualidade com profissionalismo e dedicação.',
    images: ['/images/logo.webp'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

import ContactModal from '@/components/contact/ContactModal';
import SchedulingModal from '@/components/scheduling/SchedulingModal';
import { ContactModalProvider } from '@/context/ContactModalContext';
import { SchedulingModalProvider } from '@/context/SchedulingModalContext';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <SchedulingModalProvider>
          <ContactModalProvider>
            <Header />
            <main className="flex-grow pt-0">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <FaviconPulse />
            <ContactModal />
            <SchedulingModal />
          </ContactModalProvider>
        </SchedulingModalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
