import type { Metadata } from 'next';
import { CheckCircle2, Mail } from 'lucide-react';
import ConsultationInstructions from '@/components/scheduling/ConsultationInstructions';
import MediaTestSection from '@/components/media/MediaTestSection';

export const metadata: Metadata = {
  title: 'Pagamento Realizado com Sucesso!',
  description: 'Seu pagamento foi confirmado. Confira as instruções para sua consulta online com a Home iDoc.',
  robots: {
    index: false,
    follow: true,
  },
};

const ConfirmationHeader = () => (
  <div className="text-center mb-12 animate-fade-in-up">
    <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-green/10 rounded-full mb-8">
      <CheckCircle2 className="w-16 h-16 text-primary-green" strokeWidth={1.5} />
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-navy mb-6 tracking-tight">
      Pagamento realizado com sucesso!
    </h1>
    <div className="space-y-3">
      <p className="text-2xl text-gray-700 font-bold">
        Seu agendamento foi realizado com sucesso.
      </p>
      <div className="flex items-center justify-center gap-2 text-primary-navy/70 font-medium bg-primary-navy/5 py-3 px-6 rounded-2xl w-fit mx-auto border border-primary-navy/10">
        <Mail className="w-5 h-5" />
        <p className="text-lg">
          Um e-mail de confirmação foi enviado para o endereço cadastrado.
        </p>
      </div>
    </div>
  </div>
);

const PaymentConfirmedPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-custom max-w-5xl">
        <ConfirmationHeader />
        <ConsultationInstructions showLinkNotice={false} />
        <MediaTestSection />
      </div>
    </div>
  );
};

export default PaymentConfirmedPage;
