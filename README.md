# React Basics

## Tutorials
 * 2016/02/25: Pratik Patel's [DevNexus 2015]
 * 2016/02/25: Facebook Seattle's [Introduction to React.js]

### Lessons
* React components use className, instead of class attribute. Read more at [JSX Gotchas].
* Word 'component' is hard to type.
* JSX tag name convention has lowercase built-in components and [capitalized custom components].
* As an exception, ARIA-attributes (custom HTML attributes) are rendered properly.
* React does not use data-binding but requires initial rendering, recursively returns one render function at different points in time to compare, and uses two pass rendering in which the string is generated first (user can see it more rapidly) and event handlers is attached later.

### Dependencies
 * isomorphic-hot-loader
 * 6to5
 * body-parser
 * chroma-js
 * compression
 * express
 * flux
 * fuzzy
 * react-bootstrap

[DevNexus 2015]: <https://www.youtube.com/watch?v=Ws84J61j8o0>
[JSX Gotchas]: <http://facebook.github.io/react/docs/jsx-gotchas.html>
[capitalized custom components]: <http://stackoverflow.com/questions/33259112/why-do-components-in-react-need-to-be-capitalized>
[Introduction to React.js]: <https://www.youtube.com/watch?v=XxVg_s8xAms>
[Building UIs]: https://www.youtube.com/watch?v=lAn7GVoGlKU
[Midwest JS]: https://www.youtube.com/watch?v=zGNQaDhg94g
[FB Login]: https://developers.facebook.com/docs/facebook-login/web