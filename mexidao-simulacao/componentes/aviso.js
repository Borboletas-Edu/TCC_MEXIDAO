// DS · Avisos (sucesso, informativo, nota, dica, em criação)
import { icone } from './icone.js';
import { esc } from './util.js';

export const avisoSucesso = (texto) => `<div class="aviso">${icone('check', 'aviso__icone')}<span>${esc(texto)}</span></div>`;
export const avisoInfo = (texto, ic = 'info') => `<div class="aviso aviso--info">${icone(ic, 'aviso__icone')}<span>${esc(texto)}</span></div>`;
export const avisoNota = (texto, ic = 'cadeado') => `<div class="aviso aviso--nota">${icone(ic, 'aviso__icone')}<span>${esc(texto)}</span></div>`;
export const avisoDica = (texto) => `<div class="aviso aviso--dica">${icone('lampada', 'aviso__icone')}<span>${esc(texto)}</span></div>`;
export const avisoEmCriacao = (texto) => `<div class="aviso aviso--em-criacao">${esc(texto)}</div>`;
