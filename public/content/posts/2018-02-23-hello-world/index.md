---
title: Hello World
date: 2018-02-23
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
---

Hello there! Welcome to my personal (and professional) website.

"What this site have of special", you might wonder... 🙋

Firstly, well, it's my website, yey! 😃

It's cooler than that, I'll try to keep a good content for you to read, but the starting point here another. I'm a web developer, specialized on front end development. Yeah, I do the code that return as your experience. At the moment of I'm writting this, the project is on it's early days and I wanted to keep the visual minimalistic. I like that, but maybe this changes in the future, let's see.

Alright let's see what's the big deal here:

- It's open source [github.com/bernardodiasc/bernardodiasc.github.io](https://github.com/bernardodiasc/bernardodiasc.github.io)
- The content is based on static files [github.com/bernardodiasc/filestojson](https://github.com/bernardodiasc/filestojson)
- The framework is quite powerful [bernardodiasc.github.io/docs/](https://bernardodiasc.github.io/docs/)

Being a front end developer, there's a lot to do for a project to be awesome. Starting with the fact that a framework is the whole set of tools and techniques the involves the project. Yeah I could use something that's ready in the community, and I did used many different options for different cases, you could suggest a static file generator like Jekyll and there's a big chance that I've used your suggestion too, but right here, I made my own framework, because It's cool, because it's the way I want, because I need to showcase that I know what I'm doing for people to hite me! 😁

The `filestojson` script was made for [https://x-team.com/legacy/](https://x-team.com/legacy/) in it's first version, at that moment the whole site had html static files generators and npm tasks to build the assets. In the second version I kept the content generator and upgraded the template render to React. Because React is awesome and it makes development experience a breeze.

Most problems I found in the second version was basicaly related to make a single-page application to behave well in a static-file server. My first time doing this, I give a try on Gasby and Next.js, but hey, I still wanted to make something myself, so I kept the Creat-React-App setup and installed [github.com/stereobooster/react-snap](https://github.com/stereobooster/react-snap). Sweet! It worked very well.

For the workflow I prepared a whole bunch of cool tooling, patterns and procedures. I enjoy to work for large scale project, so in this framework I used the entire arsenal recommended for big apps. You can see it in the main README of this site or check with even further details in the docs at [bernardodiasc.github.io/docs/](https://bernardodiasc.github.io/docs/), but let me briefly mention here:

- Setup: `yarn install`
- Development: `yarn start`
- Documentation with Storybook: `yarn docs`
- Content generator: `yarn content`
- Component generator: `yarn component`
- ESLint and StyleLint: `yarn lint`
- Tests with Jest: `yarn test`
- Build static files: `yarn build`
- Static server: `yarn serve`
- Deploy project: `yarn deploy` then run `npm docs`

😆

Notice that it's everything simple, type "yarn something" and voilà! The setup is trivial, development is a breeze. It provided complete patterns for documentation and showcase of the components using Storybooks, and also includes a component generator that comes with all the boilerplate. Linters and tests suites, yeah, I've got covered that too. You can build and up a local static server to see how it's working. And finally, easy deployment. In the attempt to commit changes, the robot will prevent most as possible the introduction of wrong code or bugs (if properly tested).

For the CSS I kept pure. Yeah, I like Sass, I like even more PostCSS and CSS Modules, and Styled-components. But I choose pure CSS here and I'm happy with.

So, yeah, a lot of this was made above CRA features. But make sure you get the idea that I've been doing this kind of stuff much before CRA existence. All the tooling are here to help, to make the development experience better, reliable, faster.

Thanks for reading my blog, I'll do my best to post more about a lot things and evolve this blog's system, and post about that too.
