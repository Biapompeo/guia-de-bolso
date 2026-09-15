/* =================================================================
   Monta a apostila de resumos em HTML pronto para impressão, a partir
   dos mesmos dados que o app usa: rodizio/resumos.js e as listas
   AULAS, EIXOS e CONTEUDO de rodizio/index.html.

   Uso:
     node tools/gerar-resumos-pdf.js > /tmp/resumos.html
     chrome --headless=new --no-pdf-header-footer \
            --print-to-pdf=rodizio/resumos.pdf file:///tmp/resumos.html

   O texto corre em duas colunas; tabelas, figuras e caixas não se
   partem entre colunas nem entre páginas.
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

const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

const porEixo = {};
dados.CONTEUDO.forEach(([eixo, titulo]) => (porEixo[eixo] = porEixo[eixo] || []).push(titulo));

const secoes = dados.AULAS.map((a) => ({
  aula: a,
  temas: a.eixos.flatMap((e) => (porEixo[e] || []).map((t) => ({ eixo: e, titulo: t }))),
}));
const total = secoes.reduce((n, s) => n + s.temas.length, 0);

const tabela = (t) => `
  <table class="quadro">
    ${t.t ? `<caption>${esc(t.t)}</caption>` : ""}
    <thead><tr>${t.c.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${t.l.map((linha) => `<tr>${linha.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;

const bloco = ({ eixo, titulo }) => {
  const r = RESUMOS[titulo];
  if (!r) return "";
  const e = dados.EIXOS[eixo];
  return `
  <article class="tema" style="--c:${e.c}">
    <header>
      <h3>${esc(titulo)}</h3>
      <p class="eixo">${esc(e.n)} · ${esc(r.fonte)}</p>
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

const sumario = secoes.map((s) => `
  <li><span class="s-aula">${esc(s.aula.tema)}</span>
    <ul>${s.temas.map((t) => `<li>${esc(t.titulo)}</li>`).join("")}</ul></li>`).join("");

process.stdout.write(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>Resumos — Saúde Coletiva e MFC</title>
<style>
@page { size: A4; margin: 15mm 14mm; }

:root{
  --tinta:#1A1713; --tinta-2:#38332C; --apagado:#5E584F;
  --linha:#D9D2C6; --linha-fina:#E8E2D7; --verde:#14615A; --alerta:#8A6512;
  --serif:"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif;
  --sans:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
*{ box-sizing:border-box }
body{ margin:0; font-family:var(--serif); font-size:9.4pt; line-height:1.5; color:var(--tinta) }

/* ---------- capa ---------- */
.capa{ height:250mm; display:flex; flex-direction:column; justify-content:center;
       page-break-after:always }
.capa .kick{ font-family:var(--sans); font-size:9pt; letter-spacing:.2em;
             text-transform:uppercase; color:var(--apagado) }
.capa h1{ font-size:34pt; line-height:1.08; margin:12px 0 8px; font-weight:600 }
.capa .barra{ height:3px; background:var(--verde); width:78px; margin:0 0 24px }
.capa h2{ font-size:13pt; font-weight:400; font-style:italic; color:var(--tinta-2); margin:0 0 34px }
.capa .nota{ font-family:var(--sans); font-size:8.6pt; line-height:1.65; color:var(--apagado);
             border-left:2px solid var(--linha); padding-left:12px; max-width:112mm }

/* ---------- sumário ---------- */
.sumario{ page-break-after:always }
h2.secao{ font-family:var(--sans); font-size:9.5pt; letter-spacing:.15em; text-transform:uppercase;
          color:var(--apagado); font-weight:600; margin:0 0 16px }
.sumario > ol{ margin:0; padding-left:18px; column-count:2; column-gap:12mm }
.sumario > ol > li{ margin-bottom:12px; break-inside:avoid }
.s-aula{ font-size:11.5pt; font-weight:600 }
.sumario ul{ margin:3px 0 0; padding-left:12px; list-style:none }
.sumario ul li{ font-size:8.8pt; color:var(--tinta-2); margin:1px 0; line-height:1.35 }
.sumario ul li::before{ content:"— "; color:var(--apagado) }

/* ---------- abertura de aula ---------- */
.aula{ page-break-before:always }
.aula-topo{ border-bottom:2px solid var(--tinta); padding-bottom:7px; margin-bottom:16px }
.aula-topo h2{ font-size:17pt; margin:0; font-weight:600; line-height:1.15 }
.aula-topo p{ font-family:var(--sans); font-size:8.4pt; color:var(--apagado); margin:4px 0 0 }

