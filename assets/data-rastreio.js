/* ---------------------------------------------------------------
   RASTREAMENTO — base de conteúdo

   Fontes, todas do Ministério da Saúde:

   Colo do útero — Diretrizes Brasileiras para o Rastreamento do
   Câncer de Colo do Útero, Parte I: rastreamento organizado com
   testes moleculares para DNA-HPV oncogênico. Portaria Conjunta
   SAES/SECTICS nº 13, de 29 de julho de 2025.

   Mama — Sumário Executivo das Diretrizes para a Detecção Precoce
   do Câncer de Mama no Brasil. INCA, 2017.

   Próstata — Nota Técnica nº 9/2023-COSAH/CGACI/DGCI/SAPS/MS,
   que reafirma a Nota Técnica Conjunta SAS/MS e INCA nº 001/2015.

   Diabete melito tipo 2 — PCDT do DM2, Portaria SCTIE/MS nº 13, de
   21 de fevereiro de 2026, seção 4. O detalhe está no assunto
   Diabetes, aba Rastrear.
----------------------------------------------------------------*/

const RAST_IDADE = [
  {
    idade: "25 anos", cor: "#9E3A68",
    quem: "Mulheres e pessoas com colo do útero",
    oque: "Teste de DNA-HPV oncogênico",
    intervalo: "A cada 5 anos, se negativo",
    nota: "Antes dos 25 não se rastreia — nem com teste molecular, nem com citologia.",
  },
  {
    idade: "35 anos", cor: "#2F6F5F",
    quem: "Todos",
    oque: "Glicemia de jejum",
    intervalo: "A cada 3 anos, se normal",
    nota: "Antes disso, se houver sobrepeso ou obesidade e ao menos um fator de risco. Detalhe no assunto Diabetes.",
  },
  {
    idade: "50 anos", cor: "#B33A2F",
    quem: "Mulheres",
    oque: "Mamografia",
    intervalo: "Bienal",
    nota: "O Ministério recomenda contra o rastreamento com mamografia antes dos 50 anos.",
  },
];

const RAST_ENCERRAR = [
  { o: "Mama", quando: "Aos 70 anos", cor: "#B33A2F", d: "Recomendação contrária fraca dos 70 aos 74, e contrária forte a partir dos 75." },
  { o: "Colo do útero", quando: "Após os 60", cor: "#9E3A68", d: "Encerra-se quando o último teste feito acima dos 60 anos vier negativo. Quem nunca testou e tem mais de 60 deve fazer um teste; se negativo, encerra." },
  { o: "Diabete melito tipo 2", quando: "Sem idade de encerramento", cor: "#2F6F5F", d: "O PCDT não define idade para parar de rastrear." },
];

const RAST_PROSTATA = {
  fonte: "Nota Técnica nº 9/2023 · SAPS/MS",
  posicao: "O Ministério da Saúde não recomenda o rastreamento populacional do câncer de próstata.",
  porque: [
    "As revisões sistemáticas mostram que rastrear aumenta muito o diagnóstico, sem redução significativa da mortalidade específica, e com danos importantes.",
    "Em autópsias de homens que morreram por outras causas, 37% dos que tinham entre 40 e 50 anos já apresentavam achados histológicos de câncer — e 60% acima dos 79. Rastrear encontraria boa parte desses tumores indolentes.",
    "O sobretratamento cobra caro em disfunção sexual e urinária. A investigação em si traz biópsia, dor, sangramento, infecção, ansiedade.",
    "Muitos homens com doença menos agressiva morrem com o câncer, não do câncer — e no momento do diagnóstico nem sempre dá para saber qual é qual.",
  ],
  conduta: [
    { t: "Não convocar assintomáticos", d: "Nada de campanhas para PSA ou toque retal em homens sem sintomas." },
    { t: "Quem pedir, decide informado", d: "Ao homem que procurar espontaneamente o exame, expor o balanço entre riscos e benefícios e decidir junto." },
    { t: "Sintoma urinário investiga-se", d: "Dificuldade de urinar, jato fraco, aumento da frequência de dia ou à noite, sangue na urina — investigação diagnóstica célere, com a atenção primária como porta de entrada." },
    { t: "Risco elevado tem exame", d: "PSA e toque retal seguem indicados na avaliação de homens com risco elevado de neoplasia significativa e naqueles com sintomas, para confirmação diagnóstica." },
  ],
  risco: "Idade é o principal fator: mais incidente a partir da sexta década. Somam-se histórico familiar de câncer de próstata antes dos 60 anos, obesidade para tipos avançados, e exposição ocupacional a agentes químicos, responsável por 1% dos casos.",
};

