/* =================================================================
   Resumos de estudo — um para cada tema do plano de ensino.

   A chave é o título exato da tarefa, como ele aparece no plano do app.
   Cada resumo tem:
     pontos   — o conteúdo, em tópicos
     tabelas  — {t: título, c: [colunas], l: [[linhas]]}
     figura   — SVG desenhado para o tema, quando o desenho explica melhor
     numeros  — o que se decora
     pega     — o erro mais comum
     fonte    — a referência do plano de ensino de onde vem

   Os mesmos dados alimentam o app e a apostila em PDF.
   Conferir sempre contra a fonte antes da prova: portaria, número e prazo
   são exatamente o tipo de coisa que muda de edição para edição.
   ================================================================= */

const RESUMOS = {

/* ------------------------------------------------ Vigilância I — o SUS */

"Linha do tempo do SUS e as NOBs 91/92/93/96": {
  fonte: "Lei 8.080/1990, Lei 8.142/1990 e as Normas Operacionais Básicas · Guia de Vigilância em Saúde, MS",
  pontos: [
    "Constituição de 1988, artigos 196 a 200: saúde é direito de todos e dever do Estado. Nasce o SUS, com as diretrizes de descentralização, atendimento integral e participação da comunidade.",
    "Lei 8.080/1990, a lei orgânica: organização, direção e gestão do SUS, competências de cada esfera, e os princípios doutrinários (universalidade, integralidade, equidade) e organizativos (descentralização, regionalização, hierarquização, participação).",
    "Lei 8.142/1990: participação da comunidade — Conferências, a cada 4 anos, e Conselhos de Saúde, permanentes e deliberativos, com composição paritária (50% usuários) — e as transferências intergovernamentais fundo a fundo. Ela existe porque o veto presidencial derrubou esses pontos da 8.080.",
    "As NOBs são portarias ministeriais: não criam direito novo, definem como o dinheiro e a gestão descem para o município. É por isso que caem tanto em prova de gestão.",
    "NOB 91: lógica do INAMPS, pagamento por produção e convênio. O município é prestador de serviço, não gestor. Centralizadora.",
    "NOB 92: repete o desenho da anterior; avanço pequeno.",
    "NOB 93 — 'A ousadia de cumprir e fazer cumprir a lei': começa a municipalização real, com três condições de gestão, e cria as Comissões Intergestores Bipartite (estado + municípios) e Tripartite (União + estados + municípios).",
    "NOB 96: consolida o município como gestor do seu sistema. Cria o PAB — Piso da Atenção Básica —, fixo (per capita) e variável (incentivos para PSF, PACS, farmácia básica, vigilância), com repasse fundo a fundo, automático e regular."
  ],
  tabelas: [{
    t: "O que cada norma trouxe",
    c: ["Norma", "Marca registrada"],
    l: [
      ["NOB 91/92", "Pagamento por produção; município como prestador"],
      ["NOB 93", "Gestão incipiente, parcial e semiplena; CIB e CIT"],
      ["NOB 96", "PAB fixo e variável; repasse fundo a fundo; PPI"],
      ["NOAS 01 e 02", "Regionalização; PDR, PDI e GPAB-A"],
      ["Pacto 2006", "Pela Vida, em Defesa do SUS e de Gestão; 5 blocos"]
    ]
  }],
  pega: "Não troque as duas: comissões intergestores e gestão semiplena são da NOB 93; PAB e fundo a fundo são da NOB 96."
},

"NOAS 2001 e 2002": {
  fonte: "NOAS-SUS 01/2001 (Portaria GM/MS 95/2001) e NOAS-SUS 01/2002 (Portaria GM/MS 373/2002)",
  pontos: [
    "A palavra-chave é regionalização. As NOAS partem de um fato: município nenhum é autossuficiente em saúde, então o sistema precisa ser pensado por região.",
    "NOAS 2001 institui o PDR — Plano Diretor de Regionalização —, elaborado pelo estado, que desenha módulos assistenciais, microrregiões e as referências intermunicipais.",
    "Vem junto o PDI, Plano Diretor de Investimentos, para corrigir os vazios assistenciais, e a PPI, Programação Pactuada e Integrada, que distribui os tetos financeiros conforme o fluxo real de pacientes.",
    "Amplia a atenção básica com a GPAB-A, Gestão Plena da Atenção Básica Ampliada, e o PAB ampliado, definindo um elenco mínimo de ações que todo município precisa ofertar: controle da tuberculose, eliminação da hanseníase, controle da hipertensão e do diabetes, saúde da criança, saúde da mulher e saúde bucal.",
    "NOAS 2002 aperfeiçoa: explicita o papel do gestor estadual, reforça o comando único sobre os prestadores de média e alta complexidade e detalha a qualificação das microrregiões.",
    "Limite prático: as NOAS ainda funcionavam por habilitação e enquadramento, o que o Pacto de 2006 abandona."
  ],
  pega: "NOB organiza a descentralização para o município; NOAS organiza a região. Se a questão fala em PDR, módulo assistencial ou referência intermunicipal, é NOAS."
},

"Pacto pela Saúde — Portaria 399/2006": {
  fonte: "Portaria GM/MS 399/2006 — Diretrizes Operacionais do Pacto pela Saúde",
  pontos: [
    "Três dimensões: Pacto pela Vida (prioridades sanitárias com metas), Pacto em Defesa do SUS (repolitizar o SUS e defender o financiamento público) e Pacto de Gestão (quem faz o quê).",
    "Pacto pela Vida, seis prioridades na versão de 2006: saúde do idoso; controle do câncer de colo do útero e de mama; redução da mortalidade infantil e materna; fortalecimento da resposta às doenças emergentes e endemias, com ênfase em dengue, hanseníase, tuberculose, malária e influenza; promoção da saúde; fortalecimento da atenção básica.",
    "Pacto de Gestão: descentralização, regionalização com Colegiados de Gestão Regional, financiamento, planejamento, PPI, regulação, participação social, gestão do trabalho e educação em saúde.",
    "Muda a lógica do financiamento: sai o repasse por 'caixinhas' e entram cinco blocos, com recursos que circulam dentro de cada bloco.",
    "Substitui a habilitação das NOB e NOAS pelo Termo de Compromisso de Gestão, assinado por cada gestor, com metas e indicadores — a adesão passa a ser por compromisso, não por enquadramento.",
    "Para a vigilância, o efeito prático foi duplo: bloco de financiamento próprio e integração explícita com a atenção primária."
  ],
  tabelas: [{
    t: "Os blocos de financiamento",
    c: ["Bloco", "O que custeia"],
    l: [
      ["Atenção básica", "PAB fixo e variável"],
      ["Média e alta complexidade", "Ambulatorial e hospitalar, FAEC"],
      ["Vigilância em saúde", "Epidemiológica, ambiental e sanitária"],
      ["Assistência farmacêutica", "Básico, estratégico e especializado"],
      ["Gestão do SUS", "Qualificação da gestão e regulação"],
      ["Investimentos", "Acrescentado depois, para obra e equipamento"]
    ]
  }],
  pega: "O Pacto acaba com a habilitação por condição de gestão. Quem responde 'gestão plena' numa questão sobre 2006 está uma década atrasado."
},

"Portarias 3.252/2009, 1.378/2013 e 204/2016 · Resolução 588/2017": {
  fonte: "Portarias GM/MS 3.252/2009, 1.378/2013 e 204/2016; Resolução CIT 588/2017; Portaria de Consolidação 4/2017",
  pontos: [
    "Portaria 3.252/2009: aproxima vigilância em saúde e atenção primária, define diretrizes e financiamento das ações de vigilância e afirma a responsabilidade das três esferas.",
    "Portaria 1.378/2013: substitui a 3.252. Regulamenta responsabilidades e diretrizes para execução e financiamento das ações de vigilância pela União, estados, DF e municípios, e institui o Piso Fixo de Vigilância em Saúde.",
    "Portaria 204/2016: define a Lista Nacional de Notificação Compulsória e, sobretudo, os prazos. É a portaria dos prazos.",
    "Resolução CIT 588/2017: institui a Política Nacional de Vigilância em Saúde (PNVS). Trata a vigilância como função essencial de saúde pública, integrada à Rede de Atenção à Saúde e presente em todos os pontos de atenção, e não como setor isolado.",
    "Portaria de Consolidação 4/2017: reúne num texto só as normas sobre os sistemas e subsistemas do SUS, inclusive vigilância — por isso muita portaria antiga hoje é citada por dentro dela."
  ],
  tabelas: [{
    t: "Prazos da Portaria 204/2016",
    c: ["Tipo", "Prazo", "Exemplos"],
    l: [
      ["Imediata", "24 h da suspeita, ao nível municipal, que repassa a estado e União",
       "Sarampo, cólera, febre amarela, raiva, botulismo, óbito materno e infantil, violência sexual, eventos de saúde pública"],
      ["Semanal", "Registro semanal no Sinan",
       "Tuberculose, hanseníase, dengue clássica, sífilis adquirida, hepatites virais"]
    ]
  }],
  pega: "Prazo é o que mais cai. Notificação imediata é em até 24 horas a partir da SUSPEITA — não do resultado do exame."
},

/* --------------------------------- Vigilância II — sistema e operação */

"Sistema Nacional de Vigilância Epidemiológica: origem e conceitos": {
  fonte: "Lei 6.259/1975 · Lei 8.080/1990, art. 6º · Guia de Vigilância em Saúde, MS, 5ª ed.",
  pontos: [
    "A Lei 6.259/1975 criou o Sistema Nacional de Vigilância Epidemiológica e o Programa Nacional de Imunizações, e tornou a notificação uma obrigação legal.",
    "Definição legal (Lei 8.080/90, art. 6º, §2º): conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle.",
    "Vigilância em saúde é o guarda-chuva e reúne quatro campos: epidemiológica (doenças e agravos), sanitária (produtos, serviços e ambientes), ambiental (água, ar, solo, vetores) e saúde do trabalhador.",
    "Fontes de dados: notificação compulsória, laboratórios, atestados de óbito, prontuários, busca ativa, inquéritos e os sistemas de informação.",
    "O ciclo é sempre o mesmo: coleta → processamento → análise → recomendação de medida → execução → avaliação → divulgação. Dado que não vira medida não é vigilância.",
    "Para avaliar um sistema de vigilância existem atributos consagrados, e a prova costuma pedir a definição de um deles."
  ],
  tabelas: [
    {
      t: "Os sistemas de informação que alimentam a vigilância",
      c: ["Sigla", "O que registra"],
      l: [
        ["Sinan", "Agravos de notificação compulsória"],
        ["SIM", "Mortalidade, a partir da declaração de óbito"],
        ["Sinasc", "Nascidos vivos"],
        ["SI-PNI", "Imunizações e cobertura vacinal"],
        ["Sisab / e-SUS APS", "Produção e acompanhamento da atenção básica"],
        ["SIH e SIA", "Internações e produção ambulatorial"]
      ]
    },
    {
      t: "Atributos de um sistema de vigilância",
      c: ["Atributo", "Pergunta que responde"],
      l: [
        ["Simplicidade", "É fácil de operar?"],
        ["Flexibilidade", "Adapta-se a um agravo novo?"],
        ["Aceitabilidade", "Os profissionais aderem?"],
        ["Sensibilidade", "Capta a maior parte dos casos?"],
        ["Valor preditivo positivo", "O que ele capta é caso mesmo?"],
        ["Representatividade", "Descreve bem a população?"],
        ["Oportunidade", "Chega a tempo de agir?"],
        ["Estabilidade", "Funciona sem interrupção?"]
      ]
    }
  ],
  pega: "A finalidade legal é recomendar e adotar medidas. Vigilância que só produz relatório falhou, ainda que o relatório esteja correto."
},

"Notificação compulsória e preenchimento da ficha": {
  fonte: "Portaria 204/2016 · Lei 6.259/1975 · Guia de Vigilância em Saúde, MS · Manual do Sinan",
  pontos: [
    "Notifica-se a SUSPEITA. Esperar a confirmação é o erro clássico: a vigilância precisa do caso enquanto ainda dá tempo de agir sobre os contatos e a fonte.",
    "Quem notifica: médicos, enfermeiros, odontólogos, biomédicos, farmacêuticos e demais profissionais de saúde, além dos responsáveis por estabelecimentos públicos e privados. Para o cidadão, comunicar é dever previsto na Lei 6.259/75.",
    "A notificação é compulsória e independe de autorização do paciente; as informações são sigilosas e a identificação só circula quando necessária ao controle.",
    "Notificação negativa: informar semanalmente que não houve caso. É o que separa 'não aconteceu' de 'ninguém notificou'.",
    "A ficha do Sinan tem três partes — dados gerais, notificação individual e dados de residência —, seguidas da ficha de investigação específica do agravo.",
    "Campos essenciais em branco inutilizam a análise. A data de início dos sintomas é a que estrutura a curva epidêmica; a data de notificação serve para medir oportunidade, não para análise temporal.",
    "Duplicidade é problema real: mesmo caso notificado por dois serviços entra duas vezes e infla o indicador. O Sinan tem rotina de limpeza para isso."
  ],
  tabelas: [{
    t: "Como a ficha se organiza",
    c: ["Bloco", "Campos que mais pesam"],
    l: [
      ["Dados gerais", "Agravo e CID, data da notificação, UF, município e unidade notificante"],
      ["Notificação individual", "Nome, data de nascimento, idade, sexo, gestante, raça/cor, escolaridade, cartão SUS, nome da mãe"],
      ["Residência", "Endereço completo, zona urbana ou rural, município de residência"],
      ["Investigação", "Data dos primeiros sintomas, antecedente vacinal, exames, evolução e classificação final"]
    ]
  }],
  pega: "Notificação não é diagnóstico nem denúncia: é gatilho de investigação. E a data que vale na análise é a do início dos sintomas."
},

"Estudos, inquéritos e levantamentos epidemiológicos": {
  fonte: "Rouquayrol, Epidemiologia e Saúde · Fletcher, Epidemiologia Clínica · Guia de Vigilância em Saúde, MS",
  pontos: [
    "Inquérito epidemiológico: coleta dado primário, em amostra da população, num recorte de tempo. É transversal e entrega prevalência. Exemplos: inquérito de cobertura vacinal, de soroprevalência, a PNS.",
    "Levantamento epidemiológico: trabalha com o que já existe — prontuários, registros, sistemas de informação. Não exige amostra probabilística e serve para indicar tendência e disparar ação rápida, como o LIRAa na dengue.",
    "Estudos descritivos respondem 'quem, onde e quando'; analíticos respondem 'por quê'.",
    "Ecológico: a unidade de análise é o grupo, não a pessoa — barato e rápido, sujeito à falácia ecológica.",
    "Caso-controle: parte da doença e olha para trás. Mede odds ratio. Bom para doença rara e de longa latência; sofre viés de memória e de seleção.",
    "Coorte: parte da exposição e acompanha no tempo. Mede incidência, risco relativo e risco atribuível. Bom para exposição rara; caro e demorado, com perda de seguimento.",
    "Ensaio clínico randomizado: o único em que o investigador atribui a exposição. Melhor controle de confundimento, pior generalização.",
    "Prevalência é foto; incidência é filme. Prevalência ≈ incidência × duração média da doença: tratamento que prolonga a vida sem curar aumenta a prevalência."
  ],
  tabelas: [{
    t: "Qual desenho para qual pergunta",
    c: ["Desenho", "Mede", "Ponto forte", "Ponto fraco"],
    l: [
      ["Transversal / inquérito", "Prevalência", "Rápido e barato", "Não separa causa de efeito"],
      ["Ecológico", "Correlação de grupos", "Usa dado existente", "Falácia ecológica"],
      ["Caso-controle", "Odds ratio", "Doença rara", "Viés de memória"],
      ["Coorte", "Incidência e risco relativo", "Sequência temporal", "Caro, longo, perdas"],
      ["Ensaio clínico", "Eficácia", "Controla confundimento", "Custo e questão ética"]
    ]
  }],
  pega: "Inquérito gera dado novo; levantamento usa dado existente. E falácia ecológica é atribuir ao indivíduo o que só foi observado no grupo."
},

"Sistemas sentinela e investigação de surtos e epidemias": {
  fonte: "Guia de Vigilância em Saúde, MS, 5ª ed. — investigação de surtos",
  pontos: [
    "Vigilância sentinela: um conjunto escolhido de unidades monitora um evento com qualidade e rapidez, sem pretender cobertura universal. Ganha oportunidade e custo, perde representatividade. É assim que se acompanha síndrome gripal e rotavírus.",
    "Surto: elevação inesperada de casos restrita a um espaço delimitado — uma creche, um casamento, um bairro. Dois casos ligados à mesma fonte bastam, e um único caso é surto quando a doença está erradicada ou eliminada, ou é inusitada.",
    "Epidemia: elevação acima do esperado em área ampla. Endemia: ocorrência habitual e esperada. Pandemia: epidemia em vários continentes.",
    "O 'esperado' vem do diagrama de controle, construído com a mediana ou a média dos anos anteriores e seus limites.",
    "Definição de caso é ferramenta, não dogma: começa sensível, para não perder caso, e vai ficando específica conforme a investigação avança.",
    "As medidas de controle não esperam o fim da investigação — entram assim que houver hipótese plausível. Essa é a diferença entre investigação epidemiológica e pesquisa.",
    "Curva epidêmica: fonte comum pontual dá pico único, com dispersão de cerca de um período de incubação; fonte propagada, pessoa a pessoa, dá ondas sucessivas espaçadas pelo período de incubação; fonte comum persistente dá platô."
  ],
  tabelas: [{
    t: "Roteiro da investigação",
    c: ["#", "Passo"],
    l: [
      ["1", "Confirmar o diagnóstico"],
      ["2", "Confirmar a existência do surto (comparar com o esperado)"],
      ["3", "Definir caso: suspeito, provável, confirmado"],
      ["4", "Busca ativa de casos"],
      ["5", "Descrever por tempo, lugar e pessoa"],
      ["6", "Formular hipóteses"],
      ["7", "Testar hipóteses com estudo analítico"],
      ["8", "Medidas de controle — desde o início"],
      ["9", "Avaliar as medidas e encerrar"],
      ["10", "Relatório e divulgação"]
    ]
  }],
  figura: `<svg viewBox="0 0 320 130" role="img" aria-label="Curva epidêmica de fonte comum e de fonte propagada">
    <g fill="none" stroke="#3A352E" stroke-width="1">
      <path d="M12 108h130M12 108V18"/><path d="M180 108h128M180 108V18"/>
    </g>
    <g fill="#2E8B7A">
      <rect x="28" y="92" width="9" height="16"/><rect x="39" y="72" width="9" height="36"/>
      <rect x="50" y="46" width="9" height="62"/><rect x="61" y="58" width="9" height="50"/>
      <rect x="72" y="80" width="9" height="28"/><rect x="83" y="98" width="9" height="10"/>
    </g>
    <g fill="#8A6512">
      <rect x="196" y="96" width="8" height="12"/><rect x="206" y="88" width="8" height="20"/>
      <rect x="228" y="78" width="8" height="30"/><rect x="238" y="68" width="8" height="40"/>
      <rect x="262" y="60" width="8" height="48"/><rect x="272" y="52" width="8" height="56"/>
    </g>
    <text x="12" y="124" font-size="9" fill="#5E584F">fonte comum pontual</text>
    <text x="180" y="124" font-size="9" fill="#5E584F">fonte propagada</text>
  </svg>`,
  pega: "A curva epidêmica não só descreve: o formato sugere o tipo de fonte, e a distância entre as ondas sugere o período de incubação."
},

/* ------------------------------------- Epidemiologia — testes e provas */

"Tabela 2×2 · sensibilidade e especificidade": {
  fonte: "Fletcher, Epidemiologia Clínica · Duncan, Medicina Ambulatorial",
  pontos: [
    "Monte sempre a tabela do mesmo jeito: a doença nas colunas (padrão-ouro) e o teste nas linhas. Errar o eixo é errar tudo o que vem depois.",
    "Sensibilidade = VP / (VP + FN): dos doentes, quantos o teste pega. Lê-se na coluna dos doentes.",
    "Especificidade = VN / (VN + FP): dos sadios, quantos o teste inocenta. Lê-se na coluna dos sadios.",
    "Teste sensível serve para AFASTAR — negativo em teste muito sensível torna a doença improvável (SnNout). Por isso rastreamento pede sensibilidade.",
    "Teste específico serve para CONFIRMAR — positivo em teste muito específico torna a doença provável (SpPin).",
    "As duas são propriedades do teste e não mudam com a prevalência. Mudam, sim, com o espectro da doença: numa população com doença avançada, a sensibilidade aparente sobe.",
    "E se opõem pelo ponto de corte: baixar o corte aumenta a sensibilidade e derruba a especificidade."
  ],
  tabelas: [{
    t: "A tabela e o que sai dela",
    c: ["", "Doente", "Sadio"],
    l: [
      ["Teste +", "VP", "FP"],
      ["Teste −", "FN", "VN"],
      ["Fórmula", "S = VP/(VP+FN)", "E = VN/(VN+FP)"],
      ["Na horizontal", "VPP = VP/(VP+FP)", "VPN = VN/(VN+FN)"]
    ]
  }],
  figura: `<svg viewBox="0 0 300 120" role="img" aria-label="Leitura vertical e horizontal da tabela 2x2">
    <g stroke="#D9D2C6" fill="none" stroke-width="1">
      <rect x="70" y="24" width="150" height="66"/><path d="M145 24v66M70 57h150"/>
    </g>
    <text x="95" y="18" font-size="9" fill="#5E584F">doente</text>
    <text x="172" y="18" font-size="9" fill="#5E584F">sadio</text>
    <text x="36" y="46" font-size="9" fill="#5E584F">teste +</text>
    <text x="36" y="79" font-size="9" fill="#5E584F">teste −</text>
    <text x="100" y="47" font-size="13" fill="#14615A">VP</text>
    <text x="176" y="47" font-size="13" fill="#A83C2A">FP</text>
    <text x="100" y="80" font-size="13" fill="#A83C2A">FN</text>
    <text x="176" y="80" font-size="13" fill="#14615A">VN</text>
    <g stroke="#14615A" stroke-width="1.4" fill="none">
      <path d="M107 96v12" marker-end="url(#s1)"/>
    </g>
    <text x="72" y="116" font-size="8.5" fill="#14615A">sensibilidade lê na vertical</text>
    <text x="228" y="47" font-size="8.5" fill="#8A6512">VPP</text>
    <text x="228" y="80" font-size="8.5" fill="#8A6512">VPN</text>
  </svg>`,
  pega: "Sensibilidade e especificidade leem a tabela na vertical, a partir da doença; valores preditivos leem na horizontal, a partir do resultado. Trocar a direção é o erro mais comum da prova."
},

"Valor preditivo positivo e negativo · efeito da prevalência": {
  fonte: "Fletcher, Epidemiologia Clínica · Duncan, Medicina Ambulatorial",
  pontos: [
    "VPP = VP / (VP + FP): entre os que testaram positivo, quantos têm mesmo a doença. É a pergunta que o paciente faz.",
    "VPN = VN / (VN + FN): entre os que testaram negativo, quantos estão mesmo livres.",
    "Os dois dependem da prevalência, porque leem a tabela a partir do resultado. Mais prevalência, maior VPP e menor VPN.",
    "Consequência prática: rastrear doença rara em população de baixo risco produz muito falso-positivo mesmo com teste excelente — e cada falso-positivo custa exame, biópsia e medo.",
    "A prevalência é a probabilidade pré-teste; o teste apenas atualiza essa probabilidade. Por isso a mesma sorologia significa coisas diferentes no banco de sangue e no ambulatório de IST.",
    "Acurácia = (VP + VN) / total. Resume mal em doença rara: um teste que diz 'negativo' para todo mundo acerta 99% numa prevalência de 1%."
  ],
  tabelas: [{
    t: "Mesmo teste (S 95%, E 95%), populações diferentes",
    c: ["Prevalência", "Em 1.000 pessoas", "VPP aproximado"],
    l: [
      ["1%", "10 doentes, 990 sadios", "cerca de 16%"],
      ["10%", "100 doentes, 900 sadios", "cerca de 68%"],
      ["50%", "500 e 500", "cerca de 95%"]
    ]
  }],
  numeros: ["O teste não mudou em nenhuma das três linhas. Mudou quem foi testado."],
  pega: "Se a questão troca o cenário — população geral, ambulatório, pronto-socorro — e pergunta o que muda, a resposta passa por valor preditivo, nunca por sensibilidade."
},

"Razão de verossimilhança positiva e negativa": {
  fonte: "Fletcher, Epidemiologia Clínica · Duncan, Medicina Ambulatorial",
  pontos: [
    "RV+ = sensibilidade / (1 − especificidade): quantas vezes é mais provável um resultado positivo vir de um doente do que de um sadio.",
    "RV− = (1 − sensibilidade) / especificidade: o mesmo raciocínio para o resultado negativo.",
    "Independem da prevalência, como S e E, mas dizem diretamente o quanto aquele resultado desloca a probabilidade — é a ponte entre a propriedade do teste e o paciente concreto.",
    "Uso formal: odds pré-teste × RV = odds pós-teste. Na prática, nomograma de Fagan.",
    "Vantagem sobre S e E: servem para testes com mais de duas categorias de resultado — cada faixa tem a sua RV.",
    "Regra de bolso para a variação absoluta de probabilidade: RV 2 sobe cerca de 15 pontos; RV 5, cerca de 30; RV 10, cerca de 45. Para baixo, RV 0,5 desce 15; 0,2 desce 30; 0,1 desce 45."
  ],
  tabelas: [{
    t: "Como ler a razão de verossimilhança",
    c: ["Valor", "Efeito na probabilidade"],
    l: [
      ["RV+ > 10", "Aumenta muito — quase confirma"],
      ["RV+ 5 a 10", "Aumento moderado"],
      ["RV+ 2 a 5", "Aumento pequeno"],
      ["RV 0,5 a 2", "Praticamente não muda nada"],
      ["RV− 0,1 a 0,2", "Reduz muito — quase afasta"],
      ["RV− < 0,1", "Afasta"]
    ]
  }],
  pega: "RV igual a 1 significa teste inútil para aquela decisão: o resultado não altera em nada a probabilidade que você já tinha."
},

"Curva ROC, ponto de corte e vieses + 20 questões": {
  fonte: "Fletcher, Epidemiologia Clínica · Rouquayrol, Epidemiologia e Saúde",
  pontos: [
    "Curva ROC: sensibilidade no eixo y contra 1 − especificidade no eixo x, um ponto para cada corte possível do teste. Só faz sentido para teste de resultado contínuo.",
    "Área sob a curva (AUC) mede a acurácia global: 0,5 é o acaso — a diagonal —, 0,7 a 0,8 é razoável, 0,8 a 0,9 boa, acima de 0,9 excelente. Serve para comparar dois testes no mesmo gráfico.",
    "O canto superior esquerdo é o teste perfeito. Quanto mais a curva se aproxima dele, melhor.",
    "O melhor corte não é matemático, é clínico: rastreio quer sensibilidade (corte mais baixo); confirmação quer especificidade (corte mais alto). Quem decide é o custo do falso-negativo contra o do falso-positivo.",
    "Viés é erro sistemático; não some com amostra maior. Confundimento é um terceiro fator ligado à exposição e ao desfecho, e se controla com randomização, restrição, pareamento ou análise multivariada.",
    "Concordância entre observadores se mede por kappa, que desconta o acerto pelo acaso: acima de 0,8 é excelente, 0,6 a 0,8 boa."
  ],
  tabelas: [{
    t: "Vieses que caem em prova",
    c: ["Viés", "O que acontece"],
    l: [
      ["Seleção", "Quem entrou no estudo não representa a população"],
      ["Memória", "O doente lembra melhor da exposição que o sadio"],
      ["Aferição", "Mede-se diferente entre os grupos"],
      ["Verificação (work-up)", "Só quem testou positivo vai ao padrão-ouro: infla a sensibilidade"],
      ["Espectro", "Testar só em caso grave faz o teste parecer melhor do que é na APS"],
      ["Observador", "Quem avalia sabe a que grupo o paciente pertence"]
    ]
  }],
  figura: `<svg viewBox="0 0 220 150" role="img" aria-label="Curva ROC com a diagonal do acaso">
    <g stroke="#3A352E" fill="none" stroke-width="1"><path d="M28 122h168M28 122V10"/></g>
    <path d="M28 122L196 10" stroke="#B9B1A2" stroke-width="1" stroke-dasharray="4 3" fill="none"/>
    <path d="M28 122C60 44 96 24 196 10" stroke="#14615A" stroke-width="2" fill="none"/>
    <circle cx="78" cy="48" r="3.4" fill="#8A6512"/>
    <text x="84" y="46" font-size="8.5" fill="#8A6512">corte escolhido</text>
    <text x="30" y="136" font-size="8.5" fill="#5E584F">1 − especificidade</text>
    <text x="4" y="20" font-size="8.5" fill="#5E584F" transform="rotate(-90 10 60)">sensibilidade</text>
    <text x="120" y="96" font-size="8.5" fill="#B9B1A2">acaso (AUC 0,5)</text>
  </svg>`,
  pega: "Não existe 'melhor ponto de corte' no absoluto. Se o enunciado não disser para que serve o teste, a resposta está incompleta."
},

/* ------------------------------------------------------------ Criança */

"Primeira consulta do RN: anamnese e exame físico": {
  fonte: "Caderno de Atenção Básica 33 — Saúde da Criança: crescimento e desenvolvimento, MS",
  pontos: [
    "A primeira consulta acontece na primeira semana de vida — a 'Primeira Semana Saúde Integral'. Recém-nascido de risco vai antes, idealmente até o 3º dia.",
    "Anamnese: pré-natal (consultas, sorologias, intercorrências), tipo de parto, idade gestacional, peso ao nascer, Apgar, intercorrências na maternidade, triagens feitas, aleitamento, eliminações e a rede de apoio da família.",
    "Exame físico na ordem do menos para o mais incômodo: estado geral e postura, pele (icterícia por zonas de Kramer), crânio e fontanelas, olhos, boca (freio lingual, fenda), tórax e ausculta, abdome e coto umbilical, genitália, quadris com Ortolani e Barlow, coluna e extremidades, reflexos primitivos.",
    "Reflexos que devem estar presentes: sucção, preensão palmar e plantar, Moro, marcha reflexa, tônico-cervical. A ausência ou a assimetria é que preocupa.",
    "Avaliar a amamentação na consulta, olhando a mamada: pega, posição, frequência e sinais de boa transferência de leite.",
    "Perda de até 10% do peso de nascimento na primeira semana é fisiológica, com recuperação até o 10º ao 15º dia.",
    "Agendar o seguimento: consultas na 1ª semana, com 1, 2, 4, 6, 9, 12, 18 e 24 meses, e depois anuais."
  ],
  tabelas: [
    {
      t: "As triagens neonatais",
      c: ["Teste", "Quando", "Rastreia"],
      l: [
        ["Pezinho", "3º ao 5º dia", "Fenilcetonúria, hipotireoidismo congênito, fibrose cística, anemia falciforme, hiperplasia adrenal, deficiência de biotinidase e toxoplasmose congênita"],
        ["Olhinho", "Ainda na maternidade e nas consultas", "Reflexo vermelho: catarata, retinoblastoma, glaucoma"],
        ["Orelhinha", "Até o 1º mês", "Perda auditiva"],
        ["Coraçãozinho", "24 a 48 h de vida", "Oximetria em membro superior direito e inferior: cardiopatia crítica"],
        ["Linguinha", "Na maternidade", "Anquiloglossia"]
      ]
    },
    {
      t: "Sinais de perigo — referência imediata",
      c: ["Sinal"],
      l: [["Recusa alimentar ou vômitos persistentes"], ["Convulsão ou letargia"],
          ["Tiragem subcostal, gemência, apneia"], ["Febre ou hipotermia"],
          ["Icterícia nas primeiras 24 h, ou até mãos e pés"], ["Cianose e palidez importante"],
          ["Secreção purulenta no umbigo ou nos olhos"]]
    }
  ],
  pega: "Icterícia nas primeiras 24 horas nunca é fisiológica. E o teste do pezinho tem janela: antes do 3º dia dá falso resultado para fenilcetonúria, depois do 5º atrasa o diagnóstico."
},

"Cuidados com o recém-nascido e prevenção de acidentes": {
  fonte: "Caderno de Atenção Básica 33, MS · Caderno 23 — Aleitamento e alimentação complementar",
  pontos: [
    "Coto umbilical: álcool 70% várias vezes ao dia, seco e fora da fralda. Cai entre o 7º e o 14º dia. Hiperemia periumbilical, secreção purulenta ou odor fétido é onfalite — referência imediata.",
    "Banho é higiene e conforto, sem hora fixa. O que importa é a temperatura do ambiente, não a do relógio.",
    "Sono seguro, contra a morte súbita do lactente: decúbito dorsal, no berço, no quarto dos pais, colchão firme, sem travesseiro, almofada, protetor ou cobertor solto, e ambiente livre de fumo.",
    "Decúbito ventral só acordado e supervisionado — é o 'tummy time', que ajuda no controle cervical.",
    "Cólica do lactente: pico por volta das 6 semanas, melhora aos 3 a 4 meses. Colo, sucção e paciência; não se trata com chá nem com medicação de rotina.",
    "No carro: bebê-conforto voltado para trás, no banco traseiro, até o limite de peso do fabricante; criança no banco de trás até os 10 anos.",
    "Nunca esquentar leite no micro-ondas — aquece desigual e queima a boca. Cabo de panela para dentro, produtos de limpeza fora do alcance e na embalagem original."
  ],
  tabelas: [{
    t: "O acidente típico de cada fase",
    c: ["Idade", "Risco principal", "O que orientar"],
    l: [
      ["0–6 meses", "Queda de superfície e sufocação", "Nunca sozinho em trocador ou cama; berço sem objetos"],
      ["6–12 meses", "Engasgo e queimadura", "Objeto menor que a boca fora do alcance; cozinha protegida"],
      ["1–4 anos", "Afogamento, intoxicação, atropelamento", "Cerca em piscina, balde vazio, veneno trancado, mão dada na rua"],
      ["5–10 anos", "Trânsito, queda de altura, ciclismo", "Capacete, cinto, janela com trava"]
    ]
  }],
  pega: "Barriga para cima para dormir, barriga para baixo para brincar acordado. É a mesma criança e a orientação parece contraditória se você não explicar as duas na consulta."
},

"Calendário vacinal de 0 a 10 anos": {
  fonte: "Calendário Nacional de Vacinação, PNI/MS",
  pontos: [
    "Aprenda pela lógica das idades, não pela lista solta: aos 2, 4 e 6 meses vem o trio pentavalente + VIP + pneumo (rotavírus só aos 2 e 4); aos 3 e 5, meningo C; aos 12 e 15, os reforços.",
    "Pentavalente = DTP + hepatite B + Haemophilus influenzae b.",
    "Atraso não recomeça esquema: retoma de onde parou, respeitando os intervalos mínimos.",
    "Contraindicações verdadeiras são poucas: anafilaxia a dose anterior ou a componente; vacina viva em imunodeprimido grave e na gestação. Resfriado, febre baixa, desnutrição e uso de antibiótico NÃO contraindicam.",
    "BCG: não fazer em recém-nascido com menos de 2 kg, nem em contato de bacilífero antes de avaliar, nem em criança com HIV sintomática. Não se revacina por ausência de cicatriz.",
    "Rotavírus tem janela rígida e é vacina oral viva: perdeu o prazo, não faz.",
    "Influenza: anual, a partir dos 6 meses; na primeira vez que a criança recebe, são duas doses com intervalo de 30 dias."
  ],
  tabelas: [{
    t: "Calendário de 0 a 10 anos",
    c: ["Idade", "Vacinas"],
    l: [
      ["Ao nascer", "BCG · hepatite B (primeiras 12–24 h)"],
      ["2 meses", "Pentavalente · VIP · pneumo 10 · rotavírus"],
      ["3 meses", "Meningocócica C"],
      ["4 meses", "Pentavalente · VIP · pneumo 10 · rotavírus"],
      ["5 meses", "Meningocócica C"],
      ["6 meses", "Pentavalente · VIP · influenza (anual)"],
      ["9 meses", "Febre amarela"],
      ["12 meses", "Tríplice viral · pneumo 10 (reforço) · meningo C (reforço)"],
      ["15 meses", "DTP (1º reforço) · VOP · hepatite A · tetraviral"],
      ["4 anos", "DTP (2º reforço) · VOP · varicela · febre amarela (reforço)"],
      ["9–14 anos", "HPV quadrivalente, dose única"]
    ]
  }],
  numeros: ["Rotavírus: 1ª dose até 3 meses e 15 dias; 2ª até 7 meses e 29 dias."],
  pega: "Resfriado com febre baixa não adia vacina — adiar por isso é a causa evitável mais comum de esquema atrasado."
},

"Crescimento: curvas da OMS e escore-z": {
  fonte: "Caderno de Atenção Básica 33, MS · Curvas OMS 2006/2007 · Caderneta da Criança",
  pontos: [
    "Quatro índices: peso para idade, peso para estatura, estatura para idade e IMC para idade. Cada um responde a uma pergunta diferente.",
    "Peso para estatura e IMC para idade flagram desnutrição AGUDA; estatura para idade denuncia desnutrição CRÔNICA, que é a que deixa marca permanente.",
    "As linhas do escore-z são −3, −2, −1, 0, +1, +2, +3. Entre −2 e +2 fica a normalidade para a maioria dos índices.",
    "O que vale mais que o ponto é a inclinação: criança que atravessa linhas para baixo entre duas consultas está em alerta, mesmo dentro da faixa normal.",
    "Marcos de peso: recupera o peso de nascimento até o 15º dia, dobra por volta dos 4 a 5 meses, triplica com 1 ano e quadruplica com 2 anos.",
    "Estatura: cerca de 25 cm no 1º ano, 12 cm no 2º, 8 cm no 3º, depois 5 a 7 cm por ano até a puberdade.",
    "Perímetro cefálico: medir até os 2 anos, em toda consulta. Cresce cerca de 12 cm no primeiro ano.",
    "Baixa estatura com velocidade de crescimento normal costuma ser variação familiar ou atraso constitucional; baixa estatura com velocidade caindo é doença até prova em contrário."
  ],
  tabelas: [{
    t: "Pontos de corte em escore-z",
    c: ["Índice", "< −3", "−3 a −2", "> +1", "> +2", "> +3"],
    l: [
      ["Peso para idade", "Muito baixo", "Baixo", "—", "Elevado", "—"],
      ["Estatura para idade", "Muito baixa", "Baixa", "—", "—", "—"],
      ["IMC até 5 anos", "Magreza acentuada", "Magreza", "Risco de sobrepeso", "Sobrepeso", "Obesidade"],
      ["IMC de 5 a 19 anos", "Magreza acentuada", "Magreza", "Sobrepeso", "Obesidade", "Obesidade grave"]
    ]
  }],
  pega: "Ponto isolado quase não informa. O que a prova cobra é leitura de trajetória entre consultas — e é também o que muda a conduta na vida real."
},

"Desenvolvimento: marcos por faixa etária": {
  fonte: "Caderno de Atenção Básica 33, MS · Caderneta da Criança",
  pontos: [
    "Avaliar em quatro domínios: motor grosseiro, motor fino e adaptativo, linguagem, e pessoal-social. A caderneta organiza assim.",
    "Use idade corrigida no prematuro até os 2 anos: idade cronológica menos as semanas que faltaram para 40.",
    "Alerta em qualquer idade: perda de habilidade já adquirida, ausência de contato visual, não responder ao nome aos 12 meses, não andar aos 18, não falar palavras aos 2 anos, perímetro cefálico fora da curva.",
    "Regressão de marco é sempre alerta, mesmo com o resto adequado — pede investigação, não observação.",
    "Estímulo é conduta: conversar, ler, brincar no chão e limitar tela (nada de tela antes dos 2 anos) fazem parte da orientação, não são conselho acessório."
  ],
  tabelas: [{
    t: "Marcos que a prova cobra",
    c: ["Idade", "Marco"],
    l: [
      ["1 mês", "Eleva a cabeça em prona, olha o rosto, reage ao som"],
      ["2–3 meses", "Sorriso social, sustenta a cabeça, segue objeto, emite sons"],
      ["4–6 meses", "Pega objeto e leva à boca, rola, senta com apoio, vira ao som"],
      ["6–9 meses", "Senta sem apoio, transfere objeto de mão, balbucia, estranha"],
      ["9–12 meses", "Pinça polegar-indicador, engatinha, fica em pé com apoio, uma ou duas palavras, dá tchau"],
      ["12–18 meses", "Anda sozinha, torre de 2–3 cubos, aponta o que quer, 3 a 5 palavras"],
      ["2 anos", "Corre, sobe escada, frase de duas palavras, aponta figuras"],
      ["3–4 anos", "Pedala triciclo, veste-se com ajuda, conta história curta, brinca com outras crianças"]
    ]
  }],
  pega: "Sorriso social aos 2 meses e pinça aos 9 a 12 são os dois marcos que mais aparecem. E prematuro se avalia por idade corrigida — sem isso, você 'diagnostica' atraso que não existe."
},

"Alimentação por faixa, obesidade e violência contra a criança": {
  fonte: "Caderno de Atenção Básica 23, MS · Guia Alimentar para Crianças Menores de 2 Anos · Linha de Cuidado para Atenção às Pessoas em Situação de Violência",
  pontos: [
    "Aleitamento materno exclusivo até os 6 meses — sem água, chá ou outro leite — e complementado até 2 anos ou mais.",
    "Aos 6 meses entra a alimentação complementar: papa principal amassada com cereal ou tubérculo, leguminosa, proteína animal e legume, mais fruta nos outros horários. Consistência amassada, nunca liquidificada ou peneirada.",
    "Ordem prática: 6 meses, três refeições ao dia para quem mama; 9 meses, cinco; 12 meses, a comida da família.",
    "Nada de açúcar, mel, refrigerante, embutido e ultraprocessado antes dos 2 anos. Mel também pelo risco de botulismo antes de 1 ano.",
    "Obesidade infantil: rastrear pelo IMC para idade, investigar o ambiente — o que se bebe, quanto de tela, quanto se brinca — e tratar a família inteira, não a criança sozinha.",
    "Violência: a suspeita já obriga a notificar, em até 24 horas, com comunicação ao Conselho Tutelar. Notificar não é denunciar; são fluxos diferentes que correm juntos.",
    "Negligência é a forma mais frequente e a mais invisível: falta às consultas, esquema vacinal atrasado, higiene e nutrição descuidadas."
  ],
  tabelas: [{
    t: "Sinais que levantam suspeita de violência",
    c: ["Achado", "Por que chama atenção"],
    l: [
      ["Lesão em local improvável", "Dorso, orelhas, região genital, face interna de coxas"],
      ["Lesões em estágios diferentes", "Sugerem repetição no tempo"],
      ["História incompatível", "A lesão não combina com a idade ou com o mecanismo relatado"],
      ["Mudança de versão", "Relato muda entre acompanhantes ou entre atendimentos"],
      ["Atraso na procura", "Horas ou dias entre a lesão e o atendimento"],
      ["Comportamento", "Medo do acompanhante, apatia, regressão, hipervigilância"]
    ]
  }],
  pega: "Notificar não depende de certeza nem de autorização da família. Esperar 'ter certeza' é o que mantém a criança na situação."
},

/* -------------------------------------------------------- Adolescente */

"Relação equipe–adolescente e roteiro de avaliação na UBS": {
  fonte: "Proteger e cuidar da saúde de adolescentes na atenção básica, MS, 2018 · ECA",
  pontos: [
    "O adolescente tem direito a ser atendido sozinho, se quiser, com privacidade e confidencialidade — inclusive para contracepção e IST. Isso está no ECA e nas normas do Conselho Federal de Medicina.",
    "O sigilo só se quebra diante de risco à vida ou à saúde: abuso, ideação suicida, gravidez com risco. E mesmo aí o adolescente é informado antes da quebra e participa da decisão de como contar.",
    "Combine o enquadre logo na primeira consulta, com a família presente: parte do tempo com todos, parte a sós. Combinado antes, não vira conflito depois.",
    "Postura sem julgamento moral é técnica, não gentileza: é o que determina se ele volta.",
    "O roteiro HEEADSSS organiza a entrevista e vai do menos para o mais sensível.",
    "A Caderneta de Saúde do Adolescente organiza o acompanhamento — crescimento, Tanner, vacinas, saúde bucal, saúde sexual e reprodutiva."
  ],
  tabelas: [{
    t: "Roteiro HEEADSSS",
    c: ["Letra", "Tema", "Exemplo de pergunta"],
    l: [
      ["H", "Home — casa", "Quem mora com você? Como é a relação?"],
      ["E", "Education / Employment", "Como vai a escola? Trabalha?"],
      ["E", "Eating — alimentação", "Como são suas refeições? Está satisfeito com seu corpo?"],
      ["A", "Activities — atividades", "O que faz no tempo livre? Com quem anda?"],
      ["D", "Drugs — álcool e drogas", "Na sua turma, alguém usa? E você?"],
      ["S", "Sexuality — sexualidade", "Já teve relação? Usa proteção?"],
      ["S", "Suicide / humor", "Tem se sentido triste? Já pensou em se machucar?"],
      ["S", "Safety — segurança", "Sente-se seguro em casa, na escola, na rua?"]
    ]
  }],
  pega: "Atender com a mãe na sala o tempo todo apaga todo o resto do roteiro: as perguntas de D, S e S não têm resposta verdadeira com a família presente."
},

"Maturação sexual, avaliação nutricional e caderneta": {
  fonte: "Proteger e cuidar da saúde de adolescentes na atenção básica, MS · Estágios de Tanner",
  pontos: [
    "Tanner vai de 1 (pré-púbere) a 5 (adulto). Na menina avalia-se mama (M) e pelos (P); no menino, genitália (G) e pelos (P).",
    "Menina: o primeiro sinal é o broto mamário — telarca, M2 —, entre 8 e 13 anos. A menarca vem em geral no M4, cerca de 2 a 2,5 anos depois.",
    "Menino: o primeiro sinal é o aumento testicular, volume acima de 4 mL, G2, entre 9 e 14 anos.",
    "O estirão acontece em momentos diferentes: na menina cedo, entre M2 e M3, antes da menarca; no menino tarde, entre G3 e G4. Por isso as meninas 'passam' os meninos em altura por um tempo.",
    "Depois da menarca, o crescimento residual costuma ser de 6 a 8 cm.",
    "Puberdade precoce: antes dos 8 anos na menina, dos 9 no menino. Atraso: sem telarca aos 13, sem aumento testicular aos 14.",
    "Avaliação nutricional pelas curvas de 5 a 19 anos: IMC para idade e estatura para idade, mesmos cortes de escore-z.",
    "Ginecomastia puberal é comum no menino, costuma ser transitória e regride em até 2 anos — tranquilizar, não medicalizar."
  ],
  tabelas: [{
    t: "Tanner, em resumo",
    c: ["Estágio", "Menina (mama)", "Menino (genitália)"],
    l: [
      ["1", "Pré-púbere", "Pré-púbere, testículo < 4 mL"],
      ["2", "Broto mamário — telarca", "Testículo ≥ 4 mL, escroto ruboriza"],
      ["3", "Mama e aréola aumentam juntas", "Pênis cresce em comprimento"],
      ["4", "Aréola forma monte separado — costuma vir a menarca", "Pênis em diâmetro, glande desenvolve"],
      ["5", "Mama adulta", "Genitália adulta"]
    ]
  }],
  pega: "O marco de início não é a menarca nem a primeira ejaculação: é telarca na menina e aumento testicular no menino. Esse par cai quase sempre."
},

"Imunização, prevenção de gravidez e IST/Aids": {
  fonte: "Calendário Nacional de Vacinação, PNI/MS · Saúde sexual e saúde reprodutiva, CAB 26 · Protocolos Clínicos de IST, MS",
  pontos: [
    "Vacinas: HPV dos 9 aos 14 anos em dose única no calendário atual; dT a cada 10 anos; hepatite B se esquema incompleto; tríplice viral conforme situação; meningocócica ACWY dos 11 aos 14; febre amarela; influenza e COVID conforme campanha.",
    "Contracepção não exige autorização dos pais nem idade mínima. Negar acesso é que fere o direito à saúde.",
    "Dupla proteção é o conceito-chave: método eficaz contra gravidez MAIS preservativo contra IST.",
    "LARC — implante e DIU — são primeira linha para adolescentes, inclusive nulíparas: eficácia altíssima e independente da adesão diária.",
    "Contracepção de emergência: levonorgestrel 1,5 mg, dose única, até 5 dias, melhor quanto antes; não é abortiva e não tem contraindicação absoluta.",
    "Prevenção combinada: preservativo, testagem regular, vacina (HPV e hepatite B), tratamento como prevenção, PEP em até 72 horas e PrEP para quem tem indicação.",
    "Testagem rápida de HIV, sífilis e hepatites B e C na própria UBS, com aconselhamento antes e depois — e sem exigir acompanhante.",
    "Relação sexual com menor de 14 anos é estupro de vulnerável, com notificação compulsória e acionamento da rede de proteção. Isso não se traduz em hostilizar o adolescente: ele é quem precisa de cuidado."
  ],
  tabelas: [{
    t: "Eficácia no uso típico",
    c: ["Método", "Gravidezes em 100 mulheres/ano"],
    l: [
      ["Implante", "menos de 1"],
      ["DIU de cobre e SIU", "menos de 1"],
      ["Injetável trimestral", "cerca de 4"],
      ["Pílula combinada", "cerca de 9"],
      ["Preservativo masculino", "cerca de 18"],
      ["Tabelinha", "cerca de 24"]
    ]
  }],
  pega: "A pílula é ótima no uso perfeito e mediana no uso real. É essa diferença — e não a eficácia teórica — que deve guiar a conversa com a adolescente."
},

/* -------------------------------------------------------------- Idoso */

"Atribuições da atenção básica e avaliação global do idoso": {
  fonte: "Caderno de Atenção Básica 19 — Envelhecimento e saúde da pessoa idosa, MS · Política Nacional de Saúde da Pessoa Idosa (Portaria 2.528/2006)",
  pontos: [
    "O paradigma não é ausência de doença: é CAPACIDADE FUNCIONAL. Idoso saudável é o que mantém autonomia e independência, mesmo com doenças crônicas.",
    "Autonomia é decidir sobre a própria vida; independência é executar as tarefas. Dá para ter uma sem a outra, e as condutas são diferentes.",
    "Atribuições da equipe: cadastrar e conhecer os idosos do território, usar a Caderneta de Saúde da Pessoa Idosa, fazer a avaliação multidimensional, acompanhar as condições crônicas, prevenir quedas, revisar a farmácia, apoiar o cuidador e organizar a visita domiciliar.",
    "Revisão de farmácia é intervenção de alto impacto: cada medicamento a mais aumenta o risco de interação, queda e internação. Rastrear medicamento potencialmente inapropriado (critérios de Beers) é parte da consulta.",
    "Vacinas: influenza anual, pneumocócica 23 em indicações específicas e institucionalizados, dT a cada 10 anos, hepatite B, febre amarela e COVID conforme calendário.",
    "Os 'gigantes da geriatria' orientam a busca ativa: incapacidade cognitiva, instabilidade postural, imobilidade, incontinência e iatrogenia."
  ],
  tabelas: [{
    t: "A avaliação multidimensional, domínio por domínio",
    c: ["Domínio", "Como se avalia na UBS"],
    l: [
      ["Cognição", "Miniexame do Estado Mental, relógio, fluência verbal"],
      ["Humor", "Escala de Depressão Geriátrica (GDS-15)"],
      ["Funcionalidade", "Katz (AVD) e Lawton (AIVD)"],
      ["Mobilidade e quedas", "Timed Up and Go, velocidade de marcha, história de queda"],
      ["Nutrição", "IMC, perda de peso, Mini Avaliação Nutricional"],
      ["Visão e audição", "Acuidade, teste do sussurro"],
      ["Continência", "Pergunta ativa — o idoso não conta espontaneamente"],
      ["Suporte social", "APGAR familiar, quem cuida, rede disponível"]
    ]
  }],
  pega: "Avaliar idoso por lista de doenças é o erro do enunciado. A pergunta que organiza tudo é: o que ele consegue fazer sozinho hoje, e o que mudou desde a última consulta?"
},

"Cognição, funcionalidade (AVD e AIVD), quedas e mobilidade": {
  fonte: "Caderno de Atenção Básica 19, MS",
  pontos: [
    "AIVD se perdem primeiro, AVD depois. Por isso as AIVD detectam declínio precoce — é nelas que está a janela de intervenção.",
    "Queixa de memória trazida pelo próprio paciente costuma ser depressão; queixa trazida pela família costuma ser demência. Não é regra absoluta, mas orienta a investigação.",
    "Miniexame do Estado Mental: nota de corte varia com a escolaridade — analfabetos por volta de 20, baixa escolaridade 24, escolaridade alta 26 a 27.",
    "Timed Up and Go: levantar da cadeira, andar 3 metros, voltar e sentar. Acima de 20 segundos, alto risco de queda; até 10 segundos, normal.",
    "Velocidade de marcha abaixo de 0,8 m/s sinaliza fragilidade e prediz desfecho ruim melhor que muito exame.",
    "Toda consulta deve perguntar sobre queda no último ano. Uma queda com lesão, duas ou mais quedas, ou alteração de marcha e equilíbrio pedem avaliação completa.",
    "Boa parte dos fatores de risco de queda a UBS resolve: polifarmácia — sobretudo benzodiazepínico —, hipotensão postural, déficit visual, tapete solto, iluminação ruim, calçado inadequado, ausência de barra no banheiro."
  ],
  tabelas: [
    {
      t: "AVD e AIVD",
      c: ["AVD básicas (Katz)", "AIVD (Lawton)"],
      l: [
        ["Banhar-se", "Usar telefone"],
        ["Vestir-se", "Fazer compras"],
        ["Ir ao banheiro", "Preparar refeições"],
        ["Transferir-se", "Cuidar da casa e lavar roupa"],
        ["Continência", "Usar transporte"],
        ["Alimentar-se", "Tomar medicação e cuidar do dinheiro"]
      ]
    }
  ],
  pega: "O idoso que já não administra a própria medicação mas ainda toma banho sozinho está exatamente na janela em que dá para intervir — e é o que passa despercebido na consulta rápida."
},

"Suporte familiar, violência intrafamiliar e assistência domiciliar": {
  fonte: "Caderno de Atenção Básica 19, MS · Estatuto do Idoso (Lei 10.741/2003)",
  pontos: [
    "Ferramentas de avaliação familiar: APGAR familiar (adaptação, participação, crescimento, afeto e resolução), genograma e ecomapa. Mostram quem cuida, quem sobrecarrega e quem sustenta.",
    "O cuidador é também objeto de cuidado: sobrecarga é fator de risco para adoecimento dele e para maus-tratos ao idoso.",
    "Notificação de violência contra a pessoa idosa é compulsória, e o Estatuto do Idoso obriga a comunicação à autoridade competente — Conselho do Idoso, Ministério Público ou delegacia.",
    "Assistência domiciliar: indicada para quem tem dificuldade ou impossibilidade de locomoção. Avalia o ambiente, a adesão à medicação, o cuidador e a rede de apoio — e vê o que a consulta na unidade não mostra.",
    "A visita é também rastreio de risco de queda: iluminação, tapete, barra de apoio, altura da cama, calçado."
  ],
  tabelas: [{
    t: "Formas de violência e o que aparece na consulta",
    c: ["Forma", "Sinal típico"],
    l: [
      ["Negligência — a mais frequente", "Desnutrição, desidratação, higiene precária, medicação sem controle"],
      ["Física", "Lesões inexplicadas ou em estágios diferentes"],
      ["Psicológica", "Apatia, medo na presença do acompanhante, isolamento"],
      ["Financeira", "Movimentação estranha, perda de bens, dependência forçada"],
      ["Sexual", "Lesões genitais, IST, mudança de comportamento"],
      ["Abandono", "Falta a consultas, permanece sozinho sem condições"]
    ]
  }],
  pega: "Negligência é violência, inclusive por omissão do serviço. E suspeita basta para notificar — confirmar não é tarefa da equipe da UBS."
},

/* ------------------------------------------------------------- Mulher */

"Planejamento reprodutivo e métodos contraceptivos": {
  fonte: "Saúde sexual e saúde reprodutiva — CAB 26, MS · Lei 9.263/1996",
  pontos: [
    "Planejamento reprodutivo é direito garantido pela Lei 9.263/1996: informação, acesso a todos os métodos e escolha livre e informada. A escolha é da mulher; o papel da equipe é informar, não decidir.",
    "Comportamentais: tabelinha, muco cervical (Billings), temperatura basal, sintotérmico. Dependem de ciclo regular e de adesão rigorosa.",
    "Barreira: preservativo masculino e feminino — os únicos que protegem de IST — e diafragma.",
    "Hormonais combinados (estrogênio + progestagênio): pílula, injetável mensal, adesivo e anel. Benefícios não contraceptivos: regularizam ciclo, reduzem cólica e acne, protegem contra câncer de ovário e de endométrio.",
    "Só progestagênio: minipílula, desogestrel, injetável trimestral e implante. São a saída quando o estrogênio está contraindicado, inclusive na amamentação.",
    "DIU de cobre: 10 anos, não hormonal, pode aumentar fluxo e cólica. SIU de levonorgestrel: 5 a 8 anos, reduz o fluxo e trata sangramento aumentado.",
    "Esterilização cirúrgica (Lei 9.263/96, redação atual): a partir de 21 anos ou com dois filhos vivos, manifestação escrita e prazo mínimo de 60 dias entre a manifestação e o procedimento. Não depende mais do consentimento do cônjuge, e é vedada durante o parto ou até 42 dias depois, salvo exceções legais.",
    "Retorno da fertilidade é imediato com a maioria dos métodos; a exceção é o injetável trimestral, que pode demorar meses."
  ],
  tabelas: [{
    t: "Os métodos, em uma olhada",
    c: ["Método", "Duração", "Observação"],
    l: [
      ["Preservativo", "Por relação", "Único que previne IST"],
      ["Pílula combinada", "Diária", "Adesão é o ponto fraco"],
      ["Minipílula / desogestrel", "Diária", "Compatível com amamentação"],
      ["Injetável mensal", "Mensal", "Combinado"],
      ["Injetável trimestral", "3 meses", "Só progestagênio; retorno lento da fertilidade"],
      ["Implante", "3 anos", "LARC, altíssima eficácia"],
      ["DIU de cobre", "10 anos", "Não hormonal; também serve de emergência"],
      ["SIU levonorgestrel", "5 a 8 anos", "Reduz fluxo menstrual"],
      ["Laqueadura / vasectomia", "Definitivo", "Regras da Lei 9.263/96"]
    ]
  }],
  pega: "A diferença entre uso perfeito e uso típico é o centro da orientação — e é o que explica os LARC terem virado primeira linha."
},

"Critérios de elegibilidade e contracepção de emergência": {
  fonte: "Critérios Médicos de Elegibilidade para Uso de Contraceptivos, OMS/MS",
  pontos: [
    "As quatro categorias da OMS existem para tirar a decisão do 'acho que pode': 1 usar sem restrição; 2 vantagens superam riscos; 3 riscos superam vantagens, só sem alternativa e com acompanhamento; 4 risco inaceitável, não usar.",
    "Categoria 3 e 4 valem para aquele método, não para a contracepção inteira: quase sempre há saída com progestagênio isolado, DIU ou barreira.",
    "Pós-parto: quem amamenta pode iniciar progestagênio isolado; combinado só após 6 meses. Sem amamentação, combinado a partir de 21 dias, se não houver outro risco trombótico.",
    "Contracepção de emergência: levonorgestrel 1,5 mg em dose única, até 5 dias (120 horas), tão mais eficaz quanto mais cedo. Alternativa antiga: método de Yuzpe, com mais náusea.",
    "O DIU de cobre é o método de emergência mais eficaz, inserido em até 5 dias, e já fica como contracepção continuada.",
    "A emergência não interrompe gestação já estabelecida, não é abortiva e não tem contraindicação absoluta. Pode repetir se necessário, embora não substitua método de rotina.",
    "Depois da emergência: iniciar ou retomar método regular já, e oferecer testagem de IST quando a exposição pedir."
  ],
  tabelas: [{
    t: "Categoria 4 para combinado — as que caem",
    c: ["Condição"],
    l: [["Enxaqueca COM aura, em qualquer idade"],
        ["Câncer de mama atual"],
        ["TVP ou embolia pulmonar atual, ou trombofilia conhecida"],
        ["Hipertensão grave (≥ 160/100)"],
        ["Tabagismo ≥ 15 cigarros/dia acima dos 35 anos"],
        ["Amamentação com menos de 6 semanas pós-parto"],
        ["Cirrose descompensada, tumor hepático"],
        ["Lúpus com anticorpo antifosfolípide"],
        ["Pós-operatório com imobilização prolongada"]]
  }],
  pega: "Enxaqueca com aura é categoria 4 para combinado em qualquer idade — e continua sendo categoria 1 ou 2 para progestagênio isolado e DIU. É a pergunta que mais reprova."
},

"Doenças benignas da mama e exame clínico": {
  fonte: "Controle dos cânceres do colo do útero e da mama — CAB 13, MS · Diretrizes para a Detecção Precoce do Câncer de Mama, INCA",
  pontos: [
    "As alterações funcionais benignas — dor, nodularidade, cistos — são a queixa mais comum do ambulatório e não aumentam o risco de câncer. Dizer isso à paciente já é metade da consulta.",
    "Mastalgia cíclica: bilateral, difusa, ligada ao ciclo. Responde a orientação, sutiã com boa sustentação e analgesia simples. Mastalgia acíclica, unilateral e localizada merece investigação.",
    "Fibroadenoma: nódulo móvel, contorno regular, fibroelástico, típico da mulher jovem. Cisto: aparece e some com o ciclo, confirmado por ultrassom.",
    "Descarga papilar fisiológica: bilateral, multiductal, provocada, leitosa ou esverdeada. Suspeita: espontânea, unilateral, uniductal, sanguinolenta ou 'água de rocha'.",
    "Exame clínico das mamas: inspeção estática e dinâmica (braços ao longo do corpo, elevados, mãos na cintura), palpação em toda a mama e das cadeias axilar, supra e infraclavicular, e expressão papilar.",
    "Para rastreamento, o INCA registra AUSÊNCIA de recomendação quanto ao exame clínico — diferente de recomendar contra. Ele segue indicado na investigação de queixa.",
    "O autoexame não é recomendado como método de rastreio, mas a mulher deve conhecer as próprias mamas e procurar a unidade diante de mudança."
  ],
  tabelas: [{
    t: "Benigno x suspeito",
    c: ["Achado", "Sugere benigno", "Sugere suspeita"],
    l: [
      ["Nódulo", "Móvel, regular, elástico", "Endurecido, fixo, irregular"],
      ["Dor", "Cíclica, bilateral", "Acíclica, unilateral, localizada"],
      ["Descarga", "Bilateral, multiductal, provocada", "Espontânea, unilateral, sanguinolenta"],
      ["Pele", "Sem alteração", "Retração, casca de laranja, ulceração"],
      ["Axila", "Sem linfonodo", "Linfonodo endurecido ou fixo"]
    ]
  }],
  pega: "Ausência de recomendação e recomendação contrária não são a mesma coisa. A primeira diz que o equilíbrio entre danos e benefícios é incerto — e o app e a prova separam os dois casos."
},

"Rastreamento de mama e condutas pela mamografia": {
  fonte: "Diretrizes para a Detecção Precoce do Câncer de Mama no Brasil, INCA · Sistema BI-RADS",
  pontos: [
    "Recomendação do Ministério da Saúde: mamografia de rastreamento a cada 2 anos, dos 50 aos 69 anos, na mulher de risco habitual.",
    "O documento recomenda CONTRA rastrear abaixo de 50 e acima de 69 anos, e contra ultrassonografia, ressonância e termografia como métodos de rastreamento.",
    "Alto risco sai do rastreamento populacional e entra em acompanhamento individualizado: parente de primeiro grau com câncer de mama antes dos 50 anos, câncer bilateral ou de ovário em qualquer idade, parente masculino com câncer de mama, mutação BRCA conhecida.",
    "Rastrear tem dano: falso-positivo, ansiedade, biópsia desnecessária e sobrediagnóstico — tratar tumor que jamais daria sintoma. É por isso que a faixa etária é restrita.",
    "Diante de queixa, não é rastreamento e sim diagnóstico: aí a idade não limita a investigação.",
    "Os dez sinais de referência urgente para o serviço de mastologia devem estar na cabeça de quem atende na UBS."
  ],
  tabelas: [
    {
      t: "BI-RADS e conduta",
      c: ["Categoria", "Significado", "Conduta"],
      l: [
        ["0", "Inconclusivo", "Complementar com incidências ou ultrassom"],
        ["1", "Nada a relatar", "Rotina"],
        ["2", "Achado benigno", "Rotina"],
        ["3", "Provavelmente benigno (< 2%)", "Controle em 6 meses"],
        ["4", "Suspeito (4A, 4B, 4C)", "Biópsia"],
        ["5", "Altamente suspeito (> 95%)", "Biópsia"],
        ["6", "Malignidade comprovada", "Tratamento"]
      ]
    },
    {
      t: "Referência urgente",
      c: ["Sinal"],
      l: [["Nódulo endurecido e fixo"], ["Nódulo maior que 2 cm"], ["Ulceração ou lesão de pele"],
          ["Retração de pele ou do mamilo"], ["Descarga sanguinolenta unilateral"],
          ["Linfonodo axilar suspeito"], ["Edema em casca de laranja"], ["Mama inflamatória"]]
    }
  ],
  numeros: ["Rastreio no SUS: 50 a 69 anos, a cada 2 anos. BI-RADS 3 → 6 meses; 4 e 5 → biópsia."],
  pega: "A idade do rastreamento do MS não é a das sociedades de especialidade, que indicam anual a partir dos 40. Em prova de Saúde Coletiva, vale o Ministério da Saúde."
},

"Colo do útero: lesões precursoras e rastreamento": {
  fonte: "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA/MS · Portaria Conjunta SAES/SECTICS 13/2025",
  pontos: [
    "História natural: infecção persistente por HPV oncogênico — 16 e 18 respondem por cerca de 70% dos casos — leva a lesão intraepitelial e, ao longo de anos, a câncer invasor. É essa lentidão que torna o rastreamento eficaz.",
    "A maior parte das infecções por HPV regride sozinha em até 2 anos, sobretudo antes dos 30. Por isso não se rastreia adolescente.",
    "Recomendação clássica do MS: citologia dos 25 aos 64 anos, em quem já teve atividade sexual, a cada 3 anos após dois exames anuais normais consecutivos.",
    "Encerrar aos 64 anos exige dois exames negativos consecutivos nos últimos 5 anos.",
    "Nomenclatura: LSIL = NIC 1; HSIL = NIC 2 e 3. ASC-US é atipia de significado indeterminado possivelmente não neoplásica; ASC-H é atipia em que não se pode excluir alto grau; AGC é atipia glandular.",
    "A partir da portaria de 2025, o exame primário passa a ser o teste de DNA-HPV — mudança grande, que convive com a citologia durante a transição. Confira qual das duas a sua prova cobra.",
    "Situações particulares: gestante rastreia normalmente e adia conduta para depois do parto, salvo suspeita de invasão; mulher vivendo com HIV rastreia semestral no primeiro ano e depois anual; histerectomia total por doença benigna dispensa; sem atividade sexual não rastreia."
  ],
  tabelas: [{
    t: "Conduta por resultado da citologia",
    c: ["Resultado", "Conduta"],
    l: [
      ["Normal", "Rotina (anual até dois normais, depois trienal)"],
      ["ASC-US", "Repetir: 6 meses se ≥ 30 anos, 12 meses se 25–29"],
      ["LSIL", "Repetir em 6 meses"],
      ["ASC-H", "Colposcopia"],
      ["HSIL", "Colposcopia"],
      ["AGC", "Colposcopia com avaliação do canal"],
      ["Suspeita de invasão", "Colposcopia imediata"]
    ]
  }],
  figura: `<svg viewBox="0 0 320 96" role="img" aria-label="História natural do câncer do colo do útero">
    <g font-size="8.5" fill="#3A352E">
      <rect x="6" y="30" width="62" height="26" rx="4" fill="#EAF1EE" stroke="#BFD6CE"/>
      <text x="14" y="47">infecção HPV</text>
      <rect x="86" y="30" width="62" height="26" rx="4" fill="#EAF1EE" stroke="#BFD6CE"/>
      <text x="96" y="43">persistência</text><text x="104" y="52">(anos)</text>
      <rect x="166" y="30" width="62" height="26" rx="4" fill="#FBF6E9" stroke="#E3D4AC"/>
      <text x="176" y="43">NIC 1 → 2/3</text><text x="182" y="52">precursora</text>
      <rect x="246" y="30" width="66" height="26" rx="4" fill="#F7E9E6" stroke="#E0C2BA"/>
      <text x="258" y="47">câncer invasor</text>
    </g>
    <g stroke="#5E584F" fill="none" stroke-width="1">
      <path d="M68 43h16M148 43h16M228 43h16"/>
    </g>
    <g font-size="8" fill="#14615A">
      <path d="M37 30v-9h74" stroke="#14615A" fill="none"/>
      <text x="44" y="17">regressão espontânea na maioria</text>
    </g>
    <text x="6" y="80" font-size="8" fill="#5E584F">o rastreamento intercepta aqui ↑ — antes do invasor, depois da regressão</text>
  </svg>`,
  pega: "Rastrear antes dos 25 anos faz mal: trata lesão que regrediria sozinha e a conização aumenta prematuridade nas gestações seguintes."
},

"Coleta do colpocitológico e recomendações prévias": {
  fonte: "Caderno de Atenção Básica 13, MS · Diretrizes do rastreamento, INCA",
  pontos: [
    "Orientações prévias: sem ducha, creme ou medicamento vaginal nas 48 horas anteriores, sem relação sexual no mesmo período, e fora do período menstrual — exceto se o sangramento for anormal, que aí se investiga.",
    "Coleta dupla: ectocérvice com espátula de Ayre girada 360° e endocérvice com escova rotacionada.",
    "Amostra satisfatória exige representação da junção escamocolunar — células escamosas e glandulares ou metaplásicas. Sem isso, é insatisfatória e repete.",
    "Fixação imediata, identificação correta da lâmina e requisição completa: data da última menstruação, uso de hormônio, gestação, antecedentes e achados do exame especular.",
    "Aproveite a consulta: exame clínico das mamas, atualização vacinal (inclusive HPV e dT), oferta de testagem de IST e conversa sobre contracepção.",
    "Na gestante a coleta é feita, com cuidado, apenas da ectocérvice — sem escova endocervical.",
    "Lesão visível a olho nu no colo não se resolve com citologia: vai para colposcopia, porque a citologia pode vir falsamente normal em tumor necrótico."
  ],
  pega: "Exame sem junção escamocolunar não tranquiliza ninguém: é insatisfatório, e o próximo passo é repetir a coleta — não esperar três anos."
},

"Pré-natal: primeira consulta e ácido fólico": {
  fonte: "Atenção ao pré-natal de baixo risco — CAB 32, MS",
  pontos: [
    "Início o mais precoce possível, de preferência no primeiro trimestre. Mínimo de 6 consultas: uma no primeiro trimestre, duas no segundo, três no terceiro.",
    "Primeira consulta: história clínica e obstétrica completa, cálculo da idade gestacional e da data provável do parto pela regra de Naegele (último dia de menstruação + 7 dias, − 3 meses), abertura do cartão da gestante, exame físico geral e obstétrico, avaliação de risco e solicitação dos exames.",
    "Ácido fólico 0,4 mg/dia, idealmente iniciado 30 dias antes da concepção e mantido até a 12ª semana. Com antecedente de defeito do tubo neural, 4 a 5 mg/dia.",
    "Sulfato ferroso 40 mg de ferro elementar por dia, profilático, a partir da 20ª semana até o 3º mês pós-parto.",
    "Vacinas: dTpa a cada gestação a partir da 20ª semana, hepatite B, influenza e COVID conforme calendário. Contraindicadas as de vírus vivo — tríplice viral, varicela, febre amarela, salvo risco elevado de exposição.",
    "Avaliação nutricional pelo IMC pré-gestacional define o ganho de peso recomendado.",
    "Classificação de risco já na primeira consulta, e reavaliada em todas as outras: risco não é rótulo fixo."
  ],
  tabelas: [{
    t: "Ganho de peso conforme o IMC pré-gestacional",
    c: ["IMC inicial", "Ganho total recomendado"],
    l: [
      ["Baixo peso (< 18,5)", "12,5 a 18 kg"],
      ["Adequado (18,5–24,9)", "11,5 a 16 kg"],
      ["Sobrepeso (25–29,9)", "7 a 11,5 kg"],
      ["Obesidade (≥ 30)", "5 a 9 kg"]
    ]
  }],
  numeros: ["Ácido fólico 0,4 mg/dia (4–5 mg se antecedente de DTN) · ferro 40 mg/dia da 20ª semana · mínimo 6 consultas."],
  pega: "Ácido fólico iniciado no dia do teste positivo já perdeu boa parte do efeito: o tubo neural fecha até a 4ª semana. Por isso a orientação é pré-concepcional."
},

"Exames do pré-natal por trimestre: interpretação e conduta": {
  fonte: "Atenção ao pré-natal de baixo risco — CAB 32, MS",
  pontos: [
    "Bacteriúria assintomática na gestante SE TRATA sempre, mesmo sem sintoma, com urocultura de controle depois — fora da gestação, não se trata.",
    "Sífilis: penicilina benzatina é o único tratamento que trata o feto. Tratar a parceria, acompanhar com VDRL mensal, e lembrar que alergia à penicilina se maneja com dessensibilização, não com troca de esquema.",
    "Toxoplasmose: IgG e IgM negativos = suscetível, orientar prevenção e repetir a cada trimestre. IgM positivo pede teste de avidez, útil sobretudo antes das 16 semanas — avidez alta indica infecção antiga.",
    "Diabetes na gestação: glicemia de jejum ≥ 126 mg/dL ou HbA1c ≥ 6,5% é diabetes prévio; jejum entre 92 e 125 no primeiro trimestre já fecha diabetes gestacional.",
    "TOTG 75 g entre 24 e 28 semanas: um valor alterado basta para o diagnóstico.",
    "Rh negativo exige Coombs indireto; se negativo, repetir mensalmente a partir da 24ª semana, e imunoglobulina anti-D conforme protocolo.",
    "Ultrassom não é obrigatório para um pré-natal de qualidade, mas quando disponível o do primeiro trimestre é o que melhor data a gestação."
  ],
  tabelas: [
    {
      t: "Exames por trimestre",
      c: ["Trimestre", "Exames"],
      l: [
        ["1º", "Hemograma · tipagem e Rh (+ Coombs se Rh−) · glicemia de jejum · VDRL e teste rápido de sífilis · HIV · HBsAg · toxoplasmose IgG/IgM · urina I e urocultura · ultrassom se disponível"],
        ["2º", "TOTG 75 g entre 24 e 28 semanas · repetir VDRL e HIV"],
        ["3º", "Hemograma · VDRL · HIV · HBsAg · toxoplasmose se suscetível · urocultura · estreptococo do grupo B entre 35 e 37 semanas onde disponível"]
      ]
    },
    {
      t: "TOTG 75 g — um valor já diagnostica",
      c: ["Momento", "Valor (mg/dL)"],
      l: [["Jejum", "≥ 92"], ["1 hora", "≥ 180"], ["2 horas", "≥ 153"]]
    }
  ],
  pega: "Rh negativo sem Coombs indireto é pré-natal incompleto. E bacteriúria assintomática, que fora da gestação se ignora, aqui se trata."
},

"Consultas subsequentes, vacinas e encaminhamento ao alto risco": {
  fonte: "Atenção ao pré-natal de baixo risco — CAB 32, MS",
  pontos: [
    "Periodicidade: mensal até a 28ª semana, quinzenal da 28ª à 36ª, semanal da 36ª até o parto. O pré-natal não termina antes do parto — passando de 41 semanas, avaliação em serviço de referência.",
    "Em cada consulta: peso e ganho ponderal, pressão arterial, altura uterina, batimentos cardiofetais, movimentação fetal, edema e, a partir de 36 semanas, apresentação fetal.",
    "Altura uterina fora da curva pede investigação — acima: polidrâmnio, macrossomia, gemelar ou erro de data; abaixo: restrição de crescimento, oligoâmnio ou erro de data.",
    "Pressão ≥ 140/90 em duas medidas exige avaliação de pré-eclâmpsia: proteinúria, sintomas de iminência (cefaleia, escotomas, epigastralgia) e exames.",
    "Vinculação à maternidade de referência é parte do pré-natal: a gestante precisa saber para onde ir antes de entrar em trabalho de parto.",
    "Encaminhar ao alto risco não é dar alta: o acompanhamento segue compartilhado com a UBS, que mantém vínculo, visitas e ações de promoção."
  ],
  tabelas: [
    {
      t: "Quando encaminhar ao alto risco",
      c: ["Motivo"],
      l: [["Hipertensão, cardiopatia, nefropatia, doença autoimune"],
          ["Diabetes prévio ou gestacional em uso de insulina"],
          ["HIV, sífilis com falha terapêutica, toxoplasmose aguda"],
          ["Antecedente de prematuridade, perdas de repetição, óbito fetal"],
          ["Gemelaridade, malformação fetal, restrição de crescimento"],
          ["Isoimunização Rh"], ["Trombofilia e antecedente tromboembólico"]]
    },
    {
      t: "Sinais de emergência obstétrica",
      c: ["Sinal"],
      l: [["Sangramento vaginal"], ["Perda de líquido"], ["Dor abdominal intensa"],
          ["Cefaleia com escotomas ou epigastralgia"], ["PA ≥ 140/90 com sintomas"],
          ["Redução ou ausência de movimentos fetais"], ["Febre"], ["Convulsão"]]
    }
  ],
  pega: "Reduzir movimentos fetais é queixa de emergência, não de consulta agendada. Orientar a gestante sobre isso vale mais do que qualquer exame de rotina a mais."
},

/* --------------------------------------------------------- Hanseníase */

"Definição de caso, epidemiologia e transmissão": {
  fonte: "Guia prático sobre a hanseníase, MS, 2017 · Guia de Vigilância em Saúde, MS",
  pontos: [
    "Caso é a pessoa com UM OU MAIS dos sinais cardinais, que por isso precisa de poliquimioterapia. Um basta.",
    "Agente: Mycobacterium leprae, bacilo álcool-ácido resistente, intracelular obrigatório, de multiplicação lenta — tempo de geração de 11 a 16 dias. É essa lentidão que explica a incubação longa.",
    "Transmissão pelas vias aéreas superiores, por contato prolongado e próximo com doente multibacilar sem tratamento. Não se pega por objeto, aperto de mão, assento ou convívio casual.",
    "Incubação de 2 a 7 anos em média — o contato que adoece hoje se infectou anos atrás.",
    "Com a primeira dose da poliquimioterapia o doente deixa de transmitir. Daí não haver isolamento, afastamento do trabalho ou da escola.",
    "A maioria da população é naturalmente resistente; adoecer depende da resposta imune celular, o que explica todo o espectro clínico.",
    "É notificação compulsória semanal. O Brasil é o segundo país do mundo em número de casos, e Mato Grosso está entre os estados de maior detecção.",
    "Indicadores do programa: taxa de detecção, proporção de casos com grau 2 de incapacidade no diagnóstico (mede o atraso), proporção de contatos examinados e proporção de cura."
  ],
  tabelas: [{
    t: "Os três sinais cardinais",
    c: ["Sinal", "Como se confirma"],
    l: [
      ["Lesão de pele com alteração de sensibilidade", "Teste térmico, doloroso e tátil na lesão"],
      ["Espessamento de nervo periférico com alteração sensitiva, motora ou autonômica", "Palpação dos troncos e avaliação neurológica simplificada"],
      ["Baciloscopia positiva", "Raspado intradérmico — quando positiva, classifica como multibacilar"]
    ]
  }],
  pega: "O diagnóstico é clínico. Baciloscopia negativa NÃO afasta hanseníase: na forma paucibacilar ela é negativa por definição."
},

"Clínica dermatológica e neurológica · diagnóstico": {
  fonte: "Guia prático sobre a hanseníase, MS, 2017 · classificação de Madri e operacional da OMS",
  pontos: [
    "A sensibilidade se perde numa ordem: térmica primeiro, depois dolorosa, depois tátil. Testar nessa ordem aumenta a chance de achar a lesão inicial.",
    "Nervos a palpar sempre: ulnar, mediano, radial, fibular comum, tibial posterior, auricular magno, facial e trigêmeo. Procure espessamento, dor à palpação e choque.",
    "A avaliação neurológica simplificada é obrigatória no diagnóstico, durante o tratamento e na alta: inspeção de olhos, mãos e pés, palpação de nervos, sensibilidade com monofilamentos e força muscular.",
    "Reação tipo 1, ou reversa: lesões antigas ficam eritematosas e infiltradas, com neurite. Mais comum nas formas dimorfas. Tratamento com prednisona.",
    "Reação tipo 2, ou eritema nodoso hansênico: nódulos dolorosos, febre, mal-estar, artralgia. Típica da virchowiana. Tratamento com talidomida — proibida para mulher em idade fértil sem contracepção rigorosa, pela teratogenicidade.",
    "Reação hansênica não é falha do tratamento nem recidiva, e a poliquimioterapia NÃO se interrompe por causa dela.",
    "Neurite é urgência: corticoide imediato, para não deixar sequela permanente."
  ],
  tabelas: [{
    t: "Formas clínicas",
    c: ["Forma", "Lesões", "Baciloscopia", "Classificação"],
    l: [
      ["Indeterminada", "Mancha hipocrômica com alteração de sensibilidade, sem espessamento neural", "Negativa", "Paucibacilar"],
      ["Tuberculoide", "Placa bem delimitada, anestésica, poucas lesões, um nervo", "Negativa", "Paucibacilar"],
      ["Dimorfa", "Lesões em número intermediário, bordas internas mal definidas", "Positiva ou negativa", "Em geral multibacilar"],
      ["Virchowiana", "Infiltração difusa, madarose, fácies leonina, muitas lesões", "Positiva", "Multibacilar"]
    ]
  }],
  pega: "Classificação operacional decide o tratamento: até 5 lesões é paucibacilar, 6 ou mais é multibacilar — e baciloscopia positiva classifica como multibacilar, não importa quantas lesões existam."
},

"PQT-U, critério de alta, incapacidades e contatos": {
  fonte: "Guia prático sobre a hanseníase, MS · Nota técnica do esquema único (PQT-U)",
  pontos: [
    "PQT-U é esquema único — rifampicina, dapsona e clofazimina para todos. O que muda é a duração.",
    "A dose mensal é supervisionada na unidade; as demais, autoadministradas em casa. A supervisão mensal é a consulta: avaliar reação, neurite e adesão.",
    "Alta por cura: completar o número de doses no prazo, com avaliação neurológica, do grau de incapacidade e orientação de autocuidado.",
    "O grau de incapacidade é avaliado no diagnóstico E na alta. Grau 2 no diagnóstico significa diagnóstico tardio, e por isso é indicador de qualidade do programa.",
    "Contatos: examinar todos os contatos domiciliares e sociais dos últimos 5 anos — avaliação dermatoneurológica, orientação sobre sinais e BCG.",
    "BCG no contato: uma dose se não tiver cicatriz; uma dose adicional se tiver apenas uma. Não se aplica em quem já tem hanseníase diagnosticada nem em pessoa vivendo com HIV.",
    "Autocuidado é parte do tratamento, não conselho extra: hidratação e lubrificação de mãos e pés, inspeção diária, proteção ocular, calçado adequado, adaptação de ferramentas.",
    "Rifampicina tinge urina, suor e lágrima de laranja — avisar antes evita abandono por susto."
  ],
  tabelas: [
    {
      t: "Duração do tratamento",
      c: ["Classificação", "Doses", "Prazo máximo"],
      l: [["Paucibacilar", "6 doses mensais", "até 9 meses"],
          ["Multibacilar", "12 doses mensais", "até 18 meses"]]
    },
    {
      t: "Graus de incapacidade",
      c: ["Grau", "O que significa"],
      l: [
        ["0", "Nenhum problema nos olhos, mãos ou pés"],
        ["1", "Diminuição ou perda de sensibilidade"],
        ["2", "Deformidade visível: lagoftalmo, garra, mão ou pé caído, úlcera plantar, reabsorção"]
      ]
    }
  ],
  pega: "Com o esquema único, a clofazimina passou a entrar também no paucibacilar. Quem decorou o esquema antigo — dois fármacos para PB — erra a questão."
},

/* -------------------------------------------------------- Tuberculose */

"Etiologia, transmissão, patogênese e história clínica": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019",
  pontos: [
    "Agente: Mycobacterium tuberculosis, o bacilo de Koch — aeróbio estrito, álcool-ácido resistente, de multiplicação lenta.",
    "Transmissão por aerossóis na fala, tosse ou espirro. Só as formas pulmonar e laríngea transmitem; as extrapulmonares, não.",
    "Patogênese: a primoinfecção costuma ser contida pela imunidade celular e fica latente. O adoecimento vem sobretudo por reativação, e a imunossupressão é o grande gatilho — HIV, diabetes, desnutrição, corticoide, imunobiológicos.",
    "Sintomático respiratório é tosse por 3 semanas ou mais na população geral; em população vulnerável — pessoa vivendo com HIV, privada de liberdade, em situação de rua, indígena, profissional de saúde — qualquer tempo de tosse investiga.",
    "Quadro clássico: tosse produtiva, febre vespertina, sudorese noturna, emagrecimento e inapetência, arrastados por semanas.",
    "Atribuições da UBS: busca ativa de sintomático respiratório, diagnóstico, tratamento diretamente observado, exame de contatos, tratamento da infecção latente, notificação e acompanhamento até o encerramento.",
    "Em tratamento eficaz, a transmissão cai muito já nas primeiras 2 a 3 semanas.",
    "Coinfecção TB-HIV: oferecer teste de HIV a todo caso de tuberculose — é conduta padrão, não exceção."
  ],
  pega: "Buscar sintomático respiratório é tarefa da equipe inteira, em toda oportunidade — sala de espera, visita domiciliar, acolhimento. É o que muda a curva no território."
},

