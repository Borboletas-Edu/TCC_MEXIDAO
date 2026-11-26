// Figma: Trilha · início · 872:7957
import { trilha as t } from '../dados/conteudo.js';
import { cabecalho, navegacao, barraProgresso, conquistas, img, ilustracao, br, esc } from '../componentes/index.js';
import { status, corpo } from './_base.js';

// Figma 1141:8692: concluída (borda laranja) · ativa (verde, cachorro animado saindo pelo topo)
// · bloqueada (ilustração e conteúdo em cinza e desfocados, véu escuro e cadeado por cima)
const desenho = (a) => !a.ilustracao ? ''
  : a.ilustracao.startsWith('anim:') ? ilustracao(a.ilustracao.slice(5), 'atividade-card__mascote atividade-card__mascote--cachorro', 'Cachorro com ingredientes')
  : img(a.ilustracao, `atividade-card__mascote ${a.concluida ? 'anim-balanco' : ''}`);
const tipoIlustracao = (a) => a.concluida ? '' : a.bloqueada ? `atividade-card__ilustracao--bloqueada atividade-card__ilustracao--${a.nome.startsWith('Planeje') ? 'bancada' : 'corte'}` : 'atividade-card__ilustracao--cachorro';
const cartaoAtividade = (a) => `<button type="button" class="atividade-card ${a.concluida ? 'atividade-card--concluida' : ''} ${a.bloqueada ? 'atividade-card--bloqueada' : ''}"
  ${a.concluida ? 'data-toast="Atividade já concluída"' : a.bloqueada ? 'data-toast="Conclua a atividade anterior para desbloquear" aria-label="' + esc(a.nome) + ' · bloqueada"' : `data-ir="carregamento" data-params='{"destino":"fase","p":{"n":0}}'`}>
  <span class="atividade-card__ilustracao ${tipoIlustracao(a)}">${desenho(a)}</span>
  <b class="txt-rotulo-p">${esc(a.nome)}</b>${barraProgresso(a.pct)}<span class="txt-pequeno atividade-card__status">${esc(a.status)}</span>
  ${a.bloqueada ? `<span class="atividade-card__veu"></span>${img('trilha.cadeado', 'atividade-card__cadeado')}` : ''}
</button>`;

export default {
  id: 'trilha', fundo: 'b', nome: 'Trilha · início', fluxo: 6, figma: '872:7957', navegacao: true,
  render: () => `${status}${cabecalho(t.cabecalho, { voltar: false })}
    ${corpo(`<h1 class="txt-titulo">${br(t.titulo)}</h1>
      <p class="txt-apoio trilha__subtitulo">${esc(t.subtitulo)}</p>
      <div class="cartao nivel-trilha">
        <div class="nivel-trilha__topo"><span class="nivel-trilha__valor">${t.nivel.n}</span><div><b class="txt-rotulo">${esc(t.nivel.nome)}</b><p class="txt-pequeno">${esc(t.nivel.xp)}</p></div></div>
        ${barraProgresso(t.nivel.pct)}
      </div>
      <h2 class="txt-cabecalho trilha__secao">${esc(t.atividadesTitulo)}</h2>
      <div class="rolagem-x atividades">${t.atividades.map(cartaoAtividade).join('')}</div>
      <h2 class="txt-cabecalho trilha__secao trilha__secao--conquistas">${esc(t.conquistasTitulo)}</h2>
      ${conquistas(t.conquistas)}`, 'trilha')}
    ${navegacao('trilha')}`,
};
