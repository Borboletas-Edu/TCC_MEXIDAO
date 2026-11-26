# Mexidão · Simulação interativa

Simulação navegável do aplicativo Mexidão (TCC), feita em HTML, CSS e JavaScript, sem etapa de build.

- `index.html` — simulação do aplicativo
- `ds.html` — página do Design System

A simulação foi feita para ser vista no computador e fica bloqueada em celulares e tablets
(para liberar, altere `BLOQUEAR` para `false` em `nucleo/bloqueio.js`).

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo, `mexidao`).
2. Envie todos os arquivos desta pasta para a raiz do repositório, incluindo o arquivo oculto `.nojekyll`
   (sem ele, os arquivos que começam com `_` em `telas/` não são publicados). Duas formas:
   - **Pelo terminal (recomendado):**
     ```
     git init
     git add .
     git commit -m "Simulação Mexidão"
     git branch -M main
     git remote add origin https://github.com/<seu-usuario>/<nome-do-repositorio>.git
     git push -u origin main
     ```
   - **Pelo site (Add file → Upload files):** o site aceita no máximo 100 arquivos por envio, então mande as
     pastas em partes (por exemplo, `midia` sozinha e depois o restante). Arquivos ocultos podem não ir junto
     ao arrastar; se `.nojekyll` não aparecer no repositório, crie-o em **Add file → Create new file**
     com o nome `.nojekyll` e o conteúdo vazio.
3. Em **Settings → Pages**, em *Build and deployment*, escolha **Deploy from a branch**,
   branch `main` e pasta `/ (root)`, e salve.
4. Em um ou dois minutos o site fica disponível em `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.

## Rodar no computador

Por usar módulos JavaScript, abra por um servidor local em vez de clicar no arquivo:

```
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.
