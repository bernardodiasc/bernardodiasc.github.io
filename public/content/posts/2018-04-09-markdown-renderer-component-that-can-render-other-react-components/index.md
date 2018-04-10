---
title: Markdown renderer component that can render other React components
date: 2018-04-09
category: this-blog
tags:
  - react
  - markdown
  - html
excerpt:
---

Alright, previously I wrote about how this site renders content from Markdown files, you can read it here: [Creating React component with Markdown renderer and code syntax highlight](https://bernardodiasdacruz.com/2018/03/17/creating-react-component-with-markdown-renderer-and-code-syntax-highlight). In this post I'll explain some cool upgrades I made in the `MarkdownRenderer` component used in this site.

## How it's working now

Just to give you some context, this site uses markdown static files to store the content. There is no rich-text editor interface to provide fancy features for different kinds of data representation. If I want to include an image in the middle of the post I need to explicitly declare the markup using HTML tags:

```html
<figure>
  <img alt="The alternative textual representation" src="full-path/of/the-image.png" />
  <figcaption>Some helpful caption</figcaption>
</figure>
```

It's not difficult, although too repetitive and prone to failures. That's actually a bit boring to do repeatedly every time. The markdown itself provides a lot of patterns to simplify the data structures, and it's awesome. But markdown is limited and that's why for many non-textual contents some more complex data structures are required.

## What's expected

You know what would be cool? React components inside markdown content!

Using a React component I can simplify the data structure patterns and also include incredible full feature behaviors. Ya know, React! Let's take some examples:

### Imagery

As mentioned before, this is how I was using to include images in the markdown so far:

```html
<figure>
  <img alt="The alternative textual representation" src="full-path/of/the-image.png" />
  <figcaption>Some helpful caption</figcaption>
</figure>
```

And this is how it is with `Image` React component:

```html
<Image
  alt="The alternative textual representation"
  src="the-image.png"
  caption="Some helpful caption"
/>
```

That's simpler right? It may not look absurdly simpler at a glance, but if we take a further look at the `Image` component we'll see a whole bunch of cool features and a world of possibilities.

### Embed Codepen

The API of the React components are made in the way I desire. I don't have to follow any HTML5 compliant specification or community patterns. Let's see a more complex example:

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

So much can be simplified and standardized here

```html
<Codepen
  hash="rdZmjK"
  height="600"
  title="Card pack"
/>
```

Pretty better! Let the React component to handle the global patterns. Let the markdown simpler.

### Embed video

Just one last example :)

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

To become:

```html
<Video hash="dnzE9ip5U04" />
```

Sizing properties will be pretty much the same almost all times and then can be optional. This is the same for all attributes.

## How to do such awesome thing?

Now let's get to the actual solution!

To make this upgrade in my existing `MarkdownRenderer` component I made a switch of the https://github.com/markedjs/marked/ lib in favor of https://github.com/probablyup/markdown-to-jsx.

Honestly, I can't complain about the previous implementation of this component. It was missing just one feature to provide such awesomeness: the ability to override elements. And that's one of the coolest features of **markdown-to-jsx**.

### Code blocks syntax highlight

Make this move had a drawback regarding the code blocks and syntax highlight. Will explain about below, but because of that, I reconsidered the switching move. At first, I considered implementing the desired feature in the https://github.com/utatti/react-render-html, basically allowing the `overrides` options, the same as the **markdown-to-jsx**. That would require much more time for me, unfortunately, I need to pragmatical here. What makes a bit difficult is that **react-render-html** relies on https://github.com/inikulin/parse5, and that's very strict HTML5 spec compliant parser. Anyway, this is still a possibility if I find time for an open source contribution and if the library author desires.

Back on the drawback, it's actually no big deal. The point is that **markdown-to-jsx** is compatible with **highlight.js** BUT it only adds the code language classes in the `code` tag. This would require **highlight.js** to parse the code contents on the client side. I didn't want that, because I have pre-rendered feature in this site and I want to take advantage on that and relieve the client device from extra processing as much as possible (I mean, it's already hydrating the React app...).

The solution was to override the `pre` tags with a custom `CodeBlock` component:

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

Well, that still relies on **react-render-html** and as noted in the library, **parse5** is a heavyweight library. Luckily, as I said, this site has pre-rendering, it will work with JS disabled (try it). So I'm not much worried about the weight of the JS bundle since it's not a blocker for the main experience.

### The markdown renderer component

Alright alright, despite that code block syntax highlight situation, everything else had a smooth transition. Here's how the component render looks like now:

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

Notice the `overrides` options, I can do a lot more with that, it's really cool and worth to check out the library docs https://github.com/probablyup/markdown-to-jsx#optionsoverrides---override-any-html-tags-representation.

## Bottom line

The data structures on the markup are all about content representation. And the patterns are there to relieve the mental burden of repetitive tasks, such as writing these markup data structures. Templates for markup has always been there, although they are cooler and powerful now in the age of client-side JS rendering libraries.

Simple is better!
