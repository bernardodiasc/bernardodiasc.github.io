---
title: 'Isolamento de estilos de componentes: CSS Concêntrico'
date: 2018-03-20
category: frontend
lang: pt
tags:
  - architecture
  - css
  - isolation
  - stylelint
  - workflow
excerpt: Uma forma cuidadosa de escrever propriedades CSS.
---

Alô! Vamos mergulhar em mais um capítulo rumo a ótimos padrões para arquitetura frontend. Esta é uma continuação da série [Arquitetura Frontend](/category/frontend). Se você ainda não leu, confira o primeiro post sobre o assunto: [Component styles isolation: Dealing with CSS inheritance](https://bernardodiasdacruz.com/2018/03/16/component-styles-isolation-dealing-with-css-inheritance/).

Desta vez vou abordar uma forma cuidadosa de escrever código CSS. Você já ouviu falar sobre "CSS concêntrico"? Não? Sim? Tudo bem, por favor tenha paciência comigo. Vamos entrar nesse conceito e entender como isso pode elevar nossas habilidades (e código) CSS a um nível superior.

## CSS Importa

Antes de começar com o assunto principal deste post, há algo que quero deixar claro para que possamos seguir em frente. Se você deseja construir ótimas aplicações frontend, deve levar o CSS a sério. Não negligencie essa linguagem só porque é algo que seus estagiários podem fazer. Certo? Vou dar algumas razões, brevemente, só para garantir que estamos na mesma linha. :)

A linguagem CSS tem um propósito: estilizar a marcação. Os navegadores leem seletor por seletor, propriedade por propriedade, e com muita engenharia pesada, pintam a tela. O responsável por essa tarefa é o **Layout Engine**. Todos sabemos que os dados são o chefe, certo? E enquanto estamos falando sobre desenvolvimento web, nossos dados precisam de estrutura visual. Porque o usuário e sua experiência têm altas expectativas sobre isso.

O que mais importa para uma arquitetura frontend é ter bons padrões, porque muitas coisas podem ser escritas de quase qualquer forma, com uma boa chance de simplesmente funcionar. Se os padrões são ruins ou insuficientes, o desenvolvimento pode sofrer a longo prazo. O que é importante ter em mente: o CSS vincula o HTML, o HTML vincula os dados. O HTML também representa a estrutura visual com ajuda do CSS - ou o contrário. Toda a experiência do usuário depende da estrutura visual. No final do dia, não importa muito a biblioteca JS usada para desenvolver a aplicação, o layout engine terá que lidar com o HTML e CSS.

## O CSS Concêntrico

Chegamos aqui, legal! Eu tive que reforçar a importância do CSS para garantir que você entende o papel que a linguagem desempenha em cena. Também para manter em mente que a natureza declarativa do CSS requer muitos padrões e convenções para crescer forte e estável.

<figure>
  <img alt="Concentric box model" src="/content/posts/2018-03-20-component-styles-isolation-concentric-css/concentric.png" />
  <figcaption>Imagem emprestada do post de Brandon Rhodes</figcaption>
</figure>

O "CSS Concêntrico" é algo que aprendi há um tempo. Fui iluminado após ler este post de 2011 de Brandon Rhodes: [Concentric CSS](http://rhodesmill.org/brandon/2011/concentric-css/). Eu estava em busca de uma boa forma de ordenar as propriedades no código. Alfabética? Box Model? Concêntrica? SMACSS? Qualquer uma? Isso realmente importa?

Bem, a ordem de classificação das propriedades realmente não importa para a máquina. Pode causar algum impacto positivo na facilidade de desenvolvimento, é verdade. Mas sem uma ferramenta de automação para ajudar, também pode levar tempo e causar distração. Neste post não vou abordar como configurar o Stylelint ou seu IDE para fazer as verificações e automatizar as correções. A configuração dessas ferramentas é algo que ficaria feliz em explicar em outra ocasião e deixar as escolhas abertas para suas preferências. Só para deixar claro novamente, padrões e convenções são essenciais, e ferramentas de automação estão aqui para ajudar a manter a consistência.

### Mentalidade de Estilização

O que me fisgou sobre o "CSS Concêntrico" foi a linha de raciocínio. Como um desenvolvedor traduzindo um design gráfico em código, esse conceito meio que captura uma boa mentalidade de estilização. Vamos ignorar a ordem de classificação das propriedades neste post, e focar em pensar sobre elementos HTML e as propriedades CSS desta forma: de fora para dentro.

Quando começamos a pensar nos elementos HTML e propriedades CSS de forma organizada, elevamos nossa compreensão do quadro geral. O quadro geral é de enorme importância, e ao mesmo tempo estamos desenvolvendo componentes.

### Component Isolation

bla bla bla

layout, box, content. margins and paddings. alignment and positioning. flexbox and grid.
