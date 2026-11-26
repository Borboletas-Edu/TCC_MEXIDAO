// Gestos: arrastar com o mouse para rolar (com inércia) e roda do mouse na horizontal
// em listas laterais (.rolagem-x e .sugestoes do chat).
import { escala } from './escala.js';

const ROLAVEIS = '.tela__corpo, .rolagem-x, .sugestoes, .painel-inferior__conteudo, .chat__mensagens';

export function ligarArrastarParaRolar(el) {
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const corpo = e.target.closest(ROLAVEIS);
    if (!corpo || e.target.closest('input,textarea,[data-trilho],.painel-inferior__topo')) return;
    const horizontal = corpo.matches('.rolagem-x, .sugestoes');
    let ultimo = horizontal ? e.clientX : e.clientY, vel = 0, moveu = 0, t0 = performance.now();
    el._arrastou = false;
    const mover = (ev) => {
      const p = horizontal ? ev.clientX : ev.clientY;
      const d = (p - ultimo) / escala(); ultimo = p; moveu += Math.abs(d);
      const agora = performance.now(); vel = d / Math.max(1, agora - t0); t0 = agora;
      if (moveu > 6) { el._arrastou = true; if (horizontal) corpo.scrollLeft -= d; else corpo.scrollTop -= d; }
    };
    const soltar = () => {
      window.removeEventListener('pointermove', mover); window.removeEventListener('pointerup', soltar);
      let v = vel * 16;
      const inercia = () => { if (Math.abs(v) < 0.3) return; if (horizontal) corpo.scrollLeft -= v; else corpo.scrollTop -= v; v *= 0.94; requestAnimationFrame(inercia); };
      requestAnimationFrame(inercia);
      setTimeout(() => { el._arrastou = false; }, 0);
    };
    window.addEventListener('pointermove', mover); window.addEventListener('pointerup', soltar);
  });
}

// Roda do mouse (vertical) vira rolagem lateral nas listas horizontais
export function ligarRodaHorizontal(raiz) {
  raiz.addEventListener('wheel', (e) => {
    const lista = e.target.closest('.rolagem-x, .sugestoes');
    if (!lista || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    const max = lista.scrollWidth - lista.clientWidth;
    if (max <= 0) return;
    e.preventDefault();
    lista.scrollLeft = Math.max(0, Math.min(max, lista.scrollLeft + e.deltaY));
  }, { passive: false });
}
