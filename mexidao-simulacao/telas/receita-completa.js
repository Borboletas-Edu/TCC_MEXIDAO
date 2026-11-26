// Figma: Receita completa · cartões · 921:8523
import { receitaCompleta as t } from '../dados/conteudo.js';
import { botao, linkTexto, etapaMetodo, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';

export default {
  id: 'receita-completa', nome: 'Receita completa', fluxo: 4, figma: '921:8523',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<h2 class="txt-cabecalho">${esc(t.nome)}</h2>
      <div class="lista-etapas">${t.etapas.map(([n, i], k) => etapaMetodo(k + 1, n, i)).join('')}</div>`)}
    ${rodape(botao(t.botao, { attrs: 'data-ir="escolha-adaptacao"' }) + linkTexto(t.voltar, 'data-voltar'))}`,
};
