/* ---------------------------------------------------------------
   DIABETE MELITO TIPO 2 — base de conteúdo

   Fonte: Protocolo Clínico e Diretrizes Terapêuticas do Diabete
   Melito Tipo 2, Ministério da Saúde / Conitec.
   Portaria SCTIE/MS nº 13, de 21 de fevereiro de 2026, que revoga
   a Portaria SECTICS/MS nº 7, de 28 de fevereiro de 2024.

   O recorte é o do SUS: acarbose, inibidores de DPP-4, agonistas
   de GLP-1, meglitinidas e tiazolidinedionas não estão
   incorporados e por isso não aparecem aqui.
----------------------------------------------------------------*/

const DM_DIAGNOSTICO = {
  titulo: "Critérios diagnósticos",
  colunas: ["Normal", "Pré-diabetes", "DM2"],
  linhas: [
    { exame: "Glicemia de jejum", un: "mg/dL", v: ["< 100", "100–125", "≥ 126"] },
    { exame: "Glicemia aleatória com sintomas", un: "mg/dL", v: ["—", "—", "≥ 200"] },
    { exame: "TTGO 1 hora", un: "mg/dL", v: ["< 155", "155–208", "≥ 209"] },
    { exame: "TTGO 2 horas", un: "mg/dL", v: ["< 140", "140–199", "≥ 200"] },
    { exame: "HbA1c", un: "%", v: ["< 5,7", "5,7–6,4", "≥ 6,5"] },
  ],
  nota: "Jejum de 8 a 12 horas; TTGO com carga de 75 g de glicose anidra. No assintomático, o diagnóstico exige dois resultados alterados — do mesmo teste em amostras diferentes, ou de dois testes na mesma amostra. A dupla mais prática é glicemia de jejum e HbA1c na mesma coleta. No sintomático, uma glicemia aleatória ≥ 200 já confirma.",
};

const DM_METAS = {
  titulo: "Metas por população",
  colunas: [
    { rot: "Adulto com DM2", cor: "#2E8B6F" },
    { rot: "Idoso saudável", cor: "#C9A227" },
    { rot: "Idoso comprometido", cor: "#D97A1F" },
    { rot: "Idoso muito comprometido", cor: "#C1462F" },
  ],
  linhas: [
    { exame: "HbA1c", un: "%", v: ["< 7,0", "< 7,5", "< 8,0", "Evitar sintomas"] },
    { exame: "Glicemia de jejum", un: "mg/dL", v: ["80–130", "80–130", "90–150", "100–180"] },
    { exame: "Glicemia 2 h pós-prandial", un: "mg/dL", v: ["< 180", "< 180", "< 180", "—"] },
    { exame: "Glicemia ao deitar", un: "mg/dL", v: ["90–150", "90–150", "100–180", "110–200"] },
  ],
  legenda: [
    ["Idoso saudável", "Poucas comorbidades crônicas, estado funcional e cognitivo preservados."],
    ["Idoso comprometido", "Múltiplas comorbidades crônicas, comprometimento funcional leve a moderado e cognitivo moderado."],
    ["Idoso muito comprometido", "Doença terminal, IC classe NYHA IV, doença pulmonar em oxigenoterapia, diálise, comprometimento funcional e cognitivo grave."],
  ],
  nota: "Em criança e adolescente a meta de HbA1c é < 7,0%, com glicemia de jejum entre 70 e 130 mg/dL. No idoso vulnerável, HbA1c < 7,0% associou-se a maior mortalidade — metas agressivas são desencorajadas nessa população.",
};

