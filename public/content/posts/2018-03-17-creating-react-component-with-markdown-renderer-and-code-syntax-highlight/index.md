---
title: Creating React component with Markdown renderer and code syntax highlight
date: 2018-03-17
category: this-blog
tags:
  - markdown
  - react
  - highlight
  - html
excerpt: Given a Markdown string, then render as HTML with fancy code syntax highlight.
---

Markdown is pretty nice. As maybe you already know, this blog is based on static markdown files. FrontMatter files to be more precise. Check out the [source file](https://github.com/bernardodiasc/bernardodiasc.github.io/blob/develop/public/content/posts/2018-03-17-creating-react-component-with-markdown-renderer-and-code-syntax-highlight/index.md) of this post. Now let me tell you how I do the render the content of the markdown files.

There are actually many ways to deal with this situation. One for instance, as in this site's [storybook docs](https://bernardodiasdacruz.com/docs/), it uses Webpack loader to import Markdown files directly to JavaScript. Simple as `import Content from 'content.md'` and then the imported data can be rendered using something like the [dangerouslySetInnerHTML](https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html).

But more specifically for the content of this site, the data generator is returning the markdown content into a static JSON file. Not yet parsing it to HTML. In order to use that markdown string to render in the page, first, it needs to be parsed to HTML and then rendered as JSX.

I've used some third-party libraries to help me with the heavy lifting:

- https://github.com/markedjs/marked/
- https://github.com/isagalaev/highlight.js/
- https://github.com/utatti/react-render-html/

There's not much secret, all those libraries have good documentation. Go for it and install the packages:

```shell
yarn add marked react-render-html highlight.js
```

Then create a component to wrap this rendering logic, so this way you can simply reuse the same logic everywhere.

## The MarkdownRenderer component

This is how my React component looks like:

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

See it in the [source code](https://github.com/bernardodiasc/bernardodiasc.github.io/blob/develop/src/displays/MarkdownRenderer/MarkdownRenderer.js).

## Extra goodies

The `highlight.js` will try to identify the code language automatically and create styles as better as possible. Even so using it with `marked` also allows to define the language on code blocks, as in:

```markdown
// markdown-file.md
```javascript
function() {
  console.log('this is actually a "markdown" code block haha')
}
``````

---

_[Edit 2018-03-20]_

The highlight option I was using when I wrote this post wasn't correctly identifying the languages in the automatic way, then I improved a little bit the `MarkdownRenderer.js` code:

```diff
marked.setOptions({
-  highlight: (code) => hljs.highlightAuto(code).value
+  highlight: (code, language) => language
+    ? hljs.highlight(language, code).value
+    : hljs.highlightAuto(code).value
})
```

