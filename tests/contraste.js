/* Auditoria de contraste — percorre as seis abas nos dois temas e mede o
   contraste real de cada texto contra o fundo efetivamente pintado.
   Detecta o erro clássico de paleta: a cor que ficou bonita mas ilegível.

   Precisa de um servidor local e do playwright:

     python3 -m http.server 8137 &
     npm i playwright
     node tests/contraste.js http://localhost:8137

   Sai com código 1 se algum texto ficar abaixo do alvo. No tema claro os
   alvos são 7:1 para texto corrido e 4,5:1 para rótulos e texto secundário.
   No escuro eles sobem 22%, porque a mesma razão de contraste é percebida
   como mais fraca sobre fundo escuro — 4,5:1 passa na norma e ainda assim
   cansa a leitura. */

const { chromium } = require('playwright');

const BASE = process.argv[2] || 'http://localhost:8137';
// no ambiente de desenvolvimento o Chromium vem de fora do projeto
const EXEC = process.env.CHROMIUM_PATH || undefined;

const AUDIT = (exigencia) => `(() => {
  const EXIG = ${exigencia};
  // o navegador serializa color-mix como oklab(...); ler aqueles números como
  // RGB dava falso negativo, então cada notação é convertida de verdade
  const g1 = v => v <= 0.0031308 ? v*12.92 : 1.055*Math.pow(v,1/2.4)-0.055;
  const oklab2rgb = (L,a,bb) => {
    const l=(L+0.3963377774*a+0.2158037573*bb)**3,
          m=(L-0.1055613458*a-0.0638541728*bb)**3,
          s2=(L-0.0894841775*a-1.2914855480*bb)**3;
    const R= 4.0767416621*l-3.3077115913*m+0.2309699292*s2,
          G=-1.2684380046*l+2.6097574011*m-0.3413193965*s2,
          B=-0.0041960863*l-0.7034186147*m+1.7076147010*s2;
    return [R,G,B].map(v=>Math.max(0,Math.min(255,Math.round(g1(Math.max(0,Math.min(1,v)))*255))));
  };
  const parse = c => {
    c = c.trim();
    const nums = (c.match(/-?[\\d.]+(?=[\\s,)\\/])|-?[\\d.]+/g)||[]).map(Number);
    if (c.startsWith('oklab')) {
      const [R,G,B] = oklab2rgb(nums[0], nums[1], nums[2]);
      return { r:R, g:G, b:B, a: nums.length>3 ? nums[3] : 1 };
    }
    if (c.startsWith('color(')) {
      const [r,g,b] = nums.slice(0,3).map(v=>Math.round(v*255));
      return { r, g, b, a: nums.length>3 ? nums[3] : 1 };
    }
    if (c === 'transparent') return { r:0,g:0,b:0,a:0 };
    return { r:nums[0], g:nums[1], b:nums[2], a: nums.length>3 ? nums[3] : 1 };
  };
  const over = (f, b) => ({ r:f.r*f.a+b.r*(1-f.a), g:f.g*f.a+b.g*(1-f.a), b:f.b*f.a+b.b*(1-f.a), a:1 });
  const lum = c => { const f=v=>{v/=255; return v<=0.04045?v/12.92:Math.pow((v+0.055)/1.055,2.4);};
    return 0.2126*f(c.r)+0.7152*f(c.g)+0.0722*f(c.b); };
  const ratio = (x,y) => { const a=lum(x),b=lum(y),hi=Math.max(a,b),lo=Math.min(a,b); return (hi+0.05)/(lo+0.05); };

  // fundo efetivo: compõe as camadas até achar algo opaco
  const fundo = el => {
    let acc = null;
    for (let n = el; n; n = n.parentElement) {
      const bg = parse(getComputedStyle(n).backgroundColor);
      if (bg.a === 0) continue;
      acc = acc ? over(acc, bg) : bg;
      if (acc.a === 1 || bg.a === 1) return acc;
    }
    return acc || { r:255,g:255,b:255,a:1 };
  };

  const alvos = [
    ['.klass-name', 7], ['.klass-group', 4.5], ['.klass-preview', 4.5], ['.tag-first', 4.5],
    ['.blk p', 7], ['.blk li', 7], ['.blk-title', 4.5], ['.pearl p', 7], ['.pearl-label', 4.5],
    ['.eyebrow', 4.5], ['.section-title', 7], ['.stage-name', 7], ['.stage-range', 4.5],
    ['.stage-note', 4.5], ['.footnote', 4.5], ['.tab-intro', 4.5],
    ['.thr-pa', 4.5], ['.thr-txt', 7], ['.target-value', 4.5], ['.target-note', 4.5],
    ['.step-name', 7], ['.step-txt', 4.5], ['.combo-title', 7], ['.combo-txt', 4.5],
    ['.combo-ex', 4.5], ['.group-label', 4.5], ['.row-title', 7], ['.row-main', 4.5],
    ['.row-note', 4.5], ['.notice p', 7], ['.chip', 4.5], ['.tab', 4.5],
    ['.tabela thead th', 4.5], ['.tabela tbody th', 7], ['.tabela td', 7],
    ['.field label', 4.5], ['.field input', 7], ['.seg button', 4.5], ['.toggle', 4.5],
    ['.result-label', 4.5], ['.result-value', 4.5], ['.result-band', 4.5],
    ['.result-model', 4.5], ['.result-secondary dt', 4.5], ['.result-secondary dd', 7],
    ['.result-action', 7], ['.result-scale-rot', 4.5], ['.helper-note', 4.5],
    ['.helper-btn', 4.5], ['.ghost-btn', 4.5], ['.foot', 4.5], ['.topbar-nome', 7], ['.assinatura-rot', 4.5], ['.assinatura-nome', 7], ['.search-field input', 7],
  ];

  const falhas = [];
  for (const [sel, base] of alvos) {
    const alvo = base * EXIG;
    for (const el of document.querySelectorAll(sel)) {
      const cs = getComputedStyle(el);
      if (!el.offsetParent && cs.position !== 'fixed') continue;
      const fg = parse(cs.color);
      const bg = fundo(el);
      const r = ratio(fg.a < 1 ? over(fg, bg) : fg, bg);
      if (r < alvo) falhas.push(sel + '  ' + r.toFixed(2) + ':1 (alvo ' + alvo + ')  ' + cs.color + ' sobre rgb(' + [bg.r,bg.g,bg.b].map(Math.round) + ')');
      break; // um exemplar por seletor basta
    }
  }
  return falhas;
})()`;

