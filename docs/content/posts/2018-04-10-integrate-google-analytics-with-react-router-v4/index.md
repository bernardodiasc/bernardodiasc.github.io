---
title: Integrate Google Analytics with React Router v4
date: 2018-04-10
category: this-blog
tags:
  - google analytics
  - seo
  - react router
excerpt: Single-page applications requires especial treatment for tracking statistics on each page view.
---

Well well. For a good SEO integration I started including a sitemap.xml in this site, all explained here: [How to include a sitemap.xml in a create-react-app site](https://bernardodiasdacruz.com/2018/03/16/how-to-include-a-sitemap-in-a-create-react-app-site).

I also included Google Analytics Global Site Tag (gtag.js) in this site, but naively I forgot to consider the sequent page views after the first load, because even having pre-rendering, this is a SPA. After a bit of research, I found few different approaches to resolve this and I ended using my own.

Let me just point out this nice article https://vanja.gavric.org/blog/integrate-google-analytics-with-react-router-v4/ that enlightened me on the subject. I believe I don't need to write again all the information that Vanja wrote, if my solution described below won't work for you, maybe you should take a look at that other options.

Not only in there but in several other places, I found recommendations for https://github.com/react-ga/react-ga library to deal with Google Analytics and React. Their solutions are pretty interesting and worth to check out, it's well described in their https://github.com/react-ga/react-ga/wiki.

## My solution...

I prefer simpler. It's possible for this site to use a simpler solution. Because this site is fairly simple by itself. Let me show you how I did.

First loaded the gtag library at `index.html` as described in https://developers.google.com/analytics/devguides/collection/gtagjs/:

```html
  <body>
    <div id="root"></div>
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
    <script>
      if (window.location.hostname !== 'localhost') {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_TRACKING_ID');
      }
    </script>
  </body>
</html>
```

Notice that I don't want GA to be running on my develop environment, my quick&dirty hack is simply preventing from executing on `localhost`. It works.

Alright, so far so good. This works perfectly on the page loading, and also because this site uses pre-rendering, it works for all pages on the first load. The problem is that as soon the React script hydrates the markup, the site links become routes of the single-page application, therefore the gtag wasn't recording the visitor's navigation beyond the first page loads.

To record page views, as you saw earlier, there are many ways, some more complex than others. My solution was simpler and worked for my use case. In the `<App>` component I included the `componentWillUpdate()` lifecycle method.

```js
componentWillUpdate({ location, history }) {
  const gtag = window.gtag

  if (location.pathname === this.props.location.pathname) {
    return
  }

  if (history.action === 'PUSH' && typeof(gtag) === 'function') {
    gtag('config', 'GA_TRACKING_ID', {
      'page_location': window.location.href,
      'page_path': location.pathname,
    })
  }
}
```

In this site, the `<App>` is right inside the `<BrowserRouter>` and its first child is a `<Switch>`.

As in (pseudo-code):

```html
<BrowserRouter>
  <App>
    <Switch>
```

This means that `<App>` is a component located high in the VirtualDOM tree and it will re-render on all page changes.

Out of curiosity, if you want to read some instructions about gtag for pages, check out here: https://developers.google.com/analytics/devguides/collection/gtagjs/pages.

> A note, at the time I'm writing this post, I'm also aware of the `UNSAFE_componentWillUpdate()` changes for the next React versions (https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate). I just haven't got the time to do the migration so I stick with the former method. If you are a reader from the future, please be patience, once I make the migration I'll update this post. Feel free to ping me in the comments as well :)
