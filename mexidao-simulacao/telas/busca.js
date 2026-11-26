// Figma: Home de receitas (busca com sugestões) · 872:5336 — cabeçalho "Buscar receitas" com voltar; a lupa também volta
import { home, receitas } from '../dados/conteudo.js';
import { busca, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
const normalizar = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const todas = [...new Set([...home.sugestoesBusca, ...receitas.map((r) => r.nome)])];
const item = (n) => `<button type="button" class="item-lista item-lista--busca" data-ir="detalhes">${icone('relogio', 'item-lista__icone')}<span class="item-lista__nome">${esc(n)}</span></button>`;

export default {
  id: 'busca', fundo: 'c', nome: 'Home de receitas · busca', fluxo: 3, figma: '872:5336',
  render: () => `${topo(home.buscarTitulo)}
    ${corpo(`${busca({ placeholder: home.busca, id: 'q', attrsFunil: 'data-ir="filtro" data-modo="nenhum"' })}
      <div class="lista-busca" data-lista>${home.sugestoesBusca.map(item).join('')}</div>`, 'tela__corpo--busca')}`,
  ligar: (el, ctx) => {
    const q = el.querySelector('#q'), lista = el.querySelector('[data-lista]');
    const lupa = el.querySelector('.busca__lupa');
    lupa.setAttribute('data-voltar', ''); lupa.style.cursor = 'pointer';
    setTimeout(() => q.focus(), 60);
    q.addEventListener('input', () => {
      const v = normalizar(q.value.trim());
      const r = v ? todas.filter((n) => normalizar(n).includes(v)) : home.sugestoesBusca;
      lista.innerHTML = r.length ? r.map(item).join('') : `<p class="txt-apoio mt16">${esc(home.semResultado)}</p>`;
    });
    // Enter: busca o termo e abre os resultados
    q.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const termo = q.value.trim();
      if (!termo) return;
      q.blur();
      ctx.ir('resultados', { q: termo }, 'nenhum');
    });
  },
};