(async () => {
  let total = 0;
  const b = await chromium.launch({ executablePath: EXEC });
  for (const tema of ['light', 'dark']) {
    const ctx = await b.newContext({ viewport:{width:390,height:844}, deviceScaleFactor:2, isMobile:true, locale:'pt-BR', colorScheme: tema });
    const p = await ctx.newPage();
    const todas = [];
    const ROTEIRO = [
      ['has', ['inicio','risco','classes','combos','perfis','emerg']],
      ['dm',  ['dm-inicio','dm-fluxo','dm-classes','dm-rim','dm-hipo']],
    ];
    for (const [assunto, abas] of ROTEIRO) for (const aba of abas) {
      await p.goto(`${BASE}/?assunto=${assunto}&aba=${aba}`, { waitUntil:'networkidle' });
      if (aba === 'classes') { await p.click('.klass[data-id="ieca"] .klass-head'); await p.waitForTimeout(400); }
      if (aba === 'dm-classes') { await p.click('.klass[data-id="dm-isglt2"] .klass-head'); await p.waitForTimeout(400); }
      if (aba === 'risco') {
        for (const [id,v] of [['idade','58'],['pas','152'],['colesterolTotal','230'],['hdl','40'],['tfg','72']]) await p.fill('#r-'+id, v);
        await p.waitForTimeout(300);
      }
      const f = await p.evaluate(AUDIT(tema === 'dark' ? 1.22 : 1));
      f.forEach(x => todas.push(assunto + '/' + aba + ' :: ' + x));
    }
    const unico = [...new Set(todas)];
    console.log('\n===== TEMA ' + tema.toUpperCase() + ' =====');
    console.log(unico.length ? unico.join('\n') : 'nenhuma falha de contraste');
    if (unico.length) total += unico.length;
    await ctx.close();
  }
  await b.close();
  console.log(total ? `\n${total} problema(s) de contraste` : '\nContraste ok nos dois temas.');
  process.exit(total ? 1 : 0);
})();
