// Figma: Tela Inicial · 872:4947 — mascotes animados (vídeo 872:4957, 319×319 em x 32, y 104)
import { app, login } from '../dados/conteudo.js';
import { ondas, botao, cabecalho, animacao, esc } from '../componentes/index.js';
import { status, rodape } from './_base.js';
const t = login.inicial;

export default {
  id: 'inicial', fundo: 'b', nome: 'Tela Inicial', fluxo: 1, figma: '872:4947',
  render: () => `${status}${cabecalho(app.nome, { voltar: false })}
    <div class="tela__corpo inicial">${animacao('inicial', 'inicial__animacao')}<h1 class="txt-titulo centro">${esc(t.titulo)}</h1></div>
    <span class="fundo-frente fundo-frente--b" aria-hidden="true"></span>
    ${rodape(`<div class="inicial__acesso"><p class="txt-apoio centro">${esc(t.temConta)}</p>${botao(t.entrar, { attrs: 'data-ir="login"' })}</div>
      <div class="inicial__acesso"><p class="txt-apoio centro">${esc(t.naoTemConta)}</p>${botao(t.criar, { tipo: 'secundario', attrs: 'data-ir="cadastro"' })}</div>`, { simples: true, classe: 'inicial__rodape' })}`,
};
