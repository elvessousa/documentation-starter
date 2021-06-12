---
lang: pt
title: 'Links laterais'
slug: 'lateral'
thumbnail: https://images.elvessousa.com.br/hearing.jpg
---

## Configurando a barra lateral

Para adicionar links na barra lateral, basta editar o arquivo sidebar.yml, apontando o idioma alvo, nome do link (label) e endereço do link (link).

```yaml title=src/config/sidebar.yml
sidebar:
  en:
    - label: 'Home'
      link: '/'

    - label: 'Getting started'
      link: '/docs'
      items:
        - label: 'Install'
          link: '/install'
        - label: 'First Steps'
          link: '/first-steps'

  pt:
    - label: 'Início'
      link: '/'

    - label: 'Como iniciar'
      link: '/docs'
      items:
        - label: 'Instalação'
          link: '/instalacao'
        - label: 'Primeiros Passos'
          link: '/primeiros-passos'
```

Cuidado na identação e sintaxe deste arquivo. Qualquer erro aqui resultará em efeitos adversos nos links presentes na barra lateral.
