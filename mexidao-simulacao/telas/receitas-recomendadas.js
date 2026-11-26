// Figma: Home · Receitas recomendadas · 872:6231
import { home, receitas } from '../dados/conteudo.js';
import { cardReceita, botao } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const R = (id) => receitas.find((r) => r.id === id);

export default {
  id: 'receitas-recomendadas', nome: 'Receitas recomendadas', fluxo: 3, figma: '872:6231',
  render: () => `${topo(home.recomendadas)}
    ${corpo(`<div class="lista-cards">${home.listaRecomendadas.map((id) => cardReceita(R(id), 'data-ir="detalhes"')).join('')}</div>`, 'tela__corpo--lista')}
    ${rodape(botao(home.verMais, { tipo: 'secundario', attrs: 'data-toast="Mais receitas em breve"' }), { classe: 'rodape-lista' })}`,
};
