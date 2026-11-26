// Figma: Feed · Criar postagem · vazia 872:6337 · preenchida 872:6362
import { comunidade, comoFicou as cf } from '../dados/conteudo.js';
import { botao, avatar, adicionarFoto, ligarAdicionarFoto, campoMultilinha, tipoBotao, src, br, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = comunidade.nova;

export default {
  id: 'nova-postagem', nome: 'Nova postagem · vazia', fluxo: 7, figma: '872:6337',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<h1 class="txt-titulo">${br(t.titulo)}</h1>
      <div class="como-ficou__usuario">${avatar(cf.usuario)}<div><b class="txt-rotulo">${esc(cf.usuario.nome)}</b><p class="txt-pequeno">${esc(cf.publicarComunidade)}</p></div></div>
      ${adicionarFoto({ titulo: cf.foto, texto: cf.fotoTexto, trocar: cf.trocar })}
      ${campoMultilinha({ rotulo: cf.legenda, placeholder: cf.ph, ajuda: cf.ajudaSemFoto, id: 'legenda' })}`, 'como-ficou nova-postagem')}
    ${rodape(botao(cf.publicar, { tipo: 'desabilitado', attrs: 'data-publicar' }), { simples: true })}`,
  ligar: (el, ctx) => {
    const bt = el.querySelector('[data-publicar]');
    ligarAdicionarFoto(el.querySelector('[data-adicionar-foto]'), src('receita.' + (t.foto || 'moqueca')), (url, exemplo) => {
      const tx = el.querySelector('#legenda'); if (exemplo && !tx.value) tx.value = t.legendaExemplo;
      tipoBotao(bt, 'principal');
      el.querySelector('[data-ajuda]').textContent = cf.ajudaComFoto;
      ctx.estado('Nova postagem · preenchida', '872:6362');
    });
    bt.addEventListener('click', () => !bt.disabled && ctx.raiz('comunidade', { publicado: true }, 'fade'));
  },
};
