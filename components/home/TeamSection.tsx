import Image from 'next/image';
import { teamMembers } from '@/data/teamMembers';

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.2)', position: 'relative', zIndex: 10 }}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-navy">
          Nossa Equipe Médica
        </h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Profissionais altamente capacitados e experientes, dedicados a cuidar da sua visão
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 pt-20">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group h-full"
            >
              {/* Card Principal */}
              <div className="glass-card-strong rounded-3xl p-6 pt-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl !border-0 h-full min-h-[280px] flex flex-col">
                {/* Foto Circular Flutuante */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl transition-all duration-500 group-hover:ring-primary-green group-hover:scale-110">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Accent Gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Informações */}
                <div className="text-center mt-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-primary-navy group-hover:text-primary-green transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Badge Especialidade */}
                  <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-gradient-to-r from-primary-teal to-primary-green text-white text-sm font-semibold shadow-lg">
                    {member.specialty}
                  </div>
                  
                  <p className="text-xs text-foreground/60 mb-4 font-medium tracking-wide">
                    {member.crm}
                  </p>
                  
                  {member.description && (
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
