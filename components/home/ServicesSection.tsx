import { Stethoscope, Activity, Eye, Brain, TestTube, Microscope } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  items: string[];
}

const services: Service[] = [
  {
    title: 'Telemedicina',
    description: 'Pré-atendimento e orientação online',
    Icon: Activity,
    items: [
      'Triagem inicial por videochamada',
      'Orientação e esclarecimento de dúvidas',
      'Otimização da consulta presencial',
      'Acompanhamento pós-consulta',
    ],
  },
  {
    title: 'Atendimento Domiciliar',
    description: 'Consulta oftalmológica completa na sua casa',
    Icon: Stethoscope,
    items: [
      'Médico oftalmologista + médico auxiliar',
      'Equipamentos portáteis de alta tecnologia',
      'Diagnóstico com precisão clínica',
      'Receita, atestados e relatórios médicos',
    ],
  },
  {
    title: 'Exames de Refração',
    description: 'Avaliação completa da visão',
    Icon: Eye,
    items: [
      'Acuidade visual (com e sem óculos)',
      'Autorrefração (medição objetiva do grau)',
      'Refração (subjetiva do grau)',
      'Prescrição de óculos',
    ],
  },
  {
    title: 'Exames de Saúde Ocular',
    description: 'Diagnóstico de condições oftalmológicas',
    Icon: TestTube,
    items: [
      'Medida da pressão intraocular',
      'Avaliação da motilidade ocular',
      'Teste de visão de cores',
      'Fundoscopia/Retinografia',
    ],
  },
  {
    title: 'Diagnósticos Avançados',
    description: 'Tecnologia de ponta para diagnóstico preciso',
    Icon: Microscope,
    items: [
      'Retinografia (com ou sem midríase)',
      'Gonioscopia',
      'Mapeamento de retina',
      'Ultrassonografia ocular (especialistas em retina)',
    ],
  },
  {
    title: 'Especialidades',
    description: 'Equipe especializada em diversas áreas',
    Icon: Brain,
    items: [
      'Catarata e cirurgia refrativa',
      'Córnea e doenças da superfície ocular',
      'Glaucoma',
      'Retina e vítreo',
      'Neuro-oftalmologia',
      'Estrabismo e oftalmologia pediátrica',
      'Visão subnormal (baixa visão)',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Nossos <span className="text-primary-green">Serviços</span>
          </h2>
          <p className="text-xl text-white font-medium max-w-3xl mx-auto drop-shadow-lg">
            Oferecemos uma gama completa de serviços oftalmológicos com a mesma 
            qualidade de uma clínica, no conforto da sua casa ou local de trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { Icon } = service;
            return (
              <div
                key={`service-${index + 1}`}
                className="glass-card-strong rounded-3xl p-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Ícone */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-teal to-primary-green rounded-2xl flex items-center justify-center mb-8 shadow-xl mx-auto">
                  <Icon className="w-14 h-14 text-white" strokeWidth={2.5} />
                </div>

                {/* Título */}
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-white font-semibold mb-6 text-base">
                  {service.description}
                </p>

                {/* Lista de itens */}
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={`item-${index}-${itemIndex + 1}`}
                      className="flex items-start gap-3 text-base text-white font-medium"
                    >
                      <svg
                        className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Nota sobre cirurgias */}
        <div className="mt-12 p-6 glass-card rounded-xl">
          <p className="text-center text-white">
            <strong>Importante:</strong> Para cirurgias ou exames que não possam ser realizados 
            com equipamentos portáteis, encaminhamos nossos pacientes para uma clínica parceira 
            com toda estrutura necessária.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
