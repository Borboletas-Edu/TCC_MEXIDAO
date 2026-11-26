// Acesso à lista única de mídia (dados/midia.js). As telas nunca usam caminhos de arquivo diretamente.
import { midia } from '../dados/midia.js';
import { ilustracoes } from '../dados/ilustracoes.js';
import { esc } from './util.js';

export function src(ref) {
  const [g, n] = ref.split('.');
  const m = midia[g]?.[n];
  if (!m) console.warn('Mídia não encontrada:', ref);
  return m?.src || m?.poster || '';
}
export function img(ref, classe = '', extra = '') {
  const [g, n] = ref.split('.');
  return `<img class="${classe}" src="${src(ref)}" alt="${esc(midia[g]?.[n]?.descricao || '')}" draggable="false" data-midia="${ref}" ${extra}>`;
}
export const dadosVideo = (ref) => midia.video[ref];
// Ilustração animada: vídeo em loop, mudo, que toca sozinho (substitui a imagem parada)
export function animacao(ref, classe = '') {
  const m = midia.animacao?.[ref];
  if (!m) { console.warn('Animação não encontrada:', ref); return ''; }
  return `<video class="${classe}" src="${m.arquivo}" autoplay muted loop playsinline preload="auto" aria-label="${esc(m.descricao || '')}" data-midia="animacao.${ref}"></video>`;
}
// Ilustração animada por partes (dados/ilustracoes.js): cada pedaço da arte se mexe do seu jeito
// (corpos balançam, toucas flutuam, pontinhos aparecem e somem, selo pulsa, brilho cintila).
export function ilustracao(nome, classe = '', descricao = '') {
  const il = ilustracoes[nome];
  if (!il) { console.warn('Ilustração não encontrada:', nome); return ''; }
  // Animação SVG pronta (midia/animacoes): ocupa o mesmo espaço da arte antiga
  if (il.svg) return `<span class="ilustracao ${classe}" role="img" aria-label="${esc(descricao)}" style="aspect-ratio:${il.w}/${il.h}"><img class="ilustracao__svg" src="${il.svg}" alt="" draggable="false" style="left:${il.x}%;top:${il.y}%;width:${il.largura}%;height:${il.altura}%"></span>`;
  return `<span class="ilustracao ${classe}" role="img" aria-label="${esc(descricao)}" style="aspect-ratio:${il.w}/${il.h}">${il.partes.map((p) =>
    `<img class="ilustracao__parte ilustracao__parte--${p.papel}" src="${p.src}" alt="" draggable="false" style="left:${p.x}%;top:${p.y}%;width:${p.w}%;height:${p.h}%;animation-delay:${p.atraso}s">`).join('')}</span>`;
}
