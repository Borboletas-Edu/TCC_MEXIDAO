// Sons da simulação: gerados no navegador ("synth:...") ou arquivos listados em dados/midia.js.
import { midia } from '../dados/midia.js';

export const config = { mudo: false };
let audio;
const NOTAS = {
  timer: [[880, 0, .15], [880, .25, .15], [1175, .5, .35]],
  celebrar: [[523, 0, .12], [659, .1, .12], [784, .2, .12], [1047, .3, .4]],
  toque: [[1400, 0, .03]],
  enviar: [[620, 0, .08], [930, .07, .12]],
};
export function som(nome) {
  if (config.mudo) return;
  const fonte = midia.som[nome];
  if (!fonte) return;
  if (!fonte.startsWith('synth:')) { try { new Audio(fonte).play().catch(() => {}); } catch {} return; }
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const t = audio.currentTime;
    (NOTAS[fonte.slice(6)] || []).forEach(([f, ini, dur]) => {
      const o = audio.createOscillator(), g = audio.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + ini);
      g.gain.exponentialRampToValueAtTime(0.18, t + ini + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + ini + dur);
      o.connect(g).connect(audio.destination); o.start(t + ini); o.stop(t + ini + dur + 0.05);
    });
  } catch {}
}
