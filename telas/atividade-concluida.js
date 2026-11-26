// Figma: Atividade concluída · sugestão · 872:7925
// "Teste seus conhecimentos" (quiz) é "Não contemplado" no fluxograma: o cartão aparece, mas só avisa.
import { atividade } from '../dados/conteudo.js';
import { botao, barraProgresso, icone, animacao, esc } from '../componentes/index.js';
import { status, rodape } from './_base.js';
const t = atividade.concluida;

export default {
  id: 'atividade-concluida', nome: 'Atividade concluída', fluxo: 6, figma: '872:7925',
  render: () => `${status}
    <div class="tela__corpo atividade-concluida">
      ${animacao('comemorar', 'atividade-concluida__animacao')}
      <h1 class="txt-secao centro">${esc(t.titulo)}</h1>
      <p class="txt-apoio centro">${esc(t.subtitulo)}</p>
      <div class="cartao atividade-concluida__xp"><div class="linha linha--entre"><b class="txt-cabecalho" data-xp>+0 XP</b><span class="txt-pequeno">${esc(t.nivel)}</span></div>${barraProgresso(100)}</div>
      <div class="cartao cartao--sem-borda atividade-concluida__conquista"><span class="atividade-concluida__selo">${icone('folha')}</span><div><p class="txt-pequeno cor-verde">${esc(t.conquista)}</p><b class="txt-rotulo">${esc(t.conquistaNome)}</b></div></div>
      <button type="button" class="cartao cartao--clicavel atividade-concluida__proxima" data-toast="Quiz não contemplado nesta simulação"><div><p class="txt-pequeno">${esc(t.proxima)}</p><b class="txt-rotulo">${esc(t.proximaNome)}</b></div>${icone('seta')}</button>
    </div>
    ${rodape(botao(t.trilha, { tipo: 'verde', attrs: 'data-trilha' }) + botao(t.revisar, { tipo: 'secundario', attrs: `data-revisar` }), { simples: true, classe: 'g10' })}`,
  ligar: (el, ctx) => {
    ctx.depois(() => { ctx.confete(); ctx.som('celebrar'); }, 300);
    let v = 0; const xp = el.querySelector('[data-xp]');
    const tm = ctx.intervalo(() => { v += 2; xp.textContent = `+${v} XP`; if (v >= t.xp) clearInterval(tm); }, 25);
    el.querySelector('[data-trilha]').addEventListener('click', () => ctx.raiz('trilha', {}, 'fade'));
    el.querySelector('[data-revisar]').addEventListener('click', () => ctx.substituir('fase', { n: 0 }));
  },
};
