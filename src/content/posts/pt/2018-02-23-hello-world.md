---
title: Olá Mundo
date: 2018-02-23
category: this-blog
lang: pt
tags:
  - static files
  - react
  - redux
  - boilerplate
  - github pages
  - yarn
  - webpack
  - filestojson
  - markdown
  - frontmatter
  - human-written
excerpt: Olá! Neste post eu explico brevemente como este site foi feito.
---

Olá! Bem-vindo ao meu site pessoal (e profissional).

"O que esse site tem de especial?", você pode estar se perguntando... 🙋

Primeiramente, bom, é o meu site, eba! 😃

É mais legal do que parece, vou tentar manter um bom conteúdo para você ler, mas o ponto de partida aqui é outro. Eu sou um desenvolvedor web, especializado em desenvolvimento front end. Sim, eu faço o código que resulta na sua experiência. No momento em que estou escrevendo isso, o projeto está em sua fase inicial e eu queria manter o visual o mais simples possível. O visual será melhorado progressivamente, agora é o que está por baixo do capô que importa.

Certo, vamos ver qual é o grande diferencial aqui:

- É open source [github.com/bernardodiasc/bernardodiasc.github.io](https://github.com/bernardodiasc/bernardodiasc.github.io)
- O conteúdo é baseado em arquivos estáticos [github.com/bernardodiasc/filestojson](https://github.com/bernardodiasc/filestojson)
- O framework é bastante poderoso [bernardodiasdacruz.com/docs](https://bernardodiasdacruz.com/docs/)

Sendo um desenvolvedor front end, há muito a ser feito para tornar um projeto incrível. Começando pelo fato de que um framework é todo o conjunto de ferramentas e técnicas que envolvem o projeto, e é super divertido aprender como fazer um framework. Bom, sim, eu poderia usar algo pronto da comunidade, e eu usei muitas opções diferentes para diferentes casos, tive experiência com todos os principais CMSes por aí, e muitos frameworks de diversos tipos, mas aqui, eu fiz meu próprio framework, porque é legal, porque é do jeito que eu quero, porque eu preciso mostrar que sei o que estou fazendo para que as pessoas me contratem! 😁

O script `filestojson` foi feito para o [x-team.com/legacy](https://x-team.com/legacy/) em sua primeira versão, e naquele momento todo o site tinha geradores de arquivos HTML estáticos e tarefas npm para construir os assets. Na segunda versão eu mantive o gerador de conteúdo e atualizei o render de templates para React. Porque React é incrível e torna a experiência de desenvolvimento muito mais fluida.

A maioria dos problemas que encontrei na segunda versão estava basicamente relacionada a fazer uma aplicação single-page se comportar bem em um servidor de arquivos estáticos. Foi minha primeira vez fazendo isso, dei uma chance ao Gatsby e ao Next.js, mas eu queria fazer algo mais simples, então mantive o setup do Create-React-App e instalei o [github.com/stereobooster/react-snap](https://github.com/stereobooster/react-snap). Perfeito! Funcionou muito bem.

Para o fluxo de trabalho eu preparei um monte de ferramentas legais, padrões e procedimentos. Eu gosto de trabalhar em projetos de grande escala, então neste framework eu usei todo o arsenal recomendado para apps grandes (quase, não há sistema de tipagem implementado). Você pode ver no README principal deste site ou conferir com ainda mais detalhes na documentação em [bernardodiasdacruz.com/docs](https://bernardodiasdacruz.com/docs/), mas deixe-me mencionar brevemente aqui:

- Setup: `yarn install`
- Desenvolvimento: `yarn start`
- Documentação com Storybook: `yarn docs`
- Scaffolding de componentes: `yarn new:component`
- Scaffolding de conteúdo: `yarn new:content`
- Gerador de conteúdo: `yarn content`
- ESLint e StyleLint: `yarn lint`
- Testes com Jest: `yarn test`
- Build de arquivos estáticos: `yarn build`
- Servidor estático: `yarn serve`
- Deploy do projeto: `yarn deploy`

😆

Perceba que é tudo simples, digite "yarn alguma-coisa" e voilà! O setup é trivial, o fluxo de desenvolvimento é suave e rápido. Oferece padrões completos para documentação e showcase dos componentes usando Storybooks, e também inclui um gerador de componentes que já vem com todo o boilerplate. Linters e suítes de testes, sim, eu cobri isso também. Pode fazer build e subir um servidor estático local para ver como está funcionando. E finalmente, deploy fácil. Na tentativa de commitar mudanças, o robô vai prevenir ao máximo possível a introdução de código errado ou bugs (se devidamente testado).

Para o CSS eu mantive puro, usando o padrão de nomenclatura BEM. Eu gosto de Sass, gosto ainda mais de PostCSS e CSS Modules, e Styled-components. Mas eu escolhi CSS puro aqui e estou feliz com isso.

Todas as ferramentas estão aqui para ajudar, para tornar a experiência de desenvolvimento melhor, confiável e mais rápida.

Obrigado por ler meu blog, vou fazer o meu melhor para postar mais sobre muitas coisas e evoluir o sistema deste blog, e postar sobre isso também.
