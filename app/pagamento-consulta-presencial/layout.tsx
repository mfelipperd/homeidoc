import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagamento: Consulta Presencial',
  description: 'Realize o pagamento para seu atendimento oftalmológico presencial em domicílio com a Home iDoc. Tecnologia de ponta na sua casa.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
