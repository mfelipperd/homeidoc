'use client';

import { useSchedulingModal } from '@/context/SchedulingModalContext';
import { X, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const SchedulingModal = () => {
  const { isOpen, closeModal } = useSchedulingModal();
  const [isLoading, setIsLoading] = useState(true);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) setIsLoading(true);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      />
      
      <div className="relative w-full max-w-7xl h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100 bg-white z-20">
          <h2 className="text-xl font-bold text-primary-navy">
            Agendamento Online
          </h2>
          <button 
            onClick={closeModal}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 relative bg-gray-50">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <Loader2 className="w-10 h-10 text-primary-green animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Carregando sistema de agendamento...</p>
            </div>
          )}
          
          <iframe 
            src="https://smartmed.agendamento.medplusweb.com.br/agendamento/auth/cadastro-conta"
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title="Agendamento Online"
            allow="geolocation; microphone; camera"
          />
        </div>
      </div>
    </div>
  );
};

export default SchedulingModal;
