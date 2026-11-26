// Converte os dados de postagem (dados/conteudo.js) para o formato do componente Postagem do DS.
import { pessoas } from '../dados/conteudo.js';

export function dadosPostagem(p) {
  const autor = p.autor ? pessoas[p.autor] : null;
  return {
    ...p,
    autorId: p.autor || null,
    nome: autor?.nome || p.nome,
    meta: autor ? `${autor.usuario} · ${p.quando}` : p.quando,
    autorPessoa: autor || (p.midiaAutor ? { midia: p.midiaAutor } : { iniciais: p.semFoto ? '' : (p.iniciais || '') }),
  };
}
