/* ---------------------------------------------------------------
   ANTI-HIPERTENSIVOS — base de conteúdo
   Diretriz Brasileira de Hipertensão Arterial (DBHA) 2025
   SBC / SBH / SBN
----------------------------------------------------------------*/

const CLASSES = [
  {
    id: "tiaz",
    grupo: "Diuréticos",
    nome: "Tiazídicos e similares",
    cor: "#2E7D9A",
    primeiraLinha: true,
    drogas: [
      "Hidroclorotiazida 12,5–25 mg/dia",
      "Clortalidona 12,5–25 mg/dia",
      "Indapamida 1,5 mg/dia (SR)",
    ],
    mecanismo:
      "Inibem o cotransportador Na⁺/Cl⁻ no túbulo contorcido distal. No início reduzem volemia; no uso crônico o efeito anti-hipertensivo vem principalmente da queda da resistência vascular periférica.",
    indicacoes: [
      "Primeira linha, isolado ou em combinação",
      "Idoso e hipertensão sistólica isolada",
      "Pessoas negras (boa resposta, como os BCC)",
      "Hipertensão resistente (junto com espironolactona)",
      "Osteoporose e nefrolitíase por hipercalciúria — retêm cálcio",
    ],
    contraindicacoes: [
      "Gota / hiperuricemia sintomática",
      "Hiponatremia significativa",
      "TFG < 30 mL/min — perdem eficácia, trocar por diurético de alça",
      "Alergia grave a sulfonamida (relativa)",
    ],
    adversos:
      "HipoK⁺, hipoNa⁺, hipoMg²⁺, hiperuricemia, hiperglicemia, dislipidemia, hipercalcemia, disfunção erétil.",
    pearl:
      "Clortalidona e indapamida têm meia-vida mais longa e mais evidência de desfecho que a hidroclorotiazida — mas causam mais hipocalemia. Dose alta não aumenta muito o efeito pressórico e aumenta muito o efeito metabólico: pense em associar, não em subir dose.",
  },
  {
    id: "alca",
    grupo: "Diuréticos",
    nome: "De alça",
    cor: "#1E5E75",
    primeiraLinha: false,
    drogas: ["Furosemida 20–80 mg (1–2×/dia)", "Bumetanida"],
    mecanismo:
      "Inibem o cotransportador Na⁺/K⁺/2Cl⁻ na alça de Henle. Diurese potente, porém curta — por isso costumam exigir duas tomadas ao dia.",
    indicacoes: [
      "Hipertenso com DRC e TFG < 30 mL/min",
      "Insuficiência cardíaca com congestão",
      "Estados hipervolêmicos (síndrome nefrótica, cirrose)",
    ],
    contraindicacoes: [
      "Hipovolemia / desidratação",
      "Uso concomitante com aminoglicosídeo (ototoxicidade somada)",
      "Não é droga de escolha para HAS não complicada",
    ],
    adversos:
      "HipoK⁺, hipoNa⁺, hipoMg²⁺, hipoCa²⁺, alcalose metabólica hipoclorêmica, ototoxicidade dose-dependente, hiperuricemia.",
    pearl:
      "Ao contrário do tiazídico, a furosemida espolia cálcio. Regra de prova: tiazídico retém Ca²⁺ (bom na osteoporose), alça perde Ca²⁺ (útil na hipercalcemia).",
  },
  {
    id: "poupador",
    grupo: "Diuréticos",
    nome: "Antagonistas mineralocorticoides e poupadores de K⁺",
    cor: "#5C8A3C",
    primeiraLinha: false,
    drogas: [
      "Espironolactona 25–50 mg/dia",
      "Eplerenona 25–50 mg/dia",
      "Amilorida (associada a tiazídico)",
    ],
    mecanismo:
      "Bloqueiam o receptor mineralocorticoide no túbulo coletor (espironolactona, eplerenona) ou o canal epitelial de sódio (amilorida), reduzindo reabsorção de Na⁺ e retendo K⁺.",
    indicacoes: [
      "Quarta droga de escolha na hipertensão resistente (DBHA 2025)",
      "Hiperaldosteronismo primário",
      "Insuficiência cardíaca com fração de ejeção reduzida",
      "Cirrose com ascite",
    ],
    contraindicacoes: [
      "K⁺ > 5,5 mEq/L",
      "TFG < 30 mL/min (risco alto de hipercalemia)",
      "Associação com IECA/BRA sem monitorar potássio e creatinina",
    ],
    adversos:
      "Hipercalemia, ginecomastia e disfunção erétil (espironolactona — a eplerenona quase não faz), acidose metabólica hiperclorêmica.",
    pearl:
      "O estudo PATHWAY-2 consagrou a espironolactona como a quarta droga. Se der ginecomastia, troque por eplerenona — mesmo mecanismo, sem a ação antiandrogênica.",
  },
  {
    id: "ieca",
    grupo: "Bloqueio do SRAA",
    nome: "IECA — inibidores da ECA",
    cor: "#B33A2F",
    primeiraLinha: true,
    drogas: [
      "Enalapril 5–40 mg/dia (2×)",
      "Captopril 25–150 mg/dia (2–3×)",
      "Lisinopril 10–40 mg/dia",
      "Ramipril 2,5–10 mg/dia",
      "Perindopril 4–8 mg/dia",
    ],
    mecanismo:
      "Bloqueiam a enzima conversora, reduzindo angiotensina II (menos vasoconstrição e menos aldosterona) e acumulando bradicinina — daí a vasodilatação extra e também a tosse e o angioedema.",
    indicacoes: [
      "Primeira linha",
      "Nefroproteção: diabetes com albuminúria, DRC proteinúrica",
      "Insuficiência cardíaca com FE reduzida",
      "Pós-infarto e remodelamento ventricular",
      "Jovem, branco, hipertenso com renina alta",
    ],
    contraindicacoes: [
      "Gestação — absoluta (oligoidrâmnio, malformação renal, óbito fetal)",
      "Angioedema prévio com IECA — absoluta",
      "Estenose bilateral de artéria renal (ou unilateral em rim único)",
      "Hipercalemia (K⁺ > 5,5)",
      "Nunca junto com BRA ou alisquireno",
    ],
    adversos:
      "Tosse seca em 10–20% (mais em mulheres), angioedema, hipercalemia, elevação da creatinina, hipotensão de primeira dose, disgeusia (captopril).",
    pearl:
      "Subir até 30% na creatinina após iniciar IECA é esperado e não indica suspensão — é queda da pressão intraglomerular, justamente o efeito nefroprotetor. Acima disso, investigue estenose de artéria renal ou hipovolemia.",
  },
  {
    id: "bra",
    grupo: "Bloqueio do SRAA",
    nome: "BRA — bloqueadores do receptor AT1",
    cor: "#9E3A68",
    primeiraLinha: true,
    drogas: [
      "Losartana 50–100 mg/dia",
      "Valsartana 80–320 mg/dia",
      "Candesartana 8–32 mg/dia",
      "Olmesartana 20–40 mg/dia",
      "Telmisartana 40–80 mg/dia",
      "Irbesartana 150–300 mg/dia",
    ],
    mecanismo:
      "Bloqueiam seletivamente o receptor AT1 da angiotensina II. Como não mexem na bradicinina, praticamente não causam tosse.",
    indicacoes: [
      "Mesmas do IECA, com melhor tolerância",
      "Paciente que desenvolveu tosse com IECA",
      "Hipertenso com gota — losartana tem efeito uricosúrico",
      "Nefroproteção no diabético (irbesartana e losartana têm os grandes ensaios)",
    ],
    contraindicacoes: [
      "Gestação — absoluta, igual ao IECA",
      "Estenose bilateral de artéria renal",
      "Hipercalemia",
      "Associação com IECA",
    ],
    adversos:
      "Hipercalemia, elevação de creatinina, tontura. Angioedema é raríssimo, mas pode ocorrer.",
    pearl:
      "IECA e BRA têm eficácia equivalente em desfecho — a escolha é por custo e tolerância. O que não se faz é somar os dois: o ONTARGET mostrou mais lesão renal aguda, hipotensão e hipercalemia, sem ganho cardiovascular.",
  },
  {
    id: "bccdhp",
    grupo: "Bloqueadores de canal de cálcio",
    nome: "Di-hidropiridínicos",
    cor: "#B8871B",
    primeiraLinha: true,
    drogas: [
      "Anlodipino 2,5–10 mg/dia",
      "Nifedipino retard 20–60 mg/dia",
      "Lercanidipino 10–20 mg/dia",
      "Levanlodipino 2,5–5 mg/dia",
      "Felodipino 5–10 mg/dia",
    ],
    mecanismo:
      "Bloqueiam canais de cálcio tipo L do músculo liso arteriolar. Efeito predominantemente vascular, sem ação relevante sobre o nó sinusal ou a contratilidade.",
    indicacoes: [
      "Primeira linha",
      "Idoso e hipertensão sistólica isolada",
      "Pessoas negras",
      "Angina estável e angina vasoespástica (Prinzmetal)",
      "Doença arterial periférica",
      "Gestante — nifedipino é opção segura",
    ],
    contraindicacoes: [
      "Insuficiência cardíaca com FE reduzida descompensada (relativa — anlodipino é o mais seguro do grupo)",
      "Edema de membros inferiores importante",
      "Taquiarritmias (pela taquicardia reflexa)",
    ],
    adversos:
      "Edema maleolar dose-dependente, cefaleia, rubor facial, taquicardia reflexa, hiperplasia gengival, constipação leve.",
    pearl:
      "O edema do anlodipino é por vasodilatação arteriolar, não por retenção de sal — diurético não resolve. O que resolve é associar IECA ou BRA, que dilata a vênula e equilibra a pressão capilar. E nunca use nifedipino de ação rápida sublingual na crise hipertensiva: está proscrito por queda abrupta e imprevisível da PA, com risco de AVC e infarto.",
  },
  {
    id: "bccndhp",
    grupo: "Bloqueadores de canal de cálcio",
    nome: "Não di-hidropiridínicos",
    cor: "#8A6516",
    primeiraLinha: false,
    drogas: ["Verapamil 120–360 mg/dia", "Diltiazem 120–360 mg/dia"],
    mecanismo:
      "Além do efeito vascular, agem no nó sinusal e atrioventricular: reduzem frequência cardíaca e contratilidade (cronotropismo e inotropismo negativos).",
    indicacoes: [
      "Hipertenso com fibrilação atrial de alta resposta ventricular",
      "Angina, quando o betabloqueador é contraindicado (asma, por exemplo)",
      "Taquicardia supraventricular",
      "Enxaqueca (verapamil)",
    ],
    contraindicacoes: [
      "Insuficiência cardíaca com FE reduzida — absoluta",
      "Bloqueio atrioventricular de 2º ou 3º grau, doença do nó sinusal",
      "Bradicardia < 50 bpm",
      "Associação com betabloqueador — risco de bradiarritmia grave",
    ],
    adversos:
      "Bradicardia, bloqueio AV, constipação intensa (verapamil), piora de IC, hiperplasia gengival.",
    pearl:
      "Verapamil ou diltiazem + betabloqueador é uma das combinações mais cobradas como erro: os dois freiam o nó AV e a soma pode gerar bloqueio total.",
  },
  {
    id: "bb",
    grupo: "Simpaticolíticos",
    nome: "Betabloqueadores",
    cor: "#464C99",
    primeiraLinha: false,
    drogas: [
      "1ª geração, não seletivos: propranolol, nadolol",
      "2ª geração, cardiosseletivos (β1): atenolol, metoprolol, bisoprolol",
      "3ª geração, vasodilatadores: carvedilol (bloqueio α1), nebivolol (libera NO)",
    ],
    mecanismo:
      "Bloqueiam receptores β-adrenérgicos: reduzem débito cardíaco, frequência e liberação de renina. Os de 3ª geração somam vasodilatação e têm perfil metabólico melhor.",
    indicacoes: [
      "Não são primeira linha para HAS isolada — só entram se houver indicação específica",
      "Insuficiência cardíaca com FE reduzida: carvedilol, metoprolol succinato, bisoprolol",
      "Pós-infarto e doença coronariana / angina",
      "Fibrilação atrial (controle de frequência)",
      "Paciente em diálise",
      "Mulher com desejo de engravidar",
      "Enxaqueca, tremor essencial, hipertireoidismo, cirrose com varizes",
    ],
    contraindicacoes: [
      "Asma e DPOC broncoespástico — absoluta para os não seletivos",
      "Bloqueio AV de 2º ou 3º grau, bradicardia sinusal",
      "Insuficiência cardíaca aguda descompensada e choque cardiogênico",
      "Doença arterial periférica grave, fenômeno de Raynaud",
      "Feocromocitoma sem alfabloqueio prévio",
    ],
    adversos:
      "Bradicardia, broncoespasmo, fadiga, disfunção erétil, mascaramento dos sintomas de hipoglicemia no diabético, piora do perfil lipídico e glicêmico, insônia e pesadelos (propranolol, lipofílico).",
    pearl:
      "Nunca suspenda de forma abrupta: há hiper-regulação de receptores β e o rebote pode causar crise hipertensiva, angina e infarto — retire em 1 a 2 semanas. E lembre que o atenolol teve desempenho pior que outras classes na prevenção de AVC.",
  },
  {
    id: "alfa",
    grupo: "Simpaticolíticos",
    nome: "Alfabloqueadores",
    cor: "#7A56A6",
    primeiraLinha: false,
    drogas: ["Doxazosina 1–16 mg/dia", "Prazosina", "Terazosina"],
    mecanismo:
      "Bloqueiam receptores α1 pós-sinápticos na musculatura lisa vascular e no colo vesical e próstata.",
    indicacoes: [
      "Hipertenso com hiperplasia prostática benigna — trata as duas coisas",
      "Quinta droga na hipertensão resistente",
      "Feocromocitoma: fenoxibenzamina antes do betabloqueador",
    ],
    contraindicacoes: [
      "Insuficiência cardíaca (o ALLHAT mostrou mais IC com doxazosina)",
      "Hipotensão ortostática, idoso frágil com risco de queda",
    ],
    adversos:
      "Hipotensão de primeira dose com síncope, tontura postural, cefaleia, retenção hídrica, síndrome da íris flácida em cirurgia de catarata.",
    pearl:
      "Comece sempre com dose baixa à noite, para reduzir a síncope de primeira dose.",
  },
  {
    id: "central",
    grupo: "Simpaticolíticos",
    nome: "Ação central — agonistas α2 e imidazolínicos",
    cor: "#2F6F5F",
    primeiraLinha: false,
    drogas: [
      "Metildopa 500–2000 mg/dia",
      "Clonidina 0,1–0,8 mg/dia",
      "Rilmenidina, moxonidina",
    ],
    mecanismo:
      "Estimulam receptores α2 pré-sinápticos e imidazolínicos no bulbo, reduzindo o tônus simpático central.",
    indicacoes: [
      "Metildopa: hipertensão na gestação — segurança consagrada",
      "Clonidina: hipertensão refratária, abstinência, fogachos",
      "Alternativa quando as classes principais estão contraindicadas",
    ],
    contraindicacoes: [
      "Depressão (relativa)",
      "Metildopa: doença hepática ativa",
      "Uso irregular ou má adesão — pelo risco de rebote com a clonidina",
    ],
    adversos:
      "Sonolência, boca seca, hipotensão postural, depressão, disfunção sexual. Metildopa: anemia hemolítica autoimune com Coombs direto positivo, hepatotoxicidade, febre.",
    pearl:
      "A suspensão abrupta da clonidina causa crise hipertensiva de rebote grave, com taquicardia e sudorese — retire sempre de forma gradual.",
  },
  {
    id: "vasodil",
    grupo: "Outros",
    nome: "Vasodilatadores diretos",
    cor: "#96522E",
    primeiraLinha: false,
    drogas: ["Hidralazina 50–200 mg/dia", "Minoxidil 2,5–80 mg/dia"],
    mecanismo:
      "Relaxam diretamente a musculatura lisa arteriolar, sem passar por receptor adrenérgico.",
    indicacoes: [
      "Hipertensão na gestação, inclusive hidralazina IV na emergência da pré-eclâmpsia",
      "Insuficiência cardíaca: hidralazina + nitrato quando IECA/BRA não podem ser usados",
      "Hipertensão grave refratária (minoxidil)",
    ],
    contraindicacoes: [
      "Doença coronariana — a taquicardia reflexa pode precipitar isquemia",
      "Dissecção aórtica",
      "Lúpus eritematoso sistêmico (hidralazina)",
    ],
    adversos:
      "Taquicardia reflexa, retenção hidrossalina, cefaleia, rubor. Hidralazina: lúpus induzido por droga. Minoxidil: hipertricose e derrame pericárdico.",
    pearl:
      "Vasodilatador direto quase nunca vai sozinho: precisa de betabloqueador para conter a taquicardia reflexa e de diurético para conter a retenção de sódio. É o clássico esquema tríplice da hidralazina.",
  },
  {
    id: "renina",
    grupo: "Outros",
    nome: "Inibidor direto da renina",
    cor: "#6B7079",
    primeiraLinha: false,
    drogas: ["Alisquireno 150–300 mg/dia"],
    mecanismo:
      "Bloqueia a renina no primeiro passo do sistema, impedindo a conversão de angiotensinogênio em angiotensina I.",
    indicacoes: [
      "Uso restrito, alternativa quando IECA e BRA não são tolerados",
      "Pouca evidência de desfecho — não é recomendado de rotina",
    ],
    contraindicacoes: [
      "Gestação — absoluta",
      "Associação com IECA ou BRA, sobretudo em diabéticos (estudo ALTITUDE)",
      "TFG < 30 mL/min",
    ],
    adversos: "Diarreia, hipercalemia, elevação de creatinina, angioedema raro.",
    pearl:
      "Cai pouco na prática, mas cai em prova como a droga que não deve ser combinada a IECA ou BRA.",
  },
];

