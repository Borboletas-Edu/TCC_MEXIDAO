// Figma: Sobre Você · 872:5071 — o nome informado aqui fica na sessão (usado em "Prazer, {nome}!")
import { app, onboarding } from '../dados/conteudo.js';
import { botao, campo, introducao } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = onboarding.sobre;

export default {
  id: 'sobre-voce', nome: 'Sobre você', fluxo: 2, figma: '872:5071',
  render: (ctx) => `${topo(app.nome)}
    ${corpo(`<form class="formulario formulario--largo" onsubmit="return false">
      ${introducao({ etapa: t.etapa, titulo: t.titulo, texto: t.subtitulo })}
      ${campo({ rotulo: t.nome, placeholder: t.nomePh, id: 'nome', valor: ctx.sessao.nome })}
      ${campo({ rotulo: t.idade, placeholder: t.idadePh, tipo: 'number' })}
    </form>`)}
    ${rodape(botao(t.botao, { attrs: 'data-salvar' }), { simples: true })}`,
  ligar: (el, ctx) => {
    const nome = el.querySelector('#nome');
    el.querySelector('[data-salvar]').addEventListener('click', () => {
      ctx.sessao.nome = nome.value.trim();
      ctx.ir('dados-preferencias');
    });
  },
};
