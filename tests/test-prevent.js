const fs = require('fs');
// os dois arquivos são scripts globais no navegador; aqui viram um só escopo
eval(
  fs.readFileSync('/home/user/.teste/assets/prevent-betas.js', 'utf8') + '\n' +
  fs.readFileSync('/home/user/.teste/assets/prevent.js', 'utf8')
);

// Caso do pacote preventr (R/helpers_test.R): idade 50, PAS 160, em anti-hipertensivo,
// CT 200, HDL 45, sem estatina, diabética, não fumante, TFGe 90, IMC 35.
const base = { idade:50, pas:160, usaAntiHipertensivo:true, colesterolTotal:200, hdl:45,
               usaEstatina:false, diabetes:true, fumante:false, tfg:90, imc:35 };

// Todos os valores esperados vêm de tests/testthat/test-estimate_risk.R do preventr.
// Nos casos do modelo completo o pacote usa o CEP 14738, cujo decil de SDI é 3
// (categoria de referência) — informado aqui como sdiDecil para reproduzi-los.
const casos = [
  { nome:'base, feminino',    p:{...base, sexo:'F'},
    modelo:'base',  esperado:{ dcv10:14.7, ascvd10:9.2,  dcv30:53.0 } },
  { nome:'base, masculino',   p:{...base, sexo:'M'},
    modelo:'base',  esperado:{ dcv10:16.3, ascvd10:10.2, dcv30:51.4 } },

  { nome:'HbA1c, feminino',   p:{...base, sexo:'F', hba1c:9.2},
    modelo:'hba1c', esperado:{ dcv10:16.5, ascvd10:10.3, dcv30:54.1 } },
  { nome:'HbA1c, masculino',  p:{...base, sexo:'M', hba1c:9.2},
    modelo:'hba1c', esperado:{ dcv10:18.7, ascvd10:11.2, dcv30:52.4 } },

  { nome:'RAC, feminino',     p:{...base, sexo:'F', rac:92},
    modelo:'uacr',  esperado:{ dcv10:18.1, ascvd10:11.1, dcv30:56.5 } },
  { nome:'RAC, masculino',    p:{...base, sexo:'M', rac:92},
    modelo:'uacr',  esperado:{ dcv10:19.5, ascvd10:12.3, dcv30:53.5 } },

  { nome:'completo, fem.',    p:{...base, sexo:'F', hba1c:9.2, rac:92, sdiDecil:3},
    modelo:'full',  esperado:{ dcv10:17.4, ascvd10:10.5, dcv30:53.4 } },
  { nome:'completo, masc.',   p:{...base, sexo:'M', hba1c:9.2, rac:92, sdiDecil:3},
    modelo:'full',  esperado:{ dcv10:19.1, ascvd10:11.2, dcv30:51.3 } },
];

let falhas = 0;
for (const c of casos) {
  const r = calcularPrevent(c.p);
  if (r.modelo !== c.modelo) {
    falhas++;
    console.log(`FALHA  ${c.nome.padEnd(18)} modelo escolhido ${r.modelo}, esperado ${c.modelo}`);
  }
  for (const k of ['dcv10','ascvd10','dcv30']) {
    const obtido = Math.round(r[k] * 10) / 10;
    const ok = Math.abs(obtido - c.esperado[k]) < 0.06;
    if (!ok) falhas++;
    console.log(`${ok ? 'OK  ' : 'FALHA'}  ${c.nome.padEnd(18)} ${k.padEnd(8)} esperado ${String(c.esperado[k]).padStart(5)}%  obtido ${String(obtido).padStart(5)}%`);
  }
  console.log(`        modelo: ${r.modelo.padEnd(6)} faixa: ${r.faixa.rot}${r.avisos.length ? '  avisos: ' + r.avisos.join('; ') : ''}`);
}

// CKD-EPI 2021: valores de referência publicados
// Valores conferidos por implementação independente da equação publicada.
// As duas últimas linhas são âncoras definicionais: com Cr = kappa e idade 0,
// a equação se reduz a 142 (x1,012 na mulher).
const tfgCasos = [
  { p:{creatinina:0.9, idade:50, sexo:'F'}, esperado:77.88 },
  { p:{creatinina:1.2, idade:60, sexo:'M'}, esperado:69.23 },
  { p:{creatinina:2.5, idade:70, sexo:'M'}, esperado:26.96 },
  { p:{creatinina:0.6, idade:35, sexo:'F'}, esperado:119.97 },
  { p:{creatinina:0.7, idade:0,  sexo:'F'}, esperado:143.70 },
  { p:{creatinina:0.9, idade:0,  sexo:'M'}, esperado:142.00 },
];
console.log('\n--- CKD-EPI 2021 ---');
for (const c of tfgCasos) {
  const v = tfgCkdEpi2021(c.p);
  const ok = Math.abs(v - c.esperado) < 0.02;
  if (!ok) falhas++;
  console.log(`${ok ? 'OK  ' : 'FALHA'}  Cr ${c.p.creatinina} ${c.p.sexo} ${c.p.idade}a -> ${v.toFixed(2)} (ref ${c.esperado})`);
}

console.log(falhas ? `\n${falhas} FALHA(S)` : '\nTodos os casos passaram.');
process.exit(falhas ? 1 : 0);
