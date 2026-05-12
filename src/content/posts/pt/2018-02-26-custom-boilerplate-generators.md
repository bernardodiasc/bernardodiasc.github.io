---
title: Geradores de boilerplate personalizados
date: 2018-02-26
category: this-blog
lang: pt
tags:
  - node.js
  - yarn
  - boilerplate
  - generators
  - human-written
excerpt: Este site possui alguns geradores de boilerplate customizados que facilitam a vida.
---

Existem algumas tarefas repetitivas que podem causar certa preguiça para avançar rápido no projeto. Geradores de boilerplate são algo muito legal que já existe há um bom tempo. Muitos de nós já usamos o [Yeoman](http://yeoman.io/) para a tarefa de scaffolding. Existem também muitos geradores de boilerplate React no NPM que funcionam muito bem para diversos propósitos.

Para este projeto eu escrevi meu próprio script para gerar arquivos. Não com a intenção de ser um concorrente de outras opções, isso foi por diversão, para exercitar habilidades em Node.js.

Vamos ver o que já temos:

- `yarn new:component`
  - Isso vai pedir ao usuário para escolher um dos tipos: `displays` ou `screens`, pedir um nome e se deve ser aninhado em algum outro componente do mesmo tipo. Este setup usa o padrão "display&container" para componentes React, eu acho que essa é uma maneira incrível de desenvolver frontend e vou dedicar um post inteiro explicando isso.
- `yarn new:content`
  - Até agora este site só tem o tipo de conteúdo `posts`, e por enquanto é apenas um simples arquivo markdown (frontmatter) com algumas variáveis padrão.

## Sobre o progresso

Vou repetir isso com certa frequência, este projeto está em andamento, este é o segundo dia que estou trabalhando nele e vou explicar o que estou fazendo nos posts. Espero que você goste e ache útil... E espero que você dê sugestões e feedback assim que eu integrar uma seção de comentários 😂 - [GH Issues](https://github.com/bernardodiasc/bernardodiasc.github.io/issues) já está lá se você quiser dizer algo agora.

Certo, meus scripts de geração não estão otimizados, há muito código redundante e coisas que estão longe de perfeitas. Mas ei, funciona. Não é o ideal eu sei, mas já estou usando para mim mesmo e conforme meu tempo disponível permitir, vou melhorar.

Aqui, meu objetivo para um futuro próximo é abstrair o script do gerador em um pacote NPM [github.com/bernardodiasc/generator](https://github.com/bernardodiasc/generator) (por favor note que este pacote ainda não está pronto no momento em que escrevo este post), vou até incluir um boilerplate de todo este framework e um CLI mais avançado.

Se você quiser dar uma olhada no código fonte dos geradores existentes, aqui vai:

- [src/config/componentGenerator.js](https://github.com/bernardodiasc/bernardodiasc.github.io/blob/develop/src/config/componentGenerator.js)
- [src/config/contentGenerator.js](https://github.com/bernardodiasc/bernardodiasc.github.io/blob/develop/src/config/contentGenerator.js)

Pull requests são bem-vindos! Valeu!
