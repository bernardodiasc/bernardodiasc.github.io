---
title: Hello World
date: 2018-02-23
category: This Blog
tags:
  - static files
  - react
  - redux
  - boilerplate
  - github pages
  - yarn
  - webpack
  - filestojson
  - markdown
  - frontmatter
excerpt: Hi there, in this post I explain briefly how this website was made.
---

Hello there! Welcome to my personal (and professional) website.

"What this site have of special", you might wonder... 🙋

Firstly, well, it's my website, yey! 😃

It's cooler than that, I'll try to keep a good content for you to read, but the starting point here another. I'm a web developer, specialized on front end development. Yeah, I do the code that return as your experience. At the moment of I'm writting this, the project is on it's early stage and I wanted to keep the visual as simple as possible. The visual will be improved progressively, right now it's under the hood that matters.

Alright let's see what's the big deal here:

- It's open source [github.com/bernardodiasc/bernardodiasc.github.io](https://github.com/bernardodiasc/bernardodiasc.github.io)
- The content is based on static files [github.com/bernardodiasc/filestojson](https://github.com/bernardodiasc/filestojson)
- The framework is quite powerful [bernardodiasc.github.io/docs](https://bernardodiasc.github.io/docs/)

Being a front end developer, there's a lot to do for a project to make it awesome. Starting with the fact that a framework is the whole set of tools and techniques the involves the project and it's super fun to learn how to do a framework. Well, yeah, I could use something that's ready in the community, and I did used many different options for different cases, I had experience with all the major CMSes around that, and many frameworks of a variety of kinds, but right here, I made my own framework, because It's cool, because it's the way I want, because I need to showcase that I know what I'm doing for people to hire me! 😁

The `filestojson` script was made for [x-team.com/legacy](https://x-team.com/legacy/) in it's first version, and at that moment the whole site had html static files generators and npm tasks to build the assets. In the second version I kept the content generator and upgraded the template render to React. Because React is awesome and it makes development experience a breeze.

Most problems I found in the second version was basicaly related to make a single-page application to behave well in a static-file server. Was my first time doing this, I gave a try on Gasby and Next.js, but I wanted to make something simpler, so I kept the Creat-React-App setup and installed [github.com/stereobooster/react-snap](https://github.com/stereobooster/react-snap). Sweet! It worked very well.

For the workflow I prepared a whole bunch of cool tooling, patterns and procedures. I enjoy working for large scale project, so in this framework I used the entire arsenal recommended for big apps (almost, there's no type system in place). You can see it in the main README of this site or check with even further details in the docs at [bernardodiasc.github.io/docs](https://bernardodiasc.github.io/docs/), but let me briefly mention here:

- Setup: `yarn install`
- Development: `yarn start`
- Documentation with Storybook: `yarn docs`
- Content generator: `yarn content`
- Component generator: `yarn component`
- ESLint and StyleLint: `yarn lint`
- Tests with Jest: `yarn test`
- Build static files: `yarn build`
- Static server: `yarn serve`
- Deploy project: `yarn deploy`

😆

Notice that it's everything simple, type "yarn something" and voilà! The setup is trivial, development workflow is smooth and fast. It provided complete patterns for documentation and showcase of the components using Storybooks, and also includes a component generator that comes with all the boilerplate. Linters and tests suites, yeah, I've got covered that too. Can build and up a local static server to see how it's working. And finally, easy deployment. In the attempt to commit changes, the robot will prevent most as possible the introduction of wrong code or bugs (if properly tested).

For the CSS I kept pure, using BEM naming pattern. I like Sass, I like even more PostCSS and CSS Modules, and Styled-components. But I choose pure CSS here and I'm happy with.

All the tooling are here to help, to make the development experience better, reliable, faster.

Thanks for reading my blog, I'll do my best to post more about a lot things and evolve this blog's system, and post about that too.
