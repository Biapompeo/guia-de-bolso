/* =================================================================
   Anti-hipertensivos — aplicação
   ================================================================= */

/* ---------- utilidades ---------- */
const $ = (sel, root = document) => root.querySelector(sel);

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

/* remove acentos e caixa, para a busca perdoar digitação no celular */
const norm = (s) =>
  String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const store = {
  get(k, fb) {
    try { const v = localStorage.getItem("ah:" + k); return v === null ? fb : JSON.parse(v); }
    catch { return fb; }
  },
  set(k, v) {
    try { localStorage.setItem("ah:" + k, JSON.stringify(v)); } catch { /* modo privado */ }
  },
};

/* ---------- ícones ---------- */
const ICON = {
  inicio: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-5 3 10 2.5-6 1.5 3h5"/></svg>',
  classes: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M8 4v16M12 9h5M12 13h5"/></svg>',
  combos: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/></svg>',
  perfis: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>',
  emerg: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2z"/></svg>',
  risco: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 0-9 9"/><path d="M12 12l5-4"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><path d="M19 16.5v3M19 22h.01"/></svg>',
  idade: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19h18M6 19V9M12 19V5M18 19v-6"/></svg>',
  colo: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-4-3.5-6-6.5-6-10a6 6 0 0 1 12 0c0 3.5-2 6.5-6 10z"/><circle cx="12" cy="11" r="2.2"/></svg>',
  mama: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4"/></svg>',
  prostata: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6M8.2 8.2l5.6 5.6M13.8 8.2l-5.6 5.6"/></svg>',
  rastreio: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.7-4.7M8 10.5h5M10.5 8v5"/></svg>',
  fluxo: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2.5" width="8" height="5" rx="1.4"/><rect x="2.5" y="16.5" width="8" height="5" rx="1.4"/><rect x="13.5" y="16.5" width="8" height="5" rx="1.4"/><path d="M12 7.5v4M6.5 16.5v-2.5h11v2.5"/></svg>',
  rim: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3.5c-3 0-5 2.4-5 6 0 4.6 2.6 8.4 5.4 10.6 1 .8 2.3.1 2.3-1.2V9.6c0-3.4-1.3-6.1-2.7-6.1z"/><path d="M15 3.5c3 0 5 2.4 5 6 0 4.6-2.6 8.4-5.4 10.6-1 .8-2.3.1-2.3-1.2"/></svg>',
  hipo: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"/></svg>',
  search: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  x: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  caret: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>',
  moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',
  pearl: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2M5 6l1.5 1.5M19 6l-1.5 1.5M9 17a5.5 5.5 0 1 1 6 0v2.5h-6V17zM10 22h4"/></svg>',
  logo: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4.5l2-5.5 3.5 11 2.5-7 1.5 4.5H22"/></svg>',
  check: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 5 5L19 7"/></svg>',
  empty: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
};

/* ---------- assuntos ---------- */
/* Cada assunto clínico traz seu próprio cabeçalho e seu próprio conjunto de
   abas. A barra de baixo mostra só as abas do assunto escolhido, então dá
   para acrescentar um terceiro sem espremer a navegação.
   ("tema" no resto do arquivo significa claro/escuro, não assunto.) */
const ASSUNTOS = {
  has: {
    rot: "Hipertensão",
    titulo: "Anti\u2011hipertensivos",
    fonte: "DBHA 2025 · SBC · SBH · SBN",
    sub: "Guia de bolso para escolher, combinar e ajustar — organizado pela Diretriz Brasileira de Hipertensão Arterial de 2025.",
    rodape: "Conteúdo de estudo baseado na Diretriz Brasileira de Hipertensão Arterial 2025 (SBC, SBH e SBN) e no PCDT de Hipertensão Arterial Sistêmica do Ministério da Saúde. Doses são referências para adulto com função renal e hepática preservadas — sempre confira antes de prescrever.",
    regua: true,
    abas: [
      { id: "inicio", rot: "Início", icon: ICON.inicio },
      { id: "risco", rot: "Risco", icon: ICON.risco },
      { id: "classes", rot: "Classes", icon: ICON.classes },
      { id: "combos", rot: "Combinar", icon: ICON.combos },
      { id: "perfis", rot: "Paciente", icon: ICON.perfis },
      { id: "emerg", rot: "EV", icon: ICON.emerg },
    ],
  },
  rast: {
    rot: "Rastreio",
    titulo: "Rastreamento",
    fonte: "Ministério da Saúde · INCA",
    sub: "O que rastrear em cada faixa etária, com que exame, e o que fazer com cada resultado.",
    rodape: "Conteúdo de estudo baseado nas Diretrizes Brasileiras para o Rastreamento do Câncer de Colo do Útero (Portaria Conjunta SAES/SECTICS nº 13, de 29 de julho de 2025), nas Diretrizes para a Detecção Precoce do Câncer de Mama no Brasil (INCA, 2017) e na Nota Técnica nº 9/2023 da SAPS/MS sobre câncer de próstata. Sempre confira antes de indicar.",
    regua: false,
    abas: [
      { id: "ra-idade", rot: "Por idade", icon: ICON.idade },
      { id: "ra-colo", rot: "Colo", icon: ICON.colo },
      { id: "ra-mama", rot: "Mama", icon: ICON.mama },
      { id: "ra-prostata", rot: "Próstata", icon: ICON.prostata },
    ],
  },
  dm: {
    rot: "Diabetes",
    titulo: "Diabetes tipo 2",
    fonte: "PCDT · MS · Portaria nº 13/2026",
    sub: "Tratamento do diabete melito tipo 2 pelo Protocolo Clínico e Diretrizes Terapêuticas do Ministério da Saúde.",
    rodape: "Conteúdo de estudo baseado no PCDT do Diabete Melito Tipo 2 (Ministério da Saúde, Portaria SCTIE/MS nº 13, de 21 de fevereiro de 2026). O recorte é o do SUS: acarbose, DPP-4, agonistas de GLP-1, meglitinidas e tiazolidinedionas não estão incorporados e por isso não aparecem aqui. Sempre confira antes de prescrever.",
    regua: false,
    abas: [
      { id: "dm-inicio", rot: "Início", icon: ICON.inicio },
      { id: "dm-rastreio", rot: "Rastrear", icon: ICON.rastreio },
      { id: "dm-fluxo", rot: "Fluxo", icon: ICON.fluxo },
      { id: "dm-classes", rot: "Classes", icon: ICON.classes },
      { id: "dm-rim", rot: "Rim", icon: ICON.rim },
      { id: "dm-hipo", rot: "Hipo", icon: ICON.hipo },
    ],
  },
};

const state = {
  assunto: store.get("assunto", "has"),
  aba: store.get("aba", "inicio"),
  aberto: null,
  grupo: store.get("grupo", "Todos"),
  busca: "",
};

const _url = new URLSearchParams(location.search);
if (ASSUNTOS[_url.get("assunto")]) state.assunto = _url.get("assunto");
if (!ASSUNTOS[state.assunto]) state.assunto = "has";

const abas = () => ASSUNTOS[state.assunto].abas;
const temAba = (id) => abas().some((t) => t.id === id);

const abaUrl = _url.get("aba");
if (abaUrl && temAba(abaUrl)) state.aba = abaUrl;
if (!temAba(state.aba)) state.aba = abas()[0].id;

