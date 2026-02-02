'use client';

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
            Política de <span className="text-primary-green">Privacidade</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Última atualização: 28 de Março de 2024
          </p>
        </div>

        {/* Content Section */}
        <div className="glass-card bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed overflow-hidden">
          <div className="space-y-8 prose prose-green max-w-none">
            <section>
              <p className="text-lg">
                Este site é mantido e operado por <strong>Smartdoc Consultoria e Serviços em Oftalmologia Ltda</strong>.
              </p>
              <p className="mt-4">
                Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD).
              </p>
            </section>

            <section className="bg-primary-green/5 p-6 rounded-2xl border border-primary-green/10">
              <h2 className="text-xl font-bold text-primary-navy mb-4">ESTA POLÍTICA CONTÉM INFORMAÇÕES SOBRE:</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Quem deve utilizar nosso site;</li>
                <li>Quais dados coletamos e o que fazemos com eles;</li>
                <li>Seus direitos em relação aos seus dados pessoais;</li>
                <li>Como entrar em contato conosco.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">1. DADOS QUE COLETAMOS</h2>
              <h3 className="text-xl font-semibold text-primary-navy mt-4 mb-2">Dados fornecidos expressamente:</h3>
              <p>Nome, data de nascimento, sexo, endereço, telefone, CPF, endereço de e-mail. A coleta ocorre via formulário de contato ou preenchimento de cadastro.</p>
              
              <h3 className="text-xl font-semibold text-primary-navy mt-4 mb-2">Dados obtidos de outras formas:</h3>
              <p>Endereço IP, dados de geolocalização, dados de transações (agendamentos e pagamentos).</p>
              
              <h3 className="text-xl font-semibold text-primary-navy mt-4 mb-2 text-red-600">Dados sensíveis:</h3>
              <p>Eventualmente, dados sobre origem racial/étnica, dados genéticos ou relativos à saúde para auxiliar no raciocínio clínico durante anamnese ou cadastro.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">2. COOKIES</h2>
              <p>Utilizamos cookies para identificar dispositivos e preferências. O usuário pode gerenciar o uso de cookies através da caixa de diálogo (popup) carregada ao acessar o site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">3. COMPARTILHAMENTO DE DADOS</h2>
              <p>Dados pessoais e clínicos são compartilhados com empresas contratadas que fornecem software clínico na nuvem e armazenamento de imagens coletadas durante os exames, necessários para a prestação do serviço.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">4. SEUS DIREITOS</h2>
              <p>De acordo com a LGPD, você possui direitos de acesso, correção, anonimização, portabilidade, eliminação (quando baseada em consentimento) e revogação do consentimento.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">5. SEGURANÇA</h2>
              <p>Empregamos medidas técnicas como ambiente seguro, limitação de acesso e certificado SSL para proteger seus dados contra perda ou acesso não autorizado.</p>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-primary-navy mb-4">CONTATO</h2>
              <p>Para dúvidas sobre seus dados pessoais, entre em contato:</p>
              <p className="mt-2"><strong>E-mail:</strong> <a href="mailto:contato@homeidoc.com.br" className="underline">contato@homeidoc.com.br</a></p>
              <p><strong>WhatsApp:</strong> (91) 99190-8887</p>
            </section>

            <footer className="pt-8 text-center">
              <p className="text-gray-500">Home iDoc - Cuidando da sua saúde e da sua privacidade.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
