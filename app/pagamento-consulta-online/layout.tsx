import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagamento: Consulta Online',
  description: 'Realize o pagamento para sua teleconsulta oftalmológica com a Home iDoc. Praticidade e segurança sem sair de casa.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
