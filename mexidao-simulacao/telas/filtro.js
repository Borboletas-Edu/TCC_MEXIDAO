// Figma: Filtro de receitas · Tipo 872:5942 · Ingredientes 872:5356 · Preparo 872:5393 · Categoria 872:5961
//        Sabor 872:5438 · Tempo 872:5414 · Custo 872:6118
// Abre SEM transição e com a seleção vazia. O funil (ativo) fecha o filtro.
import { home, filtros } from '../dados/conteudo.js';
import { busca, chip, botao, linkTexto, abaFiltro, painelFiltros, fmt, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';

export default {
  id: 'filtro', fundo: 'c', nome: 'Filtro de receitas · Tipo', fluxo: 3, figma: '872:5942',
  render: () => `${topo(home.buscarTitulo)}
    ${corpo(`${busca({ placeholder: home.busca, funilAtivo: true, somenteLeitura: true, attrsFunil: 'data-voltar' })}
      <div data-painel></div>`, 'tela__corpo--busca')}
    ${rodape(botao('', { attrs: 'data-aplicar' }) + linkTexto(filtros.limpar, 'data-limpar'))}`,
  ligar: (el, ctx) => {
    const sel = Object.fromEntries(filtros.abas.map((a) => [a.id, []]));
    let ativa = 0;
    const total = () => Object.values(sel).reduce((s, l) => s + l.length, 0);
    const desenhar = () => {
      const a = filtros.abas[ativa];
      const abasHtml = filtros.abas.map((x, i) => abaFiltro(x.nome + (sel[x.id].length ? ` · ${sel[x.id].length}` : ''), i === ativa, i)).join('');
      const opcoesHtml = a.opcoes.map((o) => chip(a.rotulos?.[o] || o, { selecionado: sel[a.id].includes(o), attrs: `data-o="${esc(o)}"` })).join('');
      el.querySelector('[data-painel]').innerHTML = painelFiltros(abasHtml, opcoesHtml, ativa);
      el.querySelector('[data-aplicar] .botao__rotulo').textContent = fmt(filtros.aplicar, { n: total() });
      ctx.estado('Filtro de receitas · ' + a.nome, a.figma);
    };
    el.querySelector('[data-painel]').addEventListener('click', (e) => {
      const aba = e.target.closest('[data-filtro-i]');
      if (aba) { ativa = +aba.dataset.filtroI; return desenhar(); }
      const c = e.target.closest('[data-o]'); if (!c) return;
      const l = sel[filtros.abas[ativa].id], o = c.dataset.o;
      l.includes(o) ? l.splice(l.indexOf(o), 1) : l.push(o);
      desenhar();
    });
    el.querySelector('[data-limpar]').addEventListener('click', () => { Object.values(sel).forEach((l) => l.splice(0)); desenhar(); });
    el.querySelector('[data-aplicar]').addEventListener('click', () => ctx.substituir('resultados', { sel: JSON.parse(JSON.stringify(sel)) }, 'nenhum'));
    desenhar();
  },
};
