// Figma: Avaliação e registro · padrão visual · 872:6048
import { avaliacoes } from '../dados/conteudo.js';
import { botao, linkTexto, estrelas, ligarEstrelas, campoMultilinha, adicionarFoto, ligarAdicionarFoto, src, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = avaliacoes.adicionarTela;

export default {
  id: 'adicionar-avaliacao', nome: 'Adicionar avaliação', fluxo: 4, figma: '872:6048',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<h1 class="txt-secao">${esc(t.titulo)}</h1>
      <div class="avaliar">
        <b class="txt-rotulo">${esc(t.sua)}</b>
        <div class="avaliar__estrelas" data-estrelas>${estrelas(5, { interativa: true })}</div>
        <p class="txt-apoio avaliar__nota" data-nota>${esc(t.notaTexto[5])}</p>
      </div>
      ${campoMultilinha({ rotulo: t.registro, placeholder: t.registroPh })}
      <b class="txt-rotulo avaliar__foto">${esc(t.foto)}</b>
      ${adicionarFoto({ titulo: 'Adicionar foto do prato', texto: 'Toque para tirar ou escolher uma foto', trocar: 'Trocar foto' })}`, 'adicionar-avaliacao')}
    ${rodape(botao(t.publicar, { attrs: 'data-publicar' }) + linkTexto(t.depois, 'data-voltar'), { classe: 'adicionar-avaliacao__rodape' })}`,
  ligar: (el, ctx) => {
    ligarEstrelas(el.querySelector('[data-estrelas]'), (n) => { el.querySelector('[data-nota]').textContent = t.notaTexto[n]; });
    ligarAdicionarFoto(el.querySelector('[data-adicionar-foto]'), src('receita.arrozResultado'));
    el.querySelector('[data-publicar]').addEventListener('click', () => ctx.voltar(1, t.publicada));
  },
};
