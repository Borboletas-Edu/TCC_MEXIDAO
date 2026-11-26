// Figma: Resultados filtrados (Home - Busca) · 872:5299 — o funil ativo reabre o filtro
import { home, receitas } from '../dados/conteudo.js';
import { busca, cardReceita, botao, mensagemEstado } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';

// "ou" dentro do mesmo grupo e "e" entre grupos
const normalizar = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
// Busca por texto: nome, ingredientes, categorias, tipos, preparo e sabor
const buscarTexto = (q) => {
  const v = normalizar(q);
  return receitas.filter((r) => [r.nome, ...r.ingredientes, ...r.categorias, ...r.tipos, ...r.preparo, ...r.sabor].some((x) => normalizar(x).includes(v)))
    .filter((r, i, l) => l.findIndex((o) => o.nome === r.nome) === i);
};
const filtrar = (sel) => receitas.filter((r) => Object.entries(sel).every(([k, l]) => !l.length || l.some((v) => (Array.isArray(r[k]) ? r[k] : [r[k]]).includes(v))));

export default {
  id: 'resultados', fundo: 'c', nome: 'Resultados filtrados', fluxo: 3, figma: '872:5299',
  render: (ctx) => {
    const q = ctx.params.q || '';
    const lista = q ? buscarTexto(q) : filtrar(ctx.params.sel || {});
    return `${topo(home.buscarTitulo)}
    ${corpo(`${busca({ placeholder: home.busca, valor: q, funilAtivo: !q, somenteLeitura: true, attrs: q ? 'data-voltar data-modo="nenhum"' : 'data-ir="busca" data-modo="nenhum"', attrsFunil: 'data-reabrir' })}
      <div class="lista-cards lista-cards--resultados">${lista.length ? lista.map((r) => cardReceita(r, 'data-ir="detalhes"')).join('')
        : mensagemEstado(home.semResultado, q ? 'Tente buscar por outro nome ou ingrediente.' : home.semResultadoTexto)}</div>`, 'tela__corpo--busca tela__corpo--lista')}
    ${lista.length ? rodape(botao(home.verMais, { tipo: 'secundario', attrs: 'data-toast="Mais receitas em breve"' }), { classe: 'rodape-lista' }) : ''}`;
  },
  ligar: (el, ctx) => el.querySelector('[data-reabrir]').addEventListener('click', (e) => { e.stopPropagation(); ctx.substituir('filtro', {}, 'nenhum'); }),
};