const DM_FLUXO = [
  {
    passo: "Onde começa",
    cor: "#2E8B6F",
    itens: [
      { t: "Menos de 3 meses de diagnóstico e sem fator de risco", d: "Só mudança de modo de vida. Reavaliar em 3 meses e, se não houver resposta, iniciar metformina." },
      { t: "3 meses ou mais de diagnóstico, ou com fator de risco", d: "Metformina junto com a mudança de modo de vida, já de saída. O atraso em introduzir e intensificar é determinante para as complicações crônicas." },
    ],
  },
  {
    passo: "Atalho para a insulina",
    cor: "#B3242F",
    itens: [
      { t: "Insulinoterapia desde o início", d: "HbA1c > 9%, glicemia de jejum ≥ 300 mg/dL, sintomas de hiperglicemia aguda (poliúria, polidipsia, perda ponderal) ou intercorrência médica e internação por DM2." },
      { t: "HbA1c > 7,5% ao diagnóstico", d: "Pode-se considerar já começar com terapia combinada. A segunda linha sugerida é sulfonilureia, iSGLT2 ou insulina." },
    ],
  },
  {
    passo: "Escalonamento",
    cor: "#2E7D9A",
    itens: [
      { t: "1. Metformina", d: "Monoterapia, com titulação lenta até 2.550 mg/dia." },
      { t: "2. Somar sulfonilureia", d: "Se não atingiu a meta ou não tolerou a metformina. No idoso, preferir gliclazida à glibenclamida." },
      { t: "3. Somar dapagliflozina", d: "Só para quem preenche os critérios de elegibilidade do SUS. Quem não preenche vai direto para a insulinoterapia." },
      { t: "4. Insulinoterapia", d: "Os hipoglicemiantes orais podem ser mantidos a critério médico, sobretudo a metformina nos casos com resistência à insulina." },
    ],
  },
  {
    passo: "Ritmo de reavaliação",
    cor: "#8A6516",
    itens: [
      { t: "Avaliar o estado glicêmico em 2 a 6 meses, no máximo", d: "Com a HbA1c na meta, dosar pelo menos duas vezes por ano. Fora da meta, a cada 3 meses, e intensificar o tratamento." },
      { t: "Reavaliar o esquema", d: "Sempre que houver diagnóstico de doença renal do diabetes ou de doença cardiovascular." },
    ],
  },
];

