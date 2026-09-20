/* =================================================================
   Service worker — deixa o guia disponível sem internet
   ================================================================= */

const VERSAO = "v13";
const CACHE = "anti-hipertensivos-" + VERSAO;

const SHELL = [
  "./",
  "./index.html",
  "./assets/styles.css",
  "./assets/prevent-betas.js",
  "./assets/prevent.js",
  "./assets/data.js",
  "./assets/data-diabetes.js",
  "./assets/data-rastreio.js",
  "./assets/conduta.js",
  "./assets/app.js",
  "./manifest.webmanifest",
  "./icons/favicon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (ev) => {
  ev.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches.keys()
      .then((chaves) => Promise.all(
        chaves.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (ev) => {
  const req = ev.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  /* navegação: tenta a rede, cai para o cache quando offline.
     Só o guia se guarda como casca: as outras páginas do site
     (./rodizio/, por exemplo) se guardam cada uma em si mesma, senão
     uma visita a elas viraria a casca do guia e, sem internet, abriria
     no lugar dele. */
  if (req.mode === "navigate") {
    const raiz = new URL("./", self.registration.scope).pathname;
    const alvo = new URL(req.url).pathname;
    const eGuia = alvo === raiz || alvo === raiz + "index.html";
    const chave = eGuia ? "./index.html" : req.url;
    ev.respondWith(
      fetch(req)
        .then((res) => {
          const copia = res.clone();
          caches.open(CACHE).then((c) => c.put(chave, copia));
          return res;
        })
        .catch(() => caches.match(chave).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  /* demais recursos: serve do cache e revalida em segundo plano */
  ev.respondWith(
    caches.match(req).then((cacheado) => {
      const rede = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copia = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copia));
          }
          return res;
        })
        .catch(() => cacheado);
      return cacheado || rede;
    })
  );
});
