// DS · Contribuição (Completa com/sem anexos, Simples) — avaliações da receita
import { estrelas } from './estrelas.js';
import { icone } from './icone.js';
import { esc } from './util.js';
import { img } from './midia.js';

export function contribuicao(c, { simples = false } = {}) {
  return `<article class="contribuicao">
    ${simples ? '' : `<div class="contribuicao__topo">${estrelas(c.estrelas, { pequena: true })}<span class="contribuicao__data">${esc(c.quando)}</span></div>`}
    <p class="contribuicao__relato">${esc(c.texto)}</p>
    ${!simples && (Array.isArray(c.fotos) ? c.fotos.length : c.fotos) ? `<div class="contribuicao__anexos">${Array.isArray(c.fotos)
      ? c.fotos.map((f) => `<span class="contribuicao__anexo contribuicao__anexo--foto">${img('receita.' + f)}</span>`).join('')
      : `<span class="contribuicao__anexo">${icone('imagem')}</span>`.repeat(c.fotos)}</div>` : ''}
    <div class="contribuicao__autoria">
      <span class="contribuicao__pessoa"><span class="contribuicao__avatar">${c.avatar ? img('pessoa.' + c.avatar) : ''}</span><b class="contribuicao__nome">${esc(c.nome)}</b>· ${esc(c.regiao)}</span>
      ${simples ? '' : `<button type="button" class="interacao" data-curtir>${icone('coracao')}<b class="cor-primaria" data-n>${c.curtidas}</b></button>`}
    </div>
  </article>`;
}
