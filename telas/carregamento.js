// Figma: Preferências e substituições (tela de carregamento) · 872:5682
// Ilustração: gato e cachorro lavando as mãos (animação SVG, dados/ilustracoes.js → "gato-e-cachorro").
import { adaptacao } from '../dados/conteudo.js';
import { ilustracao, esc } from '../componentes/index.js';
import { status } from './_base.js';
const t = adaptacao.carregamento;

export default {
  id: 'carregamento', nome: 'Carregamento · lave as mãos', fluxo: 4, figma: '872:5682',
  render: () => `${status}
    <div class="carregamento">
      ${ilustracao('gato-e-cachorro', 'carregamento__mascote', 'Gato e cachorro lavando as mãos')}
      <p class="txt-corpo centro carregamento__texto">${esc(t.texto)}</p>
      <span class="carregando"></span>
    </div>`,
  // Duração: 3,4 s. Destino padrão: preparo da receita; a Trilha usa destino "fase" (início da atividade)
  ligar: (el, ctx) => ctx.depois(() => (ctx.params.destino === 'fase'
    ? ctx.substituir('fase', ctx.params.p || { n: 0 }, 'fade')
    : ctx.substituir('preparo', { etapa: 0, balao: true }, 'fade')), 3400),
};
