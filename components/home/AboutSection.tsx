const AboutSection = () => {
  const highlights = [
    'Consulta oftalmológica completa no conforto da sua casa',
    'Equipamentos portáteis de última geração',
    'Pioneiros no Brasil com VisuALL ETS da Olleyes',
    'Equipe médica altamente especializada',
    'Atendimento personalizado e agendado',
    'Mesma precisão de uma clínica tradicional',
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        {/* Título centralizado acima de toda a seção */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
          Por que o <span className="text-primary-green">Home iDoc</span> é a escolha exclusiva?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda - Texto */}
          <div className="text-left space-y-6">
            <div className="space-y-4 text-base text-white/90 leading-relaxed text-justify">
              <p>
                <strong className="text-white">Missão:</strong> "Levar Oftalmologia de Excelência onde você precisar!"
              </p>
              
              <p>
                O <strong>Home iDoc</strong> nasceu com a vocação de proporcionar atendimento 
                oftalmológico de alta qualidade fora do ambiente clínico tradicional. Criado 
                para atender um público exigente que busca exclusividade, conforto e 
                privacidade no conforto da sua residência ou local de trabalho. 
              </p>
              
              <p>
                Atendemos as principais regiões de <strong>Belém</strong>, com foco especial nos bairros 
                do <strong>Umarizal, Nazaré e Batista Campos</strong>, levando toda a estrutura 
                necessária para um diagnóstico preciso com a máxima conveniência.
              </p>

              <p>
                Somos <strong>pioneiros no Brasil</strong> na aquisição do revolucionário 
                <strong> VisuALL ETS da Olleyes</strong>, que permite realizar exames de campo 
                visual de forma rápida, confortável e clinicamente validada. Com equipamentos 
                portáteis de alta tecnologia, oferecemos uma consulta diagnóstica completa com 
                a mesma precisão de uma clínica de luxo tradicional.
              </p>
            </div>
          </div>

          {/* Coluna Direita - Lista de Destaques */}
          <div className="lg:mt-20">
            <div className="glass-card-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Nossos Diferenciais
              </h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li
                    key={`highlight-${index + 1}`}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-green rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
