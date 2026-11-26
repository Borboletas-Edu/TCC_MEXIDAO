// Figma: Escolha de adaptação · 872:5595
import { adaptacao } from '../dados/conteudo.js';
import { botao, introducao, ilustracao } from '../componentes/index.js';
import { topo, rodape } from './_base.js';
const t = adaptacao.escolha;

export default {
  id: 'escolha-adaptacao', nome: 'Escolha de adaptação', fluxo: 4, figma: '872:5595', classe: 'tela--escolha',
  render: () => `${topo(t.cabecalho)}
    <div class="escolha__destaque"><span class="escolha__circulo"></span>${ilustracao('cachorro', 'escolha__mascote', 'Cachorro segurando temperos')}</div>
    <div class="tela__corpo escolha__folha">${introducao({ titulo: t.titulo, texto: t.texto, grande: true })}</div>
    ${rodape(botao(t.nao, { tipo: 'secundario', attrs: 'data-ir="carregamento"' }) + botao(t.sim, { attrs: 'data-ir="adaptar"' }), { simples: true, classe: 'g10' })}`,
};
