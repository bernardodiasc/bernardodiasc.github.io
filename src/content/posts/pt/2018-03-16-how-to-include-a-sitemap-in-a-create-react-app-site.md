---
title: Como incluir um sitemap.xml em um site create-react-app
date: 2018-03-16
category: this-blog
lang: pt
tags:
  - google
  - seo
  - react
  - sitemap
  - robots
  - create-react-app
  - babel
  - node
  - es5
  - javascript
  - npm
  - yarn
  - workflow
excerpt: Criando geração de sitemap.xml com Babel e Node.
---

Este blog está evoluindo e seu conteúdo está ficando maior. Ainda está hospedado no GitHub Pages, mesmo que o DNS agora aponte para um domínio customizado.

SEO foi uma razão que pesou na mudança para domínio customizado. Bem, também fica melhor ter um domínio customizado. De qualquer forma, para os aspectos de SEO, também incluí a funcionalidade de pré-renderização e meta tags no head. Ambas coisas que poderiam ter um post dedicado para cada uma.

O que vou explicar aqui é como incluí um arquivo `sitemap.xml` neste site. Este é um projeto baseado em `create-react-app`, portanto a implementação é de certa forma afetada pelos padrões dessa biblioteca.

A solução foi criar um script que geraria o arquivo sitemap, e esse script é incluído na tarefa de build.

## O passo a passo

Tudo bem, primeiro o mais importante. Minha configuração do CRA estava usando a configuração padrão do Babel, e por causa disso eu não havia instalado nem configurado o Babel para este projeto anteriormente. Eu poderia escrever meu script gerador em JS antigo, mas havia algumas preocupações principais me impedindo de fazer isso:

Uma preocupação era que eu queria usar os métodos seletores existentes para iterar o conteúdo, para as páginas baseadas em conteúdo, e eles já estavam escritos com as funcionalidades mais recentes do JS.

A outra preocupação era que eu simplesmente queria escrever o script com JS moderno.

### Configurar o Babel

Instale todos os requisitos:

```
yarn add babel-cli babel-preset-env babel-preset-stage-0 babel-preset-react --dev
```

Crie um arquivo `.babelrc` na raiz:

```
{
  "presets": ["env", "react", "stage-0"]
}
```

Pronto, o Babel está pronto e podemos avançar para o nosso script em JS moderno!

Referências:

- https://babeljs.io/docs/usage/cli/
- https://babeljs.io/docs/plugins/
- https://babeljs.io/docs/usage/babelrc/

### Criar o script gerador de sitemap

Para criar o sitemap XML eu usei https://github.com/ekalinin/sitemap.js, é bem simples e as instruções no README são bem boas para muitos casos diferentes.

```
yarn add sitemap --dev
```

O script fica assim:

```
import path from 'path'
import sm from 'sitemap'
import fs from 'fs'

import config from '.'
import data from '../data.json'
import {
  getAllPostsForListing,
  getAllCategoriesForListing,
} from '../selectors/data'

const OUTPUT_FILE = path.resolve(__dirname, '..', '..', 'public', 'sitemap.xml')

const postsUrls = getAllPostsForListing({data})
  .map(post => {
    const handle = [
      post.handle.substring(0, 4),
      post.handle.substring(5, 7),
      post.handle.substring(8, 10),
      post.handle.substring(11),
    ].join('/')
    return {
      url: `${config.PUBLIC_URL}/${handle}`,
      changefreq: 'weekly',
      priority: 0.8,
    }
  })

const categoriesUrls = getAllCategoriesForListing({data})
  .map(category => ({
    url: `${config.PUBLIC_URL}/category/${category.handle}`,
    changefreq: 'weekly',
    priority: 0.8,
  }))

const sitemap = sm.createSitemap({
    hostname: 'https://bernardodiasdacruz.com',
    cacheTime: 600000, //600 sec (10 min) cache purge period
    urls: [
      { url: '/', changefreq: 'weekly', priority: 1 },
      { url: '/archive', changefreq: 'weekly', priority: 0.5 },
      { url: '/search', changefreq: 'weekly', priority: 0.5 },
      { url: '/about-me', changefreq: 'monthly', priority: 0.5 },
      ...postsUrls,
      ...categoriesUrls,
    ]
})

fs.writeFileSync(OUTPUT_FILE, sitemap.toString())

console.log(`Sitemap written at ${OUTPUT_FILE}`)
```

Sim, sei que muitos recursos por aí sugerem que eu carregue um arquivo de `routes` e itere com ele. Você pode realmente optar por essa abordagem se preferir. Ao ler o script acima, espero que você entenda a ideia do passo a passo. Na minha opinião, como este é um projeto relativamente pequeno, codificar diretamente as páginas do sitemap é suficiente.

### Fluxo de trabalho

No script do `package.json`, incluí uma nova tarefa chamada `sitemap` e a adicionei na tarefa `prebuild`, veja:

```
"scripts": {
  "sitemap": "./node_modules/.bin/babel-node src/config/sitemap.js",
  "prebuild": "npm run content && npm run sitemap"
}
```

### A etapa final

Após fazer o commit e deploy dessas mudanças, fui ao https://www.google.com/webmasters/ e testei o sitemap lá, com sucesso. Confira o resultado em https://bernardodiasdacruz.com/sitemap.xml.

Esta solução foi integrada neste site neste [commit](https://github.com/bernardodiasc/bernardodiasc.github.io/commit/0d7f2f457db38512d8392621d1e31935afcf4039).

---

_[Edit 2018-03-21]_

Ops, as URLs dos posts têm o formato `/:year/:month/:day/:title` mas os nomes dos arquivos estão no formato `:year-:month-:day-:title`. Pequeno erro, que explicava por que minha indexação não estava funcionando.

Estou ciente de outras coisas que poderiam ser melhoradas, e definitivamente trabalharia nisso conforme minha disponibilidade permitir. Scripts como esse poderiam se beneficiar enormemente de suítes de teste. Na verdade, em projetos de clientes, especialmente os grandes, costumo escrever scripts executando simultaneamente as suítes de teste. Como em TDD, codificando para fazer todas as especificações passarem. Um erro como esse teria sido detectado antes de publicar. Como dizem: "corrija bugs antes que eles existam".

```diff
const postsUrls = getAllPostsForListing({data})
-  .map(post => ({
-    url: `${config.PUBLIC_URL}/${post.handle}`,
-    changefreq: 'weekly',
-    priority: 0.8,
-  }))
+  .map(post => {
+    const handle = [
+      post.handle.substring(0, 4),
+      post.handle.substring(5, 7),
+      post.handle.substring(8, 10),
+      post.handle.substring(11),
+    ].join('/')
+    return {
+      url: `${config.PUBLIC_URL}/${handle}`,
+      changefreq: 'weekly',
+      priority: 0.8,
+    }
+  })
```
