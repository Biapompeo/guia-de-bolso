/* =================================================================
   Casos clínicos entregues pela coordenação para a aula de terça,
   22 de setembro, 13h — tuberculose e hanseníase, com o Prof. Tiago.

   O enunciado é o do documento, resumido; as respostas são minhas,
   ancoradas no Manual de Recomendações para o Controle da Tuberculose
   (MS, 2019) e no Guia prático sobre a hanseníase (MS, 2017). Servem
   para chegar na aula com a discussão pronta — não para substituir o
   que o professor vai dizer.
   ================================================================= */

const CASOS = {

tb: [
  {
    n: "Caso 1",
    quem: "N.E.P., 48 anos, dona de casa, cinco filhos",
    historia: "Tosse há pouco mais de um mês, no início seca e agora produtiva. Febre esporádica não aferida. Procurou ajuda porque perdeu 14 kg em três semanas. Nega TB na família e TB prévia. Visita semanalmente o filho presidiário há quatro anos. Tabagista desde a adolescência. Foi lavradora na infância e na adolescência.",
    exame: "Regular estado geral, desnutrida, hipocorada. Dentição em péssimo estado. Murmúrio vesicular presente, com discretos sibilos e roncos bibasais. Abdome escavado e indolor.",
    perguntas: [
      { p: "Principal hipótese diagnóstica",
        r: "Tuberculose pulmonar. Ela é sintomática respiratória (tosse > 3 semanas) e soma emagrecimento acentuado, febre e um vínculo epidemiológico forte: visita semanal a presídio há quatro anos, ambiente de altíssima transmissão. Contato de população privada de liberdade entra como vulnerável." },
      { p: "Principais diagnósticos diferenciais",
        r: "Câncer de pulmão — tabagista de longa data com perda ponderal rápida. Paracoccidioidomicose — ex-lavradora, e Mato Grosso é área endêmica; a forma crônica imita TB inclusive na radiografia. Pneumonia bacteriana arrastada ou abscesso, sobretudo com a dentição em péssimo estado (aspiração). Bronquiectasia infectada, DPOC exacerbada. E, sempre, HIV com doença oportunista." },
      { p: "Conduta propedêutica",
        r: "TRM-TB em amostra de escarro, que é o exame de escolha e já informa resistência à rifampicina. Cultura com teste de sensibilidade — obrigatória aqui, por ser contato de população privada de liberdade. Radiografia de tórax. Teste de HIV para todo caso de TB. Pesquisa de fungos no escarro pelo diferencial com paracoccidioidomicose. Avaliação nutricional. Se confirmar, notificar, iniciar tratamento com TDO e examinar os contatos domiciliares." }
    ],
    chave: "O vínculo epidemiológico é o dado que muda tudo: visitar presídio semanalmente é exposição, e transforma tosse de um mês em investigação prioritária."
  },
  {
    n: "Caso 2",
    quem: "M.M.S., 61 anos, sem comorbidades, internada para investigação",
    historia: "Tosse seca há pouco mais de três semanas, três episódios de febre vespertina com sudorese noturna, sem emagrecimento. Foi cuidadora do filho durante toda a doença dele; ele morreu há seis meses por complicações de TB pulmonar. Relata que os médicos diziam que o tratamento normal não servia para o filho, porque a bactéria dele era mais resistente.",
    exame: "Bom estado geral, ausculta normal, sem outras alterações.",
    perguntas: [
      { p: "Principal hipótese diagnóstica",
        r: "Tuberculose pulmonar em contato domiciliar de caso com tuberculose provavelmente resistente. A frase sobre o tratamento que 'não servia' descreve TB multirresistente, e quem se infecta a partir de um caso resistente adoece com a mesma cepa." },
      { p: "Conduta propedêutica",
        r: "TRM-TB, que detecta o DNA e a resistência à rifampicina. E CULTURA COM TESTE DE SENSIBILIDADE obrigatoriamente — contato de TB resistente é indicação formal, e o TRM só cobre a rifampicina. Radiografia de tórax e teste de HIV. Buscar a documentação do tratamento do filho, que orienta a suspeita. Se houver resistência à rifampicina, NÃO iniciar o esquema básico: encaminhar à referência terciária, que define o esquema especial. Notificar como caso e registrar o vínculo." }
    ],
    chave: "Diante de contato de caso resistente, cultura com teste de sensibilidade não é exame complementar: é o exame que define o tratamento. Começar RHZE às cegas amplia a resistência."
  },
  {
    n: "Caso 3",
    quem: "T.T.F., 27 anos, estudante de medicina do 5º ano",
    historia: "Dispneia, febre e tosse produtiva há três dias. Preocupado por estar acompanhando, na enfermaria, um paciente com tuberculose pleural.",
    exame: "Regular estado geral, febril (38,1 °C), taquidispneico (26 irpm), normotenso. Estertores em terço médio direito.",
    perguntas: [
      { p: "Principal hipótese diagnóstica",
        r: "Pneumonia adquirida na comunidade. Três dias de evolução com febre, dispneia e estertor localizado é quadro agudo; tuberculose é doença de semanas a meses. E a exposição que o preocupa não explica nada: tuberculose PLEURAL é forma extrapulmonar e não transmite, e mesmo uma exposição real não produziria doença em três dias — o período entre infecção e adoecimento é de semanas a anos." },
      { p: "Conduta propedêutica",
        r: "Radiografia de tórax e avaliação de gravidade (CURB-65 ou CRB-65) para decidir tratamento ambulatorial ou internação. Tratamento antimicrobiano para PAC conforme o protocolo local. Se houver fatores de gravidade, exames complementares e saturação. Tranquilizá-lo quanto à TB — e, à parte, por ser estudante em contato ocupacional, discutir rastreamento de infecção latente com prova tuberculínica ou IGRA no momento oportuno, que é conduta de saúde do trabalhador, não de urgência." }
    ],
    chave: "O caso existe para ensinar duas coisas: o tempo de evolução separa TB de pneumonia, e forma extrapulmonar não transmite."
  }
],

han: [
  {
    n: "Caso 1",
    quem: "Bento, 39 anos, cuidador de idosos",
    historia: "Mancha branca atrás do braço direito há alguns meses. Consultou há dois meses, prescreveram hidratação, e não melhorou. Nega hanseníase prévia, na família ou contato conhecido.",
    exame: "Mácula hipocrômica no tríceps direito, bordas bem delimitadas, com confusão no teste de sensibilidade térmica. Mácula hipocrômica na nádega esquerda, com perda da sensibilidade térmica e confusão no teste doloroso. Nervo tibial esquerdo espessado; demais troncos não palpáveis.",
    perguntas: [
      { p: "Dá para diagnosticar nesta consulta?",
        r: "Dá. O diagnóstico da hanseníase é clínico e epidemiológico, e ele tem dois sinais cardinais: lesões de pele com alteração de sensibilidade e espessamento de nervo periférico. Um bastaria. Não é preciso baciloscopia nem biópsia para começar, e a ausência de contato conhecido não afasta — a incubação é de anos." },
      { p: "Conduta propedêutica",
        r: "Baciloscopia de raspado intradérmico, que ajuda na classificação operacional (positiva classifica como multibacilar, independentemente do número de lesões). Avaliação neurológica simplificada completa, com monofilamentos, palpação de todos os troncos e teste de força, registrando o grau de incapacidade no diagnóstico. Biópsia só em caso duvidoso." },
      { p: "Conduta terapêutica",
        r: "Iniciar PQT-U na própria consulta. Com duas lesões e um tronco nervoso acometido, a classificação operacional é paucibacilar: seis doses mensais supervisionadas, em até nove meses. Se a baciloscopia vier positiva, reclassifica para multibacilar e passa a doze doses." },
      { p: "Orientações de alta da consulta",
        r: "Que a doença tem cura e o tratamento é gratuito; que ele deixa de transmitir já com a primeira dose, sem afastamento do trabalho; que a dose mensal é tomada na unidade e as outras em casa; que a rifampicina tinge urina, suor e lágrima de laranja; que todos os contatos domiciliares e sociais dos últimos cinco anos precisam ser examinados e receber BCG conforme a cicatriz; autocuidado com mãos, pés e olhos; e que dor em nervo, piora das lesões ou perda de força pedem retorno imediato, porque neurite é urgência." }
    ],
    chave: "Mancha branca que não melhora com hidratante e tem alteração de sensibilidade é hanseníase até prova em contrário. Testar sensibilidade é o que o primeiro médico não fez."
  },
  {
    n: "Caso 2",
    quem: "Margareth, 42 anos, manicure, na sexta cartela do tratamento",
    historia: "Astenia, mialgia, artralgia, cefaleia e febre alta, com surgimento de manchas acastanhadas dolorosas por todo o corpo. Está na última cartela do remédio para hanseníase.",
    exame: "Regular estado geral, febril (39,8 °C), taquicárdica. Nódulos subcutâneos difusos, dolorosos e acastanhados. Nenhum nervo espessado ou doloroso.",
    perguntas: [
      { p: "Diagnóstico mais provável",
        r: "Reação hansênica tipo 2 — eritema nodoso hansênico. Nódulos subcutâneos dolorosos e disseminados, com febre alta e sintomas sistêmicos, em paciente multibacilar em tratamento. É quadro imunomediado, não infecção nova nem falha do tratamento." },
      { p: "Conduta propedêutica",
        r: "Avaliação neurológica simplificada para excluir neurite associada, que aqui está ausente. Afastar outros focos infecciosos que disparam reação — dentário, urinário, parasitose. Hemograma e exames básicos. Graduar a gravidade da reação, porque é isso que define a droga." },
      { p: "Conduta terapêutica",
        r: "NÃO suspender a poliquimioterapia: a reação não interrompe o tratamento. Tratar a reação — talidomida é a droga de escolha no eritema nodoso, mas ela é teratogênica e a paciente tem 42 anos e está em idade fértil: só com termo de responsabilidade e contracepção rigorosa, conforme a regulação. Sem essa garantia, prednisona 1 mg/kg/dia, com desmame lento; pentoxifilina como adjuvante. Analgesia e reavaliação próxima." },
      { p: "Orientações de alta da consulta",
        r: "Que isso é reação e não recidiva nem falha; que o tratamento continua até a última dose; que ela precisa voltar se surgir dor em nervo, formigamento, perda de força ou piora ocular, porque aí há neurite; e, se usar talidomida, toda a orientação sobre contracepção e a proibição de repassar o medicamento." }
    ],
    chave: "Reação hansênica é o que mais confunde: parece piora, mas o tratamento não para. E talidomida em mulher em idade fértil é a pegadinha da questão."
  },
  {
    n: "Caso 3",
    quem: "Michelson, 36 anos, auxiliar de pedreiro, três meses após alta",
    historia: "Terminou tratamento para hanseníase paucibacilar há três meses. Volta com piora das duas lesões antigas, no antebraço direito e no mento, e lesões novas no abdome, todas hiperemiadas. A do mento arde. Dor limitante na perna direita e no antebraço direito.",
    exame: "Placas eritematosas em antebraço direito, mento e abdome; a do mento dolorosa à palpação. Nervos ulnar direito e fibular direito espessados e dolorosos, com dor irradiada.",
    perguntas: [
      { p: "Diagnóstico mais provável",
        r: "Reação hansênica tipo 1, ou reversa, com neurite. As lesões antigas que se reativam e ficam eritematosas e infiltradas, com nervos espessados e dolorosos, são a assinatura da reação reversa — que pode ocorrer durante o tratamento e até anos depois da alta. O diferencial é recidiva, bem mais rara e de instalação lenta, sem esse componente inflamatório agudo." },
      { p: "Conduta propedêutica",
        r: "Avaliação neurológica simplificada imediata, com monofilamentos e força, documentando o grau de incapacidade. Baciloscopia se houver dúvida com recidiva. Se a suspeita de recidiva persistir, encaminhar à referência — recidiva exige reinício de esquema, reação não." },
      { p: "Conduta terapêutica",
        r: "Corticoide já: prednisona 1 mg/kg/dia, porque neurite é urgência e cada dia sem tratamento vira sequela. Imobilizar o membro na fase aguda, analgesia, e desmame lento, com acompanhamento mensal da função neural. NÃO reiniciar a poliquimioterapia: reação não é recidiva." },
      { p: "Orientações de alta da consulta",
        r: "Que a reação pode acontecer depois da cura e não significa que a doença voltou; que o corticoide é longo e não se interrompe por conta própria; os efeitos a vigiar — pressão, glicemia, peso; retorno imediato se a força piorar; e autocuidado da mão e do pé acometidos." }
    ],
    chave: "Reação depois da alta não é recidiva. Confundir as duas leva a repetir PQT sem necessidade e a atrasar o corticoide, que é o que salva o nervo."
  },
  {
    n: "Caso 4",
    quem: "Saraiva, 78 anos, lavrador aposentado, tratado há cinco anos",
    historia: "Úlcera profunda no pé direito, de longa data, que há dois dias piorou com odor fétido, hiperemia, edema de todo o pé e febre. Nega diabetes, tem hipertensão. Foi tratado para hanseníase multibacilar por dois anos, há cinco anos. Como continuava com dormência nos pés e a baciloscopia deu positiva de novo, o médico da unidade recomeçou o tratamento. Baciloscopias: índice baciloscópico 5,5 em 2013 e 2 em 2020.",
    exame: "Bom estado geral, descorado e desidratado 1+/4+. Lesão perfurante plantar direita drenando secreção purulenta, com flogose de todo o pé. Nenhum nervo espessado ou doloroso. Perda de sensibilidade tátil nos pés.",
    perguntas: [
      { p: "Diagnóstico mais provável",
        r: "Mal perfurante plantar infectado — úlcera neuropática complicada por infecção de partes moles, possivelmente com osteomielite —, como SEQUELA da hanseníase já tratada. É incapacidade grau 2. Não é recidiva: o índice baciloscópico está caindo (5,5 para 2), e bacilo morto permanece detectável por anos; dormência residual é sequela neural, não atividade de doença. O retratamento iniciado na unidade foi indevido." },
      { p: "Conduta propedêutica",
        r: "Avaliar a profundidade da úlcera e sondar osso, radiografia do pé para osteomielite, hemograma e provas inflamatórias, glicemia (a suspeita de diabetes precisa ser afastada, mesmo negada). Avaliação neurológica e registro do grau de incapacidade. Rever a documentação do tratamento anterior e a sequência de baciloscopias antes de qualquer decisão sobre recidiva." },
      { p: "Conduta terapêutica",
        r: "Tratar a infecção: antibiótico com cobertura para flora mista, desbridamento e curativo, internação se houver sinais sistêmicos ou osteomielite. Repouso e alívio de carga no pé — sem descarga a úlcera não fecha. SUSPENDER o retratamento de hanseníase, que não tem indicação. Encaminhar para reabilitação e adaptação de calçado." },
      { p: "Orientações de alta da consulta",
        r: "Que a hanseníase dele está curada e a dormência é sequela, não doença ativa; que a úlcera vem da perda de sensibilidade e por isso ele não sente o trauma — inspeção diária do pé com espelho, hidratação, calçado adequado e nunca andar descalço; sinais de infecção que exigem retorno; e acompanhamento na unidade para prevenção de novas úlceras." }
    ],
    chave: "Baciloscopia positiva depois da alta não é critério de recidiva. Recidiva é clínica, com sinais de atividade e índice baciloscópico em ASCENSÃO em relação ao anterior — aqui ele está caindo."
  }
]

};
