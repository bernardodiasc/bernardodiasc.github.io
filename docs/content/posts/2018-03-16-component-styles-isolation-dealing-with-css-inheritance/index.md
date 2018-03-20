---
title: Component styles isolation, dealing with CSS inheritance
date: 2018-03-16
category: frontend
tags:
  - architecture
  - css
  - isolation
  - inheritance
  - postcss
  - composes
  - react
  - css-modules
excerpt: How to ensure visual consistency with UI components usages.
---

Hello there! This is the first post in the new category [Frontend Architecture](/category/frontend), where I plan to describe many cool methodologies and techniques for large-scale frontend apps. Let's get started!

In this post, I'll tell you how to deal with unpredictable styles issues that happen in large-scale projects. Our goal is to create bulletproof UI components making the CSS to act predictably by taking advantage of native mechanisms of language!

## A little bit of introduction on modularization

In the modern age of frontend development, all attention turns into components, why is that? To put simply, one important rule of scaling projects, in regard to CSS, is the ability to remove code. Scaling frontend apps is not just about getting bigger but also about getting rid of deprecated code. To deal with that, developers started to focus on the development of components, instead of, for instance, pages.

A component is a piece of code that has its code isolated from the rest of the app. The component can have pieces of HTML, CSS, and JS. Historically, these languages had many limitations that prevented this approach. Now, an age has passed and things evolved quite a lot. What we needed all this time is to make the code modular, i.e. splitting the code into many parts that can then be assembled together on demand and in a way that doesn't harm performance or our sanity at all.

For HTML, templating has been available in XSLT since 2001 — not to even mention the server-side languages that allowed us to assemble the markup the way we wanted. Developers then noticed the chaos that mixing data management with templating could become. At that point, many MVC frameworks came to offer good separation of concerns and template engines popped up in batches for the view part. The developer could pick what works better for a server-side rendered project. I promise to go further on template engines in another post ;)

Before going to CSS, let me briefly comment about client-side JS modules (also something that deserves its own post). I would recommend that you read [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](https://addyosmani.com/writing-modular-js/). It's a great explanation of modular JavaScript. TL;DR: browsers, at the time of this post, still don't widely support dynamic imports, thus many methods and tools were created to provide ways to do that, so we could have our JS pieces separated from each other and at the same time working well when put to run together.

In CSS, we've had the `@import` rule since CSS Level 1, in other words, since the beginning of the language. We could also include many `<link>` tags in our HTML to load individually each CSS piece. However, both approaches have some big concerns regarding performance. I'm not going into details of this so I can get back to the topic quickly, but things evolved and will be changing soon with HTTP/2 already knocking on the door. If you want to know more about this, I recommend reading this 2009 post: [don’t use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/) and also this 2016 post: [The future of loading CSS](https://jakearchibald.com/2016/link-in-body/).

The point is, components are separated pieces of code, that can be written in a variety of languages and ways, but at the end, they will return HTML, CSS, and JS.

## CSS Cascading and Inheritance

All right, now that we've covered the concept of modularization in frontend code, let's get into some mechanisms of the CSS language: cascading and inheritance.

Cascading is an important aspect of CSS (yeah, CSS is an acronym for _Cascading Style Sheets_). "Cascading" indicates the order that styles are applied in. It will be affected by:

1. Importance
2. Specificity
3. Source order

Having the "cascading" in mind and knowing that some styles can override others based on cascading, the other mechanism that relates to this is the inheritance. Inheritance means that some elements can inherit styles from parents even without explicit declaration. However, the inheritance effect does not apply to all CSS properties.

As an example, `font-family` and `color` are automatically inherited; this makes styling easier since one can define the base values for these properties in the `<html>`, and all children elements will get same styles applied by default. The cascading mechanism will allow overriding specific elements (and it's children) when needed.

On another hand, `margin`, `padding`, `border`, and `background` are not inherited by default. Imagine the trouble to create styles if those properties get inherited by all the children elements... In any case, if you need to apply inheritance for a specific property in an element, there is the CSS keyword `inherit`.

Many further details about all of that can be read here:

- [About Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- [Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [Inheritance mechanism](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)
- [inherit keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit)

## Component Styles Isolation

Now that we've advanced our comprehension of components, modularization, CSS cascading and inheritance, let's see how to deal with CSS in modern frontend development. I'm not going to propose the ultimate way to do your code, but rather an overall understanding of the problem that we need to deal with on large-scale modular projects and, of course, some different approaches that helps to deal with that.

### The problem

We are talking about modular code and talking about UI components. One can develop an app without caring about isolation, but that's the opposite of taking advantage of modern methodologies. To make the best of it, UI components need to be developed in isolation! That means developing the parts outside the app and later jumping on the integration of the parts.

The main problem in this approach is that sometimes, during the app implementation, when applying UI components in different parts of the app or maybe in different apps, the result is different than expected, different than what it looked like on the isolated platform. This is not uncommon on big projects, especially when UI components are used across many different apps; if the inheritable properties are forgotten, unexpected things can happen.

### The solution

There are many approaches to solve this problem and it will vary depending on your technology stack.

On a big project I helped to develop, we used PostCSS with CSS-Modules in a React code base. That allowed us to create a CSS object called `component`. In this object, we set some styling reset properties, such as `font-family`, `font-size`, `color`, and others that do inheritance by default. These reset values were based on CSS Variables, and they could even differ from app to app.

This is what we did:

```
/**
 *
 * Component isolation
 *
 * Usage:
 *
 * @value component from theme('objects.isolation.css');
 *
 * .componentname {
 *   composes: component;
 * }
 *
 */

.component {
  display: block;
  box-sizing: border-box;
  font-family: var(--typographyFamilySansserif);
  font-size: var(--typographySizeNormal);
  font-weight: var(--typographyWeightNormal);
  /* etc... */
}
```

One important aspect of that approach was in the CSS output. By choosing CSS-Modules `composes`, we had a single class declaration in the CSS output. This meant that increasing the number of isolated components would not result in a larger quantity of CSS regarding isolation styles. Also, we choose the ITCSS approach for the source order. This means the `objects.isolation.css` classes came before all the component classes in the source order, so overrides worked flawlessly.

The idea is fairly simple, as long your `.component` class is declared early on CSS output, you can have same effect with plain CSS by just including the class in the HTML tag:

```html
<section class="component">
  <p>This component have its inheritable styles isolated from the application.</p>
</section>
```

I mentioned that I wasn't going to tell you the ultimate way to deal with styles isolation because, as you may noticed in the examples above, it's only reseting the component root and not all children elements. But that would've been perfectly possible with the same technique. I think its fine to only reset the component root and then take advantage of native CSS inheritance for the children elements.

One other technique I've read about recently that I really enjoyed can be found in this Yelp post: [CSS in the Age of React: How We Traded the Cascade for Consistency](https://engineeringblog.yelp.com/2018/03/css-in-the-age-of-react.html). I'd recommend you to take a look at their [Lemon Reset](https://github.com/Yelp/lemon-reset) set of React components too. In this case they are using reset for all elements in a very interesting way.

## Bulletproof Components!

That's pretty cool, right? One big problem with large CSS codebases is the unpredictability. Believe me, this problem can result in a ton of wasted money because it can make developers waste too many time searching and fixing bugs and regressions, things that might not even had to happen at first.

Going for a consistent approach in the frontend architecture allows the project to resiliently scale. Each new component included will be well isolated, and these wicked CSS bugs will be avoided for good. Styles isolation is the first step to build bulletproof UI components!
