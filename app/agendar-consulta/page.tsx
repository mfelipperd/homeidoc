'use client';

import { useState } from 'react';
import { useSchedulingModal } from '@/context/SchedulingModalContext';
import { useContactModal } from '@/context/ContactModalContext';
import { Check } from 'lucide-react';
import Link from 'next/link';
import ServiceDetails from '@/components/scheduling/ServiceDetails';

export default function AgendarConsultaPage() {
  const { openModal } = useSchedulingModal();
  const { openModal: openContactModal } = useContactModal();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-navy">
            Agendamento de Consulta
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Antes de agendar, confira os detalhes e valores dos nossos serviços. Selecione o tipo de atendimento abaixo para ver mais informações.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          <ServiceDetails 
            title="Teleconsulta" 
            price="R$ 200,00"
            description="Atendimento online pelo smartphone ou computador."
          />
          <ServiceDetails 
            title="Consulta Presencial Padrão" 
            price="R$ 1.200,00"
            description={
              <>
                <strong>Exames:</strong> Acuidade visual, motilidade, teste de cores, campimetria de confrontação, refração objetiva/subjetiva (exame do grau), biomicroscopia de segmento anterior (exame com microscópio), tonometria (medida da pressão do olho), retinografia simples (foto colorida do fundo do olho).
                <br/><br/>
                <strong>Consulta presencial adicional:</strong> Para consulta adicional no mesmo local e horário: R$ 600,00 por paciente.
              </>
            }
          />
          <ServiceDetails 
            title="Consulta Presencial de Urgência" 
            price="R$ 1.200,00"
            description={
              <>
                (trauma, dor aguda, corpo estranho)
                <br/><br/>
                <strong>Exames:</strong> Biomicroscopia de segmento anterior (exame com microscópio), retirada de corpo estranho da superfície ocular, tonometria (medida da pressão do olho), gonioscopia (exame do ângulo íris-córnea), curativo oclusivo.
                <br/><br/>
                <strong>Observação:</strong> Os procedimentos acima serão realizados conforme a necessidade.
              </>
            }
          />
           <ServiceDetails 
            title="Outros Serviços" 
            price="Sob orçamento"
            description={
              <>
                <strong>Exames de glaucoma:</strong> Campimetria visual (exame de campo de visão) , Tonometria (medida da pressão do olho), Gonioscopia (exame do ângulo íris-córnea), Paquimetria (espessura da córnea), Retinografia de papila (foto do nervo óptico).
                <br/><br/>
                <strong>Exames de retina:</strong> Ecografia B (ultrassom do olho), Mapeamento de retina/Fundoscopia (inspeção de toda retina), Retinografia simples (foto colorida do fundo).
                <br/><br/>
                <strong>Combo exames de glaucoma e retina:</strong> Campimetria visual, Tonometria, Gonioscopia, Paquimetria, Ecografia B, Mapeamento de retina, Retinografia.
                <br/><br/>
                <strong>Exames avulsos (extras):</strong> Teste de sobrecarga hídrica - TSH, Topografia computadorizada de córnea, Tomografia de Coerência Óptica - OCT (Em breve).
                <br/><br/>
                <strong>Consulta Coletiva (acima de 10 pacientes):</strong> Consulta presencial com exames a combinar.
              </>
            }
          />
        </div>

        {/* Terms and Action */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-6">
          <div className="flex items-start gap-4">
            <label className="flex items-start gap-4 cursor-pointer group w-full">
              <div className="relative flex items-center mt-1">
                <input 
                  type="checkbox" 
                  className="peer sr-only"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:bg-primary-green peer-checked:border-primary-green transition-all" />
                <Check className="w-4 h-4 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors">
                Declaro que li e aceito os termos de serviço e a política de privacidade. Estou ciente de que o agendamento está sujeito à disponibilidade.
              </span>
            </label>
          </div>

          <button
            onClick={openModal}
            disabled={!acceptedTerms}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl ${
              acceptedTerms 
                ? 'bg-primary-green text-white hover:bg-primary-teal hover:shadow-2xl hover:shadow-primary-green/30' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
            }`}
          >
            Clique aqui para agendar sua consulta
          </button>

          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            <strong>Se você ainda tiver alguma dúvida</strong>, não hesite em consultar nossas <Link href="/perguntas-frequentes" className="text-primary-green hover:underline font-medium">perguntas frequentes (FAQs)</Link> ou <button onClick={openContactModal} className="text-primary-green hover:underline font-medium">entrar em contato conosco</button>. Estamos à disposição para ajudá-lo.
          </p>
        </div>

      </div>
    </div>
  );
}
