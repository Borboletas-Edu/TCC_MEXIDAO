// DS · Navegação principal · Caderno (Ativo = Receitas / Comunidade / Trilha / Perfil)
import { icone } from './icone.js';
import { abas } from '../dados/fluxos.js';

export const navegacao = (ativa) => `<nav class="area-navegacao" aria-label="Navegação principal"><div class="navegacao">${abas.map((a) =>
  `<button type="button" class="navegacao__destino ${a.id === ativa ? 'navegacao__destino--ativo' : ''}" data-aba="${a.id}" aria-label="${a.rotulo}">${icone(a.icone)}</button>`).join('')}</div></nav>`;
