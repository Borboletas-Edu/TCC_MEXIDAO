// Roteador da simulação: pilha de telas, transições, contexto entregue às telas e
// delegação ÚNICA de cliques por tela (inclui os painéis inferiores, que nascem dentro da tela).
//
// Cada tela (telas/*.js) exporta: { id, fluxo, nome, figma, navegacao?, classe?, render(ctx), ligar?(el, ctx), aoVoltar?(el, ctx) }
// Atributos que funcionam em qualquer tela, sem código extra:
//   data-voltar                         volta uma tela
//   data-ir="id" [data-params='{}'] [data-modo="avancar|baixo|fade|nenhum"]
//   data-aba="inicio|comunidade|trilha|perfil"
//   data-toast="mensagem"
//   data-chip                           alterna o chip (grupo com data-unico = seleção única)
//   data-opcao-grupo                    grupo de Opções com seletor (seleção única)
//   data-interruptor · data-item-marcar · data-curtir · data-seguir · data-mostrar-senha
// Ao mudar um chip/opção/interruptor, a tela recebe o evento "mudou".
import telas from '../telas/index.js';
import { abas } from '../dados/fluxos.js';
import { sessao } from './sessao.js';
import { som } from './sons.js';
import { toast, confete } from './efeitos.js';
import { painelInferior } from './painel-inferior.js';
import { ligarArrastarParaRolar } from './gestos.js';
import { escala } from './escala.js';
import { alternarChip } from '../componentes/chip.js';
import { alternarInterruptor } from '../componentes/interruptor.js';
import { alternarSeguir } from '../componentes/pessoa.js';
import { animarBarras } from '../componentes/barra-progresso.js';
import { pausarVideos } from '../componentes/video.js';

const palco = document.getElementById('app');
const pilha = [];
const cfg = { velocidade: 1 };
let ocupado = false;
let aoMudarTela = () => {};
export const configRoteador = cfg;
export const quandoMudarTela = (fn) => { aoMudarTela = fn; };
export const topo = () => pilha[pilha.length - 1];

/* ---------- Criação e destruição ---------- */
function criar(id, params = {}) {
  const def = telas[id];
  if (!def) throw new Error('Tela não encontrada: ' + id);
  const el = document.createElement('div');
  el.className = ['tela', def.navegacao && 'tela--com-navegacao', def.fundo && 'tela--fundo-' + def.fundo, def.classe].filter(Boolean).join(' ');
  el.dataset.tela = id;
  el._timers = [];
  const ctx = contexto(el, params);
  el._ctx = ctx; el._def = def;
  el.innerHTML = def.render(ctx);
  delegar(el, ctx);
  ligarArrastarParaRolar(el);
  def.ligar?.(el, ctx);
  return el;
}
function destruir(item) {
  item.el._timers.forEach((t) => { clearInterval(t); clearTimeout(t); });
  pausarVideos(item.el);
  item.el.remove();
}

/* ---------- Transições ---------- */
const CLASSES = {
  avancar: ['entra-direita', 'sai-esquerda', 360],
  baixo: ['entra-baixo', '', 360],
  fade: ['entra-fade', 'sai-fade', 260],
  nenhum: ['', '', 0],
  'baixo-volta': ['', 'sai-baixo', 300],
};
function mostrar(novo, antigo, modo, aoFim) {
  const [entra, sai, dur] = CLASSES[modo] || CLASSES.avancar;
  ocupado = dur > 0;
  if (novo && !novo.isConnected) palco.appendChild(novo);
  if (novo) { entra && novo.classList.add(entra); requestAnimationFrame(() => animarBarras(novo)); }
  if (antigo && sai) antigo.classList.add(sai);
  const fim = () => {
    entra && novo?.classList.remove(entra);
    sai && antigo?.classList.remove(sai);
    aoFim?.();
    ocupado = false;
    aoMudarTela();
  };
  dur ? setTimeout(fim, dur) : fim();
}

