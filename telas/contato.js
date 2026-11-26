// Figma: Central de ajuda · Contato · assunto aberto · 872:7430
import { configuracoes } from '../dados/conteudo.js';
import { botao, campo, campoMultilinha, seletor, opcao, grupoOpcoes, introducao, avisoNota } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = configuracoes.contato;

export default {
  id: 'contato', nome: 'Contato', fluxo: 9, figma: '872:7430',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`${introducao({ titulo: t.titulo, texto: t.texto, grande: true })}
      ${campo({ rotulo: t.nome, valor: t.nomeValor })}
      ${campo({ rotulo: t.email, valor: t.emailValor, tipo: 'email' })}
      ${seletor({ rotulo: t.assunto, valor: t.assuntoValor, attrs: 'data-assunto' })}
      ${campoMultilinha({ rotulo: t.mensagem, placeholder: t.mensagemPh })}
      ${avisoNota(t.mensagemAjuda)}`, 'contato')}
    ${rodape(botao(t.enviar, { attrs: 'data-enviar' }), { simples: true })}`,
  ligar: (el, ctx) => {
    const s = el.querySelector('[data-assunto]');
    s.addEventListener('click', () => {
      const atual = s.querySelector('[data-valor]').textContent;
      s.classList.add('seletor--aberto');
      ctx.estado('Contato · assunto aberto', '872:7430');
      ctx.painel(grupoOpcoes(t.opcoes.map((o) => opcao(o, { selecionada: o === atual })).join(''), 'data-opcao-grupo'), {
        titulo: t.painelTitulo, classe: 'painel-assunto',
        rodape: botao(t.confirmar, { attrs: 'data-ok' }),
        aoFechar: () => { s.classList.remove('seletor--aberto'); ctx.estado('Contato', '872:7430'); },
        ligar: (p, fechar) => p.querySelector('[data-ok]').addEventListener('click', () => { s.querySelector('[data-valor]').textContent = p.querySelector('.opcao--selecionada .opcao__rotulo').textContent; fechar(); }),
      });
    });
    el.querySelector('[data-enviar]').addEventListener('click', () => { ctx.som('enviar'); ctx.voltar(1, t.enviada); });
  },
};
