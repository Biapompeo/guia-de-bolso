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
  search: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  x: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  caret: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>',
  moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',
  pearl: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2M5 6l1.5 1.5M19 6l-1.5 1.5M9 17a5.5 5.5 0 1 1 6 0v2.5h-6V17zM10 22h4"/></svg>',
  logo: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4.5l2-5.5 3.5 11 2.5-7 1.5 4.5H22"/></svg>',
  empty: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
};

/* ---------- estado ---------- */
const TABS = [
  { id: "inicio", rot: "Início", icon: ICON.inicio },
  { id: "classes", rot: "Classes", icon: ICON.classes },
  { id: "combos", rot: "Combinar", icon: ICON.combos },
  { id: "perfis", rot: "Paciente", icon: ICON.perfis },
  { id: "emerg", rot: "Endovenoso", icon: ICON.emerg },
];

const state = {
  aba: store.get("aba", "inicio"),
  aberto: null,
  grupo: store.get("grupo", "Todos"),
  busca: "",
};
const abaUrl = new URLSearchParams(location.search).get("aba");
if (abaUrl && TABS.some((t) => t.id === abaUrl)) state.aba = abaUrl;
if (!TABS.some((t) => t.id === state.aba)) state.aba = "inicio";

const GRUPOS = ["Todos", ...new Set(CLASSES.map((c) => c.grupo))];
if (!GRUPOS.includes(state.grupo)) state.grupo = "Todos";

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
    (e) => `<div class="stage acc" style="--c:${e.cor}">
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
    (l) => `<div class="thr acc" style="--c:${l.cor}">
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
  return `<article class="klass acc ${aberto ? "is-open" : ""}" style="--c:${c.cor}" data-id="${c.id}">
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
  return CLASSES.filter((c) => {
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
    ${GRUPOS.map(
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
    html += `<div class="group-label acc" style="--c:${COR_COMBO[tipo]}">${esc(ROT_COMBO[tipo])}</div><div class="stack">`;
    html += itens.map(
      (c) => `<article class="combo acc" style="--c:${COR_COMBO[c.tipo]}">
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

/* ---------- render ---------- */
const VIEWS = {
  inicio: viewInicio,
  classes: viewClasses,
  combos: viewCombos,
  perfis: viewPerfis,
  emerg: viewEmerg,
};

function renderAba() {
  $("#painel").innerHTML = `<div class="panel">${VIEWS[state.aba]()}</div>`;
  if (state.aba === "classes") {
    renderListaClasses();
    const inp = $("#busca");
    inp.value = state.busca;
  }
  document.querySelectorAll(".tab").forEach((b) => {
    b.setAttribute("aria-selected", String(b.dataset.aba === state.aba));
  });
  store.set("aba", state.aba);
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
  $("#tabbar").innerHTML = TABS.map(
    (t) => `<button class="tab" role="tab" data-aba="${t.id}"
             aria-selected="${t.id === state.aba}" aria-controls="painel">
      ${t.icon}<span>${esc(t.rot)}</span></button>`
  ).join("");

  $("#ruler").innerHTML = ESTAGIOS.map(
    (e) => `<span style="background:${e.cor}"></span>`
  ).join("");

  $("#brand-icon").innerHTML = ICON.logo;
  aplicarTema(temaAtual());
  renderAba();
}

/* ---------- eventos ---------- */
document.addEventListener("click", (ev) => {
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

document.addEventListener("input", (ev) => {
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
