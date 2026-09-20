/* =================================================================
   CONDUTA PARA ESTE PACIENTE

   Cruza a PA medida, o risco calculado pelo PREVENT e as condições
   associadas com o que já está descrito em data.js. Toda regra aqui
   nasce de ESTAGIOS, INICIO_LIMIARES, ESCALONAMENTO, COMBOS, PERFIS
   ou das contraindicações das próprias CLASSES — nada é inventado
   fora da DBHA 2025.

   A função devolve dados, não HTML: quem desenha é o app.js.
   ================================================================= */

const META_PA = "< 130/80 mmHg";

/* Rótulo curto de cada classe dentro de um esquema. O nome completo
   fica no cartão da classe; aqui o que serve é a etiqueta de receita. */
const ROT_CLASSE = {
  ieca: "IECA",
  bra: "BRA",
  bccdhp: "BCC di-hidropiridínico",
  bccndhp: "BCC não di-hidropiridínico",
  tiaz: "Diurético tiazídico",
  alca: "Diurético de alça",
  poupador: "Espironolactona",
  bb: "Betabloqueador",
  alfa: "Alfabloqueador",
  central: "Metildopa",
  vasodil: "Hidralazina",
};

const ORDINAL = ["1ª droga", "2ª droga", "3ª droga", "4ª droga"];

function classePorId(id) {
  return CLASSES.find((c) => c.id === id);
}

function comboPorTitulo(t) {
  return COMBOS.find((c) => c.titulo === t);
}

/* Estágio pelo critério "e/ou": vale a faixa mais alta entre sistólica
   e diastólica, exatamente como a tabela ESTAGIOS descreve. */
function estagioDe(pas, pad) {
  const fs = pas >= 180 ? 4 : pas >= 160 ? 3 : pas >= 140 ? 2 : pas >= 120 ? 1 : 0;
  const fd = pad >= 110 ? 4 : pad >= 100 ? 3 : pad >= 90 ? 2 : pad >= 80 ? 1 : 0;
  return Math.max(fs, fd);
}

function plural(n) {
  if (n >= 4) return "quatro ou mais anti-hipertensivos";
  return ["nenhum anti-hipertensivo", "um anti-hipertensivo",
          "dois anti-hipertensivos", "três anti-hipertensivos"][n];
}

