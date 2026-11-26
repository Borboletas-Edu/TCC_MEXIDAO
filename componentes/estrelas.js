// DS · Estrelas de avaliação (grande 24×22 · pequena 11×10), com meia estrela e modo interativo.
import { cls } from './util.js';
const D = 'M12 1.8l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.6l-6.2 3.3L7 14l-5-4.9 6.9-1Z';
let n = 0;
export function estrelas(valor, { pequena = false, interativa = false } = {}) {
  let h = '';
  for (let i = 1; i <= 5; i++) {
    const meia = valor > i - 1 && valor < i;
    const id = 'meia' + (++n);
    h += `<span class="${cls('estrela', i <= valor && 'estrela--cheia')}" ${interativa ? `data-estrela="${i}" role="button" aria-label="${i} estrelas"` : ''}><svg viewBox="0 0 24 22">${meia ? `<defs><linearGradient id="${id}"><stop offset=".5" stop-color="currentColor"/><stop offset=".5" stop-color="transparent"/></linearGradient></defs>` : ''}<path d="${D}" fill="${meia ? `url(#${id})` : 'none'}" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>`;
  }
  return `<div class="${cls('estrelas', pequena && 'estrelas--p', interativa && 'estrelas--interativas')}">${h}</div>`;
}
export function ligarEstrelas(el, aoMudar) {
  el.addEventListener('click', (e) => {
    const s = e.target.closest('[data-estrela]'); if (!s) return;
    const v = +s.dataset.estrela;
    el.querySelectorAll('[data-estrela]').forEach((x) => x.classList.toggle('estrela--cheia', +x.dataset.estrela <= v));
    aoMudar?.(v);
  });
}
