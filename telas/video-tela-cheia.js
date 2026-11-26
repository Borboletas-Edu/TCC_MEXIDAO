// Figma: Chat com IA · vídeo em tela cheia · 872:6228 — elemento <video> nativo com os controles do DS
import { playerCheio, ligarVideos } from '../componentes/index.js';

export default {
  id: 'video-tela-cheia', nome: 'Vídeo em tela cheia', fluxo: 5, figma: '872:6228', classe: 'tela--video',
  render: (ctx) => playerCheio(ctx.params.ref || 'corteCenoura'),
  ligar: (el, ctx) => {
    ctx.statusClaro(true);
    ligarVideos(el, ctx, { inicio: ctx.params.t || 0, aoSairCheia: () => ctx.voltar() });
  },
};
