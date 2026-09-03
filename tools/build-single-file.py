#!/usr/bin/env python3
"""Gera uma versão do guia em um único arquivo HTML.

    python3 tools/build-single-file.py            -> dist/anti-hipertensivos.html
    python3 tools/build-single-file.py --artifact -> dist/artifact.html

O arquivo normal é autossuficiente: CSS, JavaScript e ícones embutidos, sem
nenhuma requisição externa. Serve para mandar por mensagem, guardar no celular
ou abrir por duplo clique — funciona offline por não depender de servidor.

A variante --artifact sai sem <html>, <head> e <body> porque o hospedeiro de
Artifacts do Claude injeta essa casca. Ela também não anuncia instalação como
aplicativo, que depende do manifesto e do service worker.
"""

import base64
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DIST = RAIZ / "dist"
ARTIFACT = "--artifact" in sys.argv[1:]


def ler(rel):
    return (RAIZ / rel).read_text(encoding="utf-8")


def data_uri(rel, mime):
    b64 = base64.b64encode((RAIZ / rel).read_bytes()).decode("ascii")
    return f"data:{mime};base64,{b64}"


css = ler("assets/styles.css")
dados = "\n".join(
    ler(f) for f in ("assets/prevent-betas.js", "assets/prevent.js", "assets/data.js")
)
app = ler("assets/app.js")
html = ler("index.html")

# corpo da página, sem as tags <script src>, que serão embutidas
corpo = re.search(r"<body>(.*)</body>", html, re.S).group(1)
corpo = re.sub(r'\s*<script src="[^"]+"[^>]*></script>', "", corpo).strip()

# o export para node não faz sentido no arquivo empacotado
dados = dados.replace(
    'if (typeof module !== "undefined") {\n'
    '  module.exports = { calcularPrevent, tfgCkdEpi2021, preditoresPrevent, FAIXAS_RISCO };\n'
    '}\n', "")

# o service worker só existe no site publicado
app = re.sub(
    r'/\* ---------- service worker ---------- \*/.*?(?=/\* ---------- tema do sistema)',
    "", app, flags=re.S)

if ARTIFACT:
    # sem manifesto não há instalação de verdade; o convite vira "atalho"
    corpo = corpo.replace(
        ">Instalar no celular<", ">Deixar na tela de início<")
    app = (app
           .replace("Deixe no celular", "Deixe na tela de início")
           .replace(
               "Instalado, o guia abre em tela cheia e funciona sem internet.",
               "Um toque no ícone e o guia abre direto, sem procurar o link.")
           .replace("“Adicionar à Tela de Início”", "“Adicionar à Tela de Início”")
           .replace("“Instalar aplicativo” ou “Adicionar à tela inicial”",
                    "“Adicionar à tela inicial”")
           .replace("ícone de instalar na barra de endereço.",
                    "salve nos favoritos."))
    app = re.sub(r"/\* ---------- instalação ---------- \*/\n"
                 r"let promptInstalacao = null;\n\n"
                 r"addEventListener\(\"beforeinstallprompt\".*?\}\);\n\n"
                 r"addEventListener\(\"appinstalled\".*?\}\);\n\n"
                 r"async function instalar\(\) \{\n"
                 r"  if \(promptInstalacao\) \{.*?\n  \}\n",
                 "/* ---------- atalho na tela de início ---------- */\n"
                 "function instalar() {\n", app, flags=re.S)

partes = []
if not ARTIFACT:
    partes.append(
        '<!doctype html>\n<html lang="pt-BR" data-theme="light">\n<head>\n'
        '<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<meta name="theme-color" content="#F4F2EE">\n'
        '<meta name="color-scheme" content="light dark">\n'
        '<meta name="apple-mobile-web-app-capable" content="yes">\n'
        '<meta name="apple-mobile-web-app-title" content="Anti-HAS">\n'
        f'<link rel="icon" href="{data_uri("icons/favicon.svg", "image/svg+xml")}">\n'
        f'<link rel="apple-touch-icon" href="{data_uri("icons/apple-touch-icon.png", "image/png")}">\n')

partes.append("<title>Anti-hipertensivos</title>")
partes.append(f"<style>\n{css}</style>")

if not ARTIFACT:
    partes.append("</head>\n<body>")

# o mesmo script de tema que o index.html roda antes da primeira pintura
tema_cedo = re.search(r"<script>\s*(/\* aplica o tema.*?)</script>", html, re.S).group(1)
partes.append(f"<script>\n  {tema_cedo.strip()}\n</script>")

partes.append(corpo)
partes.append(f"<script>\n{dados}\n{app}</script>")

if not ARTIFACT:
    partes.append("</body>\n</html>")

DIST.mkdir(exist_ok=True)
destino = DIST / ("artifact.html" if ARTIFACT else "anti-hipertensivos.html")
destino.write_text("\n".join(partes) + "\n", encoding="utf-8")
print(f"{destino.relative_to(RAIZ)}  {destino.stat().st_size / 1024:.0f} kB")
