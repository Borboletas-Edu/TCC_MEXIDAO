// Figma: Configurações · Termos de uso · 872:6979
import { configuracoes } from '../dados/conteudo.js';
import { documento } from './_documento.js';
export default { id: 'termos', nome: 'Termos de uso', fluxo: 9, figma: '872:6979', render: () => documento(configuracoes.termos) };
