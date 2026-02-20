---
title: Search and archive pages, finally
date: 2026-02-20
category: this-blog
thumbnail: /content/posts/2026-02-20-search-and-archive-finally/ChatGPT-Image-Feb-19-2026-10_30_59-PM.png
tags:
  - ai
  - developer-experience
  - javascript
  - css
  - astro
  - ai-generated
excerpt: The search and archive pages that have been placeholders since 2018 are now real. Here's how they were built — and what it's like to direct an AI through UI work.
---

<figure>
  <img alt="Search and archive pages, finally" src="/content/posts/2026-02-20-search-and-archive-finally/ChatGPT-Image-Feb-19-2026-10_30_59-PM.png" />
</figure>

In the [previous post](/2026/02/19/back-from-the-future-with-ai) I mentioned that the search and archive pages had been waiting since 2018. Well, they didn't have to wait long after that — they're done now, built in the same session.

I want to be transparent about how this happened, because I think the process itself is worth talking about.

## How it actually works

I didn't write the code for these pages. I described what I wanted, and an AI coding assistant produced the implementation. That's the honest version.

The process looked something like this: I said "build the search page." No design spec, no wireframe, no component library reference. Just the intent. The AI looked at the existing codebase — the layout, the components, the CSS variables, the content collections — and produced a working page with a text input, category cards, tag chips, and client-side filtering.

Then I iterated. "Put categories and tags in collapsible panels. When collapsed, show the selected option in a smaller way." Another pass. "Add a calendar filter to the archive page." Another pass. Each time, I described the *what*, and the AI figured out the *how*.

## What I didn't do

I didn't provide design guidelines. No spacing system, no color tokens beyond what already existed in the CSS variables, no responsive breakpoints to follow. I didn't sketch anything. I didn't review the code line by line before accepting it.

This is the raw, first-pass version. And honestly? It works. It's functional, it's consistent with the rest of the site, and it shipped in minutes instead of days.

But it's also clearly a starting point. The UI choices are sensible defaults, not deliberate design decisions. The collapsible panels, the button styles, the filter layout — they're all reasonable, but they're not *mine* yet. I haven't put my own taste into it.

## What the pages do

The **search page** has three ways to find content:

- A text input that filters posts by title, excerpt, tags, and category
- Category cards you can click to filter by category
- A tag cloud where you can select a tag

All three can be combined. Everything runs client-side with zero dependencies — the post data is embedded at build time.

The **archive page** now has a date filter panel with year and month buttons. Select a year to see just that year's posts. Select a month to narrow it further. The filter state shows as a small badge when you collapse the panel.

Both sections use collapsible panels so they stay out of the way once you've made your selection.

## What's next for these pages

There's a lot I want to refine. Better responsive behavior. Maybe keyboard navigation for the filters. Visual polish that reflects more intentional design choices rather than AI defaults. Possibly combining search and archive into a single, more powerful filtering experience.

The point is: I got from zero to functional in one sitting. The iteration, the refinement, the making-it-truly-mine part — that comes next. And that's exactly the kind of work I find interesting.

Eight years of "I should really build that search page" resolved in an afternoon. Not perfect, but done. And done beats perfect every time.
