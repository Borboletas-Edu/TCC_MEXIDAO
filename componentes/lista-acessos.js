// DS · Lista de acessos (Configurações, Sobre) · cartão com linhas de 43
import { icone } from './icone.js';
import { esc, cls } from './util.js';

export const tituloGrupo = (t) => `<p class="titulo-grupo">${esc(t)}</p>`;
export const acesso = (rotulo, ic, { attrs = '', perigo = false, seta = true, alto = false } = {}) =>
  `<button type="button" class="${cls('acesso', perigo && 'acesso--perigo', alto && 'acesso--alto')}" ${attrs}>${icone(ic, 'acesso__icone')}<span>${esc(rotulo)}</span>${seta ? icone('seta', 'acesso__seta') : ''}</button>`;
export const lista = (html, attrs = '') => `<div class="lista" ${attrs}>${html}</div>`;
