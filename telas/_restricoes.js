// Painel de restrições alimentares (Figma 872:5134 · pesquisando 872:5175).
// Usado no cadastro (Dados e preferências) e em Configurações › Restrições alimentares.
import { onboarding } from '../dados/conteudo.js';
import { busca, chip, botao, teclado, ligarTeclado, esc } from '../componentes/index.js';
const t = onboarding.dados.painelRestricoes;
// Busca sem diferenciar acentos e maiúsculas ("glu" encontra "Glúten")
const normalizar = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

// selecionadas: lista inicial (vazia = nada pré-selecionado) · aoSalvar(lista)
export function abrirPainelRestricoes(ctx, selecionadas, { aoSalvar, aoPesquisar, aoFechar } = {}) {
  const chips = t.todas.map((r) => chip(r, { selecionado: selecionadas.includes(r), alto: true, attrs: `data-chip data-r="${esc(r)}"` })).join('');
  return ctx.painel(`${busca({ placeholder: t.busca, funil: false, painel: true, id: 'busca-restricao' })}
      <div class="grupo-chips painel-restricoes__chips" data-lista-restricoes>${chips}</div>
      <p class="txt-apoio painel-restricoes__vazio" data-vazio hidden>Nenhuma restrição encontrada</p>`, {
    classe: 'painel-inferior--fixo painel-restricoes',
    rodape: botao(t.botao, { attrs: 'data-salvar-restricoes' }),
    aoFechar,
    ligar: (p, fechar) => {
      const camada = p.parentElement;
      const inp = p.querySelector('#busca-restricao');
      const filtrar = () => {
        const q = normalizar(inp.value.trim());
        let n = 0;
        p.querySelectorAll('[data-r]').forEach((c) => { const ok = normalizar(c.dataset.r).includes(q); c.hidden = !ok; n += ok; });
        p.querySelector('[data-vazio]').hidden = n > 0;
      };
      inp.addEventListener('input', filtrar);
      const tec = document.createElement('div');
      tec.className = 'camada__teclado'; tec.hidden = true; tec.innerHTML = teclado('buscar');
      camada.appendChild(tec);
      const fecharTeclado = () => { tec.hidden = true; p.classList.remove('painel-inferior--teclado'); inp.blur(); };
      inp.addEventListener('focus', () => { tec.hidden = false; p.classList.add('painel-inferior--teclado'); aoPesquisar?.(); });
      ligarTeclado(tec, inp, fecharTeclado);
      p.querySelector('.painel-inferior__conteudo').addEventListener('pointerdown', (e) => { if (!e.target.closest('.busca')) fecharTeclado(); });
      p.querySelector('[data-salvar-restricoes]').addEventListener('click', () => {
        aoSalvar?.([...p.querySelectorAll('[data-r].chip--selecionado')].map((c) => c.dataset.r));
        fechar();
      });
    },
  });
}
