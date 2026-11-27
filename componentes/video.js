// DS · Vídeo (na simulação, sempre imagem estática da capa, sem som e sem reprodução) com controles do DS:
// Tocar e pausar · Controle do vídeo (Som / Sem som / Tela cheia / Sair) · Linha do tempo · Player (modal) · Player tela cheia.
// Se um vídeo não tiver arquivo em dados/midia.js, o poster é exibido e a reprodução é simulada.
// Vídeos com "youtube" (e usarYoutube = true) usam o player oficial do YouTube, com os controles dele.
import { icone } from './icone.js';
import { dadosVideo } from './midia.js';
import { usarYoutube } from '../dados/midia.js';
import { esc, mmss, cls } from './util.js';

// Simulação: todo vídeo é só a imagem de capa (sem <video>, sem som, nada toca)
const fonte = (v) => `<img class="video__midia" data-midia-video src="${v.poster}" alt="" draggable="false">`;
// YouTube (player oficial incorporado, começando e terminando no trecho escolhido)
const doYoutube = (v) => usarYoutube && v.youtube;
const urlYoutube = (y, auto) => `https://www.youtube-nocookie.com/embed/${y.id}?start=${y.inicio}&end=${y.fim}&rel=0&playsinline=1&modestbranding=1${auto ? '&autoplay=1' : ''}`;
const quadroYoutube = (v, auto = false) => `<iframe class="video__midia video__youtube" src="${urlYoutube(v.youtube, auto)}" title="${esc(v.titulo || 'Vídeo')}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
// Capa do vídeo (balões do chat): miniatura do YouTube, com a capa local se ela não carregar
export function capaVideo(ref) {
  const v = dadosVideo(ref);
  return doYoutube(v) ? `<img src="https://i.ytimg.com/vi/${v.youtube.id}/hqdefault.jpg" alt="" onerror="this.onerror=null;this.src='${v.poster}'">` : `<img src="${v.poster}" alt="">`;
}
export const botaoTocar = (classe = '') => `<button type="button" class="${cls('tocar-pausar', classe)}" data-tocar aria-label="Reproduzir">${icone('play')}</button>`;
const controle = (ic, attr, rotulo) => `<button type="button" class="controle-video" ${attr} aria-label="${rotulo}">${icone(ic)}</button>`;
export const linhaTempo = (total, escura = false) => `<div class="${cls('linha-tempo', escura && 'linha-tempo--escura')}">
  <div class="linha-tempo__trilho" data-trilho><i class="linha-tempo__total"></i><i class="linha-tempo__assistido" data-assistido></i><i class="linha-tempo__marcador" data-marcador></i></div>
  <div class="linha-tempo__tempos"><span class="linha-tempo__atual" data-atual>0:00</span><span data-total>${mmss(total)}</span></div></div>`;

// Vídeo da fase (inline) · 327×230
export function video(ref, { classe = '' } = {}) {
  const v = dadosVideo(ref);
  // YouTube: mostra a foto do Figma (capa) com os controles do DS; ao tocar, troca pelo player do YouTube já tocando
  if (doYoutube(v)) return `<div class="${cls('video video--youtube video--capa', classe)}" data-youtube="${esc(urlYoutube(v.youtube, true))}" data-titulo="${esc(v.titulo || 'Vídeo')}">
    <img class="video__midia" src="${v.poster}" alt="">${botaoTocar('video__tocar')}
    <div class="video__controles">${controle('volume', '', 'Som')}${controle('telaCheia', '', 'Tela cheia')}</div>
    <span class="video__duracao">${mmss(v.duracao)}</span></div>`;
  return `<div class="${cls('video', classe)}" data-video="${ref}">${fonte(v)}${botaoTocar('video__tocar')}
    <div class="video__controles">${controle('volume', 'data-som', 'Som')}${controle('telaCheia', 'data-tela-cheia', 'Tela cheia')}</div>
    <span class="video__duracao" data-duracao>${mmss(v.duracao)}</span>
    <div class="video__progresso"><div class="video__progresso-barra" data-barra></div></div></div>`;
}
// Player de vídeo (modal do chat) · 327
export function player(ref) {
  const v = dadosVideo(ref);
  if (doYoutube(v)) return `<div class="player player--youtube">
    <div class="player__topo"><b class="txt-cabecalho">${esc(v.titulo || '')}</b><button type="button" class="player__fechar" data-fechar aria-label="Fechar">${icone('fechar')}</button></div>
    <div class="player__video">${quadroYoutube(v, true)}</div>
    <button type="button" class="botao botao--principal" data-fechar><span class="botao__rotulo">Ok, entendi</span></button>
  </div>`;
  return `<div class="player" data-video="${ref}" data-autoplay>
    <div class="player__topo"><b class="txt-cabecalho">${esc(v.titulo || '')}</b><button type="button" class="player__fechar" data-fechar aria-label="Fechar">${icone('fechar')}</button></div>
    <div class="player__video">${fonte(v)}<div class="video__controles">${controle('volume', 'data-som', 'Som')}${controle('telaCheia', 'data-tela-cheia', 'Tela cheia')}</div></div>
    <div class="player__controles">${botaoTocar()}${linhaTempo(v.duracao)}</div>
    <button type="button" class="botao botao--principal" data-fechar><span class="botao__rotulo">Ok, entendi</span></button>
  </div>`;
}
// Player de vídeo · tela cheia · 375×812
export function playerCheio(ref) {
  const v = dadosVideo(ref);
  if (doYoutube(v)) return `<div class="player-cheio player-cheio--youtube">${quadroYoutube(v, true)}
    <button type="button" class="player-cheio__topo" data-voltar>${icone('fechar')}<b class="txt-cabecalho cor-branca">${esc(v.titulo || '')}</b></button></div>`;
  return `<div class="player-cheio" data-video="${ref}" data-autoplay>${fonte(v)}
    <button type="button" class="player-cheio__topo" data-voltar>${icone('fechar')}<b class="txt-cabecalho cor-branca">${esc(v.titulo || '')}</b></button>
    <div class="player-cheio__controles">${botaoTocar()}${linhaTempo(v.duracao, true)}${controle('volume', 'data-som', 'Som')}${controle('minimizar', 'data-sair-cheia', 'Sair da tela cheia')}</div></div>`;
}

// Fonte de mídia: elemento <video> real ou simulação com a mesma interface
function criarFonte(el, v, ctx) {
  if (el.tagName === 'VIDEO') return el;
  const f = { paused: true, currentTime: 0, duration: v.duracao, muted: false, ouvintes: {}, addEventListener(n, fn) { (this.ouvintes[n] ||= []).push(fn); }, emitir(n) { (this.ouvintes[n] || []).forEach((fn) => fn()); } };
  // Imagem estática: tocar não faz nada e a linha do tempo fica parada em 0:00
  f.play = () => Promise.resolve();
  f.pause = () => {};
  return f;
}

// Liga todos os vídeos dentro de "raiz". opcoes: { inicio, aoTelaCheia(ref, tempo), aoSairCheia() }
export function ligarVideos(raiz, ctx, opcoes = {}) {
  raiz.querySelectorAll('[data-video]').forEach((box) => {
    const v = dadosVideo(box.dataset.video);
    const m = criarFonte(box.querySelector('[data-midia-video]'), v, ctx);
    const duracao = () => (isFinite(m.duration) && m.duration > 0 ? m.duration : v.duracao);
    if (opcoes.inicio) { const ir = () => { m.currentTime = Math.min(opcoes.inicio, duracao() - .5); }; m.tagName ? m.addEventListener('loadedmetadata', ir, { once: true }) : ir(); }
    const tocar = box.querySelectorAll('[data-tocar]');
    const desenhar = () => {
      const pct = (m.currentTime / duracao()) * 100;
      box.querySelectorAll('[data-barra],[data-assistido]').forEach((b) => (b.style.width = pct + '%'));
      box.querySelectorAll('[data-marcador]').forEach((b) => (b.style.left = pct + '%'));
      box.querySelectorAll('[data-atual]').forEach((b) => (b.textContent = mmss(m.currentTime)));
      box.querySelectorAll('[data-total]').forEach((b) => (b.textContent = mmss(duracao())));
      const d = box.querySelector('[data-duracao]'); if (d) d.textContent = mmss(m.paused && m.currentTime === 0 ? duracao() : m.paused ? m.currentTime : duracao() - m.currentTime);
    };
    const estado = () => { tocar.forEach((b) => { b.innerHTML = icone(m.paused ? 'play' : 'pausa'); b.setAttribute('aria-label', m.paused ? 'Reproduzir' : 'Pausar'); }); box.classList.toggle('video--tocando', !m.paused); desenhar(); };
    ['play', 'pause', 'ended'].forEach((n) => m.addEventListener(n, estado));
    m.addEventListener('timeupdate', desenhar);
    m.addEventListener('loadedmetadata', desenhar);
    tocar.forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); m.paused ? m.play().catch(() => {}) : m.pause(); }));
    box.querySelector('[data-midia-video]').addEventListener('click', () => (m.paused ? m.play().catch(() => {}) : m.pause()));
    const som = box.querySelector('[data-som]');
    som?.addEventListener('click', (e) => { e.stopPropagation(); m.muted = !m.muted; som.innerHTML = icone(m.muted ? 'semSom' : 'volume'); som.setAttribute('aria-label', m.muted ? 'Sem som' : 'Som'); });
    box.querySelector('[data-tela-cheia]')?.addEventListener('click', (e) => { e.stopPropagation(); const t = m.currentTime; m.pause(); opcoes.aoTelaCheia?.(box.dataset.video, t); });
    box.querySelector('[data-sair-cheia]')?.addEventListener('click', () => { m.pause(); opcoes.aoSairCheia?.(); });
    const trilho = box.querySelector('[data-trilho]');
    estado();
    if ('autoplay' in box.dataset) setTimeout(() => m.play().catch(() => {}), 150);
    box._midia = m;
  });
}
// Pausa todos os vídeos de um elemento (ao sair da tela)
export const pausarVideos = (raiz) => raiz.querySelectorAll('[data-video]').forEach((b) => b._midia?.pause());

// Capa do YouTube: qualquer toque na capa troca a foto pelo player oficial, já tocando
if (typeof document !== 'undefined' && !window.__capaYoutube) {
  window.__capaYoutube = true;
  document.addEventListener('click', (e) => {
    const capa = e.target.closest('.video--capa'); if (!capa) return;
    e.stopPropagation();
    capa.classList.remove('video--capa');
    capa.innerHTML = `<iframe class="video__midia video__youtube" src="${capa.dataset.youtube}" title="${capa.dataset.titulo}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  }, true);
}
