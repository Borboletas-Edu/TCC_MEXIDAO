// Figma: Tela Splash · 872:4932 — logo Mexidão (1071:6962)
import { app } from '../dados/conteudo.js';
import { ondas, reservado, esc } from '../componentes/index.js';

export default {
  id: 'splash', fundo: 'a', nome: 'Tela Splash', fluxo: 0, figma: '872:4932', classe: 'tela--splash',
  render: () => `
    <div class="splash">
      <img class="splash__logo" src="midia/mascotes/logo.png" alt="Mexidão" draggable="false">
      <p class="splash__carregando txt-apoio">${esc(app.carregando)}</p>
    </div>`,
  // "Já está logado?" é sempre "não" na simulação → Tela Inicial
  ligar: (el, ctx) => ctx.depois(() => ctx.raiz('inicial', {}, 'fade'), 1800),
};