const ESTAGIOS = [
  { rot: "PA normal", faixa: "< 120 e < 80", cor: "#2E8B6F", cond: "Reavaliar anualmente" },
  { rot: "Pré-hipertensão", faixa: "120–139 e/ou 80–89", cor: "#C9A227", cond: "MAPA ou MRPA — pode haver hipertensão mascarada" },
  { rot: "Estágio 1", faixa: "140–159 e/ou 90–99", cor: "#D97A1F", cond: "MAPA ou MRPA — pode ser efeito do avental branco" },
  { rot: "Estágio 2", faixa: "160–179 e/ou 100–109", cor: "#C1462F", cond: "MAPA ou MRPA, mas a chance de HAS sustentada é alta" },
  { rot: "Estágio 3", faixa: "≥ 180 e/ou ≥ 110", cor: "#8E1F2F", cond: "Iniciar tratamento de imediato" },
];

const INICIO_LIMIARES = [
  { pa: "≥ 120/80", cor: "#2E8B6F", txt: "Medidas não medicamentosas para todos, desde o diagnóstico." },
  { pa: "130–139/80–89", cor: "#A8841C", txt: "Remédio se o risco cardiovascular for alto e a PA não controlar após três meses de medidas não farmacológicas." },
  { pa: "≥ 140/90", cor: "#C1462F", txt: "Tratamento medicamentoso desde o diagnóstico, incluindo idosos e maiores de 80 anos." },
];

