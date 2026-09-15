/* =================================================================
   Resumos de estudo — um para cada tema do plano de ensino.

   A chave é o título exato da tarefa, como ele aparece no plano do app.
   Cada resumo traz o que costuma ser cobrado: os conceitos, os números que
   caem e a pegadinha do tema. A fonte indicada é a referência do plano de
   ensino de onde aquele conteúdo vem.

   Conferir sempre contra a fonte antes da prova: portaria, número e prazo
   são exatamente o tipo de coisa que muda de edição para edição.
   ================================================================= */

const RESUMOS = {

/* ------------------------------------------------ Vigilância I — o SUS */

"Linha do tempo do SUS e as NOBs 91/92/93/96": {
  fonte: "Lei 8.080/1990, Lei 8.142/1990 e as Normas Operacionais Básicas · Guia de Vigilância em Saúde, MS",
  pontos: [
    "Constituição de 1988, artigos 196 a 200: saúde é direito de todos e dever do Estado, e o SUS nasce com atendimento integral, descentralização e participação da comunidade.",
    "Lei 8.080/1990 — a lei orgânica: organização, direção e gestão, competências de cada esfera, e os princípios (universalidade, integralidade, equidade, descentralização, regionalização, hierarquização).",
    "Lei 8.142/1990 — participação da comunidade (Conferências e Conselhos de Saúde) e transferências intergovernamentais de recursos. Veio porque o veto presidencial derrubou esses pontos da 8.080.",
    "NOB 91: lógica de pagamento por produção, herdada do INAMPS. O município vira prestador de serviço, não gestor. Centralizadora.",
    "NOB 92: mantém o desenho da anterior, avança pouco.",
    "NOB 93 — 'A ousadia de cumprir e fazer cumprir a lei': começa a municipalização de verdade. Cria as condições de gestão incipiente, parcial e semiplena, e institui as Comissões Intergestores Bipartite (CIB) e Tripartite (CIT).",
    "NOB 96: consolida o município como gestor. Duas condições — Gestão Plena da Atenção Básica e Gestão Plena do Sistema Municipal. Cria o PAB (Piso da Atenção Básica), fixo e variável, com transferência fundo a fundo, e a PPI."
  ],
  pega: "Não troque as duas: comissões intergestores e gestão semiplena são da NOB 93; PAB e repasse fundo a fundo são da NOB 96."
},

"NOAS 2001 e 2002": {
  fonte: "NOAS-SUS 01/2001 (Portaria GM/MS 95/2001) e NOAS-SUS 01/2002 (Portaria GM/MS 373/2002)",
  pontos: [
    "A palavra-chave é regionalização: as NOAS assumem que município nenhum é autossuficiente e organizam o sistema em regiões.",
    "NOAS 2001 institui o PDR — Plano Diretor de Regionalização —, o PDI (Plano Diretor de Investimentos) e a PPI da assistência, com módulos assistenciais, microrregiões e referências intermunicipais.",
    "Amplia a atenção básica: cria a Gestão Plena da Atenção Básica Ampliada (GPAB-A), com um elenco mínimo de ações e o PAB ampliado.",
    "NOAS 2002 aperfeiçoa a de 2001: explicita o papel do gestor estadual, reforça o comando único sobre os prestadores de média e alta complexidade e detalha a qualificação das microrregiões."
  ],
  pega: "NOB organiza a descentralização para o município; NOAS organiza a região. Se a questão fala em PDR ou módulo assistencial, é NOAS."
},

"Pacto pela Saúde — Portaria 399/2006": {
  fonte: "Portaria GM/MS 399/2006 — Diretrizes Operacionais do Pacto pela Saúde",
  pontos: [
    "Três dimensões: Pacto pela Vida, Pacto em Defesa do SUS e Pacto de Gestão.",
    "Pacto pela Vida — seis prioridades na versão de 2006: saúde do idoso; controle do câncer de colo do útero e de mama; redução da mortalidade infantil e materna; fortalecimento da resposta às doenças emergentes e endemias, com ênfase em dengue, hanseníase, tuberculose, malária e influenza; promoção da saúde; fortalecimento da atenção básica.",
    "Pacto em Defesa do SUS: repolitizar o SUS, defender o financiamento público e a saúde como direito de cidadania.",
    "Pacto de Gestão: define responsabilidades de cada esfera em descentralização, regionalização, financiamento, planejamento, PPI, regulação, participação social, gestão do trabalho e educação em saúde.",
    "Financiamento passa a cinco blocos: atenção básica; atenção de média e alta complexidade; vigilância em saúde; assistência farmacêutica; gestão do SUS. Investimentos entram depois como sexto bloco.",
    "Substitui o processo de habilitação das NOB e NOAS pelo Termo de Compromisso de Gestão, assinado por cada gestor.",
    "Na vigilância: financiamento próprio em bloco e integração das ações de vigilância com a atenção primária."
  ],
  pega: "O Pacto acaba com a habilitação por 'caixinhas' das NOB/NOAS — quem responde 'condição de gestão' numa questão sobre 2006 erra."
},

"Portarias 3.252/2009, 1.378/2013 e 204/2016 · Resolução 588/2017": {
  fonte: "Portarias GM/MS 3.252/2009, 1.378/2013 e 204/2016; Resolução CIT 588/2017; Portaria de Consolidação 4/2017",
  pontos: [
    "Portaria 3.252/2009: aproxima vigilância em saúde e atenção primária, define diretrizes e o financiamento das ações de vigilância, e afirma a vigilância como responsabilidade das três esferas.",
    "Portaria 1.378/2013: substitui a 3.252. Regulamenta responsabilidades e diretrizes para a execução e o financiamento das ações de vigilância em saúde pela União, estados, Distrito Federal e municípios; institui o Piso Fixo de Vigilância em Saúde.",
    "Portaria 204/2016: define a Lista Nacional de Notificação Compulsória e, principalmente, os prazos — notificação imediata em até 24 horas e notificação semanal — além das listas de notificação em unidades sentinela.",
    "Resolução CIT 588/2017: institui a Política Nacional de Vigilância em Saúde (PNVS), com princípios, diretrizes e estratégias; trata a vigilância como função essencial de saúde pública, integrada à Rede de Atenção à Saúde e presente em todos os pontos de atenção.",
    "Portaria de Consolidação 4/2017: reúne num só texto as normas sobre os sistemas e subsistemas do SUS, inclusive vigilância — por isso muita portaria antiga hoje é citada por ela."
  ],
  pega: "Prazo é o que mais cai: 24 horas para a notificação imediata (e para a que é semanal, o registro semanal no Sinan). A 204/2016 é a portaria dos prazos e da lista."
},

/* --------------------------------- Vigilância II — sistema e operação */

"Sistema Nacional de Vigilância Epidemiológica: origem e conceitos": {
  fonte: "Lei 6.259/1975 · Lei 8.080/1990, art. 6º · Guia de Vigilância em Saúde, MS, 5ª ed.",
  pontos: [
    "A Lei 6.259/1975 criou o Sistema Nacional de Vigilância Epidemiológica e o Programa Nacional de Imunizações, e tornou a notificação compulsória uma obrigação legal.",
    "Definição legal (Lei 8.080/90, art. 6º, §2º): conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle.",
    "Funções, em ordem: coleta de dados; processamento; análise e interpretação; recomendação das medidas; promoção das ações de controle; avaliação do impacto; divulgação da informação.",
    "Vigilância em saúde é o guarda-chuva: epidemiológica, sanitária, ambiental e saúde do trabalhador, somadas à promoção da saúde.",
    "Atributos de um sistema de vigilância, usados para avaliá-lo: simplicidade, flexibilidade, aceitabilidade, sensibilidade, valor preditivo positivo, representatividade, oportunidade, estabilidade e qualidade dos dados."
  ],
  pega: "Informação que não vira ação não é vigilância. A finalidade legal é recomendar e adotar medidas — o dado é meio, não fim."
},

"Notificação compulsória e preenchimento da ficha": {
  fonte: "Portaria 204/2016 · Lei 6.259/1975 · Guia de Vigilância em Saúde, MS · Manual do Sinan",
  pontos: [
    "Notifica-se a SUSPEITA. Esperar a confirmação para notificar é o erro clássico — a vigilância precisa do caso enquanto ainda dá para agir.",
    "Quem notifica: médicos, enfermeiros, odontólogos, biomédicos, farmacêuticos e demais profissionais de saúde, além dos responsáveis por estabelecimentos públicos e privados. Para o cidadão comum, comunicar é dever moral e legal previsto na Lei 6.259/75.",
    "Prazos: imediata, em até 24 horas a partir da suspeita, para as doenças da lista de notificação imediata, seguindo o fluxo município → estado → Ministério da Saúde; semanal, pelo Sinan, para as demais.",
    "Notificação negativa: informar que não houve caso. Serve para mostrar que a unidade está viva no sistema e diferenciar 'não houve' de 'não notificou'.",
    "As informações são sigilosas; a identificação do paciente só circula quando necessária ao controle.",
    "A ficha tem três partes: dados gerais (agravo e CID, data da notificação, unidade notificante), notificação individual (nome, data de nascimento, idade, sexo, gestante, raça/cor, escolaridade, cartão SUS, nome da mãe), e dados de residência — depois vem a ficha de investigação específica do agravo.",
    "Campos essenciais em branco inviabilizam a análise: data de início dos sintomas, município de residência e evolução do caso são os que mais fazem falta."
  ],
  pega: "Notificação não é diagnóstico nem denúncia: é gatilho de investigação. E a data que vale para a análise epidemiológica é a do início dos sintomas, não a da notificação."
},

"Estudos, inquéritos e levantamentos epidemiológicos": {
  fonte: "Rouquayrol, Epidemiologia e Saúde · Guia de Vigilância em Saúde, MS",
  pontos: [
    "Inquérito epidemiológico: coleta dados primários, em amostra da população, num recorte de tempo. É um estudo transversal e entrega prevalência. Exemplos: inquérito de cobertura vacinal, inquérito de soroprevalência, PNS.",
    "Levantamento epidemiológico: trabalha com dados que já existem — registros, prontuários, sistemas de informação —, sem exigir amostragem probabilística. Serve para indicar tendência e orientar ação rápida, como o LIRAa na dengue.",
    "Estudos descritivos: relato e série de casos, ecológico (a unidade é o grupo, não a pessoa) e transversal.",
    "Estudos analíticos: caso-controle (parte da doença para a exposição, mede odds ratio, bom para doença rara), coorte (parte da exposição para a doença, mede incidência e risco relativo) e ensaio clínico randomizado, o único que atribui a exposição.",
    "Medidas: prevalência é foto, incidência é filme. Prevalência = incidência × duração média da doença."
  ],
  pega: "Inquérito gera dado novo; levantamento usa dado existente. E a falácia ecológica é atribuir ao indivíduo uma associação observada só no grupo."
},

"Sistemas sentinela e investigação de surtos e epidemias": {
  fonte: "Guia de Vigilância em Saúde, MS, 5ª ed. — investigação de surtos",
  pontos: [
    "Vigilância sentinela: um conjunto escolhido de unidades monitora um evento com qualidade e rapidez, sem pretender cobertura universal. Ganha oportunidade e custo, perde representatividade. É assim que se acompanha síndrome gripal e rotavírus.",
    "Surto: elevação inesperada de casos restrita a um espaço delimitado — um bairro, uma creche, um casamento. Dois casos ligados a uma mesma fonte já bastam, e um único caso é surto quando a doença estava erradicada, eliminada ou é inusitada.",
    "Epidemia: elevação acima do esperado atingindo área ampla. Endemia: ocorrência habitual e esperada naquela região. Pandemia: epidemia que alcança vários continentes.",
    "Roteiro da investigação: confirmar o diagnóstico; confirmar a existência do surto comparando com o esperado (diagrama de controle); definir caso, com critérios de suspeito, provável e confirmado; busca ativa de casos; descrever por tempo, lugar e pessoa, montando a curva epidêmica; formular hipóteses; testar as hipóteses com estudo analítico, geralmente coorte retrospectiva ou caso-controle; e relatar.",
    "As medidas de controle não esperam o fim da investigação — entram assim que houver hipótese plausível.",
    "Curva epidêmica: fonte comum pontual dá pico único e dispersão de um período de incubação; fonte propagada dá ondas sucessivas espaçadas pelo período de incubação."
  ],
  pega: "Ordem não é ordem cronológica rígida: controlar vem cedo. E a curva epidêmica, além de descrever, sugere o período de incubação e o tipo de fonte."
},

/* ------------------------------------- Epidemiologia — testes e provas */

"Tabela 2×2 · sensibilidade e especificidade": {
  fonte: "Fletcher, Epidemiologia Clínica · Duncan, Medicina Ambulatorial",
  pontos: [
    "Monte sempre a tabela com a doença nas colunas e o teste nas linhas: verdadeiro-positivo (VP), falso-positivo (FP), falso-negativo (FN), verdadeiro-negativo (VN).",
    "Sensibilidade = VP / (VP + FN). É a proporção de doentes que o teste detecta. Lê-se na coluna dos doentes.",
    "Especificidade = VN / (VN + FP). É a proporção de sadios que o teste inocenta. Lê-se na coluna dos sadios.",
    "Teste sensível serve para AFASTAR: negativo em teste muito sensível torna a doença improvável (SnNout). Por isso rastreamento pede sensibilidade.",
    "Teste específico serve para CONFIRMAR: positivo em teste muito específico torna a doença provável (SpPin).",
    "Sensibilidade e especificidade são propriedades do teste e não mudam com a prevalência — mas mudam com o espectro da doença: numa população com doença mais avançada, a sensibilidade sobe.",
    "Elas se opõem pelo ponto de corte: baixar o corte aumenta a sensibilidade e derruba a especificidade."
  ],
  pega: "Sensibilidade e especificidade leem a tabela na vertical (a partir da doença); valores preditivos leem na horizontal (a partir do resultado). Trocar a direção é o erro mais comum da prova."
},

"Valor preditivo positivo e negativo · efeito da prevalência": {
  fonte: "Fletcher, Epidemiologia Clínica · Duncan, Medicina Ambulatorial",
  pontos: [
    "VPP = VP / (VP + FP): entre os que testaram positivo, quantos têm mesmo a doença.",
    "VPN = VN / (VN + FN): entre os que testaram negativo, quantos estão mesmo livres.",
    "Os dois dependem da prevalência, porque leem a tabela a partir do resultado do teste. Quanto mais prevalente a doença, maior o VPP e menor o VPN.",
    "Consequência prática: rastrear doença rara em população de baixo risco gera muito falso-positivo, mesmo com um teste ótimo — daí a cascata de exames e a ansiedade que vêm depois.",
    "A prevalência é a probabilidade pré-teste. O teste só atualiza essa probabilidade; não a substitui.",
    "Acurácia = (VP + VN) / total. Resume, mas engana em doença rara: um teste que diz 'negativo' para todos acerta 99% numa prevalência de 1%."
  ],
  numeros: [
    "Mesmo teste, prevalência de 1% → VPP baixo. Prevalência de 50% → VPP alto. O teste não mudou; a população mudou."
  ],
  pega: "Se a questão muda a população (ambulatório x pronto-socorro x população geral) e pergunta o que acontece, a resposta quase sempre passa por valor preditivo, não por sensibilidade."
},

"Razão de verossimilhança positiva e negativa": {
  fonte: "Fletcher, Epidemiologia Clínica · Duncan, Medicina Ambulatorial",
  pontos: [
    "RV+ = sensibilidade / (1 − especificidade). Quantas vezes é mais provável um positivo vir de um doente do que de um sadio.",
    "RV− = (1 − sensibilidade) / especificidade. O mesmo raciocínio para o resultado negativo.",
    "Independem da prevalência, como sensibilidade e especificidade, mas dizem diretamente o quanto aquele resultado desloca a probabilidade.",
    "Uso: odds pré-teste × RV = odds pós-teste. Na prática, nomograma de Fagan.",
    "Leitura rápida: RV+ acima de 10 e RV− abaixo de 0,1 mudam muito a conduta; entre 0,5 e 2 quase não mudam nada; RV igual a 1 significa teste inútil."
  ],
  pega: "RV junta sensibilidade e especificidade num número só e serve para qualquer prevalência — é a ponte entre a propriedade do teste e a decisão no paciente concreto."
},

"Curva ROC, ponto de corte e vieses + 20 questões": {
  fonte: "Fletcher, Epidemiologia Clínica · Rouquayrol, Epidemiologia e Saúde",
  pontos: [
    "Curva ROC: sensibilidade no eixo y contra 1 − especificidade no eixo x, um ponto para cada corte possível do teste.",
    "A área sob a curva mede a acurácia global: 0,5 é o acaso (a diagonal), acima de 0,8 é boa, acima de 0,9 é excelente. Serve também para comparar dois testes.",
    "O melhor corte depende do objetivo, não da matemática: rastreio quer sensibilidade (corte mais baixo); confirmação quer especificidade (corte mais alto). O custo do falso-negativo contra o do falso-positivo é que decide.",
    "Viés de aferição ou informação: medir diferente entre os grupos. Viés de seleção: quem entrou no estudo não representa a população. Viés de memória: o doente lembra melhor da exposição.",
    "Viés de verificação (work-up bias): só quem teve teste positivo vai ao padrão-ouro — infla a sensibilidade.",
    "Viés de espectro: testar num hospital cheio de casos graves faz o teste parecer melhor do que é na atenção primária.",
    "Confundimento é diferente de viés: um terceiro fator ligado à exposição e à doença. Trata-se com randomização, restrição, pareamento ou análise multivariada.",
    "Concordância entre observadores: kappa, que já desconta o acerto pelo acaso."
  ],
  pega: "Não existe 'melhor ponto de corte' absoluto. Se a questão não disser para que serve o teste, a resposta está incompleta."
},

/* ------------------------------------------------------------ Criança */

"Primeira consulta do RN: anamnese e exame físico": {
  fonte: "Caderno de Atenção Básica 33 — Saúde da Criança: crescimento e desenvolvimento, MS",
  pontos: [
    "A primeira consulta deve acontecer na primeira semana de vida — é a 'Primeira Semana Saúde Integral'. Recém-nascido de risco, na primeira semana sempre; idealmente até o 3º dia.",
    "Na anamnese: pré-natal (número de consultas, sorologias, intercorrências), tipo de parto, idade gestacional, peso ao nascer, Apgar, intercorrências na maternidade, triagens realizadas, aleitamento e eliminações.",
    "As cinco triagens neonatais: teste do pezinho (entre o 3º e o 5º dia), teste do olhinho (reflexo vermelho), teste da orelhinha (emissões otoacústicas), teste do coraçãozinho (oximetria nos membros superior direito e inferior, entre 24 e 48 horas) e teste da linguinha.",
    "Exame físico: estado geral, pele (icterícia por zonas de Kramer), crânio e fontanelas, olhos, boca, tórax e ausculta, abdome e coto umbilical, genitália, quadris (manobras de Ortolani e Barlow), coluna, extremidades e reflexos primitivos.",
    "Sinais de perigo que mandam referir na hora: recusa alimentar, vômitos, convulsão, letargia, tiragem subcostal, apneia, febre ou hipotermia, icterícia nas primeiras 24 horas ou até as mãos e pés, cianose e secreção purulenta no umbigo.",
    "Avaliar e apoiar a amamentação na própria consulta: pega, posição, frequência e sinais de boa transferência de leite."
  ],
  numeros: [
    "Perda de até 10% do peso de nascimento na primeira semana é fisiológica; a recuperação vem até o 10º ao 15º dia."
  ],
  pega: "Icterícia nas primeiras 24 horas nunca é fisiológica. E o teste do pezinho tem janela — antes do 3º dia dá falso resultado para fenilcetonúria."
},

"Cuidados com o recém-nascido e prevenção de acidentes": {
  fonte: "Caderno de Atenção Básica 33, MS · Caderno 23 — Aleitamento e alimentação complementar",
  pontos: [
    "Coto umbilical: limpeza com álcool 70%, várias vezes ao dia, mantido seco e fora da fralda. Cai entre o 7º e o 14º dia. Secreção purulenta, hiperemia periumbilical ou odor fétido é onfalite — referência imediata.",
    "Banho é de conforto e higiene, sem hora fixa; a temperatura do quarto importa mais que a do banho.",
    "Sono seguro, contra a morte súbita: em decúbito dorsal (barriga para cima), no próprio berço, no quarto dos pais, colchão firme, sem travesseiro, almofada ou cobertor solto, e sem fumo no ambiente.",
    "Prevenção de acidentes por faixa: até 6 meses, quedas de superfícies e sufocação; 6 a 12 meses, engasgo com objetos pequenos e queimaduras; 1 a 4 anos, afogamento, intoxicação e atropelamento.",
    "No carro: bebê-conforto voltado para trás, no banco traseiro, até o limite do fabricante. Criança no banco de trás até os 10 anos.",
    "Nunca esquentar mamadeira no micro-ondas, não deixar cabo de panela para fora do fogão, guardar produtos de limpeza fora do alcance e na embalagem original."
  ],
  pega: "Decúbito dorsal para dormir é a recomendação; decúbito ventral supervisionado ('tummy time') é para quando o bebê está acordado, e ajuda no desenvolvimento motor."
},

"Calendário vacinal de 0 a 10 anos": {
  fonte: "Calendário Nacional de Vacinação, PNI/MS",
  pontos: [
    "Ao nascer: BCG (dose única) e hepatite B (nas primeiras 12 a 24 horas).",
    "2 meses: pentavalente, VIP (poliomielite inativada), pneumocócica 10-valente e rotavírus.",
    "3 meses: meningocócica C.",
    "4 meses: repete pentavalente, VIP, pneumo 10 e rotavírus.",
    "5 meses: meningocócica C.",
    "6 meses: pentavalente e VIP; influenza anual a partir dos 6 meses.",
    "9 meses: febre amarela.",
    "12 meses: tríplice viral, pneumo 10 (reforço) e meningo C (reforço).",
    "15 meses: DTP (1º reforço), VOP, hepatite A e tetraviral (tríplice viral + varicela).",
    "4 anos: DTP (2º reforço), VOP, varicela e febre amarela (reforço).",
    "9 a 14 anos: HPV quadrivalente, esquema de dose única no calendário atual do PNI."
  ],
  pega: "Rotavírus tem janela rígida: primeira dose até 3 meses e 15 dias, segunda até 7 meses e 29 dias. Perdeu, não faz. BCG e rotavírus são as vacinas que mais aparecem em questão de contraindicação."
},

"Crescimento: curvas da OMS e escore-z": {
  fonte: "Caderno de Atenção Básica 33, MS · Curvas OMS 2006/2007 · Caderneta da Criança",
  pontos: [
    "Índices usados: peso para idade, peso para estatura, estatura para idade e IMC para idade. O que define desnutrição aguda é peso para estatura; o que denuncia desnutrição crônica é estatura para idade.",
    "Linhas do escore-z: −3, −2, 0, +1, +2, +3. Entre −2 e +2 é a faixa de normalidade para a maioria dos índices.",
    "Peso para idade: abaixo de −2 é peso baixo; abaixo de −3, peso muito baixo. Estatura para idade abaixo de −2 é baixa estatura.",
    "IMC para idade: acima de +1 é risco de sobrepeso até 5 anos (sobrepeso dos 5 aos 19); acima de +2 é sobrepeso (obesidade dos 5 aos 19); acima de +3 é obesidade (obesidade grave dos 5 aos 19).",
    "A inclinação da curva vale mais que o ponto isolado: criança que atravessa linhas para baixo, mesmo dentro da faixa, está em alerta.",
    "Marcos de peso: recupera o peso de nascimento até o 15º dia, dobra por volta dos 4 a 5 meses, triplica com 1 ano. Estatura cresce cerca de 25 cm no primeiro ano, 12 cm no segundo, 8 cm no terceiro."
  ],
  pega: "Ponto isolado não diz quase nada. O que a prova quer ver é a leitura da trajetória entre as consultas."
},

"Desenvolvimento: marcos por faixa etária": {
  fonte: "Caderno de Atenção Básica 33, MS · Caderneta da Criança",
  pontos: [
    "1 mês: mãos fechadas, olha o rosto, reage ao som, eleva a cabeça em prona.",
    "2 a 3 meses: sorriso social, segue objeto, sustenta a cabeça, emite sons.",
    "4 a 6 meses: pega objetos, leva à boca, vira em direção ao som, rola, senta com apoio.",
    "6 a 9 meses: senta sem apoio, transfere objeto de uma mão para a outra, balbucia sílabas, estranha desconhecidos.",
    "9 a 12 meses: pinça polegar-indicador, engatinha, fica em pé com apoio, fala uma ou duas palavras, imita gestos como dar tchau.",
    "12 a 18 meses: anda sozinho, torre de dois a três cubos, aponta o que quer, fala de três a cinco palavras.",
    "2 anos: corre, sobe escada, frases de duas palavras, aponta figuras, ajuda a se despir.",
    "3 a 4 anos: pedala triciclo, veste-se com ajuda, conta histórias curtas, brinca com outras crianças.",
    "Sinais de alerta em qualquer idade: perda de habilidade já adquirida, ausência de contato visual, não responder ao nome aos 12 meses, não andar aos 18, não falar palavras aos 2 anos, e perímetro cefálico fora da curva."
  ],
  pega: "Regressão de marco é sempre alerta, mesmo que a criança esteja 'dentro da idade' nos demais. E a avaliação usa a idade corrigida no prematuro, até os 2 anos."
},

"Alimentação por faixa, obesidade e violência contra a criança": {
  fonte: "Caderno de Atenção Básica 23, MS · Guia Alimentar para Crianças Menores de 2 Anos · Linha de Cuidado para Atenção às Pessoas em Situação de Violência",
  pontos: [
    "Aleitamento materno exclusivo até os 6 meses — sem água, chá ou outro leite —, e complementado até 2 anos ou mais.",
    "A partir dos 6 meses: introdução da alimentação complementar com três refeições ao dia (duas papas principais e uma de fruta) para quem mama, aumentando para cinco refeições aos 9 meses e a comida da família aos 12.",
    "Consistência progressiva: amassada, nunca liquidificada ou peneirada. A criança precisa aprender a mastigar.",
    "Nada de açúcar, mel, refrigerante, embutidos e ultraprocessados antes dos 2 anos. Mel também pelo risco de botulismo antes de 1 ano.",
    "Obesidade infantil: rastrear pelo IMC para idade, investigar o ambiente alimentar e a tela, e tratar com a família inteira, não com a criança sozinha.",
    "Violência: notificação é compulsória — suspeita de violência contra criança e adolescente é notificação imediata em até 24 horas, com comunicação ao Conselho Tutelar, independentemente de confirmação.",
    "Sinais de alerta: lesões em locais improváveis, lesões em estágios diferentes de cicatrização, história incompatível com a lesão, atraso na procura por atendimento, mudança de versão e discrepância entre relatos."
  ],
  pega: "Notificar violência não depende de certeza nem de autorização da família — e notificar não é denunciar; são fluxos diferentes que correm juntos."
},

/* -------------------------------------------------------- Adolescente */

"Relação equipe–adolescente e roteiro de avaliação na UBS": {
  fonte: "Proteger e cuidar da saúde de adolescentes na atenção básica, MS, 2018",
  pontos: [
    "O adolescente tem direito a ser atendido sozinho, se quiser, e à privacidade e confidencialidade na consulta. Isso vale inclusive para contracepção e IST.",
    "O sigilo só é quebrado quando há risco de vida ou à saúde, como abuso, ideação suicida, gravidez que exija intervenção — e mesmo aí o adolescente é informado antes da quebra.",
    "Acolhimento sem julgamento moral: a postura da equipe decide se ele volta ou não.",
    "Roteiro HEEADSSS, útil e cobrado: Home (casa), Education/Employment (escola e trabalho), Eating (alimentação), Activities (atividades e amigos), Drugs (álcool e outras drogas), Sexuality (sexualidade), Suicide/Depression (humor) e Safety (segurança e violência).",
    "Começar pelo que é menos invasivo (casa, escola) e caminhar para o mais sensível (sexualidade, humor) é o que faz o roteiro funcionar.",
    "A caderneta de saúde do adolescente organiza o acompanhamento e deve ser preenchida na consulta."
  ],
  pega: "Atender com a mãe na sala o tempo todo é o erro que apaga todo o resto. Combine com a família, desde o início, um tempo a sós com o adolescente."
},

"Maturação sexual, avaliação nutricional e caderneta": {
  fonte: "Proteger e cuidar da saúde de adolescentes na atenção básica, MS · Estágios de Tanner",
  pontos: [
    "Estágios de Tanner vão de 1 (pré-púbere) a 5 (adulto), avaliados por mamas e pelos na menina, e genitália e pelos no menino.",
    "Na menina, o primeiro sinal puberal é o broto mamário (telarca, M2), por volta dos 8 aos 13 anos. A menarca vem em geral no M4, cerca de 2 a 2,5 anos depois da telarca.",
    "No menino, o primeiro sinal é o aumento testicular (volume acima de 4 mL, G2), dos 9 aos 14 anos.",
    "Estirão de crescimento: na menina acontece mais cedo, no M2–M3, antes da menarca; no menino, mais tarde, no G3–G4. Depois da menarca, o crescimento residual costuma ser de 6 a 8 cm.",
    "Puberdade precoce: antes dos 8 anos na menina e dos 9 no menino. Atraso puberal: ausência de telarca aos 13 ou de aumento testicular aos 14.",
    "Avaliação nutricional pelo IMC para idade e estatura para idade, nas curvas de 5 a 19 anos da OMS, com os mesmos pontos de corte em escore-z.",
    "A caderneta registra crescimento, Tanner, vacinas, saúde bucal e saúde sexual e reprodutiva."
  ],
  pega: "O marco inicial não é a menarca nem a primeira ejaculação: é telarca na menina e aumento testicular no menino. Questão de prova adora esse par."
},

"Imunização, prevenção de gravidez e IST/Aids": {
  fonte: "Calendário Nacional de Vacinação, PNI/MS · Saúde sexual e saúde reprodutiva, CAB 26 · Protocolos de IST, MS",
  pontos: [
    "Vacinas do adolescente: HPV dos 9 aos 14 anos, dT a cada 10 anos, hepatite B se esquema incompleto, tríplice viral conforme situação vacinal, meningocócica ACWY dos 11 aos 14 anos e febre amarela.",
    "Contracepção não exige autorização dos pais nem idade mínima; negar é que fere o direito à saúde.",
    "Métodos para adolescentes: preservativo sempre, associado a outro método (dupla proteção). Os LARC — implante e DIU — são seguros e recomendados nessa faixa, inclusive para quem nunca teve filho.",
    "Contracepção de emergência: levonorgestrel 1,5 mg em dose única, até 5 dias da relação, tão mais eficaz quanto mais cedo. Não é abortiva e não tem contraindicação absoluta.",
    "Prevenção combinada de IST: preservativo, testagem regular, vacinação (HPV e hepatite B), PEP em até 72 horas e PrEP para quem tem indicação.",
    "Testagem rápida de HIV, sífilis, hepatites B e C disponível na UBS, com aconselhamento antes e depois.",
    "Toda relação sexual abaixo de 14 anos é presumidamente estupro de vulnerável, com notificação compulsória — o que não significa tratar o adolescente com hostilidade, e sim acionar a rede de proteção."
  ],
  pega: "Dupla proteção é o conceito que cai: um método hormonal ou LARC evita gravidez, mas só o preservativo evita IST."
},

/* -------------------------------------------------------------- Idoso */

"Atribuições da atenção básica e avaliação global do idoso": {
  fonte: "Caderno de Atenção Básica 19 — Envelhecimento e saúde da pessoa idosa, MS · Política Nacional de Saúde da Pessoa Idosa (Portaria 2.528/2006)",
  pontos: [
    "O paradigma da saúde do idoso não é ausência de doença: é CAPACIDADE FUNCIONAL. O idoso saudável é o que mantém autonomia e independência, ainda que com doenças crônicas.",
    "Autonomia é decidir sobre a própria vida; independência é executar as tarefas. Um pode existir sem o outro.",
    "Atribuições da equipe: cadastrar e conhecer a população idosa do território, usar a Caderneta de Saúde da Pessoa Idosa, fazer a avaliação global, acompanhar as condições crônicas, prevenir quedas, revisar a farmácia, apoiar o cuidador e organizar a visita domiciliar.",
    "A Avaliação Multidimensional da Pessoa Idosa cobre: alimentação e nutrição, acuidade visual e auditiva, incontinência urinária, sexualidade, vacinação, humor, cognição, funcionalidade, mobilidade e quedas, e suporte familiar e social.",
    "Vacinas do idoso: influenza anual, pneumocócica 23-valente (em indicações específicas e nos institucionalizados), dT a cada 10 anos, hepatite B, febre amarela e COVID-19 conforme calendário vigente.",
    "Os cinco grandes 'gigantes da geriatria', que orientam a busca ativa: incapacidade cognitiva, instabilidade postural, imobilidade, incontinência e iatrogenia."
  ],
  pega: "Avaliar idoso por lista de doenças é o erro do enunciado. A pergunta que organiza tudo é: o que ele consegue fazer sozinho hoje, e o que mudou desde a última consulta?"
},

"Cognição, funcionalidade (AVD e AIVD), quedas e mobilidade": {
  fonte: "Caderno de Atenção Básica 19, MS",
  pontos: [
    "AVD básicas (escala de Katz): banhar-se, vestir-se, ir ao banheiro, transferir-se, continência e alimentar-se. Perder essas é dependência avançada.",
    "AIVD (escala de Lawton): usar telefone, fazer compras, preparar refeições, cuidar da casa, lavar roupa, usar transporte, tomar medicação e cuidar das finanças. São as que se perdem primeiro — por isso detectam declínio precoce.",
    "Rastreio cognitivo: Miniexame do Estado Mental, com nota de corte dependente da escolaridade; teste do desenho do relógio e fluência verbal como complementos. Queixa de memória do próprio paciente costuma ser depressão; queixa trazida pela família costuma ser demência.",
    "Humor: Escala de Depressão Geriátrica (GDS-15), rastreio positivo acima de 5.",
    "Quedas: perguntar sempre sobre queda no último ano. Uma queda com lesão, duas ou mais quedas, ou alteração de marcha e equilíbrio pedem avaliação completa.",
    "Testes de mobilidade: Timed Up and Go — levantar da cadeira, andar 3 metros, voltar e sentar. Acima de 20 segundos indica alto risco de queda. Velocidade de marcha abaixo de 0,8 m/s sinaliza fragilidade.",
    "Fatores de risco de queda que a UBS resolve: polifarmácia (sobretudo benzodiazepínicos), hipotensão postural, déficit visual, tapetes soltos, iluminação ruim, calçado inadequado e ausência de barras no banheiro."
  ],
  pega: "Perder AIVD antes de AVD é a sequência natural. Idoso que já não administra a própria medicação mas ainda toma banho sozinho está na janela em que dá para intervir."
},

"Suporte familiar, violência intrafamiliar e assistência domiciliar": {
  fonte: "Caderno de Atenção Básica 19, MS · Estatuto do Idoso (Lei 10.741/2003)",
  pontos: [
    "Avaliação da funcionalidade familiar: APGAR familiar, genograma e ecomapa ajudam a ver quem cuida, quem sobrecarrega e quem sustenta.",
    "O cuidador também é objeto de cuidado: sobrecarga do cuidador é fator de risco tanto para adoecimento dele quanto para maus-tratos.",
    "Tipos de violência contra a pessoa idosa: física, psicológica, sexual, financeira ou patrimonial, negligência e abandono. A mais frequente é a negligência; a financeira é a mais silenciosa.",
    "Notificação de violência contra idoso é compulsória, e o Estatuto do Idoso obriga a comunicação à autoridade competente — Conselho do Idoso, Ministério Público ou delegacia.",
    "Sinais de alerta: lesões inexplicadas, desnutrição e desidratação sem causa clínica, falta de adesão ao tratamento por falta de acesso, atraso na procura por cuidado, medo na presença do acompanhante, movimentação financeira estranha.",
    "Assistência domiciliar: indicada para o idoso com dificuldade ou impossibilidade de locomoção. Avalia o ambiente (barreiras, risco de queda), a adesão à medicação, o cuidador e a rede de apoio."
  ],
  pega: "Negligência é violência, inclusive por omissão do serviço de saúde. E a suspeita basta para notificar — a confirmação não é tarefa da equipe da UBS."
},

/* ------------------------------------------------------------- Mulher */

"Planejamento reprodutivo e métodos contraceptivos": {
  fonte: "Saúde sexual e saúde reprodutiva — CAB 26, MS · Critérios Médicos de Elegibilidade da OMS",
  pontos: [
    "Planejamento reprodutivo é direito garantido pela Lei 9.263/1996: informação, acesso a todos os métodos e escolha livre e informada.",
    "Métodos comportamentais: tabelinha, muco cervical (Billings), temperatura basal, sintotérmico. Alta taxa de falha no uso típico.",
    "Barreira: preservativo masculino e feminino (os únicos que protegem de IST) e diafragma.",
    "Hormonais combinados: pílula, injetável mensal, adesivo e anel — estrogênio + progestagênio. Só progestagênio: minipílula, desogestrel, injetável trimestral e implante.",
    "DIU de cobre: dura 10 anos, não é hormonal, pode aumentar fluxo e cólica. SIU de levonorgestrel: dura de 5 a 8 anos, reduz o fluxo e trata sangramento aumentado.",
    "Esterilização cirúrgica pela Lei 9.263/96, com a redação atual: permitida a partir dos 21 anos ou com dois filhos vivos, com manifestação de vontade em documento escrito e prazo mínimo de 60 dias entre a manifestação e o procedimento; não depende mais do consentimento do cônjuge.",
    "Eficácia no uso típico, em ordem: implante e DIU/SIU (mais de 99%), injetável trimestral, pílula combinada (cerca de 91%), preservativo masculino (cerca de 82%), comportamentais (bem menor)."
  ],
  pega: "A diferença entre uso perfeito e uso típico é o coração da orientação: a pílula é ótima no papel e mediana na vida real, e é por isso que os LARC entraram na primeira linha."
},

"Critérios de elegibilidade e contracepção de emergência": {
  fonte: "Critérios Médicos de Elegibilidade para Uso de Contraceptivos, OMS/MS",
  pontos: [
    "As quatro categorias da OMS: 1 — usar sem restrição; 2 — vantagens superam os riscos, pode usar; 3 — riscos superam as vantagens, usar só sem alternativa e com acompanhamento; 4 — risco inaceitável, não usar.",
    "Categoria 4 clássica para combinados: enxaqueca COM aura em qualquer idade, câncer de mama atual, trombose venosa profunda ou embolia atual, hipertensão grave (≥160/100), tabagismo com 15 ou mais cigarros por dia acima dos 35 anos, amamentação com menos de 6 semanas pós-parto, cirrose descompensada e lúpus com anticorpo antifosfolípide.",
    "Progestagênio isolado é a saída para quase todas essas situações — inclusive amamentação, enxaqueca com aura e hipertensão.",
    "Pós-parto: quem amamenta pode iniciar progestagênio isolado; combinado só após 6 meses (ou, sem amamentação, após 21 dias se não houver risco trombótico).",
    "Contracepção de emergência: levonorgestrel 1,5 mg em dose única, até 5 dias (120 horas) da relação desprotegida, melhor quanto antes. Alternativa: método de Yuzpe.",
    "O DIU de cobre é o método de emergência mais eficaz, se inserido em até 5 dias, e já fica como contracepção continuada.",
    "A emergência não interrompe gestação estabelecida, não é abortiva e não tem contraindicação absoluta — inclusive pode repetir, embora não sirva como método de rotina."
  ],
  pega: "Enxaqueca com aura = categoria 4 para combinado, em qualquer idade. É a pergunta que mais reprova nessa parte."
},

"Doenças benignas da mama e exame clínico": {
  fonte: "Controle dos cânceres do colo do útero e da mama — CAB 13, MS · Diretrizes para a Detecção Precoce do Câncer de Mama, INCA",
  pontos: [
    "As alterações funcionais benignas da mama (dor, nodularidade, cistos) são a queixa mais comum no ambulatório e não aumentam o risco de câncer.",
    "Mastalgia cíclica: ligada ao ciclo, bilateral e difusa, responde a orientação, sutiã com sustentação e analgesia simples. Mastalgia acíclica, unilateral e localizada, merece investigação.",
    "Fibroadenoma: nódulo móvel, de contorno regular, fibroelástico, típico da mulher jovem. Cisto: conteúdo líquido, aparece e some com o ciclo, confirmado por ultrassom.",
    "Descarga papilar: fisiológica quando bilateral, multiductal, provocada e leitosa ou esverdeada. Suspeita quando espontânea, unilateral, uniductal, sanguinolenta ou 'água de rocha'.",
    "Exame clínico das mamas: inspeção estática e dinâmica, palpação das mamas e das cadeias axilar e supraclavicular, e expressão papilar.",
    "Sobre rastreamento, o documento do INCA registra AUSÊNCIA de recomendação para o exame clínico como método de rastreio — o que é diferente de recomendar contra. Ele segue indicado na avaliação de queixa."
  ],
  pega: "Ausência de recomendação e recomendação contrária não são a mesma coisa: a primeira diz que o equilíbrio entre danos e benefícios é incerto."
},

"Rastreamento de mama e condutas pela mamografia": {
  fonte: "Diretrizes para a Detecção Precoce do Câncer de Mama no Brasil, INCA, 2015/2017 · Sistema BI-RADS",
  pontos: [
    "Recomendação do Ministério da Saúde: mamografia de rastreamento a cada 2 anos, dos 50 aos 69 anos, na mulher de risco habitual.",
    "O documento recomenda CONTRA o rastreamento mamográfico em mulheres abaixo de 50 e acima de 69 anos, e contra a ultrassonografia, a ressonância e a termografia como métodos de rastreio.",
    "Mulher de alto risco — parente de primeiro grau com câncer de mama antes dos 50 anos, com câncer bilateral ou de ovário em qualquer idade, parente masculino com câncer de mama, ou mutação BRCA conhecida — sai do rastreamento populacional e entra em acompanhamento individualizado.",
    "BI-RADS 0: exame inconclusivo, precisa de complementação. 1: nada a relatar. 2: achado benigno. Nos dois casos, segue a rotina.",
    "BI-RADS 3: provavelmente benigno, risco de malignidade abaixo de 2% — controle em 6 meses.",
    "BI-RADS 4: suspeito (4A, 4B e 4C) — biópsia. BI-RADS 5: altamente suspeito, acima de 95% — biópsia. BI-RADS 6: malignidade já comprovada.",
    "Sinais de referência urgente: nódulo endurecido e fixo, nódulo maior que 2 cm, ulceração, retração de pele ou mamilo, descarga sanguinolenta unilateral, linfonodo axilar suspeito, edema em casca de laranja e mudanças no aspecto da pele."
  ],
  numeros: [
    "Rastreio no SUS: 50–69 anos, bienal. BI-RADS 3 → 6 meses; BI-RADS 4 e 5 → biópsia."
  ],
  pega: "A idade do rastreamento é de política pública, e não a mesma das sociedades de especialidade, que indicam anual a partir dos 40. Em prova de Saúde Coletiva, vale o Ministério da Saúde."
},

"Colo do útero: lesões precursoras e rastreamento": {
  fonte: "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA/MS",
  pontos: [
    "A história natural: infecção persistente por HPV oncogênico (16 e 18 respondem por cerca de 70% dos casos) → lesão intraepitelial → câncer invasor, num processo que leva anos, o que torna o rastreamento eficaz.",
    "Recomendação clássica do MS: citologia dos 25 aos 64 anos, em mulheres que já tiveram atividade sexual, a cada 3 anos após dois exames anuais consecutivos normais.",
    "Nomenclatura: LSIL corresponde a NIC 1; HSIL corresponde a NIC 2 e 3. ASC-US é atipia de significado indeterminado, possivelmente não neoplásica; ASC-H é atipia em que não se pode excluir alto grau.",
    "Conduta por resultado, no essencial: ASC-US repete a citologia (6 meses acima dos 30 anos, 12 meses dos 25 aos 29); LSIL repete em 6 meses; ASC-H, HSIL, AGC e suspeita de invasão vão direto para colposcopia.",
    "Encerrar o rastreamento aos 64 anos exige dois exames negativos consecutivos nos últimos 5 anos.",
    "Situações particulares: gestante rastreia normalmente, e a conduta diante de alteração é adiada para depois do parto, salvo suspeita de invasão; imunossuprimida e mulher vivendo com HIV rastreiam com intervalo menor, semestral no primeiro ano e depois anual; histerectomia por doença benigna com colo retirado dispensa rastreamento.",
    "Mulheres sem história de atividade sexual não precisam ser rastreadas.",
    "Portaria Conjunta SAES/SECTICS 13/2025 move o exame primário para o teste de DNA-HPV — vale conferir qual versão a prova está cobrando."
  ],
  pega: "Rastrear antes dos 25 anos faz mal: a maior parte das lesões nessa idade regride sozinha, e o excesso de conizações aumenta prematuridade nas gestações seguintes."
},

"Coleta do colpocitológico e recomendações prévias": {
  fonte: "Caderno de Atenção Básica 13, MS · Diretrizes do rastreamento, INCA",
  pontos: [
    "Orientações prévias: não usar duchas, cremes ou medicamentos vaginais nas 48 horas anteriores, evitar relação sexual no mesmo período e não estar menstruada — com exceção de sangramento anormal, que pode e deve ser investigado.",
    "A coleta é dupla: ectocérvice, com a espátula de Ayre girada 360°, e endocérvice, com a escova rotacionada.",
    "Amostra satisfatória precisa de representação da junção escamocolunar — células escamosas e glandulares ou metaplásicas. Sem isso, o exame é insatisfatório e repete.",
    "Fixação imediata para não perder o material; identificação correta da lâmina e preenchimento completo da requisição, incluindo data da última menstruação, uso de hormônio e antecedentes.",
    "Aproveite a consulta: é a hora do exame clínico das mamas, da atualização vacinal, da oferta de testagem de IST e da conversa sobre contracepção.",
    "Na gestante a coleta é feita, com cuidado, apenas na ectocérvice; não se usa escova endocervical."
  ],
  pega: "Exame sem junção escamocolunar não tranquiliza ninguém — é exame insatisfatório, e o próximo passo é repetir a coleta, não esperar três anos."
},

"Pré-natal: primeira consulta e ácido fólico": {
  fonte: "Atenção ao pré-natal de baixo risco — CAB 32, MS",
  pontos: [
    "Início o mais precoce possível, idealmente no primeiro trimestre. O mínimo preconizado é de 6 consultas: uma no primeiro trimestre, duas no segundo e três no terceiro.",
    "Na primeira consulta: história clínica e obstétrica completa, cálculo da idade gestacional e da data provável do parto (regra de Naegele), abertura do cartão da gestante, exame físico geral e obstétrico, e avaliação de risco.",
    "Ácido fólico 0,4 mg por dia, idealmente iniciado 30 dias antes da concepção e mantido até a 12ª semana. Em antecedente de defeito do tubo neural, a dose sobe para 4 a 5 mg.",
    "Sulfato ferroso 40 mg de ferro elementar por dia, profilático, a partir da 20ª semana e até o 3º mês pós-parto.",
    "Vacinas na gestação: dTpa a cada gestação a partir da 20ª semana, hepatite B, influenza e COVID-19 conforme calendário. Contraindicadas as de vírus vivo — tríplice viral, varicela, febre amarela (salvo risco elevado de exposição).",
    "Avaliação nutricional pelo IMC pré-gestacional, que define o ganho de peso recomendado na gestação."
  ],
  numeros: [
    "Ácido fólico 0,4 mg/dia (4 a 5 mg se antecedente de DTN). Ferro 40 mg/dia a partir da 20ª semana. Mínimo de 6 consultas."
  ],
  pega: "Ácido fólico iniciado no dia do diagnóstico de gravidez já perdeu boa parte do efeito: o fechamento do tubo neural acontece até a 4ª semana."
},

"Exames do pré-natal por trimestre: interpretação e conduta": {
  fonte: "Atenção ao pré-natal de baixo risco — CAB 32, MS",
  pontos: [
    "Primeiro trimestre: hemograma, tipagem sanguínea e fator Rh (com Coombs indireto se Rh negativo), glicemia de jejum, teste rápido e sorologia para sífilis (VDRL), HIV, hepatite B (HBsAg), toxoplasmose IgG e IgM, urina tipo I e urocultura, e ultrassom obstétrico quando disponível.",
    "Segundo trimestre: teste oral de tolerância à glicose com 75 g entre 24 e 28 semanas, e repetição de VDRL e HIV.",
    "Terceiro trimestre: hemograma, VDRL, HIV, HBsAg, toxoplasmose se suscetível, urocultura, e pesquisa de estreptococo do grupo B entre 35 e 37 semanas onde disponível.",
    "Diabetes gestacional: glicemia de jejum entre 92 e 125 mg/dL já fecha diagnóstico no primeiro trimestre; jejum ≥126 ou HbA1c ≥6,5% é diabetes prévio. No TOTG 75 g: jejum ≥92, 1 hora ≥180, 2 horas ≥153 — um valor alterado basta.",
    "Bacteriúria assintomática na gestante SE TRATA, sempre, mesmo sem sintoma, e repete urocultura de controle.",
    "Sífilis: tratar com penicilina benzatina, tratar a parceria e acompanhar com VDRL mensal. Penicilina é o único tratamento que trata o feto.",
    "Toxoplasmose IgG negativa e IgM negativa: suscetível, orientar prevenção e repetir a cada trimestre. IgM positiva pede teste de avidez, útil sobretudo antes das 16 semanas."
  ],
  numeros: [
    "TOTG 75 g: jejum 92 · 1 h 180 · 2 h 153 mg/dL. Um valor já diagnostica DMG."
  ],
  pega: "Rh negativo sem Coombs indireto é pré-natal incompleto. E bacteriúria assintomática fora da gestação não se trata — na gestação, trata."
},

"Consultas subsequentes, vacinas e encaminhamento ao alto risco": {
  fonte: "Atenção ao pré-natal de baixo risco — CAB 32, MS",
  pontos: [
    "Periodicidade: mensal até a 28ª semana, quinzenal da 28ª à 36ª e semanal da 36ª até o parto. O pré-natal não se encerra antes do parto — se passar de 41 semanas, avaliação em serviço de referência.",
    "Em cada consulta: peso e ganho ponderal, pressão arterial, altura uterina, batimentos cardiofetais, movimentação fetal, edema, e apresentação fetal a partir de 36 semanas.",
    "Altura uterina fora da curva pede investigação: acima, pensar em polidrâmnio, macrossomia, gemelar ou erro de data; abaixo, restrição de crescimento, oligoâmnio ou erro de data.",
    "Encaminhar ao alto risco: hipertensão, diabetes prévio ou DMG em uso de insulina, cardiopatia, nefropatia, doença autoimune, HIV, trombofilia, antecedente de prematuridade ou perdas de repetição, gemelaridade, malformação fetal, restrição de crescimento, isoimunização Rh e idade materna com outros fatores associados.",
    "Sinais que mandam à emergência obstétrica na hora: sangramento vaginal, perda de líquido, dor abdominal intensa, cefaleia com escotomas, pressão ≥140/90 com sintomas, redução ou ausência de movimentos fetais, febre e convulsão.",
    "A gestante deve conhecer a maternidade de referência antes do parto — vinculação é parte do pré-natal."
  ],
  pega: "Encaminhar ao alto risco não é dar alta do pré-natal na UBS: o acompanhamento continua compartilhado, e a equipe segue responsável pelo vínculo e pelas visitas."
},

/* --------------------------------------------------------- Hanseníase */

"Definição de caso, epidemiologia e transmissão": {
  fonte: "Guia prático sobre a hanseníase, MS, 2017 · Guia de Vigilância em Saúde, MS",
  pontos: [
    "Caso de hanseníase é a pessoa que apresenta um ou mais destes sinais cardinais e precisa de poliquimioterapia: lesão de pele com alteração de sensibilidade; espessamento de nervo periférico com alteração de sensibilidade, motora ou autonômica; baciloscopia positiva.",
    "Agente: Mycobacterium leprae, bacilo álcool-ácido resistente, intracelular obrigatório, de multiplicação lenta — tempo de geração de 11 a 16 dias.",
    "Transmissão: vias aéreas superiores, por contato prolongado e próximo com doente multibacilar não tratado. Não se transmite por objetos, aperto de mão ou convívio casual.",
    "Período de incubação longo, de 2 a 7 anos em média.",
    "O doente deixa de transmitir com a primeira dose da poliquimioterapia — o que sustenta o não isolamento e o tratamento ambulatorial.",
    "A maioria da população é naturalmente resistente; adoecer depende da resposta imune celular, o que explica o espectro clínico.",
    "É doença de notificação compulsória, semanal, e o Brasil é o segundo país do mundo em número de casos."
  ],
  pega: "Um sinal cardinal basta para o diagnóstico, que é clínico. Baciloscopia negativa NÃO afasta hanseníase — na paucibacilar ela é negativa por definição."
},

"Clínica dermatológica e neurológica · diagnóstico": {
  fonte: "Guia prático sobre a hanseníase, MS, 2017 · classificação de Madri e operacional da OMS",
  pontos: [
    "Formas clínicas (Madri): indeterminada (mancha hipocrômica com alteração de sensibilidade, sem espessamento neural), tuberculoide (placa bem delimitada, anestésica, poucas lesões, um nervo), dimorfa (lesões em número intermediário, bordas internas mal definidas, 'lesão em queijo suíço') e virchowiana (infiltração difusa, madarose, fácies leonina, muitos bacilos).",
    "Classificação operacional, que define o tratamento: paucibacilar até 5 lesões, multibacilar 6 ou mais lesões — ou baciloscopia positiva, que classifica como multibacilar independentemente do número.",
    "Avaliação de sensibilidade na lesão, nesta ordem de perda: térmica, depois dolorosa, depois tátil.",
    "Nervos mais acometidos: ulnar, mediano, radial, fibular comum, tibial posterior, facial, trigêmeo e auricular magno. Palpar todos, procurando espessamento, dor e choque.",
    "Avaliação neurológica simplificada: inspeção de olhos, mãos e pés, palpação de nervos, teste de sensibilidade com monofilamentos e teste de força muscular.",
    "Reações hansênicas: tipo 1 ou reversa (lesões que ficam eritematosas e infiltradas, neurite) — tratada com prednisona; tipo 2 ou eritema nodoso hansênico (nódulos dolorosos, febre, mal-estar) — tratada com talidomida, proibida para mulheres em idade fértil sem contracepção rigorosa.",
    "Diagnóstico é clínico e epidemiológico. Baciloscopia de raspado intradérmico auxilia; biópsia é exceção."
  ],
  pega: "Reação hansênica não é falha do tratamento nem recidiva, e a poliquimioterapia não se interrompe por causa dela. Neurite é urgência — corticoide imediato para não deixar sequela."
},

"PQT-U, critério de alta, incapacidades e contatos": {
  fonte: "Guia prático sobre a hanseníase, MS · Nota técnica do esquema único (PQT-U)",
  pontos: [
    "PQT-U: esquema único com rifampicina, dapsona e clofazimina para todos os casos, paucibacilares e multibacilares. O que muda é a duração — 6 doses para paucibacilar e 12 doses para multibacilar, tomadas mensalmente supervisionadas, em até 9 e 18 meses respectivamente.",
    "Dose mensal supervisionada na unidade; as demais, autoadministradas em casa.",
    "Critério de alta por cura: ter completado o número de doses no prazo, com avaliação neurológica, do grau de incapacidade e orientação para autocuidado.",
    "Graus de incapacidade: 0, sem problema; 1, diminuição ou perda de sensibilidade em olhos, mãos ou pés; 2, deformidade visível — lagoftalmo, garra, mão caída, pé caído, úlcera plantar, reabsorção.",
    "O grau de incapacidade é avaliado no diagnóstico E na alta: é indicador de qualidade do programa, porque grau 2 no diagnóstico significa diagnóstico tardio.",
    "Contatos: examinar todos os contatos domiciliares e sociais dos últimos 5 anos, avaliação dermatoneurológica, orientação e BCG — uma dose se não tiver cicatriz, uma dose adicional se tiver apenas uma. Não se dá BCG a contato com hanseníase já diagnosticada nem a pessoa vivendo com HIV.",
    "Autocuidado é parte do tratamento: hidratação e lubrificação de mãos e pés, inspeção diária, proteção ocular, calçado adequado."
  ],
  numeros: [
    "PQT-U: 6 doses (PB) em até 9 meses · 12 doses (MB) em até 18 meses. Contatos: 5 anos para trás; BCG conforme cicatriz."
  ],
  pega: "Clofazimina agora entra também para o paucibacilar — o esquema é único. E a rifampicina tinge a urina de laranja: avisar antes evita abandono."
},

/* -------------------------------------------------------- Tuberculose */

"Etiologia, transmissão, patogênese e história clínica": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019",
  pontos: [
    "Agente: Mycobacterium tuberculosis, o bacilo de Koch, aeróbio estrito, álcool-ácido resistente, de multiplicação lenta.",
    "Transmissão por aerossóis, na fala, tosse ou espirro do doente com TB pulmonar ou laríngea. Só a forma pulmonar e a laríngea transmitem.",
    "Atribuições da UBS: busca ativa de sintomático respiratório, diagnóstico, tratamento diretamente observado, exame dos contatos, tratamento da infecção latente, notificação e acompanhamento até a alta.",
    "Sintomático respiratório: tosse por 3 semanas ou mais na população geral. Em população vulnerável — pessoas vivendo com HIV, privadas de liberdade, em situação de rua, indígenas e profissionais de saúde — qualquer tempo de tosse já investiga.",
    "Quadro clássico: tosse produtiva, febre vespertina, sudorese noturna, emagrecimento e inapetência, por semanas.",
    "Patogênese: infecção primária costuma ser contida pela imunidade celular e fica latente; o adoecimento vem por reativação (principalmente) ou reinfecção, e a imunossupressão é o grande gatilho.",
    "O doente em tratamento eficaz reduz muito a transmissão já nas primeiras 2 a 3 semanas."
  ],
  pega: "Buscar sintomático respiratório é tarefa da equipe inteira, não só do médico: perguntar sobre tosse em toda oportunidade é o que muda a curva da doença no território."
},

