/* =================================================================
   PREVENT — Predicting Risk of cardiovascular disease EVENTs
   American Heart Association (Khan SS et al., Circulation 2023).
   Adotado pela Diretriz Brasileira de Hipertensão Arterial 2025
   como a ferramenta de estratificação de risco cardiovascular.

   Modelo base: sem HbA1c, sem relação albumina/creatinina e sem
   índice de privação social (este último depende de CEP dos EUA).

   Centralização, conforme a publicação original:
     idade 55 · não-HDL 3,5 mmol/L · HDL 1,3 mmol/L · PAS 130
     IMC 25 · TFGe 90 — e, nos termos em spline, o valor do nó.
   ================================================================= */

const PREVENT_LIMITES = {
  idade: [30, 79],
  pas: [90, 180],
  colesterolTotal: [130, 320],
  hdl: [20, 100],
  tfg: [15, 140],
  imc: [18.5, 39.9],
};

/* mg/dL -> mmol/L para colesterol */
const paraMmol = (mgdl) => mgdl * 0.02586;

/* CKD-EPI 2021, sem coeficiente de raça — para estimar a TFG a
   partir da creatinina, quando ela não vier pronta do laboratório. */
function tfgCkdEpi2021({ creatinina, idade, sexo }) {
  const fem = sexo === "F";
  const k = fem ? 0.7 : 0.9;
  const a = fem ? -0.241 : -0.302;
  const r = creatinina / k;
  return (
    142 *
    Math.pow(Math.min(r, 1), a) *
    Math.pow(Math.max(r, 1), -1.2) *
    Math.pow(0.9938, idade) *
    (fem ? 1.012 : 1)
  );
}

/* Monta o vetor de preditores. `anos` = 10 ou 30. */
function preditoresPrevent(p, anos) {
  // O IMC tem coeficiente zero nos desfechos DCV total e ASCVD — ele só pesa
  // no modelo de insuficiência cardíaca, que este app não exibe. Por isso o
  // formulário não pede IMC; o valor de centralização entra como neutro.
  if (typeof p.imc !== "number") p = { ...p, imc: 25 };
  const idade = (p.idade - 55) / 10;
  const naoHdl = paraMmol(p.colesterolTotal - p.hdl) - 3.5;
  const hdl = (paraMmol(p.hdl) - 1.3) / 0.3;
  const pasBaixa = (Math.min(p.pas, 110) - 110) / 20;
  const pasAlta = (Math.max(p.pas, 110) - 130) / 20;
  const imcBaixo = (Math.min(p.imc, 30) - 25) / 5;
  const imcAlto = (Math.max(p.imc, 30) - 30) / 5;
  const tfgBaixa = (Math.min(p.tfg, 60) - 60) / -15;
  const tfgAlta = (Math.max(p.tfg, 60) - 90) / -15;
  const dm = p.diabetes ? 1 : 0;
  const fumo = p.fumante ? 1 : 0;
  const antiHas = p.usaAntiHipertensivo ? 1 : 0;
  const estatina = p.usaEstatina ? 1 : 0;

  const v = {
    age: idade,
    nonHdl: naoHdl,
    hdl: hdl,
    sbpLt110: pasBaixa,
    sbpGte110: pasAlta,
    dm: dm,
    fumo: fumo,
    bmiLt30: imcBaixo,
    bmiGte30: imcAlto,
    egfrLt60: tfgBaixa,
    egfrGte60: tfgAlta,
    antiHas: antiHas,
    estatina: estatina,
    antiHasSbp: antiHas * pasAlta,
    estatinaNonHdl: estatina * naoHdl,
    ageNonHdl: idade * naoHdl,
    ageHdl: idade * hdl,
    ageSbpGte110: idade * pasAlta,
    ageDm: idade * dm,
    ageFumo: idade * fumo,
    ageBmiGte30: idade * imcAlto,
    ageEgfrLt60: idade * tfgBaixa,
    const: 1,
  };
  if (anos === 30) v.ageSq = idade * idade;
  return v;
}

function aplicarBetas(betas, preds) {
  let lp = 0;
  for (const termo in betas) {
    const x = preds[termo];
    if (x === undefined) throw new Error("preditor ausente: " + termo);
    lp += betas[termo] * x;
  }
  return Math.exp(lp) / (1 + Math.exp(lp));
}

/* Faixas de risco adotadas pela DBHA 2025, aplicadas ao risco de
   doença aterosclerótica (ASCVD) em 10 anos. */
const FAIXAS_RISCO = [
  { ate: 5, rot: "Baixo", cor: "#2E8B6F" },
  { ate: 7.5, rot: "Limítrofe", cor: "#C9A227" },
  { ate: 20, rot: "Intermediário", cor: "#D97A1F" },
  { ate: Infinity, rot: "Alto", cor: "#B3242F" },
];

const faixaDe = (pct) => FAIXAS_RISCO.find((f) => pct < f.ate);

/* Retorna { ascvd10, dcv10, dcv30, faixa, avisos[] } em pontos percentuais. */
function calcularPrevent(p) {
  const avisos = [];
  for (const campo in PREVENT_LIMITES) {
    const [min, max] = PREVENT_LIMITES[campo];
    const v = p[campo];
    if (typeof v === "number" && (v < min || v > max)) {
      avisos.push(`${campo} fora da faixa validada (${min}–${max})`);
    }
  }

  const s = p.sexo === "F" ? "f" : "m";
  const p10 = preditoresPrevent(p, 10);
  const p30 = preditoresPrevent(p, 30);

  const ascvd10 = aplicarBetas(PREVENT_BETAS[`y10_${s}_ascvd`], p10) * 100;
  const dcv10 = aplicarBetas(PREVENT_BETAS[`y10_${s}_cvd`], p10) * 100;
  const dcv30 = aplicarBetas(PREVENT_BETAS[`y30_${s}_cvd`], p30) * 100;

  return { ascvd10, dcv10, dcv30, faixa: faixaDe(ascvd10), avisos };
}

if (typeof module !== "undefined") {
  module.exports = { calcularPrevent, tfgCkdEpi2021, preditoresPrevent, FAIXAS_RISCO };
}
