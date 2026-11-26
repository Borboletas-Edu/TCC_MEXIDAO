// Figma: Configurações · Restrições alimentares (criada a partir desta tela)
// Configurações › Restrições alimentares: abre o mesmo painel de restrições do cadastro (872:5134).
import { configuracoes } from '../dados/conteudo.js';
import { botao, introducao, chip, avisoEmCriacao, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
import { abrirPainelRestricoes } from './_restricoes.js';
const t = configuracoes.restricoes;

export default {
  id: 'restricoes', nome: 'Restrições alimentares', fluxo: 9, figma: '872:5134',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`${introducao({ titulo: t.titulo, texto: t.texto })}
      <div class="grupo-chips" data-selecionadas><p class="txt-apoio">Nenhuma restrição selecionada.</p></div>
      ${botao('Escolher restrições', { tipo: 'secundario', attrs: 'data-escolher' })}`, 'restricoes')}
    ${rodape(botao(t.salvar, { attrs: 'data-salvar' }), { simples: true })}`,
  ligar: (el, ctx) => {
    let lista = [];
    const desenhar = () => { el.querySelector('[data-selecionadas]').innerHTML = lista.length ? lista.map((r) => chip(r, { selecionado: true })).join('') : '<p class="txt-apoio">Nenhuma restrição selecionada.</p>'; };
    el.querySelector('[data-escolher]').addEventListener('click', () => abrirPainelRestricoes(ctx, lista, { aoSalvar: (l) => { lista = l; desenhar(); } }));
    el.querySelector('[data-salvar]').addEventListener('click', () => ctx.voltar(1, t.salvo));
  },
};