"Baciloscopia, TRM-TB, cultura e prova tuberculínica": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019",
  pontos: [
    "TRM-TB é o exame de escolha para diagnóstico: detecta DNA do complexo M. tuberculosis e a resistência à rifampicina em cerca de 2 horas, numa única amostra.",
    "Baciloscopia: onde não há TRM-TB, duas amostras de escarro. E é o exame de ACOMPANHAMENTO mensal do tratamento — o TRM-TB não serve para controle, porque detecta DNA de bacilo morto e segue positivo.",
    "Cultura com teste de sensibilidade: indicada em todo caso com TRM-TB detectável, retratamento, falência, contato de TB resistente, populações vulneráveis e suspeita de forma extrapulmonar.",
    "Radiografia de tórax complementa, avalia extensão e afasta outras doenças — não confirma nem exclui sozinha.",
    "Prova tuberculínica não diagnostica doença ativa: indica infecção. Leitura da enduração em milímetros, 48 a 72 horas depois.",
    "Corte atual para tratar infecção latente: 5 mm ou mais nas indicações previstas, independentemente de BCG prévia. IGRA é alternativa onde disponível.",
    "Em criança, o diagnóstico usa o sistema de pontuação, somando quadro clínico-radiológico, contato com adulto bacilífero, prova tuberculínica e estado nutricional."
  ],
  tabelas: [{
    t: "Qual exame para quê",
    c: ["Exame", "Serve para", "Não serve para"],
    l: [
      ["TRM-TB", "Diagnóstico e resistência à rifampicina", "Acompanhar tratamento"],
      ["Baciloscopia", "Diagnóstico onde não há TRM e controle mensal", "Detectar resistência"],
      ["Cultura + TS", "Confirmar e definir resistência", "Resposta rápida (semanas)"],
      ["Radiografia", "Extensão e diagnóstico diferencial", "Fechar diagnóstico sozinha"],
      ["Prova tuberculínica / IGRA", "Infecção latente", "Doença ativa"]
    ]
  }],
  pega: "TRM-TB para diagnosticar, baciloscopia para acompanhar. Inverter os dois é o erro mais cobrado do tema."
},