const RAST_MAMA = {
  fonte: "Diretrizes para a Detecção Precoce do Câncer de Mama no Brasil · INCA, 2017",
  faixas: [
    { idade: "Menos de 50 anos", dir: "contra", forca: "forte", cor: "#8E1F2F", d: "Os possíveis danos claramente superam os possíveis benefícios." },
    { idade: "50 a 59 anos", dir: "favor", forca: "fraca", cor: "#C9A227", d: "Benefícios e danos provavelmente são semelhantes." },
    { idade: "60 a 69 anos", dir: "favor", forca: "fraca", cor: "#2E8B6F", d: "Os possíveis benefícios provavelmente superam os possíveis danos." },
    { idade: "70 a 74 anos", dir: "contra", forca: "fraca", cor: "#D97A1F", d: "O equilíbrio entre danos e benefícios é incerto." },
    { idade: "75 anos ou mais", dir: "contra", forca: "forte", cor: "#8E1F2F", d: "Os possíveis danos provavelmente superam os possíveis benefícios." },
  ],
  periodicidade: "Bienal nas faixas recomendadas — recomendação favorável forte, comparada a periodicidades menores que a bienal.",
  contra: [
    { o: "Autoexame das mamas", forca: "contrária fraca", d: "Contra o ensino do autoexame como método de rastreamento." },
    { o: "Ultrassonografia", forca: "contrária forte", d: "Isolada ou somada à mamografia." },
    { o: "Ressonância magnética", forca: "contrária forte", d: "Em mulheres com risco padrão, isolada ou como complemento à mamografia." },
    { o: "Termografia", forca: "contrária forte", d: "Isolada ou somada à mamografia." },
    { o: "Tomossíntese", forca: "contrária forte", d: "Isolada ou somada à mamografia convencional." },
  ],
  semRec: {
    o: "Exame clínico das mamas",
    d: "Ausência de recomendação: o equilíbrio entre possíveis danos e benefícios é incerto. Não é um \"não\" — é a diretriz dizendo que não sabe.",
  },
  sinais: [
    "Qualquer nódulo mamário em mulheres com mais de 50 anos",
    "Nódulo mamário em mulheres com mais de 30 anos que persista por mais de um ciclo menstrual",
    "Nódulo de consistência endurecida e fixo, ou que venha aumentando de tamanho, em mulheres adultas de qualquer idade",
    "Descarga papilar sanguinolenta unilateral",
    "Lesão eczematosa da pele que não responde a tratamento tópico",
    "Homens com mais de 50 anos com tumoração palpável unilateral",
    "Presença de linfadenopatia axilar",
    "Aumento progressivo da mama com sinais de edema, como pele em casca de laranja",
    "Retração na pele da mama",
    "Mudança no formato do mamilo",
  ],
  precoce: [
    { t: "Estratégias de conscientização", d: "Recomendação favorável fraca, para o diagnóstico precoce." },
    { t: "Confirmação em um único serviço", d: "Toda a avaliação diagnóstica, após a identificação de sinais e sintomas suspeitos na atenção primária, feita em um mesmo centro de referência. Favorável fraca." },
  ],
};

