// DS · Etapa do progresso (Concluída / Atual / Avançando / Final / Pendente) · 76×24 (ou fina 10)
import { cls } from './util.js';

export function progressoEtapas(total, atual, { fino = false, final = false } = {}) {
  const itens = Array.from({ length: total }, (_, i) => {
    const estado = i < atual ? 'concluida' : i === atual ? (final ? 'final' : 'atual') : 'pendente';
    return `<i class="etapa-progresso etapa-progresso--${estado}"></i>`;
  }).join('');
  return `<div class="${cls('progresso-etapas', fino && 'progresso-etapas--fino')}"><div class="progresso-etapas__trilho" style="${fino ? '' : `transform:translateX(${-deslocamento(atual)}px)`}">${itens}</div></div>`;
}
// No preparo, a trilha desliza para manter a etapa atual visível (como no Figma)
const DESLOCAMENTO = [0, 0, 170, 250, 320]; // valores medidos nas telas de preparo do Figma
export const deslocamento = (atual) => DESLOCAMENTO[atual] ?? 320;
export function atualizarProgresso(el, atual, { final = false } = {}) {
  const trilho = el.querySelector('.progresso-etapas__trilho');
  [...trilho.children].forEach((x, i) => { x.className = 'etapa-progresso etapa-progresso--' + (i < atual ? 'concluida' : i === atual ? (final ? 'final' : 'atual') : 'pendente'); });
  // A versão fina (fases da trilha) mostra todas as etapas e nunca desliza; só a do preparo acompanha a etapa atual
  const fino = el.classList.contains('progresso-etapas--fino') || !!el.querySelector('.progresso-etapas--fino');
  trilho.style.transform = fino ? '' : `translateX(${-deslocamento(atual)}px)`;
}
