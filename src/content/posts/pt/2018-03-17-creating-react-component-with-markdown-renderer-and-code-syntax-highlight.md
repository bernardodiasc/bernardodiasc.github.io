---
title: Criando componente React com renderizador de Markdown e syntax highlight de código
date: 2018-03-17
category: this-blog
lang: pt
tags:
  - markdown
  - react
  - highlight
  - html
excerpt: Dado uma string Markdown, renderizar como HTML com syntax highlight de código.
---

Markdown é bem legal. Como talvez você já saiba, este blog é baseado em arquivos markdown estáticos. Arquivos FrontMatter para ser mais preciso. Confira o [arquivo fonte](https://github.com/bernardodiasc/bernardodiasc.github.io/blob/develop/public/content/posts/2018-03-17-creating-react-component-with-markdown-renderer-and-code-syntax-highlight/index.md) deste post. Agora deixe eu te contar como eu faço a renderização do conteúdo dos arquivos markdown.

Na verdade existem muitas formas de lidar com essa situação. Uma por exemplo, como na [documentação do storybook](https://bernardodiasdacruz.com/docs/) deste site, usa o Webpack loader para importar arquivos Markdown diretamente para JavaScript. Simples como `import Content from 'content.md'` e então os dados importados podem ser renderizados usando algo como o [dangerouslySetInnerHTML](https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html).

Mas mais especificamente para o conteúdo deste site, o gerador de dados retorna o conteúdo markdown em um arquivo JSON estático. Ainda sem converter para HTML. Para usar essa string markdown para renderizar na página, primeiro ela precisa ser convertida para HTML e então renderizada como JSX.

Eu usei algumas bibliotecas de terceiros para me ajudar com o trabalho pesado:

- https://github.com/markedjs/marked/
- https://github.com/isagalaev/highlight.js/
- https://github.com/utatti/react-render-html/

Não tem muito segredo, todas essas bibliotecas têm boa documentação. Vá em frente e instale os pacotes:

```shell
yarn add marked react-render-html highlight.js
```

Então crie um componente para encapsular essa lógica de renderização, assim você pode simplesmente reutilizar a mesma lógica em qualquer lugar.

## O componente MarkdownRenderer

É assim que meu componente React se parece:

```javascript
// MarkdownRenderer.js
import { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-eighties.css'

marked.setOptions({
  highlight: (code, language) => language
    ? hljs.highlight(language, code).value
    : hljs.highlightAuto(code).value
})

class MarkdownRenderer extends PureComponent {
  static defaultProps = {
    text: '',
  }

  render() {
    const { text } = this.props
    return text ? renderHTML(marked(text)) : null
  }
}

export default MarkdownRenderer
```

Veja no [código fonte](https://github.com/bernardodiasc/bernardodiasc.github.io/blob/c2908e161e4749f0e5e9672fa8a88be3b73b7260/src/displays/MarkdownRenderer/MarkdownRenderer.js).

## Extras legais

O `highlight.js` vai tentar identificar a linguagem do código automaticamente e criar estilos da melhor forma possível. Mesmo assim, usá-lo com o `marked` também permite definir a linguagem nos blocos de código, como em:

```markdown
// markdown-file.md
```javascript
function() {
  console.log('this is actually a "markdown" code block haha')
}
``````

---

_[Edição 2018-03-20]_

A opção de highlight que eu estava usando quando escrevi este post não estava identificando corretamente as linguagens de forma automática, então eu melhorei um pouco o código do `MarkdownRenderer.js`:

```diff
marked.setOptions({
-  highlight: (code) => hljs.highlightAuto(code).value
+  highlight: (code, language) => language
+    ? hljs.highlight(language, code).value
+    : hljs.highlightAuto(code).value
})
```
