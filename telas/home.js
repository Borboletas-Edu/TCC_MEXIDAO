// Figma: Home · Caderno de cozinha · 872:5262
import { app, home, receitas } from '../dados/conteudo.js';
import { busca, cardReceita, navegacao, linkAcao, ondas, img, icone, esc, ilustracao } from '../componentes/index.js';
import { status, corpo } from './_base.js';
const R = (id) => receitas.find((r) => r.id === id);

export default {
  id: 'home', fundo: 'a', nome: 'Home', fluxo: 3, figma: '872:5262', navegacao: true,
  render: () => `${status}
    ${corpo(`<img class="home__logo" src="midia/mascotes/logo.png" alt="${esc(app.nome)}" draggable="false">
      <h1 class="txt-titulo home__titulo">${esc(home.titulo)}</h1>
      <p class="introducao__texto home__apoio">${esc(home.subtitulo)}</p>
      ${busca({ placeholder: home.busca, somenteLeitura: true, attrs: 'data-ir="busca" data-modo="nenhum"', attrsFunil: 'data-ir="filtro" data-modo="nenhum"' })}
      <button type="button" class="banner-home" data-aba="trilha">
        ${img('mascote.bannerFundo', 'banner-home__fundo')}${ilustracao('banner-gato', 'banner-home__gato', 'Gato chef acenando')}
        <b class="banner-home__titulo">${esc(home.bannerTitulo)}</b>
        <span class="banner-home__botao">${esc(home.banner)}${icone('seta')}</span>
      </button>
      <div class="titulo-secao"><h2 class="txt-acao">${esc(home.recomendadas)}</h2>${linkAcao(home.verMais, { attrs: 'data-ir="receitas-recomendadas"', seta: true, primaria: true })}</div>
      <div class="lista-cards">${home.listaHome.map((id) => cardReceita(R(id), 'data-ir="detalhes"')).join('')}</div>`, 'home')}
    ${navegacao('inicio')}`,
};