"Esquema básico, DOTS/TDO e reações adversas": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019",
  pontos: [
    "Esquema básico do adulto: 2 meses de RHZE e 4 meses de RH, em dose fixa combinada — seis meses ao todo.",
    "Meningoencefalite e forma osteoarticular: 2 meses de RHZE e 10 de RH, doze meses ao todo. Na meningoencefalite, corticoide associado por 1 a 3 meses.",
    "Menor de 10 anos não recebe etambutol: esquema RHZ.",
    "TDO é parte do tratamento, não um extra: a tomada é presenciada por profissional, idealmente diária. A estratégia DOTS tem cinco pilares — compromisso político, diagnóstico laboratorial, TDO, suprimento regular de medicamentos e sistema de informação.",
    "Abandono é 30 dias ou mais consecutivos sem tomar a medicação — e é exatamente o que o TDO existe para evitar.",
    "Rifampicina reduz a eficácia de contraceptivos hormonais: orientar método adicional é obrigação da consulta, não detalhe.",
    "Isoniazida causa neuropatia periférica — piridoxina resolve, e é a reação que mais faz a paciente querer parar."
  ],
  tabelas: [
    {
      t: "Esquemas",
      c: ["Situação", "Fase intensiva", "Manutenção", "Total"],
      l: [["Adulto, forma comum", "2 meses RHZE", "4 meses RH", "6 meses"],
          ["Meningoencefálica / osteoarticular", "2 meses RHZE", "10 meses RH", "12 meses"],
          ["Menor de 10 anos", "2 meses RHZ", "4 meses RH", "6 meses"]]
    },
    {
      t: "Reações adversas",
      c: ["Fármaco", "Menor", "Maior"],
      l: [
        ["Rifampicina", "Urina e suor alaranjados, intolerância gástrica", "Hepatotoxicidade, trombocitopenia, nefrite"],
        ["Isoniazida", "Neuropatia periférica (usar piridoxina)", "Hepatotoxicidade, psicose"],
        ["Pirazinamida", "Artralgia, hiperuricemia", "Hepatotoxicidade, rabdomiólise"],
        ["Etambutol", "Náusea", "Neurite óptica — avaliar visão"]
      ]
    }
  ],
  numeros: ["Suspender por hepatotoxicidade: transaminases > 3× o normal COM sintomas, ou > 5× sem sintomas."],
  pega: "Reação menor se maneja sem parar o esquema. Parar tratamento por artralgia ou urina laranja é perder o paciente por um efeito esperado."
},

