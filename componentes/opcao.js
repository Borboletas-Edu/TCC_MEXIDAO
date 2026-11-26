// DS · Opção com seletor (Padrão / Selecionado) · 327×48
import { esc, cls } from './util.js';

export const opcao = (rotulo, { selecionada = false, attrs = '' } = {}) =>
  `<button type="button" role="radio" aria-checked="${selecionada}" class="${cls('opcao', selecionada && 'opcao--selecionada')}" ${attrs}><span class="opcao__seletor"><span class="opcao__marca"></span></span><span class="opcao__rotulo">${esc(rotulo)}</span></button>`;
export const grupoOpcoes = (html, attrs = '') => `<div class="grupo-opcoes" role="radiogroup" ${attrs}>${html}</div>`;
// Seleção única dentro de um grupo
export function ligarOpcoes(grupo, aoMudar) {
  grupo.addEventListener('click', (e) => {
    const o = e.target.closest('.opcao'); if (!o) return;
    grupo.querySelectorAll('.opcao').forEach((x) => { x.classList.toggle('opcao--selecionada', x === o); x.setAttribute('aria-checked', x === o); });
    aoMudar?.(o);
  });
}
export const opcaoSelecionada = (grupo) => grupo.querySelector('.opcao--selecionada .opcao__rotulo')?.textContent;
