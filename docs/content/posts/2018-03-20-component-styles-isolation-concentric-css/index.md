---
title: 'Component styles isolation: Concentric CSS'
date: 2018-03-20
category: frontend
tags:
  - architecture
  - css
  - isolation
  - stylelint
  - workflow
excerpt: A thoughtful way to write CSS properties.
---

Alo! We are going to dive into another chapter towards great standards for frontend architecture. This is a continuation of the [Frontend Architecture](/category/frontend) series. If you didn't read yet, go checkout the first post about the subject: [Component styles isolation: Dealing with CSS inheritance](http://bernardodiasdacruz.com/2018/03/16/component-styles-isolation-dealing-with-css-inheritance/).

This time I'm going to cover a thoughtful way to write CSS code. Have you ever heard about "concentric CSS"? Nope? Yeah? It's all right, please bare with me. Let's get our heads into this concept and understand how this can bring our CSS skills (and code) to a higher level.

## CSS Matters

Before starting into this post's mojo, there's something I want to make it clear so we can go ahead. If you are willing to build great frontend applications, you should take CSS seriously. Don't neglect this language just because its something your interns can do. Alright? I'll provide some reasons, briefly, just to make sure we are on the same track. :)

The CSS language have one purpose: stylize the markup. Browsers reads selector by selector, property by property, and with many heavy engineering, paints the screen. The responsable for that task is the **Layout Engine**. We all know that data is the boss, right? And as long we are talking about web development, our data needs visual structure. Because the user and its experience have high expectations on that.

What matter most for a frontend architecture is to have good patterns, because a lot things can be writen in almost any way, with a good chance that just works. If the patterns are bad or insufficient, the development may suffer in the long run. What's important to have in mind: the CSS binds the HTML, the HTML binds the data. The HTML also represents the visual structure with help of CSS - or the other way around. The whole user experience depends on the visual structure. At the end of the day, doesn't matter much the JS library used to develop the application, the layout engine will have to deal with the HTML and CSS.

## The Concentric CSS

We get here, cool! I had to reinforce the CSS importance to make sure you understand the role that the language is playing on the scene. Also to keep in mind that the declarative nature of the CSS does require a lot of patterns and conventions in order to grow strong and stable.

<figure>
  <img alt="Concentric box model" src="/content/posts/2018-03-20-component-styles-isolation-concentric-css/concentric.png" />
  <figcaption>Borrow this image from Brandon Rhodes's post</figcaption>
</figure>

The "Concentric CSS" is something I learned a while ago. I got enlightened after reading this 2011 post by Brandon Rhodes: [Concentric CSS](http://rhodesmill.org/brandon/2011/concentric-css/). I was in the search of a good way to sort the properties in the code. Alphabetic? Box Model? Concentric? SMACSS? Whatever? Does that really matter?

Well, the sorting order of the properties doesn't really matter for the machine. It can cause some positive impact on the development ease, it's true. But without an automation tool to help, it can also take time and cause distraction. In this post I'm not going to cover how you configure Stylelint or your IDE to do the checks and automate the fixes. The setup of such tools is something I would be happy to explain on another time and let choices it open for your preferences. Just to make it clear again, patterns and conventions are a must to have, and automation tools are here to help keep the consistency.

### Styling Mindset

What hooked me about "Concentric CSS" was the line of thought. As a developer translating a graphic design into code, this concept kinda of catches a good styling mindset. Let's ignore the sorting order for properties on this post, and focus on thinking about HTML elements and the CSS properties in this way: from outside to inside.

When we start to think on the HTML elements and CSS properties in an organised way, we raise our comprehension of the big picture. The big picture is of huge importance, and at the same time we are developing components.

### Component Isolation

bla bla bla

layout, box, content. margins and paddings. alignment and positioning. flexbox and grid.
