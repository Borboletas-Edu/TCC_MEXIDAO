// Figma: Preparo · etapas 1–5 → 872:5689 · 872:5725 (timer rodando 872:5709) · 872:5749 · 872:5765 · 872:5786
// Balão da IA na 1ª etapa: 872:6177
// As etapas trocam NO LUGAR: cabeçalho e trilha de progresso ficam fixos; só o conteúdo desliza.
import { preparo as t } from '../dados/conteudo.js';
import { botao, linkTexto, ajudaIA, progressoEtapas, atualizarProgresso, timer, ligarTimers, tipoBotao, br, esc } from '../componentes/index.js';
import { status, rodape } from './_base.js';
import { cabecalho } from '../componentes/index.js';
const figmas = ['872:5689', '872:5725', '872:5749', '872:5765', '872:5786'];
const total = t.etapas.length;

const conteudoEtapa = (n) => { const e = t.etapas[n]; return `
  <p class="txt-apoio preparo__posicao">Etapa ${n + 1} de ${total} · ${esc(t.porcoes)}</p>
  <h1 class="txt-titulo preparo__titulo">${br(e.titulo)}</h1>
  <p class="txt-corpo preparo__instrucoes">${br(e.texto)}</p>
  ${e.timerMin ? `<div class="preparo__timer">${timer(e.timerMin, t.iniciarTimer)}</div>` : ''}`; };

export default {
  id: 'preparo', fundo: 'b', nome: 'Preparo', fluxo: 5, figma: figmas[0],
  render: (ctx) => { const n = ctx.params.etapa || 0; return `${status}
    ${cabecalho(t.cabecalho, { acoes: ajudaIA('data-ir="chat-ia" data-modo="baixo"') })}
    <div class="tela__corpo preparo">
      <b class="txt-acao preparo__receita">${esc(t.receita)}</b>
      ${progressoEtapas(total, n)}
      <div class="preparo__etapa" data-etapa>${conteudoEtapa(n)}</div>
    </div>
    ${rodape(`<p class="txt-apoio preparo__proxima" data-proxima>${esc(t.etapas[n].proxima)}</p>
      ${botao(t.avancar, { attrs: 'data-avancar' })}${linkTexto(t.verCompleta, 'data-ir="receita-completa"')}`, { classe: 'preparo__rodape' })}`; },
  ligar: (el, ctx) => {
    let n = ctx.params.etapa || 0;
    const caixa = el.querySelector('[data-etapa]'), bt = el.querySelector('[data-avancar]');
    const estado = (rodando) => ctx.estado(`Preparo · ${n + 1} de ${total}${rodando ? ' · timer rodando' : ''}`, rodando && n === 1 ? '872:5709' : figmas[n]);
    const mostrar = (novo, direcao) => {
      n = novo;
      caixa.innerHTML = conteudoEtapa(n);
      caixa.classList.remove('conteudo-avanca', 'conteudo-volta'); void caixa.offsetWidth;
      caixa.classList.add(direcao === 'volta' ? 'conteudo-volta' : 'conteudo-avanca');
      el.querySelector('[data-proxima]').textContent = t.etapas[n].proxima;
      bt.querySelector('.botao__rotulo').textContent = n === total - 1 ? t.finalizar : t.avancar;
      tipoBotao(bt, n === total - 1 ? 'verde' : 'principal');
      atualizarProgresso(el.querySelector('.progresso-etapas'), n);
      el.querySelector('.preparo').scrollTop = 0;
      ligarTimers(caixa, ctx, estado);
      estado(false);
    };
    bt.addEventListener('click', () => (n === total - 1 ? ctx.substituir('receita-concluida', {}, 'fade') : mostrar(n + 1, 'avanca')));
    // Voltar do cabeçalho: volta uma etapa (na 1ª, sai do preparo)
    el.querySelector('.cabecalho__voltar').addEventListener('click', (e) => { if (n > 0) { e.stopPropagation(); mostrar(n - 1, 'volta'); } }, true);
    ligarTimers(caixa, ctx, estado);
    if (n === total - 1) { bt.querySelector('.botao__rotulo').textContent = t.finalizar; tipoBotao(bt, 'verde'); }
    estado(false);

    if (ctx.params.balao) {
      ctx.estado('Preparo · balão da IA', '872:6177');
      const ia = el.querySelector('.ajuda-ia');
      ia.classList.add('ajuda-ia--destaque');
      el.insertAdjacentHTML('beforeend', `<div class="balao-ia" data-balao role="dialog"><b class="txt-rotulo">${esc(t.balao.titulo)}</b><p class="txt-apoio">${esc(t.balao.texto)}</p><button type="button" class="balao-ia__ok" data-ok>${esc(t.balao.ok)}</button></div>`);
      const fechar = () => { const b = el.querySelector('[data-balao]'); if (!b) return; b.classList.add('saindo'); setTimeout(() => b.remove(), 250); ia.classList.remove('ajuda-ia--destaque'); estado(false); };
      el.querySelector('[data-ok]').addEventListener('click', fechar);
      ia.addEventListener('click', fechar);
    }
  },
};
