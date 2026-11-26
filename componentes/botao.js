// DS · Botão (Principal, Secundário, Desabilitado, Verde + tamanhos Compacto e Mini) e Links.
import { icone } from './icone.js';
import { esc, cls } from './util.js';

export function botao(rotulo, { tipo = 'principal', tamanho = '', icone: ic = '', attrs = '', classe = '' } = {}) {
  const t = tipo === 'desabilitado' ? 'desabilitado' : tipo;
  return `<button type="button" class="${cls('botao', `botao--${t}`, tamanho && `botao--${tamanho}`, classe)}" ${tipo === 'desabilitado' ? 'disabled' : ''} ${attrs}>${ic ? icone(ic, 'botao__icone') : ''}<span class="botao__rotulo">${esc(rotulo)}</span></button>`;
}
// Atualiza o tipo de um botão já desenhado (ex.: Desabilitado → Principal)
export function tipoBotao(el, tipo) {
  el.classList.remove('botao--principal', 'botao--secundario', 'botao--desabilitado', 'botao--verde');
  el.classList.add('botao--' + tipo);
  el.disabled = tipo === 'desabilitado';
}
export const linkTexto = (rotulo, attrs = '') => `<button type="button" class="link-texto" ${attrs}>${esc(rotulo)}</button>`;
export const linkAcao = (rotulo, { attrs = '', seta = false, primaria = false, forte = false } = {}) =>
  `<button type="button" class="${cls('link-acao', primaria && 'link-acao--primaria', forte && 'link-acao--forte')}" ${attrs}>${esc(rotulo)}${seta ? icone('seta', 'link-acao__icone') : ''}</button>`;
