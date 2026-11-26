// Figma: Configurações · Política de privacidade · 872:7025
import { configuracoes } from '../dados/conteudo.js';
import { documento } from './_documento.js';
export default { id: 'politica', nome: 'Política de privacidade', fluxo: 9, figma: '872:7025', render: () => documento(configuracoes.politica) };
