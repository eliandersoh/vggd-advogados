/* ———————— VGGD Data ———————— */

export const VGD = {
  brand: {
    name: "VGGD Advogados",
    full: "Vieira, Gosch, Galindo & Dalazuana",
    city: "Curitiba — PR",
    whatsapp: "https://wa.me/5541998224539",
    phone: "(41) 99822-4539",
    email: "contato@vgdadvogados.com.br",
    instagram: "https://www.instagram.com/vgdadvogados/",
    facebook: "https://www.facebook.com/profile.php?id=61559431245586",
  },

  nav: [
    { label: "Escritório", href: "#escritorio" },
    { label: "Quem somos", href: "#equipe" },
    { label: "Áreas", href: "#areas" },
    { label: "Processo", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],

  headline:
    "Advocacia humanizada, para resultados que alcancem objetivos e mudem vidas.",

  stats: [
    { n: "56", label: "avaliações 5★ no Google" },
    { n: "5,0", label: "nota média dos clientes no Google" },
    { n: "4", label: "sócios com especialidades complementares" },
    { n: "6", label: "áreas de atuação consultiva e contenciosa" },
  ],

  areas: [
    {
      id: "familia",
      kicker: "01 / Família e Sucessões",
      title: "Família & Sucessões",
      short: "Questões de família pedem escuta, discrição e um plano jurídico bem definido.",
      long: "Conduzimos divórcios, inventários e planejamentos sucessórios com escuta, discrição e estratégia — para que decisões difíceis sejam tomadas com segurança.",
      items: [
        "Inventários judiciais e extrajudiciais",
        "Planejamento sucessório e matrimonial",
        "Pacto antenupcial",
        "Divórcio consensual ou litigioso",
        "Reconhecimento de paternidade biológica e socioafetiva",
        "Dissolução de união estável",
        "Guarda, pensão alimentícia e regime de convivência",
        "Adoção",
      ],
      owner: "Jamili Vieira de Oliveira",
    },
    {
      id: "previdenciario",
      kicker: "02 / Previdenciário",
      title: "Previdenciário",
      short: "A aposentadoria é um direito. A nossa função é fazer ela chegar.",
      long: "Atuamos em benefícios do INSS, RPPS e revisões, com cálculos próprios e acompanhamento de ponta a ponta — do pedido administrativo à ação judicial.",
      items: [
        "Benefícios do INSS",
        "Benefício para servidores públicos (RPPS)",
        "Pedidos administrativos e judiciais de aposentadorias e pensões por morte",
        "Contagem de tempo de contribuição e cálculos de benefícios",
        "Planejamentos previdenciários",
        "Revisões de aposentadorias e outros benefícios",
        "Benefícios por incapacidade (doença e acidente)",
        "BPC-LOAS",
      ],
      owner: "Luan Galindo",
    },
    {
      id: "trabalhista",
      kicker: "03 / Trabalhista",
      title: "Trabalhista",
      short: "Direitos do trabalho defendidos com técnica e proximidade.",
      long: "Atuamos na defesa de trabalhadores em demandas trabalhistas, com análise estratégica de cada caso e acompanhamento integral — da negociação à execução.",
      items: [
        "Reconhecimento de vínculo de trabalho com assinatura de Carteira de Trabalho",
        "Inadimplemento de verbas rescisórias trabalhistas",
        "Reconhecimento de jornadas de trabalho, horas extras, intervalos e trabalho em finais de semana e feriados",
        "Equiparação e isonomia salarial",
        "Acidentes e doenças do trabalho",
        "Reversão de justa causa e despedidas abusivas e ilegais",
        "Danos morais",
      ],
      owner: "Flávia Costa Gosch",
    },
    {
      id: "civel-medico",
      kicker: "04 / Cível e Médico",
      title: "Cível & Médico",
      short: "Proteção do seu patrimônio, contratos bem feitos e defesa técnica de médicos.",
      long: "Atuamos em direito à saúde, responsabilidade civil médica, relações de consumo, recuperação de créditos e contratos cíveis — sempre buscando a melhor solução para o caso.",
      items: [
        "Responsabilidade civil profissional de médicos e outros profissionais da saúde em processos administrativos e judiciais",
        "Direito à saúde: tratamentos médicos e indenizações contra hospitais e planos de saúde",
        "Falhas na prestação de serviços em relações de consumo",
        "Recuperação de créditos e proteção patrimonial",
        "Elaboração e análise de contratos cíveis",
        "Negociações judiciais e extrajudiciais",
      ],
      owner: "Guilherme Dalazuana",
    },
  ],

  team: [
    {
      slug: "jamili",
      name: "Jamili Vieira de Oliveira",
      role: "Sócia — Família e Sucessões",
      oab: "OAB/PR 103.807",
      bio: "Graduada pela Universidade Federal do Paraná (UFPR) e especialista em Direito de Família e Sucessões pela Tríade Estudos Jurídicos.",
      focus: "Família e Sucessões",
      portrait: "Retrato — Jamili",
      photo: "/assets/jamili.jpg",
      photoMesa: "/assets/jamili-mesa.jpg",
      photoMarrom: "/assets/jamili-marrom.jpg",
    },
    {
      slug: "luan",
      name: "Luan Galindo",
      role: "Sócio — Previdenciário",
      oab: "OAB/PR 103.972",
      bio: "Graduado pela Universidade Federal do Paraná (UFPR) e especialista em Direito Previdenciário e Direito Processual Previdenciário pela Escola da Magistratura Federal (ESMAFE/PR).",
      focus: "Direito Previdenciário",
      portrait: "Retrato — Luan",
      photo: "/assets/luan.jpg",
      photoMesa: "/assets/luan-mesa.jpg",
      photoMarrom: "/assets/luan-marrom.jpg",
    },
    {
      slug: "flavia",
      name: "Flávia Costa Gosch",
      role: "Sócia — Trabalhista",
      oab: "OAB/PR 103.651",
      bio: "Graduada pela Universidade Federal do Paraná (UFPR), especialista em Direito e Processo do Trabalho pela Escola da Associação dos Magistrados do Trabalho do Paraná (EMATRA/PR) e Direito Administrativo pela Pontifícia Universidade Católica do Paraná (PUC/PR).",
      focus: "Direito do Trabalho",
      portrait: "Retrato — Flávia",
      photo: "/assets/flavia.jpg",
      photoMesa: "/assets/flavia-mesa.jpg",
      photoMarrom: "/assets/flavia-marrom.jpg",
      zoom: 1.42,
      origin: "center 34%",
    },
    {
      slug: "guilherme",
      name: "Guilherme Dalazuana",
      role: "Sócio — Cível e Médico",
      oab: "OAB/PR 103.971",
      bio: "Graduado pela Universidade Federal do Paraná (UFPR) e especialista em Direito Médico pela Escola Brasileira de Direito (EBRADI) e Direito Processual Civil pela Escola da Magistratura Federal (ESMAFE/PR).",
      focus: "Direito Cível e Médico",
      portrait: "Retrato — Guilherme",
      photo: "/assets/guilherme.jpg",
      photoMesa: "/assets/guilherme-mesa.jpg",
      photoMarrom: "/assets/guilherme-marrom.jpg",
    },
  ],

  testimonials: [
    {
      author: "Terezinha Santos",
      date: "Jul 2026",
      text: "Uma experiência inesquecível. Dr. Galindo, um advogado muito competente, de uma paciência incrível. Com ele alcancei minha aposentadoria por tempo especial. Sou muito agradecida.",
      area: "Previdenciário",
    },
    {
      author: "Magda Allet Kuzmicz",
      date: "Mar 2026",
      text: "Escritório muito sério. Resolvemos muito rapidamente uma demanda que poderia levar anos. Muito obrigada!",
      area: "Geral",
    },
    {
      author: "José Vernille",
      date: "Out 2025",
      text: "Fui a uma consultoria com o advogado Guilherme, e devo dizer que foi ótima. Além de um ótimo profissional, é atencioso, presta muita atenção aos detalhes e se importa mesmo com o cliente. Seguimos com ele no processo e indico muito. Se pudesse, daria mais que 5 estrelas.",
      area: "Cível",
    },
    {
      author: "Amelia Francine",
      date: "Set 2025",
      text: "Dr. Luan atendeu o caso da minha mãe, e em dois meses ela conseguiu se aposentar. Sempre muito solícito e educado. Todas as dúvidas eram sanadas e nos mantinha sempre atualizadas.",
      area: "Previdenciário",
    },
    {
      author: "Taynara Manfio",
      date: "2025",
      text: "A Dra. Flávia é, sem dúvida, uma profissional que transmite confiança desde o primeiro contato. Extremamente atenciosa, clara nas orientações e muito coerente em suas análises, demonstra domínio técnico e sensibilidade com cada detalhe do caso. Recomendo com total segurança.",
      area: "Trabalhista",
    },
    {
      author: "Ana Torres",
      date: "2025",
      text: "Escritório com alta resposta, da ação até a solução. Iniciei com questões de INSS e depois precisei de um profissional para situações de herança — fui atendida com o mesmo respaldo. Sou de São Paulo e nada impediu o excelente atendimento. Parabéns pela excelente equipe!",
      area: "Previdenciário e Sucessões",
    },
  ],

  process: [
    {
      step: "01",
      title: "Análise preliminar",
      text: "O primeiro passo do atendimento consiste em entender sua situação, partindo do relato sobre o caso e dos documentos mais importantes.",
    },
    {
      step: "02",
      title: "Diagnóstico jurídico e consulta",
      text: "Após a análise preliminar, identificamos riscos e oportunidades. Neste momento indicamos as possibilidades de agendamento da consulta inicial.",
    },
    {
      step: "03",
      title: "Estratégia e proposta",
      text: "Estudamos o caso com profundidade, expondo riscos e oportunidades, com destaque para os caminhos possíveis de resolução da situação ou mitigação de danos.",
    },
    {
      step: "04",
      title: "Atuação e acompanhamento",
      text: "Após a assinatura do contrato de prestação de serviço, conduzimos o caso conforme alinhado com o cliente, com atualizações frequentes sobre o andamento.",
    },
  ],

  faq: [
    {
      q: "Vocês atendem on-line?",
      a: "Sim. Atendemos clientes em todo o Brasil e no exterior por videoconferência. Documentos são recebidos de forma digital e assinados eletronicamente quando possível. Nosso atendimento sempre ocorre com horário marcado.",
    },
    {
      q: "A primeira conversa tem custo?",
      a: "Depende de cada caso. Após a análise preliminar, indicamos as possibilidades de agendamento da consulta inicial, que pode ser onerosa ou gratuita conforme a situação. Honorários são sempre combinados de forma transparente.",
    },
    {
      q: "Qual a forma de pagamento dos honorários?",
      a: "Trabalhamos com honorários fixos, parcelados ou no êxito, dependendo da área e da complexidade. Tudo é definido por contrato, antes de começarmos.",
    },
    {
      q: "Quanto tempo dura um processo?",
      a: "Depende muito da área e do tribunal. Na consulta inicial damos uma estimativa realista baseada em casos semelhantes. Em benefícios do INSS, por exemplo, muitos casos se resolvem na via administrativa em semanas.",
    },
    {
      q: "Posso ser atendido fora de Curitiba?",
      a: "Sim. Apesar de estarmos sediados em Curitiba (PR), a atuação é nacional — tanto em matérias federais (INSS, servidores públicos) quanto em processos em outros estados.",
    },
    {
      q: "Como funciona o atendimento?",
      a: "O atendimento sempre ocorre com horário marcado, presencial em Curitiba ou on-line. A comunicação durante o caso é feita principalmente por WhatsApp e e-mail, com atualizações enviadas proativamente.",
    },
  ],
};
