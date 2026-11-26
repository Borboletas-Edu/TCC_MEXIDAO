// Figma: Configurações · Notificações · 872:6824
import { configuracoes } from '../dados/conteudo.js';
import { interruptor, introducao, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
const t = configuracoes.notificacoes;

export default {
  id: 'notificacoes', nome: 'Notificações', fluxo: 9, figma: '872:6824',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`${introducao({ titulo: t.titulo, texto: t.texto, grande: true })}
      <div class="lista notificacoes__lista">${t.itens.map(([n, d, ic, on]) => `<div class="preferencia"><span class="preferencia__icone">${icone(ic)}</span><div class="flex1"><b class="txt-rotulo">${esc(n)}</b><p class="txt-pequeno">${esc(d)}</p></div>${interruptor(on)}</div>`).join('')}</div>
      <div class="cartao cartao--cinza permissoes">${icone('celular', 'permissoes__icone')}<div><b class="txt-rotulo">${esc(t.permissoes)}</b><p class="txt-apoio">${esc(t.permissoesTexto)}</p></div></div>`, 'notificacoes')}`,
};
