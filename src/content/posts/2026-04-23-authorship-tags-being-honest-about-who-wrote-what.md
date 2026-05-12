---
title: Authorship tags — being honest about who wrote what
date: 2026-04-23
category: this-blog
draft: true
thumbnail: /content/posts/2026-04-23-authorship-tags-being-honest-about-who-wrote-what/authorship-spectrum.png
tags:
  - ai
  - ai-agents
  - ethics
  - transparency
  - developer-experience
  - content-strategy
  - astro
  - ai-assisted
excerpt: I added authorship tags to every post on this blog — human-written, ai-assisted, or ai-generated. The categorization itself was harder than the implementation. Here's what I think the labels actually mean, and why declaring them feels less optional than it used to.
---

<figure>
  <img alt="Risograph two-color print on warm cream paper, in deep teal and coral with the medium's natural slight mis-registration and visible printed grain throughout. A wide horizontal landscape composition. On the far left, a confident teal silhouette of a human hand holding a slim fountain pen, the lines drawn with the slightly imperfect edge of riso ink. On the far right, an abstracted coral diagram of a small node-and-edge graph — five round dots connected by short lines, suggesting a network — printed in coral ink with the same characteristic edge softness. Between the two icons, a wide central band where the teal and coral plates overlap; the overlapping region carries both inks slightly offset, producing a fuzzy purple-brown blended zone where the edges of teal and coral can each be seen, like a deliberate printer's misalignment. The left icon is sharply teal with no coral; the right icon is sharply coral with no teal; only the middle band shows both. A faint paper grain runs over the whole composition, and the cream background carries small specks and ink-roller texture. No labels, no characters, no readable text anywhere in the composition." src="/content/posts/2026-04-23-authorship-tags-being-honest-about-who-wrote-what/authorship-spectrum.png" />
  <figcaption>The endpoints are clean. The middle is wide and a little blurry, and that's where most posts actually sit.</figcaption>
</figure>

I added a small piece of metadata to every post on this blog this week. Each one now carries an authorship tag: `human-written`, `ai-assisted`, or `ai-generated`. They show up as a distinct chip at the top of the post, alongside the topic tags, in a different style so they're hard to miss.

The implementation was an afternoon. The categorization was a few hours of staring at posts and asking myself an uncomfortable question: *who actually wrote this one?*

This post is about why I think that question matters, why the answer is rarely as clean as the labels suggest, and why I decided to publish my best honest answer anyway.

## What the labels are trying to do

Three labels, three rough zones:

- **`human-written`**: I wrote the post. The argument, the sentences, the rhythm. AI may have helped with a small thing — a typo check, a Portuguese translation that I then rewrote — but the prose is mine.
- **`ai-assisted`**: I directed and edited, but a meaningful amount of the prose came from the model. I rewrote, cut, restructured, and pushed back. The voice is mine because I made it mine. The first draft wasn't.
- **`ai-generated`**: the model produced most of the text and I lightly edited it. I'm not pretending I crafted every sentence. I picked the topic, set the constraints, signed off on the result.

These aren't policy categories from a journal. They're rough self-assessments. Two writers using the same workflow could legitimately tag their posts differently and both be telling the truth.

## The retroactive part is harder than it sounds

Going through eight years of posts and assigning a tag was strange.

The 2018 posts were easy. They were written before the modern wave of generative tools. I sat in a chair, opened an editor, and typed them. `human-written` is unambiguous and there are twenty-one of those.

The recent ones were trickier. Take the post where I migrated this whole site from React to Astro. The migration was done in a single conversation with an AI coding agent — I described the goal, the agent wrote most of the code, I reviewed and pushed back where needed. The post about that migration was also `ai-assisted`, but in a different way: I directed the argument and structure, the agent helped me draft the prose, and I rewrote until it sounded like something I'd actually say.

That distinction — *what kind of collaboration was it?* — is the part the labels are forcing me to think clearly about. The code work was AI-assisted in a "the agent wrote most of it" sense. The writing was AI-assisted in a "the agent drafted, I shaped" sense. Same label, different texture. The tag captures direction, not detail.

I went the other way for some of the early 2026 posts. The internationalization post and the search-and-archive post were tagged `ai-generated` originally. Looking back, that's not quite right either. The argument and structure were mine. What the AI did was help me say it more cleanly than I would have on a first pass. That's `ai-assisted`. So I changed those tags. Two days of self-debate to move a five-character string in a YAML file.

## Why I'm bothering at all

The simple version: I think readers deserve to know.

Not because AI-assisted writing is bad — I don't think it is, and I'd lose any argument for that pretty quickly given that the post you're reading is itself ai-assisted. I think readers deserve to know because **the calibration matters**. When you read something a person wrote, you adjust your trust based on what you know about that person. When you read something a model produced, you should adjust your trust based on knowing that. Without the label, you can't do either correctly.

It also matters for *me*, not just for readers. Looking at the archive and seeing "this post was mostly mine, this one was a collaboration, this one was substantially the model's work" gives me a kind of mirror. I can see the shape of how my writing has been changing. I can notice when I'm leaning on the tool more than I want to be. I can also notice when I'm under-claiming AI involvement to feel more authentic, which is its own form of dishonesty.

