---
lang: en
title: 'Sidebar links'
slug: 'sidebar'
thumbnail: https://images.elvessousa.com.br/hearing.jpg
---

## Configuring the sidebar

To add links to the sidebar, simply edit the sidebar.yml file, including the target language, link name (label) and link address (link).

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

Beware of the indentation and syntax of this file. Any mistake here will result in adverse effects on the links present in the sidebar.
