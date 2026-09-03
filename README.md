# Anti-hipertensivos — guia de bolso

Aplicativo web de consulta rápida sobre anti-hipertensivos, organizado pela
**Diretriz Brasileira de Hipertensão Arterial 2025** (SBC, SBH e SBN).

Feito para o celular: instala na tela de início, abre em tela cheia e
**funciona sem internet** depois da primeira visita.

## O que tem dentro

| Aba | Conteúdo |
| --- | --- |
| **Início** | Classificação da PA por estágio, quando começar o tratamento, meta pressórica e escalonamento em quatro degraus |
| **Risco** | Calculadora PREVENT: risco de doença aterosclerótica em 10 anos com a faixa da diretriz, mais DCV total em 10 e 30 anos, e o que o resultado significa para a decisão de tratar |
| **Classes** | 12 classes com representantes e doses, mecanismo, indicações, contraindicações, efeitos adversos e a "pega na prática" — com busca e filtro por grupo |
| **Combinar** | Combinações recomendadas, as que exigem cautela e as proscritas, com o exemplo prático de cada uma |
| **Paciente** | Escolha guiada pela comorbidade (diabetes, DRC, IC, gestação, gota, asma…) |
| **Endovenoso** | Emergência hipertensiva, a mudança de nomenclatura de 2025 e as drogas IV |

Também: tema claro e escuro, busca que ignora acentos (`gestacao` acha
"gestação"), estado lembrado entre sessões e versão para impressão.

## Calculadora de risco (PREVENT)

A DBHA 2025 substituiu o escore de Framingham pelo **PREVENT** da American
Heart Association (Khan SS et al., *Circulation* 2023). O app implementa o
**modelo base**, para os desfechos de doença aterosclerótica e de doença
cardiovascular total, em 10 e 30 anos.

- `assets/prevent-betas.js` — coeficientes, extraídos do pacote R
  [`preventr`](https://github.com/martingmayer/preventr) (GPL-3) direto do
  `sysdata.rda`. **Arquivo gerado, não editar à mão.**
- `assets/prevent.js` — transformações das variáveis, função logística,
  faixas de risco e a CKD-EPI 2021 para estimar TFG pela creatinina.

Ficam de fora as variantes com HbA1c e com relação albumina/creatinina. A
variante com índice de privação social depende de CEP dos Estados Unidos e
não se aplica no Brasil.

### Validação

```bash
node tests/test-prevent.js
```

Confere seis valores de risco contra os casos de referência do pacote
`preventr` (mulher e homem, três desfechos cada) e seis valores de TFG
contra uma implementação independente da equação publicada, incluindo duas
âncoras definicionais. Rode isso sempre que mexer no cálculo.

> As faixas — baixo < 5%, limítrofe 5 a 7,5%, intermediário 7,5 a 20%, alto
> ≥ 20% — valem para o risco de doença aterosclerótica em 10 anos, em
> prevenção primária, dos 30 aos 79 anos. Fora dessa faixa etária o app
> mostra um aviso e o resultado deixa de ser confiável.

## Colocar no ar

O site é estático — nenhum build, nenhuma dependência. Há três caminhos,
do mais simples ao mais completo.

### 1. Arquivo único (não depende de nada)

`dist/anti-hipertensivos.html` tem CSS, JavaScript e ícones embutidos.
Baixe, mande por mensagem ou guarde no celular: abre por duplo clique e
funciona sem internet, sem servidor e sem instalar nada.

Para regerar depois de editar qualquer arquivo:

```bash
python3 tools/build-single-file.py
```

### 2. GitHub Pages

Publicado em https://biapompeo.github.io/guia-de-bolso/ pelo workflow
`.github/workflows/deploy.yml`, a cada push na `main`.

Em um repositório novo há **um único passo manual, feito uma vez**: em
**Settings → Pages → Build and deployment → Source**, escolher
**GitHub Actions**.

Esse passo não dá para automatizar. O workflow passa `enablement: true`
para o `actions/configure-pages`, mas criar o site do Pages usa o endpoint
`POST /repos/{owner}/{repo}/pages`, que exige permissão de administrador
do repositório — e o `GITHUB_TOKEN` do Actions não a tem, mesmo com
`pages: write` concedido. O sintoma é:

```
Create Pages site failed. Error: Resource not accessible by integration
```

Depois que o site existe, o `enablement: true` só encontra a configuração
pronta e segue: todas as publicações seguintes são automáticas.

> Vale também que GitHub Pages em repositório privado só existe nos planos
> pagos. Mas não foi essa a causa do erro acima — ele acontece igual em
> repositório público.

### 3. Qualquer outra hospedagem

Netlify, Vercel, Cloudflare Pages ou um servidor comum: aponte para a raiz
do repositório. Não existe etapa de build. No Netlify Drop
(`app.netlify.com/drop`) dá para arrastar a pasta e receber uma URL na hora,
sem conta e sem configurar nada — e nesse caminho o app continua instalável
e offline, porque o manifesto e o service worker vão junto.

## Instalar no celular

Abra a URL publicada e:

- **iPhone / iPad (Safari):** Compartilhar → *Adicionar à Tela de Início*.
- **Android (Chrome):** menu → *Instalar aplicativo*.
- **Computador:** ícone de instalar na barra de endereço.

O próprio app tem o botão **Instalar no celular** no rodapé, que dispara o
convite quando o navegador permite.

> O service worker precisa de `https://` (ou `localhost`). Abrir o arquivo
> direto por `file://` mostra o conteúdo, mas não guarda o cache offline.

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Estrutura

```
index.html               casca da página, metadados e manifesto
assets/data.js           todo o conteúdo clínico (classes, combos, perfis…)
assets/prevent-betas.js  coeficientes do PREVENT (gerado)
assets/prevent.js        cálculo do risco e CKD-EPI 2021
assets/app.js            renderização, abas, busca, tema e instalação
assets/styles.css        sistema visual: tokens, tema claro/escuro, componentes
manifest.webmanifest     nome, ícones e comportamento do app instalado
sw.js                    cache offline
icons/                   ícones do app
tools/                   empacotador do arquivo único
tests/                   validação da calculadora de risco
dist/                    saída gerada: anti-hipertensivos.html
```

### Como editar o conteúdo

Todo o texto clínico está em **`assets/data.js`**, em listas simples. Para
acrescentar uma classe, copie um objeto de `CLASSES` e ajuste os campos —
`grupo` cria o filtro sozinho e `cor` define o acento do cartão.

Depois de mudar qualquer arquivo:

1. Suba a versão em `sw.js` (`const VERSAO = "v1"` → `"v2"`), para que quem
   já instalou receba a atualização na próxima abertura.
2. Rode `python3 tools/build-single-file.py` para atualizar o arquivo único.

## Aviso

Material de estudo baseado na Diretriz Brasileira de Hipertensão Arterial 2025
(SBC, SBH e SBN) e no PCDT de Hipertensão Arterial Sistêmica do Ministério da
Saúde. As doses são referências para adulto com função renal e hepática
preservadas. **Não substitui a diretriz, a bula nem o julgamento clínico** —
sempre confira antes de prescrever.