const ESCALONAMENTO = [
  ["Monoterapia", "Só para PA 130–139/80–89 com alto risco, estágio 1 de baixo risco, ≥ 80 anos, frágeis ou com hipotensão ortostática sintomática."],
  ["Dupla em dose baixa", "Padrão para todos os demais hipertensos, já no início. Preferir combinação em comprimido único."],
  ["Tripla", "IECA ou BRA + BCC + tiazídico. Controla cerca de 90% dos casos."],
  ["Quarta droga", "Espironolactona. Se não tolerar, eplerenona."],
];

const COMBOS = [
  {
    tipo: "sim",
    titulo: "IECA ou BRA + BCC di-hidropiridínico",
    txt: "A dupla preferencial. O estudo ACCOMPLISH mostrou superioridade sobre IECA + tiazídico em desfecho cardiovascular, e o bloqueio do SRAA ainda reduz o edema maleolar do BCC.",
    ex: "Perindopril + anlodipino · Valsartana + anlodipino",
  },
  {
    tipo: "sim",
    titulo: "IECA ou BRA + diurético tiazídico",
    txt: "Excelente e amplamente disponível no SUS. O diurético ativa o SRAA, e o IECA/BRA bloqueia essa resposta — sinergia real. Também compensa a hipocalemia do tiazídico.",
    ex: "Losartana + hidroclorotiazida · Enalapril + hidroclorotiazida",
  },
  {
    tipo: "sim",
    titulo: "BCC + diurético tiazídico",
    txt: "Opção quando IECA e BRA estão contraindicados, como na gestação ou na hipercalemia.",
    ex: "Anlodipino + clortalidona",
  },
  {
    tipo: "sim",
    titulo: "Tripla: IECA ou BRA + BCC + tiazídico",
    txt: "É a tríplice padrão e controla cerca de 90% dos hipertensos. Antes de escalar para ela, otimize as doses da dupla.",
    ex: "Losartana + anlodipino + clortalidona",
  },
  {
    tipo: "sim",
    titulo: "Quarta droga: espironolactona",
    txt: "Escolha da DBHA 2025 na hipertensão resistente. Se houver ginecomastia persistente, troque por eplerenona. Monitore potássio e creatinina em 1 a 2 semanas.",
    ex: "Tríplice + espironolactona 25 mg",
  },
  {
    tipo: "nao",
    titulo: "IECA + BRA",
    txt: "Duplo bloqueio do SRAA. O ONTARGET mostrou mais lesão renal aguda, hipotensão e hipercalemia, sem qualquer ganho cardiovascular. O mesmo vale para alisquireno + IECA/BRA.",
    ex: "",
  },
  {
    tipo: "nao",
    titulo: "Betabloqueador + verapamil ou diltiazem",
    txt: "Os dois deprimem o nó atrioventricular e a contratilidade. A soma pode causar bradicardia grave, bloqueio total e descompensação de insuficiência cardíaca.",
    ex: "",
  },
  {
    tipo: "atencao",
    titulo: "Betabloqueador + diurético tiazídico",
    txt: "Funciona, mas piora resistência insulínica, glicemia e lipídios. Evite em pré-diabéticos e em quem tem síndrome metabólica.",
    ex: "",
  },
  {
    tipo: "atencao",
    titulo: "IECA/BRA + espironolactona",
    txt: "Combinação útil e indicada na hipertensão resistente e na IC, mas exige controle de potássio e creatinina. Contraindicada se K⁺ > 5,5 ou TFG < 30.",
    ex: "",
  },
];

