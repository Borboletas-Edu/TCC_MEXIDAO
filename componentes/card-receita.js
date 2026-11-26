// DS · Card de receita · 327 · foto 134×89 + título + tags
import { img } from './midia.js';
import { tagTempo, tagCusto, tagCategoria } from './tag.js';
import { esc } from './util.js';

export const cardReceita = (r, attrs = '') => `<button type="button" class="card-receita" ${attrs}>
  ${img('receita.' + r.midia, 'card-receita__foto')}
  <span class="card-receita__info">
    <span class="card-receita__titulo">${esc(r.nome)}</span>
    <span class="grupo-tags">${tagTempo(r.tempo, r.corTempo)}${tagCusto(r.custo)}${[...r.categorias, ...r.tipos].map(tagCategoria).join('')}</span>
  </span>
</button>`;
