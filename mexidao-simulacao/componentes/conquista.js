// DS · Conquista (Ativa / Bloqueada) · com ilustração (Figma 872:7987) ou ícone de reserva
import { icone } from './icone.js';
import { img } from './midia.js';
import { br, cls } from './util.js';

export const conquista = (rotulo, ic, ativa, imagem) => imagem
  ? `<div class="${cls('conquista conquista--ilustrada', ativa ? 'conquista--ativa' : 'conquista--bloqueada')}" aria-label="${rotulo.replace(/\n/g, ' ')} · ${ativa ? 'desbloqueada' : 'bloqueada'}"><span class="conquista__ilustracao">${img(imagem, 'conquista__imagem')}${ativa ? '' : `<span class="conquista__cadeado">${icone('cadeado')}</span>`}</span><span class="conquista__rotulo">${br(rotulo)}</span></div>`
  : `<div class="${cls('conquista', ativa && 'conquista--ativa')}"><span class="conquista__selo">${icone(ativa ? ic : 'cadeado')}</span><span class="conquista__rotulo">${br(rotulo)}</span></div>`;
export const conquistas = (lista, cinco = false) => `<div class="${cls('conquistas', cinco && 'conquistas--5')}">${lista.map(([r, ic, ativa, imagem]) => conquista(r, ic, ativa, imagem)).join('')}</div>`;