const PERFIS = [
  { cond: "Diabetes com albuminúria", esc: "IECA ou BRA", obs: "Nefroproteção — obrigatório no esquema" },
  { cond: "Doença renal crônica proteinúrica", esc: "IECA ou BRA", obs: "Aceitar alta de até 30% na creatinina" },
  { cond: "Insuficiência cardíaca com FE reduzida", esc: "IECA/BRA ou sacubitril-valsartana + BB + espironolactona + iSGLT2", obs: "Evitar verapamil e diltiazem" },
  { cond: "Pós-infarto e doença coronariana", esc: "Betabloqueador + IECA", obs: "BB reduz mortalidade e isquemia" },
  { cond: "Fibrilação atrial", esc: "Betabloqueador ou BCC não di-hidropiridínico", obs: "Controle de frequência" },
  { cond: "Gestação", esc: "Metildopa, nifedipino, hidralazina (labetalol se disponível)", obs: "IECA, BRA e alisquireno são proibidos" },
  { cond: "Pessoa negra", esc: "BCC ou tiazídico", obs: "Menor resposta a IECA/BRA em monoterapia" },
  { cond: "Idoso e HAS sistólica isolada", esc: "BCC ou tiazídico", obs: "Iniciar devagar, atenção à hipotensão postural" },
  { cond: "Gota", esc: "Losartana ou BCC", obs: "Losartana é uricosúrica; evitar tiazídico" },
  { cond: "Hiperplasia prostática benigna", esc: "Alfabloqueador (doxazosina)", obs: "Como droga adicional, não como primeira" },
  { cond: "Asma e DPOC", esc: "Evitar BB não seletivo", obs: "Se necessário, usar β1-seletivo com cautela" },
  { cond: "Enxaqueca", esc: "Betabloqueador ou verapamil", obs: "Efeito profilático" },
  { cond: "Osteoporose", esc: "Tiazídico", obs: "Reduz calciúria" },
  { cond: "Pós-AVC", esc: "IECA + tiazídico", obs: "Reduzir a PA após a fase aguda" },
];

const EMERGENCIA = [
  { d: "Nitroprussiato de sódio", u: "Emergência hipertensiva em geral", c: "Intoxicação por cianeto e tiocianato; proteger da luz" },
  { d: "Nitroglicerina", u: "Síndrome coronariana aguda, edema agudo de pulmão", c: "Cefaleia, tolerância; não usar com inibidor de PDE5" },
  { d: "Metoprolol ou esmolol IV", u: "Dissecção aórtica (antes do vasodilatador), SCA", c: "Bradicardia, broncoespasmo" },
  { d: "Hidralazina IV", u: "Pré-eclâmpsia grave e eclâmpsia", c: "Taquicardia reflexa" },
  { d: "Nicardipino IV", u: "AVC, encefalopatia hipertensiva", c: "Alto custo, taquicardia" },
  { d: "Furosemida IV", u: "Edema agudo de pulmão, congestão", c: "Não usar se houver hipovolemia" },
];
