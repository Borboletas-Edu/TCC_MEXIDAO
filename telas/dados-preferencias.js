// Figma: Dados e preferências · 872:5087
// Estados: nível aberto 872:5982 · painel de restrições 872:5134 · pesquisando 872:5175 · restrições selecionadas 872:5110
import { app, onboarding } from '../dados/conteudo.js';
import { botao, seletor, chip, opcao, grupoOpcoes, introducao, fmt, esc, br } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
import { abrirPainelRestricoes } from './_restricoes.js';
const t = onboarding.dados;
const rapidas = t.restricoesRapidas.filter((r) => r !== 'Outros');

export default {
  id: 'dados-preferencias', nome: 'Dados e preferências', fluxo: 2, figma: '872:5087',
  render: (ctx) => `${topo(app.nome)}
    ${corpo(`<div class="formulario formulario--dados">
      ${introducao({ etapa: t.etapa, titulo: ctx.sessao.nome ? fmt(t.titulo, { nome: ctx.sessao.nome }) : t.tituloSemNome, texto: t.subtitulo })}
      ${seletor({ rotulo: t.nivelRotulo, valor: t.nivelPadrao, attrs: 'data-nivel' })}
      <div class="campo campo--restricao"><span class="campo__rotulo">${esc(t.restricaoRotulo)}</span>
        <div class="grupo-chips grupo-chips--grade2" data-grade>
          ${rapidas.map((r) => chip(r, { attrs: `data-chip data-r="${esc(r)}"` })).join('')}
          ${chip('Outros', { attrs: 'data-outros' })}
        </div></div>
      <div class="pilha g20"><p class="introducao__texto">${br(t.nota)}</p><p class="introducao__texto">${esc(t.nota2)}</p></div>
    </div>`)}
    ${rodape(botao(t.botao, { attrs: 'data-ir="conectar-redes"' }), { simples: true })}`,
  ligar: (el, ctx) => {
    const grade = el.querySelector('[data-grade]');
    const outros = el.querySelector('[data-outros]');
    let extras = [];
    const selecionadas = () => [...grade.querySelectorAll('[data-r].chip--selecionado')].map((c) => c.dataset.r).concat(extras);
    const atualizarEstado = () => selecionadas().length
      ? ctx.estado('Dados e preferências · Restrições selecionadas', '872:5110')
      : ctx.estado('Dados e preferências', '872:5087');
    grade.addEventListener('mudou', atualizarEstado);

    // Nível na cozinha (Opção com seletor dentro do painel)
    const sel = el.querySelector('[data-nivel]');
    sel.addEventListener('click', () => {
      const pn = t.painelNivel, atual = sel.querySelector('[data-valor]').textContent;
      sel.classList.add('seletor--aberto');
      ctx.estado('Dados e preferências · Nível aberto', '872:5982');
      ctx.painel(grupoOpcoes(pn.opcoes.map((o) => opcao(o, { selecionada: o === atual })).join(''), 'data-opcao-grupo'), {
        titulo: pn.titulo, fechar: false, classe: 'painel-inferior--nivel',
        rodape: botao(pn.botao, { attrs: 'data-confirmar' }),
        aoFechar: () => { sel.classList.remove('seletor--aberto'); atualizarEstado(); },
        ligar: (p, fechar) => p.querySelector('[data-confirmar]').addEventListener('click', () => {
          sel.querySelector('[data-valor]').textContent = p.querySelector('.opcao--selecionada .opcao__rotulo').textContent;
          fechar();
        }),
      });
    });

    // "Outros" abre o painel com todas as restrições (busca + seleção múltipla)
    outros.addEventListener('click', () => {
      ctx.estado('Dados e preferências · Painel de restrições', '872:5134');
      abrirPainelRestricoes(ctx, selecionadas(), {
        aoPesquisar: () => ctx.estado('Dados e preferências · Pesquisando', '872:5175'),
        aoFechar: atualizarEstado,
        aoSalvar: (lista) => {
          grade.querySelectorAll('[data-r]').forEach((c) => { const on = lista.includes(c.dataset.r); c.classList.toggle('chip--selecionado', on); c.setAttribute('aria-pressed', on); });
          extras = lista.filter((r) => !rapidas.includes(r));
          outros.classList.toggle('chip--selecionado', extras.length > 0);
          outros.textContent = extras.length ? `Outros · ${extras.length}` : 'Outros';
        },
      });
    });
  },
};
