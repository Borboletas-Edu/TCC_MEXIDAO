// Figma: Cadastro · 872:4968 — aceita qualquer dado (simulação)
import { app, login } from '../dados/conteudo.js';
import { botao, linkTexto, campo, introducao, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = login.cadastro;

export default {
  id: 'cadastro', fundo: 'b', nome: 'Cadastro', fluxo: 1, figma: '872:4968',
  render: () => `${topo(app.nome)}
    ${corpo(`<form class="formulario" onsubmit="return false">
      ${introducao({ titulo: t.titulo, texto: t.subtitulo })}
      ${campo({ rotulo: t.email, placeholder: t.emailPh, tipo: 'email' })}
      ${campo({ rotulo: t.senha, placeholder: t.senhaPh, tipo: 'password', acao: t.mostrar, ajuda: t.senhaAjuda })}
      ${campo({ rotulo: t.confirmar, placeholder: t.confirmarPh, tipo: 'password', acao: t.mostrar })}
      <p class="txt-pequeno">${esc(t.nota)}</p>
    </form>`)}
    ${rodape(botao(t.botao, { attrs: 'data-ir="onboarding"' }) + linkTexto(t.jaTenho, 'data-trocar="login"'))}`,
  ligar: (el, ctx) => el.querySelector('[data-trocar]').addEventListener('click', () => ctx.substituir('login')),
};
