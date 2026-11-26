// Figma: Comunidade · Feed 872:6386 · Feed após publicar postagem 872:6647 (sem "Ver postagem", removido do Figma)
import { comunidade as t } from '../dados/conteudo.js';
import { cabecalho, navegacao, busca, postagem, avisoSucesso, icone } from '../componentes/index.js';
import { status, corpo } from './_base.js';
import { dadosPostagem } from './_postagens.js';

export default {
  id: 'comunidade', fundo: 'c', nome: 'Comunidade · Feed', fluxo: 7, figma: '872:6386', navegacao: true,
  render: (ctx) => `${status}${cabecalho(t.titulo, { voltar: false })}
    ${corpo(`<div class="comunidade__acoes">${busca({ placeholder: t.buscar, funil: false, somenteLeitura: true, attrs: 'data-ir="buscar-pessoas"' })}
        <button type="button" class="botao-criar" data-ir="nova-postagem" aria-label="Nova postagem">${icone('mais')}</button></div>
      ${ctx.params.publicado ? `<div class="comunidade__aviso entra-fade">${avisoSucesso(t.publicada)}</div>` : ''}
      <div class="lista-postagens">
        ${ctx.params.publicado ? postagem(dadosPostagem(t.minhaPostagem), { verPerfil: 'data-aba="perfil"', fotoBaixa: true }) : ''}
        ${t.feed.map((p) => postagem(dadosPostagem(ctx.params.publicado && p.midiaApos ? { ...p, midia: p.midiaApos, texto: p.textoApos || p.texto } : p))).join('')}
      </div>`, 'comunidade')}
    ${navegacao('comunidade')}`,
  ligar: (el, ctx) => {
    if (ctx.params.publicado) { ctx.estado('Feed · Após publicar postagem', '872:6647'); ctx.depois(() => { ctx.confete(); ctx.som('celebrar'); }, 300); }
  },
};
