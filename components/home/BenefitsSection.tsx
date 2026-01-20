'use client';

import YouTube from 'react-youtube';
import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Agendamento',
      description: 'Acesse nosso site e agende seu horário com praticidade',
      image: '/images/benefits/agendamento.webp',
    },
    {
      title: 'Pagamento',
      description: 'Realize o pagamento de forma segura e rápida',
      image: '/images/benefits/pagamento.webp',
    },
    {
      title: 'Pré-atendimento',
      description: 'Nossa equipe entra em contato para triagem inicial',
      image: '/images/benefits/triagem.webp',
    },
    {
      title: 'Consulta',
      description: 'Atendimento oftalmológico completo no conforto do seu lar',
      image: '/images/benefits/consulta.webp',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12" style={{ textShadow: '0 6px 20px rgba(0, 0, 0, 0.35)' }}>
          Por que escolher o <span className="text-primary-green">Home iDoc</span>?
        </h2>
        
        {/* Vídeo - 90% da largura */}
        <div className="w-[90%] mx-auto mb-16">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <YouTube
              videoId="r975vWSzrGs"
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                },
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Título Como Funciona */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ textShadow: '0 6px 20px rgba(0, 0, 0, 0.35)' }}>
          Como funciona?
        </h3>

        {/* Cards em Flex Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={`benefit-${index + 1}`}
              className="glass-card-strong rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.5rem)] min-w-[180px]"
            >
              {/* Imagem */}
              <div className="w-24 h-24 mb-6 relative">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-contain rounded-full"
                />
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {benefit.title}
              </h3>

              {/* Descrição */}
              <p className="text-white/90 text-sm font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
