// Figma: Instruções enviadas · 872:5022
import { app, login } from '../dados/conteudo.js';
import { botao, linkTexto, introducao, mensagemEstado, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = login.instrucoes;

export default {
  id: 'instrucoes-enviadas', fundo: 'b', nome: 'Instruções enviadas', fluxo: 1, figma: '872:5022',
  render: (ctx) => `${topo(app.nome)}
    ${corpo(`<div class="formulario formulario--recuperar">
      ${introducao({ titulo: t.titulo, texto: t.subtitulo })}
      ${mensagemEstado(ctx.params.email || t.emailExemplo, t.texto)}
      ${botao(t.reenviar, { tipo: 'secundario', attrs: `data-toast="${esc(t.reenviado)}"` })}
      ${linkTexto(t.alterar, 'data-voltar')}
    </div>`)}
    ${rodape(botao(t.voltar, { attrs: 'data-login' }), { simples: true })}`,
  ligar: (el, ctx) => el.querySelector('[data-login]').addEventListener('click', () => ctx.voltarPara('login')),
};
