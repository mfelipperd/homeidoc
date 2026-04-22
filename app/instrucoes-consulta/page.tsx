import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import ConsultationInstructions from '@/components/scheduling/ConsultationInstructions';
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

const InstructionsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-custom">
        <SuccessHeader />
        <ConsultationInstructions showLinkNotice={true} />
        <MediaTestSection />
      </div>
    </div>
  );
};

export default InstructionsPage;
