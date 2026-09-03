# Guia de bolso — hipertensão e diabetes

Aplicativo web de consulta rápida. Um seletor no topo troca de assunto
clínico; a barra inferior mostra as abas daquele assunto.

- **Hipertensão** — completo, pela **Diretriz Brasileira de Hipertensão
  Arterial 2025** (SBC, SBH e SBN).
- **Diabete melito tipo 2** — pelo **PCDT do Ministério da Saúde**
  (Portaria SCTIE/MS nº 13, de 21 de fevereiro de 2026).

Feito para o celular: instala na tela de início, abre em tela cheia e
**funciona sem internet** depois da primeira visita.

## O que tem dentro

### Hipertensão

| Aba | Conteúdo |
| --- | --- |
| **Início** | Classificação da PA por estágio, quando começar o tratamento, meta pressórica e escalonamento em quatro degraus |
| **Risco** | Calculadora PREVENT: risco de doença aterosclerótica em 10 anos com a faixa da diretriz, mais DCV total em 10 e 30 anos, e o que o resultado significa para a decisão de tratar. HbA1c e albuminúria são opcionais e refinam a estimativa |
| **Classes** | 12 classes com representantes e doses, mecanismo, indicações, contraindicações, efeitos adversos e a "pega na prática" — com busca e filtro por grupo |
| **Combinar** | Combinações recomendadas, as que exigem cautela e as proscritas, com o exemplo prático de cada uma |
| **Paciente** | Escolha guiada pela comorbidade (diabetes, DRC, IC, gestação, gota, asma…) |
| **Endovenoso** | Emergência hipertensiva, a mudança de nomenclatura de 2025 e as drogas IV |

Também: tema claro e escuro em tons confortáveis (nem branco puro, nem
preto), busca que ignora acentos (`gestacao` acha "gestação"), estado
lembrado entre sessões e versão para impressão.

### Diabete melito tipo 2

| Aba | Conteúdo |
| --- | --- |
| **Início** | Critérios diagnósticos e metas glicêmicas por população, com a definição de idoso saudável, comprometido e muito comprometido |
| **Fluxo** | O fluxograma do PCDT: onde começa, o atalho para insulina, o escalonamento em quatro degraus e o ritmo de reavaliação |
| **Classes** | Metformina, sulfonilureias, dapagliflozina e as insulinas basal e bolus — mesma estrutura e mesma busca das classes de hipertensão |
| **Rim** | Estratégia conforme a faixa de TFG, do Quadro 11 |
| **Hipo** | Os três níveis de hipoglicemia e o tratamento de cada um |

O recorte é o do SUS. Acarbose, inibidores de DPP-4, agonistas de GLP-1,
meglitinidas e tiazolidinedionas não estão incorporados e por isso não
aparecem — o PCDT é explícito quanto a isso.

> **Divergência dentro do próprio PCDT.** Para a elegibilidade à
> dapagliflozina, os Critérios de Inclusão (seção 6) e a seção 8.3.3 dizem
> **homens a partir de 55 anos**; a nota (g) do fluxograma da Figura 2 diz
> **65**. O app segue o texto normativo, que traz 55 duas vezes, e registra
> a divergência na própria classe.

## Acrescentar um assunto

Assuntos ficam em `ASSUNTOS`, no topo de `assets/app.js`. Cada um traz o
próprio cabeçalho, o próprio aviso de rodapé e a própria lista de abas:

```js
dm: {
  rot: "Diabetes",             // rótulo no seletor
  titulo: "Diabetes tipo 2",   // título da página
  fonte: "SBD 2025",           // linha acima do título
  sub: "...",                  // subtítulo
  rodape: "...",               // aviso ao pé da página
  regua: false,                // a faixa de estágios é só da hipertensão
  abas: [{ id: "dm-inicio", rot: "Em breve", icon: ICON.inicio }],
}
```

Os `id` das abas são globais, então convém prefixá-los por assunto. Cada um
aponta para uma função em `VIEWS`. A barra inferior se ajusta sozinha ao
número de abas, e um `id` de aba que não pertença ao assunto cai na primeira
aba dele em vez de quebrar.

O assunto escolhido é lembrado entre sessões e aceita atalho por URL:
`?assunto=has&aba=risco`.