/* ---------- Navegação ---------- */
export function ir(id, params = {}, modo = 'avancar') {
  if (ocupado) return;
  const atual = topo();
  if (atual) pausarVideos(atual.el);
  const el = criar(id, params);
  pilha.push({ id, params, el, modo });
  mostrar(el, atual?.el, modo, () => { if (modo !== 'baixo') atual?.el.remove(); });
}
export function substituir(id, params = {}, modo = 'avancar') {
  if (ocupado) return;
  const atual = pilha.pop();
  const el = criar(id, params);
  pilha.push({ id, params, el, modo: atual?.modo || 'avancar' });
  mostrar(el, atual?.el, modo === 'baixo' ? 'fade' : modo, () => atual && destruir(atual));
}
export function voltar(n = 1, aviso) {
  if (ocupado || pilha.length < 2) return;
  n = Math.min(n, pilha.length - 1);
  const saindo = pilha.pop();
  for (let i = 1; i < n; i++) destruir(pilha.pop());
  const ant = topo();
  if (!ant.el.isConnected) palco.insertBefore(ant.el, saindo.el);
  ant.el._def.aoVoltar?.(ant.el, ant.el._ctx);
  const modo = saindo.modo === 'baixo' ? 'baixo' : saindo.modo === 'nenhum' ? 'nenhum' : 'avancar';
  if (modo === 'baixo') mostrar(null, saindo.el, 'baixo-volta', () => destruir(saindo));
  else if (modo === 'nenhum') mostrar(null, saindo.el, 'nenhum', () => destruir(saindo));
  else { ant.el.classList.add('entra-esquerda'); saindo.el.classList.add('sai-direita'); ocupado = true; setTimeout(() => { ant.el.classList.remove('entra-esquerda'); destruir(saindo); ocupado = false; aoMudarTela(); }, 330); }
  if (aviso) setTimeout(() => toast(ant.el, aviso), 360);
}
export function raiz(id, params = {}, modo = 'fade', aviso) {
  ocupado = false;
  const antigos = pilha.splice(0);
  const el = criar(id, params);
  pilha.push({ id, params, el, modo: 'avancar' });
  mostrar(el, antigos[antigos.length - 1]?.el, modo === 'fade' ? 'fade' : 'avancar', () => antigos.forEach(destruir));
  if (aviso) setTimeout(() => toast(el, aviso), 360);
}
export function aba(idAba) {
  const a = abas.find((x) => x.id === idAba);
  if (!a || (topo()?.id === a.tela && pilha.length === 1)) return;
  raiz(a.tela, {}, 'fade');
}
// Volta até uma tela da pilha (ou abre como raiz se ela não estiver na pilha)
export function voltarPara(id, params, aviso) {
  const i = pilha.map((p) => p.id).lastIndexOf(id);
  if (i >= 0 && i < pilha.length - 1) voltar(pilha.length - 1 - i, aviso);
  else raiz(id, params || {}, 'fade', aviso);
}

/* ---------- Contexto entregue às telas ---------- */
function contexto(el, params) {
  return {
    params, sessao,
    ir, substituir, voltar, raiz, aba, voltarPara,
    toast: (msg, ic) => toast(el, msg, ic),
    painel: (html, opcoes) => painelInferior(el, html, opcoes),
    confete: () => confete(palco),
    som,
    estado: (nome, figma) => { el._estado = { nome, figma }; aoMudarTela(); },
    velocidade: () => cfg.velocidade,
    intervalo: (fn, ms) => { const t = setInterval(fn, ms); el._timers.push(t); return t; },
    depois: (fn, ms) => { const t = setTimeout(fn, ms); el._timers.push(t); return t; },
    statusClaro: (v) => document.querySelector('.status').classList.toggle('status--claro', v),
  };
}

/* ---------- Delegação única de cliques ---------- */
const ALVOS = '[data-voltar],[data-ir],[data-aba],[data-toast],[data-chip],[data-opcao-grupo] .opcao,[data-interruptor],[data-item-marcar],[data-curtir],[data-seguir],[data-mostrar-senha]';
const mudou = (alvo) => alvo.dispatchEvent(new CustomEvent('mudou', { bubbles: true }));

