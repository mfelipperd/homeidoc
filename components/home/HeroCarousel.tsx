'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta?: {
    text: string;
    link: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Oftalmologia de excelência',
    subtitle: 'no conforto do seu lar',
    image: '/images/carousel/slide1.png',
    cta: {
      text: 'Agende sua consulta',
      link: '/agendar-consulta',
    },
  },
  {
    id: 2,
    title: 'Equipe Médica Especializada',
    subtitle: 'com Tecnologias e conceitos inovadores',
    image: '/images/carousel/slide2.png',
  },
  {
    id: 3,
    title: 'Exames de campo visual',
    subtitle: 'rápidos, confortáveis e clinicamente validados',
    image: '/images/carousel/slide3.png',
  },
  {
    id: 4,
    title: 'Agende sua consulta online',
    subtitle: 'Atendimento rápido e personalizado',
    image: '/images/carousel/slide4.jpg',
    cta: {
      text: 'Acesse',
      link: '/agendar-consulta',
    },
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden h-[500px] sm:h-[600px] lg:h-screen bg-gray-900">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div className="relative h-full">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority={slide.id === 1}
                />
                
                {/* Overlay - Light gradient for dark text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-end pointer-events-none z-20 pb-12 sm:pb-24 md:pb-32">
                  <div className="container-custom w-full">
                    {/* Content Container - Removed card styling to show text directly on gradient */}
                    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                       <div className="flex-1 text-center md:text-left">
                        {slide.id === 1 ? (
                          <h1 
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 leading-tight text-primary-navy"
                          >
                            {slide.title}
                          </h1>
                        ) : (
                          <h2 
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 leading-tight text-primary-navy"
                          >
                            {slide.title}
                          </h2>
                        )}
                        <p 
                          className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-navy/80"
                        >
                          {slide.subtitle}
                        </p>
                      </div>
                      
                      {slide.cta && (
                        <div className="shrink-0">
                          <a
                            href={slide.cta.link}
                            className="inline-block bg-primary-green text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary-teal transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl pointer-events-auto border-2 border-transparent hover:border-white/20"
                          >
                            {slide.cta.text}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Areas - Outside the carousel viewport but absolute positioned over it */}
      {/* Left Half - Previous */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-0 bottom-0 w-1/2 group cursor-pointer z-10 focus:outline-none"
        aria-label="Previous slide"
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ChevronLeft className="w-12 h-12 text-primary-navy" strokeWidth={3} />
        </div>
      </button>

      {/* Right Half - Next */}
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-0 bottom-0 w-1/2 group cursor-pointer z-10 focus:outline-none"
        aria-label="Next slide"
      >
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ChevronRight className="w-12 h-12 text-primary-navy" strokeWidth={3} />
        </div>
      </button>

      {/* Navigation Dots (z-30 to be above nav buttons) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30 pointer-events-none">
        {slides.map((_, index) => (
          <button
            key={`dot-${index + 1}`}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 pointer-events-auto ${
              index === selectedIndex
                ? 'bg-primary-green w-8'
                : 'bg-primary-navy/20 hover:bg-primary-navy/40'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
export default HeroCarousel;
