'use client';

import { useEffect, useRef } from 'react';

const FaviconPulse = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalFavicon = '/images/home idoc casinha.png';
  const badgeFaviconRef = useRef<string | null>(null);

  useEffect(() => {
    // Pré-carregar a logo e criar a versão com badge
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = originalFavicon;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Desenha a logo original
        ctx.drawImage(img, 0, 0, 32, 32);
        
        // Desenha o badge (ponto vermelho) no canto superior direito
        ctx.beginPath();
        ctx.arc(24, 8, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        badgeFaviconRef.current = canvas.toDataURL('image/png');
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let isAlert = false;
        intervalRef.current = setInterval(() => {
          document.title = isAlert ? 'Home iDoc - Agende sua consulta! 📅' : 'Home iDoc - Cuidando da sua saúde';
          
          const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
          if (link) {
            link.href = isAlert ? (badgeFaviconRef.current || originalFavicon) : originalFavicon;
          }
          
          isAlert = !isAlert;
        }, 1500);
      } else {
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

  return null;
};

export default FaviconPulse;
