import type { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, Home, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selecione sua Consulta',
  description: 'Selecione a modalidade de consulta ideal para você: Online, Presencial ou Urgência.',
};

const SelectionCard = ({ 
  title, 
  price, 
  description, 
  href, 
  icon: Icon,
  featured = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  href: string; 
  icon: any;
  featured?: boolean;
}) => (
  <Link href={href} className="group relative flex flex-col h-full animate-fade-in-up">
    <div className={`flex-grow glass-card-strong rounded-3xl p-8 transition-all duration-300 border ${
      featured 
        ? 'border-primary-green/50 shadow-primary-green/10 shadow-2xl scale-[1.02]' 
        : 'border-white/40 hover:border-primary-navy/20 shadow-xl'
    } group-hover:shadow-2xl group-active:scale-[0.98]`}>
      
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-green text-[#FFFFFF] px-4 py-1 rounded-full text-xs font-bold shadow-lg z-10" style={{ color: '#FFFFFF' }}>
          ATENDIMENTO IMEDIATO
        </div>
      )}

      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
        featured ? 'bg-primary-green text-[#FFFFFF]' : 'bg-primary-navy/10 text-primary-navy'
      }`} style={featured ? { color: '#FFFFFF' } : {}}>
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-2xl font-bold text-primary-navy mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-4 text-primary-navy">
        <span className="text-sm font-medium">R$</span>
        <span className="text-3xl font-black">{price}</span>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className={`flex items-center gap-2 font-bold text-sm transition-all ${
        featured ? 'text-primary-green group-hover:gap-4' : 'text-primary-navy group-hover:gap-4'
      }`}>
        SELECIONAR
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </Link>
);

const PaymentSelectionPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-navy mb-4">
            Selecione a modalidade de consulta:
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Escolha a opção que melhor atende às suas necessidades e siga para o pagamento seguro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SelectionCard
            title="Consulta Online"
            price="200,00"
            description="Teleconsulta prática e segura para triagem inicial, orientação médica e dúvidas."
            href="/pagamento-consulta-online"
            icon={Monitor}
          />
          <SelectionCard
            title="Consulta Presencial"
            price="1.200,00"
            description="Atendimento completo em domicílio com equipamentos portáteis e precisão clínica."
            href="/pagamento-consulta-presencial"
            icon={Home}
          />
          <SelectionCard
            title="Urgência Presencial"
            price="1.200,00"
            description="Atendimento prioritário em domicílio com equipe especializada para casos urgentes."
            href="/pagamento-consulta-presencial-de-urgencia"
            icon={Zap}
            featured
          />
        </div>
        
        <div className="mt-16 text-center text-gray-400 text-sm animate-fade-in-up animation-delay-500">
           Excelência oftalmológica no conforto do seu lar.
        </div>
      </div>
    </div>
  );
};

export default PaymentSelectionPage;
