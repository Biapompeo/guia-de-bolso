/* =================================================================
   Monta a apostila de resumos em HTML pronto para impressão, a partir
   dos mesmos dados que o app usa: rodizio/resumos.js e as listas
   AULAS, EIXOS e CONTEUDO de rodizio/index.html.

   Uso:
     node tools/gerar-resumos-pdf.js > /tmp/resumos.html
     chrome --headless=new --no-pdf-header-footer \
            --print-to-pdf=rodizio/resumos.pdf file:///tmp/resumos.html

   Projeto gráfico: cada aula tem a cor do seu eixo, e essa cor
   atravessa a abertura, o número do tema, a trilha lateral, o
   cabeçalho das tabelas e o fundo das figuras. O texto corre em duas
   colunas; tabela, figura e caixa nunca se partem.
   ================================================================= */

const fs = require("fs");
const raiz = __dirname + "/../rodizio/";

const html = fs.readFileSync(raiz + "index.html", "utf8");
const app = html.match(/<script>([\s\S]*?)<\/script>/)[1];

const pega = (nome) => {
  const re = new RegExp("const " + nome + "=[\\s\\S]*?\\n(\\]|\\});");
  return app.match(re)[0];
};
const dados = new Function(
  pega("EIXOS") + pega("AULAS") + pega("CONTEUDO") +
  "\nreturn {EIXOS, AULAS, CONTEUDO};"
)();
const RESUMOS = new Function(
  fs.readFileSync(raiz + "resumos.js", "utf8") + "\nreturn RESUMOS;"
)();
const CASOS = fs.existsSync(raiz + "casos.js")
  ? new Function(fs.readFileSync(raiz + "casos.js", "utf8") + "\nreturn CASOS;")()
  : {};

const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const rgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
};

const porEixo = {};
dados.CONTEUDO.forEach(([eixo, titulo]) => (porEixo[eixo] = porEixo[eixo] || []).push(titulo));

const secoes = dados.AULAS.map((a) => ({
  aula: a,
  cor: dados.EIXOS[a.eixos[0]].c,
  temas: a.eixos.flatMap((e) => (porEixo[e] || []).map((t) => ({ eixo: e, titulo: t }))),
}));
const total = secoes.reduce((n, s) => n + s.temas.length, 0);

