// Figma: Onboarding · 872:5037
import { app, onboarding } from '../dados/conteudo.js';
import { botao, introducao, marcadorEtapa, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = onboarding.intro;

export default {
  id: 'onboarding', nome: 'Onboarding', fluxo: 2, figma: '872:5037',
  render: () => `${topo('')}
    ${corpo(`${introducao({ titulo: t.titulo, texto: t.subtitulo })}
      <ol class="passos-onboarding">${t.passos.map((p) => `<li class="passo-onboarding">${marcadorEtapa(p.n, 'pendente')}
        <div class="passo-onboarding__texto"><b class="txt-cabecalho">${esc(p.titulo)}</b><p class="introducao__texto">${esc(p.texto)}</p></div></li>`).join('')}</ol>`)}
    ${rodape(botao(t.botao, { attrs: 'data-ir="sobre-voce"' }), { simples: true })}`,
};