"Baciloscopia, TRM-TB, cultura e prova tuberculínica": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019",
  pontos: [
    "TRM-TB (teste rápido molecular) é o exame de escolha para o diagnóstico: detecta DNA do complexo M. tuberculosis e a resistência à rifampicina, em cerca de 2 horas, numa única amostra.",
    "Baciloscopia: onde não há TRM-TB, duas amostras de escarro. Continua sendo o exame de ACOMPANHAMENTO mensal do tratamento — o TRM-TB não serve para controle, porque detecta DNA de bacilo morto.",
    "Cultura com teste de sensibilidade: indicada em todos os casos com TRM-TB detectável, retratamento, falência, contatos de TB resistente, populações vulneráveis e suspeita de TB extrapulmonar.",
    "Radiografia de tórax: complementa, afasta outras doenças e avalia extensão. Não fecha nem exclui diagnóstico sozinha.",
    "Prova tuberculínica (PPD) NÃO diagnostica doença ativa: indica infecção. Leitura em 48 a 72 horas, medindo a enduração em milímetros.",
    "Corte atual para tratar infecção latente: 5 mm ou mais, independentemente de BCG prévia, nas indicações de ILTB. O IGRA é alternativa onde disponível.",
    "Em criança, o diagnóstico usa o sistema de pontuação: quadro clínico-radiológico, contato com adulto bacilífero, prova tuberculínica e estado nutricional."
  ],
  pega: "TRM-TB para diagnosticar, baciloscopia para acompanhar. Inverter os dois é o erro mais cobrado do tema."
},

