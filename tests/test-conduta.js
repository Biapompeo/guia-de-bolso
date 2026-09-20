/* Casos de conduta: cada um confere que o esquema montado bate com o que
   a DBHA 2025 descreve em data.js (ESCALONAMENTO, COMBOS, PERFIS). */
const fs = require('fs');
eval(
  fs.readFileSync('/home/user/.teste/assets/data.js', 'utf8') + '\n' +
  fs.readFileSync('/home/user/.teste/assets/conduta.js', 'utf8')
);

const base = { pas: 150, pad: 95, idade: 58, tfg: 90, rac: NaN, potassio: NaN,
               diabetes: false, faixa: 'Intermediário', nDrogas: 0, cond: {} };
const p = (x) => condutaPaciente({ ...base, ...x, cond: { ...base.cond, ...(x.cond || {}) } });
const chaves = (r) => r.esquema.map((e) => e.chave).join('+');
const ids = (r) => r.esquema.map((e) => e.ids.join('/')).join(' + ');

let falhas = 0;
function ok(nome, cond, obtido) {
  if (cond) { console.log('  ok   ' + nome); return; }
  falhas++;
  console.log('  FALHA ' + nome + (obtido !== undefined ? '  →  ' + obtido : ''));
}

console.log('\nQuando tratar');
{
  const r = p({ pas: 150, pad: 95 });
  ok('PA 150/95 sem droga inicia agora', r.decisao.chave === 'iniciar', r.decisao.chave);
  ok('e a diretriz manda começar com dois', r.nAlvo === 2, r.nAlvo);
}
{
  const r = p({ pas: 134, pad: 84, faixa: 'Alto' });
  ok('134/84 com risco alto é condicional', r.decisao.chave === 'condicional', r.decisao.chave);
  ok('e nesse caso a diretriz aceita monoterapia', r.nAlvo === 1, r.nAlvo);
}
{
  const r = p({ pas: 134, pad: 84, faixa: 'Baixo' });
  ok('134/84 com risco baixo fica sem remédio', r.decisao.chave === 'mev', r.decisao.chave);
}
{
  const r = p({ pas: 124, pad: 78 });
  ok('124/78 sem droga é só medida não medicamentosa', r.decisao.chave === 'mev', r.decisao.chave);
}
{
  const r = p({ pas: 148, pad: 88, faixa: 'Baixo' });
  ok('estágio 1 de baixo risco pode ir de monoterapia', r.nAlvo === 1, r.nAlvo);
}
{
  const r = p({ idade: 82, pas: 150, pad: 92 });
  ok('aos 82 anos começa com uma droga só', r.nAlvo === 1, r.nAlvo);
}
{
  const r = p({ pas: 150, pad: 92, cond: { fragil: true } });
  ok('frágil também começa com uma só', r.nAlvo === 1, r.nAlvo);
}

console.log('\nJá em tratamento');
{
  const r = p({ pas: 124, pad: 76, nDrogas: 2 });
  ok('duas drogas e PA 124/76 é manter', r.decisao.chave === 'manter', r.decisao.chave);
  ok('e o esquema mostrado tem duas classes', r.esquema.length === 2, r.esquema.length);
}
{
  const r = p({ pas: 146, pad: 90, nDrogas: 2 });
  ok('duas drogas fora da meta pede a terceira', r.decisao.chave === 'escalar' && r.nAlvo === 3, r.nAlvo);
  ok('e a terceira é o trio IECA/BRA + BCC + tiazídico', chaves(r) === 'sraa+bccdhp+tiaz', chaves(r));
}
{
  const r = p({ pas: 152, pad: 96, nDrogas: 3 });
  ok('três drogas fora da meta pede espironolactona', chaves(r).includes('poupador'), chaves(r));
  ok('e avisa hipertensão resistente', r.alertas.some((a) => a.titulo === 'Hipertensão resistente'));
  ok('lembrando de vigiar K e creatinina', r.alertas.some((a) => a.titulo === 'IECA/BRA + espironolactona'));
}
{
  const r = p({ pas: 152, pad: 96, nDrogas: 3, potassio: 5.8 });
  ok('com K 5,8 a espironolactona sai do esquema', !chaves(r).includes('poupador'), chaves(r));
  ok('e o app diz por quê', r.alertas.some((a) => a.titulo.startsWith('Espironolactona contraindicada')));
}

