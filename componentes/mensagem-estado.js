// DS · Mensagem de estado · título + explicação (com check opcional)
import { icone } from './icone.js';
import { esc } from './util.js';

export const mensagemEstado = (estado, explicacao, { check = false } = {}) =>
  `<div class="mensagem-estado"><b class="mensagem-estado__estado">${check ? `<span class="mensagem-estado__check">${icone('check')}</span>` : ''}${esc(estado)}</b><p class="mensagem-estado__explicacao">${esc(explicacao)}</p></div>`;
