import React, { PureComponent } from 'react'
import Markdown from 'markdown-to-jsx'
import renderHTML from 'react-render-html'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-eighties.css'
import './MarkdownRenderer.css'

import Icon from 'displays/Icon'
import Image from 'displays/Image'
import Codepen from 'displays/Codepen'
import Animation from 'displays/Animation'
import Video from 'displays/Video'
import SankeyChart from 'displays/SankeyChart'

const CodeBlock = (node) => {
  const props = node.children.props
  const language = props.className ? props.className.replace(/^(lang-)/, '') : ''
  const code = props.children || ''
  const htmlBlock = language
    ? hljs.highlight(language, code).value
    : hljs.highlightAuto(code).value
  return renderHTML(`<pre><code class="${props.className}">${htmlBlock}</code></pre>`)
}

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
            Animation,
            Video,
            SankeyChart,
            pre: {
              component: CodeBlock
            },
            div: {
              props: {
                className: 'MarkdownRenderer',
              },
            },
          },
        }}
      />
    ) : null
  }
}

export default MarkdownRenderer