"Contatos, BCG, tratamento da ILTB e notificação": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019 · Guia de Vigilância em Saúde",
  pontos: [
    "Todo contato de caso pulmonar é avaliado. Sintomático, investiga doença ativa; assintomático, investiga infecção latente com prova tuberculínica ou IGRA e radiografia.",
    "Contato não é só quem mora junto: é quem convive em ambiente fechado — trabalho, escola, instituição.",
    "Tratar a infecção latente é o que evita o caso futuro. É intervenção de vigilância, não de assistência individual apenas.",
    "Criança contato menor de 10 anos, sem doença ativa e com PT ≥ 5 mm: trata ILTB.",
    "Recém-nascido contato de bacilífero NÃO recebe BCG de imediato: faz quimioprofilaxia primária com isoniazida ou rifampicina por 3 meses, depois PT — se negativa, vacina; se positiva, completa o tratamento da ILTB.",
    "BCG: dose única ao nascer, até 4 anos 11 meses e 29 dias. Protege contra as formas graves — miliar e meníngea —, não contra a forma pulmonar do adulto. Não se revacina por ausência de cicatriz.",
    "Notificação semanal pelo Sinan; o acompanhamento mensal alimenta o mesmo sistema até o encerramento.",
    "Encerramentos: cura, abandono, óbito por TB ou por outra causa, transferência, falência e mudança de diagnóstico — cada um vira indicador do programa."
  ],
  tabelas: [{
    t: "Opções para infecção latente",
    c: ["Esquema", "Duração", "Quando preferir"],
    l: [
      ["Isoniazida", "6 a 9 meses (270 doses)", "Padrão histórico, mais barato"],
      ["Rifampicina", "4 meses (120 doses)", "Maiores de 50 anos, crianças, hepatopatas, intolerância à isoniazida"],
      ["Rifapentina + isoniazida", "3 meses, 12 doses semanais", "Melhor adesão, onde disponível"]
    ]
  }],
  pega: "BCG protege a criança das formas graves, não a população da transmissão. Esperar que a vacina controle a epidemia é ler errado o papel dela."
},

