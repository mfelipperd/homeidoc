import type { Metadata } from 'next';
import { Loader2, Mail } from 'lucide-react';
import ConsultationInstructions from '@/components/scheduling/ConsultationInstructions';
import MediaTestSection from '@/components/media/MediaTestSection';

export const metadata: Metadata = {
  title: 'Aguarde o Processamento do Pagamento',
  description: 'Seu pagamento está sendo processado. Confira as instruções para sua consulta online com a Home iDoc.',
  robots: {
    index: false,
    follow: true,
  },
};

const ProcessingHeader = () => (
  <div className="text-center mb-12 animate-fade-in-up">
    <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-navy/5 rounded-full mb-8">
      <Loader2 className="w-16 h-16 text-primary-navy animate-spin" strokeWidth={1.5} />
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-navy mb-6 tracking-tight">
      Aguarde o Processamento do Pagamento
    </h1>
    <div className="space-y-3">
      <p className="text-2xl text-gray-700 font-bold">
        Seu agendamento foi realizado com sucesso. O pagamento está sendo processado. Por favor, aguarde.
      </p>
      <div className="flex items-center justify-center gap-2 text-primary-navy/70 font-medium bg-primary-navy/5 py-3 px-6 rounded-2xl w-fit mx-auto border border-primary-navy/10">
        <Mail className="w-5 h-5" />
        <p className="text-lg">
          Um e-mail de confirmação será enviado para o endereço cadastrado assim que o pagamento for aprovado.
        </p>
      </div>
    </div>
  </div>
);

const PaymentProcessingPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-custom max-w-5xl">
        <ProcessingHeader />
        <ConsultationInstructions showLinkNotice={false} />
        <MediaTestSection />
      </div>
    </div>
  );
};

export default PaymentProcessingPage;
