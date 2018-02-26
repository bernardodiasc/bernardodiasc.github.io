---
title: Boilerplate Generators
date: 2018-02-26
category: This Blog
tags:
  - node.js
  - yarn
  - boilerplate
  - generators
excerpt: This site have some custom made boilerplate generators that makes life easier.
---

There are some repetitive tasks that can cause some laziness to advance fast in the project. Boilerplate generators are something very cool that it's has been around for a while. Many of us already used [Yeoman](http://yeoman.io/) for the scaffolding task. There are also many React boilerplate generators on NPM that works quite well for many purposes.

For this project I wrote my own script to generate files. Not intended to be a competitor of other options, this was for fun, for exercising Node.js skills.

Let's see what we have already:

- `yarn new:component`
  - This will prompt the user to pick one of the types: `displays` or `screens`, ask for a name and if it should be nested in some other component of same type. This setup uses the "display&container" pattern for React components, I think this is amazing way to develop frontend and will dedicate an entire post explaining that.
- `yarn new:content`
  - So far this site only have `posts` content type, and so far it's just a simple markdown (frontmatter) file with some defaul variables.

## About the progress

I'll repeat this a little often, this project is in progress, this is second day I'm working on it and I'll explain what I'm doing on the posts. I hope you enjoy and find it useful... And I hope you give suggestions and feedback as soon as I integrate a comment section 😂 - [GH Issues](https://github.com/bernardodiasc/bernardodiasc.github.io/issues) is already there if you want to say something now.

Alright, my generator scripts are not optimized, there are a lot redundant code and things that is far from perfect. But hey, it works. That's not ideal I know but I'm already using it for myself and as much as my available time allows me, I'll make it better.

Here, my goal for a near future is to abstract away the generator script into a NPM package [github.com/bernardodiasc/generator](https://github.com/bernardodiasc/generator), I'll even include a boilerplate of this entire framework and more advanced CLI.

If you want to take a look at the source code of the existing generators, here it goes:

- https://github.com/bernardodiasc/bernardodiasc.github.io/blob/develop/src/config/componentGenerator.js
- https://github.com/bernardodiasc/bernardodiasc.github.io/blob/develop/src/config/contentGenerator.js

Pull requests are welcomed! Cheers!
