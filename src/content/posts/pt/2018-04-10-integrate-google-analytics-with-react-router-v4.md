---
title: Integrar Google Analytics com React Router v4
date: 2018-04-10
category: this-blog
lang: pt
tags:
  - google analytics
  - seo
  - react router
excerpt: Aplicações single-page requerem tratamento especial para rastreamento de estatísticas em cada visualização de página.
---

Muito bem. Para uma boa integração de SEO, eu comecei incluindo um sitemap.xml neste site, tudo explicado aqui: [How to include a sitemap.xml in a create-react-app site](https://bernardodiasdacruz.com/2018/03/16/how-to-include-a-sitemap-in-a-create-react-app-site).

Também incluí a Google Analytics Global Site Tag (gtag.js) neste site, mas ingenuamente esqueci de considerar as visualizações de página subsequentes após o primeiro carregamento, porque mesmo tendo pre-rendering, isso é uma SPA. Após um pouco de pesquisa, encontrei algumas abordagens diferentes para resolver isso e acabei usando a minha própria.

Deixe-me apenas destacar este ótimo artigo https://vanja.gavric.org/blog/integrate-google-analytics-with-react-router-v4/ que me iluminou sobre o assunto. Acredito que não preciso escrever novamente todas as informações que o Vanja escreveu, se minha solução descrita abaixo não funcionar para você, talvez você deva dar uma olhada naquelas outras opções.

Não apenas lá, mas em vários outros lugares, encontrei recomendações para a biblioteca https://github.com/react-ga/react-ga para lidar com Google Analytics e React. As soluções deles são bastante interessantes e vale a pena conferir, está bem descrito no https://github.com/react-ga/react-ga/wiki deles.

## Minha solução...

Eu prefiro mais simples. É possível para este site usar uma solução mais simples. Porque este site é bastante simples por si só. Deixe-me mostrar como eu fiz.

O primeiro passo foi carregar a biblioteca gtag no `index.html`, como descrito na documentação https://developers.google.com/analytics/devguides/collection/gtagjs/:

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

Perceba que eu não quero que o GA esteja rodando no meu ambiente de desenvolvimento, meu hack rápido é simplesmente impedir a execução no `localhost`. Funciona.

Certo, até aqui tudo bem. Isso funciona perfeitamente no carregamento da página, e também porque este site usa pre-rendering, funciona para todas as páginas no primeiro carregamento. O problema é que assim que o script React hidrata a marcação, os links do site se tornam rotas da aplicação single-page, portanto o gtag não estava registrando a navegação do visitante além dos primeiros carregamentos de página.

Para registrar visualizações de página, como você viu anteriormente, existem muitas maneiras, algumas mais complexas que outras. Minha solução foi mais simples e funcionou para o meu caso de uso. No componente `<App>` eu incluí o método de ciclo de vida `componentWillUpdate()`.

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

Neste site, o `<App>` está logo dentro do `<BrowserRouter>` e seu primeiro filho é um `<Switch>`.

Como em (pseudo-código):

```html
<BrowserRouter>
  <App>
    <Switch>
```

Isso significa que o `<App>` é um componente localizado no alto da árvore do VirtualDOM e ele será re-renderizado em todas as mudanças de página.

Por curiosidade, se você quiser ler algumas instruções sobre gtag para páginas, confira aqui: https://developers.google.com/analytics/devguides/collection/gtagjs/pages.

> Uma observação, no momento em que estou escrevendo este post, também estou ciente das mudanças do `UNSAFE_componentWillUpdate()` para as próximas versões do React (https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate). Eu simplesmente não tive tempo de fazer a migração, então continuo com o método anterior. Se você é um leitor do futuro, por favor tenha paciência, assim que eu fizer a migração vou atualizar este post. Fique à vontade para me chamar nos comentários também :)
