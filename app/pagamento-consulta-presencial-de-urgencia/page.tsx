import type { Metadata } from 'next';
import PaymentPageCard from '@/components/payment/PaymentPageCard';

export const metadata: Metadata = {
  title: 'Pagamento: Consulta Presencial de Urgência',
  description: 'Realize o pagamento para sua consulta presencial de urgência com a Home iDoc. Atendimento médico especializado no conforto de sua casa.',
  robots: {
    index: false,
    follow: true,
  },
};

const EmergencyPaymentPage = () => {
  const content = "Nosso atendimento presencial envolve 2 médicos e inclui custos de transporte até o seu endereço. Nossos profissionais são qualificados, experientes e utilizam equipamentos premium de alta tecnologia. Além disso realizam exames adicionais, comumente não realizados em uma consulta oftalmológica de rotina. Esses diferenciais agregam valor e proporcionam uma maior comodidade e economia de tempo para você!";

  return (
    <div className="min-h-screen bg-background pt-32 pb-12">
      <div className="container-custom">
        <PaymentPageCard
          title="Consulta presencial de urgência"
          price="R$ 1.200,00"
          content={content}
          ctaText="Pagar e confirmar agendamento"
          ctaLink="https://mpago.la/1syTaLd"
        />
        
        <div className="max-w-3xl mx-auto px-4 mt-8 text-center text-gray-500 text-sm">
          <p>
            Home iDoc • Excelência em Oftalmologia Domiciliar
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPaymentPage;
