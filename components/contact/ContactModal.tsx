'use client';

import { useContactModal } from '@/context/ContactModalContext';
import { X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      />
      
      <div className="relative w-full max-w-4xl bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 hover:bg-black/5 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Info Side */}
          <div className="bg-primary-navy/5 p-8 lg:p-12 text-primary-navy">
            <h2 className="text-3xl font-bold mb-6">Entre em contato</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tem alguma dúvida, sugestão ou comentário? Envie-nos uma mensagem via WhatsApp, e-mail ou preencha o formulário ao lado.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-green">WhatsApp</h3>
                  <p className="text-gray-700 font-medium">(91) 99190-8887</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-green">E-mail</h3>
                  <p className="text-gray-700 font-medium">contato@homeidoc.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary-green/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-green" />
                 </div>
                 <div>
                    <h3 className="font-semibold text-primary-green">Responsável Técnico</h3>
                    <p className="text-gray-700 font-medium text-sm">Dr. Roberto Carlei C. Lima</p>
                    <p className="text-gray-500 text-xs">CRM-PA 5071 RQE 6500</p>
                 </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 italic">
              "A Tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho." <br/> Salmos 119:105
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-primary-navy mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Nome completo</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">Assunto</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-all"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="agendamento">Agendamento</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Mensagem</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-green hover:bg-primary-green/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary-green/20 transform hover:-translate-y-0.5"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
