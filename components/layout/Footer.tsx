'use client';

import { useContactModal } from '@/context/ContactModalContext';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useContactModal();

  return (
    <footer className="glass-card-strong mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo Home iDoc e Descrição */}
          <div>
            <div className="mb-4">
              <Image 
                src="/images/logo-home-idoc.png" 
                alt="Home iDoc" 
                width={180}
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Levar Oftalmologia de Excelência onde você precisar! Atendimento domiciliar com equipe especializada e tecnologia de ponta.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-navy uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-foreground/80 hover:text-primary-green transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/agendar-consulta" 
                  className="text-foreground/80 hover:text-primary-green transition-colors duration-200"
                >
                  Agendamento de Consulta
                </Link>
              </li>
              <li>
                <Link 
                  href="/politica-de-privacidade" 
                  className="text-foreground/80 hover:text-primary-green transition-colors duration-200"
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link 
                  href="/termos-e-condicoes-gerais-do-uso-do-site" 
                  className="text-foreground/80 hover:text-primary-green transition-colors duration-200"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <button 
                  onClick={openModal}
                  className="text-foreground/80 hover:text-primary-green transition-colors duration-200 text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-navy uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@homeidoc.com.br
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (91) 99190-8887
              </li>
              <li className="text-xs text-foreground/60 mt-4">
                <strong className="text-primary-navy">Responsável Técnico:</strong><br />
                Dr. Roberto Carlei C. Lima<br />
                CRM-PA 5071 | RQE 6500
              </li>
              <li className="text-xs text-foreground/60 mt-2">
                SmartDoc Consultoria e Serviços em Oftalmologia
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Logo Smart Doc, Redes Sociais e Citação */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="mb-4">
              <Image 
                src="/images/Logo Smart Doc azul (1).png" 
                alt="Smart Doc Oftalmologia" 
                width={140}
                height={70}
                className="h-auto scale-110"
              />
            </div>
            
            {/* Redes Sociais */}
            <div className="mb-4">
              <p className="text-xs text-foreground/70 mb-2 font-semibold">Siga-nos</p>
              <div className="flex gap-3 justify-center lg:justify-end">
                <a
                  href="https://instagram.com/homeidoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-navy/10 hover:bg-primary-green hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-navy group-hover:text-white" />
                </a>
                <a
                  href="mailto:contato@homeidoc.com.br"
                  className="w-10 h-10 rounded-full bg-primary-navy/10 hover:bg-primary-green hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-primary-navy group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Citação Bíblica */}
            <p className="text-xs italic text-foreground/60 max-w-xs font-medium">
              "A Tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho."
              <br />
              <span className="text-foreground/40 not-italic">Salmos 119:105</span>
            </p>
          </div>
        </div>

        {/* Copyright & Credit */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-foreground/60">
          <p className="mb-2">
            &copy; {currentYear} Home iDoc. Todos os direitos reservados.
          </p>
          <p>
            Criado com <span className="text-red-500">❤️</span> por{' '}
            <a 
              href="https://portfolio-marcos-three.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary-green transition-colors duration-200 font-medium"
            >
              Marcos Felippe
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
