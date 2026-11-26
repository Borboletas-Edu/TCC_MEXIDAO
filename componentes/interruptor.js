// DS · Interruptor (Ativo / Desativado) · 44×26
export const interruptor = (ativo, attrs = '') => `<button type="button" role="switch" aria-checked="${ativo}" class="interruptor ${ativo ? 'interruptor--ativo' : ''}" data-interruptor ${attrs}></button>`;
export function alternarInterruptor(el) { const on = el.classList.toggle('interruptor--ativo'); el.setAttribute('aria-checked', on); return on; }
