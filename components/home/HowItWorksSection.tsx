import { Calendar, CreditCard, ClipboardList, Stethoscope, LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Agendamento',
    description: 'Entre em contato via WhatsApp ou pelo nosso site para agendar sua consulta',
    Icon: Calendar,
  },
  {
    number: 2,
    title: 'Pagamento',
    description: 'Realize o pagamento antecipado para garantir e confirmar seu atendimento',
    Icon: CreditCard,
  },
  {
    number: 3,
    title: 'Teleconsulta',
    description: 'Triagem e orientação inicial online por videochamada para otimizar a visita presencial',
    Icon: ClipboardList,
  },
  {
    number: 4,
    title: 'Atendimento Domiciliar',
    description: 'Consulta oftalmológica completa no conforto da sua casa com médico e auxiliar técnico',
    Icon: Stethoscope,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ textShadow: '0 6px 20px rgba(0, 0, 0, 0.35)' }}>
          Como funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const { Icon } = step;
            return (
              <div
                key={step.number}
                className="glass-card-strong rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Número do Passo */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary-navy" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                
                {/* Descrição */}
                <p className="text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
