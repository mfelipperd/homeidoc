import type { Metadata } from 'next';
import HeroCarousel from '@/components/home/HeroCarousel';
import AboutSection from '@/components/home/AboutSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TeamSection from '@/components/home/TeamSection';
import EquipmentRentalSection from '@/components/home/EquipmentRentalSection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home iDoc - Oftalmologia de excelência no conforto do seu lar. Atendimento domiciliar com equipe especializada e tecnologia de ponta.',
};

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TeamSection />
      <EquipmentRentalSection />
    </>
  );
};

export default HomePage;

