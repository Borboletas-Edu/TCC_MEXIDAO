// Figma: Postagem e comentários ("Frame 7") · 872:8023 · barra de envio 874:8907
// Os comentários abrem num Painel inferior sobre a postagem (como no Figma).
import { comunidade as t } from '../dados/conteudo.js';
import { cabecalho, postagem, comentario, icone, esc } from '../componentes/index.js';
import { status, corpo } from './_base.js';
import { dadosPostagem } from './_postagens.js';

const bloco = (c) => `<div class="comentario-bloco">${comentario(c, t.autora)}${c.resposta ? comentario({ ...c.resposta, resposta: true, autora: true, pessoa: { midia: 'erika' } }, t.autora) : ''}</div>`;

export default {
  id: 'postagem', nome: 'Postagem e comentários', fluxo: 7, figma: '872:8023',
  render: () => `${status}${cabecalho(t.feedPessoa.cabecalho)}
    ${corpo(postagem(dadosPostagem(t.feedPessoa.posts[0]), { abrirComentarios: '' }), 'postagem__fundo')}
    <div class="camada camada--comentarios">
      <div class="sobreposicao" data-voltar></div>
      <section class="painel-inferior comentarios">
        <div class="painel-inferior__topo"></div>
        <div class="painel-inferior__conteudo comentarios__lista" data-lista>${t.comentarios.map(bloco).join('')}</div>
        <div class="comentarios__envio barra-envio"><label class="barra-envio__campo"><input class="barra-envio__valor" type="text" placeholder="${esc(t.comentarPh)}" data-texto></label><button type="button" class="barra-envio__botao barra-envio__botao--enviar" data-enviar aria-label="Enviar">${icone('enviar')}</button></div>
      </section>
    </div>`,
  ligar: (el, ctx) => {
    const inp = el.querySelector('[data-texto]'), lista = el.querySelector('[data-lista]');
    const enviar = () => {
      const v = inp.value.trim(); if (!v) return;
      lista.insertAdjacentHTML('beforeend', bloco({ iniciais: 'MC', nome: 'Mariana Costa', quando: 'Agora', texto: v, semResponder: true }));
      inp.value = ''; ctx.som('enviar'); lista.scrollTo({ top: lista.scrollHeight, behavior: 'smooth' });
    };
    el.querySelector('[data-enviar]').addEventListener('click', enviar);
    inp.addEventListener('keydown', (e) => e.key === 'Enter' && enviar());
    lista.addEventListener('click', (e) => { const r = e.target.closest('[data-responder]'); if (r) { inp.value = '@' + r.dataset.responder.split(' ')[0] + ' '; inp.focus(); } });
  },
};
