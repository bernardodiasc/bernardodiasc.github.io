---
title: How to fix custom domain ovewriting problem when using gh-pages deploy script
date: 2018-03-16
category: this-blog
tags:
  - github
  - deploy
  - gh-pages
  - npm
  - yarn
  - create-react-app
excerpt: Sometimes little changes can put down an entire website, luckily sometimes the fix is easy!
---

Yesterday I moved my GitHub pages based website to a custom domain. It was https://bernardodiasc.github.io and now it is https://bernardodiasdacruz.com. The steps to make this is pretty straightforward, there are many useful instructions available on GitHub docs: [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)

This project is based on [create-react-app](https://github.com/facebookincubator/create-react-app/) and for deployment step I choose to host on gh-pages, there are many different ways to make this task as easier as possible, I choose to go with the [NPM gh-pages](https://github.com/tschaub/gh-pages).

## Problem arose and the solution

After the custom domain were changed, things was looking well, but each next deployments was clearing the custom domain setting on the GitHub repository, resulting the site to respond 404.

The solution wasn't clear in any docs but it's quite simple actually:

- Create a file called `CNAME` in the root of the site. In the create-react-app case, put this file in the `/public` folder because that will be copied to `/dist` when you run `yarn build`, and the `/dist` folder will become the root when you run `gh-pages -d dist`;
- Write your custom domain inside this file, in my case, was just one line with `bernardodiasdacruz.com`;

Commit and deploy, it should work!

You can check the solution for this site on the [repo](https://github.com/bernardodiasc/bernardodiasc.github.io/commit/ab1138bb72c181ce48e688c57fdb8f5c76e4b653).
