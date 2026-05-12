---
title: Redesign e melhor tipografia
date: 2018-03-05
category: this-blog
lang: pt
tags:
  - design
  - typography
  - CSS
  - human-written
excerpt: Quarto dia de desenvolvimento deste site, um blog para leitura precisa ser agradável de ler.
---

Criando um novo post:

```
$ yarn new:content
? What type of content would you like to generate? posts
? Content name: 2018-03-05-redesign-and-better-typography
```

É assim que meu gerador de conteúdo funciona. Depois disso, um arquivo Markdown é criado com variáveis YML básicas usadas nos posts.

Indo direto ao que este post se propõe:

## Progresso do design e tipografia

Aviso: Não sou designer, o que faço bem é transformar designs gráficos em código. Direção de arte é uma habilidade completamente diferente que requer enorme experiência e dedicação. Mas passo a passo este projeto vai ficar mais bonito, vamos ver o que temos até agora.

### Primeira rodada

Esta versão foi o mais minimalista possível. Eu não havia planejado nenhum design para este site, então foi mais uma questão de exibir conteúdo preto e branco que não parecesse com os padrões do navegador e alguma estrutura mínima para organizar o conteúdo e a navegação.

#### Página inicial

<figure>
  <img alt="" src="/content/posts/2018-03-05-redesign-and-better-typography/design-round1-home.png" />
</figure>

#### Página do post

<figure>
  <img alt="" src="/content/posts/2018-03-05-redesign-and-better-typography/design-round1-post.png" />
</figure>

### Segunda rodada

Mais algumas horas, muitas linhas de CSS a mais. Nesta etapa, me concentrei em criar mais estruturas CSS, mais cores e uma tentativa de tema de design. A tipografia aqui ainda parecia horrível 😅

#### Página inicial

<figure>
  <img alt="" src="/content/posts/2018-03-05-redesign-and-better-typography/design-round2-home.png" />
</figure>

#### Página do post

<figure>
  <img alt="" src="/content/posts/2018-03-05-redesign-and-better-typography/design-round2-post.png" />
</figure>

### Terceira rodada

Para a terceira rodada, era muito importante melhorar a tipografia. Eu já havia começado a compartilhar meu blog e nem todo mundo entende que o estado da arte leva muito tempo, tempo que eu ainda não havia gasto neste projeto. Mas sendo um site de conteúdo textual por essência, tornar a experiência de leitura boa é crucial.

Escolhi 2 famílias de fontes para trabalhar, ambas fornecidas pelo [Google Fonts](https://fonts.google.com/):

- **Lato** para textos comuns
- **Playfair Display** para títulos

O tema blueprint se relaciona com coisas que adoro fazer, como esboçar UI, diagramar layouts e informações e arquitetura front-end. Iniciar projetos do zero é muito divertido para mim. Então pretendo explorar bastante esses assuntos aqui neste blog, esse tema meio que fez sentido para mim e espero que se mantenha. 😄

Em detalhes mais técnicos, criei muitas CSS Variables para armazenar valores constantes de tipografia, como cores e font-faces. Durante as atualizações de design, fiz muitos testes atualizando diretamente nas variáveis CSS, e isso tornou o processo muito mais fácil.

Também criei o componente `<TextBlock />` [(veja exemplo na documentação)](https://bernardodiasdacruz.com/docs/?selectedKind=Displays%2FTextBlock&selectedStory=Example) para conter todos os estilos de tipografia dentro dele. Vou dedicar um post só para explicar por que eu isolo os estilos de tipografia do escopo CSS global. Por enquanto, apenas estilos de tipografia bem básicos estão definidos no `body` e `h1-6`, e resets globais em elementos HTML que são na maioria configurados para herdar dos pais.

#### Página inicial

<figure>
  <img alt="" src="/content/posts/2018-03-05-redesign-and-better-typography/design-round3-home.png" />
</figure>

#### Página do post

<figure>
  <img alt="" src="/content/posts/2018-03-05-redesign-and-better-typography/design-round3-post.png" />
</figure>

---

Espero que goste do progresso até agora, mais melhorias visuais virão em breve. Se tiver sugestões, por favor me avise nos comentários abaixo!
