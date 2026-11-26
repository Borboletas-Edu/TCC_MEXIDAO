// Figma: Perfil de Erika · Publicações 872:7476 · Atividade 872:7528
//        Perfil de Juliane Martins 1025:6327 · Perfil de Juliane Souza 1025:6401
// Cada pessoa abre o próprio perfil (params.p = id em dados/conteudo.js → perfis). Sem parâmetro, abre a Erika.
import { comunidade, pessoas, perfis } from '../dados/conteudo.js';
import { navegacao, avatarNivel, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
import { cartaoPerfil, abasPerfil, ligarAbasPerfil } from './_perfil.js';
const t = comunidade.perfilErika;
const botaoSeguir = (seguindo) => `<button type="button" class="botao botao--compacto ${seguindo ? 'botao--secundario' : 'botao--principal'} perfil-card__acao" data-seguir-perfil>${icone(seguindo ? 'check' : 'mais', 'botao__icone')}<span class="botao__rotulo">${esc(seguindo ? t.seguindo : t.seguir)}</span></button>`;
const chave = (ctx) => (perfis[ctx.params.p]?.posts ? ctx.params.p : 'erika');

export default {
  id: 'perfil-pessoa', nome: 'Perfil · Publicações', fluxo: 7, figma: '872:7476', navegacao: true,
  render: (ctx) => { const k = chave(ctx), p = pessoas[k], d = perfis[k]; return `${topo('Perfil de ' + d.primeiroNome)}
    ${corpo(`${cartaoPerfil({ avatarHtml: avatarNivel(p, d.nivel), nome: p.nome, usuario: p.usuario, acao: botaoSeguir(false), nivelTexto: d.nivelTexto, xp: d.xp, pct: d.pct, bio: d.bio })}
      ${abasPerfil()}<div class="perfil__conteudo" data-conteudo></div>`, 'perfil')}
    ${navegacao('comunidade')}`; },
  ligar: (el, ctx) => {
    const k = chave(ctx), d = perfis[k];
    ligarAbasPerfil(el, ctx, `data-ir="feed-pessoa" data-params='{"p":"${k}","i":{i}}'`, [['Perfil de ' + pessoas[k].nome + ' · Publicações', d.figma], ['Perfil · Atividade', '872:7528']], d.posts.map((x) => x[0]));
    let seguindo = false;
    el.querySelector('.perfil-card').addEventListener('click', (e) => {
      const b = e.target.closest('[data-seguir-perfil]'); if (!b) return;
      seguindo = !seguindo; b.outerHTML = botaoSeguir(seguindo);
    });
  },
};
