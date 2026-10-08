import { CONTACT, COMPANY } from '../config/site';

const companyLine = (() => {
  if (COMPANY.legalName && COMPANY.cnpj) {
    return `O serviço é operado por ${COMPANY.legalName} (TROCAENVIO), inscrita no CNPJ sob o nº ${COMPANY.cnpj}.`;
  }
  if (COMPANY.cnpj) return `O serviço é operado pela TROCAENVIO, inscrita no CNPJ sob o nº ${COMPANY.cnpj}.`;
  return 'TROCAENVIO é o nome comercial do serviço. A razão social e o CNPJ da empresa responsável serão publicados nesta página assim que disponíveis.';
})();

export const LEGAL_UPDATED_AT = '8 de outubro de 2026';

export const privacyPolicy = {
  title: 'Política de Privacidade',
  intro:
    'Esta Política explica como a TROCAENVIO trata dados pessoais quando você visita este site, entra em contato conosco ou utiliza o aplicativo e os lockers TROCAENVIO, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).',
  sections: [
    {
      title: 'Quem somos',
      paragraphs: [
        `A TROCAENVIO oferece lockers em condomínios para envio e devolução de encomendas, com acesso pelo aplicativo. Estamos localizados em ${CONTACT.location}. Para qualquer assunto relacionado a privacidade, fale conosco pelo e-mail ${CONTACT.email}.`,
        companyLine,
      ],
    },
    {
      title: 'Dados que tratamos',
      paragraphs: ['Podemos tratar as seguintes categorias de dados pessoais:'],
      items: [
        'Dados de cadastro no aplicativo, como nome, e-mail, telefone e condomínio/unidade.',
        'Dados das encomendas, como remetente, destinatário, códigos de envio, devolução ou rastreamento e etiquetas.',
        'Registros de uso do locker, como data e hora de depósito e retirada e o código de abertura utilizado.',
        'Dados que você nos envia ao entrar em contato por WhatsApp, e-mail ou telefone.',
        'Dados de navegação neste site, como páginas visitadas, tipo de dispositivo e navegador, coletados por ferramentas de análise.',
      ],
    },
    {
      title: 'Para que usamos os dados',
      items: [
        'Criar e manter sua conta e gerar os códigos de abertura do locker.',
        'Coletar, triar e encaminhar suas encomendas à transportadora, agência ou ponto de coleta.',
        'Informar o status dos envios e devoluções.',
        'Atender solicitações, dúvidas e pedidos de suporte.',
        'Manter a segurança do serviço e prevenir fraudes ou uso indevido.',
        'Entender o uso do site para melhorá-lo.',
        'Cumprir obrigações legais e regulatórias.',
      ],
    },
    {
      title: 'Bases legais',
      paragraphs: [
        'Tratamos dados pessoais com base na execução do contrato ou de procedimentos preliminares a pedido do titular, no cumprimento de obrigação legal ou regulatória, no legítimo interesse da TROCAENVIO (por exemplo, segurança e melhoria do serviço) e, quando necessário, no seu consentimento, que pode ser revogado a qualquer momento.',
      ],
    },
    {
      title: 'Compartilhamento de dados',
      paragraphs: ['Compartilhamos dados apenas na medida necessária para prestar o serviço, com:'],
      items: [
        'Transportadoras, Correios, pontos de coleta e plataformas de venda envolvidas no seu envio ou devolução.',
        'Fornecedores de tecnologia que nos apoiam, como hospedagem, armazenamento, análise de uso e comunicação.',
        'Autoridades públicas, quando exigido por lei ou ordem judicial.',
      ],
      after: ['Não vendemos dados pessoais.'],
    },
    {
      title: 'Cookies e ferramentas de análise',
      paragraphs: [
        'Este site utiliza cookies e tecnologias semelhantes, inclusive de ferramentas de análise de terceiros, para entender como os visitantes navegam e melhorar a experiência. Você pode bloquear ou apagar cookies nas configurações do seu navegador; algumas funcionalidades podem ser afetadas.',
      ],
    },
    {
      title: 'Armazenamento e segurança',
      paragraphs: [
        'Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas, atender obrigações legais e exercer direitos em processos. Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda ou alteração. Alguns fornecedores podem armazenar dados fora do Brasil, sempre com as salvaguardas previstas na LGPD.',
      ],
    },
    {
      title: 'Seus direitos',
      paragraphs: ['Nos termos da LGPD, você pode solicitar:'],
      items: [
        'Confirmação da existência de tratamento e acesso aos seus dados.',
        'Correção de dados incompletos, inexatos ou desatualizados.',
        'Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.',
        'Portabilidade dos dados, nos termos da regulamentação.',
        'Informação sobre com quem compartilhamos seus dados.',
        'Revogação do consentimento e eliminação dos dados tratados com base nele.',
      ],
      after: [
        `Para exercer seus direitos, envie um e-mail para ${CONTACT.email}. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).`,
      ],
    },
    {
      title: 'Alterações desta Política',
      paragraphs: [
        'Podemos atualizar esta Política periodicamente. A data da última atualização fica indicada no início da página. Mudanças relevantes serão comunicadas pelos nossos canais.',
      ],
    },
    {
      title: 'Contato',
      paragraphs: [
        `E-mail: ${CONTACT.email}. Telefone e WhatsApp: ${CONTACT.phoneLabel}. Atendimento: ${CONTACT.hours.toLowerCase()}.`,
      ],
    },
  ],
};

