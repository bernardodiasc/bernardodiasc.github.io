---
title: Como corrigir o problema de sobrescrita de domínio customizado ao usar o script de deploy do gh-pages
date: 2018-03-16
category: this-blog
lang: pt
tags:
  - github
  - deploy
  - gh-pages
  - npm
  - yarn
  - create-react-app
excerpt: Às vezes pequenas mudanças podem derrubar um site inteiro, felizmente às vezes a correção é fácil!
---

Ontem migrei meu site baseado em GitHub Pages para um domínio customizado. Era https://bernardodiasc.github.io e agora é https://bernardodiasdacruz.com. Os passos para fazer isso são bem diretos, há muitas instruções úteis disponíveis na documentação do GitHub: [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)

Este projeto é baseado no [create-react-app](https://github.com/facebookincubator/create-react-app/) e para a etapa de deploy escolhi hospedar no gh-pages. Existem muitas formas diferentes de tornar essa tarefa o mais fácil possível, eu optei por usar o [NPM gh-pages](https://github.com/tschaub/gh-pages).

## O problema surgiu e a solução

Após a mudança do domínio customizado, as coisas pareciam estar bem, mas cada deploy seguinte estava limpando a configuração de domínio customizado no repositório do GitHub, fazendo o site responder 404.

A solução não estava clara em nenhuma documentação, mas na verdade é bem simples:

- Crie um arquivo chamado `CNAME` na raiz do site. No caso do create-react-app, coloque esse arquivo na pasta `/public` porque ele será copiado para `/dist` quando você executar `yarn build`, e a pasta `/dist` se tornará a raiz quando você executar `gh-pages -d dist`;
- Escreva seu domínio customizado dentro desse arquivo, no meu caso, era apenas uma linha com `bernardodiasdacruz.com`;

Faça o commit e deploy, deve funcionar!

Você pode conferir a solução para este site no [repositório](https://github.com/bernardodiasc/bernardodiasc.github.io/commit/ab1138bb72c181ce48e688c57fdb8f5c76e4b653).
