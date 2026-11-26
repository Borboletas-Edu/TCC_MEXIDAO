// Figma: Feed · Avaliação (Como ficou? vazia) 872:6267 · preenchida 872:6302
import { comoFicou as t, avaliacoes } from '../dados/conteudo.js';
import { botao, linkTexto, estrelas, ligarEstrelas, avatar, adicionarFoto, ligarAdicionarFoto, campoMultilinha, tipoBotao, src, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';

export default {
  id: 'como-ficou', nome: 'Como ficou? · vazia', fluxo: 5, figma: '872:6267',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<h1 class="txt-secao">${esc(t.titulo)}</h1>
      <p class="txt-pequeno cor-texto como-ficou__receita"><b>${esc(t.sua)}</b> · ${esc(t.receita)}</p>
      <div class="como-ficou__estrelas" data-estrelas>${estrelas(t.estrelas, { interativa: true })}</div>
      <p class="txt-apoio como-ficou__nota" data-nota>${esc(avaliacoes.adicionarTela.notaTexto[t.estrelas])}</p>
      <div class="como-ficou__usuario">${avatar(t.usuario)}<div class="flex1"><b class="txt-rotulo">${esc(t.usuario.nome)}</b><p class="txt-pequeno">${esc(t.publicarComunidade)}</p></div></div>
      ${adicionarFoto({ titulo: t.foto, texto: t.fotoTexto, trocar: t.trocar })}
      ${campoMultilinha({ rotulo: t.registro, placeholder: t.ph, ajuda: t.ajudaSemFoto, id: 'legenda' })}`, 'como-ficou')}
    ${rodape(botao(t.publicar, { tipo: 'desabilitado', attrs: 'data-publicar' }) + linkTexto(t.depois, 'data-depois'))}`,
  ligar: (el, ctx) => {
    // A foto é obrigatória para publicar na comunidade (botão Desabilitado → Verde)
    const bt = el.querySelector('[data-publicar]');
    let temFoto = false;
    const atualizar = () => {
      tipoBotao(bt, temFoto ? 'verde' : 'desabilitado');
      el.querySelector('[data-ajuda]').textContent = temFoto ? t.ajudaComFoto : t.ajudaSemFoto;
      el.querySelector('[data-rotulo]').textContent = temFoto ? t.legenda : t.registro;
      ctx.estado(temFoto ? 'Como ficou? · preenchida' : 'Como ficou? · vazia', temFoto ? '872:6302' : '872:6267');
    };
    ligarAdicionarFoto(el.querySelector('[data-adicionar-foto]'), src('receita.arrozResultado'), (url, exemplo) => {
      temFoto = true;
      const tx = el.querySelector('#legenda'); if (exemplo && !tx.value) tx.value = t.legendaExemplo;
      atualizar();
    });
    ligarEstrelas(el.querySelector('[data-estrelas]'), (n) => { el.querySelector('[data-nota]').textContent = avaliacoes.adicionarTela.notaTexto[n]; });
    bt.addEventListener('click', () => {
      if (!bt.disabled) ctx.raiz('comunidade', { publicado: true }, 'avancar');
    });
    el.querySelector('[data-depois]').addEventListener('click', () => ctx.raiz('home', {}, 'fade'));
    atualizar();
  },
};
