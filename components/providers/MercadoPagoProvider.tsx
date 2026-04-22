'use client';

import { useEffect, useState } from 'react';

let initialized = false;

const MercadoPagoProvider = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initSDK = async () => {
      if (!initialized) {
        const publicKey = process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
        if (publicKey) {
          const { initMercadoPago } = await import('@mercadopago/sdk-react');
          initMercadoPago(publicKey, { locale: 'pt-BR' });
          initialized = true;
        }
      }
      setReady(true);
    };

    initSDK();
  }, []);

  if (!ready) return <>{children}</>;

  return <>{children}</>;
};

export default MercadoPagoProvider;
