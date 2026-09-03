#!/usr/bin/env python3
"""Gera assets/prevent-betas.js a partir do pacote R `preventr`.

Só precisa rodar se quiser reconferir os coeficientes ou acrescentar um
desfecho — o arquivo gerado já vai versionado no repositório.

    git clone --depth 1 https://github.com/martingmayer/preventr /tmp/preventr
    pip install pyreadr
    python3 tools/extract-prevent-betas.py /tmp/preventr

Fonte: PREVENT, American Heart Association (Khan SS et al., Circulation
2023). O pacote preventr é distribuído sob GPL-3.
"""

import json
import sys
from pathlib import Path

import pyreadr

# rótulo do pacote -> nome do termo no JavaScript
TERMOS = {
    "Age, per 10 years": "age", "Age, 10 years": "age", "Age squared": "ageSq",
    "non-HDL-C per 1 mmol/L": "nonHdl", "HDL-C per 0.3 mmol/L": "hdl",
    "SBP <110 per 20 mmHg": "sbpLt110", "SBP ≥110 per 20 mmHg": "sbpGte110",
    "Diabetes": "dm", "Current smoking": "fumo",
    "BMI <30, per 5 kg/m2": "bmiLt30", "BMI 30+, per 5 kg/m2": "bmiGte30",
    "eGFR <60, per -15 ml": "egfrLt60", "eGFR 60+, per -15 ml": "egfrGte60",
    "Anti-hypertensive use": "antiHas", "Statin use": "estatina",
    "Treated SBP ≥110 mm Hg per 20 mm Hg": "antiHasSbp",
    "Treated non-HDL-C": "estatinaNonHdl",
    "Age per 10yr * non-HDL-C per 1 mmol/L": "ageNonHdl",
    "Age per 10yr * HDL-C per 0.3 mmol/L": "ageHdl",
    "Age per 10yr * SBP ≥110 mm Hg per 20 mmHg": "ageSbpGte110",
    "Age per 10yr * diabetes": "ageDm",
    "Age per 10yr * current smoking": "ageFumo",
    "Age per 10yr * BMI 30+ per 5 kg/m2": "ageBmiGte30",
    "Age per 10yr * eGFR <60, per -15 ml": "ageEgfrLt60",
    "ln-ACR, mg/g, per 1 ln unit": "lnRac", "Missing ACR/PCR/Dipstick": "semRac",
    "HbA1c in DM, per 1%": "hba1cDm", "HbA1c no DM, per 1%": "hba1cSemDm",
    "Missing HbA1c": "semHba1c",
    "SDI decile categories 4-6 vs. 1-3": "sdi46",
    "SDI decile categories 7-10 vs. 1-3": "sdi710", "Missing SDI": "semSdi",
    "Constant": "const",
}

MODELOS = ["base", "hba1c", "uacr", "full"]
DESFECHOS = {"female_total_cvd": "f_cvd", "male_total_cvd": "m_cvd",
             "female_ascvd": "f_ascvd", "male_ascvd": "m_ascvd"}


def main(raiz_pacote):
    dados = pyreadr.read_r(str(Path(raiz_pacote) / "R" / "sysdata.rda"))
    saida = {}
    for modelo in MODELOS:
        for anos in ("10yr", "30yr"):
            df = dados[f"{modelo}_{anos}"]
            for coluna, sufixo in DESFECHOS.items():
                termos = {}
                for rotulo, valor in zip(df["beta_coefficients"], df[coluna]):
                    chave = TERMOS[rotulo.strip()]
                    if chave in termos:
                        raise SystemExit(f"termo repetido: {rotulo}")
                    termos[chave] = round(float(valor), 6)
                saida[f"{modelo}_{anos[:-2]}_{sufixo}"] = termos

    js = (
        "/* Coeficientes das equações PREVENT (AHA, Khan et al., Circulation 2023).\n"
        "   Gerado por tools/extract-prevent-betas.py a partir do pacote R\n"
        "   preventr (github.com/martingmayer/preventr, GPL-3), R/sysdata.rda.\n"
        "   Modelos base, HbA1c, ACR e completo; desfechos DCV total e ASCVD;\n"
        "   horizontes de 10 e 30 anos. NÃO editar à mão. */\n\n"
        "const PREVENT_BETAS = " + json.dumps(saida, indent=1, ensure_ascii=False) + ";\n"
    )
    destino = Path(__file__).resolve().parent.parent / "assets" / "prevent-betas.js"
    destino.write_text(js, encoding="utf-8")
    print(f"{destino.name}: {len(saida)} conjuntos, {destino.stat().st_size / 1024:.0f} kB")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    main(sys.argv[1])
