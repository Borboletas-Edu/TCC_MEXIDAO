// Partes do Perfil (Figma 872:7476 · 872:7528 · 872:8149): cartão do perfil, abas Publicações/Atividade.
// Usado no perfil de outra pessoa e no "Meu perfil".
import { comunidade } from '../dados/conteudo.js';
import { galeriaPerfil } from '../dados/midia.js';
import { abasSublinhado, ligarAbas, barraProgresso, conquistas, linkAcao, img, icone, esc } from '../componentes/index.js';
const a = comunidade.perfilErika;

export const cartaoPerfil = ({ avatarHtml, nome, usuario, acao, nivelTexto, xp, pct, bio, conexoes = '' }) => `<div class="cartao perfil-card">
  <div class="perfil-card__identificacao">${avatarHtml}<div class="perfil-card__dados"><b class="txt-cabecalho">${esc(nome)}</b><span class="txt-pequeno">${esc(usuario)}</span></div>${acao}</div>
  <div class="perfil-card__xp"><div class="linha linha--entre"><b class="txt-rotulo-p cor-verde">${esc(nivelTexto)}</b><span class="txt-pequeno">${esc(xp)}</span></div>${barraProgresso(pct)}</div>
  <p class="perfil-card__bio">${esc(bio)}</p>${conexoes}</div>`;

// attrs pode trazer {i}: é trocado pela posição da foto na galeria (para abrir o feed já nessa publicação)
export const galeria = (attrs, lista = galeriaPerfil) => `<div class="galeria${lista.length <= 2 ? ' galeria--duas' : ''}">${lista.map((m, i) => `<button type="button" class="galeria__item" ${attrs.replace('{i}', i)}>${img('receita.' + m)}</button>`).join('')}</div>`;

const atividadeHtml = (numeros = a.numeros, atividades = a.atividades) => `
  <div class="numeros-perfil">${numeros.map(([n, r]) => `<div class="numeros-perfil__item"><b>${n}</b><span>${r}</span></div>`).join('<i class="numeros-perfil__divisoria"></i>')}</div>
  <div class="titulo-secao titulo-secao--perfil"><b class="txt-rotulo">Conquistas</b>${linkAcao('Ver todas', { attrs: 'data-toast="Todas as conquistas em breve"' })}</div>
  ${conquistas(a.conquistas)}
  <p class="txt-rotulo-p cor-apagada perfil__semana">${esc(a.semana)}</p>
  <div class="cartao lista-atividades">${atividades.map(([t, q, xp, ic, foto]) => `<div class="atividade-linha">
    ${ic === 'foto' ? `<span class="atividade-linha__foto">${img('receita.' + (foto || 'sopa'))}</span>` : `<span class="atividade-linha__icone">${icone(ic)}</span>`}
    <div class="flex1"><b class="txt-rotulo-p">${esc(t)}</b><p class="txt-pequeno">${esc(q)}</p></div><b class="txt-rotulo-p cor-verde">${esc(xp)}</b></div>`).join('')}</div>`;

// Liga as abas: Publicações (galeria) / Atividade
export function ligarAbasPerfil(el, ctx, attrsGaleria, figmas, lista, numeros, atividades) {
  const c = el.querySelector('[data-conteudo]');
  const desenhar = (i) => {
    c.innerHTML = i === 0 ? galeria(attrsGaleria, lista) : atividadeHtml(numeros, atividades);
    c.classList.remove('entra-fade'); void c.offsetWidth; c.classList.add('entra-fade');
    ctx.estado(figmas[i][0], figmas[i][1]);
    requestAnimationFrame(() => c.querySelectorAll('.barra-progresso__preenchimento').forEach((b) => (b.style.width = b.dataset.pct + '%')));
  };
  ligarAbas(el.querySelector('[data-abas]'), desenhar);
  desenhar(0);
}
export const abasPerfil = () => abasSublinhado(comunidade.perfilErika.abas, 0, 'data-abas');
