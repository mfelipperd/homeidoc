'use client';

import PaymentPageCard from '@/components/payment/PaymentPageCard';

const PresencialPaymentPage = () => {
  const content = "Nosso atendimento presencial envolve 2 médicos e inclui custos de transporte até o seu endereço. Nossos profissionais são qualificados, experientes e utilizam equipamentos premium de alta tecnologia. Além disso realizam exames adicionais, comumente não realizados em uma consulta oftalmológica de rotina. Esses diferenciais agregam valor e proporcionam uma maior comodidade e economia de tempo para você!";

  return (
    <div className="min-h-screen bg-background pt-32 pb-12">
      <div className="container-custom">
        <PaymentPageCard
          title="Consulta Presencial"
          price="R$ 1.200,00"
          priceNumber={1200}
          content={content}
          consultationType="consulta-presencial"
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

export default PresencialPaymentPage;
