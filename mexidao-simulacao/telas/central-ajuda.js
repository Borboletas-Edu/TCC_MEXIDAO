// Figma: Configurações · Central de ajuda · 872:6888
import { configuracoes } from '../dados/conteudo.js';
import { botao, introducao, ajudaIA, avisoNota, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
const t = configuracoes.ajuda;

export default {
  id: 'central-ajuda', nome: 'Central de ajuda', fluxo: 9, figma: '872:6888',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`${introducao({ titulo: t.titulo, texto: t.texto, grande: true })}
      <div class="cartao cartao--destaque ajuda-cartao"><div class="ajuda-cartao__topo">${ajudaIA('tabindex="-1"', false)}<b class="txt-cabecalho">${esc(t.ia)}</b></div><p class="txt-apoio cor-texto">${esc(t.iaTexto)}</p>${botao(t.iaBotao, { attrs: 'data-ir="ajuda-ia" data-modo="baixo"' })}</div>
      <div class="cartao ajuda-cartao"><div class="ajuda-cartao__topo"><span class="ajuda-cartao__icone">${icone('email')}</span><b class="txt-cabecalho">${esc(t.equipe)}</b></div><p class="txt-apoio">${esc(t.equipeTexto)}</p>${botao(t.equipeBotao, { tipo: 'secundario', attrs: 'data-ir="contato"' })}</div>
      ${avisoNota(t.nota)}`, 'central-ajuda')}`,
};
