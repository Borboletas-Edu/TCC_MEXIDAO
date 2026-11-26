// Efeitos de tela: toast (aviso flutuante) e confete.
import { icone } from '../componentes/icone.js';
import { esc } from '../componentes/util.js';

export function toast(el, msg, ic = 'check') {
  el.querySelectorAll('.toast').forEach((t) => t.remove());
  const t = document.createElement('div');
  t.className = 'toast';
  t.setAttribute('role', 'status');
  t.innerHTML = `${icone(ic)}<span>${esc(msg)}</span>`;
  el.appendChild(t);
  setTimeout(() => { t.classList.add('saindo'); setTimeout(() => t.remove(), 300); }, 2200);
}

export function confete(alvo) {
  const c = document.createElement('canvas');
  c.className = 'confete'; c.width = 375 * 2; c.height = 812 * 2;
  alvo.appendChild(c);
  const x = c.getContext('2d'); x.scale(2, 2);
  const cores = ['#d27a33', '#97c064', '#e3a663', '#fae5ac', '#19632d', '#fac1ac'];
  const ps = Array.from({ length: 140 }, () => ({ x: 187 + (Math.random() - .5) * 80, y: 300, vx: (Math.random() - .5) * 9, vy: -Math.random() * 11 - 4, r: Math.random() * 6 + 4, a: Math.random() * 6, va: (Math.random() - .5) * .3, cor: cores[(Math.random() * cores.length) | 0] }));
  let f = 0;
  const passo = () => {
    x.clearRect(0, 0, 375, 812);
    ps.forEach((p) => { p.vy += .32; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.cor; x.globalAlpha = Math.max(0, 1 - f / 140); x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); });
    if (++f < 150) requestAnimationFrame(passo); else c.remove();
  };
  requestAnimationFrame(passo);
}