const DM_CLASSES = [
  {
    id: "dm-metformina",
    grupo: "Orais no SUS",
    nome: "Metformina",
    cor: "#2F6F5F",
    primeiraLinha: true,
    drogas: [
      "Cloridrato de metformina 500 mg e 850 mg",
      "Início: 500 ou 850 mg, 1×/dia, durante ou após o café ou o jantar",
      "Após 5 a 7 dias sem eventos adversos: 500 ou 850 mg, 2×/dia",
      "Dose máxima efetiva: 850 mg no café, almoço e jantar — 2.550 mg/dia",
    ],
    mecanismo:
      "Biguanida. Reduz a produção hepática de glicose e aumenta a captação muscular de glicose, sem estimular a secreção de insulina.",
    indicacoes: [
      "Primeira opção terapêutica no DM2",
      "Também primeira escolha no idoso: boa eficácia, baixo risco de hipoglicemia e benefício cardiovascular",
      "Manter ao iniciar insulina, para preservar o benefício glicêmico e metabólico",
      "Criança e adolescente assintomáticos com HbA1c < 8,5% e função renal normal",
    ],
    contraindicacoes: [
      "TFG < 30 mL/min/1,73 m²",
      "Gravidez e amamentação",
      "Insuficiência hepática descompensada, insuficiência cardíaca ou pulmonar",
      "Acidose grave, sepse, hipotensão, infecção grave",
      "Alcoolismo",
      "Pré e pós-operatório, e exame de imagem com contraste",
    ],
    adversos:
      "Gastrointestinais: diarreia, náuseas, vômitos, dor e distensão abdominal, dispepsia, flatulência, gosto metálico. Deficiência de vitamina B12. Acidose láctica é rara.",
    pearl:
      "Reduz HbA1c em 1,5% a 2% e a glicemia de jejum em 60 a 70 mg/dL, sem hipoglicemia, sem ganho de peso e com custo baixo. Entre TFG 30 e 45 não passar de 1 g/dia; abaixo de 30, suspender. Começar baixo e subir devagar resolve a maior parte da intolerância gastrointestinal — e a formulação de liberação prolongada, na Farmácia Popular, é mais bem tolerada.",
  },
  {
    id: "dm-sulfonilureia",
    grupo: "Orais no SUS",
    nome: "Sulfonilureias",
    cor: "#B8871B",
    primeiraLinha: false,
    drogas: [
      "Gliclazida MR 30 e 60 mg, 1×/dia — máximo 120 mg/dia",
      "Gliclazida 80 mg",
      "Glibenclamida 5 mg, 1 a 2×/dia — máximo 20 mg/dia",
    ],
    mecanismo:
      "Secretagogos de insulina: promovem a liberação de insulina pelas células beta pancreáticas. É esse mesmo mecanismo que traz o risco de hipoglicemia.",
    indicacoes: [
      "Segunda linha, associada à metformina, quando é preciso intensificar",
      "No idoso, preferir gliclazida à glibenclamida",
      "Gliclazida MR quando há hipoglicemia recorrente ou risco aumentado dela",
      "Gliclazida MR pode ser usada na insuficiência renal leve a moderada, com monitoramento cauteloso",
    ],
    contraindicacoes: [
      "TFG < 30 mL/min/1,73 m² — a gliclazida MR pode ser considerada com muita cautela e dose reduzida",
      "Gravidez e lactação",
      "Insuficiência hepática",
      "Infecção grave, sinais de deficiência grave de insulina",
      "Glibenclamida: não recomendada a partir dos 60 anos",
    ],
    adversos:
      "Hipoglicemia, mais frequente e mais grave com a glibenclamida. Ganho de peso.",
    pearl:
      "Eficácia igual à da metformina — 1,5% a 2% de HbA1c e 60 a 70 mg/dL de glicemia de jejum — mas ao custo de hipoglicemia e ganho de peso. No idoso, evitar tanto as de ação curta quanto as de ação prolongada; se for preciso usar, as de ação curta são preferidas, para não prolongar a hipoglicemia. Como a metformina, em geral não devem ser usadas em paciente internado.",
  },
  {
    id: "dm-isglt2",
    grupo: "Orais no SUS",
    nome: "iSGLT2 — dapagliflozina",
    cor: "#2E7D9A",
    primeiraLinha: false,
    drogas: ["Dapagliflozina 10 mg, 1×/dia"],
    mecanismo:
      "Inibe o cotransportador sódio-glicose 2 no túbulo proximal: bloqueia a reabsorção de glicose e de sódio, produzindo glicosúria e natriurese. O efeito independe da secreção e da ação da insulina.",
    indicacoes: [
      "Elegível quem precisa de segunda intensificação e tem 40 anos ou mais com doença cardiovascular estabelecida",
      "Doença estabelecida: infarto prévio, revascularização ou angioplastia coronária prévia, angina estável ou instável, AVC isquêmico ou AIT prévios, IC com fração de ejeção abaixo de 40%",
      "Ou homem a partir de 55 anos e mulher a partir de 60, com alto risco cardiovascular — definido por hipertensão, dislipidemia ou tabagismo",
      "Quem tem DM2 com doença renal crônica ou insuficiência cardíaca deve seguir também os PCDT dessas condições",
    ],
    contraindicacoes: [
      "TFG estimada persistentemente < 25 mL/min/1,73 m² — não iniciar",
      "Gravidez e lactação",
      "Cautela no idoso: mais cetoacidose euglicêmica e mais infecção urogenital, sobretudo em mulheres no primeiro mês",
    ],
    adversos:
      "Infecção do trato geniturinário, cetoacidose euglicêmica, fasciíte necrosante do períneo, depleção de volume intravascular.",
    pearl:
      "Reduz pouco a glicemia — 0,5% a 1,0% de HbA1c e cerca de 30 mg/dL de jejum — e quase não causa hipoglicemia. O que ela entrega está fora da glicemia: menos eventos e menos mortalidade cardiovascular, menos hospitalização por insuficiência cardíaca e preservação da função renal. Abaixo de TFG 45 a eficácia glicêmica cai. Atenção a uma divergência dentro do próprio PCDT: os Critérios de Inclusão e a seção 8.3.3 dizem homens a partir de 55 anos, enquanto a nota (g) do fluxograma diz 65 — o texto normativo diz 55.",
  },
  {
    id: "dm-basal",
    grupo: "Insulinas",
    nome: "Insulina basal — NPH e análogas de ação prolongada",
    cor: "#7A56A6",
    primeiraLinha: false,
    drogas: [
      "Insulina humana NPH 100 U/mL",
      "Análogas de ação prolongada: glargina 100 U, glargina 300 U, degludeca",
      "Início: 10 U, ou 0,1 a 0,2 U/kg, à noite antes de dormir",
      "Titular 2 U a cada 3 dias até a glicemia de jejum entre 80 e 130 mg/dL",
    ],
    mecanismo:
      "Mantém a glicemia entre as refeições e durante o sono. As análogas de ação prolongada dão menos hipoglicemia noturna e total que a NPH; só a degludeca mostrou menos hipoglicemia grave que NPH e glargina.",
    indicacoes: [
      "Falha do controle glicêmico com os hipoglicemiantes orais disponíveis",
      "HbA1c > 9% ou glicemia de jejum ≥ 300 mg/dL",
      "Sintomas de hiperglicemia aguda, intercorrência médica ou internação por DM2",
      "Análogas de ação prolongada priorizadas em: risco de hipoglicemia noturna e grave (degludeca), IMC < 30, idoso, grande variabilidade glicêmica, redução das funções renal e hepática, gestante, e dificuldade com múltiplas doses",
    ],
    contraindicacoes: [
      "Não há contraindicação absoluta",
      "Vigiar hipoglicemia — é o principal evento adverso, com risco de perda de consciência",
      "Reações alérgicas são raras, em geral cutâneas",
    ],
    adversos:
      "Hipoglicemia, sobretudo no início e nas intensificações. Ganho de peso.",
    pearl:
      "Se a glicemia de jejum cair abaixo de 70 ou houver hipoglicemia noturna, reduzir 2 a 4 U. Com o jejum na meta mas a HbA1c ainda alta, entra a segunda dose de NPH: pegar 80% da dose noturna e dividir em 2/3 pela manhã e 1/3 à noite. Reconheça a basal em excesso — dose acima de 0,5 U/kg/dia, queda maior que 50 mg/dL entre o deitar e o despertar, pós-prandial acima de 180 com jejum na meta, hipoglicemias e grande variabilidade. A troca de NPH 1×/dia por glargina é 1 U para 1 U; vindo de duas ou mais doses, reduzir 20% do total.",
  },
  {
    id: "dm-bolus",
    grupo: "Insulinas",
    nome: "Insulina bolus — regular e análogas de ação rápida",
    cor: "#9E3A68",
    primeiraLinha: false,
    drogas: [
      "Insulina humana regular 100 U/mL",
      "Análogas de ação rápida 100 U/mL",
      "Primeira dose: 3 a 4 U na refeição de maior glicemia pós-prandial",
      "Titular 1 U, duas vezes por semana, até pós-prandial entre 90 e 180 mg/dL",
    ],
    mecanismo:
      "Cobre a necessidade de insulina depois das refeições e corrige hiperglicemias. O nome vem da ação rápida, não da forma de administrar.",
    indicacoes: [
      "HbA1c acima da meta com glicemia de jejum adequada, já em duas doses diárias de NPH",
      "Hiperglicemia pós-prandial acima de 180 mg/dL com pré-prandial adequada",
      "Segunda e terceira doses nas refeições cuja pós-prandial siga acima de 180 mg/dL",
    ],
    contraindicacoes: [
      "Não há contraindicação absoluta",
      "Vigiar hipoglicemia",
    ],
    adversos: "Hipoglicemia. Ganho de peso.",
    pearl:
      "A dose total diária fica entre 0,5 e 1,0 U/kg/dia, chegando a 1,5 no muito obeso e resistente, dividida meio a meio entre basal e bolus. Para corrigir, o fator de correção inicial é 50 — 1 U para cada 50 mg/dL acima do limite superior da meta — ou, alternativamente, 1800 dividido pela dose total diária. Depois de acertar a glicemia após o jantar, lembre de reduzir a dose de antes de dormir.",
  },
];

