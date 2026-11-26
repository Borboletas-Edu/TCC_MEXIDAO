// Figma: Atividade concluída (Receita concluída) · 872:5803 — cena animada "comemorar" (vídeo 872:5939)
import { concluida as t } from '../dados/conteudo.js';
import { botao, animacao, barraProgresso, fmt, esc } from '../componentes/index.js';
import { status, corpo, rodape } from './_base.js';

export default {
  id: 'receita-concluida', nome: 'Receita concluída', fluxo: 5, figma: '872:5803',
  render: () => `${status}
    ${corpo(`${animacao('comemorar', 'concluida__animacao')}
      <h1 class="txt-titulo cor-primaria centro concluida__titulo">${esc(t.titulo)}</h1>
      <p class="txt-rotulo centro concluida__subtitulo">${esc(t.subtitulo)}</p>
      <div class="cartao cartao--sem-borda concluida__cartao">
        ${barraProgresso(35, { grossa: true })}
        <b class="concluida__pontos" data-contar>${fmt(t.pontosRotulo, { n: 0 })}</b>
        <div class="linha linha--entre"><span class="txt-pequeno cor-texto">${esc(t.experiencia)}</span><b class="txt-rotulo-p">${t.percentual}%</b></div>
      </div>`, 'concluida')}
    ${rodape(botao(t.trilha, { tipo: 'verde', attrs: 'data-trilha' }) + botao(t.continuar, { attrs: 'data-ir="como-ficou"' }), { simples: true })}`,
  ligar: (el, ctx) => {
    ctx.depois(() => { ctx.confete(); ctx.som('celebrar'); }, 300);
    const alvo = el.querySelector('[data-contar]'); let v = 0;
    const tm = ctx.intervalo(() => { v++; alvo.textContent = fmt(t.pontosRotulo, { n: v }); if (v >= t.pontos) clearInterval(tm); }, 45);
    el.querySelector('[data-trilha]').addEventListener('click', () => ctx.raiz('trilha', {}, 'fade'));
  },
};
