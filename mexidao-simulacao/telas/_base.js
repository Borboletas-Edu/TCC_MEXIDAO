// Estrutura comum das telas (frame 375×812 do Figma):
//   status (36) · cabeçalho (50) · corpo rolável (conteúdo começa em y=110) · rodapé de ações (botão em y=708)
import { cabecalho, cls } from '../componentes/index.js';

export const status = '<div class="tela__status"></div>';
export const topo = (titulo, opcoes = {}) => status + cabecalho(titulo, opcoes);
export const corpo = (html, classe = '', attrs = '') => `<div class="${cls('tela__corpo', classe)}" ${attrs}>${html}</div>`;
// simples = só um botão (margem inferior 56); com link abaixo do botão, a margem é 40
export const rodape = (html, { simples = false, classe = '' } = {}) => `<div class="${cls('tela__rodape', simples && 'tela__rodape--simples', classe)}">${html}</div>`;
