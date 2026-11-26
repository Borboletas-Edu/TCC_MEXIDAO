// Figma: Autorizar conexão · 872:5224 — ilustração dos mascotes conectando
import { app, onboarding } from '../dados/conteudo.js';
import { botao, linkTexto, introducao, mensagemEstado, ilustracao, fmt, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = onboarding.autorizar;

export default {
  id: 'autorizar-conexao', nome: 'Autorizar conexão', fluxo: 2, figma: '872:5224',
  render: (ctx) => `${topo(app.nome)}
    ${corpo(`${ilustracao('mascotes-conectando', 'ilustracao-conexao', 'Gato e cachorro conectando')}
      <span class="faixa-servico">${esc(fmt(t.faixa, { rede: ctx.params.rede || 'Instagram' }))}</span>
      ${introducao({ titulo: t.titulo, texto: t.texto })}
      ${mensagemEstado(t.cartaoTitulo, t.cartaoTexto)}`, 'autorizar')}
    ${rodape(botao(t.autorizar, { attrs: 'data-autorizar' }) + botao(t.naoAutorizar, { tipo: 'secundario', attrs: 'data-voltar' }) + linkTexto(t.cancelar, 'data-voltar'))}`,
  ligar: (el, ctx) => el.querySelector('[data-autorizar]').addEventListener('click', () => ctx.substituir('conexao-autorizada', ctx.params)),
};
