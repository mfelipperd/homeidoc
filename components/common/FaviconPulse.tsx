'use client';

import { useEffect, useRef } from 'react';

const FaviconPulse = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalFavicon = '/favicon.ico';
  // Favicon "alerta" (círculo vermelho simples em base64 para evitar requisição extra)
  const alertFavicon = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23FF0000%22/></svg>';

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Iniciar pulso quando o usuário sai da aba
        let isAlert = false;
        intervalRef.current = setInterval(() => {
          document.title = isAlert ? 'Home iDoc - Volte aqui! 🔴' : 'Home iDoc - Cuidando da sua saúde';
          
          const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
          if (link) {
            link.href = isAlert ? alertFavicon : originalFavicon;
          } else {
            // Se não existir, cria um
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.href = isAlert ? alertFavicon : originalFavicon;
            document.head.appendChild(newLink);
          }
          
          isAlert = !isAlert;
        }, 1000);
      } else {
        // Parar pulso e restaurar original quando volta
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        document.title = 'Home iDoc - Cuidando da sua saúde';
        const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
        if (link) {
          link.href = originalFavicon;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return null; // Componente lógico sem renderização visual
};

export default FaviconPulse;
