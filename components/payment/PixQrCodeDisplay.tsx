'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  QrCode,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  Smartphone,
} from 'lucide-react';

interface PixQrCodeDisplayProps {
  qrCodeBase64: string;
  qrCode: string;
  paymentId: number;
  amount: string;
}

const PixQrCodeDisplay: React.FC<PixQrCodeDisplayProps> = ({
  qrCodeBase64,
  qrCode,
  paymentId,
  amount,
}) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutos
  const [paymentApproved, setPaymentApproved] = useState(false);
  const [checking, setChecking] = useState(false);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Polling para verificar status do pagamento
  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        setChecking(true);
        const response = await fetch(`/api/mercadopago/payment-status?id=${paymentId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'approved') {
            setPaymentApproved(true);
            if (pollingRef.current) clearInterval(pollingRef.current);
            setTimeout(() => {
              router.push('/pagamento-confirmado');
            }, 2500);
          }
        }
      } catch {
        // Silently fail, will retry
      } finally {
        setChecking(false);
      }
    };

    // Verificar a cada 5 segundos
    pollingRef.current = setInterval(checkPaymentStatus, 5000);

    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [paymentId, router]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(qrCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = qrCode;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  }, [qrCode]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Estado: Pagamento aprovado
  if (paymentApproved) {
    return (
      <div className="max-w-2xl mx-auto my-12 px-4 sm:px-6 animate-fade-in-up">
        <div className="glass-card-strong rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-50 rounded-full mb-6">
            <CheckCircle2 className="w-14 h-14 text-green-500" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-black text-primary-navy mb-3">
            Pagamento Confirmado!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Seu pagamento via Pix foi aprovado com sucesso.
          </p>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm font-medium">Redirecionando...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-12 px-4 sm:px-6 animate-fade-in-up">
      <div className="glass-card-strong rounded-3xl overflow-hidden shadow-2xl border border-white/40 p-8 md:p-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-green/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary-navy/5 rounded-full blur-3xl -ml-28 -mb-28"></div>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#32BCAD]/10 rounded-2xl mb-5">
            <QrCode className="w-8 h-8 text-[#32BCAD]" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-primary-navy mb-2">
            Pague com Pix
          </h2>
          <p className="text-gray-500 font-medium">
            Escaneie o QR Code ou copie o código para pagar
          </p>
        </div>

        {/* Valor */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-baseline gap-2 bg-primary-navy/5 py-3 px-8 rounded-2xl border border-primary-navy/10">
            <span className="text-sm font-medium text-primary-navy/70">Valor:</span>
            <span className="text-2xl font-black text-primary-navy">{amount}</span>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
            <img
              src={`data:image/png;base64,${qrCodeBase64}`}
              alt="QR Code Pix para pagamento"
              className="w-64 h-64 md:w-72 md:h-72"
            />
          </div>
        </div>

        {/* Instruções com smartphone */}
        <div className="flex items-center justify-center gap-2 mb-6 relative z-10">
          <Smartphone className="w-4 h-4 text-gray-400" />
          <p className="text-sm text-gray-500 font-medium">
            Abra o app do seu banco e escaneie o QR Code acima
          </p>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">ou copie o código</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Pix Copia e Cola */}
        <div className="relative z-10 mb-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                Pix Copia e Cola
              </p>
              <p className="text-sm text-gray-600 font-mono truncate">
                {qrCode}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                copied
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-primary-navy text-white hover:bg-primary-navy/90 shadow-lg shadow-primary-navy/25 hover:shadow-xl hover:shadow-primary-navy/30'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar
                </>
              )}
            </button>
          </div>
        </div>

        {/* Timer + Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          {/* Timer */}
          <div className="flex items-center gap-2 bg-amber-50 py-2.5 px-5 rounded-xl border border-amber-200/50">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-bold text-amber-700">
              Expira em {formatTime(timeLeft)}
            </span>
          </div>

          {/* Aguardando pagamento */}
          <div className="flex items-center gap-2 text-gray-400">
            {checking ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            )}
            <span className="text-sm font-medium">Aguardando pagamento...</span>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-8 flex flex-col items-center relative z-10">
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1.5 grayscale opacity-70">
              <ShieldCheck className="w-5 h-5 text-primary-navy" />
              <span className="text-xs font-bold uppercase tracking-wider">Pagamento Seguro</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 grayscale opacity-70">
              <span className="text-[10px] font-black italic">Mercado Pago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixQrCodeDisplay;