const DM_RIM = {
  titulo: "Estratégia conforme a função renal",
  nota: "TFG em mL/min/1,73 m², estimada pela CKD-EPI a partir da creatinina sérica. O rastreamento da doença renal do diabetes usa a razão albumina/creatinina em amostra isolada de urina mais a TFG, já no diagnóstico do DM2, repetido de 1 a 4 vezes ao ano conforme o risco. Se a TFG cair mais de 30%, suspender e investigar estenose de artéria renal.",
  faixas: [
    { tfg: "TFG > 60 com RAC > 30", cor: "#2E8B6F", metfor: "Metformina mantida", meta: "Meta de HbA1c 7% a 7,9%", extra: "Controle adicional: insulina ou gliclazida MR" },
    { tfg: "TFG 59–45", cor: "#C9A227", metfor: "Metformina mantida", meta: "Meta de HbA1c 7% a 7,9%", extra: "Controle adicional: insulina ou gliclazida MR" },
    { tfg: "TFG 44–30", cor: "#D97A1F", metfor: "Metformina reduzida para ≤ 1 g/dia", meta: "", extra: "Controle adicional: insulina; gliclazida MR pode ser considerada" },
    { tfg: "TFG 29–20", cor: "#C1462F", metfor: "Evitar metformina", meta: "", extra: "Controle adicional: insulina. Cautela com gliclazida MR" },
    { tfg: "TFG < 20", cor: "#8E1F2F", metfor: "Evitar metformina", meta: "", extra: "Controle adicional: insulina. Evitar sulfonilureias" },
  ],
  rodape: "Os iSGLT2 são recomendados em todas as faixas, conforme os critérios de inclusão do PCDT — a dapagliflozina não deve ser iniciada com TFG < 25.",
};

