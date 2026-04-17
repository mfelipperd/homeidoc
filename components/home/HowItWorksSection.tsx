'use client';

import { useRef } from 'react';
import { Calendar, CreditCard, ClipboardList, Stethoscope, LucideIcon } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

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
    description: 'Entre em contato via WhatsApp ou pelo nosso site para agendar sua consulta.',
    Icon: Calendar,
  },
  {
    number: 2,
    title: 'Pagamento',
    description: 'Realize o pagamento antecipado para garantir e confirmar seu atendimento.',
    Icon: CreditCard,
  },
  {
    number: 3,
    title: 'Teleconsulta',
    description: 'Triagem e orientação inicial online por videochamada para otimizar a visita presencial.',
    Icon: ClipboardList,
  },
  {
    number: 4,
    title: 'Atendimento Domiciliar',
    description: 'Consulta oftalmológica completa no conforto da sua casa com equipe médica.',
    Icon: Stethoscope,
  },
];

const HowItWorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-white/50" id="como-funciona">
      <div className="container-custom" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4">
            Como funciona?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Um processo simples e humanizado para a saúde dos seus olhos.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
          
          {/* Progress Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-green to-primary-teal -translate-x-1/2 origin-top z-10"
            style={{ scaleY }}
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const { Icon } = step;

              return (
                <div key={step.number} className="relative flex flex-col md:flex-row items-center">
                  {/* Circle Marker */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary-green -translate-x-1/2 z-20 shadow-lg flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-green" />
                  </motion.div>

                  {/* Desktop Content Left */}
                  <div className={`hidden md:flex w-1/2 justify-end pr-16 ${isEven ? '' : 'invisible pointer-events-none'}`}>
                    <TimelineCard step={step} Icon={Icon} side="left" />
                  </div>

                  {/* Desktop Content Right */}
                  <div className={`hidden md:flex w-1/2 justify-start pl-16 ${!isEven ? '' : 'invisible pointer-events-none'}`}>
                    <TimelineCard step={step} Icon={Icon} side="right" />
                  </div>

                  {/* Mobile Content (always right-ish because line is on the left) */}
                  <div className="md:hidden w-full pl-12">
                    <TimelineCard step={step} Icon={Icon} side="mobile" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ step, Icon, side }: { step: Step; Icon: LucideIcon; side: 'left' | 'right' | 'mobile' }) => {
  const isLeft = side === 'left';
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: side === 'left' ? -50 : (side === 'right' ? 50 : 30) 
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`glass-card-strong rounded-3xl p-6 md:p-8 relative group transition-all duration-500 hover:shadow-2xl hover:bg-white/90`}
    >
      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : 'flex-row'}`}>
        <div className="w-12 h-12 bg-primary-green/10 rounded-2xl flex items-center justify-center group-hover:bg-primary-green transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-4xl font-black text-primary-green/20">0{step.number}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-primary-navy mb-3">
        {step.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed md:text-lg">
        {step.description}
      </p>

      {/* Connection arrow/indicator for Desktop */}
      {side !== 'mobile' && (
        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-gray-100 
          ${isLeft ? '-right-2 border-t border-r' : '-left-2 border-b border-l'}`} 
        />
      )}
    </motion.div>
  );
};

export default HowItWorksSection;

