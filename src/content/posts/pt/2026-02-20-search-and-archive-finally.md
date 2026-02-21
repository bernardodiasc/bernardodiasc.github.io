---
title: Páginas de busca e arquivo, finalmente
date: 2026-02-20
category: this-blog
lang: pt
tags:
  - ai
  - developer-experience
  - javascript
  - css
  - astro
  - ai-generated
excerpt: As páginas de busca e arquivo que eram placeholders desde 2018 agora são reais. Veja como foram construídas — e como é direcionar uma IA em trabalho de UI.
thumbnail: /content/posts/2026-02-20-search-and-archive-finally/ChatGPT-Image-Feb-19-2026-10_30_59-PM.png
---

<figure>
  <img alt="Páginas de busca e arquivo, finalmente" src="/content/posts/2026-02-20-search-and-archive-finally/ChatGPT-Image-Feb-19-2026-10_30_59-PM.png" />
</figure>

No [post anterior](/2026/02/19/back-from-the-future-with-ai) eu mencionei que as páginas de busca e arquivo estavam esperando desde 2018. Bem, elas não tiveram que esperar muito depois disso — estão prontas agora, construídas na mesma sessão.

Quero ser transparente sobre como isso aconteceu, porque acredito que o processo em si vale a pena ser discutido.

## Como realmente funciona

Eu não escrevi o código dessas páginas. Eu descrevi o que eu queria, e um assistente de codificação de IA produziu a implementação. Essa é a versão honesta.

O processo foi mais ou menos assim: eu disse "construa a página de busca." Sem especificação de design, sem wireframe, sem referência de biblioteca de componentes. Apenas a intenção. A IA olhou o codebase existente — o layout, os componentes, as variáveis CSS, as content collections — e produziu uma página funcional com um campo de texto, cards de categorias, chips de tags, e filtragem client-side.

Então eu iterei. "Coloque categorias e tags em painéis colapsáveis. Quando colapsados, mostre a opção selecionada de forma menor." Outra passada. "Adicione um filtro de calendário na página de arquivo." Outra passada. Cada vez, eu descrevi o *quê*, e a IA descobriu o *como*.

## O que eu não fiz

Eu não forneci diretrizes de design. Sem sistema de espaçamento, sem tokens de cor além do que já existia nas variáveis CSS, sem breakpoints responsivos para seguir. Não desenhei nada. Não revisei o código linha por linha antes de aceitar.

Esta é a versão crua, primeira passada. E honestamente? Funciona. É funcional, é consistente com o resto do site, e foi publicada em minutos em vez de dias.

Mas também é claramente um ponto de partida. As escolhas de UI são defaults sensatos, não decisões deliberadas de design. Os painéis colapsáveis, os estilos de botões, o layout de filtros — são todos razoáveis, mas ainda não são *meus*. Eu ainda não coloquei meu próprio gosto nisso.

## O que as páginas fazem

A **página de busca** tem três formas de encontrar conteúdo:

- Um campo de texto que filtra posts por título, resumo, tags e categoria
- Cards de categorias que você pode clicar para filtrar por categoria
- Uma nuvem de tags onde você pode selecionar uma tag

As três podem ser combinadas. Tudo roda client-side com zero dependências — os dados dos posts são embutidos no momento do build.

A **página de arquivo** agora tem um painel de filtro por data com botões de ano e mês. Selecione um ano para ver apenas os posts daquele ano. Selecione um mês para refinar ainda mais. O estado do filtro aparece como um pequeno badge quando você colapsa o painel.

Ambas as seções usam painéis colapsáveis para que fiquem fora do caminho depois que você fez sua seleção.

## O que vem a seguir para essas páginas

Há muito que quero refinar. Melhor comportamento responsivo. Talvez navegação por teclado para os filtros. Polimento visual que reflita escolhas de design mais intencionais em vez de defaults de IA. Possivelmente combinar busca e arquivo em uma única experiência de filtragem mais poderosa.

O ponto é: eu saí do zero para funcional em uma sessão. A iteração, o refinamento, a parte de tornar-realmente-meu — isso vem a seguir. E esse é exatamente o tipo de trabalho que eu acho interessante.

Oito anos de "eu realmente deveria construir essa página de busca" resolvidos em uma tarde. Não perfeito, mas feito. E feito ganha do perfeito todas as vezes.
