---
title: From writing code to designing intelligence
date: 2026-04-14
category: ai-work
thumbnail: /content/posts/2026-04-14-from-writing-code-to-designing-intelligence/from-writing-code-to-designing-intelligence.png
tags:
  - ai
  - ai-agents
  - workflow
  - learning
  - strategy
  - developer-experience
  - python
  - backend
  - langgraph
  - fastapi
  - postgresql
  - pydantic
excerpt: AI at work is often framed as a productivity hack or a risk — a convenient reduction of something structural. Here’s a sharper read on what’s changing, what broke when I pushed into unfamiliar territory, and why human validation still drew the line.
---

There’s a growing tendency to frame AI usage in the workplace as either a productivity hack or a looming risk. Both interpretations are incomplete.

What’s happening is closer to a broader paradigm shift in how knowledge work is structured and executed. These shifts tend to follow a familiar pattern: initial resistance, partial adoption, and eventually a reorganization of how people operate at a fundamental level. They don’t just change tools — they reshape how information flows, how knowledge is built and shared, how communication happens, and how intelligence is applied. AI is starting to affect all of these layers at once, including how code itself is generated and validated.

It doesn’t just make things faster; it shifts the boundary between what you need to understand yourself and what can be delegated to the system, which in turn changes how work is approached from the very beginning.

Over the past months, I’ve been intentionally pushing how AI can be integrated into my workflow. Not as an optimization layer, but as something closer to a change in how I approach problems. There is no stable playbook yet, which means that most of this work is necessarily exploratory. The only way to make it useful is to treat it as something that can be structured over time — otherwise it quickly collapses into scattered gains that don’t compound.

## This is not really about productivity

It’s tempting to reduce this to productivity, but that framing doesn’t hold for very long. Productivity gains get absorbed faster than people expect, and once they do, they stop being an advantage and start becoming a baseline. The more relevant question is what AI allows you to do that you wouldn’t have been able to do otherwise, and how reliably you can operate in that expanded space without losing control of what’s being produced.

## Using discomfort to see what actually breaks

<figure>
  <img alt="Human and robotic hands typing at keyboards, surrounded by floating code panes with errors and success states" src="/content/posts/2026-04-14-from-writing-code-to-designing-intelligence/collaboration-chaotic-code-creation.png" />
  <figcaption>Nothing fails in private anymore — uncomfortable, unless what you’re measuring is accountability, not just throughput.</figcaption>
</figure>

To make this concrete, I deliberately stepped into a domain that sits outside my core experience. I’m a frontend developer by background, and I chose to work on Python backend systems — services, APIs, server-side logic — not because it was the most efficient path, but because it created enough friction to expose what was actually happening when AI is introduced into the process.

At the beginning, the results were uneven in a way that is hard to hide. I was generating code that I couldn’t fully explain, reviews were difficult, and in a shared codebase without a proper staging environment, mistakes had immediate consequences. Some work had to be discarded and restarted, which from the outside can look like inefficiency, but was in practice the mechanism that prevented the experiment from degrading the system around it. That phase made something very clear: AI doesn’t remove the need for judgment — it increases the cost of not having it.

There is another layer here that became impossible to ignore over time. Without the support of someone experienced in backend and infrastructure, I would not have been able to make meaningful progress, regardless of how much I was using AI. The issue wasn’t just generating code — it was evaluating whether that code made sense in the context of the system. In a stack where I already have fluency, like JavaScript, I can direct and correct AI outputs with a reasonable level of confidence. In Python, at least at the beginning, I didn’t have that baseline. The presence of someone who could review, reject, and explain what was wrong was not just helpful — it was structurally necessary. AI expanded my reach, but human validation defined the boundary of what could actually be trusted.

## Where iteration replaces blind reliance

<figure>
  <img alt="Robotic hand with a warning panel and human hand with a verified panel, facing a figure walking toward light in a digital landscape" src="/content/posts/2026-04-14-from-writing-code-to-designing-intelligence/human-ai-collaboration-in-code.png" />
  <figcaption>When automated signals and your own bar disagree, merging isn’t a shortcut — it’s someone’s call to own.</figcaption>
</figure>

What changed over time was not just the tooling, but how I was interacting with it. Moving to more capable models helped, but the bigger shift was in how instructions were framed and how outputs were evaluated. The difference becomes visible quickly once you stop treating the model as something that “gives answers” and start treating it as something that needs to be directed, constrained, and corrected. As that changed, both the quality of the output and my own understanding started to move in tandem, which is where the process begins to stabilize.

I’m still not fully fluent in Python, and there are clear limits to what I can do independently without assistance. But that limitation is no longer the most relevant variable. The more important shift is that I can now operate inside the system with partial understanding and progressively increase it, instead of being blocked by the lack of it. That changes the shape of learning itself, and also changes what “being capable” looks like in practice.

## Where execution stops being the center of the work

This naturally leads to a reframing of the role. The goal is not to replace engineering with prompts, which is a caricature of what’s happening, but to move part of the effort from direct execution into instruction, guidance, and validation. Writing code doesn’t disappear, but it stops being the only place where value is created. Part of that value moves into how well you can design the process that produces the code, and how effectively you can verify that what was produced actually holds.

## There is a spectrum here (and it matters where you sit)

There is a spectrum here that is still stabilizing. On one end, AI is used as a precision tool that accelerates known workflows. On the other, it is used to generate large portions of work in domains where the user may not yet have full control. I started closer to the second, which carries obvious risks, especially when output outpaces understanding. But that’s also where the boundaries become visible. The important part is not where you start, but whether you are able to move along that spectrum intentionally.

## The risks are real — just not where people usually look

The risks around this are real, and they’re not just technical. Dependency is one of them, but not in the simplistic sense of “using the tool too much.” The more subtle risk is losing the ability to evaluate what the tool produces. There’s also a structural component: as adoption spreads, individual differentiation becomes harder, and productivity gains can be reinterpreted at the organizational level in ways that are not necessarily aligned with individual incentives. Ignoring AI doesn’t protect against that dynamic — it mostly delays your exposure to it.

## This only works because AI is not replacing anything (yet)

One point that tends to get flattened in these discussions is that AI is not always replacing something that already existed. In my case, it enabled access to a domain that I would not realistically have entered at this depth under normal constraints. That doesn’t remove the need for skill; it shifts how that skill is built and where it becomes visible. It also means that the boundary of who gets to participate in more complex layers of the stack is becoming more fluid, which has implications that go beyond individual workflows.

---

None of this is clean. The transition is uneven, the feedback loops are not fully understood, and the failure modes are still being discovered in real time. But waiting for clarity before engaging with it is, in itself, a decision — one that tends to position you on the receiving end of changes defined by others.

At this point, the question is less about whether AI should be part of the workflow, and more about whether you are structuring its use in a way that increases your control over time, or gradually giving that control away without noticing. The difference between those two paths is not visible at the beginning, but it compounds quickly.
