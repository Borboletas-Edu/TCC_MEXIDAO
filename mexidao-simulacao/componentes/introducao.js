// DS · Introdução da tela (Etapa da configuração + Título + Descrição) — padrão das telas de formulário.
import { esc, br, cls } from './util.js';

export const introducao = ({ etapa = '', titulo = '', texto = '', centro = false, grande = false, attrsTitulo = '' } = {}) =>
  `<div class="${cls('introducao', centro && 'introducao--centro')}">
    ${etapa ? `<span class="introducao__etapa txt-sobretitulo">${esc(etapa)}</span>` : ''}
    <h1 class="${grande ? 'txt-titulo' : 'txt-secao'}" ${attrsTitulo}>${br(titulo)}</h1>
    ${texto ? `<p class="introducao__texto">${br(texto)}</p>` : ''}
  </div>`;
