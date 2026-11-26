// Figma: Conexão autorizada · 872:5243 — ilustração dos mascotes com o selo de check
import { app, onboarding } from '../dados/conteudo.js';
import { botao, introducao, mensagemEstado, ilustracao, cabecalho, fmt } from '../componentes/index.js';
import { status, corpo, rodape } from './_base.js';
const t = onboarding.conectado;

export default {
  id: 'conexao-autorizada', nome: 'Conexão autorizada', fluxo: 2, figma: '872:5243',
  render: (ctx) => { const rede = ctx.params.rede || 'Instagram'; return `${status}${cabecalho(app.nome, { voltar: false })}
    ${corpo(`${ilustracao('mascotes-conectado', 'ilustracao-conexao ilustracao-conexao--selo', 'Gato e cachorro com o selo de conexão')}
      ${introducao({ titulo: t.titulo, texto: t.texto })}
      ${mensagemEstado(fmt(t.cartaoTitulo, { rede }), fmt(t.cartaoTexto, { rede }), { check: true })}`, 'autorizada')}
    ${rodape(botao(t.botao, { attrs: 'data-inicio' }), { simples: true })}`; },
  ligar: (el, ctx) => {
    ctx.depois(() => { ctx.confete(); ctx.som('celebrar'); }, 350);
    el.querySelector('[data-inicio]').addEventListener('click', () => ctx.raiz('home', {}, 'avancar'));
  },
};
