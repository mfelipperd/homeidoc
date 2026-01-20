'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-sm shadow-sm py-4 border-b border-white/10' // Scrolled: Mais transparente
          : 'bg-white/50 backdrop-blur-md shadow-lg py-6 border-b border-white/20' // Topo: Mais opaco
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.webp"
              alt="Home iDoc"
              width={150}
              height={50}
              priority
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12'
              } w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-primary-green transition-colors duration-200 font-medium drop-shadow-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/quem-somos" 
                className="text-white hover:text-primary-green transition-colors duration-200 font-medium drop-shadow-sm"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link 
                href="/perguntas-frequentes" 
                className="text-white hover:text-primary-green transition-colors duration-200 font-medium drop-shadow-sm"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                href="/contato" 
                className="text-white hover:text-primary-green transition-colors duration-200 font-medium drop-shadow-sm"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link 
                href="/agendar-consulta" 
                className="bg-primary-green text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-teal hover:scale-105 transition-all duration-200 shadow-md"
              >
                Agendar Consulta
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-white drop-shadow-sm" />
            <span className="block w-6 h-0.5 bg-white drop-shadow-sm" />
            <span className="block w-6 h-0.5 bg-white drop-shadow-sm" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
