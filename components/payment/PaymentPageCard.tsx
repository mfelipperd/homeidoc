'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import PixQrCodeDisplay from './PixQrCodeDisplay';

const Payment = dynamic(
  () => import('@mercadopago/sdk-react').then((mod) => mod.Payment),
  { ssr: false },
);

interface PaymentPageCardProps {
  title: string;
  price: string;
  priceNumber: number;
  content: string;
  consultationType: string;
}

const PaymentPageCard: React.FC<PaymentPageCardProps> = ({
  title,
  price,
  priceNumber,
  content,
  consultationType,
}) => {
  const router = useRouter();
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [pixData, setPixData] = useState<{
    qrCodeBase64: string;
    qrCode: string;
    paymentId: number;
  } | null>(null);

  // Buscar preferenceId do backend
  useEffect(() => {
    const fetchPreference = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/mercadopago/preference', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ consultationType }),
        });

        if (!response.ok) {
          throw new Error('Falha ao carregar opções de pagamento');
        }

        const data = await response.json();
        setPreferenceId(data.preferenceId);
      } catch (err) {
        console.error('Erro ao buscar preferência:', err);
        setError('Não foi possível carregar as opções de pagamento. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchPreference();
  }, [consultationType]);

  const onSubmit = useCallback(
    async ({ selectedPaymentMethod, formData }: any) => {
      setProcessing(true);
      setError(null);

      try {
        const response = await fetch('/api/mercadopago/process-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Erro ao processar pagamento');
        }

        // Redirecionar baseado no status
        switch (result.status) {
          case 'approved':
            router.push('/pagamento-confirmado');
            break;
          case 'in_process':
          case 'pending':
            // Se for Pix, exibir QR Code inline
            if (result.pix?.qr_code_base64 && result.pix?.qr_code) {
              setPixData({
                qrCodeBase64: result.pix.qr_code_base64,
                qrCode: result.pix.qr_code,
                paymentId: result.id,
              });
              setProcessing(false);
            } else {
              // Outros métodos pendentes (boleto, etc.)
              router.push('/pagamento-em-processamento');
            }
            break;
          case 'rejected':
            setError('Pagamento recusado. Por favor, tente outro método de pagamento.');
            setProcessing(false);
            break;
          default:
            setError('Status de pagamento inesperado. Entre em contato conosco.');
            setProcessing(false);
        }
      } catch (err: any) {
        console.error('Erro no pagamento:', err);
        setError(err.message || 'Erro ao processar pagamento. Tente novamente.');
        setProcessing(false);
      }
    },
    [router],
  );

  const onError = useCallback((error: any) => {
    console.error('Erro no Payment Brick:', error);
  }, []);

  const onReady = useCallback(() => {
    // Brick está pronto
  }, []);

  const initialization = {
    amount: priceNumber,
    preferenceId: preferenceId || undefined,
  };

  const customization = {
    paymentMethods: {
      creditCard: 'all' as const,
      debitCard: 'all' as const,
      ticket: 'all' as const,
      bankTransfer: 'all' as const,
      mercadoPago: 'all' as const,
    },
    visual: {
      style: {
        customVariables: {
          formBackgroundColor: 'transparent',
          baseColor: '#213970',
        },
      },
    },
  };

  // Se temos dados do Pix, exibir o QR Code inline
  if (pixData) {
    return (
      <PixQrCodeDisplay
        qrCodeBase64={pixData.qrCodeBase64}
        qrCode={pixData.qrCode}
        paymentId={pixData.paymentId}
        amount={price}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-12 px-4 sm:px-6">
      <div className="glass-card-strong rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up border border-white/40 p-8 md:p-12 relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-navy/5 rounded-full blur-3xl -ml-24 -mb-24"></div>

        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-navy mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex items-baseline justify-center gap-2 text-primary-navy">
            <span className="text-2xl font-medium">R$</span>
            <span className="text-5xl md:text-6xl font-black tabular-nums tracking-tighter">
              {price.replace('R$', '').trim()}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10 relative z-10">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify font-medium">
            {content}
          </p>
        </div>

        {/* Processing Overlay */}
        {processing && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center rounded-3xl">
            <Loader2 className="w-12 h-12 text-primary-navy animate-spin mb-4" />
            <p className="text-primary-navy font-bold text-lg">Processando seu pagamento...</p>
            <p className="text-gray-500 text-sm mt-2">Por favor, não feche esta página.</p>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 relative z-10 animate-fade-in-up">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-red-700 font-medium text-sm">{error}</p>
              {!loading && !preferenceId && (
                <button
                  onClick={() => window.location.reload()}
                  className="text-red-600 underline text-sm mt-1 hover:text-red-800"
                >
                  Clique aqui para tentar novamente
                </button>
              )}
            </div>
          </div>
        )}

        {/* Payment Brick */}
        <div className="relative z-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-10 h-10 text-primary-navy animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Carregando opções de pagamento...</p>
            </div>
          ) : preferenceId ? (
            <div className="payment-brick-container">
              <Payment
                initialization={initialization}
                customization={customization}
                onSubmit={onSubmit}
                onReady={onReady}
                onError={onError}
              />
            </div>
          ) : null}
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

export default PaymentPageCard;
