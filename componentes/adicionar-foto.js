// DS · Adicionar foto do prato (vazia / com foto + "Trocar foto") e Anexar foto (avaliação)
import { icone } from './icone.js';
import { esc } from './util.js';

export const adicionarFoto = ({ titulo, texto, trocar, exemplo = 'Usar foto de exemplo' }) => `<div class="adicionar-foto" data-adicionar-foto>
  <input type="file" accept="image/*" hidden>
  <div class="adicionar-foto__vazio"><span class="adicionar-foto__icone">${icone('cameraMais')}</span><b class="txt-rotulo">${esc(titulo)}</b><span class="txt-pequeno">${esc(texto)}</span><button type="button" class="adicionar-foto__exemplo" data-exemplo>${esc(exemplo)}</button></div>
  <button type="button" class="adicionar-foto__trocar">${icone('cameraMais')}${esc(trocar)}</button>
</div>`;
// Liga o componente: aoEscolher(url, ehExemplo)
export function ligarAdicionarFoto(el, urlExemplo, aoEscolher) {
  const input = el.querySelector('input');
  const usar = (url, exemplo) => { el.classList.add('adicionar-foto--com-foto'); el.style.backgroundImage = `url("${url}")`; aoEscolher?.(url, exemplo); };
  el.addEventListener('click', (e) => {
    if (e.target.closest('[data-exemplo]')) { e.stopPropagation(); return usar(urlExemplo, true); }
    if (urlExemplo) return usar(urlExemplo, true); // simulação: tocar no campo usa a foto de exemplo
    input.click();
  });
  input.addEventListener('change', () => input.files[0] && usar(URL.createObjectURL(input.files[0]), false));
}
export const anexarFoto = (texto) => `<label class="anexar-foto"><input type="file" accept="image/*" hidden><span class="anexar-foto__seta">${icone('upload')}</span><span class="txt-apoio">${esc(texto)}</span></label>`;
export function ligarAnexarFoto(el) {
  const input = el.querySelector('input');
  input.addEventListener('change', () => { if (!input.files[0]) return; el.classList.add('anexar-foto--com-foto'); el.style.backgroundImage = `url("${URL.createObjectURL(input.files[0])}")`; });
}
