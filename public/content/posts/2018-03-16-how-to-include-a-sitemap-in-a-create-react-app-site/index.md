---
title: How to include a sitemap.xml in a create-react-app site
date: 2018-03-16
category: this-blog
tags:
  - google
  - seo
  - react
  - sitemap
  - robots
  - create-react-app
  - babel
  - node
  - es5
  - javascript
  - npm
  - yarn
  - workflow
excerpt: Creating a sitemap.xml generation with Babel and Node.
---

This blog is evolving and its content is getting bigger. It's still hosted on GitHub pages, even though it's DNS now points to a custom domain.

SEO was one reason that weighted on the custom domain move. Well, it also looks better to have a custom domain. Anyway, for the SEO aspects, I also included pre-rendering feature and head meta tags. Both things that could have a dedicated post for each one.

What I'm going to explain here is how I included a `sitemap.xml` file on this site. This is a `create-react-app` based project, therefore the implementation is somehow affected by that library defaults.

The solution was to create a script that would generate the sitemap file, and this script is included in the build task.

## The how to

Alright, first things first. My CRA setup was using default Babel configuration, and because of that I haven't installed nor configured Babel for this project previously. I could write my generator script in plain old JS, but there were some main concerns preventing me to do that:

One concern is that I wanted to use the existing selector methods to iterate the content, for the content-based pages, and they were already written with latest JS features.

The other concern was that I simply wanted to write the script with modern JS.

### Setup Babel

Install all the requirements:

```
yarn add babel-cli babel-preset-env babel-preset-stage-0 babel-preset-react --dev
```

Create a `.babelrc` file in the root:

```
{
  "presets": ["env", "react", "stage-0"]
}
```

That's it, Babel is ready and we can move forward to our modern JS script!

References:

- https://babeljs.io/docs/usage/cli/
- https://babeljs.io/docs/plugins/
- https://babeljs.io/docs/usage/babelrc/

### Create the sitemap generator script

To create the sitemap XML I used https://github.com/ekalinin/sitemap.js, it's quite simple and the instructions in the README are quite good for many different cases.

```
yarn add sitemap --dev
```

The script looks like this:

```
import path from 'path'
import sm from 'sitemap'
import fs from 'fs'

import config from '.'
import data from '../data.json'
import {
  getAllPostsForListing,
  getAllCategoriesForListing,
} from '../selectors/data'

const OUTPUT_FILE = path.resolve(__dirname, '..', '..', 'public', 'sitemap.xml')

const postsUrls = getAllPostsForListing({data})
  .map(post => ({
    url: `${config.PUBLIC_URL}/${post.handle}`,
    changefreq: 'weekly',
    priority: 0.8,
  }))

const categoriesUrls = getAllCategoriesForListing({data})
  .map(category => ({
    url: `${config.PUBLIC_URL}/category/${category.handle}`,
    changefreq: 'weekly',
    priority: 0.8,
  }))

const sitemap = sm.createSitemap({
    hostname: 'http://bernardodiasdacruz.com',
    cacheTime: 600000, //600 sec (10 min) cache purge period
    urls: [
      { url: '/', changefreq: 'weekly', priority: 1 },
      { url: '/archive', changefreq: 'weekly', priority: 0.5 },
      { url: '/search', changefreq: 'weekly', priority: 0.5 },
      { url: '/about-me', changefreq: 'monthly', priority: 0.5 },
      ...postsUrls,
      ...categoriesUrls,
    ]
})

fs.writeFileSync(OUTPUT_FILE, sitemap.toString())

console.log(`Sitemap written at ${OUTPUT_FILE}`)
```

Yeah, I know many resources out there suggests that I load a `routes` file and iterate with it. You could really go for that approach if you'd prefer. By reading the script above I hope you get the idea of the how to. In my opinion, since this is a fairly small project, hardcoding the pages of the sitemap is good enough.

### Workflow

On `package.json` script, I included a new task called `sitemap` and appended it in the `prebuild` task, see:

```
"scripts": {
  "sitemap": "./node_modules/.bin/babel-node src/config/sitemap.js",
  "prebuild": "npm run content && npm run sitemap"
}
```

### The final round

After making the commit and deploy of these changes, I went to https://www.google.com/webmasters/ and tested the sitemap there, successfully. Check out the result http://bernardodiasdacruz.com/sitemap.xml.

This solution was integrated on this website in this [commit](https://github.com/bernardodiasc/bernardodiasc.github.io/commit/0d7f2f457db38512d8392621d1e31935afcf4039).
