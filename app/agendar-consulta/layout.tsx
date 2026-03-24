import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Consulta',
  description: 'Agende sua consulta oftalmológica domiciliar ou teleconsulta com o Home iDoc. Atendimento profissional no conforto do seu lar.',
};

export default function AgendarConsultaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
