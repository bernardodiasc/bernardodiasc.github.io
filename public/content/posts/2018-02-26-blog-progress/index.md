---
title: Blog progress
date: 2018-02-26
category: this-blog
tags:
  - typography
  - design
  - css
  - markdown
excerpt: Second day developing this project, long road ahead.
---

Hello again!

If you are checking this blog at the date of this post, you may still be thinking: "meh..."

C'mon, take some faith on me! So far I spent 6h building this blog, it's based on some existing boileplated as mentioned in previous post. But I'm not using any open source CMS, I built my own CMS! I want to show you my craft, but this craft takes time, much more time. Let's keep all the fun rolling. 🤓

I have a roadmap of upgrades that I want to include and they will be made progressively. The cool thing is that the project is already usable, the MVP was put alive on it's first day. Yeah yeah, quite crude, but hey, take a look at the [source code](https://github.com/bernardodiasc/bernardodiasc.github.io), it's pretty awesome already.

For future efforts, there's a lot of things in my backlog that I want to work in.

## Future features:

- Internationalisation (english and portuguese)
  - With local storage with redux middleware to persist preferences
- Comments section
  - Well, this blog is purely based on static files, so Disqus will help with this
- Categories routes
  - Some content belongs together, like this "blog progress" series
- Year, Month and Day routes
  - Listing of posts with different filters for dates, based on url routes
- Tags filtering
  - Differently of category, as post can have many tags, so I'll make a fancy filtering that you can combine multiple tags
- Good imagery handling
  - Right now I'm only covering text, but will include images and other medias, because it makes way cooler
- Share options
  - Yeah, just some buttons to share on social network, this blog is already SEO-friendly
- Load content asynchronously
  - This will make things more interesting, `filestojson` was designed for small project, with little content, but I would expect to take this blog far, I want to include hability to [split output into multiple files](https://github.com/bernardodiasc/filestojson/issues/15) on `filestojson` and load content pieces asynchronously in this blog

## Pending upgrades:

> These are not features... this list is more about technical debts...

- Make a better design
- Complete documentation instructions and component showcases & tests (see http://bernardodiasc.github.io/docs)
- Write more posts about technical details of this blog's development
- Fix date format
- Include meta information on posts
