---
title: Componente renderizador de Markdown que pode renderizar outros componentes React
date: 2018-04-09
category: this-blog
lang: pt
tags:
  - react
  - markdown
  - html
excerpt: Os conteúdos em Markdown ficaram muito muito melhores!
---

Certo, anteriormente eu escrevi sobre como este site renderiza conteúdo de arquivos Markdown, você pode ler aqui: [Criando componente React com renderizador de Markdown e syntax highlight de código](https://bernardodiasdacruz.com/2018/03/17/creating-react-component-with-markdown-renderer-and-code-syntax-highlight). Neste post vou explicar algumas melhorias legais que fiz no componente `MarkdownRenderer` usado neste site.

## Como estava funcionando até então

Só para dar um pouco de contexto, este site usa arquivos markdown estáticos para armazenar o conteúdo. Não existe uma interface de editor rich-text para fornecer recursos sofisticados para diferentes tipos de representação de dados. Se eu quisesse incluir uma imagem no meio do post, tinha que declarar explicitamente a marcação usando tags HTML:

```html
<figure>
  <img alt="The alternative textual representation" src="full-path/of/the-image.png" />
  <figcaption>Some helpful caption</figcaption>
</figure>
```

Não é difícil, porém muito repetitivo e propenso a falhas. Na verdade é um pouco chato fazer isso repetidamente toda vez. O markdown em si fornece muitos padrões para simplificar as estruturas de dados, e é incrível. Mas o markdown é limitado e é por isso que para muitos conteúdos não textuais, estruturas de dados mais complexas são necessárias.

## O que se espera

Sabe o que seria legal? Componentes React dentro do conteúdo markdown!

Usando um componente React eu posso simplificar os padrões de estrutura de dados e também incluir comportamentos incríveis com funcionalidades completas. Sabe como é, React! Vamos ver alguns exemplos:

### Imagens

Como mencionado antes, era assim que eu incluía imagens no markdown:

```html
<figure>
  <img alt="The alternative textual representation" src="path/of/the/image.png" />
  <figcaption>Some helpful caption</figcaption>
</figure>
```

E é assim com o componente React `Image`:

```html
<Image
  alt="The alternative textual representation"
  src="path/of/the/image.png"
  caption="Some helpful caption"
/>
```

Mais simples, né? Pode não parecer absurdamente mais simples à primeira vista, mas se olharmos mais a fundo no componente `Image`, veremos um monte de recursos legais e um mundo de possibilidades.

### Embed Codepen

A API dos componentes React é feita da forma que eu desejar. Não preciso seguir nenhuma especificação HTML5 ou padrões da comunidade. Vamos ver um exemplo mais complexo:

```html
<!-- Using Iframe -->
<iframe
  height="600"
  scrolling="no"
  title="Card pack"
  src="//codepen.io/bernardodiasc/embed/rdZmjK/?height=600&theme-id=0&default-tab=result&embed-version=2"
  frameborder="no"
  allowtransparency="true"
  allowfullscreen="true"
  style="width: 100%;"
>
  See the Pen <a href="https://codepen.io/bernardodiasc/pen/rdZmjK/">Card pack</a> by Bernardo Dias (<a href="https://codepen.io/bernardodiasc">@bernardodiasc</a>) on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- Or the recommended way -->
<p
  data-height="600"
  data-theme-id="0"
  data-slug-hash="rdZmjK"
  data-default-tab="result"
  data-user="bernardodiasc"
  data-embed-version="2"
  data-pen-title="Card pack"
  class="codepen"
>
  See the Pen <a href="https://codepen.io/bernardodiasc/pen/rdZmjK/">Card pack</a> by Bernardo Dias (<a href="https://codepen.io/bernardodiasc">@bernardodiasc</a>) on <a href="https://codepen.io">CodePen</a>.
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

Tudo isso pode ser simplificado e padronizado:

```html
<Codepen
  hash="rdZmjK"
  height="600"
  title="Card pack"
/>
```

Muito melhor! Deixe o componente React cuidar dos padrões gerais. Deixe o conteúdo markdown mais simples.

### Embed de vídeo

Só mais um último exemplo :)

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dnzE9ip5U04?rel=0"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>
```

Para se tornar:

```html
<Video hash="dnzE9ip5U04" />
```

Propriedades de dimensionamento serão praticamente as mesmas quase todas as vezes para o caso de uso deste site e então podem ser opcionais. O mesmo vale para todos os outros atributos.

## Como fazer algo tão incrível?

Agora vamos à solução de fato!

Para fazer essa melhoria no meu componente `MarkdownRenderer` existente, fiz uma troca da lib https://github.com/markedjs/marked/ em favor da https://github.com/probablyup/markdown-to-jsx.

Honestamente, não posso reclamar da implementação anterior deste componente. Estava faltando apenas um recurso para proporcionar tamanha maravilha: a capacidade de sobrescrever elementos. E esse é um dos recursos mais legais do **markdown-to-jsx**.

### Syntax highlight de blocos de código

Fazer essa mudança teve uma desvantagem em relação aos blocos de código e syntax highlight. Vou explicar abaixo, mas por causa disso, reconsiderei a mudança. A princípio, considerei implementar o recurso desejado no https://github.com/utatti/react-render-html, basicamente permitindo a opção de `overrides`, igual ao **markdown-to-jsx**. Isso exigiria muito mais tempo da minha parte, infelizmente preciso ser pragmático aqui. O que torna um pouco difícil é que o **react-render-html** depende do https://github.com/inikulin/parse5, e esse é um parser muito estrito e compatível com a especificação HTML5. De qualquer forma, isso ainda é uma possibilidade se eu encontrar tempo para uma contribuição open source e se o autor da biblioteca desejar.

Voltando à desvantagem, na verdade não é nada demais. O ponto é que o **markdown-to-jsx** é compatível com o **highlight.js** MAS ele só adiciona as classes de linguagem do código na tag `code`. Isso exigiria que o **highlight.js** processasse o conteúdo do código no lado do cliente. Eu não queria isso, porque tenho recurso de pré-renderização neste site e quero tirar proveito disso e aliviar o dispositivo do cliente de processamento extra o máximo possível (quero dizer, já está hidratando o app React...).

A solução foi sobrescrever as tags `pre` com um componente `CodeBlock` personalizado:

```js
const CodeBlock = (node) => {
  const props = node.children.props
  const language = props.className ? props.className.replace(/^(lang-)/, '') : ''
  const code = props.children || ''
  const htmlBlock = language
    ? hljs.highlight(language, code).value
    : hljs.highlightAuto(code).value
  return renderHTML(`<pre><code class="${props.className}">${htmlBlock}</code></pre>`)
}
```

Bem, isso ainda depende do **react-render-html** e como observado na biblioteca, o **parse5** é uma biblioteca pesada. Felizmente, como eu disse, este site tem pré-renderização, vai funcionar com JS desabilitado (experimente). Então não estou muito preocupado com o peso do bundle JS já que não é um bloqueador para a experiência principal.

### O componente renderizador de markdown

Certo certo, apesar dessa situação do syntax highlight dos blocos de código, todo o resto teve uma transição suave. Aqui está como o render do componente ficou agora:

```jsx
class MarkdownRenderer extends PureComponent {
  static defaultProps = {
    text: '',
  }

  render() {
    const { text } = this.props
    return text ? (
      <Markdown
        children={text}
        options={{
          overrides: {
            Icon,
            Image,
            Codepen,
            Video,
            pre: {
              component: CodeBlock
            }
          },
        }}
      />
    ) : null
  }
}
```

Observe as opções de `overrides`, posso fazer muito mais com isso, é realmente legal e vale a pena conferir a documentação da biblioteca https://github.com/probablyup/markdown-to-jsx#optionsoverrides---override-any-html-tags-representation.

## Conclusão

As estruturas de dados na marcação são todas sobre representação de conteúdo. E os padrões estão lá para aliviar a carga mental de tarefas repetitivas, como escrever essas estruturas de dados de marcação. Templates para marcação sempre existiram, embora sejam mais legais e poderosos agora na era das bibliotecas de renderização JS no lado do cliente.

Simples é melhor!
