'use client';

import { useRentalModal } from '@/context/RentalModalContext';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';
import { useEffect } from 'react';

const exams = [
  "Acuidade visual",
  "Auto-refração",
  "Refração manual",
  "Auto-ceratometria",
  "Biomicroscopia com lâmpada de fenda",
  "Tonometria",
  "Campimetria visual",
  "Senso cromático",
  "Motilidade ocular",
  "Pupilometria",
  "Retinografia",
  "Fundoscopia direta e indireta",
  "Gonioscopia",
  "Paquimetria corneana",
  "Ultrassonografia",
  "Ecobiometria",
  "Topografia de córnea"
];

const RentalModal = () => {
  const { isOpen, closeModal } = useRentalModal();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" 
        onClick={closeModal}
      />
      
      <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 pb-0 flex justify-between items-start sticky top-0 bg-white z-10">
          <div className="pr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy leading-tight">
              Locação de Equipamentos
            </h2>
            <p className="text-primary-green font-semibold mt-1">SmartDoc Oftalmologia</p>
          </div>
          <button 
            onClick={closeModal}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 pt-4 overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 italic">
              "Estenda sua prática oftalmológica para além das paredes do seu consultório!"
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Com nosso serviço profissional de locação de equipamentos oftalmológicos portáteis, você pode realizar a consulta, exames e acompanhamentos em domicílio, homecare e empresas, com o mesmo padrão de excelência de um consultório.
              </p>
              <p>
                Tudo isso sem precisar se preocupar com os equipamentos e o suporte técnico.
              </p>
              
              <div className="bg-primary-green/5 border-l-4 border-primary-green p-4 rounded-r-xl my-6">
                <p className="font-medium text-primary-navy">
                  É uma forma inteligente de ampliar sua atuação, criando uma nova e diferenciada base de clientes.
                </p>
              </div>

              <p className="font-semibold text-primary-navy">
                Você entra com seu conhecimento médico, nós fornecemos a tecnologia e o suporte técnico.
              </p>
              
              <p>
                Mais satisfação e versatilidade, sem precisar se preocupar com a aquisição e manutenção de máquinas.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-lg font-bold text-primary-navy mb-4">Exames realizados:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exams.map((exam, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{exam}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer/Action */}
        <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-100">
          <a 
            href="https://wa.me/5591991908887?text=Olá!%20Tenho%20interesse%20no%20aluguel%20de%20equipamentos%20oftalmológicos."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-primary-green/20 transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            Entrar em Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default RentalModal;
