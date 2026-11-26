// DS · Aba do filtro (Ativa / Inativa) dentro do Painel de filtros.
import { esc, cls } from './util.js';

export const abaFiltro = (rotulo, ativa, i) => `<button type="button" class="${cls('aba-filtro', ativa && 'aba-filtro--ativa')}" data-filtro-i="${i}">${esc(rotulo)}</button>`;
export const painelFiltros = (abasHtml, opcoesHtml, ativa = 0) => `<div class="painel-filtros">
  <div class="painel-filtros__abas">${abasHtml}<i class="painel-filtros__indicador" style="transform:translateY(${ativa * 40}px)"></i></div>
  <div class="painel-filtros__opcoes">${opcoesHtml}</div>
</div>`;