const tabela = (t) => `
  <table class="quadro">
    ${t.t ? `<caption>${esc(t.t)}</caption>` : ""}
    <thead><tr>${t.c.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${t.l.map((l) => `<tr>${l.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;

const bloco = ({ eixo, titulo }, numero) => {
  const r = RESUMOS[titulo];
  if (!r) return "";
  const e = dados.EIXOS[eixo];
  return `
  <article class="tema" style="--c:${e.c};--c-rgb:${rgb(e.c)}">
    <header>
      <span class="num">${numero}</span>
      <div>
        <h3>${esc(titulo)}</h3>
        <p class="eixo">${esc(e.n)} <span>${esc(r.fonte)}</span></p>
      </div>
    </header>
    <div class="corpo">
      <ul class="pontos">${r.pontos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      ${(r.tabelas || []).map(tabela).join("")}
      ${r.figura ? `<figure>${r.figura}</figure>` : ""}
      ${r.numeros ? `<div class="caixa numeros"><b>De cabeça</b>
        <ul>${r.numeros.map((n) => `<li>${esc(n)}</li>`).join("")}</ul></div>` : ""}
      ${r.pega ? `<div class="caixa pega"><b>Onde se erra</b><p>${esc(r.pega)}</p></div>` : ""}
    </div>
  </article>`;
};

const sumario = secoes.map((s, i) => `
  <li style="--c:${s.cor};--c-rgb:${rgb(s.cor)}">
    <span class="s-num">${i + 1}</span>
    <span class="s-aula">${esc(s.aula.tema)}</span>
    <ul>${s.temas.map((t, j) => `<li>${i + 1}.${j + 1} ${esc(t.titulo)}</li>`).join("")}</ul>
  </li>`).join("");

const faixaCores = Object.values(dados.EIXOS)
  .map((e) => `<span style="background:${e.c}"></span>`).join("");

process.stdout.write(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>Resumos — Saúde Coletiva e MFC</title>
<style>
@page { size: A4; margin: 14mm 13mm; }
html{ -webkit-print-color-adjust:exact; print-color-adjust:exact }

:root{
  --papel:#FAF6EF; --carta:#FFFDF9;
  --tinta:#171310; --tinta-2:#38322A; --apagado:#6A6357;
  --linha:#DED5C6; --linha-fina:#EBE4D7;
  --verde:#14615A; --alerta:#8A6512;
  --serif:"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif;
  --sans:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
*{ box-sizing:border-box }
body{ margin:0; background:var(--papel); font-family:var(--serif);
      font-size:9.4pt; line-height:1.5; color:var(--tinta) }

/* ---------- capa: campo de cor inteiro ---------- */
.capa{ position:relative; height:269mm; margin:-14mm -13mm 0; padding:26mm 20mm 0;
       background:#0E4D48; color:#F4EFE4; page-break-after:always; overflow:hidden }
.capa::after{ content:""; position:absolute; right:-40mm; bottom:-60mm;
              width:150mm; height:150mm; border-radius:50%;
              background:rgba(255,255,255,.045) }
.capa .kick{ font-family:var(--sans); font-size:8.6pt; letter-spacing:.24em;
             text-transform:uppercase; color:rgba(244,239,228,.72) }
.capa h1{ font-size:40pt; line-height:1.02; margin:14mm 0 0; font-weight:600; letter-spacing:-.01em }
.capa h1 em{ font-style:italic; color:#F3D27A }
.capa .sub{ font-size:12.5pt; font-style:italic; color:rgba(244,239,228,.82);
            margin:8mm 0 0; max-width:110mm }
.faixa{ display:flex; gap:2px; margin:14mm 0 0; width:120mm }
.faixa span{ height:7mm; flex:1; border-radius:1px }
.capa .nota{ position:absolute; left:20mm; bottom:22mm; width:112mm;
             font-family:var(--sans); font-size:8.2pt; line-height:1.6;
             color:rgba(244,239,228,.7); border-left:2px solid rgba(243,210,122,.55);
             padding-left:11px }

/* ---------- sumário ---------- */
.sumario{ page-break-after:always; padding-top:4mm }
h2.secao{ font-family:var(--sans); font-size:9pt; letter-spacing:.17em; text-transform:uppercase;
          color:var(--apagado); font-weight:600; margin:0 0 14px }
.sumario ol{ list-style:none; margin:0; padding:0; column-count:2; column-gap:11mm }
.sumario > ol > li{ margin-bottom:11px; break-inside:avoid; padding-left:20px; position:relative }
.s-num{ position:absolute; left:0; top:1px; width:15px; height:15px; border-radius:3px;
        background:var(--c); color:#fff; font-family:var(--sans); font-size:7.6pt;
        font-weight:700; text-align:center; line-height:15px }
.s-aula{ font-size:11pt; font-weight:600; color:var(--tinta) }
.sumario ul{ list-style:none; margin:3px 0 0; padding:0 }
.sumario ul li{ font-size:8.5pt; color:var(--tinta-2); line-height:1.38;
                padding-left:1px; margin:1px 0 }

/* ---------- abertura da aula ---------- */
.aula{ page-break-before:always }
.aula-topo{ background:var(--c); color:#fff; margin:0 -13mm 14px; padding:9mm 13mm 7mm }
.aula-topo .conta{ font-family:var(--sans); font-size:8pt; letter-spacing:.2em;
                   text-transform:uppercase; color:rgba(255,255,255,.72) }
.aula-topo h2{ font-size:20pt; margin:4px 0 0; font-weight:600; line-height:1.12 }
.aula-topo p{ font-family:var(--sans); font-size:8.4pt; margin:6px 0 0; color:rgba(255,255,255,.85) }

/* ---------- tema ---------- */
.tema{ background:var(--carta); border:1px solid var(--linha-fina);
       border-left:4px solid var(--c); border-radius:2px;
       padding:9px 11px 4px; margin-bottom:11px }
.tema header{ display:flex; gap:9px; break-after:avoid; margin-bottom:9px;
              border-bottom:1px solid rgba(var(--c-rgb),.25); padding-bottom:7px }
.num{ flex:0 0 auto; width:19px; height:19px; border-radius:3px; background:var(--c);
      color:#fff; font-family:var(--sans); font-size:8pt; font-weight:700;
      text-align:center; line-height:19px }
.tema h3{ font-size:12pt; margin:0; font-weight:600; line-height:1.18 }
.tema .eixo{ font-family:var(--sans); font-size:7.4pt; margin:3px 0 0; color:var(--c);
             text-transform:uppercase; letter-spacing:.09em; font-weight:600 }
.tema .eixo span{ color:var(--apagado); font-weight:400; text-transform:none; letter-spacing:0 }

.corpo{ column-count:2; column-gap:8mm }
.pontos{ margin:0; padding-left:13px }
.pontos li{ margin-bottom:6px; break-inside:avoid }
.pontos li::marker{ color:var(--c) }

/* ---------- quadros ---------- */
.quadro{ width:100%; border-collapse:collapse; margin:9px 0; font-size:8.3pt;
         break-inside:avoid; line-height:1.34 }
.quadro caption{ font-family:var(--sans); font-size:7.4pt; letter-spacing:.1em;
                 text-transform:uppercase; color:#fff; background:var(--c);
                 text-align:left; padding:3px 6px; font-weight:700 }
.quadro th{ text-align:left; font-family:var(--sans); font-size:7.4pt; font-weight:700;
            background:rgba(var(--c-rgb),.16); color:var(--tinta);
            padding:4px 6px; vertical-align:bottom }
.quadro td{ padding:4px 6px; vertical-align:top; border-bottom:1px solid rgba(var(--c-rgb),.16) }
.quadro tbody tr:nth-child(even) td{ background:rgba(var(--c-rgb),.06) }
.quadro tr:last-child td{ border-bottom:none }

figure{ margin:9px 0; padding:7px 8px; background:rgba(var(--c-rgb),.07);
        border-radius:2px; break-inside:avoid }
figure svg{ width:100%; height:auto }

.caixa{ margin:9px 0; padding:7px 10px; border-radius:2px; font-size:8.5pt;
        line-height:1.45; break-inside:avoid; border-left:3px solid }
.caixa b{ font-family:var(--sans); font-size:7.2pt; letter-spacing:.12em; text-transform:uppercase;
          display:block; margin-bottom:3px; font-weight:700 }
.caixa p{ margin:0 }
.caixa ul{ padding-left:13px; margin:0 }
.numeros{ background:#E6F0EC; border-color:var(--verde) }
.numeros b{ color:var(--verde) }
.pega{ background:#F9EFD9; border-color:var(--alerta) }
.pega b{ color:var(--alerta) }

/* ---------- casos clínicos ---------- */
.casos{ margin-top:6px }
.casos-tit{ font-family:var(--sans); font-size:8.6pt; letter-spacing:.14em; text-transform:uppercase;
            color:#fff; background:var(--c); display:inline-block; padding:3px 9px;
            border-radius:2px; margin:0 0 9px }
.caso{ background:var(--carta); border:1px solid var(--linha-fina); border-left:4px solid var(--c);
       border-radius:2px; padding:9px 11px; margin-bottom:9px; break-inside:avoid }
.caso h4{ font-size:10.5pt; margin:0 0 5px; font-weight:600 }
.caso .hist, .caso .exame{ margin:0 0 6px; font-size:8.8pt; color:var(--tinta-2); line-height:1.45 }
.caso .exame b{ font-family:var(--sans); font-size:7.2pt; letter-spacing:.1em; text-transform:uppercase;
                color:var(--apagado); margin-right:4px }
.caso .cq{ columns:1; margin:0 0 7px; padding-left:9px; border-left:2px solid rgba(var(--c-rgb),.3) }
.caso .cq .q{ font-family:var(--sans); font-size:7.8pt; font-weight:700; color:var(--c);
              margin:0 0 2px; text-transform:uppercase; letter-spacing:.05em }
.caso .cq .r{ margin:0; font-size:8.8pt; line-height:1.45 }
.caso .chave{ margin:8px 0 0; padding:6px 9px; background:#F9EFD9; border-left:3px solid var(--alerta);
              font-size:8.6pt; line-height:1.4 }

/* ---------- fim ---------- */
.fim{ page-break-before:always; padding-top:4mm }
.fim ol{ padding-left:18px; font-size:10pt }
.fim li{ margin-bottom:8px }
.fim .assina{ margin-top:16mm; padding-top:6mm; border-top:1px solid var(--linha);
              font-family:var(--sans); font-size:8pt; color:var(--apagado) }
</style></head><body>

<section class="capa">
  <div class="kick">Internato I · Univag · 2026/2</div>
  <h1>Resumos de<br>Saúde Coletiva<br>e <em>Medicina de Família</em></h1>
  <div class="faixa">${faixaCores}</div>
  <p class="sub">${total} temas do plano de ensino, em ${secoes.length} aulas,
  para a prova de 21 de outubro.</p>
  <p class="nota">Escritos a partir das referências do plano de ensino — cadernos de atenção
  básica, guias e manuais do Ministério da Saúde, documentos do INCA e os livros-texto da
  bibliografia. Não são cópia dos documentos: número, prazo e portaria valem ser conferidos na
  fonte, indicada no alto de cada tema.</p>
</section>

<section class="sumario">
  <h2 class="secao">O que tem aqui</h2>
  <ol>${sumario}</ol>
</section>

${secoes.map((s, i) => `
<section class="aula" style="--c:${s.cor};--c-rgb:${rgb(s.cor)}">
  <div class="aula-topo">
    <div class="conta">Aula ${i + 1} de ${secoes.length} · ${s.temas.length} temas</div>
    <h2>${esc(s.aula.tema)}</h2>
    <p>${s.aula.quem.length
      ? s.aula.quem.map(([nome, papel]) => esc(nome) + " · " + papel).join("     ")
      : esc(s.aula.nota || "")}</p>
  </div>
  ${s.temas.map((t, j) => bloco(t, `${i + 1}.${j + 1}`)).join("")}
  ${(CASOS[s.aula.id] || []).length ? `
  <div class="casos">
    <h3 class="casos-tit">Casos clínicos da coordenação</h3>
    ${CASOS[s.aula.id].map((c) => `
      <article class="caso">
        <h4>${esc(c.n)} — ${esc(c.quem)}</h4>
        <p class="hist">${esc(c.historia)}</p>
        <p class="exame"><b>Exame</b> ${esc(c.exame)}</p>
        ${c.perguntas.map((q) => `<div class="cq"><p class="q">${esc(q.p)}</p>
          <p class="r">${esc(q.r)}</p></div>`).join("")}
        <p class="chave">${esc(c.chave)}</p>
      </article>`).join("")}
  </div>` : ""}
</section>`).join("")}

<section class="fim">
  <h2 class="secao">Antes da prova</h2>
  <ol>
    <li>A prova teórica vale 60% da média; a ficha de desempenho preenchida pela preceptora, 40%.</li>
    <li>Na véspera, releia só as caixas <b>De cabeça</b> e <b>Onde se erra</b>: são os números e as
    trocas que mais custam ponto.</li>
    <li>Confira na fonte o que for número, prazo ou portaria — é o que muda de edição para edição.</li>
  </ol>
  <p class="assina">Rodízio de Saúde Coletiva e Medicina de Família · Internato I · Univag · 2026/2</p>
</section>

</body></html>
`);