"Esquema básico, DOTS/TDO e reações adversas": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019",
  pontos: [
    "Esquema básico do adulto: 2 meses de RHZE (rifampicina, isoniazida, pirazinamida e etambutol) na fase intensiva, e 4 meses de RH na fase de manutenção. Total de 6 meses, em dose fixa combinada.",
    "Meningoencefalite e TB osteoarticular: 2 meses de RHZE e 10 meses de RH, totalizando 12 meses. Na meningoencefalite, associa-se corticoide por 1 a 3 meses.",
    "Em menores de 10 anos não se usa etambutol: o esquema é RHZ.",
    "Tratamento diretamente observado (TDO) é parte do tratamento, não um extra: a tomada é presenciada por profissional, idealmente diária. A estratégia DOTS tem cinco pilares — compromisso político, diagnóstico por laboratório, TDO, suprimento regular de medicamentos e sistema de informação.",
    "Reações adversas menores, que se contornam: intolerância gástrica, artralgia (pirazinamida), neuropatia periférica (isoniazida — tratar com piridoxina), suor e urina alaranjados (rifampicina).",
    "Reações maiores, que fazem suspender: hepatotoxicidade com transaminases acima de 3 vezes o normal com sintomas, ou 5 vezes sem sintomas; exantema grave; trombocitopenia; neurite óptica (etambutol).",
    "Rifampicina reduz a eficácia de contraceptivos hormonais — orientar método adicional é obrigação da consulta."
  ],
  numeros: [
    "2 RHZE + 4 RH = 6 meses. Meningoencefalite e osteoarticular: 2 RHZE + 10 RH = 12 meses."
  ],
  pega: "Abandono é definido como 30 dias ou mais consecutivos sem tomar o medicamento — e é por isso que o TDO existe."
},