export const termsOfUse = {
  title: 'Termos de Uso',
  intro:
    'Estes Termos regem o uso do site, do aplicativo e dos lockers TROCAENVIO. Ao utilizar nossos serviços, você declara que leu e concorda com estas condições.',
  sections: [
    {
      title: 'O serviço',
      paragraphs: [
        'A TROCAENVIO disponibiliza lockers instalados em condomínios para que moradores depositem encomendas destinadas a envio ou devolução. Nossa equipe realiza a coleta e a triagem e encaminha as encomendas à transportadora, agência ou ponto de coleta correspondente. O status é atualizado no site, no aplicativo ou na plataforma de origem.',
        companyLine,
      ],
    },
    {
      title: 'Cadastro e conta',
      items: [
        'Para usar o serviço é necessário criar uma conta no aplicativo com informações verdadeiras e atualizadas.',
        'Você é responsável por manter sua senha em sigilo e por todas as atividades realizadas na sua conta.',
        'Podemos suspender contas com indícios de fraude, uso indevido ou violação destes Termos.',
      ],
    },
    {
      title: 'Uso do locker',
      items: [
        'O locker é aberto com o código gerado no aplicativo para cada serviço. Não compartilhe seu código.',
        'O acesso ao locker para depósito está disponível 24 horas por dia, 7 dias por semana. Coleta, atendimento e entrega não ocorrem 24 horas e seguem os horários operacionais.',
        `O atendimento funciona de ${CONTACT.hours.toLowerCase()}.`,
        'Feche corretamente a porta do compartimento após o depósito e confira a confirmação no aplicativo.',
      ],
    },
    {
      title: 'Itens não permitidos',
      paragraphs: ['Não é permitido depositar:'],
      items: [
        'Itens ilegais, falsificados ou de origem ilícita.',
        'Produtos perigosos, inflamáveis, explosivos, corrosivos ou tóxicos.',
        'Armas, munições, drogas ou substâncias controladas.',
        'Animais, alimentos perecíveis ou materiais biológicos.',
        'Dinheiro, joias, títulos ou outros objetos de valor elevado não declarados.',
        'Qualquer item proibido pelas regras da transportadora ou da plataforma de origem.',
      ],
      after: ['Encomendas em desacordo podem ser recusadas ou devolvidas ao usuário.'],
    },
    {
      title: 'Embalagem e etiquetas',
      paragraphs: [
        'O usuário é responsável por embalar adequadamente a encomenda e por apresentar etiquetas, códigos e documentos exigidos pela transportadora ou pela plataforma de venda. A TROCAENVIO não se responsabiliza por danos decorrentes de embalagem inadequada ou por informações incorretas fornecidas pelo usuário.',
      ],
    },
    {
      title: 'Transportadoras e plataformas',
      paragraphs: [
        'Após o encaminhamento à transportadora, agência ou ponto de coleta, os prazos, as condições de transporte e as políticas de devolução seguem as regras desses terceiros e das plataformas de venda. Marcas de terceiros citadas no site pertencem aos seus titulares e indicam compatibilidade de envio, não parceria formal.',
      ],
    },
    {
      title: 'Preços e pagamentos',
      paragraphs: [
        'Quando houver cobrança, os valores e as condições de pagamento serão informados no aplicativo antes da confirmação do serviço.',
      ],
    },
    {
      title: 'Responsabilidades',
      paragraphs: [
        'A TROCAENVIO se compromete a guardar as encomendas depositadas com cuidado razoável até a coleta e a encaminhá-las corretamente. Não respondemos por atrasos, extravios ou danos ocorridos sob responsabilidade de transportadoras ou terceiros, nem por falhas causadas por caso fortuito ou força maior, sem prejuízo dos direitos garantidos pelo Código de Defesa do Consumidor.',
      ],
    },
    {
      title: 'Propriedade intelectual',
      paragraphs: [
        'A marca TROCAENVIO, o site, o aplicativo e seus conteúdos são protegidos por lei. É proibido copiá-los, modificá-los ou utilizá-los sem autorização.',
      ],
    },
    {
      title: 'Privacidade',
      paragraphs: [
        'O tratamento de dados pessoais segue a nossa Política de Privacidade, disponível neste site.',
      ],
    },
    {
      title: 'Alterações dos Termos',
      paragraphs: [
        'Podemos atualizar estes Termos a qualquer momento. A versão vigente estará sempre disponível nesta página, com a data da última atualização.',
      ],
    },
    {
      title: 'Lei aplicável e contato',
      paragraphs: [
        'Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do domicílio do consumidor.',
        `Dúvidas: ${CONTACT.email} ou ${CONTACT.phoneLabel}.`,
      ],
    },
  ],
};
