import React from 'react';
import { Info } from 'lucide-react';

interface ConsultationInstructionsProps {
  showLinkNotice?: boolean;
}

const ConsultationInstructions = ({ showLinkNotice = false }: ConsultationInstructionsProps) => {
  const instructions = [
    'Escolha um local tranquilo e bem iluminado para a consulta.',
    'Certifique-se de que seu computador ou dispositivo esteja ligado e funcionando corretamente.',
    'Teste seus fones de ouvido e microfone para garantir que funcionem adequadamente.',
    'Feche aplicativos ou programas desnecessários que possam interferir na qualidade da chamada.',
    'Esteja pronto alguns minutos antes do horário agendado para a consulta.',
  ];

  if (showLinkNotice) {
    instructions.push('Enviaremos o link para a teleconsulta alguns minutos antes do horário marcado.');
  }

  return (
    <div className="glass-card-strong rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-2xl border border-white/50 animate-fade-in-up animation-delay-200">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-primary-navy text-[#FFFFFF] rounded-2xl flex items-center justify-center" style={{ color: '#FFFFFF' }}>
          <Info className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-navy tracking-tight">
          Instruções para a Consulta Online
        </h2>
      </div>
      
      <p className="text-gray-700 text-xl mb-10 leading-relaxed font-medium">
        Antes da sua consulta online, é importante preparar o ambiente e o equipamento para garantir uma experiência tranquila. Aqui estão algumas orientações:
      </p>

      <ul className="grid gap-5">
        {instructions.map((text, index) => (
          <li key={index} className="flex items-start gap-6 p-6 rounded-3xl bg-white/40 hover:bg-white/70 transition-all border border-transparent hover:border-white/60 group shadow-sm hover:shadow-md">
            <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary-navy text-[#FFFFFF] flex items-center justify-center font-black text-lg transition-transform group-hover:scale-110" style={{ color: '#FFFFFF' }}>
              {index + 1}
            </span>
            <span className="text-gray-800 text-xl leading-snug pt-1 group-hover:text-primary-navy transition-colors font-semibold">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultationInstructions;
