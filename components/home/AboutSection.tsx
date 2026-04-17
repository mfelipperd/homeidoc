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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Coluna Esquerda - Texto */}
          <div className="text-left flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-left mb-8 leading-tight">
              Conheça melhor o <span className="text-primary-green">Home iDoc</span>
            </h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed text-justify">
              <p>
                Pensando no conforto e na segurança de pacientes que possuam dificuldade de locomoção, 
                prefiram manter o distanciamento social, ou simplesmente desejem um atendimento 
                diferenciado sem sair de casa ou do trabalho, criamos o <strong>Home iDoc</strong>, 
                para oferecer atendimento oftalmológico domiciliar com a mesma qualidade e 
                eficiência do consultório.
              </p>
              
              <p>
                Com nossa equipe médica especializada, o auxílio de equipamentos portáteis e 
                tecnologias inovadoras, é possível diagnosticar e tratar diversas doenças 
                oftalmológicas.
              </p>
            </div>
          </div>

          {/* Coluna Direita - Lista de Destaques */}
          <div className="flex flex-col">
            <div className="glass-card-strong rounded-2xl p-8 h-full flex flex-col justify-center">
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