const CLASSES_DE = { has: CLASSES, dm: DM_CLASSES };
const classesAtuais = () => CLASSES_DE[state.assunto] || [];
const gruposAtuais = () => ["Todos", ...new Set(classesAtuais().map((c) => c.grupo))];

/* Entradas da calculadora. De propósito não são gravadas em disco:
   são dados de paciente, e o app não deve guardá-los. */
const risco = {
  sexo: "F", idade: "", pas: "", pad: "", colesterolTotal: "", hdl: "", tfg: "",
  creatinina: "", hba1c: "", rac: "", potassio: "",
  diabetes: false, fumante: false, usaEstatina: false,
  nDrogas: 0,
  cond: {},
};

const CAMPOS_RISCO = [
  { k: "idade", rot: "Idade", un: "anos", min: 30, max: 79 },
  { k: "pas", rot: "PA sistólica", un: "mmHg", min: 70, max: 250 },
  { k: "pad", rot: "PA diastólica", un: "mmHg", min: 40, max: 160 },
  { k: "colesterolTotal", rot: "Colesterol total", un: "mg/dL", min: 80, max: 500 },
  { k: "hdl", rot: "HDL", un: "mg/dL", min: 10, max: 150 },
  { k: "tfg", rot: "TFG estimada", un: "mL/min", min: 5, max: 200 },
];

const CAMPOS_OPCIONAIS = [
  { k: "hba1c", rot: "HbA1c", un: "%", min: 3, max: 20 },
  { k: "rac", rot: "Albumina/creatinina", un: "mg/g", min: 0.1, max: 10000 },
  { k: "potassio", rot: "Potássio", un: "mEq/L", min: 1.5, max: 9 },
];

const MARCADORES_RISCO = [
  { k: "diabetes", rot: "Diabetes" },
  { k: "fumante", rot: "Fumante atual" },
  { k: "usaEstatina", rot: "Usa estatina" },
];

/* Condições que, na DBHA 2025, mudam a escolha da classe. Só entram
   aqui as que a tabela PERFIS resolve — nada que o app não saiba usar. */
const CONDICOES = [
  { k: "coronaria", rot: "Doença coronariana ou pós-infarto" },
  { k: "icfer", rot: "IC com fração de ejeção reduzida" },
  { k: "fa", rot: "Fibrilação atrial" },
  { k: "avc", rot: "Pós-AVC" },
  { k: "negra", rot: "Pessoa negra" },
  { k: "gota", rot: "Gota ou hiperuricemia" },
  { k: "asma", rot: "Asma ou DPOC" },
  { k: "osteoporose", rot: "Osteoporose" },
  { k: "enxaqueca", rot: "Enxaqueca" },
  { k: "hpb", rot: "Hiperplasia prostática", so: "M" },
  { k: "gestante", rot: "Gestação", so: "F" },
  { k: "fragil", rot: "Idoso frágil ou hipotensão ortostática" },
];

const COR_COMBO = { sim: "#2E7A61", nao: "#B3242F", atencao: "#B8871B" };
const ROT_COMBO = { sim: "Pode e deve", nao: "Não combine", atencao: "Combine com cautela" };
const ORDEM_COMBO = ["sim", "atencao", "nao"];

/* ---------- tema ---------- */
function temaAtual() {
  return store.get("tema", null) ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function aplicarTema(t) {
  document.documentElement.dataset.theme = t;
  $("#theme-toggle").innerHTML = t === "dark" ? ICON.sun : ICON.moon;
  $("#theme-toggle").setAttribute(
    "aria-label",
    t === "dark" ? "Usar tema claro" : "Usar tema escuro"
  );
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.content = t === "dark" ? "#0E1013" : "#F4F2EE";
}

/* ---------- acentos legíveis ---------- */
/* Cada classe, estágio e veredito tem uma cor de identidade. Ela funciona como
   trilha e como ponto colorido, mas como TEXTO várias delas não alcançam
   contraste suficiente — o dourado sobre papel claro é o caso extremo. Em vez
   de escolher cores novas à mão, deriva-se de cada acento uma variante de
   texto para cada tema, escurecendo ou clareando só o necessário. */
const _hex = (h) => { h = h.replace("#", ""); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); };
const _lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
const _lum = (c) => 0.2126 * _lin(c[0]) + 0.7152 * _lin(c[1]) + 0.0722 * _lin(c[2]);
const _contraste = (a, b) => {
  const la = _lum(a), lb = _lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};
const _misturar = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const _paraHex = (c) => "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");

/* Pior caso de cada tema: no claro o acento pode cair sobre o papel, mais
   escuro que o cartão; no escuro, sobre o campo de formulário, mais claro. */
const SUP_CLARA = "#EDE8E0";
const SUP_ESCURA = "#2A2F35";

function _legivel(base, fundo, rumo, alvo) {
  for (let t = 0; t <= 1.0001; t += 0.02) {
    const c = _misturar(base, rumo, t);
    if (_contraste(c, fundo) >= alvo) return _paraHex(c);
  }
  return _paraHex(rumo);
}

const _cacheAcento = {};

/* Devolve as três variáveis inline: identidade, texto no claro, texto no escuro. */
function acento(cor) {
  if (_cacheAcento[cor]) return _cacheAcento[cor];
  const base = _hex(cor);
  // o texto costuma cair sobre o próprio fundo lavado, mais escuro que o cartão
  const fundoClaro = _misturar(_hex(SUP_CLARA), base, 0.09);
  const fundoEscuro = _misturar(_hex(SUP_ESCURA), base, 0.17);
  /* No tema escuro a mesma razão de contraste é percebida como mais fraca que
     no claro, então o acento como texto é levado a 7:1 em vez do mínimo. */
  const claro = _legivel(base, fundoClaro, [0, 0, 0], 4.5);
  const escuro = _legivel(base, fundoEscuro, [255, 255, 255], 7.0);
  return (_cacheAcento[cor] = `--c:${cor};--c-l:${claro};--c-d:${escuro}`);
}

/* ---------- blocos reutilizáveis ---------- */
function bloco(titulo, conteudo, mod = "") {
  const corpo = Array.isArray(conteudo)
    ? `<ul>${conteudo.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`
    : `<p>${esc(conteudo)}</p>`;
  return `<div class="blk ${mod}">
    <div class="blk-title ${mod}">${esc(titulo)}</div>${corpo}
  </div>`;
}

/* ---------- aba: início ---------- */
function viewInicio() {
  const estagios = ESTAGIOS.map(
    (e) => `<div class="stage acc" style="${acento(e.cor)}">
      <span class="stage-dot"></span>
      <div>
        <div class="stage-head">
          <span class="stage-name">${esc(e.rot)}</span>
          <span class="stage-range">${esc(e.faixa)}</span>
        </div>
        <div class="stage-note">${esc(e.cond)}</div>
      </div>
    </div>`
  ).join("");

  const limiares = INICIO_LIMIARES.map(
    (l) => `<div class="thr acc" style="${acento(l.cor)}">
      <span class="thr-pa">${esc(l.pa)}</span>
      <span class="thr-txt">${esc(l.txt)}</span>
    </div>`
  ).join("");

  const passos = ESCALONAMENTO.map(
    ([t, d]) => `<div class="step">
      <div>
        <div class="step-name">${esc(t)}</div>
        <div class="step-txt">${esc(d)}</div>
      </div>
    </div>`
  ).join("");

  return `
  <div class="grid-2 stack">
    <section class="card card-pad">
      <div class="eyebrow">Classificação · consultório</div>
      <h2 class="section-title" style="margin:6px 0 14px">Como classificar a pressão</h2>
      ${estagios}
      <p class="footnote">Valores de consultório em mmHg. O diagnóstico exige confirmação em duas ou mais consultas, ou por MAPA/MRPA — salvo se já houver lesão de órgão-alvo ou doença cardiovascular estabelecida.</p>
    </section>

    <section class="card card-pad">
      <div class="eyebrow">Conduta</div>
      <h2 class="section-title" style="margin:6px 0 14px">Quando e com o que começar</h2>
      ${limiares}

      <div class="target">
        <div class="target-label">Meta pressórica</div>
        <div class="target-value">&lt; 130/80 mmHg</div>
        <p class="target-note">Para todos, independentemente de idade e risco. A diretriz não define limite inferior: se a sistólica cair abaixo de 120 e a paciente estiver assintomática, mantenha a medicação.</p>
      </div>

      <div class="eyebrow" style="margin:22px 0 12px">Escalonamento</div>
      <div class="steps">${passos}</div>
    </section>
  </div>`;
}

