---
title: Inject Google Analytics tag manager in a Meteor app
date: 2018-03-06
category: third-party
tags:
  - meteor
  - google analytics
  - seo
excerpt: Instructions about how to easily inject GA tag manager in a Meteor app
---

Sometimes we want to inject data with the original HTML request to make it available sooner, in cases like Google Analytics tag manager it needs to be inserted two tags, one right after `<head>` opening and other right after `<body>` opening.

There's a Meteor package that makes this task easy: https://github.com/meteorhacks/meteor-inject-initial/

To use you need to first install it in your app:

```
meteor add meteorhacks:inject-initial
```

After installed, include in your app's `package.json`:

```
api.use('meteorhacks:inject-initial', ['client', 'server']);
```

On the `server.js` file use methods `Inject.rawHead` and `Inject.rawBody`:

```
Inject.rawHead('headGA', `
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','YOUR_TAG_ID');</script>
<!-- End Google Tag Manager -->
`);
```

```
Inject.rawBody('bodyGA', `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=YOUR_TAG_ID"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
`);
```

That's it, it's done!

<figure>
  <img alt="Example of a Meteor app source code with GA tag manager injected" src="/content/posts/2018-03-06-inject-google-analytics-tag-manager-in-a-meteor-app/source-code.png" />
  <figcaption>Example of a Meteor app source code with GA tag manager injected</figcaption>
</figure>
