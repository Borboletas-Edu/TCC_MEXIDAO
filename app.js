// Ponto de entrada da simulação. A lógica fica em nucleo/, o design system em componentes/ + estilos/ds/,
// as telas em telas/ e todos os textos e mídias em dados/.
import { raiz } from './nucleo/roteador.js';
import { montarApresentacao } from './nucleo/apresentacao.js';
import { ajustarEscala } from './nucleo/escala.js';
import { ligarRodaHorizontal } from './nucleo/gestos.js';

function relogio() {
  const d = new Date();
  document.querySelector('.status__hora').textContent = d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
}
// No celular ou tablet (nucleo/bloqueio.js) a simulação não inicia: aparece a tela de bloqueio.
if (!document.documentElement.classList.contains('so-pc')) {
  setInterval(relogio, 10000); relogio();
  window.addEventListener('resize', ajustarEscala); ajustarEscala();
  ligarRodaHorizontal(document.getElementById('app'));
  montarApresentacao();
  raiz('splash', {}, 'fade');
}

// Atalho para testes automatizados (abre qualquer tela direto pelo console: __simulacao.raiz('home'))
import { ir } from './nucleo/roteador.js';
window.__simulacao = { raiz, ir };
