'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/context/ContactModalContext';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();

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
      <nav className="container-custom relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo home idoc.png"
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
                href="/about-us" 
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
              <button 
                onClick={openModal}
                className="text-white hover:text-primary-green transition-colors duration-200 font-medium drop-shadow-sm"
              >
                Contato
              </button>
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
            className="md:hidden flex flex-col justify-center space-y-1.5 p-2 z-50 relative"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white drop-shadow-sm transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white drop-shadow-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white drop-shadow-sm transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-primary-green shadow-xl transition-all duration-300 ease-in-out overflow-hidden rounded-b-2xl ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <Link 
                href="/" 
                className="text-white text-lg font-medium hover:text-primary-navy hover:scale-105 transition-all" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about-us" 
                className="text-white text-lg font-medium hover:text-primary-navy hover:scale-105 transition-all" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link 
                href="/perguntas-frequentes" 
                className="text-white text-lg font-medium hover:text-primary-navy hover:scale-105 transition-all" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <button 
                onClick={() => { openModal(); setIsMobileMenuOpen(false); }} 
                className="text-white text-lg font-medium hover:text-primary-navy hover:scale-105 transition-all"
              >
                Contato
              </button>
            </li>
            <li>
              <Link 
                href="/agendar-consulta" 
                className="bg-white text-primary-green px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md inline-block mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Consulta
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
