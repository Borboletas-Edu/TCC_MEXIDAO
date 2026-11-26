// Figma: Chat com IA · Sem mensagens 872:6078 · Com mensagens 872:6097 · Digitando 872:6160 · Gravando áudio 872:6138 · Vídeo tocando 872:6205
import { chat } from '../dados/conteudo.js';
import { telaChat, ligarChat } from '../componentes/index.js';

export default {
  id: 'chat-ia', nome: 'Chat com IA · Sem mensagens', fluxo: 5, figma: '872:6078', classe: 'tela--chat',
  render: () => telaChat(chat.receita),
  ligar: (el, ctx) => ligarChat(el, ctx, chat.receita, {
    vazio: ['Chat com IA · Sem mensagens', '872:6078'], mensagens: ['Chat com IA · Com mensagens', '872:6097'],
    digitando: ['Chat com IA · Digitando', '872:6160'], gravando: ['Chat com IA · Gravando áudio', '872:6138'], video: ['Chat com IA · Vídeo tocando', '872:6205'],
  }),
};
