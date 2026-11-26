// Painel inferior (bottom sheet) do DS: sobreposição + painel com alça, botão fechar,
// conteúdo rolável e rodapé fixo opcional. Arrastar para fechar SÓ pela alça/topo
// (assim a rolagem do conteúdo nunca briga com o gesto).
// Os cliques dentro do painel são tratados pela própria tela (delegação única no roteador).
import { icone } from '../componentes/icone.js';
import { esc } from '../componentes/util.js';
import { escala } from './escala.js';

export function painelInferior(el, html, { titulo = '', rodape = '', fechar = true, alca = false, ligar, aoFechar, classe = '' } = {}) {
  const camada = document.createElement('div');
  camada.className = 'camada';
  camada.innerHTML = `<div class="sobreposicao"></div>
    <section class="painel-inferior ${alca ? 'painel-inferior--com-alca' : ''} ${classe}" role="dialog" aria-modal="true">
      <div class="painel-inferior__topo"><span class="painel-inferior__alca"></span></div>
      ${fechar ? `<button type="button" class="painel-inferior__fechar" aria-label="Fechar">${icone('fechar')}</button>` : ''}
      <div class="painel-inferior__conteudo">${titulo ? `<h2 class="painel-inferior__titulo">${esc(titulo)}</h2>` : ''}${html}</div>
      ${rodape ? `<div class="painel-inferior__rodape">${rodape}</div>` : ''}
    </section>`;
  el.appendChild(camada);
  const p = camada.querySelector('.painel-inferior');
  let fechado = false;
  const fecharPainel = () => {
    if (fechado) return; fechado = true;
    camada.classList.add('saindo');
    setTimeout(() => { camada.remove(); aoFechar?.(); }, 250);
  };
  camada.querySelector('.sobreposicao').addEventListener('click', fecharPainel);
  camada.querySelector('.painel-inferior__fechar')?.addEventListener('click', fecharPainel);
  const topo = p.querySelector('.painel-inferior__topo');
  topo.addEventListener('pointerdown', (e) => {
    const y0 = e.clientY; let dy = 0;
    p.style.transition = 'none';
    const mover = (ev) => { dy = Math.max(0, (ev.clientY - y0) / escala()); p.style.transform = `translateY(${dy}px)`; };
    const soltar = () => {
      window.removeEventListener('pointermove', mover); window.removeEventListener('pointerup', soltar);
      p.style.transition = 'transform .25s ease';
      if (dy > 80) fecharPainel(); else p.style.transform = '';
    };
    window.addEventListener('pointermove', mover); window.addEventListener('pointerup', soltar);
  });
  ligar?.(p, fecharPainel);
  return { el: p, fechar: fecharPainel };
}
