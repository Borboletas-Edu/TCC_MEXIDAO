// Figma: Perfil · Contas vinculadas · outras redes · 872:7356 — cartão sem área de ilustração
import { configuracoes } from '../dados/conteudo.js';
import { linkAcao, avisoNota, icone, esc } from '../componentes/index.js';
import { topo, corpo } from './_base.js';
const t = configuracoes.contas;
const nomes = { tiktok: 'TikTok', pinterest: 'Pinterest', youtube: 'Youtube', whatsapp: 'Whatsapp' };

export default {
  id: 'contas-vinculadas', nome: 'Contas vinculadas', fluxo: 9, figma: '872:7356',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<p class="introducao__texto">${esc(t.texto)}</p>
      <div class="contas">${t.lista.map(([n, ic, email]) => `<div class="cartao conta" data-conta>
        <div class="conta__topo"><span class="conta__simbolo">${icone(ic)}</span><b class="txt-cabecalho">${esc(n)}</b><span class="selo-status">${icone('check')}${esc(t.conectada)}</span></div>
        <div class="conta__email">${icone('email')}<span>${esc(email)}</span></div>
        ${linkAcao(t.remover, { attrs: 'data-remover' })}</div>`).join('')}
        <div class="cartao outras-redes">
          <div class="outras-redes__texto"><b class="txt-rotulo">${esc(t.outras)}</b><p class="txt-pequeno">${esc(t.outrasTexto)}</p>
            <div class="outras-redes__redes">${t.redes.map((r) => `<button type="button" class="outras-redes__rede" data-ir="autorizar-conexao" data-params='{"rede":"${nomes[r]}"}' aria-label="${nomes[r]}">${icone(r)}</button>`).join('')}</div></div></div>
      </div>
      <div class="contas__nota">${avisoNota(t.nota, 'escudoCheck')}</div>`, 'contas-vinculadas')}`,
  ligar: (el, ctx) => el.querySelector('.contas').addEventListener('click', (e) => {
    const b = e.target.closest('[data-remover]'); if (!b) return;
    const card = b.closest('[data-conta]'); card.classList.add('removendo');
    setTimeout(() => card.remove(), 300); ctx.toast(t.removida);
  }),
};
