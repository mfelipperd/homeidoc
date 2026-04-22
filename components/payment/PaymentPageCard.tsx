'use client';

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface PaymentPageCardProps {
  title: string;
  price: string;
  content: string;
  ctaText: string;
  ctaLink: string;
}

const PaymentPageCard: React.FC<PaymentPageCardProps> = ({
  title,
  price,
  content,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="max-w-3xl mx-auto my-12 px-4 sm:px-6">
      <div className="glass-card-strong rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up border border-white/40 p-8 md:p-12 relative">
        {/* Subtle decorative elements to match the "premium" feel without being heavy */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-navy/5 rounded-full blur-3xl -ml-24 -mb-24"></div>

        <div className="text-center mb-10 relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-navy mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex items-baseline justify-center gap-2 text-primary-navy">
            <span className="text-2xl font-medium">R$</span>
            <span className="text-5xl md:text-6xl font-black tabular-nums tracking-tighter">
              {price.replace('R$', '').trim()}
            </span>
          </div>
        </div>

        <div className="mb-10 relative z-10">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify font-medium">
            {content}
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center relative z-10">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto px-12 py-5 bg-primary-navy text-[#FFFFFF] font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden"
            style={{ color: '#FFFFFF' }} // Bypass global text-white override
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span>{ctaText}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-6 flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1.5 grayscale opacity-70">
              <ShieldCheck className="w-5 h-5 text-primary-navy" />
              <span className="text-xs font-bold uppercase tracking-wider">Pagamento Seguro</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 grayscale opacity-70">
               <span className="text-[10px] font-black italic">Mercado Pago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPageCard;
