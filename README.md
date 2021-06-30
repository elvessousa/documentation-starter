# Documentation Starter

![Screenshot](./documentation-starter.png)
_Screenshot_

A TypeScript starter for Next.js, focused on creating documentation.

## Plugins

- Markdown for content
- Prism for code syntax on pages
- Remark Slug for adding anchors to titles

## Getting started

Clone this repo and do the following:

1. `npm install` or `yarn`;
2. `yarn start`;

To view the project, open `http://localhost:3000` in your browser.

## Creating content

Save your markdown files inside the folder `/content/docs/[your-language-iso]`. Sample files are available for a quick start. Pages can be created in the same way, using the folder `/content/pages/[your-language-iso]`. Other instructions are included in the `docs` folder. How convenient!

## Configuring the sidebar

To configure which links will appear on the sidebar, edit the file `/src/config/sidebar.yml`. Follow the scheme below:

```yaml
sidebar:
  en:
    - label: 'Home'
      link: '/'

    - label: 'Getting started'
      items:
        - label: 'Install'
          link: 'installation'
        - label: 'First Steps'
          link: 'first-steps'
        - label: 'Sidebar links'
          link: 'sidebar'

    - label: 'Extending'
      items:
        - label: 'Appearance'
          link: 'appearance'
        - label: 'Components'
          link: 'components'

  pt:
    - label: 'Início'
      link: '/'

    - label: 'Introdução'
      items:
        - label: 'Instalação'
          link: 'instalacao'
        - label: 'Primeiros Passos'
          link: 'primeiros-passos'
        - label: 'Links laterais'
          link: 'lateral'

    - label: 'Extendendo'
      items:
        - label: 'Aparência'
          link: 'aparencia'
        - label: 'Componentes'
          link: 'componentes'
```

## Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-new-feature`;
3. Commit your changes: `git commit -m 'Add some feature'`;
4. Push to the branch: `git push origin my-new-feature`.
