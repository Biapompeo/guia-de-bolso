# Anti-hipertensivos — guia de bolso

Aplicativo web de consulta rápida sobre anti-hipertensivos, organizado pela
**Diretriz Brasileira de Hipertensão Arterial 2025** (SBC, SBH e SBN).

Feito para o celular: instala na tela de início, abre em tela cheia e
**funciona sem internet** depois da primeira visita.

## O que tem dentro

| Aba | Conteúdo |
| --- | --- |
| **Início** | Classificação da PA por estágio, quando começar o tratamento, meta pressórica e escalonamento em quatro degraus |
| **Classes** | 12 classes com representantes e doses, mecanismo, indicações, contraindicações, efeitos adversos e a "pega na prática" — com busca e filtro por grupo |
| **Combinar** | Combinações recomendadas, as que exigem cautela e as proscritas, com o exemplo prático de cada uma |
| **Paciente** | Escolha guiada pela comorbidade (diabetes, DRC, IC, gestação, gota, asma…) |
| **Endovenoso** | Emergência hipertensiva, a mudança de nomenclatura de 2025 e as drogas IV |

Também: tema claro e escuro, busca que ignora acentos (`gestacao` acha
"gestação"), estado lembrado entre sessões e versão para impressão.

## Colocar no ar

O site é estático — nenhum build, nenhuma dependência.

### GitHub Pages

O workflow `.github/workflows/deploy.yml` liga o Pages sozinho
(`enablement: true`) e publica a cada push — não é preciso mexer em
Settings. O endereço aparece ao final da execução, em
`https://<usuário>.github.io/<repositório>/`.

> **O repositório precisa ser público.** GitHub Pages em repositório
> privado só existe nos planos pagos (Pro, Team, Enterprise). Em conta
> gratuita com repositório privado a publicação falha com "Not Found",
> por mais que o workflow esteja correto.

### Qualquer outra hospedagem

Serve para Netlify, Vercel, Cloudflare Pages ou um servidor comum: basta
apontar para a raiz do repositório. Não existe etapa de build.

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
assets/app.js            renderização, abas, busca, tema e instalação
assets/styles.css        sistema visual: tokens, tema claro/escuro, componentes
manifest.webmanifest     nome, ícones e comportamento do app instalado
sw.js                    cache offline
icons/                   ícones do app
```

### Como editar o conteúdo

Todo o texto clínico está em **`assets/data.js`**, em listas simples. Para
acrescentar uma classe, copie um objeto de `CLASSES` e ajuste os campos —
`grupo` cria o filtro sozinho e `cor` define o acento do cartão.

Depois de mudar qualquer arquivo, suba a versão em `sw.js`
(`const VERSAO = "v1"` → `"v2"`) para que quem já instalou receba a
atualização na próxima abertura.

## Aviso

Material de estudo baseado na Diretriz Brasileira de Hipertensão Arterial 2025
(SBC, SBH e SBN) e no PCDT de Hipertensão Arterial Sistêmica do Ministério da
Saúde. As doses são referências para adulto com função renal e hepática
preservadas. **Não substitui a diretriz, a bula nem o julgamento clínico** —
sempre confira antes de prescrever.