/* ---------- aba: classes ---------- */
function cardClasse(c) {
  const aberto = state.aberto === c.id;
  const resto = c.drogas.length > 1 ? ` · +${c.drogas.length - 1}` : "";
  return `<article class="klass acc ${aberto ? "is-open" : ""}" style="${acento(c.cor)}" data-id="${c.id}">
    <button class="klass-head" aria-expanded="${aberto}" aria-controls="body-${c.id}">
      <span>
        <span class="klass-group">${esc(c.grupo)}</span>
        <span class="klass-name" style="display:block">${esc(c.nome)}</span>
        ${aberto ? "" : `<span class="klass-preview" style="display:block">${esc(c.drogas[0])}${resto}</span>`}
      </span>
      <span class="klass-aside">
        ${c.primeiraLinha ? '<span class="tag-first">1ª LINHA</span>' : ""}
        <span class="caret">${ICON.caret}</span>
      </span>
    </button>
    <div class="klass-body" id="body-${c.id}"><div><div class="klass-inner">
      ${bloco("Representantes e doses", c.drogas)}
      ${bloco("Como age", c.mecanismo)}
      ${bloco("Quando usar", c.indicacoes)}
      ${bloco("Quando não usar", c.contraindicacoes, "is-danger")}
      ${bloco("Efeitos adversos", c.adversos, "is-muted")}
      <div class="pearl">
        <div class="pearl-label">${ICON.pearl} Pega na prática</div>
        <p>${esc(c.pearl)}</p>
      </div>
    </div></div></div>
  </article>`;
}

function filtrar() {
  const q = norm(state.busca.trim());
  return classesAtuais().filter((c) => {
    if (state.grupo !== "Todos" && c.grupo !== state.grupo) return false;
    if (!q) return true;
    const alvo = norm(
      [c.nome, c.grupo, c.drogas.join(" "), c.indicacoes.join(" "),
       c.contraindicacoes.join(" "), c.mecanismo, c.adversos, c.pearl].join(" ")
    );
    return q.split(/\s+/).every((t) => alvo.includes(t));
  });
}

function renderListaClasses() {
  const lista = filtrar();
  const alvo = $("#lista-classes");
  const limpar = $("#search-clear");
  if (limpar) limpar.hidden = !state.busca;
  if (!lista.length) {
    alvo.innerHTML = `<div class="empty">${ICON.empty}
      Nenhuma classe corresponde a essa busca.<br>Tente outro termo.</div>`;
    return;
  }
  alvo.innerHTML = lista.map(cardClasse).join("");
}

function viewClasses() {
  return `
  <div class="search-bar">
    <div class="search-field">
      ${ICON.search}
      <input id="busca" type="search" inputmode="search" autocomplete="off"
             enterkeyhint="search" placeholder="Buscar droga, classe ou indicação"
             aria-label="Buscar droga, classe ou indicação">
      <button id="search-clear" class="search-clear" aria-label="Limpar busca" hidden>${ICON.x}</button>
    </div>
  </div>
  <div class="chips" id="chips" role="group" aria-label="Filtrar por grupo">
    ${gruposAtuais().map(
      (g) => `<button class="chip" data-grupo="${esc(g)}" aria-pressed="${g === state.grupo}">${esc(g)}</button>`
    ).join("")}
  </div>
  <div class="stack" id="lista-classes"></div>`;
}

/* ---------- aba: combinações ---------- */
function viewCombos() {
  let html = `<p class="tab-intro">A diretriz de 2025 recomenda começar já com dois fármacos em dose baixa na maioria dos hipertensos, de preferência em comprimido único.</p>`;
  for (const tipo of ORDEM_COMBO) {
    const itens = COMBOS.filter((c) => c.tipo === tipo);
    if (!itens.length) continue;
    html += `<div class="group-label acc" style="${acento(COR_COMBO[tipo])}">${esc(ROT_COMBO[tipo])}</div><div class="stack">`;
    html += itens.map(
      (c) => `<article class="combo acc" style="${acento(COR_COMBO[c.tipo])}">
        <h3 class="combo-title">${esc(c.titulo)}</h3>
        <p class="combo-txt">${esc(c.txt)}</p>
        ${c.ex ? `<div class="combo-ex">${esc(c.ex)}</div>` : ""}
      </article>`
    ).join("");
    html += `</div>`;
  }
  return html;
}

/* ---------- aba: perfis ---------- */
function viewPerfis() {
  return `<p class="tab-intro">Escolha guiada pela comorbidade: a indicação específica vence a preferência genérica de primeira linha.</p>
  <div class="card rows">
    ${PERFIS.map(
      (p) => `<div class="row">
        <div class="row-title">${esc(p.cond)}</div>
        <div class="row-main">${esc(p.esc)}</div>
        <div class="row-note">${esc(p.obs)}</div>
      </div>`
    ).join("")}
  </div>`;
}

/* ---------- aba: endovenosos ---------- */
function viewEmerg() {
  return `
  <div class="notice">
    <div class="eyebrow">Mudança de nomenclatura em 2025</div>
    <p>O termo urgência hipertensiva saiu da diretriz. PAS ≥ 180 e/ou PAD ≥ 110 <strong>sem</strong> lesão de órgão-alvo passa a se chamar elevação importante da PA sem lesão progressiva de órgãos-alvo: ajusta-se ou inicia-se a medicação por via oral e reavalia-se em até sete dias, no ambulatório.</p>
    <p>Emergência hipertensiva continua sendo a mesma faixa de PA <strong>com</strong> lesão aguda e progressiva de órgão-alvo. Aí sim: UTI, anti-hipertensivo endovenoso e meta de redução específica para cada órgão acometido.</p>
  </div>
  <div class="card rows" style="margin-top:10px">
    ${EMERGENCIA.map(
      (e) => `<div class="row">
        <div class="row-title">${esc(e.d)}</div>
        <div class="row-main">${esc(e.u)}</div>
        <div class="row-note">${esc(e.c)}</div>
      </div>`
    ).join("")}
  </div>`;
}

/* ---------- aba: risco ---------- */
function riscoCompleto() {
  return CAMPOS_RISCO.every((c) => Number.isFinite(parseFloat(risco[c.k])));
}

