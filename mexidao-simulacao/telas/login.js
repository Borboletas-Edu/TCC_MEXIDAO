// Figma: Login · 872:4989 — aceita qualquer dado (simulação)
import { app, login } from '../dados/conteudo.js';
import { botao, linkTexto, campo, introducao, cabecalho, esc } from '../componentes/index.js';
import { status, corpo, rodape } from './_base.js';
const t = login.entrar;

export default {
  id: 'login', fundo: 'b', nome: 'Login', fluxo: 1, figma: '872:4989',
  render: () => `${status}${cabecalho(app.nome)}
    ${corpo(`<form class="formulario formulario--login" onsubmit="return false">
      ${introducao({ titulo: t.titulo, texto: t.subtitulo })}
      ${campo({ rotulo: t.email, placeholder: t.emailPh, tipo: 'email' })}
      ${campo({ rotulo: t.senha, placeholder: t.senhaPh, tipo: 'password', acao: 'Mostrar' })}
      ${linkTexto(t.esqueci, 'data-ir="recuperar-senha"')}
      ${botao(t.botao, { attrs: 'data-entrar' })}
    </form>`)}
    ${rodape(`<p class="txt-apoio centro">${esc(t.naoTem)}</p>${botao(t.criar, { tipo: 'secundario', attrs: 'data-criar' })}`, { simples: true, classe: 'g12' })}`,
  ligar: (el, ctx) => {
    el.querySelector('[data-entrar]').addEventListener('click', () => ctx.raiz('home', {}, 'avancar'));
    el.querySelector('[data-criar]').addEventListener('click', () => ctx.substituir('cadastro'));
  },
};
