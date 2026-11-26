// Figma: Conexões · aba Seguidores 872:8213 · aba Seguindo 872:8287
import { conexoes } from '../dados/conteudo.js';
import { navegacao, abas, ligarAbas, busca, pessoaLinha } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
const t = conexoes.lista;

export default {
  id: 'conexoes', nome: 'Conexões · Seguidores', fluxo: 8, figma: '872:8213', navegacao: true,
  render: (ctx) => `${topo(t.cabecalho)}
    ${corpo(`${abas(t.abas, ctx.params.aba || 0, { soltas: true, attrs: 'data-abas' })}
      ${busca({ placeholder: t.busca, funil: false, id: 'filtro-conexoes' })}
      <div class="lista conexoes__lista" data-lista></div>`, 'conexoes')}
    ${navegacao('perfil')}`,
  ligar: (el, ctx) => {
    let aba = ctx.params.aba || 0;
    const lista = el.querySelector('[data-lista]'), f = el.querySelector('#filtro-conexoes');
    const filtrar = () => lista.querySelectorAll('[data-nome]').forEach((l) => { l.hidden = !l.dataset.nome.includes(f.value.trim().toLowerCase()); });
    const desenhar = () => {
      lista.innerHTML = (aba === 0 ? t.seguidores : t.seguindo).map(pessoaLinha).join('');
      ctx.estado(aba === 0 ? 'Conexões · aba Seguidores' : 'Conexões · aba Seguindo', aba === 0 ? '872:8213' : '872:8287');
      filtrar();
    };
    ligarAbas(el.querySelector('[data-abas]'), (i) => { aba = i; desenhar(); });
    f.addEventListener('input', filtrar);
    desenhar();
  },
};
