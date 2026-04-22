import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

// Preços válidos por tipo de consulta (validação server-side)
const VALID_PRICES: Record<string, number> = {
  'consulta-online': 200,
  'consulta-presencial': 1200,
  'consulta-presencial-urgencia': 1200,
};

const CONSULTATION_TITLES: Record<string, string> = {
  'consulta-online': 'Consulta Online (Teleconsulta) - Home iDoc',
  'consulta-presencial': 'Consulta Presencial - Home iDoc',
  'consulta-presencial-urgencia': 'Consulta Presencial de Urgência - Home iDoc',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { consultationType } = body;

    // Validar tipo de consulta
    if (!consultationType || !VALID_PRICES[consultationType]) {
      return NextResponse.json(
        { error: 'Tipo de consulta inválido' },
        { status: 400 },
      );
    }

    const price = VALID_PRICES[consultationType];
    const title = CONSULTATION_TITLES[consultationType];

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: consultationType,
            title,
            quantity: 1,
            unit_price: price,
          },
        ],
        // Permitir pagamento como guest (sem login no MP)
        // Não definir purpose para permitir todos os métodos
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://homeidoc.com.br'}/pagamento-confirmado`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://homeidoc.com.br'}/pagamento-consulta`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://homeidoc.com.br'}/pagamento-em-processamento`,
        },
        auto_return: 'approved',
      },
    });

    return NextResponse.json({ preferenceId: result.id });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    return NextResponse.json(
      { error: 'Erro ao criar preferência de pagamento' },
      { status: 500 },
    );
  }
}
