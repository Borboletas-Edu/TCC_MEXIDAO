// Figma: Comunidade - Feed perfil pessoa · 872:6597
// Feed das publicações de uma pessoa (params.p = id em dados/conteudo.js → perfis), rolado até a foto tocada (params.i).
// Também abre as próprias publicações (Meu perfil → foto da galeria, params.meu).
import { perfil, pessoas, perfis } from '../dados/conteudo.js';
import { midia, galeriaPerfil } from '../dados/midia.js';
import { navegacao, postagem } from '../componentes/index.js';
import { topo, corpo } from './_base.js';

const minhas = () => galeriaPerfil.map((m, i) => {
  const [quando, texto, curtidas, comentarios] = perfil.feed.textos[i];
  return { nome: perfil.feed.nomeCompleto, meta: `${perfil.usuario} · ${quando}`, autorPessoa: { iniciais: perfil.iniciais }, midia: m, titulo: midia.receita[m]?.descricao?.replace(/ \(.*\)$/, ''), texto, curtidas, comentarios };
});
const daPessoa = (k) => perfis[k].posts.map(([m, quando, titulo, texto, curtidas, comentarios]) => ({ nome: pessoas[k].nome, meta: `${quando} · Comunidade`, autorPessoa: pessoas[k], midia: m, titulo, texto, curtidas, comentarios }));
const chave = (ctx) => (perfis[ctx.params.p]?.posts ? ctx.params.p : 'erika');

export default {
  id: 'feed-pessoa', nome: 'Feed da pessoa', fluxo: 7, figma: '872:6597', navegacao: true,
  render: (ctx) => {
    const meu = !!ctx.params.meu, k = chave(ctx);
    const titulo = meu ? perfil.feed.cabecalho : 'Feed de ' + perfis[k].primeiroNome;
    const posts = meu ? minhas() : daPessoa(k);
    return `${topo(titulo)}
    ${corpo(`<div class="lista-postagens">${posts.map((p) => postagem(p, { verPerfil: 'data-voltar', fotoBaixa: true })).join('')}</div>`, 'comunidade comunidade--feed')}
    ${navegacao(meu ? 'perfil' : 'comunidade')}`;
  },
  ligar: (el, ctx) => {
    if (ctx.params.meu) ctx.estado('Minhas publicações · feed', '872:6597');
    const alvo = el.querySelectorAll('.postagem')[ctx.params.i || 0];
    const c = el.querySelector('.tela__corpo');
    if (alvo && c && ctx.params.i) requestAnimationFrame(() => { c.scrollTop = alvo.offsetTop - 12; });
  },
};
