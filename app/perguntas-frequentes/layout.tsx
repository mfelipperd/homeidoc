import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description: 'Tire suas dúvidas sobre o Home iDoc. Confira as respostas para as perguntas mais comuns sobre oftalmologia domiciliar e telemedicina.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
