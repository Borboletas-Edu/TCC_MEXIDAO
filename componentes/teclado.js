// DS · Teclado do sistema (pt-BR) · simulado, ligado a um campo de texto
const L = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
const tecla = (c) => `<button type="button" class="teclado__tecla" data-tecla="${c}">${c}</button>`;
export const teclado = (acao = 'buscar') => `<div class="teclado" data-teclado>
  <div class="teclado__linha">${[...L[0]].map(tecla).join('')}</div>
  <div class="teclado__linha">${[...L[1]].map(tecla).join('')}</div>
  <div class="teclado__linha"><button type="button" class="teclado__tecla teclado__tecla--especial" data-tecla="shift">⇧</button>${[...L[2]].map(tecla).join('')}<button type="button" class="teclado__tecla teclado__tecla--especial" data-tecla="apagar">⌫</button></div>
  <div class="teclado__linha"><button type="button" class="teclado__tecla teclado__tecla--numeros">123</button><button type="button" class="teclado__tecla teclado__tecla--espaco" data-tecla=" ">espaço</button><button type="button" class="teclado__tecla teclado__tecla--buscar" data-tecla="ok">${acao}</button></div>
  <div class="teclado__base"></div>
</div>`;
export function ligarTeclado(raiz, input, aoOk) {
  raiz.querySelectorAll('[data-tecla]').forEach((b) => b.addEventListener('pointerdown', (e) => e.preventDefault()));
  raiz.querySelectorAll('[data-tecla]').forEach((b) => b.addEventListener('click', () => {
    const k = b.dataset.tecla;
    if (k === 'ok') return aoOk?.();
    if (k === 'shift') return;
    input.value = k === 'apagar' ? input.value.slice(0, -1) : input.value + k;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }));
}