/* -----------------------------------------------------------------
   p = { pas, pad, idade, tfg, rac, potassio, diabetes, faixa,
         nDrogas, cond: { ... } }
------------------------------------------------------------------*/
function condutaPaciente(p) {
  const estIdx = estagioDe(p.pas, p.pad);
  const estagio = ESTAGIOS[estIdx];
  const naMeta = p.pas < 130 && p.pad < 80;
  const altoRisco = p.faixa === "Alto";
  const faixa130 = !naMeta && p.pas < 140 && p.pad < 90;
  const sistolicaIsolada = p.pas >= 140 && p.pad < 90;
  const albuminuria = Number.isFinite(p.rac) && p.rac >= 30;
  const tfgBaixa = Number.isFinite(p.tfg) && p.tfg < 30;
  const kAlto = Number.isFinite(p.potassio) && p.potassio > 5.5;
  const c = p.cond || {};
  const nUso = p.nDrogas || 0;

  /* ---------- tratar, manter ou escalar ---------- */
  let decisao;
  if (nUso > 0 && naMeta) {
    decisao = {
      chave: "manter",
      rot: "Na meta — manter o esquema",
      txt: `Com ${plural(nUso)} a PA está abaixo de 130/80. Mantenha o esquema e as medidas não medicamentosas. A diretriz não define limite inferior: se a sistólica cair abaixo de 120 e o paciente estiver assintomático, mantenha a medicação.`,
    };
  } else if (nUso > 0) {
    decisao = {
      chave: "escalar",
      rot: "Fora da meta — escalar o tratamento",
      txt: `Com ${plural(nUso)} a PA segue em ${p.pas}/${p.pad} mmHg, acima da meta de ${META_PA}. Antes de acrescentar mais uma droga, confirme adesão e técnica de medida e otimize a dose do que já está em uso.`,
    };
  } else if (p.pas >= 140 || p.pad >= 90) {
    decisao = { chave: "iniciar", rot: "Iniciar medicação agora", txt: INICIO_LIMIARES[2].txt };
  } else if (faixa130 && altoRisco) {
    decisao = {
      chave: "condicional",
      rot: "Medicação se não controlar em três meses",
      txt: INICIO_LIMIARES[1].txt,
    };
  } else if (faixa130) {
    decisao = {
      chave: "mev",
      rot: "Só medidas não medicamentosas",
      txt: `Na faixa 130–139/80–89 o remédio só entra quando o risco cardiovascular é alto. Aqui o PREVENT deu risco ${String(p.faixa).toLowerCase()}: conduta não medicamentosa, com reavaliação periódica do risco.`,
    };
  } else {
    decisao = {
      chave: "mev",
      rot: "Só medidas não medicamentosas",
      txt: "Abaixo de 130/80 a conduta é de medidas não medicamentosas e controle dos demais fatores de risco.",
    };
  }

  /* ---------- quantas drogas ---------- */
  /* Os critérios de monoterapia são os do primeiro degrau do
     ESCALONAMENTO; fora deles a diretriz já começa com dois. */
  const mono =
    (faixa130 && altoRisco) ||
    (estIdx === 2 && p.faixa === "Baixo") ||
    p.idade >= 80 ||
    !!c.fragil;

  let nAlvo;
  if (decisao.chave === "manter") nAlvo = Math.min(Math.max(nUso, 1), 4);
  else if (decisao.chave === "escalar") nAlvo = Math.min(nUso + 1, 4);
  else nAlvo = mono ? 1 : 2;

  const passo = {
    idx: nAlvo - 1,
    nome: ESCALONAMENTO[nAlvo - 1][0],
    txt: ESCALONAMENTO[nAlvo - 1][1],
  };

  /* ---------- quais classes ---------- */
  const cand = [];
  const evitar = [];
  const alertas = [];
  const blq = {};
  const achar = (k) => cand.find((e) => e.chave === k);

  function add(chave, ids, rot, motivo, obrig) {
    if (blq[chave]) return;
    let e = achar(chave);
    if (!e) {
      e = { chave, ids: ids.slice(), rot, cor: classePorId(ids[0]).cor, motivos: [], obrig: !!obrig };
      cand.push(e);
    } else if (ids.length < e.ids.length) {
      // uma condição específica estreitou a escolha (ex.: gota → losartana)
      e.ids = ids.slice();
      e.rot = rot;
      e.cor = classePorId(ids[0]).cor;
    }
    if (obrig) e.obrig = true;
    if (motivo && !e.motivos.includes(motivo)) e.motivos.push(motivo);
  }

  function bloquear(chave, rot, motivo) {
    blq[chave] = true;
    const i = cand.findIndex((e) => e.chave === chave);
    if (i >= 0) cand.splice(i, 1);
    if (!evitar.some((x) => x.rot === rot)) evitar.push({ rot, motivo });
  }

  if (c.gestante) {
    bloquear("sraa", "IECA, BRA e alisquireno", "Proibidos na gestação — risco de lesão fetal");
    add("central", ["central"], "Metildopa", "Gestação — primeira escolha clássica", true);
    add("bccdhp", ["bccdhp"], "Nifedipino retard", "Gestação — BCC liberado", true);
    add("vasodil", ["vasodil"], "Hidralazina", "Gestação — completa o esquema (labetalol se disponível)", true);
  } else {
    if (c.icfer) {
      bloquear("bccndhp", "Verapamil e diltiazem", "Inotrópicos negativos — evitar na IC com FE reduzida");
      add("sraa", ["ieca", "bra"], "IECA ou BRA", "IC com FE reduzida — ou sacubitril-valsartana no lugar", true);
      add("bb", ["bb"], ROT_CLASSE.bb, "IC com FE reduzida — reduz mortalidade", true);
      add("poupador", ["poupador"], ROT_CLASSE.poupador, "IC com FE reduzida — antagonista mineralocorticoide no esquema", true);
      alertas.push({
        tipo: "atencao",
        titulo: "O esquema da insuficiência cardíaca vem antes",
        txt: "Na IC com FE reduzida o esquema é IECA/BRA ou sacubitril-valsartana + betabloqueador + espironolactona + iSGLT2. Ele já é o tratamento da hipertensão — não monte um esquema anti-hipertensivo separado.",
      });
    }
    if (c.coronaria) {
      add("bb", ["bb"], ROT_CLASSE.bb, "Pós-infarto e doença coronariana — reduz mortalidade e isquemia", true);
      add("sraa", ["ieca"], ROT_CLASSE.ieca, "Pós-infarto e doença coronariana — a dupla da diretriz é BB + IECA", true);
    }
    if (c.avc) {
      add("sraa", ["ieca"], ROT_CLASSE.ieca, "Pós-AVC — IECA + tiazídico, depois da fase aguda", true);
      add("tiaz", ["tiaz"], ROT_CLASSE.tiaz, "Pós-AVC — IECA + tiazídico, depois da fase aguda", true);
    }
    if (albuminuria) {
      add("sraa", ["ieca", "bra"], "IECA ou BRA",
        p.diabetes
          ? "Diabetes com albuminúria (RAC ≥ 30) — nefroproteção, obrigatório no esquema"
          : "Albuminúria (RAC ≥ 30) — nefroproteção na doença renal proteinúrica",
        true);
    }
    if (c.fa) {
      add("bb", ["bb"], ROT_CLASSE.bb, "Fibrilação atrial — controle de frequência", true);
    }
    if (c.gota) {
      bloquear("tiaz", ROT_CLASSE.tiaz, "Gota — o tiazídico eleva o ácido úrico");
      add("sraa", ["bra"], "Losartana (BRA)", "Gota — a losartana é uricosúrica", true);
      add("bccdhp", ["bccdhp"], ROT_CLASSE.bccdhp, "Gota — alternativa segura", true);
    }
    if (c.osteoporose) {
      add("tiaz", ["tiaz"], ROT_CLASSE.tiaz, "Osteoporose — o tiazídico reduz a calciúria", true);
    }
    /* A preferência por BCC ou tiazídico só muda a escolha quando o
       paciente vai ficar com uma droga só: é aí que o PERFIS aponta
       menor resposta ao bloqueio do SRAA. */
    if (nAlvo === 1 && c.negra) {
      add("bccdhp", ["bccdhp"], ROT_CLASSE.bccdhp, "Pessoa negra — menor resposta a IECA/BRA em monoterapia");
      add("tiaz", ["tiaz"], ROT_CLASSE.tiaz, "Pessoa negra — menor resposta a IECA/BRA em monoterapia");
    }
    if (nAlvo === 1 && sistolicaIsolada && p.idade >= 65) {
      add("bccdhp", ["bccdhp"], ROT_CLASSE.bccdhp, "Idoso com hipertensão sistólica isolada");
      add("tiaz", ["tiaz"], ROT_CLASSE.tiaz, "Idoso com hipertensão sistólica isolada");
    }

    // o trio padrão fecha a lista
    add("sraa", ["ieca", "bra"], "IECA ou BRA", "Trio padrão da diretriz: IECA ou BRA + BCC + tiazídico");
    add("bccdhp", ["bccdhp"], ROT_CLASSE.bccdhp, "Trio padrão da diretriz: IECA ou BRA + BCC + tiazídico");
    add("tiaz", ["tiaz"], ROT_CLASSE.tiaz, "Trio padrão da diretriz: IECA ou BRA + BCC + tiazídico");

    if (tfgBaixa) {
      const i = cand.findIndex((e) => e.chave === "tiaz");
      const obrig = i >= 0 ? cand[i].obrig : false;
      bloquear("tiaz", ROT_CLASSE.tiaz, "TFG < 30 — o tiazídico perde eficácia");
      const alca = {
        chave: "alca", ids: ["alca"], rot: ROT_CLASSE.alca, cor: classePorId("alca").cor,
        motivos: ["TFG < 30 — no lugar do tiazídico, diurético de alça"], obrig,
      };
      if (i >= 0) cand.splice(i, 0, alca);
      else cand.push(alca);
    }

    if (nAlvo >= 4) {
      if (kAlto || tfgBaixa) {
        alertas.push({
          tipo: "nao",
          titulo: "Espironolactona contraindicada neste paciente",
          txt: `${kAlto ? "Potássio acima de 5,5" : "TFG abaixo de 30"} — a quarta droga da diretriz é a espironolactona, mas a associação com IECA/BRA é contraindicada nessa situação. A quarta droga passa a ser individualizada: reveja as classes e considere encaminhamento ao especialista.`,
        });
      } else {
        add("poupador", ["poupador"], ROT_CLASSE.poupador, "Quarta droga de escolha na hipertensão resistente (DBHA 2025)", true);
      }
    }
  }

  const obrigs = cand.filter((e) => e.obrig);
  const resto = cand.filter((e) => !e.obrig);
  const esquema = obrigs.concat(resto).slice(0, Math.max(nAlvo, obrigs.length));
  esquema.forEach((e, i) => { e.ordem = ORDINAL[i] || `${i + 1}ª droga`; });

  /* ---------- combinações a vigiar ---------- */
  const tem = (k) => esquema.some((e) => e.chave === k);
  const marcar = (tipo, titulo) => {
    const x = comboPorTitulo(titulo);
    if (x && !alertas.some((a) => a.titulo === titulo)) {
      alertas.push({ tipo, titulo: x.titulo, txt: x.txt });
    }
  };

  if (tem("sraa") && esquema.find((e) => e.chave === "sraa").ids.length > 1) {
    marcar("nao", "IECA + BRA");
  }
  if (tem("bb") && tem("bccndhp")) marcar("nao", "Betabloqueador + verapamil ou diltiazem");
  if (tem("bb") && tem("tiaz") && p.diabetes) marcar("atencao", "Betabloqueador + diurético tiazídico");
  if (tem("sraa") && tem("poupador")) marcar("atencao", "IECA/BRA + espironolactona");

  if (!c.gestante && c.asma && tem("bb")) {
    alertas.push({
      tipo: "atencao",
      titulo: "Asma ou DPOC com betabloqueador",
      txt: "Evitar betabloqueador não seletivo. Se a indicação cardiológica for forte, usar β1-seletivo com cautela.",
    });
  }
  if (c.hpb) {
    alertas.push({
      tipo: "atencao",
      titulo: "Hiperplasia prostática benigna",
      txt: "O alfabloqueador (doxazosina) trata os dois, mas entra como droga adicional, nunca como primeira escolha.",
    });
  }
  if (c.enxaqueca) {
    alertas.push({
      tipo: "atencao",
      titulo: "Enxaqueca",
      txt: "Betabloqueador e verapamil têm efeito profilático na enxaqueca — se houver outra indicação para eles, ganham preferência.",
    });
  }
  if (estIdx === 4) {
    alertas.push({
      tipo: "nao",
      titulo: "PA ≥ 180 e/ou ≥ 110",
      txt: "Procure lesão aguda de órgão-alvo antes de mandar para casa. Com lesão, é emergência hipertensiva: UTI e anti-hipertensivo endovenoso. Sem lesão, ajuste a medicação por via oral e reavalie em até sete dias.",
    });
  }
  if (nUso >= 3 && !naMeta) {
    alertas.push({
      tipo: "atencao",
      titulo: "Hipertensão resistente",
      txt: "PA fora da meta com três ou mais drogas, uma delas diurético, define hipertensão resistente. Confirme com MAPA ou MRPA, revise adesão, sal, álcool, anti-inflamatórios e investigue causa secundária.",
    });
  }

  /* ---------- combinação de referência, com exemplos de comprimido ---------- */
  const chaves = esquema.map((e) => e.chave).sort().join("+");
  const REFERENCIA = {
    "bccdhp+sraa": "IECA ou BRA + BCC di-hidropiridínico",
    "sraa+tiaz": "IECA ou BRA + diurético tiazídico",
    "bccdhp+tiaz": "BCC + diurético tiazídico",
    "bccdhp+sraa+tiaz": "Tripla: IECA ou BRA + BCC + tiazídico",
    "bccdhp+poupador+sraa+tiaz": "Quarta droga: espironolactona",
  };
  const referencia = REFERENCIA[chaves] ? comboPorTitulo(REFERENCIA[chaves]) : null;

  return {
    estagio, estIdx, naMeta, meta: META_PA,
    decisao, passo, nAlvo, nUso, esquema, evitar, alertas, referencia,
    monoJustificada: mono,
  };
}