O seletor fica numa barra fixa no topo (`.topbar`), pelo mesmo motivo que a
barra de seções é fixa embaixo: numa aba longa, um seletor que rola sai de
vista e deixa de existir para quem está lendo. Precisa ser `position: fixed`
e viver fora do `<header>` — `sticky` não escapa do elemento pai, então
dentro do cabeçalho ele sairia da tela junto com ele.

## Cores

Nenhum dos dois temas usa extremo: o claro é papel quente (`#EDE8E0`) com
cartões creme (`#F8F5EF`), não branco puro; o escuro é carvão (`#1A1D20`)
com cartões `#23272C`, não preto.

Os neutros formam uma escada de contraste verificada. **O tema escuro exige
22% a mais que o claro**: a mesma razão de contraste é percebida como mais
fraca sobre fundo escuro, então um texto em 4,5:1 passa na norma e ainda
assim cansa a leitura. No escuro a escada sobre o cartão fica em 12,9:1
(texto principal), 10,2:1, 7,8:1 e 6,1:1.

As cores de identidade (uma por classe, por estágio e por veredito) valem
como trilha e como ponto colorido, mas várias não alcançam contraste
suficiente **como texto** — o dourado sobre papel claro é o caso extremo,
em 1,6:1. Em vez de repintar a paleta à mão, `acento()` em `assets/app.js`
deriva de cada cor duas variantes de texto, uma por tema, escurecendo ou
clareando só o necessário — 4,5:1 no claro, 7:1 no escuro — sobre o fundo em
que aquele texto realmente cai. Isso vai inline como `--c-l` e `--c-d`; o `--c` cru
segue intacto nas trilhas.

### Verificação

```bash
python3 -m http.server 8137 &
npm i playwright
node tests/contraste.js http://localhost:8137
```

Percorre as seis abas nos dois temas e mede o contraste real de cada texto
contra o fundo efetivamente pintado, compondo transparências e resolvendo
`color-mix`. Os alvos do tema escuro são multiplicados por 1,22. Sai com
código 1 se algo ficar abaixo. Rode depois de mexer em qualquer cor.

## Calculadora de risco (PREVENT)

A DBHA 2025 substituiu o escore de Framingham pelo **PREVENT** da American
Heart Association (Khan SS et al., *Circulation* 2023). O app implementa as
quatro variantes aplicáveis fora dos Estados Unidos, para os desfechos de
doença aterosclerótica e de doença cardiovascular total, em 10 e 30 anos.

A variante é escolhida pelo que o usuário informar:

| HbA1c | Albumina/creatinina | Modelo |
| --- | --- | --- |
| — | — | base |
| sim | — | hba1c |
| — | sim | uacr |
| sim | sim | full |

- `assets/prevent-betas.js` — coeficientes dos 32 conjuntos (4 modelos × 2
  horizontes × 2 sexos × 2 desfechos). **Arquivo gerado, não editar à mão** —
  use `tools/extract-prevent-betas.py`, que lê o `sysdata.rda` do pacote R
  [`preventr`](https://github.com/martingmayer/preventr) (GPL-3).
- `assets/prevent.js` — transformações das variáveis, função logística,
  faixas de risco e a CKD-EPI 2021 para estimar TFG pela creatinina.

O índice de privação social (SDI) nunca é informado: depende de CEP dos
Estados Unidos. As equações foram ajustadas com indicador de ausência, então
ele entra como desconhecido — e o coeficiente desse indicador fica entre as
categorias de privação média e alta, ou seja, perto da média da população.
Isso só afeta o modelo `full`, e torna aquele resultado não comparável ao de
uma calculadora americana alimentada com CEP.

### Validação

```bash
node tests/test-prevent.js
```

Confere 24 valores de risco contra os casos de referência do pacote
`preventr` — os quatro modelos, mulher e homem, três desfechos cada — mais a
escolha automática do modelo, e seis valores de TFG contra uma implementação
independente da equação publicada, incluindo duas âncoras definicionais.
Rode isso sempre que mexer no cálculo.

Os casos do modelo `full` usam `sdiDecil: 3` para reproduzir o CEP 14738 dos
testes originais. Esse parâmetro existe só para a validação; o app nunca o
informa.

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
tools/                   empacotador do arquivo único e extrator dos coeficientes
tests/                   validação da calculadora de risco e do contraste
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