function entradasRisco() {
  const n = (k) => parseFloat(risco[k]);
  return {
    sexo: risco.sexo,
    idade: n("idade"), pas: n("pas"), pad: n("pad"),
    colesterolTotal: n("colesterolTotal"), hdl: n("hdl"), tfg: n("tfg"),
    diabetes: risco.diabetes, fumante: risco.fumante,
    // o PREVENT só quer saber se há tratamento; o número entra na conduta
    usaAntiHipertensivo: risco.nDrogas >= 1, usaEstatina: risco.usaEstatina,
    potassio: n("potassio"),
    // vazios viram NaN, que o cálculo trata como exame não informado
    hba1c: n("hba1c"), rac: n("rac"),
  };
}

/* ---------- conduta para o paciente calculado ---------- */
/* Cores da decisão, reaproveitadas dos limiares de início. */
const COR_DECISAO = {
  iniciar: INICIO_LIMIARES[2].cor,
  escalar: INICIO_LIMIARES[2].cor,
  condicional: INICIO_LIMIARES[1].cor,
  mev: INICIO_LIMIARES[0].cor,
  manter: INICIO_LIMIARES[0].cor,
};

/* Exemplos de droga e dose para o rótulo escolhido. Quando a conduta
   já apontou um princípio ativo (losartana, metildopa), mostra só ele. */
