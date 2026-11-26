// DS · Tag (Tempo curto/médio/longo), Tag de custo ($/$$/$$$) e Tag de categoria.
import { icone } from './icone.js';
import { esc } from './util.js';

const faixa = (min) => (min <= 20 ? 'curto' : min <= 35 ? 'medio' : 'longo');
export const tagTempo = (texto, cor) => `<span class="tag tag--${cor || faixa(parseInt(texto))}">${icone('relogio', 'tag__icone')}${esc(texto)}</span>`;
export const tagCusto = (custo) => `<span class="tag tag--custo-${custo.length}">${esc(custo)}</span>`;
export const tagCategoria = (texto) => `<span class="tag tag--categoria">${esc(texto)}</span>`;
export const tag = (texto, variante = 'categoria') => `<span class="tag tag--${variante}">${esc(texto)}</span>`;
