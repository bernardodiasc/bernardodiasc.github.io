# Stylesheets

Plain standard CSS as possible.

Low specificity selectors named with BEM pattern.

## Bundler

Use `npm run bundle-css` to bundle minified.

> This will not publish new changes, for that you need to run `npm run copy-statics` after the bundle. Or just use `npm run build-statics` instead.

- https://github.com/postcss/postcss
- https://www.npmjs.com/package/postcss-cli
- https://github.com/stylelint/stylelint

## Stylesheets structure

Based on [ITCSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf)

- Settings: Global variables, config switches;
- Tools: Default mixins and functions;
- Generic: Ground-zero styles;
- Base: Unclassed HTML elements;
- Objects: Cosmetic-free design patterns;
- Components: Designed components, chunks of UI;
- Custom overrides as Themes, Tests, Helpers, etc;

## Responsiveness

Mobile-first approach. This means properties are for `< 768px` by default and then media queries are used to override different ranges.

### Breakpoints

- **Mobile** `< 768px`
- **Tablet** `>= 768px & < 1024px`
- **Notebook** `>= 1024px & < 1680px`
- **Desktop** `>= 1680px`

### Media queries:

```
Mobile only
@media only screen and (max-width: 767px) {}

Tablet and biggers
@media only screen and (min-width: 768px) {}

Tablet and smalers
@media only screen and (max-width: 1023px) {}

Tablet only
@media only screen and (min-width: 768px) and (max-width: 1023px) {}

Notebook and biggers
@media only screen and (min-width: 1024px) {}

Notebook and smalers
@media only screen and (max-width: 1679px) {}

Notebook only
@media only screen and (min-width: 1024px) and (max-width: 1679px) {}

Desktop only
@media only screen and (min-width: 1680px) {}
```
