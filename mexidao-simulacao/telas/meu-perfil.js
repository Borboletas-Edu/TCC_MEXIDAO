// Figma: Perfil · P1 · Compacto · Publicações (Meu perfil) · 872:8149
import { perfil as t } from '../dados/conteudo.js';
import { cabecalho, navegacao, avatar, icone, esc } from '../componentes/index.js';
import { status, corpo } from './_base.js';
import { cartaoPerfil, abasPerfil, ligarAbasPerfil } from './_perfil.js';

export default {
  id: 'meu-perfil', nome: 'Meu perfil · Publicações', fluxo: 9, figma: '872:8149', navegacao: true,
  render: () => `${status}${cabecalho(t.cabecalho, { voltar: false, acoes: `<button type="button" class="botao-icone" data-ir="configuracoes" aria-label="Configurações">${icone('engrenagem')}</button>` })}
    ${corpo(`${cartaoPerfil({
      avatarHtml: avatar({ iniciais: t.iniciais }, 72), nome: t.nome, usuario: t.usuario,
      acao: `<button type="button" class="botao botao--compacto botao--principal perfil-card__acao" data-ir="editar-perfil">${icone('lapis', 'botao__icone botao__icone--18')}<span class="botao__rotulo">${esc(t.editar)}</span></button>`,
      nivelTexto: t.nivel, xp: t.xp, pct: t.pct, bio: t.bio,
      conexoes: `<p class="perfil-card__conexoes"><button type="button" data-ir="conexoes" data-params='{"aba":0}'><b>${t.seguidores}</b> seguidores</button>·<button type="button" data-ir="conexoes" data-params='{"aba":1}'><b>${t.seguindo}</b> seguindo</button></p>`,
    })}
      ${abasPerfil()}<div class="perfil__conteudo" data-conteudo></div>`, 'perfil')}
    ${navegacao('perfil')}`,
  ligar: (el, ctx) => ligarAbasPerfil(el, ctx, `data-ir="feed-pessoa" data-params='{"meu":true,"i":{i}}'`, [['Meu perfil · Publicações', '872:8149'], ['Meu perfil · Atividade', '872:7528']], undefined, t.numeros, t.atividades),
};
