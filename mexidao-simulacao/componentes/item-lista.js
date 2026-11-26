// DS · Item da lista (Seleção Sim/Não, Marcado Sim/Não) · 327×29
import { icone } from './icone.js';
import { esc, cls } from './util.js';

export const itemLista = (nome, qtd, { selecao = false, marcado = false } = {}) =>
  selecao ? `<button type="button" class="${cls('item-lista', marcado && 'item-lista--marcado')}" data-item-marcar><span class="item-lista__controle"></span><span class="item-lista__nome">${esc(nome)}</span><span class="item-lista__qtd" data-qtd>${esc(qtd)}</span></button>`
    : `<div class="item-lista"><span class="item-lista__nome">${esc(nome)}</span><span class="item-lista__qtd">${esc(qtd)}</span></div>`;
export const itemListaIcone = (nome, detalhe, ic = 'folha') => `<div class="item-lista item-lista--icone">${icone(ic, 'item-lista__icone')}<b class="txt-rotulo-p">${esc(nome)}</b><span class="item-lista__qtd txt-pequeno">${esc(detalhe)}</span></div>`;
export const listaItens = (html) => `<div class="lista-itens">${html}</div>`;
