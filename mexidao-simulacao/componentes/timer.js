// DS · Timer (Parado / Em andamento / Pausado / Fim) · contagem real, acelerável pelo painel de apresentação.
import { icone } from './icone.js';

export const timer = (min, rotulo = 'Iniciar timer') =>
  `<button type="button" class="timer" data-timer="${min}">${icone('relogio', 'timer__icone')}<span class="timer__rotulo">· ${rotulo} · ${min} min</span></button>`;

export function ligarTimers(raiz, ctx, aoMudar) {
  raiz.querySelectorAll('[data-timer]').forEach((b) => {
    const total = +b.dataset.timer * 60;
    let resta = total, rodando = false, t = null;
    const rot = b.querySelector('.timer__rotulo');
    const mm = () => `${String(Math.floor(resta / 60)).padStart(2, '0')}:${String(Math.ceil(resta % 60) % 60).padStart(2, '0')}`;
    const estado = (e) => { b.classList.remove('timer--andamento', 'timer--pausado', 'timer--fim'); if (e) b.classList.add('timer--' + e); };
    b.addEventListener('click', () => {
      if (resta <= 0) return;
      if (resta === total) resta = total - 1;
      rodando = !rodando;
      estado(rodando ? 'andamento' : 'pausado');
      rot.textContent = '· ' + mm() + (rodando ? '' : ' · pausado');
      aoMudar?.(rodando);
      if (rodando && !t) t = ctx.intervalo(() => {
        if (!rodando) return;
        resta -= ctx.velocidade() / 4;
        if (resta <= 0) {
          resta = 0; rodando = false; clearInterval(t); estado('fim');
          rot.textContent = '· Tempo esgotado!'; ctx.som('timerFim'); ctx.toast('Tempo esgotado!', 'relogio'); aoMudar?.(false);
          return;
        }
        rot.textContent = '· ' + mm();
      }, 250);
    });
  });
}
