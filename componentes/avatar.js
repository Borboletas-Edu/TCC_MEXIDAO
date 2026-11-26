// DS · Avatar (foto ou iniciais) · tamanhos 28, 32, 40, 48, 62, 72 · Avatar com nível · Avatar com câmera
import { img } from './midia.js';
import { icone } from './icone.js';
import { esc, cls } from './util.js';

export function avatar(p = {}, tamanho = 40) {
  const t = tamanho === 40 ? '' : `avatar--${tamanho}`;
  return `<span class="${cls('avatar', t)}">${p.midia ? img('pessoa.' + p.midia, 'avatar__foto') : esc(p.iniciais || '')}</span>`;
}
export const avatarNivel = (p, nivel) => `<span class="avatar-nivel">${avatar(p, 62)}<i class="avatar-nivel__nivel">${nivel}</i></span>`;
export const avatarCamera = (iniciais) => `<label class="avatar-camera"><span class="avatar avatar--72" data-avatar>${esc(iniciais)}</span><span class="avatar-camera__botao">${icone('camera')}</span><input type="file" accept="image/*" hidden></label>`;