const RAST_COLO = {
  fonte: "Portaria Conjunta SAES/SECTICS nº 13, de 29 de julho de 2025",
  virada: "O rastreamento deixa de ser citológico. O exame primário passa a ser o teste de DNA-HPV oncogênico com genotipagem parcial ou estendida — recomendação forte, por reduzir mais a incidência e a mortalidade. O coteste, isto é, citologia e teste de HPV ao mesmo tempo, não é recomendado.",
  quem: [
    { t: "Início aos 25 anos", d: "Entre 25 e 29 a recomendação é condicional; a partir dos 30, forte.", cor: "#2E8B6F" },
    { t: "Antes dos 25, não rastrear", d: "Recomendação forte. Se o teste for feito por engano nessa faixa, o resultado não deve ser considerado, qualquer que seja o tipo viral — orienta-se a mulher sobre a história natural da infecção e o início aos 25.", cor: "#B3242F" },
    { t: "Encerrar após os 60", d: "Quando o último teste feito acima dos 60 anos vier negativo. Quem tem mais de 60 e nunca testou deve fazer um teste; negativo, encerra-se; positivo, segue o manejo de risco padrão.", cor: "#8A6516" },
    { t: "Independe da vacinação", d: "O status vacinal contra HPV não muda o rastreamento por ora, embora se recomende vincular os dois registros.", cor: "#7A56A6" },
  ],
  conduta: [
    { res: "Negativo", cor: "#2E8B6F", acao: "Repetir em 5 anos", d: "Recomendação forte, evidência de certeza alta." },
    { res: "HPV 16 e/ou 18", cor: "#B3242F", acao: "Colposcopia", d: "Encaminhamento direto, sem passar por citologia." },
    { res: "Outros tipos oncogênicos", cor: "#D97A1F", acao: "Citologia reflexa", d: "De preferência na mesma amostra e sem novo pedido. Alterada (ASC-US ou mais) ou insatisfatória, encaminhar para colposcopia; negativa, repetir o teste em 12 meses." },
    { res: "Inválido para todos os tipos", cor: "#6B7079", acao: "Nova coleta", d: "Nova amostra colhida por profissional de saúde, para repetir o teste." },
  ],
  apos: [
    { t: "Triagem negativa", d: "Depois de colposcopia ou citologia reflexa negativa, repetir o teste de DNA-HPV em 12 meses." },
    { t: "Novo teste negativo", d: "Retorno ao rastreamento de rotina, em 5 anos." },
    { t: "Novo teste positivo para 16 ou 18", d: "Colposcopia." },
    { t: "Novo teste positivo para outros tipos, com citologia reflexa ainda negativa", d: "Repetir em mais 12 meses. Se aos 24 meses da citologia reflexa inicial — ou a qualquer tempo depois — seguir positivo para qualquer tipo oncogênico, colposcopia, independentemente do resultado da nova citologia." },
  ],
  especiais: [
    { t: "HIV/aids e outras imunossupressões", cor: "#B3242F", d: "Iniciar após o começo da atividade sexual, e não aos 25. Intervalo de 3 anos, e não 5, após teste negativo. Qualquer tipo detectado leva à colposcopia, independentemente da citologia reflexa. E o rastreamento não se encerra." },
    { t: "Gestantes", cor: "#9E3A68", d: "Quem precisa regularizar o rastreamento pode fazer o teste no pré-natal. A coleta é segura na gestação, inclusive de endocérvice e em qualquer idade gestacional." },
    { t: "Pós-menopausa", cor: "#2E7D9A", d: "As mesmas orientações do risco padrão." },
    { t: "Histerectomia total por lesão benigna", cor: "#2E8B6F", d: "Sem história de diagnóstico ou tratamento de lesão de alto grau e com exames anteriores normais, pode ser excluída do rastreamento." },
    { t: "Histerectomia por lesão precursora ou câncer", cor: "#8E1F2F", d: "Manter o rastreamento, com coleta vaginal, por pelo menos 25 anos ou indefinidamente." },
    { t: "Sem história de atividade sexual", cor: "#6B7079", d: "Não devem ser submetidas ao rastreamento — recomendação forte." },
    { t: "Mais de 60 anos com NIC2, NIC3 ou AIS tratados", cor: "#8A6516", d: "Manter o rastreamento enquanto for possível e aceitável, até 25 anos após o tratamento." },
  ],
  coleta: [
    "A amostra deve ser obtida por médico ou enfermeiro, com aconselhamento prévio.",
    "Deve haver disponibilização de insumos para autocoleta, oferecida por profissional de saúde.",
    "Se a citologia reflexa for necessária e a amostra inicial tiver vindo de autocoleta, é preciso nova coleta por profissional.",
    "Pessoas LBTQIA+ seguem as mesmas orientações do risco padrão, com oferta de autocoleta a considerar.",
  ],
};
