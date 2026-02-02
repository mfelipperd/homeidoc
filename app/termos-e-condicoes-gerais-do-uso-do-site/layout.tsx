import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos e Condições Gerais de Uso',
  description: 'Leia os Termos e Condições Gerais de Uso do site Home iDoc. Informações sobre agendamento, telemedicina e consultas domiciliares.',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
