---
title: 'Isolamento de estilos de componentes: Lidando com herança CSS'
date: 2018-03-16
category: frontend
lang: pt
tags:
  - architecture
  - css
  - isolation
  - inheritance
  - postcss
  - composes
  - react
  - css-modules
excerpt: Como garantir consistência visual no uso de componentes de UI.
---

Olá! Este é o primeiro post na nova categoria [Arquitetura Frontend](/category/frontend), onde pretendo descrever muitas metodologias e técnicas legais para aplicações frontend de grande escala. Vamos começar!

Neste post, vou contar como lidar com problemas imprevisíveis de estilos que acontecem em projetos de grande escala. Nosso objetivo é criar componentes de UI à prova de falhas, fazendo o CSS agir de forma previsível aproveitando os mecanismos nativos da linguagem!

## Uma breve introdução sobre modularização

Na era moderna do desenvolvimento frontend, toda a atenção se volta para componentes, por que será? Simplificando, uma regra importante para escalar projetos, em relação ao CSS, é a capacidade de remover código. Escalar aplicações frontend não é apenas sobre crescer, mas também sobre se livrar de código obsoleto. Para lidar com isso, os desenvolvedores começaram a focar no desenvolvimento de componentes, ao invés de, por exemplo, páginas.

Um componente é um pedaço de código que tem seu código isolado do resto da aplicação. O componente pode ter pedaços de HTML, CSS e JS. Historicamente, essas linguagens tinham muitas limitações que impediam essa abordagem. Agora, uma era passou e as coisas evoluíram bastante. O que precisávamos todo esse tempo era tornar o código modular, ou seja, dividir o código em muitas partes que podem ser montadas sob demanda e de uma forma que não prejudique a performance nem a nossa sanidade.

Para o HTML, templates estão disponíveis em XSLT desde 2001 — sem nem mencionar as linguagens server-side que nos permitiam montar a marcação da forma que quiséssemos. Os desenvolvedores então perceberam o caos que misturar gerenciamento de dados com templates poderia se tornar. Nesse ponto, muitos frameworks MVC surgiram para oferecer boa separação de responsabilidades e engines de template apareceram em abundância para a parte de visualização. O desenvolvedor podia escolher o que funcionava melhor para um projeto renderizado no servidor. Prometo aprofundar mais sobre engines de template em outro post ;)

