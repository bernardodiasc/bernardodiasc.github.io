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

Hello there! This is the first post in the new category [Frontend architecture](/category/frontend), where I plan to describe many cool methodologies and techniques for large-scale frontend apps. Let's get started!

In this post, I'll tell you how to deal with unexpected styles that happen in large-scale modular projects by making then expected taking advance of native mechanisms of CSS!

## A little bit of introduction on modularization

In the modern age of frontend development, all attention turns into components, why is that? To put simply, one important rule of scaling projects, mostly when talking about CSS, is the ability to remove code. Scaling frontend apps is not just about getting bigger, but it's a lot about getting rid off deprecated code. And to deal with that, developers started to focus on the development of components, instead of, for instance, pages.

A component is a piece of code that has its code isolated from the rest of the app. The component can have pieces of HTML, CSS, and JS. Historically these languages had a lot limitation to accomplish this approach, the good thing is that an age has passed and things evolved quite a lot. What we needed all this time is to make the code modular, basically splitting the code into many parts that can then be assembled together on demand, and in a way that doesn't harm performance or doesn't cost our sanity at all.

For the HTML, we had templating approach already available in XSLT since 2001. Not to mention server-side languages that allowed us to assemble the markup the way we wanted. Many developers then noticed the chaos that mixing data management with templating could become. At that point many MVC frameworks came to offer good separation of concerns and template engines popped up in batches for the view part, the developer could pick what works better for the server-side rendered project. I promise to go further on that in another post ;)

Before going to CSS, that is the point of this post, let me briefly comment about the client-side modules JS (also something that deserves its own post). On this subject I would recommend this reading https://addyosmani.com/writing-modular-js/, it's quite great explanation of modular JavaScript. TL;DR: browsers, at the time of this post, still don't widely support dynamic imports, then many methods and toolings were created to provide ways to do that, so we could have our JS pieces separated from each other and at the same time working well when put to run together.

For the CSS, we had `@import` rule since CSS Level 1, in other words, since the beginning of the language. We could also include many `<link>` tags in our HTML and load individually each CSS piece. But both approaches have some big concerns regarding page loading. I'm not going into details of this so I can get back to the topic quickly, but things evolved and will be changing soon with HTTP/2 already knowing in the door. If you want to know more about this I recommend reading this 2009 post http://www.stevesouders.com/blog/2009/04/09/dont-use-import/ and also this 2016 post https://jakearchibald.com/2016/link-in-body/.

The point is, components are separated pieces of code, that can be written in a variety of languages and ways, but at the end, they will return HTML, CSS, and JS.

## CSS Cascading and Inheritance

Alright, now that we covered the concept of modularization in frontend code, let's get into some mechanisms of the CSS language: cascading and inheritance.

Cascading is an important aspect of CSS (yeah, CSS is an acronym for _Cascading Style Sheets_). This is basically indicated the order that styles are applied. It will be affected by:

1. Importance
2. Specificity
3. Source order

Having the cascading in mind and knowing that some styles can override others based on cascading, the other mechanism that relates to this is the inheritance. Inheritance means that some elements can inherit styles from parents even without explicit declaration. But inheritance effect does not apply to all CSS properties.

As an example, `font-family` and `color` are automatically inherited, this makes styling easier since it can define the base values for these properties in the `<html>` and all children elements will get same styles applied by default. The cascading mechanism will allow overriding specific elements (and it's children) when needed.

On another hand, `margin`, `padding`, `border` and `background` are not inherited by default. Imagine the trouble to create styles if those properties get inherited by all it's children elements... In any case, if needing to apply inheritance for a specific property in an element, there is the CSS keyword `inherit`.

Many further details about all of that can be read here:

- [About Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- [Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [Inheritance mechanism](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)
- [inherit keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit)

## Component styles isolation

Now that we've advanced our comprehension of components, modularization, CSS cascading and inheritance, let's see how to deal with CSS on modern frontend development. I'm not going to propose the ultimate way to do your code, but rather an overall understanding of the problem that we need to deal on large-scale modular projects and, of course, some different approaches that helps to deal with that.

### The problem

We are talking about modular code and talking about UI components. One can develop an app without caring on isolation, but that's not going to help taking advance of modern methodologies. To take the best of it, UI components need to be developed in isolation! That means developing the parts outside the app and later jump on the integration of the parts.

The main problem in this approach is that sometimes, during the app implementation, when applying UI components in different parts of the app, or maybe in different apps, the visual return something different than expected, different from what looked like in the isolated platform. This is not uncomon on big projects, specially when UI components are used across many different apps, if the inheritable properties are forgoten, unexpected things can happen.

### The solution

There are many approaches to solve this problem and it will vary depending on your technology stack.

On a big project I helped to develop, we used PostCSS with CSS-Modules in a React code base, that allowed us to create a CSS object called `component`, in this object we set some styling reset properties, as `font-family`, `font-size`, `color`, and others that do inheritance by default. These reset values were based on CSS Variables, and although that CSS Variables had default generic values to fallback, they could differ from app to app.

This is how we used:

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

One important aspect of that approach was in the CSS output. By choosing CSS-Modules `composes` we had a single class declaration in the CSS output, meant that increasing the number of isolated components would not result in increasing size of the CSS in the matter of the isolation styles. Also, we choose ITCSS approach to for the source order, this means the `objects.isolation.css` classes was before all the component classes in the source orders, so overrides worked flawlessly.

I mentioned that wasn't going to tell you the ultimate way to deal with styles isolation because, as you may notice on my approach, we choose to reset only the component wrapper and not all it's children elements. That would be perfectly possible with the same technique, we simply decided to keep it simple and take advance of inheritance inside components and reset just in the component level.

One other technique I've read recently that I really enjoy can be read in this Yelp post [CSS in the Age of React: How We Traded the Cascade for Consistency](https://engineeringblog.yelp.com/2018/03/css-in-the-age-of-react.html), I'd recommend you to take a look at their [Lemon Reset](https://github.com/Yelp/lemon-reset) set of React components too.

## Conclusion

That's pretty cool, right? One big problem with large CSS code bases is the unpredictability. Believe me, this problem can result in a ton of wasted money because can make developers waste too many hours searching for bugs, bugs that might not even happen at first.

Going for a consistent approach in the frontend architecture allows the project to resiliently scale, each new component included will be surely isolated and these wicked CSS bugs will be avoided for good.

I hope you have enjoyed this post, and if you have different ideas to deal with styles isolation or anything else to say, please comment below! :)