/* ---------- tema: título inteiro, conteúdo em duas colunas ---------- */
.tema{ margin-bottom:14px; border-top:1px solid var(--linha-fina); padding-top:10px }
.tema:first-of-type{ border-top:none; padding-top:0 }
.tema header{ break-after:avoid; border-left:3px solid var(--c); padding-left:9px; margin-bottom:9px }
.tema h3{ font-size:12pt; margin:0; font-weight:600; line-height:1.2 }
.tema .eixo{ font-family:var(--sans); font-size:7.6pt; color:var(--apagado); margin:2px 0 0;
             text-transform:uppercase; letter-spacing:.07em }

.corpo{ column-count:2; column-gap:9mm; column-rule:1px solid var(--linha-fina) }
.pontos{ margin:0; padding-left:14px }
.pontos li{ margin-bottom:6px; break-inside:avoid }
.pontos li::marker{ color:var(--c) }

/* ---------- quadros ---------- */
.quadro{ width:100%; border-collapse:collapse; margin:10px 0; font-size:8.4pt;
         break-inside:avoid; line-height:1.35 }
.quadro caption{ font-family:var(--sans); font-size:7.6pt; letter-spacing:.09em;
                 text-transform:uppercase; color:var(--c); text-align:left;
                 padding-bottom:3px; font-weight:600 }
.quadro th{ text-align:left; font-family:var(--sans); font-size:7.6pt; font-weight:600;
            border-bottom:1px solid var(--tinta-2); padding:3px 5px 3px 0; vertical-align:bottom }
.quadro td{ padding:3px 5px 3px 0; border-bottom:1px solid var(--linha-fina); vertical-align:top }
.quadro tr:last-child td{ border-bottom:none }

figure{ margin:10px 0; break-inside:avoid }
figure svg{ width:100%; height:auto }

.caixa{ margin:10px 0; padding:7px 10px; border:1px solid var(--linha); border-radius:3px;
        font-size:8.6pt; line-height:1.45; break-inside:avoid }
.caixa b{ font-family:var(--sans); font-size:7.4pt; letter-spacing:.11em; text-transform:uppercase;
          display:block; margin-bottom:3px }
.caixa p{ margin:0 }
.caixa ul{ padding-left:13px; margin:0 }
.numeros{ border-color:#BFD6CE; background:#F1F7F4 }
.numeros b{ color:var(--verde) }
.pega{ border-color:#E3D4AC; background:#FBF6E9 }
.pega b{ color:var(--alerta) }

/* ---------- fim ---------- */
.fim{ page-break-before:always }
.fim ol{ padding-left:18px; font-size:10pt }
.fim li{ margin-bottom:8px }
</style></head><body>

<section class="capa">
  <div class="kick">Internato I · Univag · 2026/2</div>
  <h1>Resumos de<br>Saúde Coletiva<br>e Medicina de Família</h1>
  <div class="barra"></div>
  <h2>${total} temas do plano de ensino, para a prova de 21 de outubro</h2>
  <p class="nota">Escritos a partir das referências do plano de ensino — cadernos de atenção
  básica, guias e manuais do Ministério da Saúde, documentos do INCA e os livros-texto da
  bibliografia. Não são cópia dos documentos: número, prazo e portaria valem ser conferidos na
  fonte, indicada no alto de cada tema, antes da prova.</p>
</section>

<section class="sumario">
  <h2 class="secao">O que tem aqui</h2>
  <ol>${sumario}</ol>
</section>

${secoes.map((s) => `
<section class="aula">
  <div class="aula-topo">
    <h2>${esc(s.aula.tema)}</h2>
    <p>${s.aula.quem.length
      ? s.aula.quem.map(([nome, papel]) => esc(nome) + " · " + papel).join("    ")
      : esc(s.aula.nota || "")}</p>
  </div>
  ${s.temas.map(bloco).join("")}
</section>`).join("")}

<section class="fim">
  <h2 class="secao">Antes da prova</h2>
  <ol>
    <li>A prova teórica vale 60% da média; a ficha de desempenho preenchida pela preceptora, 40%.</li>
    <li>Na véspera, releia só as caixas <b>De cabeça</b> e <b>Onde se erra</b>: são os números e as
    trocas que mais custam ponto.</li>
    <li>Confira na fonte o que for número, prazo ou portaria — é o que muda de edição para edição.</li>
  </ol>
</section>

</body></html>
`);
