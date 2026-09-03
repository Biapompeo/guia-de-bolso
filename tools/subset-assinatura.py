#!/usr/bin/env python3
"""Regera a fonte da assinatura, reduzida às letras do nome.

    pip install fonttools brotli
    python3 tools/subset-assinatura.py "Beatriz Pompeo"

Baixa a Cormorant Garamond Itálico 600 do Google Fonts, descarta todos os
glifos que o nome não usa e grava o resultado em
assets/fontes/. Depois é preciso reembutir o arquivo no @font-face de
assets/styles.css como data URI — o script imprime o base64 pronto.

A fonte vai embutida, e não por link, porque o app não tem dependência
externa nenhuma: funciona offline e cabe em um arquivo só. Inteira ela pesa
24 kB; com as letras de um nome, 2,2 kB.

Cormorant: Copyright 2015 the Cormorant Project Authors, SIL Open Font
License 1.1 — texto em assets/fontes/Cormorant-OFL.txt.
"""

import base64
import re
import subprocess
import sys
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

CSS = ("https://fonts.googleapis.com/css2"
       "?family=Cormorant+Garamond:ital,wght@1,600&display=swap")
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")

RAIZ = Path(__file__).resolve().parent.parent
DESTINO = RAIZ / "assets" / "fontes" / "cormorant-garamond-italic-600.subset.woff2"


def baixar(url, saida=None):
    r = subprocess.run(["curl", "-sS", "--max-time", "30", "-A", UA, url],
                       capture_output=True, check=True)
    if saida:
        Path(saida).write_bytes(r.stdout)
    return r.stdout.decode("utf-8", "replace")


def main(nome):
    css = baixar(CSS)
    # o bloco latino é o que cobre o alfabeto sem acento
    urls = re.findall(r"https://[^)]+\.woff2", css)
    if not urls:
        raise SystemExit("não achei nenhum woff2 na resposta do Google Fonts")
    bruto = RAIZ / "assets" / "fontes" / "_completa.woff2"
    baixar(urls[-1], bruto)

    f = TTFont(bruto)
    s = subset.Subsetter(options=subset.Options(layout_features=["*"],
                                                notdef_outline=True,
                                                desubroutinize=True))
    s.populate(text=nome)
    s.subset(f)
    f.flavor = "woff2"
    DESTINO.parent.mkdir(parents=True, exist_ok=True)
    f.save(DESTINO)
    bruto.unlink()

    dados = DESTINO.read_bytes()
    print(f"{DESTINO.relative_to(RAIZ)}: {len(dados)} bytes "
          f"({len(set(nome))} caracteres de \"{nome}\")")
    print("\nsubstitua o src do @font-face em assets/styles.css por:\n")
    print(f"  src: url(data:font/woff2;base64,{base64.b64encode(dados).decode()}) format(\"woff2\");")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "Beatriz Pompeo")
