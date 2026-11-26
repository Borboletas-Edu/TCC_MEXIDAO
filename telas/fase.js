// Figma: Fases 1–8 da atividade "Aproveite os alimentos" · 872:7644 … 872:7891
// As fases trocam NO LUGAR (cabeçalho e progresso fixos), como no preparo.
import { atividade as t } from '../dados/conteudo.js';
import { botao, ajudaIA, cabecalho, progressoEtapas, atualizarProgresso, video, ligarVideos, pausarVideos, timer, ligarTimers, itemListaIcone, avisoDica, tipoBotao, esc } from '../componentes/index.js';
import { status, rodape } from './_base.js';
const total = t.fases.length;

const conteudoFase = (n) => { const f = t.fases[n]; return `
  <p class="fase__numero">Fase ${n + 1} de ${total}</p>
  <h1 class="txt-secao fase__titulo">${esc(f.titulo)}</h1>
  ${video('fase' + (n + 1), { classe: 'fase__video' })}
  <p class="txt-corpo fase__instrucao">${esc(f.texto)}</p>
  ${f.lista ? `<div class="cartao fase__lista">${f.lista.map(([a, b]) => itemListaIcone(a, b)).join('')}</div>` : ''}
  ${f.dica ? `<div class="fase__extra">${avisoDica(f.dica)}</div>` : ''}
  ${f.timer ? `<div class="fase__extra">${timer(f.timer[1], f.timer[0])}</div>` : ''}`; };

export default {
  id: 'fase', nome: 'Fase da atividade', fluxo: 6, figma: '872:7644',
  render: (ctx) => { const n = ctx.params.n || 0; return `${status}
    ${cabecalho(t.cabecalho, { acoes: ajudaIA('data-ir="chat-ia" data-modo="baixo"') })}
    <div class="tela__corpo fase">
      ${progressoEtapas(total, n, { fino: true })}
      <div class="fase__conteudo" data-fase>${conteudoFase(n)}</div>
    </div>
    ${rodape(botao(n === total - 1 ? t.concluir : t.proxima, { tipo: 'verde', attrs: 'data-proxima' }), { simples: true })}`; },
  ligar: (el, ctx) => {
    let n = ctx.params.n || 0;
    const caixa = el.querySelector('[data-fase]'), bt = el.querySelector('[data-proxima]');
    const ligar = () => {
      ligarVideos(caixa, ctx, { aoTelaCheia: (ref, tempo) => ctx.ir('video-tela-cheia', { ref, t: tempo }, 'baixo') });
      ligarTimers(caixa, ctx);
      ctx.estado(`Fase ${n + 1} · ${t.fases[n].titulo}`, t.fases[n].figma);
    };
    const mostrar = (novo, direcao) => {
      pausarVideos(caixa);
      n = novo;
      caixa.innerHTML = conteudoFase(n);
      caixa.classList.remove('conteudo-avanca', 'conteudo-volta'); void caixa.offsetWidth;
      caixa.classList.add(direcao === 'volta' ? 'conteudo-volta' : 'conteudo-avanca');
      bt.querySelector('.botao__rotulo').textContent = n === total - 1 ? t.concluir : t.proxima;
      atualizarProgresso(el.querySelector('.progresso-etapas'), n);
      el.querySelector('.fase').scrollTop = 0;
      ligar();
    };
    bt.addEventListener('click', () => (n === total - 1 ? ctx.substituir('atividade-concluida', {}, 'fade') : mostrar(n + 1, 'avanca')));
    el.querySelector('.cabecalho__voltar').addEventListener('click', (e) => { if (n > 0) { e.stopPropagation(); mostrar(n - 1, 'volta'); } }, true);
    tipoBotao(bt, 'verde');
    ligar();
  },
};
