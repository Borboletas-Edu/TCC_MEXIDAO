// Figma: Perfil · Editar dados e preferências · 872:6706
import { perfil } from '../dados/conteudo.js';
import { botao, campo, avatarCamera, linkAcao, icone, esc } from '../componentes/index.js';
import { topo, corpo, rodape } from './_base.js';
const t = perfil.editarTela;
// O app tem apenas o modo claro (sem opção de aparência)

export default {
  id: 'editar-perfil', nome: 'Editar perfil', fluxo: 9, figma: '872:6706',
  render: () => `${topo(t.cabecalho)}
    ${corpo(`<h1 class="txt-titulo">${esc(t.titulo)}</h1>
      <div class="editar__foto">${avatarCamera(perfil.iniciais)}<div class="editar__acoes-foto">${linkAcao(t.alterarFoto, { attrs: 'data-alterar' })}<button type="button" class="txt-apoio" data-remover>${esc(t.removerFoto)}</button></div></div>
      ${t.campos.map(([r, v]) => campo({ rotulo: r, valor: v })).join('')}`, 'editar')}
    ${rodape(botao(t.salvar, { attrs: 'data-salvar' }), { simples: true })}`,
  ligar: (el, ctx) => {
    const input = el.querySelector('.avatar-camera input'), av = el.querySelector('[data-avatar]');
    el.querySelector('[data-alterar]').addEventListener('click', () => input.click());
    input.addEventListener('change', () => { if (input.files[0]) av.innerHTML = `<img class="avatar__foto" src="${URL.createObjectURL(input.files[0])}" alt="">`; });
    el.querySelector('[data-remover]').addEventListener('click', () => { av.textContent = perfil.iniciais; });
    el.querySelector('[data-salvar]').addEventListener('click', () => ctx.voltar(1, t.salvo));
  },
};
