import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagamento: Consulta Presencial de Urgência',
  description: 'Realize o pagamento para sua consulta presencial de urgência com a Home iDoc. Atendimento médico especializado no conforto de sua casa.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
