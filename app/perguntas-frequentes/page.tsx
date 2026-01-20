'use client';

import { useContactModal } from '@/context/ContactModalContext';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { faqData, topVideoUrl } from '@/data/faq';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

export default function FAQPage() {
  const { openModal } = useContactModal();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaq = useMemo(() => {
    if (!searchTerm) return faqData;

    const normalizeText = (str: string) => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const searchTokens = normalizeText(searchTerm).split(' ').filter(Boolean);

    return faqData.filter(item => {
      const searchableText = normalizeText(`${item.question} ${item.answer}`);
      return searchTokens.every(token => searchableText.includes(token));
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 md:pt-40 pb-16">
      <div className="container-custom max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-navy">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Home iDoc. Confira abaixo as respostas para as perguntas mais comuns e assista aos vídeos explicativos.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto w-full z-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Digite sua dúvida..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-md focus:shadow-lg focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all text-gray-700 bg-white"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-500 mt-2 text-center animate-in fade-in slide-in-from-top-2">
              Encontramos {filteredFaq.length} {filteredFaq.length === 1 ? 'resultado' : 'resultados'} para sua busca.
            </p>
          )}
        </div>

        {/* Top Video */}
        {!searchTerm && (
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-black animate-fade-in-zoom">
            <iframe
              src={topVideoUrl}
              title="Vídeo Institucional Home iDoc"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* FAQ List */}
        <div className="space-y-4 min-h-[300px]">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item, index) => (
              <div 
                key={`${item.id}-${searchTerm}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FAQAccordion
                  question={item.question}
                  answer={item.answer}
                  videoUrl={item.videoUrl}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200 shadow-sm">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-500">Tente buscar por outras palavras-chave.</p>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
           <h3 className="text-xl font-bold text-primary-navy mb-4">
             Ainda tem dúvidas?
           </h3>
           <p className="text-gray-600 mb-6">
             Nossa equipe está pronta para ajudar. Entre em contato conosco.
           </p>
           <button 
             onClick={openModal}
             className="bg-primary-green text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-teal hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
           >
             Fale Conosco
           </button>
        </div>

      </div>
    </div>
  );
}