There's a third reason that's harder to phrase. The whole conversation about AI in writing has gotten a little tribal — pure-human writers on one side, full-automation enthusiasts on the other, and a quiet middle that doesn't say much because it's hard to defend a moving target. The tags are my small contribution to that middle. They say: *most things sit somewhere on a spectrum, and pretending otherwise gets in the way of an actual conversation.*

## The temptation to over-claim — in both directions

The first temptation is the obvious one. Mark everything `human-written` because that sounds more impressive, more authentic, more authored. Hide the AI involvement because the reader might judge the work less generously if they know.

I don't think that ages well. The AI involvement is increasingly visible at the surface level — phrasing, structure, certain stylistic tells — and a reader who suspects AI in a post tagged `human-written` will trust the author less, not more. Honesty about the tool builds more trust than concealment of the tool.

The other temptation is subtler. Mark everything `ai-generated` because it makes the AI sound more capable than it is — *look how much I've automated, look how little I had to do*. That's also dishonest, in a different direction. It overstates the model's contribution and understates the editing, the rejection of bad drafts, the structural pushes, the times I cut a paragraph the model was very proud of. If I'm honest, almost nothing on this blog is purely `ai-generated`. The middle category does most of the work.

The ethical move is the one that doesn't flatter me in either direction. Some posts are mine, some are collaborations, some are mostly the model's. The reader gets to know which.

## What `ai-assisted` actually looks like

Since the middle category is doing most of the work, let me describe what it actually is in practice, for me.

A typical `ai-assisted` post starts with a few hours of thinking — what's the argument, who's the audience, what's the one thing I want the reader to take away. That's still my job entirely. Then I open a session with an AI coding agent that has access to the rule files I wrote about voice and structure. I describe the post, sometimes with a rough outline, sometimes just a paragraph of intent. The agent produces a first draft.

Then the work begins. I rewrite the opening because it's too generic. I cut a section the model thought was important and that I think is filler. I add a personal anecdote the model couldn't have known. I push back: "this paragraph is too neat, the actual situation was messier, rewrite it with more ambiguity." Sometimes I throw away the entire draft and ask for it again with different framing. Sometimes I keep most of a paragraph because the model phrased something better than I would have.

By the end, the post has my structure, my opinions, my anecdotes, my edits, and a fair amount of the model's phrasing. That's `ai-assisted`. It's not "AI wrote this and I rubber-stamped it" — that would be `ai-generated`. It's not "I wrote every word" — that would be `human-written`. It's a real collaboration, and the label tells the reader that's what they're getting.

<figure>
  <img alt="Risograph two-color print on warm cream paper, in deep teal and coral, in the medium's typical slightly imperfect register. A vertical composition with two horizontal rows stacked one above the other, separated by generous cream space. The upper row consists of five small, softly colored teal pill-shapes of similar size, lined up evenly across the row, all sharing the same calm teal tone — they read as a uniform group. The lower row is identical to the upper row except that, at its left end, a single larger coral pill-shape sits before the line of teal pills. The coral pill is slightly mis-registered: a thin teal ghost outline trails it by a millimeter, marking it as the result of a second pass through the press. The coral pill has visibly more weight and contrast than the teal pills, and the eye is drawn to it. Both rows are entirely free of letters; the pills are abstract printed shapes only. Paper grain throughout, cream background with subtle ink-roller specks, no readable text anywhere in the composition." src="/content/posts/2026-04-23-authorship-tags-being-honest-about-who-wrote-what/before-after-tagged-post.png" />
  <figcaption>Same row of facts, different signal. The authorship chip is styled differently from topic tags so the reader notices it as a different kind of fact.</figcaption>
</figure>

## What I'm not claiming

I want to be careful here.

I'm not claiming the labels are precise. They're not. The line between `human-written` and `ai-assisted` is fuzzy and depends on how I happened to feel about a given post the day I tagged it. Someone could read the same post and disagree with the label, and they might be right.

I'm not claiming this is the standard everyone should adopt. I'm claiming it's *a* standard, mine, on my blog, and I'd rather pick a fuzzy honest one than wait for a clean industry-wide one that may or may not arrive.

I'm not claiming AI writing is inherently lesser. I think the best AI-assisted writing — when the human is doing real editorial work — can be better than the same human's first draft would have been. The label isn't a quality judgment. It's a description of process.

And I'm not claiming this fixes the broader problem. The internet is filling up with AI-generated text that nobody is labeling, and my putting little chips on my own posts doesn't change that at scale. It's just one writer being honest about one corner of the web.

## A small ritual

There's a moment now, before I publish a post, where I pause and ask: *honestly, which one is this?* That pause is small and free and slightly uncomfortable, which is the right combination for a useful ritual.

It also keeps me from drifting. If most of my recent posts are tagged `ai-assisted`, that's a fact about how I'm working right now. If they all start drifting toward `ai-generated`, that's a signal I should probably pay attention to. Tags don't just describe the past. They quietly point at the trend.

Eight years from now, if this blog still exists, the archive will read like a layered fossil record. Twenty-something posts from 2018, none of them with a category that even existed yet. A handful from 2026 with `ai-assisted` chips. Whatever I'm writing in 2034, with whatever the labels look like by then. Each post will carry the small honest disclosure of how it was made.

That's the part I want. Not perfection. Just a record.

## Further reading

- [Planning 20 blog posts with an AI agent](/2026/04/21/planning-20-blog-posts-with-an-ai-agent)
- [Back from the future, with AI](/2026/02/19/back-from-the-future-with-ai)
