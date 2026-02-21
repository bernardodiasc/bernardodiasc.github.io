---
title: Buscando dados do Instagram usando a API Graph do Facebook
date: 2018-03-05
category: integrations
lang: pt
tags:
  - instagram
  - facebook
  - graph api
  - fetch
  - css grid
  - responsiveness
excerpt: A API do Instagram está sendo descontinuada e a partir de agora usará a API Graph do Facebook.
---

Na semana passada eu tive uma tarefa de buscar mídias do Instagram e construir um mosaico com elas.

<figure>
  <img alt="Instagram media mosaic at https://x-team.com/join/" src="/content/posts/2018-03-05-fetching-from-instagram-using-facebook-graph-api/instagram-media-mosaic.png" />
  <figcaption>Este módulo foi incluído em https://x-team.com/join/</figcaption>
</figure>

Eu pensei que seria trivial, a API v1 do Instagram é realmente simples. Tudo o que precisamos fazer é criar um Client ID e obter um Access Token, depois buscar um JSONP da URL da API `https://api.instagram.com/v1/`, boom, pronto!

Ou ainda mais simples, usar alguma biblioteca como http://instafeedjs.com/... Dê uma olhada nessa demo no CodePen https://codepen.io/gabriellewee/pen/qxprPw, como é simples! Busca no lado do cliente sem nenhum problema.

Bom, os ventos mudaram de direção, o Instagram agora usa a API Graph do Facebook, que é bastante poderosa, mas seu uso tem muitas diferenças. Confira as novidades no blog do Facebook Developer: [Instagram Graph API Launches and Instagram API Platform Deprecation](https://developers.facebook.com/blog/post/2018/01/30/instagram-graph-api-updates/).

Então, é assim que se começa com essa nova API do Instagram: https://developers.facebook.com/docs/instagram-api/getting-started/. Não é muito difícil se você seguir todos os passos. No final você terá um token de acesso de usuário do Facebook com permissões para buscar mídias do Instagram. Legal, né? Bom, algumas armadilhas encontradas no caminho, deixe-me contar.

Simplificando, a API do Instagram funciona assim:

1. Você precisa ter uma **Página do Facebook** e conectar essa página à **Conta Comercial do Instagram**;
2. Depois você precisa registrar um novo **App do Facebook** com uma conta de desenvolvedor (veja https://developers.facebook.com/docs/apps/register);
3. Então você precisa obter um token de acesso para seu usuário e descobrir seu novo **App ID** usando a ferramenta deles https://developers.facebook.com/tools/explorer/;

Agora, as armadilhas:

- Se você planeja fazer um script de busca no lado do cliente, esqueça, porque você vai expor seu token de acesso, e isso não é uma boa ideia, é melhor ter um backend para buscar na API e formas seguras de armazenar seu token de acesso;
- Se você tem uma conta de usuário que gerencia muitas páginas, é melhor não usar essa também, porque o token de acesso gerado dá permissão a todas as suas páginas gerenciadas;
- Se você não está construindo um app real, e simplesmente quer exibir um mosaico com mídias do Instagram no seu site, seu token de acesso de usuário pode não funcionar bem porque expira muito rápido;

Ao invés de explicar passo a passo, deixe-me compartilhar uma resposta muito útil no StackOverflow que resolveu todos os meus problemas: [facebook: permanent Page Access Token?](https://stackoverflow.com/questions/17197970/facebook-permanent-page-access-token/28418469#28418469). Com isso eu pude gerar um token de acesso de longa duração (que nunca expira) para uma **Página do Facebook**!

A documentação para uso com Node.js é bem boa: https://developers.facebook.com/docs/javascript

Você basicamente vai precisar primeiro buscar:

```
https://graph.facebook.com/v2.12/[PAGE_ID]/media?access_token=[PAGE_ACCESS_TOKEN]
```

Isso vai retornar uma lista paginada com IDs das mídias. Então você precisa percorrer essa lista e para cada item buscar:

```
https://graph.facebook.com/v2.12/[MEDIA_ID]?access_token=[PAGE_ACCESS_TOKEN]&fields=media_type,media_url,thumbnail_url,permalink,caption
```

A referência para os campos de mídia do Instagram disponíveis pode ser encontrada em https://developers.facebook.com/docs/instagram-api/reference/media
