import type { Metadata } from 'next';
import { CheckCircle2, Info } from 'lucide-react';
import MediaTestSection from '@/components/media/MediaTestSection';

export const metadata: Metadata = {
  title: 'Instruções para a Consulta Online',
  description: 'Instruções importantes para sua consulta online com a Home iDoc. Prepare seu ambiente e equipamentos.',
  robots: {
    index: false,
    follow: true,
  },
};

const SuccessHeader = () => (
  <div className="text-center mb-12 animate-fade-in-up">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-green/10 rounded-full mb-6">
      <CheckCircle2 className="w-12 h-12 text-primary-green" />
    </div>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-navy mb-4 leading-tight max-w-4xl mx-auto">
      Muito obrigado, seu agendamento está confirmado e o pagamento foi realizado com sucesso!
    </h1>
    <p className="text-xl text-gray-600 font-medium italic">
      Recomendamos a leitura das instruções abaixo:
    </p>
  </div>
);

const InstructionsCard = () => {
  const instructions = [
    'Escolha um local tranquilo e bem iluminado para a consulta.',
    'Certifique-se de que seu computador ou dispositivo esteja ligado e funcionando corretamente.',
    'Teste seus fones de ouvido e microfone para garantir que funcionem adequadamente.',
    'Feche aplicativos ou programas desnecessários que possam interferir na qualidade da chamada.',
    'Esteja pronto alguns minutos antes do horário agendado para a consulta.',
    'Enviaremos o link para a teleconsulta alguns minutos antes do horário marcado.',
  ];

  return (
    <div className="glass-card-strong rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border border-white/40 animate-fade-in-up animation-delay-200">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-primary-navy/10 rounded-xl flex items-center justify-center">
          <Info className="w-6 h-6 text-primary-navy" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-navy">
          Instruções para a Consulta Online
        </h2>
      </div>
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        Antes da sua consulta online, é importante preparar o ambiente e o equipamento para garantir uma experiência tranquila. Aqui estão algumas orientações:
      </p>

      <ul className="grid gap-4">
        {instructions.map((text, index) => (
          <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 hover:bg-white/60 transition-colors border border-transparent hover:border-white/60 group">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-navy text-[#FFFFFF] flex items-center justify-center font-bold text-sm" style={{ color: '#FFFFFF' }}>
              {index + 1}
            </span>
            <span className="text-gray-700 text-lg leading-snug pt-0.5 group-hover:text-primary-navy transition-colors font-medium">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const InstructionsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-custom">
        <SuccessHeader />
        <InstructionsCard />
        <MediaTestSection />
      </div>
    </div>
  );
};

export default InstructionsPage;
