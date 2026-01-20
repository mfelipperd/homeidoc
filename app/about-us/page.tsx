import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Conheça a Home iDoc, serviço de oftalmologia domiciliar e telemedicina da Smart Doc Oftalmologia.',
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 " >
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            Quem <span className="text-primary-green">somos?</span>
          </h1>
        </div>

        {/* Video & Intro Section */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
             {/* Video Section (Left) */}
             <div className="h-full">
              <div className="aspect-video w-full rounded-xl overflow-hidden h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/C6mCqPjcrLE"
                  title="Vídeo Institucional Home iDoc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Intro Text (Right) */}
            <div className="h-full flex items-center">
              <p className="text-xl text-white/90 leading-relaxed">
                Somos um serviço de consulta domiciliar e de teleconsulta da empresa{' '}
                <strong>Smart Doc Oftalmologia</strong>, voltado especialmente ao público que possui dificuldades
                de locomoção, ou deseja um atendimento oftalmológico diferenciado e com hora marcada, no conforto
                do seu lar ou do trabalho. Nascemos com esta vocação, e essa é nossa missão e satisfação: levar
                Oftalmologia de Excelência onde você precisar!
              </p>
            </div>
          </div>
        </div>

        {/* Services & Audience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card-strong p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              O que fazemos
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-green mb-3">
                  1. Consulta online
                </h3>
                <p className="text-white/80 leading-relaxed">
                  (consulta de avaliação e orientação). O oftalmologista realizará a anamnese e indicação de
                  tratamento (quando possível) por telemedicina, ou de acordo com a necessidade, indicará
                  agendamento para realização de exames complementares com o médico oftalmologista e/ou
                  sub-especialista em domicílio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-green mb-3">
                  2. Consulta em domicílio
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  (consulta presencial e diagnóstica). O oftalmologista presencialmente poderá realizar no
                  domicílio do paciente os seguintes exames:
                </p>
                <ul className="space-y-2 text-white/80 list-disc list-inside pl-2">
                  <li>Medida do alcance visual sem e com óculos, medida do grau dos óculos com equipamento automático, sem ou com necessidade de dilatar, e teste de confirmação subjetiva;</li>
                  <li>Verificação da motilidade ocular externa;</li>
                  <li>Retinografia sem ou com dilatação;</li>
                  <li>Teste de visão de cores;</li>
                  <li>Campimetria Visual;</li>
                  <li>Exame do segmento anterior no biomicroscópio com lâmpada de fenda;</li>
                  <li>Topografia computadorizada de córnea;</li>
                  <li>Medida da pressão ocular;</li>
                  <li>Gonioscopia;</li>
                  <li>Prescrição de receita de óculos e de tratamentos, solicitação de exames complementares, emissão de laudos e/ou atestados quando possível ou necessário.</li>
                </ul>
              </div>

               <div>
                <h3 className="text-xl font-semibold text-primary-green mb-3">
                  Exames realizados pelo especialista em retina:
                </h3>
                <ul className="space-y-2 text-white/80 list-disc list-inside pl-2">
                  <li>Mapeamento de retina</li>
                  <li>Biomicroscopia de fundo</li>
                  <li>Ultrassonografia ocular</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-full">
             {/* Target Audience */}
             <div className="glass-card p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Para quem são os serviços do Home iDoc?
              </h3>
              <ul className="space-y-4">
                {[
                  'Para pacientes acamados, com impossibilidade ou dificuldade de locomoção.',
                  'Para problemas oculares emergenciais em horário em que não haja facilidade de atendimento convencional.',
                  'Por questões de comodidade ou privacidade.',
                  'Para atender a conveniência de horário de pessoas que tenham pouca disponibilidade de tempo.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                     <span className="flex-shrink-0 w-6 h-6 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Important Info */}
         <div className="glass-card-strong border-l-4 border-l-yellow-500 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500">⚠</span> Importante
          </h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold">•</span>
              <span>Após a realização da consulta domiciliar, eventualmente poderá ser detectada a necessidade de exames adicionais a serem realizados por um subespecialista, ou a necessidade do paciente deslocar-se para atendimento convencional em clínica ou hospital.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold">•</span>
              <span>O horário de atendimento será por hora marcada através de agendamento prévio, de acordo com a disponibilidade.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold">•</span>
              <span>O pagamento para a consulta online deverá ser efetuada e confirmada no agendamento, através de cartão de crédito, cartão de débito, ou pix. Após a consulta online, sendo necessária a consulta em domicílio para exames ou procedimentos adicionais, será enviado link para complementação de pagamento dos respectivos exames e taxas.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold">•</span>
              <span>Será cobrada taxa fixa para o deslocamento da equipe e seguro dos equipamentos na consulta em domicílio.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold">•</span>
              <span>Caso haja necessidade da presença de subespecialista para procedimento adicional, será emitido orçamento para realização em domicílio, ou o paciente deverá deslocar-se a uma clínica indicada, ou de sua preferência.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold">•</span>
              <span>Caso haja necessidade de retorno da equipe para acompanhamento do caso em até 15 dias corridos, será cobrada apenas a taxa fixa de deslocamento da equipe e seguro dos equipamentos. Após esses 15 dias da primeira consulta em domicílio, será cobrada nova consulta.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
