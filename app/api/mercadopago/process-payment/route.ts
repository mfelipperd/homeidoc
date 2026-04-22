import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

// Valores válidos para validação server-side
const VALID_AMOUNTS = [200, 1200];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar que o amount é um dos valores aceitos
    const amount = Number(body.transaction_amount);
    if (!VALID_AMOUNTS.includes(amount)) {
      return NextResponse.json(
        { error: 'Valor de transação inválido' },
        { status: 400 },
      );
    }

    const payment = new Payment(client);

    const idempotencyKey = uuidv4();

    const isPix = body.payment_method_id === 'pix';

    // Construir body base com campos comuns
    const paymentBody: any = {
      transaction_amount: amount,
      description: body.description || 'Consulta Home iDoc',
      payment_method_id: body.payment_method_id,
      payer: {
        email: body.payer?.email,
        first_name: body.payer?.first_name,
        last_name: body.payer?.last_name,
        identification: body.payer?.identification
          ? {
              type: body.payer.identification.type,
              number: body.payer.identification.number,
            }
          : undefined,
      },
    };

    // Campos exclusivos de cartão (token, parcelas, issuer)
    if (!isPix) {
      paymentBody.token = body.token;
      paymentBody.installments = Number(body.installments) || 1;
      if (body.issuer_id) {
        paymentBody.issuer_id = Number(body.issuer_id);
      }
    }

    const result = await payment.create({
      body: paymentBody,
      requestOptions: {
        idempotencyKey,
      },
    });

    // Extrair dados do Pix (QR Code) se disponível
    const pixData = result.point_of_interaction?.transaction_data;

    return NextResponse.json({
      status: result.status,
      status_detail: result.status_detail,
      id: result.id,
      payment_method_id: result.payment_method_id,
      // Dados do Pix para exibição inline do QR Code
      ...(pixData && {
        pix: {
          qr_code: pixData.qr_code,
          qr_code_base64: pixData.qr_code_base64,
          ticket_url: pixData.ticket_url,
        },
      }),
    });
  } catch (error: any) {
    console.error('Erro ao processar pagamento:', error);

    const statusCode = error?.status || 500;
    const message = error?.message || 'Erro ao processar pagamento';

    return NextResponse.json(
      { error: message, detail: error?.cause },
      { status: statusCode },
    );
  }
}