"Contatos, BCG, tratamento da ILTB e notificação": {
  fonte: "Manual de Recomendações para o Controle da Tuberculose no Brasil, MS, 2019 · Guia de Vigilância em Saúde",
  pontos: [
    "Todo contato de caso de TB pulmonar deve ser avaliado: sintomático, investiga doença ativa; assintomático, investiga infecção latente com prova tuberculínica ou IGRA e radiografia.",
    "Tratamento da ILTB, opções: isoniazida por 6 a 9 meses (270 doses em até 9 a 12 meses), rifampicina por 4 meses (120 doses, preferida em maiores de 50 anos, crianças e hepatopatas) ou rifapentina + isoniazida semanal por 3 meses (12 doses).",
    "Indicações de tratar ILTB com PT ≥5 mm: contatos, pessoas vivendo com HIV, uso de imunobiológicos, transplantados, silicose, alterações radiológicas de TB curada sem tratamento prévio.",
    "Criança contato menor de 10 anos, sem doença ativa, com PT ≥5 mm: trata ILTB. Recém-nascido contato de bacilífero não recebe BCG de imediato — faz quimioprofilaxia primária e a BCG depois, conforme o resultado da PT.",
    "BCG: dose única ao nascer, em crianças até 4 anos 11 meses e 29 dias. Protege contra as formas graves — miliar e meníngea —, não contra a forma pulmonar do adulto. Não se revacina por ausência de cicatriz.",
    "Notificação: tuberculose é de notificação compulsória semanal, pelo Sinan, e o acompanhamento mensal alimenta o mesmo sistema até o encerramento.",
    "Encerramento: cura, abandono, óbito, transferência, falência ou mudança de diagnóstico — e cada um é indicador do programa."
  ],
  pega: "Contato de TB não é 'quem mora junto' apenas: é quem convive em ambiente fechado com o doente, o que inclui trabalho e escola."
},

