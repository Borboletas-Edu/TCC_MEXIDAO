// DS · Busca (Funil = Inativo / Ativo) · 327×40
import { icone } from './icone.js';
import { esc, cls } from './util.js';

export function busca({ placeholder = '', valor = '', funil = true, funilAtivo = false, alta = false, painel = false, id = '', somenteLeitura = false, attrs = '', attrsFunil = '' } = {}) {
  return `<div class="${cls('busca', alta && 'busca--alta', painel && 'busca--painel', somenteLeitura && 'busca--readonly')}" ${attrs}>
    ${icone('busca', 'busca__lupa')}
    <input class="busca__valor" type="search" placeholder="${esc(placeholder)}" value="${esc(valor)}" ${id ? `id="${id}"` : ''} ${somenteLeitura ? 'readonly tabindex="-1"' : ''} autocomplete="off">
    ${funil ? `<button type="button" class="${cls('busca__funil', funilAtivo && 'busca__funil--ativo')}" aria-label="Filtros" ${attrsFunil}>${icone('funil')}</button>` : ''}
  </div>`;
}