const DM_HIPO = {
  titulo: "Hipoglicemia",
  intro: "Glicemia aleatória abaixo de 70 mg/dL. É a complicação aguda mais frequente e o principal fator que limita o controle glicêmico.",
  niveis: [
    {
      n: "Nível 1", faixa: "≥ 54 e < 70 mg/dL", rot: "Alerta", cor: "#C9A227",
      obs: "Identificar e tratar, pelo risco de queda progressiva — sobretudo em quem não reconhece as hipoglicemias.",
      trat: "15 g de carboidrato de absorção rápida: 1 colher de sopa de açúcar ou mel, 150 mL de suco de laranja ou de refrigerante comum, 1 fruta, ou 4 bolachas maisena. Reavaliar em 15 minutos e repetir se não normalizou.",
    },
    {
      n: "Nível 2", faixa: "< 54 mg/dL", rot: "Clinicamente importante", cor: "#D97A1F",
      obs: "Limiar dos sintomas neuroglicopênicos: dificuldade de concentração, confusão mental, alteração visual, tontura. Episódios repetidos rebaixam o limiar de percepção.",
      trat: "Se consciente, 30 g de carboidrato de absorção rápida — mel, açúcar ou carboidrato em gel.",
    },
    {
      n: "Nível 3", faixa: "Qualquer valor", rot: "Emergência", cor: "#B3242F",
      obs: "Comprometimento grave da cognição ou coma, exigindo assistência de terceiros. Não depende de um valor de glicemia.",
      trat: "Intervenção de emergência médica.",
    },
  ],
  nota: "Alimentos com gordura retardam a resposta glicêmica. Controlar a quantidade de carboidrato evita o pico de hiperglicemia depois. Para prevenir hipoglicemia noturna, um lanche antes de dormir com carboidrato, proteína e gordura — um copo de leite, por exemplo.",
};