/* ---------------------------------------------------- Saúde indígena */

"SESAI, subsistema no SUS, DSEI e organização da rede": {
  fonte: "Lei 9.836/1999 (Lei Arouca) · Política Nacional de Atenção à Saúde dos Povos Indígenas · Decreto 7.336/2010",
  pontos: [
    "A Lei 9.836/1999, a Lei Arouca, acrescentou à Lei 8.080/90 o Subsistema de Atenção à Saúde Indígena — dentro do SUS, e não paralelo a ele.",
    "A SESAI, Secretaria Especial de Saúde Indígena, criada em 2010, é o órgão do Ministério da Saúde que gere o subsistema; antes disso a responsabilidade era da FUNASA.",
    "O território é organizado em 34 DSEI — Distritos Sanitários Especiais Indígenas —, recortados por critérios étnicos e territoriais, não por divisa de estado ou município.",
    "A rede vai do Polo Base e da Unidade Básica de Saúde Indígena, na aldeia, até a CASAI (Casa de Saúde Indígena), que apoia quem precisa se deslocar para média e alta complexidade nos serviços do SUS.",
    "As Equipes Multidisciplinares de Saúde Indígena (EMSI) incluem o agente indígena de saúde (AIS) e o agente indígena de saneamento (AISAN), que são a ponte com a comunidade.",
    "Controle social próprio: Conselhos Locais de Saúde Indígena, Conselhos Distritais (CONDISI) e o Fórum de Presidentes dos CONDISI.",
    "O subsistema é complementar: a média e a alta complexidade acontecem na rede do SUS, com os municípios e estados responsáveis."
  ],
  pega: "Subsistema não é sistema à parte: o indígena tem direito a todo o SUS, e o subsistema existe para garantir acesso diferenciado, não acesso menor."
},

