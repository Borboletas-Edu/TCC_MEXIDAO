// DS · Campo de texto (Padrão / Foco / Preenchido), Campo de várias linhas e Seletor.
import { icone } from './icone.js';
import { esc, cls } from './util.js';

export function campo({ rotulo = '', placeholder = '', tipo = 'text', valor = '', acao = '', ajuda = '', id = '', cinza = false } = {}) {
  return `<label class="campo">
    ${rotulo ? `<span class="campo__rotulo">${esc(rotulo)}</span>` : ''}
    <span class="${cls('campo__entrada', cinza && 'campo__entrada--cinza')}">
      <input class="campo__valor" type="${tipo}" placeholder="${esc(placeholder)}" value="${esc(valor)}" ${id ? `id="${id}"` : ''} autocomplete="off">
      ${acao ? `<button type="button" class="campo__acao" data-mostrar-senha>${esc(acao)}</button>` : ''}
    </span>
    ${ajuda ? `<span class="campo__ajuda" data-ajuda>${esc(ajuda)}</span>` : ''}
  </label>`;
}
export function campoMultilinha({ rotulo = '', placeholder = '', valor = '', id = '', ajuda = '' } = {}) {
  return `<label class="campo">
    ${rotulo ? `<span class="campo__rotulo" data-rotulo>${esc(rotulo)}</span>` : ''}
    <span class="campo__entrada campo__entrada--multi"><textarea class="campo__valor" rows="3" maxlength="500" placeholder="${esc(placeholder)}" ${id ? `id="${id}"` : ''}>${esc(valor)}</textarea></span>
    ${ajuda ? `<span class="campo__ajuda" data-ajuda>${esc(ajuda)}</span>` : ''}
  </label>`;
}
export function seletor({ rotulo = '', valor = '', attrs = '' } = {}) {
  return `<div class="campo">
    ${rotulo ? `<span class="campo__rotulo">${esc(rotulo)}</span>` : ''}
    <button type="button" class="seletor" ${attrs}><span data-valor>${esc(valor)}</span><i class="seletor__seta" aria-hidden="true"></i></button>
  </div>`;
}
