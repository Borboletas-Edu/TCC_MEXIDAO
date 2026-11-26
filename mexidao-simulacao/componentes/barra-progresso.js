// DS · Barra de progresso / XP · 6 (ou grossa 9) · anima ao aparecer
export const barraProgresso = (pct, { grossa = false } = {}) =>
  `<div class="barra-progresso ${grossa ? 'barra-progresso--grossa' : ''}"><div class="barra-progresso__preenchimento" data-pct="${pct}"></div></div>`;
export function animarBarras(raiz) {
  raiz.querySelectorAll('.barra-progresso__preenchimento[data-pct]').forEach((b) => {
    if (b._animada) return; b._animada = true;
    requestAnimationFrame(() => requestAnimationFrame(() => (b.style.width = b.dataset.pct + '%')));
  });
}
