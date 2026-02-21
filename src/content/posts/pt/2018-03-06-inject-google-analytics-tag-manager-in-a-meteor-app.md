---
title: Injetar o tag manager do Google Analytics em um app Meteor
date: 2018-03-06
category: integrations
lang: pt
tags:
  - meteor
  - google analytics
  - seo
excerpt: Instruções sobre como injetar facilmente o tag manager do GA em um app Meteor.
---

Às vezes queremos injetar dados junto com a requisição HTML original para torná-los disponíveis mais cedo. No caso do tag manager do Google Analytics, é necessário inserir duas tags, uma logo após a abertura do `<head>` e outra logo após a abertura do `<body>`.

Existe um pacote Meteor que facilita essa tarefa: https://github.com/meteorhacks/meteor-inject-initial/

Para usar, primeiro instale-o no seu app:

```shell
meteor add meteorhacks:inject-initial
```

Após instalar, inclua no `package.json` do seu app:

```javascript
api.use('meteorhacks:inject-initial', ['client', 'server']);
```

No arquivo `server.js`, use os métodos `Inject.rawHead` e `Inject.rawBody`:

```javascript
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

```javascript
Inject.rawBody('bodyGA', `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=YOUR_TAG_ID"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
`);
```

É isso, está feito!

<figure>
  <img alt="Exemplo do código-fonte de um app Meteor com o tag manager do GA injetado" src="/content/posts/2018-03-06-inject-google-analytics-tag-manager-in-a-meteor-app/source-code.png" />
  <figcaption>Exemplo do código-fonte de um app Meteor com o tag manager do GA injetado</figcaption>
</figure>
