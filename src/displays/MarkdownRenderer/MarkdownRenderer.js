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
