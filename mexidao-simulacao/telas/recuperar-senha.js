// Figma: Recuperar senha · 872:5008
import { app, login } from '../dados/conteudo.js';
import { botao, linkTexto, campo, introducao } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = login.recuperar;

export default {
  id: 'recuperar-senha', fundo: 'b', nome: 'Recuperar senha', fluxo: 1, figma: '872:5008',
  render: () => `${topo(app.nome)}
    ${corpo(`<form class="formulario formulario--recuperar" onsubmit="return false">
      ${introducao({ titulo: t.titulo, texto: t.subtitulo })}
      ${campo({ rotulo: t.rotulo, placeholder: t.ph, tipo: 'email', id: 'email-recuperar' })}
      ${botao(t.botao, { attrs: 'data-enviar' })}
    </form>`)}
    ${rodape(linkTexto(t.voltar, 'data-voltar'))}`,
  ligar: (el, ctx) => el.querySelector('[data-enviar]').addEventListener('click', () =>
    ctx.ir('instrucoes-enviadas', { email: el.querySelector('#email-recuperar').value })),
};
