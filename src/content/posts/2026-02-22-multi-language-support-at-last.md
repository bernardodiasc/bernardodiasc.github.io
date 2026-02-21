---
title: Multi-language support, at last
date: 2026-02-22
category: this-blog
thumbnail: /content/posts/2026-02-22-multi-language-support-at-last/ChatGPT-Image-Feb-20-2026-11_54_48-PM.png
tags:
  - i18n
  - astro
  - ai
  - developer-experience
  - ai-generated
excerpt: The very first item on my 2018 feature wishlist was internationalization. Eight years later, it's finally here — and every post now has a Portuguese translation.
---

<figure>
  <img alt="Drawing a user flow graph with D3.js Sankey and React" src="/content/posts/2026-02-22-multi-language-support-at-last/ChatGPT-Image-Feb-20-2026-11_54_48-PM.png" />
</figure>

If you go back to my [second blog post ever](/2018/02/26/blog-progress), written on February 26, 2018, you'll find a section titled "Future features." The very first item on that list:

> Internationalisation (english and portuguese)

That was day two of this blog's existence. I knew from the start that I wanted it to be bilingual. I'm Brazilian, I write in English for professional reach, but a huge part of the people I care about — family, friends, the local dev community — would appreciate reading in Portuguese. It always felt like the right thing to do.

And yet, for eight years, it didn't happen.

## Why it took so long

Internationalization is one of those features that sounds simple in a planning session and reveals its true complexity the moment you start implementing it. It's not just about translating text. It's about:

- **Content duplication.** Every post needs a parallel version. That's not a one-time effort — it's a commitment to maintain two versions of everything going forward.
- **Routing.** You need language-prefixed URLs, language-aware navigation, a way to switch between versions of the same page.
- **UI strings.** Every label, placeholder, button, and title needs to exist in both languages.
- **The translation itself.** 24 blog posts, some of them quite long and technical. That's a lot of writing.

Any one of these would be a manageable weekend task. All of them together felt like a project I'd start and never finish — the kind of side project that sits in a branch, 60% done, forever.

## What changed

AI changed the equation. Not by making the problem simpler — the same architectural decisions still needed to be made, the same files still needed to be created. But the labor part, the part that made this feel impossible for a single person maintaining a side project, suddenly became tractable.

Here's what actually happened: I said "add a language switch on top right, then create the functionality, then create the translations for all posts." One sentence. The AI read the entire codebase, understood the content collection schema, the routing structure, the layout components, the CSS patterns — and produced a complete implementation.

The infrastructure came first: a `lang` field in the content schema, i18n utility functions, a language switcher component that matches the existing tab design, translated UI strings, and a full set of Portuguese page routes. Then came the content: 24 posts and 2 articles, each translated to Brazilian Portuguese, preserving all code blocks, component references, and links.

60 pages generated on the next build. The site doubled in size.

## How it works

The implementation is straightforward:

- **English** is the default language, with no URL prefix. The site works exactly as before for English readers.
- **Portuguese** pages live under `/pt/`. Every post, the homepage, search, archive, and about page have Portuguese counterparts.
- **The language switch** sits in the header, next to the navigation tabs. It links to the equivalent page in the other language. Visit `/2018/02/23/hello-world` and click PT — you land on `/pt/2018/02/23/hello-world`.
- **Content** is organized with Portuguese translations in a `pt/` subdirectory within the posts collection. Each translated file has `lang: pt` in its frontmatter.

No client-side JavaScript for language detection, no cookies, no redirects. Just static pages with links between them. Simple, fast, and it works with JavaScript disabled.

## The maintenance question

This is the part that always scared me off. Translating 24 existing posts is a one-time effort, but what about the next post? And the one after that? Maintaining bilingual content means doubling the writing effort for every piece of content, forever.

Except now I have a collaborator that can translate a blog post in seconds. The same AI that built the infrastructure can produce the Portuguese version of any new post. Write in English, generate the translation, review it, publish both. The bottleneck isn't the translation anymore — it's the review.

That changes the calculus entirely. The reason i18n sat on my wishlist for eight years wasn't that I couldn't build it — it's that I couldn't sustain it. Now I can.

## Full circle

There's something satisfying about checking off a to-do item that's been open for eight years. Especially when it was the *first* thing I wrote down. Before comments, before categories, before tags, before search — before all the features that eventually got built — internationalization was the dream.

Twenty-four posts translated. Two languages. One afternoon.

The second blog post I ever wrote promised this would happen. The 28th one delivers.
