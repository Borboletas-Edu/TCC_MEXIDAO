// Figma: Central de ajuda · Ajuda com IA · 872:6917
import { chat } from '../dados/conteudo.js';
import { telaChat, ligarChat } from '../componentes/index.js';

export default {
  id: 'ajuda-ia', nome: 'Ajuda com IA', fluxo: 9, figma: '872:6917', classe: 'tela--chat',
  render: () => telaChat(chat.app, { vazio: false, historico: chat.app.historico }),
  ligar: (el, ctx) => ligarChat(el, ctx, chat.app, { mensagens: ['Ajuda com IA', '872:6917'], digitando: ['Ajuda com IA · digitando', '872:6917'], gravando: ['Ajuda com IA · gravando', '872:6917'] }),
};