function delegar(el, ctx) {
  el.addEventListener('click', (e) => {
    const alvo = e.target.closest(ALVOS);
    if (!alvo || !el.contains(alvo) || el._arrastou || alvo.disabled) return;
    const d = alvo.dataset;
    if ('voltar' in d) return ctx.voltar();
    if (d.ir) {
      const par = d.params ? JSON.parse(d.params) : {};
      // Na simulação só existem o próprio perfil e o da Erika (postagens das outras pessoas continuam no feed)
      if ((d.ir === 'perfil-pessoa' || d.ir === 'feed-pessoa') && !par.meu && par.p && par.p !== 'erika') return ctx.toast('Na simulação, apenas o perfil da Erika está disponível');
      return ctx.ir(d.ir, par, d.modo || 'avancar');
    }
    if (d.aba) return ctx.aba(d.aba);
    if (d.toast) return ctx.toast(d.toast);
    if ('chip' in d) {
      const unico = alvo.closest('[data-unico]');
      if (unico) unico.querySelectorAll('.chip').forEach((c) => c !== alvo && alternarChip(c, false));
      alternarChip(alvo);
      return mudou(alvo);
    }
    if (alvo.matches('.opcao')) {
      alvo.closest('[data-opcao-grupo]').querySelectorAll('.opcao').forEach((o) => { o.classList.toggle('opcao--selecionada', o === alvo); o.setAttribute('aria-checked', o === alvo); });
      return mudou(alvo);
    }
    if ('interruptor' in d) { alternarInterruptor(alvo); return mudou(alvo); }
    if ('itemMarcar' in d) { alvo.classList.toggle('item-lista--marcado'); return mudou(alvo); }
    if ('seguir' in d) { alternarSeguir(alvo); return mudou(alvo); }
    if ('mostrarSenha' in d) {
      const inp = alvo.parentElement.querySelector('input');
      const mostrando = inp.type === 'text';
      inp.type = mostrando ? 'password' : 'text';
      alvo.textContent = mostrando ? 'Mostrar' : 'Ocultar';
      return;
    }
    if ('curtir' in d) {
      const ativo = alvo.classList.toggle('interacao--ativa');
      const n = alvo.querySelector('[data-n]');
      if (n) n.textContent = +n.textContent + (ativo ? 1 : -1);
      alvo.classList.remove('interacao--pulso'); void alvo.offsetWidth; alvo.classList.add('interacao--pulso');
    }
  });
}

/* ---------- Gesto: deslizar da borda esquerda para voltar ---------- */
let gesto = null;
palco.addEventListener('pointerdown', (e) => {
  const r = palco.getBoundingClientRect();
  if ((e.clientX - r.left) / escala() > 22 || pilha.length < 2 || ocupado) return;
  if (palco.querySelector('.camada') || topo().modo !== 'avancar') return;
  gesto = { x0: e.clientX, dx: 0, el: topo().el };
  gesto.el.style.transition = 'none';
});
window.addEventListener('pointermove', (e) => {
  if (!gesto) return;
  gesto.dx = Math.max(0, (e.clientX - gesto.x0) / escala());
  gesto.el.style.transform = `translateX(${gesto.dx}px)`;
  gesto.el.style.boxShadow = '-8px 0 24px rgba(0,0,0,.15)';
  const ant = pilha[pilha.length - 2];
  if (ant && !ant.el.isConnected) palco.insertBefore(ant.el, gesto.el);
});
window.addEventListener('pointerup', () => {
  if (!gesto) return;
  const g = gesto; gesto = null;
  g.el.style.transition = 'transform .22s ease';
  if (g.dx > 90) {
    g.el.style.transform = 'translateX(100%)';
    setTimeout(() => {
      const saindo = pilha.pop(); const ant = topo();
      ant.el._def.aoVoltar?.(ant.el, ant.el._ctx);
      destruir(saindo); aoMudarTela();
    }, 220);
  } else {
    g.el.style.transform = '';
    setTimeout(() => { g.el.style.transition = ''; g.el.style.boxShadow = ''; const ant = pilha[pilha.length - 2]; if (ant && g.el.isConnected) ant.el.remove(); }, 230);
  }
});