console.log('\nEscolha da classe');
{
  const r = p({ diabetes: true, rac: 120 });
  ok('diabetes com albuminúria obriga IECA ou BRA', r.esquema[0].chave === 'sraa', ids(r));
  ok('com o motivo declarado', r.esquema[0].motivos.some((m) => m.includes('nefroproteção')), r.esquema[0].motivos.join(' | '));
}
{
  const r = p({ tfg: 22 });
  ok('TFG 22 troca tiazídico por diurético de alça', !chaves(r).includes('tiaz'), chaves(r));
  ok('e registra o porquê no "não usar"', r.evitar.some((x) => x.motivo.includes('TFG < 30')));
}
{
  const r = p({ cond: { gota: true }, nDrogas: 2, pas: 150, pad: 94 });
  ok('gota tira o tiazídico', !chaves(r).includes('tiaz'), chaves(r));
  ok('e escolhe a losartana', ids(r).includes('bra'), ids(r));
}
{
  const r = p({ cond: { gestante: true } });
  ok('gestante recebe metildopa, nifedipino e hidralazina',
     chaves(r) === 'central+bccdhp+vasodil', chaves(r));
  ok('e IECA/BRA ficam bloqueados', r.evitar.some((x) => x.rot.includes('IECA')));
}
{
  const r = p({ cond: { icfer: true } });
  ok('IC com FE reduzida traz BB e espironolactona',
     chaves(r) === 'sraa+bb+poupador', chaves(r));
  ok('e proíbe verapamil e diltiazem', r.evitar.some((x) => x.rot.includes('Verapamil')));
}
{
  const r = p({ cond: { coronaria: true } });
  ok('coronariopata leva BB + IECA', chaves(r) === 'bb+sraa' && ids(r).includes('ieca'), ids(r));
}
{
  const r = p({ cond: { avc: true } });
  ok('pós-AVC leva IECA + tiazídico', chaves(r) === 'sraa+tiaz' && ids(r).startsWith('ieca'), ids(r));
}
{
  const r = p({ cond: { asma: true, coronaria: true } });
  ok('asma com BB indicado gera alerta de β1-seletivo',
     r.alertas.some((a) => a.titulo.startsWith('Asma')));
}
{
  const r = p({ cond: { coronaria: true, osteoporose: true }, diabetes: true });
  ok('BB + tiazídico em diabético vira alerta metabólico',
     r.alertas.some((a) => a.titulo === 'Betabloqueador + diurético tiazídico'), chaves(r));
}
{
  const r = p({ pas: 148, pad: 88, faixa: 'Baixo', cond: { negra: true } });
  ok('em monoterapia, pessoa negra começa por BCC', r.esquema[0].chave === 'bccdhp', chaves(r));
}
{
  const r = p({ pas: 156, pad: 84, idade: 72, faixa: 'Baixo' });
  ok('idoso com sistólica isolada em monoterapia começa por BCC',
     r.esquema[0].chave === 'bccdhp', chaves(r));
}

console.log('\nEstágio e referência');
{
  const r = p({ pas: 186, pad: 104 });
  ok('186/104 é estágio 3', r.estagio.rot === 'Estágio 3', r.estagio.rot);
  ok('e dispara a checagem de lesão de órgão-alvo',
     r.alertas.some((a) => a.titulo.startsWith('PA ≥ 180')));
}
{
  const r = p({ pas: 132, pad: 96 });
  ok('132/96 é estágio 1 pela diastólica', r.estagio.rot === 'Estágio 1', r.estagio.rot);
}
{
  const r = p({ pas: 150, pad: 95 });
  ok('a dupla aponta a combinação de referência',
     r.referencia && r.referencia.titulo === 'IECA ou BRA + BCC di-hidropiridínico',
     r.referencia && r.referencia.titulo);
  ok('com exemplo de comprimido', !!(r.referencia && r.referencia.ex), r.referencia && r.referencia.ex);
}
{
  const r = p({ pas: 150, pad: 95 });
  ok('e IECA + BRA nunca é oferecido junto',
     r.alertas.some((a) => a.titulo === 'IECA + BRA'));
}

console.log(falhas ? `\n${falhas} falha(s)\n` : '\nTodos os casos passaram\n');
process.exit(falhas ? 1 : 0);
