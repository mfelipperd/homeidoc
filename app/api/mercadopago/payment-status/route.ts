import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get('id');

    if (!paymentId) {
      return NextResponse.json(
        { error: 'Payment ID é obrigatório' },
        { status: 400 },
      );
    }

    const payment = new Payment(client);
    const result = await payment.get({ id: paymentId });

    return NextResponse.json({
      status: result.status,
      status_detail: result.status_detail,
    });
  } catch (error: any) {
    console.error('Erro ao verificar status do pagamento:', error);

    return NextResponse.json(
      { error: 'Erro ao verificar status do pagamento' },
      { status: error?.status || 500 },
    );
  }
}
