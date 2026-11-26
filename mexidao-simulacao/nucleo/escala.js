// Escala da moldura do celular (o app é desenhado em 375×812 e reduzido para caber na janela).
let valor = 1;
export const escala = () => valor;
export function ajustarEscala() {
  const celular = window.innerWidth < 700;
  document.body.classList.toggle('modo-celular', celular);
  valor = celular ? 1 : Math.min(1, (window.innerHeight - 32) / 836);
  document.documentElement.style.setProperty('--escala', valor);
}
