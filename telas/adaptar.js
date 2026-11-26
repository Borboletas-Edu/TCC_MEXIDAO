// Figma: Preferências e substituições · 872:5620 · 1º item aberto 872:5636 · 1ª troca escolhida 872:5659
//        · 2º item aberto 996:6229 · duas trocas escolhidas 996:6312
// Dá para trocar mais de um ingrediente. O cartão de um item com troca mostra "Ingrediente > Substituição".
// Tocar num item marcado que está fechado reabre as opções dele; tocar de novo no item aberto desmarca.
// Botão: sem itens → "Iniciar preparo"; algum item sem troca → desabilitado; 1 troca → "Aplicar e iniciar preparo";
//        2 ou mais → "Aplicar {n} trocas e iniciar preparo".
import { adaptacao } from '../dados/conteudo.js';
import { botao, opcao, chip, introducao, tipoBotao, fmt, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = adaptacao.ajuste;

const substituicoes = (ing, sub) => `<div class="substituicoes conteudo-avanca">
  <p class="substituicoes__titulo">${esc(t.escolha)}</p>
  <div class="grupo-chips grupo-chips--grade3">${t.substituicoes[ing].map((s) => chip(s, { selecionado: s === sub, attrs: `data-sub="${esc(s)}"` })).join('')}</div></div>`;

export default {
  id: 'adaptar', nome: 'Preferências e substituições', fluxo: 4, figma: '872:5620',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`${introducao({ titulo: t.titulo, texto: t.subtitulo })}<div class="adaptar__lista" data-lista></div>`, 'adaptar')}
    ${rodape(botao(t.iniciar, { attrs: 'data-iniciar' }), { simples: true })}`,
  ligar: (el, ctx) => {
    const trocas = new Map(); // ingrediente → substituição (null enquanto não escolheu)
    let aberto = null;
    const bt = el.querySelector('[data-iniciar]');
    const desenhar = () => {
      el.querySelector('[data-lista]').innerHTML = t.ingredientes.map((i) => {
        const marcado = trocas.has(i), sub = trocas.get(i);
        return opcao(sub ? `${i} > ${sub}` : i, { selecionada: marcado, attrs: `data-ing="${esc(i)}"` }) + (i === aberto ? substituicoes(i, sub) : '');
      }).join('');
      const n = trocas.size, faltando = [...trocas.values()].some((s) => !s);
      bt.querySelector('.botao__rotulo').textContent = !n ? t.iniciar : n > 1 && !faltando ? fmt(t.aplicarVarias, { n }) : t.aplicar;
      tipoBotao(bt, n && faltando ? 'desabilitado' : 'principal');
      const escolhidas = [...trocas.values()].filter(Boolean).length;
      ctx.estado(
        !n ? 'Preferências e substituições' : n === 1 && !escolhidas ? 'Preferências e substituições · substituições abertas'
          : n === 1 ? 'Preferências e substituições · substituição escolhida' : escolhidas < n ? 'Preferências e substituições · 2º item aberto' : 'Preferências e substituições · duas trocas escolhidas',
        !n ? '872:5620' : n === 1 && !escolhidas ? '872:5636' : n === 1 ? '872:5659' : escolhidas < n ? '996:6229' : '996:6312');
    };
    el.querySelector('[data-lista]').addEventListener('click', (e) => {
      const o = e.target.closest('[data-ing]');
      if (o) {
        const i = o.dataset.ing;
        if (!trocas.has(i)) { trocas.set(i, null); aberto = i; }
        else if (aberto !== i) aberto = i;
        else { trocas.delete(i); aberto = null; }
        return desenhar();
      }
      const s = e.target.closest('[data-sub]');
      if (s && aberto) { trocas.set(aberto, trocas.get(aberto) === s.dataset.sub ? null : s.dataset.sub); desenhar(); el.querySelector('.substituicoes')?.classList.remove('conteudo-avanca'); }
    });
    bt.addEventListener('click', () => ctx.ir('carregamento', { substituicoes: [...trocas.entries()].filter(([, s]) => s) }));
    desenhar();
  },
};
