---
title: Fetching from Instagram using Facebook Graph API
date: 2018-03-05
category: integrations
tags:
  - instagram
  - facebook
  - graph api
  - fetch
  - css grid
  - responsiveness
excerpt: Instagram API is being deprecated and from now will be using Facebook Graph API.
---

Past week I had a task to fetch media from Instagram and build a mosaic wall with it.

<figure>
  <img alt="Instagram media mosaic at https://x-team.com/join/" src="/content/posts/2018-03-05-fetching-from-instagram-using-facebook-graph-api/instagram-media-mosaic.png" />
  <figcaption>This module was included at https://x-team.com/join/</figcaption>
</figure>

I thought it was going to be trivial, Instagram API v1 is really simple. All we have to do is to create a Client ID and get an Access Token, then fetch a JSONP from the API Url `https://api.instagram.com/v1/`, boom, done!

Or even simpler, use some library like http://instafeedjs.com/... Take a look at this demo on CodePen https://codepen.io/gabriellewee/pen/qxprPw, how simple it is! Client-side fetching without any trouble.

Well, the winds changed direction, Instagram now uses Facebook Graph API, which is quite powerful, but it's usage have many differences. Check out the news at Facebook Developer's blog: [Instagram Graph API Launches and Instagram API Platform Deprecation](https://developers.facebook.com/blog/post/2018/01/30/instagram-graph-api-updates/).

So, this is how to get started on this new Instagram API: https://developers.facebook.com/docs/instagram-api/getting-started/. Not much difficult if you follow all the steps. At the end you'll have a Facebook user access token with grants to fetch Instagram media. Cool, right? Well, some pitfalls found in the way, let me tell you.

To put simple, the Instagram API works this way:

1. You need to have a **Facebook Page** and connect that page to the **Instagram Business Account**;
2. Then you need to register a new **Facebook App** with a developer account (see https://developers.facebook.com/docs/apps/register);
3. Then you need get an access token for your user and figure out your new **App ID** using their tool https://developers.facebook.com/tools/explorer/;

Now, the pitfalls:

- If you plan to make a feching script on client-side, forget about it, because you'll expose you access token, and that's not good idea, you might better to have a backend to fetch the API and safe ways to store your access token;
- If you have an user accound that manages many pages, it's better to not use that too, because the access token generated gives grant to all your managed pages;
- If you are not building a real app, and simply wanting to display a mosaic wall with Instagram media in your site, your user's access token might not work well because it expires really fast;

Instead explain step-by-step, let me share a really useful answer on StackOverflow that solved all my problems: [facebook: permanent Page Access Token?](https://stackoverflow.com/questions/17197970/facebook-permanent-page-access-token/28418469#28418469). With that I could generate a long-lived (never expiring) access token for a **Facebook Page**!

The docs for a Node.js usage are quite good: https://developers.facebook.com/docs/javascript

You will basically need to firstly fetch:

```
https://graph.facebook.com/v2.12/[PAGE_ID]/media?access_token=[PAGE_ACCESS_TOKEN]
```

This will return a paginated list with media's IDs. Then you need to loop that list and for each item fetching:

```
https://graph.facebook.com/v2.12/[MEDIA_ID]?access_token=[PAGE_ACCESS_TOKEN]&fields=media_type,media_url,thumbnail_url,permalink,caption
```

The reference for Instagram media fields available can be found at https://developers.facebook.com/docs/instagram-api/reference/media
