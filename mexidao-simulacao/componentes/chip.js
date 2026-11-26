// DS · Chip (Padrão / Selecionado). Grupos: livre, grade de 2 e grade de 3 colunas.
import { esc, cls } from './util.js';

export const chip = (rotulo, { selecionado = false, attrs = '', alto = false } = {}) =>
  `<button type="button" class="${cls('chip', selecionado && 'chip--selecionado', alto && 'chip--alto')}" aria-pressed="${selecionado}" ${attrs}>${esc(rotulo)}</button>`;
export const grupoChips = (html, { tipo = '', attrs = '' } = {}) => `<div class="${cls('grupo-chips', tipo && `grupo-chips--${tipo}`)}" ${attrs}>${html}</div>`;
export function alternarChip(el, valor) {
  const sel = valor ?? !el.classList.contains('chip--selecionado');
  el.classList.toggle('chip--selecionado', sel);
  el.setAttribute('aria-pressed', sel);
  return sel;
}
