// DS · Pessoa (cartão com avatar 48) e Pessoa em lista (linha com avatar 40 e botão Seguir/Seguindo)
import { avatar } from './avatar.js';
import { linkAcao } from './botao.js';
import { esc, cls } from './util.js';

export const pessoaCard = (p, sub, { nomeGrande = false, attrsPerfil = p.id ? `data-ir="perfil-pessoa" data-params='{"p":"${p.id}"}'` : 'data-ir="perfil-pessoa"' } = {}) => `<div class="pessoa-card">${avatar(p, 48)}
  <div class="pessoa-card__dados"><b class="${nomeGrande ? 'txt-cabecalho' : 'txt-rotulo'}">${esc(p.nome)}</b><span class="pessoa-card__sub">${esc(sub)}</span></div>
  ${linkAcao('Ver perfil', { attrs: attrsPerfil, forte: nomeGrande })}</div>`;
export const pessoaLinha = ([ini, nome, user, seguindo]) => `<div class="pessoa-linha" data-nome="${esc((nome + ' ' + user).toLowerCase())}">${avatar({ iniciais: ini })}
  <div class="pessoa-linha__dados"><b class="txt-rotulo">${esc(nome)}</b><span class="txt-pequeno">${esc(user)}</span></div>
  <button type="button" class="${cls('botao', 'pessoa-linha__botao', seguindo ? 'botao--secundario' : 'botao--principal')}" data-seguir>${seguindo ? 'Seguindo' : 'Seguir'}</button></div>`;
export function alternarSeguir(b) {
  const seguir = b.classList.contains('botao--principal');
  b.classList.toggle('botao--principal', !seguir); b.classList.toggle('botao--secundario', seguir);
  b.textContent = seguir ? 'Seguindo' : 'Seguir';
}
