'use client';

import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
            Termos e Condições <span className="text-primary-green">Gerais de Uso</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Última atualização: 28 de Março de 2024
          </p>
        </div>

        {/* Content Section */}
        <div className="glass-card bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed overflow-hidden">
          <div className="space-y-8 prose prose-green max-w-none">
            <section>
              <p className="text-lg font-medium">
                Estes termos e condições (daqui em diante referidos apenas como &ldquo;Termos&rdquo;) se aplicam à utilização de Nosso Site, &ldquo;Home iDoc&rdquo;, por você.
              </p>
              <p className="mt-4">
                Nosso Site é mantido pela pessoa jurídica <strong>Smartdoc Consultoria e Serviços em Oftalmologia Ltda (&ldquo;Smartdoc Oftalmologia&rdquo;)</strong>, devidamente registrada sob o CNPJ n. 33.919.090/0001-78, e-mail: smartdoc@homeidoc.com.br, com sede em:
              </p>
              <address className="not-italic mt-2 p-4 bg-gray-50 rounded-xl border-l-4 border-primary-green">
                Trav. 14 de Março, 1622 – Sala 1. CEP 66055-490. Belém – Pará
              </address>
              <p className="mt-4">
                Estes Termos se aplicam a todos aqueles que utilizarem Nosso Site. A observância das regras aqui previstas é obrigatória.
              </p>
              <p>
                Aqueles que não compreenderem ou que não aceitarem as normas previstas nestes Termos devem parar de utilizar nosso Site imediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">DEFINIÇÕES</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>&ldquo;Nós&rdquo;, &ldquo;Nosso&rdquo; ou &ldquo;Nossos&rdquo;:</strong> refere-se a Smartdoc Consultoria e Serviços em Oftalmologia Ltda.</li>
                <li><strong>&ldquo;Site&rdquo;:</strong> é o site que pode ser acessado a partir do endereço &ldquo;www.homeidoc.com.br&rdquo;.</li>
                <li><strong>&ldquo;Código de Defesa do Consumidor&rdquo; (CDC):</strong> é Lei Federal n. 8.078, de 11 de setembro de 1990.</li>
                <li><strong>&ldquo;Partes&rdquo;:</strong> refere-se tanto ao Usuário quanto a Nós.</li>
                <li><strong>&ldquo;Serviços&rdquo;:</strong> Teleconsulta (atendimento oftalmológico online) e Consulta presencial em domicílio.</li>
              </ul>
            </section>

            <section className="bg-primary-green/5 p-6 rounded-2xl border border-primary-green/10">
              <h2 className="text-xl font-bold text-primary-navy mb-4">IMPORTANTE SOBRE OS SERVIÇOS</h2>
              <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">
                <li>A teleconsulta não inclui exame físico e complementares com aparelhos;</li>
                <li>O profissional médico saberá julgar a necessidade do atendimento presencial;</li>
                <li>O médico possui total autonomia para decidir sobre receitas ou atestados;</li>
                <li>O receituário digital não permite a emissão de medicamentos entorpecentes ou psicotrópicos;</li>
                <li>A veracidade das informações fornecidas ao médico é de responsabilidade do paciente.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">RESTRIÇÕES DE IDADE</h2>
              <p>O Site só deve ser utilizado por pessoas maiores de 18 anos. Menores de 18 anos não emancipados somente poderão utilizar se estiverem devidamente assistidas ou representadas por seus pais ou representantes legais.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">MANUTENÇÃO E CADASTRO</h2>
              <p>Cada Usuário poderá manter apenas uma conta junto ao Site. Contas duplicadas serão desativadas. O Usuário é responsável por manter seus dados atualizados e garantir o sigilo de sua senha.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">NOSSAS RESPONSABILIDADES</h2>
              <p>Responsabilizamo-nos por defeitos causados por Nós no programa do Site, desde que haja comprovado dano. Não nos responsabilizamos por problemas decorrentes de sistemas ou equipamentos do Usuário, ou por danos decorrentes de caso fortuito ou força maior.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">DIREITO DE ARREPENDIMENTO E CANCELAMENTO</h2>
              <p className="mb-4">O cancelamento deverá ser feito antes da consulta em até <strong>24 horas</strong> de antecedência via WhatsApp.</p>
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                <p className="text-sm font-medium text-yellow-800">
                   Para solicitar a devolução de valores, envie um e-mail para: <a href="mailto:contato@homeidoc.com.br" className="underline">contato@homeidoc.com.br</a>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-yellow-900">
                  <li><strong>Não comparecimento:</strong> O valor será repassado ao médico que aguardou o período.</li>
                  <li><strong>Problemas técnicos:</strong> O atendimento será reagendado sem ônus.</li>
                  <li><strong>Estorno:</strong> No cartão de crédito, o estorno ocorre na fatura seguinte ou posterior.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy border-b border-gray-100 pb-2 mb-4">DIREITO APLICÁVEL E FORO</h2>
              <p>Para a solução das controvérsias, será aplicado integralmente o Direito brasileiro. O foro eleito é o da comarca da sede do editor do site.</p>
            </section>

            <footer className="pt-8 border-t border-gray-100 text-center">
              <p className="text-primary-navy font-bold text-xl mb-2">Seja bem-vindo(a)!</p>
              <p className="text-gray-500">A equipe Home iDoc lhe deseja uma excelente navegação.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
