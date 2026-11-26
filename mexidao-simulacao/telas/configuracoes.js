// Figma: Configurações 872:6740 · Confirmar limpeza de cache 872:7071 · Após limpar cache 872:7170 · Confirmar saída 872:7259
import { configuracoes as t } from '../dados/conteudo.js';
import { navegacao, botao, tituloGrupo, acesso, lista, avisoSucesso, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';

const confirmacao = (ic, c, perigo) => `<div class="confirmacao"><span class="icone-circular ${perigo ? 'icone-circular--perigo' : ''}">${icone(ic)}</span>
  <h2 class="txt-secao">${esc(c.titulo)}</h2><p class="introducao__texto">${esc(c.texto)}</p></div>`;

export default {
  id: 'configuracoes', nome: 'Configurações', fluxo: 9, figma: '872:6740', navegacao: true,
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<div class="configuracoes__aviso" data-aviso></div>
      ${t.grupos.map(([g, itens]) => tituloGrupo(g) + lista(itens.map(([n, ic, alvo]) => acesso(n, ic, { attrs: `data-item="${alvo}"`, perigo: alvo === 'sair', seta: alvo !== 'sair' })).join(''))).join('')}`, 'configuracoes')}
    ${navegacao('perfil')}`,
  ligar: (el, ctx) => {
    const base = () => (el.querySelector('[data-aviso] .aviso') ? ctx.estado('Configurações · Após limpar cache', '872:7170') : ctx.estado('Configurações', '872:6740'));
    const confirmar = (ic, c, perigo, figma, aoSim) => {
      ctx.estado(`Configurações · ${c.titulo}`, figma);
      ctx.painel(confirmacao(ic, c, perigo), {
        alca: true, fechar: false, aoFechar: base,
        rodape: `<div class="confirmacao__acoes">${botao(c.confirmar, { attrs: 'data-sim' })}${botao(c.cancelar, { tipo: 'secundario', attrs: 'data-nao' })}</div>`,
        ligar: (p, fechar) => { p.querySelector('[data-nao]').addEventListener('click', fechar); p.querySelector('[data-sim]').addEventListener('click', () => aoSim(fechar)); },
      });
    };
    el.querySelector('.configuracoes').addEventListener('click', (e) => {
      const b = e.target.closest('[data-item]'); if (!b) return;
      const alvo = b.dataset.item;
      if (alvo === 'limpar-cache') return confirmar('lixeira', t.cache, false, '872:7071', (fechar) => {
        el.querySelector('[data-aviso]').innerHTML = `<div class="entra-fade">${avisoSucesso(t.cache.feito)}</div>`; ctx.som('toque'); fechar();
      });
      if (alvo === 'sair') return confirmar('sair', t.sair, true, '872:7259', () => ctx.raiz('inicial', {}, 'fade'));
      ctx.ir(alvo);
    });
  },
};