/* ---------------------------------------------------- Saúde indígena */

"SESAI, subsistema no SUS, DSEI e organização da rede": {
  fonte: "Lei 9.836/1999 (Lei Arouca) · Política Nacional de Atenção à Saúde dos Povos Indígenas · Decreto 7.336/2010",
  pontos: [
    "A Lei 9.836/1999, a Lei Arouca, acrescentou à Lei 8.080/90 o Subsistema de Atenção à Saúde Indígena — dentro do SUS, e não paralelo a ele.",
    "A SESAI, criada em 2010, é a secretaria do Ministério da Saúde que gere o subsistema. Antes disso a responsabilidade era da FUNASA.",
    "O território se organiza em 34 DSEI, recortados por critérios étnicos e territoriais — não por divisa de estado ou de município. É a diferença mais cobrada.",
    "A rede vai da Unidade Básica de Saúde Indígena e do Polo Base, na aldeia, até a CASAI, que apoia quem precisa se deslocar para média e alta complexidade na rede do SUS.",
    "As Equipes Multidisciplinares de Saúde Indígena incluem o agente indígena de saúde e o agente indígena de saneamento, que fazem a ponte linguística e cultural com a comunidade.",
    "Controle social próprio, em três níveis: Conselhos Locais, Conselhos Distritais (CONDISI) e o Fórum de Presidentes dos CONDISI.",
    "O subsistema é complementar: média e alta complexidade acontecem na rede do SUS, com responsabilidade de municípios e estados.",
    "O sistema de informação próprio é o SIASI."
  ],
  tabelas: [{
    t: "A rede, de baixo para cima",
    c: ["Nível", "O que é"],
    l: [
      ["UBSI", "Unidade básica dentro da aldeia"],
      ["Polo Base", "Retaguarda das aldeias de uma área; sede das EMSI"],
      ["DSEI", "Distrito sanitário, base étnica e territorial — são 34"],
      ["CASAI", "Casa de apoio no município de referência, para quem se desloca"],
      ["Rede SUS", "Média e alta complexidade, com municípios e estados"]
    ]
  }],
  pega: "Subsistema não é sistema à parte: o indígena tem direito a todo o SUS. O subsistema existe para garantir acesso diferenciado, não acesso menor."
},

