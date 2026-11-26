// Espaços reservados do Figma (mantidos como no Figma: Logo, Mascote, "vetor aqui", ilustração vetorizada)
import { esc, cls } from './util.js';
export const reservado = (texto, variante = '', estilo = '', classe = '') =>
  `<div class="${cls('reservado', variante && `reservado--${variante}`, classe)}" ${estilo ? `style="${estilo}"` : ''}>${esc(texto)}</div>`;
