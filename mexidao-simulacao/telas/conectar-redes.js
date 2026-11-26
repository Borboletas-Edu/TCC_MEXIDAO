// Figma: Conectar redes sociais · 872:5205
import { app, onboarding } from '../dados/conteudo.js';
import { botao, linkTexto, opcao, grupoOpcoes, introducao, opcaoSelecionada, br } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = onboarding.redes;

export default {
  id: 'conectar-redes', nome: 'Conectar redes sociais', fluxo: 2, figma: '872:5205',
  render: () => `${topo(app.nome)}
    ${corpo(`${introducao({ etapa: t.etapa, titulo: t.titulo, texto: t.subtitulo })}
      ${grupoOpcoes(t.opcoes.map((o) => opcao(o, { selecionada: o === t.selecionadaExemplo })).join(''), 'data-opcao-grupo')}
      <p class="txt-apoio conectar__nota">${br(t.nota)}</p>`, 'conectar')}
    ${rodape(botao(t.botao, { attrs: 'data-conectar' }) + linkTexto(t.pular, 'data-pular'))}`,
  ligar: (el, ctx) => {
    el.querySelector('[data-conectar]').addEventListener('click', () =>
      ctx.ir('autorizar-conexao', { rede: opcaoSelecionada(el.querySelector('[data-opcao-grupo]')) || t.selecionadaExemplo }));
    el.querySelector('[data-pular]').addEventListener('click', () => ctx.raiz('home', {}, 'avancar'));
  },
};
