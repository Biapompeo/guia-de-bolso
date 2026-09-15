/* =================================================================
   Monta a apostila de resumos em HTML pronto para impressão, a partir
   dos mesmos dados que o app usa: rodizio/resumos.js e as listas
   AULAS, EIXOS e CONTEUDO de rodizio/index.html.

   Uso:
     node tools/gerar-resumos-pdf.js > /tmp/resumos.html
     chrome --headless=new --no-pdf-header-footer \
            --print-to-pdf=rodizio/resumos.pdf file:///tmp/resumos.html

   Assim a apostila nunca sai do ar em relação ao app: mudou o resumo,
   roda de novo.
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

/* os temas na ordem em que o plano de estudo os apresenta, agrupados pela
   aula a que pertencem */
const porEixo = {};
dados.CONTEUDO.forEach(([eixo, titulo]) => (porEixo[eixo] = porEixo[eixo] || []).push(titulo));

const secoes = dados.AULAS.map((a) => ({
  aula: a,
  temas: a.eixos.flatMap((e) => (porEixo[e] || []).map((t) => ({ eixo: e, titulo: t }))),
}));

const total = secoes.reduce((n, s) => n + s.temas.length, 0);

const bloco = ({ eixo, titulo }) => {
  const r = RESUMOS[titulo];
  if (!r) return "";
  const e = dados.EIXOS[eixo];
  return `
  <article class="tema" style="--c:${e.c}">
    <h3>${esc(titulo)}</h3>
    <p class="eixo">${esc(e.n)}</p>
    <ul>${r.pontos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    ${r.numeros ? `<div class="caixa numeros"><b>De cabeça</b>
      <ul>${r.numeros.map((n) => `<li>${esc(n)}</li>`).join("")}</ul></div>` : ""}
    ${r.pega ? `<div class="caixa pega"><b>Onde se erra</b><p>${esc(r.pega)}</p></div>` : ""}
    <p class="fonte">${esc(r.fonte)}</p>
  </article>`;
};

const sumario = secoes.map((s) => `
  <li><span class="s-aula">${esc(s.aula.tema)}</span>
    <ul>${s.temas.map((t) => `<li>${esc(t.titulo)}</li>`).join("")}</ul></li>`).join("");

process.stdout.write(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>Resumos — Saúde Coletiva e MFC</title>
<style>
@page { size: A4; margin: 18mm 34mm 18mm 20mm; }   /* margem direita larga, para anotar */

:root{
  --tinta:#1A1713; --tinta-2:#3A352E; --apagado:#5E584F;
  --linha:#D9D2C6; --verde:#14615A; --alerta:#8A6512;
  --serif:"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif;
  --sans:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
*{ box-sizing:border-box }
body{ margin:0; font-family:var(--serif); font-size:10.8pt; line-height:1.62; color:var(--tinta) }

/* ---------- capa ---------- */
.capa{ height:235mm; display:flex; flex-direction:column; justify-content:center;
       page-break-after:always }
.capa .kick{ font-family:var(--sans); font-size:9.5pt; letter-spacing:.18em;
             text-transform:uppercase; color:var(--apagado) }
.capa h1{ font-size:31pt; line-height:1.1; margin:10px 0 6px; font-weight:600 }
.capa h2{ font-size:13pt; font-weight:400; color:var(--tinta-2); margin:0 0 30px; font-style:italic }
.capa .barra{ height:3px; background:var(--verde); width:70px; margin-bottom:26px }
.capa .nota{ font-family:var(--sans); font-size:9pt; line-height:1.6; color:var(--apagado);
             border-left:2px solid var(--linha); padding-left:12px; max-width:105mm }

/* ---------- sumário ---------- */
.sumario{ page-break-after:always }
h2.secao{ font-family:var(--sans); font-size:10pt; letter-spacing:.14em; text-transform:uppercase;
          color:var(--apagado); font-weight:600; margin:0 0 18px }
.sumario > ol{ margin:0; padding-left:20px }
.sumario > ol > li{ margin-bottom:14px }
.s-aula{ font-size:12.5pt; font-weight:600 }
.sumario ul{ margin:4px 0 0; padding-left:14px; list-style:none }
.sumario ul li{ font-size:10pt; color:var(--tinta-2); margin:2px 0 }
.sumario ul li::before{ content:"— "; color:var(--apagado) }

/* ---------- aula ---------- */
.aula{ page-break-before:always }
.aula-topo{ border-bottom:2px solid var(--tinta); padding-bottom:8px; margin-bottom:22px }
.aula-topo h2{ font-size:18pt; margin:0; font-weight:600; line-height:1.2 }
.aula-topo p{ font-family:var(--sans); font-size:9pt; color:var(--apagado); margin:5px 0 0 }

/* ---------- tema ---------- */
.tema{ page-break-inside:avoid; margin-bottom:26px; border-left:3px solid var(--c); padding-left:14px }
.tema h3{ font-size:13pt; margin:0; font-weight:600; line-height:1.25 }
.tema .eixo{ font-family:var(--sans); font-size:8.5pt; letter-spacing:.1em; text-transform:uppercase;
             color:var(--c); margin:3px 0 10px }
.tema ul{ margin:0; padding-left:17px }
.tema li{ margin-bottom:7px }
.tema li::marker{ color:var(--c) }

.caixa{ margin-top:12px; padding:9px 13px; border:1px solid var(--linha); border-radius:3px;
        font-size:10pt; page-break-inside:avoid }
.caixa b{ font-family:var(--sans); font-size:8pt; letter-spacing:.12em; text-transform:uppercase;
          display:block; margin-bottom:4px }
.caixa p{ margin:0 }
.caixa ul{ padding-left:15px; margin:0 }
.numeros{ border-color:#BFD6CE; background:#F1F7F4 }
.numeros b{ color:var(--verde) }
.pega{ border-color:#E3D4AC; background:#FBF6E9 }
.pega b{ color:var(--alerta) }

.fonte{ font-family:var(--sans); font-size:8.5pt; color:var(--apagado); margin:10px 0 0 }

/* ---------- fim ---------- */
.fim{ page-break-before:always }
.fim ol{ padding-left:20px; font-size:10.5pt }
.fim li{ margin-bottom:7px }
</style></head><body>

<section class="capa">
  <div class="kick">Internato I · Univag · 2026/2</div>
  <h1>Resumos de<br>Saúde Coletiva<br>e Medicina de Família</h1>
  <div class="barra"></div>
  <h2>${total} temas do plano de ensino, para a prova de 21 de outubro</h2>
  <p class="nota">Escritos a partir das referências do plano de ensino — cadernos de atenção
  básica, guias e manuais do Ministério da Saúde, documentos do INCA e os livros-texto da
  bibliografia. Não são cópia dos documentos: número, prazo e portaria valem ser conferidos na
  fonte, indicada ao pé de cada tema, antes da prova.</p>
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
      ? s.aula.quem.map(([nome, papel]) => esc(nome) + " · " + papel).join("   ")
      : esc(s.aula.nota || "")}</p>
  </div>
  ${s.temas.map(bloco).join("")}
</section>`).join("")}

<section class="fim">
  <h2 class="secao">Antes da prova</h2>
  <ol>
    <li>A prova teórica vale 60% da média; a ficha de desempenho preenchida pela preceptora, 40%.</li>
    <li>Releia só os blocos <b>De cabeça</b> e <b>Onde se erra</b> na véspera: são os números e as
    trocas que mais custam ponto.</li>
    <li>Confira na fonte o que for número, prazo ou portaria — é o que muda de edição para edição.</li>
  </ol>
</section>

</body></html>
`);