"PNASPI, legislação, financiamento e principais desafios": {
  fonte: "Política Nacional de Atenção à Saúde dos Povos Indígenas (Portaria MS 254/2002) · Lei 9.836/1999",
  pontos: [
    "A PNASPI foi aprovada pela Portaria 254/2002 e tem como propósito garantir aos povos indígenas o acesso integral à saúde, respeitando suas especificidades culturais.",
    "Diretrizes: organização dos serviços em DSEI; preparação de recursos humanos para atuar em contexto intercultural; monitoramento das ações; articulação dos sistemas tradicionais com o oficial; promoção do uso adequado de medicamentos; promoção de ambientes saudáveis e saneamento; controle social.",
    "Atenção diferenciada: reconhecer e articular a medicina tradicional — parteiras, pajés, raizeiros — em vez de sobrepor-se a ela.",
    "Financiamento federal específico, com recursos do Ministério da Saúde repassados aos DSEI, e incentivo para municípios que executam ações em área indígena (IAB-PI).",
    "Perfil epidemiológico: dupla carga — alta incidência de doenças infecciosas e parasitárias, tuberculose, malária e desnutrição infantil, somada ao crescimento de hipertensão, diabetes, obesidade e alcoolismo.",
    "Desafios: rotatividade e fixação de profissionais, distâncias e logística, barreira linguística, saneamento e água potável, sub-registro e qualidade da informação, e conflitos territoriais, que são determinantes de saúde.",
    "O SIASI é o sistema de informação próprio do subsistema."
  ],
  pega: "A palavra que a prova cobra é 'atenção diferenciada': equidade aqui significa tratar diferente quem é diferente, e não oferecer o mesmo pacote a todos."
}

};
