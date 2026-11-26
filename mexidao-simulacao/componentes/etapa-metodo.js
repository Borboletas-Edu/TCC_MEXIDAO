// DS · Etapa do método (Cartão) · marcador + nome + instruções
import { marcadorEtapa } from './marcador-etapa.js';
import { esc } from './util.js';

export const etapaMetodo = (n, nome, instrucoes) => `<div class="etapa-metodo">${marcadorEtapa(n)}<div class="etapa-metodo__texto"><b class="etapa-metodo__nome">${esc(nome)}</b><p class="etapa-metodo__instrucoes">${esc(instrucoes)}</p></div></div>`;
