'use client';

import YouTube from 'react-youtube';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
          Por que a <span className="text-primary-green">Home iDoc</span> é a escolha exclusiva?
        </h2>
        
        {/* Vídeo - 90% da largura */}
        <div className="w-[90%] mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-green to-primary-teal rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white">
            <YouTube
              videoId="r975vWSzrGs"
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                },
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
