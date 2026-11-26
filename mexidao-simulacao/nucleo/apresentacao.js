// Painel lateral de apresentação: fluxos, "Você está em", reiniciar, acelerar timer, silenciar e link para o DS.
import { fluxos } from '../dados/fluxos.js';
import { painel as txt } from '../dados/conteudo.js';
import { icone } from '../componentes/icone.js';
import { raiz, topo, configRoteador, quandoMudarTela } from './roteador.js';
import { config as configSom } from './sons.js';
import { limparSessao } from './sessao.js';

export function montarApresentacao() {
  const el = document.getElementById('painel');
  el.innerHTML = `
    <div class="painel__topo"><span class="painel__marca">${icone('chapeu')}</span><div><strong>${txt.titulo}</strong><small>${txt.subtitulo}</small></div></div>
    <div class="painel__onde"><small>${txt.ondeEstou}</small><b id="onde-fluxo"></b><span id="onde-tela"></span><code id="onde-figma"></code></div>
    <p class="painel__secao">${txt.fluxos}</p>
    <ol class="painel__fluxos">${fluxos.map((f) => `<li><button type="button" data-fluxo="${f.n}"><span>${f.n}</span>${f.nome}</button></li>`).join('')}</ol>
    <div class="painel__botoes">
      <button type="button" id="bt-reiniciar">${icone('voltar')}${txt.reiniciar}</button>
      <button type="button" id="bt-acelerar" aria-pressed="false">${icone('relogio')}${txt.acelerar}<i>30×</i></button>
      <button type="button" id="bt-mudo" aria-pressed="false">${icone('volume')}${txt.silenciar}</button>
    </div>
    `;
  // O link para ds.html e a nota ficam ocultos no painel (a página ds.html continua disponível pelo endereço).
  el.addEventListener('click', (e) => {
    const b = e.target.closest('[data-fluxo]');
    if (b) { const f = fluxos[+b.dataset.fluxo]; raiz(f.inicio, f.params || {}, 'fade'); }
  });
  el.querySelector('#bt-reiniciar').onclick = () => { limparSessao(); document.querySelector('.status').classList.remove('status--claro'); raiz('splash', {}, 'fade'); };
  el.querySelector('#bt-acelerar').onclick = (e) => { configRoteador.velocidade = configRoteador.velocidade === 1 ? 30 : 1; e.currentTarget.setAttribute('aria-pressed', configRoteador.velocidade > 1); };
  el.querySelector('#bt-mudo').onclick = (e) => { configSom.mudo = !configSom.mudo; e.currentTarget.setAttribute('aria-pressed', configSom.mudo); };

  quandoMudarTela(() => {
    const t = topo(); if (!t) return;
    const def = t.el._def, est = t.el._estado;
    const f = fluxos.find((x) => x.n === def.fluxo);
    el.querySelector('#onde-fluxo').textContent = `Fluxo ${def.fluxo} · ${f?.nome || ''}`;
    el.querySelector('#onde-tela').textContent = '› ' + (est?.nome || def.nome);
    el.querySelector('#onde-figma').textContent = 'Figma ' + (est?.figma || def.figma);
    el.querySelectorAll('[data-fluxo]').forEach((b) => b.classList.toggle('ativo', +b.dataset.fluxo === def.fluxo));
    if (!t.id.startsWith('video')) document.querySelector('.status').classList.remove('status--claro');
  });
}
