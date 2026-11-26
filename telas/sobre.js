// Figma: Configurações · Sobre o aplicativo · 872:6936 — ícone do Mexidão (1126:7437)
import { configuracoes } from '../dados/conteudo.js';
import { reservado, acesso, lista, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
const t = configuracoes.sobre;

export default {
  id: 'sobre', nome: 'Sobre o aplicativo', fluxo: 9, figma: '872:6936',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<h1 class="txt-titulo">${esc(t.titulo)}</h1>
      <div class="cartao sobre__apresentacao"><img class="sobre__mascote" src="midia/mascotes/logo-m.png" alt="" draggable="false"><b class="txt-cabecalho cor-primaria">${esc(t.app)}</b><span class="tag tag--versao">${esc(t.versao)}</span></div>
      <div class="cartao sobre__resumo"><span class="ajuda-cartao__icone ajuda-cartao__icone--36">${icone('livro')}</span><div><b class="txt-rotulo">${esc(t.cartaoTitulo)}</b><p class="txt-apoio">${esc(t.cartaoTexto)}</p></div></div>
      ${lista(acesso('Termos de uso', 'documento', { attrs: 'data-ir="termos"', alto: true }) + acesso('Política de privacidade', 'escudo', { attrs: 'data-ir="politica"', alto: true }))}`, 'sobre')}`,
};