function exemplosDrogas(ids, rot) {
  const alvo = norm(rot.split(/[ —(]/)[0]);
  const todas = ids.reduce((a, id) => a.concat(classePorId(id).drogas), []);
  const casam = todas.filter((d) => norm(d).startsWith(alvo));
  if (casam.length) return casam;
  if (ids.length > 1) return ids.map((id) => classePorId(id).drogas[0]);
  return todas.slice(0, 3);
}

function linhaEsquema(e) {
  const links = e.ids.map(
    (id) => `<button class="rx-link" data-ir-classe="${id}">${esc(classePorId(id).nome)}</button>`
  ).join("");
  return `<article class="rx acc" style="${acento(e.cor)}">
    <div class="rx-top">
      <span class="rx-rot">${esc(e.rot)}</span>
      <span class="rx-ord">${esc(e.ordem)}</span>
    </div>
    <ul class="rx-drogas">${exemplosDrogas(e.ids, e.rot).map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
    <div class="rx-why">${e.motivos.map((m) => esc(m)).join(" · ")}</div>
    <div class="rx-links">${links}</div>
  </article>`;
}

function condutaHTML(e, r) {
  if (!Number.isFinite(e.pad)) return "";
  const p = condutaPaciente({
    pas: e.pas, pad: e.pad, idade: e.idade, tfg: e.tfg, rac: e.rac,
    potassio: e.potassio, diabetes: e.diabetes, faixa: r.faixa.rot,
    nDrogas: risco.nDrogas, cond: risco.cond,
  });

  const rotEsquema = p.decisao.chave === "manter"
    ? "Esquema esperado para este perfil"
    : p.decisao.chave === "mev"
      ? "Se um dia precisar de medicação"
      : "Esquema sugerido";

  const evitar = p.evitar.length
    ? `<div class="group-label">Não usar neste paciente</div>
       <div class="plano-evitar">${p.evitar.map(
         (x) => `<div class="ev"><span class="ev-rot">${esc(x.rot)}</span><span class="ev-txt">${esc(x.motivo)}</span></div>`
       ).join("")}</div>`
    : "";

  const alertas = p.alertas.length
    ? `<div class="group-label">Atenção</div>
       <div class="stack">${p.alertas.map(
         (a) => `<article class="combo acc" style="${acento(COR_COMBO[a.tipo])}">
           <div class="rx-top">
             <h3 class="combo-title">${esc(a.titulo)}</h3>
             <span class="rx-ord">${esc(ROT_COMBO[a.tipo])}</span>
           </div>
           <p class="combo-txt">${esc(a.txt)}</p>
         </article>`
       ).join("")}</div>`
    : "";

  return `<section class="card card-pad plano" style="margin-top:10px">
    <div class="eyebrow">Conduta para este paciente</div>

    <div class="plano-pa acc" style="${acento(p.estagio.cor)}">
      <span class="plano-pa-v">${e.pas}/${e.pad} <span class="unit">mmHg</span></span>
      <span class="plano-pa-e">${esc(p.estagio.rot)}</span>
    </div>
    <p class="plano-nota">${esc(p.estagio.cond)}</p>
    <div class="plano-meta">Meta pressórica <strong>${esc(p.meta)}</strong>${
      p.naMeta ? '<span class="plano-ok">na meta</span>' : '<span class="plano-fora">fora da meta</span>'
    }</div>

    <div class="plano-dec acc" style="${acento(COR_DECISAO[p.decisao.chave])}">
      <div class="plano-dec-rot">${esc(p.decisao.rot)}</div>
      <p>${esc(p.decisao.txt)}</p>
    </div>

    <div class="group-label">Quantas drogas</div>
    <div class="plano-passo">
      <div class="plano-passo-rot">${esc(p.passo.nome)}</div>
      <p>${esc(p.passo.txt)}</p>
    </div>

    <div class="group-label">${esc(rotEsquema)}</div>
    <div class="stack">${p.esquema.map(linhaEsquema).join("")}</div>
    ${p.referencia
      ? `<div class="plano-ref"><span class="plano-ref-rot">${esc(p.referencia.titulo)}</span>
         <p>${esc(p.referencia.txt)}</p>
         ${p.referencia.ex ? `<div class="combo-ex">${esc(p.referencia.ex)}</div>` : ""}</div>`
      : ""}

    ${evitar}
    ${alertas}

    <p class="footnote">Sugestão montada a partir da DBHA 2025 com os dados digitados acima — não é prescrição. A escolha final depende de exame físico, exames complementares, disponibilidade, custo e do que o paciente já tolerou.</p>
  </section>`;
}

function resultadoRiscoHTML() {
  if (!riscoCompleto()) {
    return `<div class="result-empty">Preencha os campos acima para ver o risco e a conduta.</div>`;
  }
  const e = entradasRisco();
  const r = calcularPrevent(e);
  const idx = FAIXAS_RISCO.indexOf(r.faixa);
  const pct = (v) => v.toFixed(1).replace(".", ",") + "%";

  return `<div class="result acc" style="${acento(r.faixa.cor)}">
    <div class="result-top">
      <div>
        <div class="result-label">Doença aterosclerótica em 10 anos</div>
        <div class="result-value">${pct(r.ascvd10)}</div>
      </div>
      <span class="result-band">${esc(r.faixa.rot)}</span>
    </div>
    <div class="result-model">PREVENT · ${esc(r.nomeModelo)}</div>

    <div class="result-scale" style="color:var(--c-txt)">
      ${FAIXAS_RISCO.map((_, i) => `<div class="${i === idx ? "on" : ""}"></div>`).join("")}
    </div>
    <div class="result-scale-rot">
      ${FAIXAS_RISCO.map((f) => `<span>${esc(f.rot)}</span>`).join("")}
    </div>

    <dl class="result-secondary">
      <div><dt>DCV total em 10 anos</dt><dd>${pct(r.dcv10)}</dd></div>
      <div><dt>DCV total em 30 anos</dt><dd>${pct(r.dcv30)}</dd></div>
    </dl>

    ${r.avisos.length
      ? `<div class="result-warn">Fora da faixa validada: ${esc(r.avisos.join("; "))}. O resultado deixa de ser confiável.</div>`
      : ""}
  </div>
  ${condutaHTML(e, r)}`;
}

function viewRisco() {
  const campos = CAMPOS_RISCO.map(
    (c) => `<div class="field">
      <label for="r-${c.k}">${esc(c.rot)} <span class="unit">${esc(c.un)}</span></label>
      <input id="r-${c.k}" data-risco="${c.k}" type="number" inputmode="decimal"
             min="${c.min}" max="${c.max}" step="any"
             value="${esc(risco[c.k])}" placeholder="—">
    </div>`
  ).join("");

  const opcionais = CAMPOS_OPCIONAIS.map(
    (c) => `<div class="field">
      <label for="r-${c.k}">${esc(c.rot)} <span class="unit">${esc(c.un)}</span></label>
      <input id="r-${c.k}" data-risco="${c.k}" type="number" inputmode="decimal"
             min="${c.min}" max="${c.max}" step="any"
             value="${esc(risco[c.k])}" placeholder="—">
    </div>`
  ).join("");

  const marcadores = MARCADORES_RISCO.map(
    (m) => `<button class="toggle" data-marca="${m.k}" aria-pressed="${risco[m.k]}">
      <span class="box">${ICON.check}</span>${esc(m.rot)}
    </button>`
  ).join("");

  const condicoes = CONDICOES.filter((x) => !x.so || x.so === risco.sexo).map(
    (x) => `<button class="toggle" data-cond="${x.k}" aria-pressed="${!!risco.cond[x.k]}">
      <span class="box">${ICON.check}</span>${esc(x.rot)}
    </button>`
  ).join("");

  const emUso = [0, 1, 2, 3, 4].map(
    (n) => `<button data-ndrogas="${n}" aria-pressed="${risco.nDrogas === n}">${n === 0 ? "Nenhum" : n === 4 ? "4+" : n}</button>`
  ).join("");

  return `
  <p class="tab-intro">A DBHA 2025 adota o <strong>PREVENT</strong>, da American Heart Association, no lugar do escore de Framingham. Vale para 30 a 79 anos, em prevenção primária — quem já tem doença cardiovascular estabelecida é de alto risco por definição, sem precisar calcular. Com a PA e as condições preenchidas, o resultado vem com o esquema de medicação que a diretriz indica para este paciente.</p>

  <section class="card card-pad">
    <div class="eyebrow">Dados do paciente</div>

    <div class="form-grid">
      <div class="field" style="grid-column:1/-1">
        <label>Sexo</label>
        <div class="seg">
          <button data-sexo="F" aria-pressed="${risco.sexo === "F"}">Feminino</button>
          <button data-sexo="M" aria-pressed="${risco.sexo === "M"}">Masculino</button>
        </div>
      </div>
      ${campos}
    </div>

    <div class="helper-line">
      <div class="field">
        <label for="r-creatinina">Creatinina <span class="unit">mg/dL</span></label>
        <input id="r-creatinina" data-risco="creatinina" type="number" inputmode="decimal"
               min="0.1" max="15" step="any" value="${esc(risco.creatinina)}" placeholder="—">
      </div>
      <button class="helper-btn" id="calc-tfg">Estimar TFG</button>
    </div>
    <p class="helper-note">Se o laboratório já informa a TFG, use aquele valor. A TFG é em mL/min/1,73m². O atalho aplica a CKD-EPI 2021, sem coeficiente de raça, e preenche o campo acima — precisa da idade e do sexo.</p>

    <div class="toggles">${marcadores}</div>

    <div class="field" style="margin-top:16px">
      <label>Anti-hipertensivos que já usa</label>
      <div class="seg seg-num">${emUso}</div>
    </div>
    <p class="helper-note">É esse número que responde se falta combinar e se já é hora da terceira ou da quarta droga.</p>
  </section>

  <section class="card card-pad" style="margin-top:10px">
    <div class="eyebrow">Condições associadas</div>
    <p class="helper-note" style="margin:6px 0 0">A indicação específica vence a preferência genérica de primeira linha. Marque o que houver.</p>
    <div class="toggles">${condicoes}</div>
  </section>

  <section class="card card-pad" style="margin-top:10px">
    <div class="eyebrow">Exames opcionais</div>
    <p class="helper-note" style="margin:6px 0 0">HbA1c e albumina/creatinina refinam a estimativa de risco em diabetes e doença renal. A albuminúria e o potássio também mudam a escolha da classe.</p>
    <div class="form-grid">${opcionais}</div>
  </section>

  <div id="risco-resultado">${resultadoRiscoHTML()}</div>

  <p class="footnote" style="border:0;padding-top:14px">
    PREVENT (Khan SS et al., <em>Circulation</em> 2023). Informar os dois exames aciona o modelo completo, que inclui um termo de privação social baseado em CEP dos Estados Unidos — aqui ele entra como desconhecido, valor que a equação calibra perto da média da população. Por isso esse resultado não é comparável ao de uma calculadora americana alimentada com CEP. As faixas — baixo &lt; 5%, limítrofe 5 a 7,5%, intermediário 7,5 a 20%, alto ≥ 20% — são as da diretriz, aplicadas ao risco de doença aterosclerótica em 10 anos. Nada do que você digita aqui é salvo.
  </p>`;
}


/* ---------- rastreamento ---------- */
function viewRaIdade() {
  return `
  <p class="tab-intro">O que começa em cada idade, e de quanto em quanto tempo repetir quando o resultado é normal. O detalhe de cada rastreio está nas abas ao lado; o do diabetes fica no assunto Diabetes.</p>

  <div class="group-label">Quando começa</div>
  <div class="stack">
    ${RAST_IDADE.map((f) => `<article class="combo acc" style="${acento(f.cor)}">
      <div class="result-top" style="align-items:baseline">
        <div>
          <div class="result-label">A partir de</div>
          <div class="result-value" style="font-size:30px">${esc(f.idade)}</div>
        </div>
        <span class="result-band">${esc(f.intervalo)}</span>
      </div>
      <dl class="result-secondary" style="border-top-color:var(--c-edge)">
        <div><dt>Quem</dt><dd style="font-size:14px">${esc(f.quem)}</dd></div>
        <div><dt>Exame</dt><dd style="font-size:14px">${esc(f.oque)}</dd></div>
      </dl>
      <p class="combo-txt">${esc(f.nota)}</p>
    </article>`).join("")}
  </div>

  <div class="group-label">Quando parar</div>
  <div class="card rows">
    ${RAST_ENCERRAR.map((e) => `<div class="row acc" style="${acento(e.cor)};border-left:3px solid var(--c)">
      <div class="result-top" style="align-items:baseline">
        <div class="row-title" style="flex:1 1 auto">${esc(e.o)}</div>
        <span class="stage-range">${esc(e.quando)}</span>
      </div>
      <div class="row-note" style="margin-top:5px">${esc(e.d)}</div>
    </div>`).join("")}
  </div>`;
}

function viewRaColo() {
  const c = RAST_COLO;
  return `
  <div class="notice">
    <div class="eyebrow">O que mudou em 2025</div>
    <p>${esc(c.virada)}</p>
  </div>

  <div class="group-label">Quem rastrear</div>
  <div class="card rows">
    ${c.quem.map((q) => `<div class="row acc" style="${acento(q.cor)};border-left:3px solid var(--c)">
      <div class="row-title">${esc(q.t)}</div>
      <div class="row-note" style="margin-top:4px">${esc(q.d)}</div>
    </div>`).join("")}
  </div>

  <div class="group-label">Conduta pelo resultado</div>
  <div class="stack">
    ${c.conduta.map((x) => `<article class="combo acc" style="${acento(x.cor)}">
      <div class="result-top" style="align-items:center">
        <h3 class="combo-title" style="flex:1 1 auto">${esc(x.res)}</h3>
        <span class="result-band">${esc(x.acao)}</span>
      </div>
      <p class="combo-txt">${esc(x.d)}</p>
    </article>`).join("")}
  </div>

  <div class="group-label">Depois da triagem</div>
  <div class="card rows">
    ${c.apos.map((a) => `<div class="row">
      <div class="row-title">${esc(a.t)}</div>
      <div class="row-note" style="margin-top:4px">${esc(a.d)}</div>
    </div>`).join("")}
  </div>

  <div class="group-label">Situações particulares</div>
  <div class="card rows">
    ${c.especiais.map((e) => `<div class="row acc" style="${acento(e.cor)};border-left:3px solid var(--c)">
      <div class="row-title">${esc(e.t)}</div>
      <div class="row-note" style="margin-top:4px">${esc(e.d)}</div>
    </div>`).join("")}
  </div>

  <div class="group-label">Coleta</div>
  <section class="card card-pad">
    <div class="blk" style="margin:0"><ul>${c.coleta.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
  </section>

  <p class="footnote">${esc(c.fonte)}</p>`;
}

function viewRaMama() {
  const m = RAST_MAMA;
  return `
  <p class="tab-intro">A mamografia é o único método que o Ministério recomenda para rastrear, e só em duas faixas de idade. Todo o resto da lista é recomendação contrária.</p>

  <div class="group-label">Mamografia, por faixa etária</div>
  <div class="card rows">
    ${m.faixas.map((f) => `<div class="row acc" style="${acento(f.cor)};border-left:3px solid var(--c)">
      <div class="result-top" style="align-items:baseline">
        <div class="row-title" style="flex:1 1 auto">${esc(f.idade)}</div>
        <span class="result-band">${f.dir === "favor" ? "Rastrear" : "Não rastrear"}</span>
      </div>
      <div class="row-note" style="margin-top:5px">Recomendação ${f.dir === "favor" ? "favorável" : "contrária"} ${esc(f.forca)} — ${esc(f.d)}</div>
    </div>`).join("")}
  </div>
  <div class="result-action" style="margin-top:10px">${esc(m.periodicidade)}</div>

  <div class="group-label">Recomendação contrária</div>
  <div class="card rows">
    ${m.contra.map((x) => `<div class="row">
      <div class="result-top" style="align-items:baseline">
        <div class="row-title" style="flex:1 1 auto">${esc(x.o)}</div>
        <span class="selo-contra">${esc(x.forca)}</span>
      </div>
      <div class="row-note" style="margin-top:4px">${esc(x.d)}</div>
    </div>`).join("")}
  </div>

  <section class="card card-pad" style="margin-top:10px">
    <div class="eyebrow">${esc(m.semRec.o)}</div>
    <p style="font-size:13.5px;line-height:1.58;color:var(--ink);margin-top:8px">${esc(m.semRec.d)}</p>
  </section>

  <div class="group-label">Referência urgente</div>
  <section class="card card-pad">
    <p class="helper-note" style="margin:0 0 12px">Sinais e sintomas que o Ministério recomenda encaminhar com urgência para serviço de diagnóstico mamário.</p>
    <div class="blk is-danger" style="margin:0"><ul>${m.sinais.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
  </section>

  <div class="group-label">Diagnóstico precoce</div>
  <div class="card rows">
    ${m.precoce.map((x) => `<div class="row">
      <div class="row-title">${esc(x.t)}</div>
      <div class="row-note" style="margin-top:4px">${esc(x.d)}</div>
    </div>`).join("")}
  </div>

  <p class="footnote">${esc(m.fonte)}</p>`;
}

function viewRaProstata() {
  const p = RAST_PROSTATA;
  return `
  <div class="notice">
    <div class="eyebrow">Posição do Ministério da Saúde</div>
    <p style="font-size:15px;font-weight:600;color:var(--ink)">${esc(p.posicao)}</p>
  </div>

  <div class="group-label">Por quê</div>
  <section class="card card-pad">
    <div class="blk" style="margin:0"><ul>${p.porque.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
  </section>

  <div class="group-label">O que fazer então</div>
  <div class="card rows">
    ${p.conduta.map((c) => `<div class="row">
      <div class="row-title">${esc(c.t)}</div>
      <div class="row-note" style="margin-top:4px">${esc(c.d)}</div>
    </div>`).join("")}
  </div>

  <div class="group-label">Fatores de risco</div>
  <section class="card card-pad">
    <p style="font-size:13.5px;line-height:1.58;color:var(--ink)">${esc(p.risco)}</p>
  </section>

  <p class="footnote">${esc(p.fonte)}</p>`;
}

/* ---------- diabetes ---------- */
function tabelaDm(t, colunas, corDe) {
  const cabeca = colunas.map((c, i) =>
    `<th style="${corDe ? `color:${corDe(i)}` : ""}">${esc(typeof c === "string" ? c : c.rot)}</th>`
  ).join("");
  const corpo = t.linhas.map(
    (l) => `<tr>
      <th scope="row">${esc(l.exame)} <span class="un">${esc(l.un)}</span></th>
      ${l.v.map((v) => `<td>${esc(v)}</td>`).join("")}
    </tr>`
  ).join("");
  return `<div class="tabela-rolo"><table class="tabela">
    <thead><tr><th></th>${cabeca}</tr></thead><tbody>${corpo}</tbody>
  </table></div>`;
}

function viewDmInicio() {
  const d = DM_DIAGNOSTICO, m = DM_METAS;
  return `
  <section class="card card-pad">
    <div class="eyebrow">Diagnóstico · a partir dos 18 anos</div>
    <h2 class="section-title" style="margin:6px 0 4px">${esc(d.titulo)}</h2>
    ${tabelaDm(d, d.colunas)}
    <p class="footnote">${esc(d.nota)}</p>
  </section>

  <section class="card card-pad" style="margin-top:10px">
    <div class="eyebrow">Controle glicêmico</div>
    <h2 class="section-title" style="margin:6px 0 4px">${esc(m.titulo)}</h2>
    ${tabelaDm(m, m.colunas, (i) => m.colunas[i].cor)}
    <div style="margin-top:6px">
      ${m.legenda.map(([t, dsc]) => `<div style="padding:11px 0;border-top:1px solid var(--line-soft)">
        <div class="stage-name">${esc(t)}</div>
        <div class="stage-note">${esc(dsc)}</div>
      </div>`).join("")}
    </div>
    <p class="footnote">${esc(m.nota)}</p>
  </section>`;
}

function viewDmRastreio() {
  const r = DM_RASTREIO;
  return `
  <p class="tab-intro">${esc(r.intro)}</p>

  <div class="group-label">Quem rastrear</div>
  <div class="card rows">
    ${r.quem.map((q) => `<div class="row acc" style="${acento(q.cor)};border-left:3px solid var(--c)">
      <div class="row-title">${esc(q.t)}</div>
      <div class="row-note" style="margin-top:4px">${esc(q.d)}</div>
    </div>`).join("")}
  </div>

  <div class="group-label">Fatores de risco</div>
  <section class="card card-pad">
    <p class="helper-note" style="margin:0 0 12px">Um só destes, com sobrepeso ou obesidade, já indica rastrear em qualquer idade.</p>
    <div class="blk" style="margin:0">
      <ul>${r.fatores.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
    </div>
  </section>

  <div class="group-label">Com que exame</div>
  <section class="card card-pad">
    <p style="font-size:13.5px;line-height:1.58;color:var(--ink)">${esc(r.como.preconizado)}</p>
    <p style="font-size:13.5px;line-height:1.58;color:var(--ink);margin-top:10px">${esc(r.como.confirmacao)}</p>
    ${r.como.ressalvas.map((x) => `<div class="thr" style="grid-template-columns:auto minmax(0,1fr)">
      <span class="thr-pa" style="min-width:60px">${esc(x.t)}</span>
      <span class="thr-txt">${esc(x.d)}</span>
    </div>`).join("")}
  </section>

  <div class="group-label">Quando repetir</div>
  <div class="stack">
    ${r.seguimento.map((x) => `<article class="combo acc" style="${acento(x.cor)}">
      <div class="result-top" style="align-items:center">
        <h3 class="combo-title" style="flex:1 1 auto">${esc(x.res)}</h3>
        <span class="result-band">${esc(x.quando)}</span>
      </div>
      <p class="combo-txt">${esc(x.d)}</p>
    </article>`).join("")}
  </div>

  <div class="group-label">Estratificação de risco</div>
  <section class="card card-pad">
    <div class="eyebrow">${esc(r.findrisc.t)}</div>
    <p style="font-size:13.5px;line-height:1.58;color:var(--ink);margin-top:8px">${esc(r.findrisc.d)}</p>
    <div style="margin-top:14px">
      ${r.findrisc.faixas.map((f) => `<div class="stage acc" style="${acento(f.cor)}">
        <span class="stage-dot"></span>
        <div class="stage-head">
          <span class="stage-name">${esc(f.rot)}</span>
          <span class="stage-range">${esc(f.v)}</span>
        </div>
      </div>`).join("")}
    </div>
    <p class="footnote">${esc(r.findrisc.nota)}</p>
  </section>`;
}

function viewDmFluxo() {
  return `<p class="tab-intro">Fluxograma de tratamento do PCDT para adultos com DM2. O que decide o ponto de partida é o tempo desde o diagnóstico e a presença de fator de risco.</p>
  ${DM_FLUXO.map((b) => `<div class="group-label acc" style="${acento(b.cor)}">${esc(b.passo)}</div>
    <div class="card rows">
      ${b.itens.map((i) => `<div class="row">
        <div class="row-title">${esc(i.t)}</div>
        <div class="row-note" style="margin-top:4px">${esc(i.d)}</div>
      </div>`).join("")}
    </div>`).join("")}`;
}

function viewDmClasses() {
  return viewClasses();
}

function viewDmRim() {
  const r = DM_RIM;
  return `<p class="tab-intro">${esc(r.nota)}</p>
  <div class="card rows">
    ${r.faixas.map((f) => `<div class="row acc" style="${acento(f.cor)};border-left:3px solid var(--c)">
      <div class="row-title">${esc(f.tfg)}</div>
      <div class="row-main" style="color:var(--ink)">${esc(f.metfor)}</div>
      ${f.meta ? `<div class="row-note">${esc(f.meta)}</div>` : ""}
      <div class="row-note">${esc(f.extra)}</div>
    </div>`).join("")}
  </div>
  <p class="footnote">${esc(r.rodape)}</p>`;
}

function viewDmHipo() {
  const h = DM_HIPO;
  return `<p class="tab-intro">${esc(h.intro)}</p>
  <div class="stack">
    ${h.niveis.map((n) => `<article class="combo acc" style="${acento(n.cor)}">
      <div class="group-label" style="margin:0 0 8px;color:var(--c-txt)">${esc(n.n)} · ${esc(n.rot)}</div>
      <h3 class="combo-title">${esc(n.faixa)}</h3>
      <p class="combo-txt">${esc(n.obs)}</p>
      <div class="result-action" style="margin-top:12px">${esc(n.trat)}</div>
    </article>`).join("")}
  </div>
  <p class="footnote">${esc(h.nota)}</p>`;
}

/* ---------- assunto sem conteúdo ainda ---------- */
function viewEmBreve() {
  return `<div class="card card-pad" style="text-align:center;padding:38px 22px">
    <div class="eyebrow" style="margin-bottom:12px">Em preparação</div>
    <p style="font-size:14.5px;line-height:1.6;color:var(--ink);margin:0 auto;max-width:36ch">
      A estrutura está pronta e esperando o conteúdo: classes e doses, o
      algoritmo de escolha por risco cardiovascular, IMC e HbA1c, metas e
      quando começar insulina.
    </p>
    <p style="font-size:12.5px;line-height:1.55;color:var(--faint);margin:16px auto 0;max-width:40ch">
      O conteúdo de hipertensão deste guia foi escrito a quatro mãos com quem
      estuda, não gerado automaticamente. O de diabetes segue o mesmo caminho.
    </p>
  </div>`;
}

/* ---------- render ---------- */
const VIEWS = {
  "ra-idade": viewRaIdade,
  "ra-colo": viewRaColo,
  "ra-mama": viewRaMama,
  "ra-prostata": viewRaProstata,
  "dm-inicio": viewDmInicio,
  "dm-rastreio": viewDmRastreio,
  "dm-fluxo": viewDmFluxo,
  "dm-classes": viewDmClasses,
  "dm-rim": viewDmRim,
  "dm-hipo": viewDmHipo,
  inicio: viewInicio,
  risco: viewRisco,
  classes: viewClasses,
  combos: viewCombos,
  perfis: viewPerfis,
  emerg: viewEmerg,
};

function renderCabecalho() {
  const a = ASSUNTOS[state.assunto];
  $("#brand-fonte").textContent = a.fonte;
  $("#titulo").innerHTML = esc(a.titulo);
  $("#subtitulo").textContent = a.sub;
  $("#ruler").hidden = !a.regua;
  $("#aviso").textContent = a.rodape;
  $("#seletor-assunto").innerHTML = Object.entries(ASSUNTOS)
    .map(([id, v]) => `<button data-assunto="${id}" aria-pressed="${id === state.assunto}">${esc(v.rot)}</button>`)
    .join("");
}

function renderBarra() {
  $("#tabbar").innerHTML = abas()
    .map((t) => `<button class="tab" role="tab" data-aba="${t.id}"
             aria-selected="${t.id === state.aba}" aria-controls="painel">
      ${t.icon}<span>${esc(t.rot)}</span></button>`)
    .join("");
}

function renderAba() {
  $("#painel").innerHTML = `<div class="panel">${VIEWS[state.aba]()}</div>`;
  if (state.aba === "classes" || state.aba === "dm-classes") {
    renderListaClasses();
    $("#busca").value = state.busca;
  }
  document.querySelectorAll(".tab").forEach((b) => {
    b.setAttribute("aria-selected", String(b.dataset.aba === state.aba));
  });
  store.set("aba", state.aba);
}

function irParaAssunto(id) {
  if (state.assunto === id) return;
  state.assunto = id;
  store.set("assunto", id);
  state.aba = abas()[0].id;
  state.aberto = null;
  state.busca = "";
  state.grupo = "Todos";
  renderCabecalho();
  renderBarra();
  renderAba();
  scrollTo({ top: 0 });
}

/* Abre o cartão de uma classe vindo da conduta sugerida. */
function irParaClasse(id) {
  state.assunto = "has";
  store.set("assunto", "has");
  state.grupo = "Todos";
  store.set("grupo", "Todos");
  state.busca = "";
  state.aberto = id;
  state.aba = "classes";
  renderCabecalho();
  renderBarra();
  renderAba();
  const el = document.querySelector(`.klass[data-id="${id}"]`);
  scrollTo({ top: el ? el.getBoundingClientRect().top + scrollY - 76 : 0 });
}

function irPara(id) {
  if (state.aba === id) {
    scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  state.aba = id;
  renderAba();
  scrollTo({ top: 0 });
}

/* ---------- montagem ---------- */
function montar() {
  $("#ruler").innerHTML = ESTAGIOS.map(
    (e) => `<span style="background:${e.cor}"></span>`
  ).join("");

  $("#brand-icon").innerHTML = ICON.logo;
  aplicarTema(temaAtual());
  renderCabecalho();
  renderBarra();
  renderAba();
}

/* ---------- eventos ---------- */
document.addEventListener("click", (ev) => {
  const bt = ev.target.closest("[data-assunto]");
  if (bt) return irParaAssunto(bt.dataset.assunto);

  const tab = ev.target.closest(".tab");
  if (tab) return irPara(tab.dataset.aba);

  const chip = ev.target.closest(".chip");
  if (chip) {
    state.grupo = chip.dataset.grupo;
    store.set("grupo", state.grupo);
    document.querySelectorAll(".chip").forEach((c) =>
      c.setAttribute("aria-pressed", String(c.dataset.grupo === state.grupo))
    );
    state.aberto = null;
    renderListaClasses();
    return;
  }

  const head = ev.target.closest(".klass-head");
  if (head) {
    const art = head.closest(".klass");
    const id = art.dataset.id;
    const abrindo = state.aberto !== id;
    state.aberto = abrindo ? id : null;
    renderListaClasses();
    if (abrindo) {
      const novo = document.querySelector(`.klass[data-id="${id}"]`);
      const y = novo.getBoundingClientRect().top + scrollY - 12;
      if (novo.getBoundingClientRect().top < 0) scrollTo({ top: y, behavior: "smooth" });
    }
    return;
  }

  const btSexo = ev.target.closest("[data-sexo]");
  if (btSexo) {
    risco.sexo = btSexo.dataset.sexo;
    // gestação e hiperplasia prostática entram e saem conforme o sexo
    CONDICOES.forEach((x) => { if (x.so && x.so !== risco.sexo) delete risco.cond[x.k]; });
    renderAba();
    return;
  }

  const btN = ev.target.closest("[data-ndrogas]");
  if (btN) {
    risco.nDrogas = Number(btN.dataset.ndrogas);
    document.querySelectorAll("[data-ndrogas]").forEach((b) =>
      b.setAttribute("aria-pressed", String(Number(b.dataset.ndrogas) === risco.nDrogas))
    );
    redesenharResultadoRisco();
    return;
  }

  const btCond = ev.target.closest("[data-cond]");
  if (btCond) {
    const k = btCond.dataset.cond;
    risco.cond[k] = !risco.cond[k];
    btCond.setAttribute("aria-pressed", String(!!risco.cond[k]));
    redesenharResultadoRisco();
    return;
  }

  const btClasse = ev.target.closest("[data-ir-classe]");
  if (btClasse) return irParaClasse(btClasse.dataset.irClasse);

  const marca = ev.target.closest("[data-marca]");
  if (marca) {
    const k = marca.dataset.marca;
    risco[k] = !risco[k];
    marca.setAttribute("aria-pressed", String(risco[k]));
    redesenharResultadoRisco();
    return;
  }

  if (ev.target.closest("#calc-tfg")) {
    const cr = parseFloat(risco.creatinina);
    const idade = parseFloat(risco.idade);
    if (!Number.isFinite(cr) || !Number.isFinite(idade)) {
      alert("Para estimar a TFG preciso da creatinina e da idade.");
      return;
    }
    const v = tfgCkdEpi2021({ creatinina: cr, idade, sexo: risco.sexo });
    risco.tfg = String(Math.round(v));
    $("#r-tfg").value = risco.tfg;
    redesenharResultadoRisco();
    return;
  }

  if (ev.target.closest("#search-clear")) {
    state.busca = "";
    renderListaClasses();
    $("#busca").value = "";
    $("#busca").focus();
    return;
  }

  if (ev.target.closest("#theme-toggle")) {
    const novo = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    store.set("tema", novo);
    aplicarTema(novo);
    return;
  }

  if (ev.target.closest("#btn-instalar")) return instalar();

  if (ev.target.closest("#sheet-close") || ev.target.id === "sheet-backdrop") {
    $("#sheet-backdrop")?.remove();
  }
});

function redesenharResultadoRisco() {
  const alvo = $("#risco-resultado");
  if (alvo) alvo.innerHTML = resultadoRiscoHTML();
}

document.addEventListener("input", (ev) => {
  const campo = ev.target.dataset && ev.target.dataset.risco;
  if (campo) {
    risco[campo] = ev.target.value;
    redesenharResultadoRisco();
    return;
  }
  if (ev.target.id === "busca") {
    state.busca = ev.target.value;
    state.aberto = null;
    renderListaClasses();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") {
    if ($("#sheet-backdrop")) return $("#sheet-backdrop").remove();
    if (document.activeElement?.id === "busca") {
      state.busca = "";
      $("#busca").value = "";
      renderListaClasses();
    }
  }
});

/* ---------- instalação ---------- */
let promptInstalacao = null;

addEventListener("beforeinstallprompt", (ev) => {
  ev.preventDefault();
  promptInstalacao = ev;
  const b = $("#btn-instalar");
  if (b) b.hidden = false;
});

addEventListener("appinstalled", () => {
  promptInstalacao = null;
  const b = $("#btn-instalar");
  if (b) b.hidden = true;
});

async function instalar() {
  if (promptInstalacao) {
    promptInstalacao.prompt();
    await promptInstalacao.userChoice;
    promptInstalacao = null;
    $("#btn-instalar").hidden = true;
    return;
  }
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="sheet-backdrop" id="sheet-backdrop" role="dialog" aria-modal="true" aria-label="Como instalar">
      <div class="sheet">
        <h2>Deixe no celular</h2>
        <p>Instalado, o guia abre em tela cheia e funciona sem internet.</p>
        <ol>
          <li><strong>iPhone / iPad:</strong> toque em Compartilhar e depois em “Adicionar à Tela de Início”.</li>
          <li><strong>Android:</strong> menu do navegador e depois “Instalar aplicativo” ou “Adicionar à tela inicial”.</li>
          <li><strong>Computador:</strong> ícone de instalar na barra de endereço.</li>
        </ol>
        <button class="sheet-close" id="sheet-close">Entendi</button>
      </div>
    </div>`
  );
}

/* modo instalado: esconde o convite */
if (matchMedia("(display-mode: standalone)").matches || navigator.standalone) {
  addEventListener("DOMContentLoaded", () => {
    const b = $("#btn-instalar");
    if (b) b.hidden = true;
  });
}

/* ---------- service worker ---------- */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => { /* offline segue sem cache */ });
  });
}

/* ---------- tema do sistema muda ---------- */
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (store.get("tema", null) === null) aplicarTema(e.matches ? "dark" : "light");
});

montar();
