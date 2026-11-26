// Figma: Buscar pessoas 872:6439 · Busca com resultados 872:6465 · Nenhum usuário encontrado 872:6492
import { conexoes as t, pessoas, perfis } from '../dados/conteudo.js';
const qtd = (p) => { const n = perfis[p.id]?.posts?.length ?? perfis[p.id]?.postagens ?? 0; return `${n} ${n === 1 ? 'receita postada' : 'receitas postadas'}`; }; // Figma 872:6439
import { cabecalho, botao, busca, pessoaCard, reservado, fmt, br, esc } from '../componentes/index.js';
import { status, corpo } from './_base.js';

const semAcento = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const convite = (titulo, texto) => `<div class="cartao convite-cartao"><b class="txt-rotulo">${esc(titulo)}</b><p class="introducao__texto">${esc(texto)}</p>${botao(t.convite.botao, { tipo: 'verde', attrs: 'data-ir="convidar"' })}</div>`;
const inicial = () => `${convite(t.convite.titulo, t.convite.texto)}
  <p class="txt-rotulo-p buscar__rotulo">${esc(t.sugeridas)}</p>
  <div class="lista-pessoas">${t.listaSugeridas.map((k) => pessoaCard(pessoas[k], qtd(pessoas[k]), { nomeGrande: true })).join('')}</div>`;

export default {
  id: 'buscar-pessoas', nome: 'Buscar pessoas', fluxo: 8, figma: '872:6439',
  render: () => `${status}${cabecalho(t.cabecalho)}
    ${corpo(`<h1 class="txt-titulo">${esc(t.titulo)}</h1>
      <label class="campo buscar__campo"><span class="campo__rotulo" data-rotulo hidden>${esc(t.rotulo)}</span>${busca({ placeholder: t.rotulo, funil: false, id: 'q' })}</label>
      ${botao(t.buscar, { attrs: 'data-buscar' })}
      <div class="buscar__resultado" data-resultado>${inicial()}</div>`, 'buscar')}`,
  ligar: (el, ctx) => {
    const q = el.querySelector('#q'), res = el.querySelector('[data-resultado]'), bt = el.querySelector('[data-buscar]');
    const caixa = el.querySelector('.busca');
    const buscar = () => {
      const bruto = q.value.trim(), v = semAcento(bruto).replace('@', '');
      if (!v) return q.focus();
      q.blur();
      el.querySelector('[data-rotulo]').hidden = false;
      caixa.classList.add('busca--alta');
      const achados = t.buscaveis.map((k) => pessoas[k]).filter((p) => semAcento(p.nome + ' ' + p.usuario).includes(v));
      if (achados.length) {
        bt.querySelector('.botao__rotulo').textContent = t.buscar;
        res.innerHTML = `<p class="txt-rotulo-p buscar__rotulo buscar__rotulo--resultado">${esc(achados.length === 1 ? t.encontrado1 : fmt(t.encontrados, { n: achados.length }))}</p>
          <div class="lista-pessoas entra-fade">${achados.map((p) => pessoaCard(p, qtd(p), { nomeGrande: true })).join('')}</div>`;
        ctx.estado('Busca de usuário · resultados', '872:6465');
      } else {
        bt.querySelector('.botao__rotulo').textContent = t.pesquisarNovamente;
        res.innerHTML = `<div class="nenhum entra-fade">
          <b class="txt-rotulo nenhum__titulo">${esc(t.nenhum.titulo)}</b>
          <p class="txt-apoio nenhum__texto">${br(fmt(t.nenhum.texto, { q: bruto }))}</p>
          ${convite(t.nenhum.amigoTitulo, t.nenhum.amigoTexto)}</div>`;
        ctx.estado('Busca de usuário · nenhum encontrado', '872:6492');
      }
    };
    bt.addEventListener('click', buscar);
    q.addEventListener('keydown', (e) => e.key === 'Enter' && buscar());
  },
};
