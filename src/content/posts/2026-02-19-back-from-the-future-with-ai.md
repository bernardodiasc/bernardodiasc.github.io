---
title: Back from the future, with AI
date: 2026-02-19
category: this-blog
thumbnail: /content/posts/2026-02-19-back-from-the-future-with-ai/ChatGPT-Image-Feb-19-2026-10_51_05-PM.png 
tags:
  - astro
  - migration
  - ai
  - static-site
  - developer-experience
  - ai-generated
excerpt: After years away, I'm reviving this blog with the help of AI — and the entire tech stack got a fresh start.
---

<figure>
  <img alt="Back from the future, with AI" src="/content/posts/2026-02-19-back-from-the-future-with-ai/ChatGPT-Image-Feb-19-2026-10_51_05-PM.png" />
</figure>

It's been a while. Almost seven years since the last post here. Life happened, priorities shifted, and this little corner of the internet sat quietly collecting dust. But today, something changed.

## The migration

This site was originally built with Create React App, Redux, React Router, and a custom content pipeline that converted markdown files into a big JSON blob at build time. It worked well for 2018. But by 2026 standards, the entire dependency tree was frozen in time — React 16, Redux 3, Storybook 3, and dozens of packages with known security vulnerabilities.

Rather than incrementally upgrading through years of breaking changes, I decided to start fresh. The new stack is [Astro](https://astro.build/), a framework purpose-built for content-driven websites. Here's what changed:

- **37 dependencies → 4.** No more Redux, React Router, react-snap, highlight.js, or any of the glue code that held them together.
- **Custom content pipeline → Content Collections.** Astro reads the markdown files directly. No build scripts, no generated JSON.
- **Client-side rendering → Zero JavaScript.** The old site shipped the entire React runtime to the browser just to display static blog posts. Now it ships nothing — pure HTML and CSS.
- **Build time: seconds, not minutes.** 29 pages build in under 2 seconds.

The visual design, the URL structure, the content — everything the reader sees stayed the same. It's all under the hood.

## The AI factor

Here's the part that would've sounded like science fiction back in 2018: the entire migration was done in a single conversation with an AI coding assistant. Not just the boilerplate — the architecture decisions, the component porting, the content migration, the edge cases with MDX and custom components. All of it.

I've been a developer for over two decades. I've seen tools come and go. But this is genuinely different. The development experience with AI assistance is not about replacing the developer — it's about removing the friction that makes you abandon side projects. The boring parts, the config wrangling, the dependency hell — that's where AI shines. It lets you focus on what you actually want to build.

This blog sat dormant for years partly because the idea of modernizing the stack felt like a weekend project I never had the weekend for. With AI, it took an afternoon.

## What's next

I'm excited to be back. There are things I want to write about — frontend architecture, developer tools, the evolving role of AI in software development, and whatever else crosses my mind.

And yes, the **search** and **archive** pages have been placeholders since 2018. Maybe it's finally their time too.

Let's see where this goes.
