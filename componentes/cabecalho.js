// DS · Cabeçalho (Voltar = Sim / Não) · 375×50
import { icone } from './icone.js';
import { esc, cls } from './util.js';

export function cabecalho(titulo, { voltar = true, acoes = '', semLinha = false, primaria = false } = {}) {
  return `<header class="${cls('cabecalho', semLinha && 'cabecalho--sem-linha')}">
    ${voltar ? `<button type="button" class="cabecalho__voltar" data-voltar aria-label="Voltar">${icone('voltar')}</button>` : ''}
    <h1 class="${cls('cabecalho__titulo txt-cabecalho', primaria && 'cabecalho__titulo--primaria')}">${esc(titulo)}</h1>
    ${acoes ? `<div class="cabecalho__acoes">${acoes}</div>` : ''}
  </header>`;
}
