// Figma: Avaliações da receita · 872:6015
import { avaliacoes as t } from '../dados/conteudo.js';
import { botao, estrelas, contribuicao, cabecalho, esc } from '../componentes/index.js';
import { status } from './_base.js';

export default {
  id: 'avaliacoes', nome: 'Avaliações da receita', fluxo: 4, figma: '872:6015', classe: 'tela--avaliacoes',
  render: () => `<div class="avaliacoes__faixa">${status}${cabecalho(t.titulo)}
      <div class="avaliacoes__nota">${estrelas(4.6)}<b class="txt-cabecalho">${esc(t.nota)}</b></div></div>
    <div class="tela__corpo avaliacoes__lista">
      <h2 class="txt-acao">${esc(t.total)}</h2>
      <div class="avaliacoes__contribuicoes">${t.lista.map((a) => contribuicao(a)).join('')}</div>
      <div class="avaliacoes__acoes">${botao(t.verMais, { tipo: 'secundario', attrs: 'data-toast="Todas as avaliações foram carregadas"' })}${botao(t.adicionar, { icone: 'mais', attrs: 'data-ir="adicionar-avaliacao"' })}</div>
    </div>`,
};
