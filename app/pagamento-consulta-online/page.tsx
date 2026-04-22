'use client';

import PaymentPageCard from '@/components/payment/PaymentPageCard';

const OnlinePaymentPage = () => {
  const content = "A teleconsulta oftalmológica é bastante útil para casos simples que não exijam a utilização de equipamentos para avaliação. Através dessa modalidade, e dentro das limitações inerentes à mesma, o médico avalia o paciente remotamente, dá as orientações necessárias e indica o tratamento se for possível.";

  return (
    <div className="min-h-screen bg-background pt-32 pb-12">
      <div className="container-custom">
        <PaymentPageCard
          title="Consulta Online (Teleconsulta)"
          price="R$ 200,00"
          priceNumber={200}
          content={content}
          consultationType="consulta-online"
        />
        
        <div className="max-w-3xl mx-auto px-4 mt-12 text-left text-gray-600 text-lg md:text-xl font-semibold italic animate-fade-in-up animation-delay-500">
          <p className="bg-primary-navy/5 p-6 rounded-2xl border border-primary-navy/10">
            Obs: Havendo necessidade de consulta presencial, o paciente poderá optar pela consulta em domicílio no valor de R$ 1.200,00 ou deverá buscar atendimento em uma clínica especializada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlinePaymentPage;
