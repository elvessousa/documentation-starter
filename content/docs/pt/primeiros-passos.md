---
lang: pt
title: 'Primeiros passos'
slug: 'primeiros-passos'
toc: true
---

## Criando os arquivos

Para adicionar conteúdo, basta criar arquivos markdown e salvos na pasta **/docs** dentro do diretório com a sigla ISO do idioma desejado. Este modelo vem com suporte a inglês (en) e português (pt) por padrão.

## Frontmatter

Todo arquivo markdown deste modelo deve ter um cabeçalho para informar ao Gatsby com tratar o conteúdo e como ele estará disponível. Isto também é chamado de _frontmatter_. Eis um modelo de como é este cabeçalho:

```markdown title=primeiros-passos.md
---
lang: pt
title: 'Primeiros passos'
slug: '/primeiros-passos'
date: 2020-01-10 13:53:56
toc: true
chapter: other
thumbnail: https://picsum.photos/500/300
---
```

### Partes

Segue abaixo uma breve explicação de cada linha:

- **lang**: sigla iso para o idioma do conteúdo. Ex.: pt para português ou en para inglês.
- **title**: título da página
- **slug**: endereço da página no navegador
- **date**: data de criação da página
- **toc**: se verdadeiro (true), mostra o índice lateral à direita
- **chapter**: capítulo
- **thumbnail**: miniatura para compartilhamento

## Markdown

A formatação do conteúdo segue o padrão do markdown. Caso precise de algo mais personalizado, tags HTML e componentes MDX são suportados.