Antes de ir para o CSS, deixe-me comentar brevemente sobre módulos JS no lado do cliente (algo que também merece seu próprio post). Eu recomendaria que você lesse [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](https://addyosmani.com/writing-modular-js/). É uma ótima explicação sobre JavaScript modular. TL;DR: os navegadores, no momento deste post, ainda não suportam amplamente importações dinâmicas, portanto muitos métodos e ferramentas foram criados para fornecer formas de fazer isso, para que pudéssemos ter nossos pedaços de JS separados uns dos outros e ao mesmo tempo funcionando bem quando executados juntos.

No CSS, temos a regra `@import` desde o CSS Level 1, em outras palavras, desde o início da linguagem. Também poderíamos incluir muitas tags `<link>` no nosso HTML para carregar individualmente cada pedaço de CSS. No entanto, ambas as abordagens têm algumas grandes preocupações em relação à performance. Não vou entrar em detalhes para poder voltar ao tópico rapidamente, mas as coisas evoluíram e vão mudar em breve com o HTTP/2 já batendo à porta. Se quiser saber mais sobre isso, recomendo ler este post de 2009: [don't use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/) e também este post de 2016: [The future of loading CSS](https://jakearchibald.com/2016/link-in-body/).

O ponto é que componentes são pedaços separados de código, que podem ser escritos em uma variedade de linguagens e formas, mas no final, eles retornam HTML, CSS e JS.

## Cascata e Herança CSS

Tudo bem, agora que cobrimos o conceito de modularização no código frontend, vamos entrar em alguns mecanismos da linguagem CSS: cascata e herança.

A cascata é um aspecto importante do CSS (sim, CSS é um acrônimo para _Cascading Style Sheets_). "Cascata" indica a ordem em que os estilos são aplicados. Ela será afetada por:

1. Importância
2. Especificidade
3. Ordem no código-fonte

Tendo a "cascata" em mente e sabendo que alguns estilos podem sobrescrever outros baseado na cascata, o outro mecanismo que se relaciona com isso é a herança. Herança significa que alguns elementos podem herdar estilos dos pais mesmo sem declaração explícita. No entanto, o efeito de herança não se aplica a todas as propriedades CSS.

Como exemplo, `font-family` e `color` são automaticamente herdadas; isso facilita a estilização, pois podemos definir os valores base dessas propriedades no `<html>`, e todos os elementos filhos receberão os mesmos estilos aplicados por padrão. O mecanismo de cascata permitirá sobrescrever elementos específicos (e seus filhos) quando necessário.

Por outro lado, `margin`, `padding`, `border` e `background` não são herdados por padrão. Imagine o problema de criar estilos se essas propriedades fossem herdadas por todos os elementos filhos... De qualquer forma, se precisar aplicar herança para uma propriedade específica em um elemento, existe a palavra-chave CSS `inherit`.

Muitos detalhes adicionais sobre tudo isso podem ser lidos aqui:

- [About Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- [Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [Inheritance mechanism](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)
- [inherit keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit)

## Isolamento de Estilos de Componentes

Agora que avançamos nossa compreensão sobre componentes, modularização, cascata CSS e herança, vamos ver como lidar com CSS no desenvolvimento frontend moderno. Não vou propor a forma definitiva de fazer seu código, mas sim um entendimento geral do problema com o qual precisamos lidar em projetos modulares de grande escala e, claro, algumas abordagens diferentes que ajudam a resolver isso.

### O problema

Estamos falando de código modular e falando de componentes de UI. Podemos desenvolver uma aplicação sem se preocupar com isolamento, mas isso é o oposto de aproveitar as metodologias modernas. Para tirar o melhor proveito, componentes de UI precisam ser desenvolvidos em isolamento! Isso significa desenvolver as partes fora da aplicação e depois partir para a integração das partes.

O principal problema nessa abordagem é que às vezes, durante a implementação da aplicação, ao aplicar componentes de UI em diferentes partes da aplicação ou talvez em diferentes aplicações, o resultado é diferente do esperado, diferente do que parecia na plataforma isolada. Isso não é incomum em grandes projetos, especialmente quando componentes de UI são usados em muitas aplicações diferentes; se as propriedades herdáveis forem esquecidas, coisas inesperadas podem acontecer.

### A solução

Existem muitas abordagens para resolver esse problema e vai variar dependendo do seu stack tecnológico.

Em um grande projeto que ajudei a desenvolver, usamos PostCSS com CSS-Modules em uma base de código React. Isso nos permitiu criar um objeto CSS chamado `component`. Nesse objeto, definimos algumas propriedades de reset de estilo, como `font-family`, `font-size`, `color`, e outras que fazem herança por padrão. Esses valores de reset eram baseados em CSS Variables, e podiam até diferir de aplicação para aplicação.

Isto é o que fizemos:

```css
/**
 *
 * Component isolation
 *
 * Usage:
 *
 * @value component from theme('objects.isolation.css');
 *
 * .componentname {
 *   composes: component;
 * }
 *
 */

.component {
  display: block;
  box-sizing: border-box;
  font-family: var(--typographyFamilySansserif);
  font-size: var(--typographySizeNormal);
  font-weight: var(--typographyWeightNormal);
  /* etc... */
}
```

Um aspecto importante dessa abordagem estava no output do CSS. Ao escolher `composes` do CSS-Modules, tínhamos uma única declaração de classe no output CSS. Isso significava que aumentar o número de componentes isolados não resultaria em uma quantidade maior de CSS referente a estilos de isolamento. Além disso, escolhemos a abordagem ITCSS para a ordem no código-fonte. Isso significa que as classes do `objects.isolation.css` vinham antes de todas as classes de componentes na ordem do fonte, então as sobrescritas funcionavam perfeitamente.

A ideia é bastante simples, desde que sua classe `.component` seja declarada cedo no output CSS, você pode ter o mesmo efeito com CSS puro apenas incluindo a classe na tag HTML:

```html
<section class="component">
  <p>This component have its inheritable styles isolated from the application.</p>
</section>
```

Mencionei que não ia dizer a forma definitiva de lidar com isolamento de estilos porque, como você deve ter notado nos exemplos acima, só estamos resetando a raiz do componente e não todos os elementos filhos. Mas isso seria perfeitamente possível com a mesma técnica. Acho que está tudo bem resetar apenas a raiz do componente e então aproveitar a herança CSS nativa para os elementos filhos.

Uma outra técnica que li recentemente e gostei muito pode ser encontrada neste post do Yelp: [CSS in the Age of React: How We Traded the Cascade for Consistency](https://engineeringblog.yelp.com/2018/03/css-in-the-age-of-react.html). Recomendo que dê uma olhada no [Lemon Reset](https://github.com/Yelp/lemon-reset) deles também, um conjunto de componentes React. Nesse caso, eles estão usando reset para todos os elementos de uma forma muito interessante.

## Componentes à Prova de Falhas!

Bem legal, não é? Um grande problema com bases de código CSS grandes é a imprevisibilidade. Acredite, esse problema pode resultar em muito dinheiro desperdiçado porque pode fazer os desenvolvedores gastarem tempo demais lidando com bugs e regressões, coisas que talvez nem precisassem ter acontecido.

Optar por uma abordagem consistente na arquitetura frontend permite que o projeto escale de forma resiliente. Cada novo componente incluído estará bem isolado, e esses bugs CSS traiçoeiros serão evitados de vez. Isolamento de estilos é o primeiro passo para construir componentes de UI à prova de falhas!
