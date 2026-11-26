// Figma: Detalhes · Ingredientes 872:5464 · Equipamentos 872:5507 · Informações 872:5542
import { detalhes as t, avaliacoes } from '../dados/conteudo.js';
import { botao, linkTexto, linkAcao, img, icone, abas, ligarAbas, itemLista, listaItens, contribuicao, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const figmas = ['872:5464', '872:5507', '872:5542'];

// Ajusta quantidades simples quando muda o número de porções
const fr = { '½': 0.5, '¼': 0.25, '¾': 0.75 };
function escalar(q, f) {
  const m = q.match(/^([\d,]+|[½¼¾])\s*(.*)$/); if (!m || f === 1) return q;
  const n = (fr[m[1]] ?? parseFloat(m[1].replace(',', '.'))) * f;
  const txt = n === 0.5 ? '½' : n === 0.25 ? '¼' : n === 1.5 ? '1 ½' : String(+n.toFixed(1)).replace('.', ',');
  return `${txt} ${m[2]}`;
}

export default {
  id: 'detalhes', nome: 'Detalhes · Ingredientes', fluxo: 4, figma: figmas[0],
  render: () => `${topo(t.cabecalho)}
    ${corpo(`${img('receita.arrozBanner', 'detalhes__foto')}
      <h1 class="txt-cabecalho centro detalhes__nome">${esc(t.nome)}</h1>
      <p class="introducao__texto centro detalhes__resumo">${esc(t.resumo)}</p>
      <div class="ajuste-porcoes detalhes__porcoes"><button type="button" class="ajuste-porcoes__botao" data-menos aria-label="Menos porções">${icone('menos')}</button><b class="txt-rotulo" data-porcoes>${t.porcoes} porções</b><button type="button" class="ajuste-porcoes__botao" data-mais aria-label="Mais porções">${icone('mais')}</button></div>
      ${abas(t.abas, 0, { attrs: 'data-abas' })}
      <div class="detalhes__conteudo" data-conteudo></div>`, 'detalhes')}
    ${rodape(botao(t.botao, { attrs: 'data-ir="escolha-adaptacao"' }) + linkTexto(t.verCompleta, 'data-ir="receita-completa"'), { classe: 'detalhes__rodape' })}`,
  ligar: (el, ctx) => {
    let aba = 0, porcoes = t.porcoes;
    const marcados = new Set();
    const conteudo = el.querySelector('[data-conteudo]');
    const desenhar = () => {
      const f = porcoes / t.porcoes;
      conteudo.innerHTML = aba === 0 ? listaItens(t.ingredientes.map(([n, q]) => itemLista(n, escalar(q, f), { selecao: true, marcado: marcados.has(n) })).join(''))
        : aba === 1 ? listaItens(t.equipamentos.map(([n, q]) => itemLista(n, q)).join(''))
        : `<p class="txt-corpo detalhes__descricao">${esc(t.descricao)}</p>
           <div class="faixa-info">${icone('prancheta')}<b>${esc(t.nutricaoTitulo)}</b></div>
           <div class="detalhes__tabela">${listaItens(t.nutricao.map(([n, q]) => itemLista(n, q)).join(''))}</div>
           <button type="button" class="faixa-info faixa-info--acao" data-ir="avaliacoes">${icone('estrela')}<b>${esc(t.nota)}</b><b>${esc(t.avaliacoesRotulo)}</b><span class="link-acao link-acao--primaria">${esc(t.verTodas)}${icone('seta', 'link-acao__icone')}</span></button>
           <div class="detalhes__avaliacoes">${avaliacoes.lista.slice(0, 2).map((a) => contribuicao(a, { simples: true })).join('')}</div>`;
      ctx.estado('Detalhes · ' + t.abas[aba], figmas[aba]);
    };
    ligarAbas(el.querySelector('[data-abas]'), (i) => { aba = i; desenhar(); });
    conteudo.addEventListener('mudou', (e) => { const n = e.target.querySelector('.item-lista__nome')?.textContent; if (n) marcados.has(n) ? marcados.delete(n) : marcados.add(n); });
    const atualizar = () => { el.querySelector('[data-porcoes]').textContent = `${porcoes} ${porcoes === 1 ? 'porção' : 'porções'}`; desenhar(); };
    el.querySelector('[data-menos]').addEventListener('click', () => { if (porcoes > 1) { porcoes--; atualizar(); } });
    el.querySelector('[data-mais]').addEventListener('click', () => { if (porcoes < 12) { porcoes++; atualizar(); } });
    desenhar();
  },
};
