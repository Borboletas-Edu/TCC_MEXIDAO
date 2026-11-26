// DS · Postagem (feed) e Comentários
import { avatar } from './avatar.js';
import { img } from './midia.js';
import { icone } from './icone.js';
import { linkAcao } from './botao.js';
import { esc, cls } from './util.js';

// Na simulação, só as postagens da Erika abrem os comentários (as demais mostram um aviso)
const daErika = (p) => p.autorId === 'erika' || p.autorPessoa?.id === 'erika' || p.nome === 'Erika Dias';
export function postagem(p, { verPerfil = p.autorId ? `data-ir="perfil-pessoa" data-params='{"p":"${p.autorId}"}'` : 'data-ir="perfil-pessoa"', abrirComentarios = daErika(p) ? 'data-ir="postagem"' : 'data-toast="Na simulação, os comentários estão disponíveis apenas nas postagens da Erika"', fotoBaixa = false } = {}) {
  return `<article class="postagem">
    <div class="postagem__autoria">${avatar(p.autorPessoa || { iniciais: p.iniciais })}<div class="postagem__dados"><b class="postagem__nome">${esc(p.nome)}</b><span class="postagem__meta">${esc(p.meta)}</span></div>${linkAcao('Ver perfil', { attrs: verPerfil })}</div>
    <div class="${cls('postagem__foto', fotoBaixa && 'postagem__foto--baixa')}">${img('receita.' + p.midia)}</div>
    ${p.titulo ? `<b class="postagem__titulo">${esc(p.titulo)}</b>` : ''}
    <p class="postagem__texto">${esc(p.texto)}</p>
    <div class="postagem__interacoes">
      <button type="button" class="interacao" data-curtir>${icone('coracao')}<span data-n>${p.curtidas ?? 0}</span></button>
      <button type="button" class="interacao" ${abrirComentarios}>${icone('comentario')}<span>${p.comentarios ?? 0}</span></button>
    </div>
  </article>`;
}
export const comentario = (c, autoraTag = 'Autora') => `<div class="${cls('comentario', c.resposta === true && 'comentario--resposta')}">
  ${avatar(c.pessoa || { iniciais: c.iniciais }, c.resposta === true ? 28 : 32)}
  <div class="comentario__texto"><p class="comentario__topo"><b class="comentario__nome">${esc(c.nome)}</b>${c.autora ? `<span class="tag tag--autora">${esc(autoraTag)}</span>` : ''}<span>· ${esc(c.quando)}</span></p>
  <p class="comentario__mensagem">${esc(c.texto)}</p>${c.semResponder ? '' : linkAcao('Responder', { attrs: `data-responder="${esc(c.nome)}"` })}</div></div>`;
