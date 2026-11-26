// DS · Aba (Ativa / Inativa) em grupo segmentado, e Abas sublinhadas (perfil).
import { esc, cls } from './util.js';

export const abas = (rotulos, ativa = 0, { soltas = false, attrs = '' } = {}) =>
  `<div class="${cls('abas', soltas && 'abas--soltas')}" role="tablist" ${attrs}>${rotulos.map((r, i) =>
    `<button type="button" role="tab" class="${cls('aba', i === ativa && 'aba--ativa')}" data-aba-i="${i}">${esc(r)}</button>`).join('')}</div>`;
export const abasSublinhado = (rotulos, ativa = 0, attrs = '') =>
  `<div class="abas-sublinhado" role="tablist" ${attrs}>${rotulos.map((r, i) =>
    `<button type="button" role="tab" class="${cls('aba-sublinhado', i === ativa && 'aba-sublinhado--ativa')}" data-aba-i="${i}">${esc(r)}</button>`).join('')}</div>`;
// Liga um grupo de abas: chama aoTrocar(i) e atualiza o estado visual
export function ligarAbas(grupo, aoTrocar) {
  grupo.addEventListener('click', (e) => {
    const b = e.target.closest('[data-aba-i]'); if (!b) return;
    const i = +b.dataset.abaI;
    grupo.querySelectorAll('[data-aba-i]').forEach((x) => {
      const on = +x.dataset.abaI === i;
      x.classList.toggle('aba--ativa', on && x.classList.contains('aba'));
      x.classList.toggle('aba-sublinhado--ativa', on && x.classList.contains('aba-sublinhado'));
    });
    aoTrocar(i);
  });
}
