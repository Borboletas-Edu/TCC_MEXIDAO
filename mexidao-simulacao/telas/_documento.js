// Modelo de documento numerado (Termos de uso 872:6979 e Política de privacidade 872:7025)
import { configuracoes } from '../dados/conteudo.js';
import { avisoInfo, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';

export const documento = (d) => `${topo(d.cabecalho)}
  ${corpo(`${avisoInfo(configuracoes.aviso)}
    <div class="lista documento">${d.itens.map(([ti, tx], i) => `<section class="documento__secao"><b class="documento__titulo"><span class="documento__numero">${i + 1}</span>${esc(ti)}</b><p class="txt-pequeno">${esc(tx)}</p></section>`).join('')}</div>`, 'documento-tela')}`;