"PNASPI, legislação, financiamento e principais desafios": {
  fonte: "Política Nacional de Atenção à Saúde dos Povos Indígenas (Portaria MS 254/2002) · Lei 9.836/1999",
  pontos: [
    "A PNASPI foi aprovada pela Portaria 254/2002, com o propósito de garantir aos povos indígenas o acesso integral à saúde, respeitando suas especificidades culturais.",
    "Diretrizes: organização em DSEI; preparação de recursos humanos para o contexto intercultural; monitoramento das ações; articulação dos sistemas tradicionais com o oficial; uso adequado de medicamentos; ambientes saudáveis e saneamento; controle social.",
    "Atenção diferenciada é o conceito-chave: reconhecer e articular a medicina tradicional — parteiras, pajés, raizeiros — em vez de sobrepor-se a ela. Equidade aqui é tratar diferente quem é diferente.",
    "Financiamento federal específico, repassado aos DSEI, e incentivo para municípios que executam ações em área indígena.",
    "Perfil epidemiológico de dupla carga: alta incidência de doenças infecciosas e parasitárias, tuberculose, malária e desnutrição infantil, somada ao crescimento de hipertensão, diabetes, obesidade e uso de álcool.",
    "A mortalidade infantil indígena permanece bem acima da média nacional — é o indicador que resume o problema.",
    "Determinantes fora do setor saúde pesam mais que o serviço: terra, água potável, saneamento, segurança alimentar e conflito territorial."
  ],
  tabelas: [{
    t: "Desafios que a prova costuma listar",
    c: ["Desafio", "Efeito prático"],
    l: [
      ["Rotatividade de profissionais", "Perda de vínculo e de continuidade"],
      ["Distância e logística", "Acesso demorado à média complexidade"],
      ["Barreira linguística e cultural", "Adesão baixa, diagnóstico tardio"],
      ["Saneamento e água", "Diarreia, parasitoses, desnutrição"],
      ["Sub-registro", "Indicadores que subestimam o problema"],
      ["Conflito territorial", "Violência e insegurança alimentar"]
    ]
  }],
  pega: "Se a questão pedir o princípio que organiza a política, a resposta é atenção diferenciada — e não 'universalidade', que vale para todo o SUS."
}

};
