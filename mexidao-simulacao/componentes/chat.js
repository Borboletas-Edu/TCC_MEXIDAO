// DS · Chat — Ícone da IA · Ajuda da IA · Identidade da IA · Balão de chat · Sugestões · Barra de envio.
// O comportamento (respostas prontas, gravação, foto, vídeos) fica em ligarChat.
import { icone } from './icone.js';
import { img, ilustracao } from './midia.js';
import { chip } from './chip.js';
import { teclado, ligarTeclado } from './teclado.js';
import { cabecalho } from './cabecalho.js';
import { player, ligarVideos, pausarVideos, capaVideo } from './video.js';
import { dadosVideo } from './midia.js';
import { esc, cls } from './util.js';

// Mascotes da IA (Figma 994:7829 + círculo 994:7824): círculo primarySoft atrás dos mascotes, mesma composição em todos os tamanhos
export const mascotesIA = (classe = '') => `<span class="${cls('mascotes-ia', classe)}" role="img" aria-label="Mascotes da IA"><span class="mascotes-ia__circulo"></span><img class="mascotes-ia__arte" src="midia/mascotes/mascotes-ia-figma.png" alt="" draggable="false"></span>`;
export const iconeIA = (grande = false) => `<span class="${cls('icone-ia', grande && 'icone-ia--g')}">${mascotesIA('icone-ia__arte')}</span>`;
export const ajudaIA = (attrs = '', destaque = false) => `<button type="button" class="${cls('ajuda-ia', destaque && 'ajuda-ia--destaque')}" aria-label="Ajuda da IA" ${attrs}>${iconeIA()}</button>`;
export const identidadeIA = (nome, status) => `<div class="identidade-ia"><span class="identidade-ia__imagem">${iconeIA(true)}</span><div class="identidade-ia__dados"><b class="txt-cabecalho">${esc(nome)}</b><span class="identidade-ia__status"><i class="identidade-ia__online"></i>${esc(status)}</span></div></div>`;
const hora = () => { const d = new Date(); return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0'); };
export const balaoVoce = (html, h) => `<div class="mensagem mensagem--voce"><div class="balao-chat balao-chat--voce">${html}</div>${h ? `<span class="mensagem__hora">${h}</span>` : ''}</div>`;
export const balaoAssistente = (html) => `<div class="mensagem"><div class="balao-chat balao-chat--assistente">${html}</div></div>`;
const balaoVideo = (ref) => `<div class="mensagem"><button type="button" class="balao-chat balao-chat--assistente balao-chat--video" data-abrir-video="${ref}"><span class="balao-chat__video">${capaVideo(ref)}<span class="tocar-pausar">${icone('play')}</span></span></button></div>`;
const digitando = () => `<div class="mensagem" data-digitando><div class="balao-chat balao-chat--assistente balao-chat--digitando"><i></i><i></i><i></i></div></div>`;
export const barraEnvio = (placeholder) => `<div class="barra-envio" data-barra>
  <label class="barra-envio__campo"><input class="barra-envio__valor" type="text" placeholder="${esc(placeholder)}" data-texto autocomplete="off"></label>
  <button type="button" class="barra-envio__botao barra-envio__botao--camera" data-camera aria-label="Enviar foto">${icone('cameraMais')}</button>
  <button type="button" class="barra-envio__botao barra-envio__botao--microfone" data-mic aria-label="Gravar áudio">${icone('microfone')}</button>
  <button type="button" class="barra-envio__botao barra-envio__botao--enviar" data-enviar aria-label="Enviar" hidden>${icone('enviar')}</button>
  <input type="file" accept="image/*" data-arquivo hidden>
</div>`;

// Tela de chat completa (usada por "Chat com IA" e "Ajuda com IA")
export function telaChat(c, { vazio = true, historico = [] } = {}) {
  return `<div class="tela__status"></div>
    ${cabecalho(c.cabecalho)}
    ${identidadeIA(c.nome, c.status)}
    <div class="chat__mensagens" data-mensagens>${vazio ? `<div class="chat__vazio" data-vazio>
        <div class="chat__imagem chat__imagem--mascotes">${mascotesIA()}</div>
        <h2 class="txt-secao">${esc(c.vazioTitulo)}</h2><p class="txt-apoio mt4">${esc(c.vazioTexto)}</p>
        <div class="chat__sugestoes-vazio">${c.sugestoes.slice(0, 3).map((s) => chip(s, { attrs: `data-sugestao="${esc(s)}"` })).join('')}</div></div>`
      : historico.map(([q, t, h]) => (q === 'eu' ? balaoVoce(esc(t), h) : balaoAssistente(t))).join('')}</div>
    <div class="chat__rodape">
      <div class="sugestoes" data-sugestoes ${vazio ? 'hidden' : ''}>${c.sugestoes.map((s) => chip(s, { attrs: `data-sugestao="${esc(s)}"` })).join('')}</div>
      ${barraEnvio(c.placeholder)}
      <div class="chat__espaco-inferior" data-espaco></div>
      <div data-area-teclado hidden>${teclado('enviar')}</div>
    </div>`;
}

export function ligarChat(el, ctx, c, figmas = {}) {
  const lista = el.querySelector('[data-mensagens]'), input = el.querySelector('[data-texto]'), barra = el.querySelector('[data-barra]');
  const areaTeclado = el.querySelector('[data-area-teclado]'), sugestoes = el.querySelector('[data-sugestoes]'), espaco = el.querySelector('[data-espaco]');
  const bt = { enviar: el.querySelector('[data-enviar]'), mic: el.querySelector('[data-mic]'), cam: el.querySelector('[data-camera]') };
  let gravando = null;
  const estado = (n) => figmas[n] && ctx.estado(figmas[n][0], figmas[n][1]);
  const temMensagens = () => !!lista.querySelector('.mensagem');
  const rolar = () => requestAnimationFrame(() => lista.scrollTo({ top: lista.scrollHeight, behavior: 'smooth' }));
  const adicionar = (html) => { lista.querySelector('[data-vazio]')?.remove(); if (areaTeclado.hidden) sugestoes.hidden = false; lista.insertAdjacentHTML('beforeend', html); rolar(); };
  const responder = (pergunta) => {
    const r = c.respostas[pergunta] || { texto: esc(c.generica) };
    ctx.depois(() => { lista.insertAdjacentHTML('beforeend', digitando()); rolar(); }, 300);
    ctx.depois(() => { lista.querySelector('[data-digitando]')?.remove(); adicionar(balaoAssistente(r.texto)); (r.videos || []).forEach((v) => adicionar(balaoVideo(v))); estado('mensagens'); }, 1500);
  };
  const enviar = (texto) => {
    texto = texto.trim(); if (!texto) return;
    modoDigitando(false); adicionar(balaoVoce(esc(texto), hora())); ctx.som('enviar'); input.value = ''; responder(texto);
  };
  const modoDigitando = (on) => {
    areaTeclado.hidden = !on; espaco.hidden = on; bt.enviar.hidden = !on; bt.mic.hidden = on; bt.cam.hidden = on;
    sugestoes.hidden = on || !temMensagens();
    if (on) { estado('digitando'); rolar(); } else { input.blur(); estado(temMensagens() ? 'mensagens' : 'vazio'); }
  };
  el.addEventListener('click', (e) => {
    const s = e.target.closest('[data-sugestao]'); if (s && !el._arrastou) return enviar(s.dataset.sugestao);
    const v = e.target.closest('[data-abrir-video]'); if (v) return abrirVideo(v.dataset.abrirVideo);
    if (e.target.closest('[data-mensagens]') && !areaTeclado.hidden) modoDigitando(false);
  });
  input.addEventListener('focus', () => modoDigitando(true));
  input.addEventListener('keydown', (e) => e.key === 'Enter' && enviar(input.value));
  bt.enviar.addEventListener('pointerdown', (e) => e.preventDefault());
  bt.enviar.addEventListener('click', () => enviar(input.value));
  ligarTeclado(areaTeclado, input, () => enviar(input.value));

  const arq = el.querySelector('[data-arquivo]');
  bt.cam.addEventListener('click', () => arq.click());
  arq.addEventListener('change', () => { const f = arq.files[0]; if (!f) return; adicionar(`<div class="mensagem mensagem--voce"><div class="balao-chat balao-chat--voce balao-chat--foto"><img src="${URL.createObjectURL(f)}" alt=""></div><span class="mensagem__hora">${hora()}</span></div>`); responder('__foto__'); });

  // Áudio (gravação simulada): toque para gravar, toque de novo para enviar
  bt.mic.addEventListener('click', () => {
    if (gravando) return pararGravacao(true);
    let s = 0;
    const rec = document.createElement('div');
    rec.className = 'barra-envio__gravacao';
    rec.innerHTML = `<span class="barra-envio__tempo"><i class="barra-envio__indicador"></i><span data-seg>0:00</span></span><button type="button" class="barra-envio__cancelar" data-cancelar>${esc(c.deslize)}</button>`;
    barra.querySelector('.barra-envio__campo').appendChild(rec);
    barra.classList.add('barra-envio--gravando'); bt.cam.hidden = true;
    gravando = ctx.intervalo(() => { s++; rec.querySelector('[data-seg]').textContent = '0:' + String(s).padStart(2, '0'); }, 1000);
    rec.querySelector('[data-cancelar]').addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); pararGravacao(false); });
    estado('gravando');
  });
  function pararGravacao(enviarAudio) {
    clearInterval(gravando); gravando = null;
    const rec = barra.querySelector('.barra-envio__gravacao'); const seg = rec?.querySelector('[data-seg]')?.textContent || '0:01';
    rec?.remove(); barra.classList.remove('barra-envio--gravando'); bt.cam.hidden = false;
    if (!enviarAudio) return estado(temMensagens() ? 'mensagens' : 'vazio');
    adicionar(`<div class="mensagem mensagem--voce"><div class="balao-chat balao-chat--voce balao-chat--audio">${icone('play')}<span>${esc(c.audio)} · ${seg}</span></div><span class="mensagem__hora">${hora()}</span></div>`);
    c.respostas.__audio__ = { texto: esc(c.audioResposta || c.generica) };
    responder('__audio__');
  }

  // Vídeo da resposta: abre o Player de vídeo (modal) com o elemento nativo
  function abrirVideo(ref) {
    estado('video');
    const camada = document.createElement('div');
    camada.className = 'camada camada--centro';
    camada.innerHTML = `<div class="sobreposicao" data-fechar></div><div class="camada__centro">${player(ref)}</div>`;
    el.appendChild(camada);
    const fechar = () => { pausarVideos(camada); camada.classList.add('saindo'); setTimeout(() => camada.remove(), 220); estado('mensagens'); };
    ligarVideos(camada, ctx, { inicio: 0, aoTelaCheia: (r, t) => { fechar(); ctx.ir('video-tela-cheia', { ref: r, t }, 'baixo'); } });
    camada.querySelectorAll('[data-fechar]').forEach((b) => b.addEventListener('click', fechar));
  }
  return { enviar };
}
