// Figma: Convidar usuário 872:6514 · Pop-up de link copiado 872:6552 — ilustração dos mascotes cozinhando
import { conexoes } from '../dados/conteudo.js';
import { botao, ilustracao, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
const t = conexoes.convidar;

export default {
  id: 'convidar', nome: 'Convidar amigos', fluxo: 8, figma: '872:6514',
  render: () => `${topo(conexoes.cabecalho)}
    ${corpo(`${ilustracao('mascotes-cozinhando', 'convidar__ilustracao', 'Gato e cachorro batendo massa')}
      <h1 class="txt-titulo convidar__titulo">${esc(t.titulo)}</h1>
      <p class="introducao__texto convidar__texto">${esc(t.texto)}</p>
      <div class="campo convidar__link"><span class="campo__rotulo">${esc(t.rotulo)}</span><span class="campo__entrada campo__entrada--cinza"><span class="campo__valor">${esc(t.link)}</span></span></div>
      ${botao(t.copiar, { tipo: 'secundario', attrs: 'data-copiar' })}
      <div data-copiado></div>
      <div class="cartao compartilhar"><b class="txt-rotulo">${esc(t.compartilhar)}</b>
        <div class="compartilhar__canais">${t.canais.map(([n, ic]) => `<button type="button" class="compartilhar__canal" data-toast="${esc(t.simulado)}"><span class="compartilhar__icone">${icone(ic)}</span><span class="txt-pequeno">${esc(n)}</span></button>`).join('')}</div>
        ${botao(t.mais, { tipo: 'verde', attrs: `data-toast="${esc(t.simulado)}"` })}</div>`, 'convidar')}`,
  ligar: (el, ctx) => el.querySelector('[data-copiar]').addEventListener('click', (e) => {
    try { navigator.clipboard?.writeText('https://' + t.link).catch(() => {}); } catch {}
    e.currentTarget.querySelector('.botao__rotulo').textContent = t.copiarNovamente;
    el.querySelector('[data-copiado]').innerHTML = `<div class="cartao cartao--sem-borda link-copiado entra-fade"><span class="link-copiado__icone">${icone('check')}</span><div><b class="txt-rotulo cor-verde">${esc(t.copiadoTitulo)}</b><p class="txt-apoio">${esc(t.copiadoTexto)}</p></div></div>`;
    ctx.som('toque'); ctx.estado('Convidar · link copiado', '872:6552');
  }),
};
