---
lang: en
title: 'First steps'
slug: 'first-steps'
toc: true
thumbnail: https://images.elvessousa.com.br/hearing.jpg
---

## Content creation

To add content, simply create markdown files and saved in the **/docs** folder within the directory with the desired language iso. This model comes with English and Portuguese (PT) by default.

## Frontmatter

Every Markdown file must have a header to inform the Gatsby how to make the content available. This is also called _frontmatter_. Here's an example of how this header is:

```markdown title=first-steps.md
---
lang: en
title: 'First steps'
slug: '/first-steps'
toc: true
thumbnail: https://images.elvessousa.com.br/hearing.jpg
---
```

### Lines

Here is a brief explanation of each line:

- **lang**: ISO code for the content language. Ex.: pt for Portuguese or en for English
- **title**: page title
- **slug**: page slug
- **toc**: if true, shows a table of contents at right
- **thumbnail**: thumbnail for sharing purposes

## Formatting

Content formatting follows the Markdown standard. If you need something more personalized, HTML tags and MDX components are supported.
